import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

interface ContactData {
  name: string;
  company: string;
  email: string;
  phone?: string;
  projectDescription: string;
  budget?: string;
  timeline?: string;
}

export async function POST(request: NextRequest) {
  try {
    const data: ContactData = await request.json();

    // Validar dados obrigatórios
    if (!data.name || !data.company || !data.email || !data.projectDescription) {
      return NextResponse.json(
        { error: 'Dados obrigatórios faltando' },
        { status: 400 }
      );
    }

    // Validar email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      return NextResponse.json(
        { error: 'Email inválido' },
        { status: 400 }
      );
    }

    // Formatar email para o designer
    const designerEmailContent = `
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>Novo Contato - Designer Page</title>
    <style>
      body {
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        line-height: 1.6;
        color: #333;
      }
      .container {
        max-width: 600px;
        margin: 0 auto;
        padding: 20px;
        background-color: #f8f8f8;
        border-radius: 8px;
      }
      .header {
        background-color: #0f0f0f;
        color: white;
        padding: 20px;
        border-radius: 8px 8px 0 0;
      }
      .content {
        background-color: white;
        padding: 20px;
        border-radius: 0 0 8px 8px;
      }
      .field {
        margin-bottom: 16px;
      }
      .label {
        font-weight: 600;
        color: #0f0f0f;
        display: block;
        margin-bottom: 4px;
      }
      .value {
        color: #666;
        padding: 8px;
        background-color: #f0f0f0;
        border-left: 3px solid #06b6d4;
        border-radius: 4px;
      }
      .divider {
        border-top: 1px solid #e0e0e0;
        margin: 20px 0;
      }
    </style>
  </head>
  <body>
    <div class="container">
      <div class="header">
        <h1>📧 Novo Contato Recebido</h1>
      </div>
      <div class="content">
        <div class="field">
          <span class="label">Nome do Cliente</span>
          <div class="value">${data.name}</div>
        </div>

        <div class="field">
          <span class="label">Empresa</span>
          <div class="value">${data.company}</div>
        </div>

        <div class="field">
          <span class="label">Email</span>
          <div class="value"><a href="mailto:${data.email}">${data.email}</a></div>
        </div>

        ${
          data.phone
            ? `
        <div class="field">
          <span class="label">Telefone</span>
          <div class="value">${data.phone}</div>
        </div>
        `
            : ''
        }

        <div class="divider"></div>

        <div class="field">
          <span class="label">Descrição do Projeto</span>
          <div class="value">${data.projectDescription.replace(/\n/g, '<br>')}</div>
        </div>

        ${
          data.budget
            ? `
        <div class="field">
          <span class="label">Orçamento</span>
          <div class="value">${data.budget}</div>
        </div>
        `
            : ''
        }

        ${
          data.timeline
            ? `
        <div class="field">
          <span class="label">Timeline Esperado</span>
          <div class="value">${data.timeline}</div>
        </div>
        `
            : ''
        }

        <div class="divider"></div>
        <p style="color: #999; font-size: 12px;">
          Este contato foi enviado através do formulário de contato da sua landing page.
        </p>
      </div>
    </div>
  </body>
</html>
    `;

    // Enviar email para o designer
    await resend.emails.send({
      from: 'Contato <onboarding@resend.dev>',
      to: 'mateus.camphos2000@gmail.com',
      replyTo: data.email,
      subject: `Novo Contato: ${data.name} - ${data.company}`,
      html: designerEmailContent,
    });

    // Email de confirmação para o cliente
    const clientEmailContent = `
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>Contato Recebido</title>
    <style>
      body {
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        line-height: 1.6;
        color: #333;
      }
      .container {
        max-width: 600px;
        margin: 0 auto;
        padding: 20px;
      }
      .header {
        background-color: #0f0f0f;
        color: white;
        padding: 20px;
        border-radius: 8px;
        text-align: center;
      }
      .content {
        background-color: #f8f8f8;
        padding: 20px;
        border-radius: 8px;
        margin-top: 20px;
      }
      .cta-button {
        display: inline-block;
        background-color: #06b6d4;
        color: white;
        padding: 12px 24px;
        border-radius: 6px;
        text-decoration: none;
        margin-top: 16px;
      }
    </style>
  </head>
  <body>
    <div class="container">
      <div class="header">
        <h1>Obrigado, ${data.name.split(' ')[0]}! ✨</h1>
        <p>Seu contato foi recebido com sucesso</p>
      </div>
      <div class="content">
        <p>Olá ${data.name},</p>
        <p>Recebemos suas informações sobre seu projeto para <strong>${data.company}</strong> e nossa equipe de design já está analisando sua solicitação.</p>
        <p>Você receberá um email em breve com um orçamento personalizado e próximas etapas.</p>
        <p style="margin-top: 24px; color: #666;">
          <strong>Tempo de resposta esperado:</strong> 24-48 horas
        </p>
        <p style="margin-top: 24px; color: #999; font-size: 14px;">
          Dúvidas? Responda este email e nossa equipe entrará em contato.
        </p>
      </div>
    </div>
  </body>
</html>
    `;

    // Enviar confirmação para o cliente
    await resend.emails.send({
      from: 'Designer Page <onboarding@resend.dev>',
      to: data.email,
      subject: 'Contato Recebido - Designer Page',
      html: clientEmailContent,
    });

    return NextResponse.json(
      {
        success: true,
        message: 'Contato enviado com sucesso!',
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Erro ao enviar email:', error);
    return NextResponse.json(
      { error: 'Erro ao enviar contato. Tente novamente mais tarde.' },
      { status: 500 }
    );
  }
}
