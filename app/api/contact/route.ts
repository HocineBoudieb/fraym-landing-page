import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const { name, email, message } = await request.json()

    // Validation des données
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Tous les champs sont requis' },
        { status: 400 }
      )
    }

    // Validation de l'email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Email invalide' },
        { status: 400 }
      )
    }

    // Ici vous pouvez intégrer votre service d'email préféré :
    // - EmailJS
    // - SendGrid
    // - Nodemailer
    // - Resend
    // - etc.

    // Exemple avec un service d'email (à remplacer par votre configuration)
    const emailData = {
      to: 'contact@fraym.com', // Votre email de réception
      from: email,
      subject: `Nouveau message de ${name} - Site Fraym`,
      html: `
        <h2>Nouveau message depuis le site Fraym</h2>
        <p><strong>Nom:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
        <hr>
        <p><small>Message envoyé depuis le formulaire de contact du site Fraym</small></p>
      `
    }

    // Simulation d'envoi d'email (remplacez par votre service)
    console.log('Email à envoyer:', emailData)
    
    // Pour l'instant, on simule un succès
    // Dans un vrai projet, vous appelleriez votre service d'email ici
    
    // Exemple avec SendGrid :
    // const sgMail = require('@sendgrid/mail')
    // sgMail.setApiKey(process.env.SENDGRID_API_KEY)
    // await sgMail.send(emailData)

    // Exemple avec Resend :
    // const resend = new Resend(process.env.RESEND_API_KEY)
    // await resend.emails.send(emailData)

    return NextResponse.json(
      { message: 'Message envoyé avec succès' },
      { status: 200 }
    )

  } catch (error) {
    console.error('Erreur lors de l\'envoi du message:', error)
    return NextResponse.json(
      { error: 'Erreur interne du serveur' },
      { status: 500 }
    )
  }
}