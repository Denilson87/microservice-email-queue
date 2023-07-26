const MailQueue = require("../queue/MailQueue");

async function sendEmail(request, reply){
    const {
        email,
        firstName,
        lastName
    } = request.body

    const template = `
        Olá ${firstName} ${lastName}, sua assinatura foi confirmada!
        Para acessar seus recursos exclusivos você precisa basta clicar aqui.
    `

    try {
        await MailQueue.add({
            to: email,
            from: process.env.EMAIL_FROM,
            subject: "Assinatura Confirmada",
            text: template
        })
        return reply.code(200).send();
    } catch {
        return reply.code(500).send("Internal Server Error");
    }
}


async function ScheduleSend(request, reply){

    const {
    emails
      DateMeeting,
      TimeMeeting,
      firstNames,
      localMeeting
    } = request.body

    const schedule = `Prezados, espero que estejam todos bem, informa-se aos senhores ${firstNames} que no ${DateMeeting} 
    teremos um encontro no ${localMeeting} apartir das ${TimeMeeting} obrigado. `


    try {
        await MailQueue.add{(
            to: emails,
            from: process.env.EMAIL_FROM,
            subject: "Agendamento do encontro",
            text: schedule
        )}
        return reply.code(201).send();

    } catch (error) {
        return reply.code(500).send("Internal Server Error");

    }
}


module.exports = {
    sendEmail
}
