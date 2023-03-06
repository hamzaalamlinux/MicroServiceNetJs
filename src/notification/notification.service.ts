import { Injectable, Res } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';
import * as Handlebars from 'handlebars';
import * as ClickSend from 'clicksend';
import { Response } from 'express';
import * as fs from 'fs';
import { Model } from "mongoose";
import { InjectModel } from '@nestjs/mongoose/dist/common';
import { ILogs } from 'src/Interface/logs.interface';

@Injectable()
export class NotificationService {
    private readonly clicksendClient: ClickSend.TransactionalEmailApi;
   
    constructor(private readonly mailerService: MailerService , @InjectModel('Logs') private LogsModel:Model<ILogs>) {
        this.clicksendClient = new ClickSend.TransactionalEmailApi(
            'info@grubdirect.co.uk',
            '2545F418-B207-54E7-538E-34E1112762F0',
        );
    }
    

    async sendEmail(to: string, subject: string,  data: any, reciptname: string , theme : string) {
        var emailRecipient = new ClickSend.EmailRecipient();
        const templates = Handlebars.compile(
            await fs.promises.readFile(`src/notification/EmailTemplate/${theme}`, 'utf-8')
        );


       
        const total = parseFloat(data.orderMetadata.subtotal) + parseFloat(data.orderMetadata.deliveryCharge
        ) + parseFloat(data.orderMetadata.discount) + parseFloat(data.orderMetadata.bagFee) + parseFloat(data.orderMetadata.serviceFee);

        const html = templates({
            data: data,
            total: total.toFixed(2)
        });

        emailRecipient.email = to;
        emailRecipient.name = reciptname;

        var emailFrom = new ClickSend.EmailFrom();

        emailFrom.emailAddressId = '25448';
        emailFrom.name = reciptname;

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
