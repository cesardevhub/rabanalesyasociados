import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
	try {
		if (!process.env.RESEND_API_KEY || !process.env.RESEND_EMAIL_TO) {
			return NextResponse.json(
				{ error: "El servicio de correo no está configurado." },
				{ status: 500 },
			);
		}

		const { name, email, company, subject, message } = await req.json();

		if (!name || !email || !message) {
			return NextResponse.json(
				{ error: "Nombre, correo y mensaje son requeridos." },
				{ status: 400 },
			);
		}

		const fromEmail = `${process.env.RESEND_FROM_NAME} <${process.env.RESEND_FROM_EMAIL}>`;

		const response = await resend.emails.send({
			from: fromEmail,
			to: [`${process.env.RESEND_EMAIL_TO}`],
			subject: "Nuevo prospecto registrado",
			html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; border: 1px solid #e2e8f0; border-radius: 12px;">
          <h2 style="color: #004a87; margin-bottom: 24px;">Nuevo prospecto registrado</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px 0; color: #64748b; font-size: 13px; width: 140px; font-weight: bold;">Nombre:</td>
              <td style="padding: 8px 0; color: #1a2b3c;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #64748b; font-size: 13px; font-weight: bold;">Correo:</td>
              <td style="padding: 8px 0; color: #1a2b3c;">${email}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #64748b; font-size: 13px; font-weight: bold;">Empresa:</td>
              <td style="padding: 8px 0; color: #1a2b3c;">${company || "No especificada"}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #64748b; font-size: 13px; font-weight: bold;">Asunto:</td>
              <td style="padding: 8px 0; color: #1a2b3c;">${subject || "No especificado"}</td>
            </tr>
          </table>
          <div style="margin-top: 24px; padding: 16px; background-color: #f8fafc">
            <p style="color: #64748b; font-size: 13px; font-weight: bold; margin-bottom: 8px;">Mensaje:</p>
            <p style="color: #1a2b3c; white-space: pre-line; margin: 0;">${message}</p>
          </div>
        </div>
      `,
		});

		if (response.error?.statusCode && response.error?.statusCode != 200) {
			return NextResponse.error();
		}

		return NextResponse.json({ success: true });
	} catch (error) {
		console.error("Error enviando correo:", error);
		return NextResponse.json(
			{ error: "Error interno del servidor." },
			{ status: 500 },
		);
	}
}
