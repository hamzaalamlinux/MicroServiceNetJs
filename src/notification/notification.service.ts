import { Injectable, Res } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';
import * as Handlebars from 'handlebars';
import * as ClickSend from 'clicksend';
import { Response } from 'express';
import * as fs from 'fs';


@Injectable()
export class NotificationService {
    private readonly clicksendClient: ClickSend.TransactionalEmailApi;

    constructor(private readonly mailerService: MailerService) {
        this.clicksendClient = new ClickSend.TransactionalEmailApi(
            'info@grubdirect.co.uk',
            '2545F418-B207-54E7-538E-34E1112762F0',
        );
    }

    async sendEmail(to: string, subject: string, template: string, data: any, reciptname: string , theme : string) {
        var emailRecipient = new ClickSend.EmailRecipient();
        // const html = Handlebars.compile(template)(data);
        // const mailOptions = {
        //     to,
        //     subject,
        //     html,
        // };
        // await this.mailerService.sendMail(mailOptions);
        // read the HTML template file
        // const templates = fs.readFileSync('src/notification/PlacedOrder.html', 'utf8');
        const title = 'My Page';
        const heading = 'My Heading';


        const templates = Handlebars.compile(
            await fs.promises.readFile(`src/notification/EmailTemplate/${theme}`, 'utf-8')
        );

        const total = parseFloat(data.orderMetadata.subtotal) + parseFloat(data.orderMetadata.deliveryCharge
        ) + parseFloat(data.orderMetadata.discount) + parseFloat(data.orderMetadata.bagFee) + parseFloat(data.orderMetadata.serviceFee);


        const html = templates({
            title: title,
            heading: heading,
            data: data,
            total: total.toFixed(2)
        });

        emailRecipient.email = to;
        emailRecipient.name = reciptname;

        var emailFrom = new ClickSend.EmailFrom();

        emailFrom.emailAddressId = '25448';
        emailFrom.name = "john";

        // var attachment = new ClickSend.Attachment();

        // attachment.content = "ZmlsZSBjb250ZW50cw==";
        // attachment.type = "text/plain";
        // attachment.filename = "text.txt";
        // attachment.disposition = "attachment";
        // attachment.contentId = "text";

        var email = new ClickSend.Email();

        email.to = [emailRecipient];
        email.cc = [emailRecipient];
        email.bcc = [emailRecipient];
        email.from = emailFrom;
        email.subject = subject;
        email.body = html;

        await this.clicksendClient.emailSendPost(email);
    }

    async sendSMS(to: string, message: string) {
        const smsMessage = new ClickSend.SmsMessage();
        smsMessage.from = "+923181162186";
        smsMessage.to = "+923181162186";
        smsMessage.body = "test message";
        var smsApi = new ClickSend.SMSApi("info@grubdirect.co.uk", "2545F418-B207-54E7-538E-34E1112762F0");
        var smsCollection = new ClickSend.SmsMessageCollection();
        smsCollection.messages = [smsMessage];
        await smsApi.smsSendPost(smsCollection)
    }
}
