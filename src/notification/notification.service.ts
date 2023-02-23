import { Injectable } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';
import * as Handlebars from 'handlebars';
import * as ClickSend from 'clicksend';

@Injectable()
export class NotificationService {
    private readonly clicksendClient: ClickSend.TransactionalEmailApi;

    constructor(private readonly mailerService: MailerService) {
        this.clicksendClient = new ClickSend.TransactionalEmailApi(
            'info@grubdirect.co.uk',
            '2545F418-B207-54E7-538E-34E1112762F0',
        );
    }

    async sendEmail(to: string, subject: string, template: string, data: any) {
        var emailRecipient = new ClickSend.EmailRecipient();
        // const html = Handlebars.compile(template)(data);
        // const mailOptions = {
        //     to,
        //     subject,
        //     html,
        // };
        // await this.mailerService.sendMail(mailOptions);

        emailRecipient.email = "alamhamza873@gmail.com";
        emailRecipient.name = "John doe";

        var emailFrom = new ClickSend.EmailFrom();

        emailFrom.emailAddressId = '25448';
        emailFrom.name = "john";

        var attachment = new ClickSend.Attachment();

        attachment.content = "ZmlsZSBjb250ZW50cw==";
        attachment.type = "text/plain";
        attachment.filename = "text.txt";
        attachment.disposition = "attachment";
        attachment.contentId = "text";

        var email = new ClickSend.Email();

        email.to = [emailRecipient];
        email.cc = [emailRecipient];
        email.bcc = [emailRecipient];
        email.from = emailFrom;
        email.subject = subject;
        email.body = `<html>

        <head>
          <meta charset="UTF-8">
          <meta content="width=device-width, initial-scale=1" name="viewport">
          <meta name="x-apple-disable-message-reformatting">
          <meta http-equiv="X-UA-Compatible" content="IE=edge">
          <meta content="telephone=no" name="format-detection">
          <title>Order_Confirmation_Delivery_NOT_PAID</title><!--[if (mso 16)]>
            <style type="text/css">
            a {text-decoration: none;}
            </style>
            <![endif]--><!--[if gte mso 9]><style>sup { font-size: 100% !important; }</style><![endif]--><!--[if gte mso 9]>
        <xml>
            <o:OfficeDocumentSettings>
            <o:AllowPNG></o:AllowPNG>
            <o:PixelsPerInch>96</o:PixelsPerInch>
            </o:OfficeDocumentSettings>
        </xml>
        <![endif]--><!--[if !mso]><!-- -->
          <link href="https://fonts.googleapis.com/css2?family=Fredoka+One&amp;display=swap" rel="stylesheet">
          <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@600&amp;display=swap" rel="stylesheet">
          <!--<![endif]-->
        
        </head>
        
        <body data-new-gr-c-s-loaded="14.1088.0"
          style="width:100%;font-family:arial, 'helvetica neue', helvetica, sans-serif;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;padding:0;Margin:0">
          <div class="es-wrapper-color" style="background-color:#F5F5F5"><!--[if gte mso 9]>
                    <v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="t">
                        <v:fill type="tile" color="#f5f5f5"></v:fill>
                    </v:background>
                <![endif]-->
            <table class="es-wrapper" width="100%" cellspacing="0" cellpadding="0"
              style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;padding:0;Margin:0;width:100%;height:100%;background-repeat:repeat;background-position:center top;background-color:#F5F5F5">
              <tbody>
                <tr>
                  <td valign="top" style="padding:0;Margin:0">
                    <table cellpadding="0" cellspacing="0" class="es-header" align="center"
                      style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%;background-color:transparent;background-repeat:repeat;background-position:center top">
                      <tbody>
                        <tr>
                          <td align="center" style="padding:0;Margin:0">
                            <table bgcolor="#ffffff" class="es-header-body" align="center" cellpadding="0" cellspacing="0"
                              style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#FFFFFF;width:600px">
                              <tbody>
                                <tr>
                                  <td align="left"
                                    style="padding:0;Margin:0;padding-top:20px;padding-left:20px;padding-right:20px">
                                    <table cellpadding="0" cellspacing="0" width="100%"
                                      style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                      <tbody>
                                        <tr>
                                          <td align="center" valign="top" style="padding:0;Margin:0;width:560px">
                                            <table cellpadding="0" cellspacing="0" width="100%" role="presentation"
                                              style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                              <tbody>
                                                <tr>
                                                  <td align="center"
                                                    style="padding:0;Margin:0;padding-top:10px;padding-bottom:10px">
                                                    <p
                                                      style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:Nunito, Roboto, sans-serif;line-height:48px;color:#0F181A;font-size:32px">
                                                      <u><em><span style="color:#8B4513">Koshi&nbsp;</span>Nepalese &amp; Indian
                                                          Restaurant</em></u>
                                                    </p>
                                                  </td>
                                                </tr>
                                              </tbody>
                                            </table>
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <table class="es-content" cellspacing="0" cellpadding="0" align="center"
                      style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%">
                      <tbody>
                        <tr>
                          <td align="center" style="padding:0;Margin:0">
                            <table class="es-content-body"
                              style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#ffffff;width:600px"
                              cellspacing="0" cellpadding="0" bgcolor="#ffffff" align="center">
                              <tbody>
                                <tr>
                                  <td class="es-m-p20r" align="left"
                                    style="padding:0;Margin:0;padding-left:20px;padding-top:30px;padding-bottom:40px">
                                    <!--[if mso]><table style="width:580px" cellpadding="0" cellspacing="0"><tr><td style="width:580px" valign="top"><![endif]-->
                                    <table cellspacing="0" cellpadding="0" align="left" class="es-left"
                                      style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:left">
                                      <tbody>
                                        <tr class="es-mobile-hidden"></tr>
                                      </tbody>
                                    </table><!--[if mso]></td><td width="undefined" valign="top"><![endif]-->
                                    <table cellpadding="0" cellspacing="0" class="es-left" align="left" width="100%"
                                      style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:left">
                                      <tbody>
                                        <tr>
                                          <td align="left" style="padding:0;Margin:0;width:580px">
                                            <table cellpadding="0" cellspacing="0" width="100%" role="presentation"
                                              style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                              <tbody>
                                                <tr>
                                                  <td align="center" style="padding:0;Margin:0;font-size:0px"><a target="_blank"
                                                      href="https://viewstripo.email"
                                                      style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:underline;color:#F1BA0A;font-size:14px"><img
                                                        src="https://mfbsbn.stripocdn.email/content/guids/CABINET_c9d012bc56ea930554b6184970a54bf6b67ef28c1411113c79fcc405fcaf048a/images/fooddeliveryfooddeliverymealorder256.png"
                                                        alt=""
                                                        style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic"
                                                        width="200"></a></td>
                                                </tr>
                                                <tr>
                                                  <td align="center" class="es-m-p30t es-m-txt-c"
                                                    style="padding:0;Margin:0;padding-top:20px">
                                                    <h1
                                                      style="Margin:0;line-height:36px;mso-line-height-rule:exactly;font-family:'Fredoka One', helvetica, arial, sans-serif;font-size:30px;font-style:normal;font-weight:normal;color:#0F181A">
                                                      Thank you for your order.</h1>
                                                  </td>
                                                </tr>
                                                <tr>
                                                  <td align="center"
                                                    style="Margin:0;padding-top:15px;padding-bottom:15px;padding-left:20px;padding-right:20px">
                                                    <p
                                                      style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:Nunito, Roboto, sans-serif;line-height:30px;color:#0F181A;font-size:20px">
                                                      Your order is being prepared. Estimated delivery time is</p>
                                                    <p
                                                      style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:Nunito, Roboto, sans-serif;line-height:45px;color:#0F181A;font-size:30px">
                                                      <strong>9:15 PM</strong>
                                                    </p>
                                                  </td>
                                                </tr>
                                              </tbody>
                                            </table>
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                    <!--[if mso]></td><td style="width:5px"></td><td width="undefined" valign="top"><![endif]-->
                                    <table cellpadding="0" cellspacing="0" class="es-right" align="right"
                                      style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:right">
                                      <tbody>
                                        <tr class="es-mobile-hidden"></tr>
                                      </tbody>
                                    </table><!--[if mso]></td></tr></table><![endif]-->
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <table cellpadding="0" cellspacing="0" class="es-content" align="center"
                      style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%">
                      <tbody>
                        <tr>
                          <td align="center" style="padding:0;Margin:0">
                            <table bgcolor="#fafafa" class="es-content-body" align="center" cellpadding="0" cellspacing="0"
                              style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#fafafa;width:600px">
                              <tbody>
                                <tr>
                                  <td align="left"
                                    style="padding:0;Margin:0;padding-top:20px;padding-left:20px;padding-right:20px">
                                    <!--[if mso]><table style="width:560px" cellpadding="0" cellspacing="0"><tr><td style="width:270px" valign="top"><![endif]-->
                                    <table cellpadding="0" cellspacing="0" class="es-left" align="left"
                                      style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:left">
                                      <tbody>
                                        <tr>
                                          <td class="es-m-p20b" align="left" style="padding:0;Margin:0;width:270px">
                                            <table cellpadding="0" cellspacing="0" width="100%" role="presentation"
                                              style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                              <tbody>
                                                <tr>
                                                  <td align="left" style="padding:0;Margin:0">
                                                    <p
                                                      style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:'fredoka one', helvetica, arial, sans-serif;line-height:48px;color:#0F181A;font-size:32px">
                                                      Order #68583</p>
                                                  </td>
                                                </tr>
                                              </tbody>
                                            </table>
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                    <!--[if mso]></td><td style="width:20px"></td><td style="width:270px" valign="top"><![endif]-->
                                    <table cellpadding="0" cellspacing="0" class="es-right" align="right"
                                      style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:right">
                                      <tbody>
                                        <tr>
                                          <td align="left" style="padding:0;Margin:0;width:270px">
                                            <table cellpadding="0" cellspacing="0" width="100%" role="presentation"
                                              style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                              <tbody>
                                                <tr>
                                                  <td align="center" style="padding:0;Margin:0"><!--[if mso]><a href="" target="_blank" hidden>
            <v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" esdevVmlButton href="" 
                        style="height:44px; v-text-anchor:middle; width:182px" arcsize="50%" stroke="f"  fillcolor="#f1ba0a">
                <w:anchorlock></w:anchorlock>
                <center style='color:#0f181a; font-family:Nunito, Roboto, sans-serif; font-size:18px; font-weight:700; line-height:18px;  mso-text-raise:1px'>Pay Now</center>
            </v:roundrect></a>
        <![endif]--><!--[if !mso]><!-- --><span class="msohide es-button-border"
                                                      style="border-style:solid;border-color:#2CB543;background:#F1BA0A;border-width:0px;display:inline-block;border-radius:30px;width:auto;mso-hide:all"><a
                                                        href="" class="es-button es-button-4" target="_blank"
                                                        style="mso-style-priority:100 !important;text-decoration:none;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;color:#0F181A;font-size:20px;border-style:solid;border-color:#F1BA0A;border-width:10px 50px;display:inline-block;background:#F1BA0A;border-radius:30px;font-family:Nunito, Roboto, sans-serif;font-weight:bold;font-style:normal;line-height:24px;width:auto;text-align:center">Pay
                                                        Now</a></span><!--<![endif]--></td>
                                                </tr>
                                              </tbody>
                                            </table>
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table><!--[if mso]></td></tr></table><![endif]-->
                                  </td>
                                </tr>
                                <tr>
                                  <td class="esdev-adapt-off" align="left"
                                    style="padding:0;Margin:0;padding-top:20px;padding-left:20px;padding-right:20px">
                                    <table cellpadding="0" cellspacing="0" class="esdev-mso-table"
                                      style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;width:560px">
                                      <tbody>
                                        <tr>
                                          <td class="esdev-mso-td" valign="top" style="padding:0;Margin:0">
                                            <table cellpadding="0" cellspacing="0" class="es-left" align="left"
                                              style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:left">
                                              <tbody>
                                                <tr>
                                                  <td align="center" style="padding:0;Margin:0;width:367px">
                                                    <table cellpadding="0" cellspacing="0" width="100%" role="presentation"
                                                      style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                                      <tbody>
                                                        <tr>
                                                          <td align="left" style="padding:0;Margin:0;padding-bottom:15px">
                                                            <h3 class="p_name"
                                                              style="Margin:0;line-height:24px;mso-line-height-rule:exactly;font-family:'Fredoka One', helvetica, arial, sans-serif;font-size:20px;font-style:normal;font-weight:normal;color:#0F181A">
                                                              Vegetarian pizza</h3>
                                                          </td>
                                                        </tr>
                                                      </tbody>
                                                    </table>
                                                  </td>
                                                </tr>
                                              </tbody>
                                            </table>
                                          </td>
                                          <td style="padding:0;Margin:0;width:20px"></td>
                                          <td class="esdev-mso-td" valign="top" style="padding:0;Margin:0">
                                            <table cellpadding="0" cellspacing="0" class="es-right" align="right"
                                              style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:right">
                                              <tbody>
                                                <tr>
                                                  <td align="center" style="padding:0;Margin:0;width:173px">
                                                    <table cellpadding="0" cellspacing="0" width="100%" role="presentation"
                                                      style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                                      <tbody>
                                                        <tr>
                                                          <td align="right" class="es-m-txt-r" style="padding:0;Margin:0">
                                                            <h3
                                                              style="Margin:0;line-height:24px;mso-line-height-rule:exactly;font-family:'Fredoka One', helvetica, arial, sans-serif;font-size:20px;font-style:normal;font-weight:normal;color:#0F181A">
                                                              <b class="p_price">$25.99</b>
                                                            </h3>
                                                          </td>
                                                        </tr>
                                                      </tbody>
                                                    </table>
                                                  </td>
                                                </tr>
                                              </tbody>
                                            </table>
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </td>
                                </tr>
                                <tr>
                                  <td class="esdev-adapt-off" align="left"
                                    style="padding:0;Margin:0;padding-top:20px;padding-left:20px;padding-right:20px">
                                    <table cellpadding="0" cellspacing="0" class="esdev-mso-table"
                                      style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;width:560px">
                                      <tbody>
                                        <tr>
                                          <td class="esdev-mso-td" valign="top" style="padding:0;Margin:0">
                                            <table cellpadding="0" cellspacing="0" class="es-left" align="left"
                                              style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:left">
                                              <tbody>
                                                <tr>
                                                  <td align="center" style="padding:0;Margin:0;width:367px">
                                                    <table cellpadding="0" cellspacing="0" width="100%" role="presentation"
                                                      style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                                      <tbody>
                                                        <tr>
                                                          <td align="left" style="padding:0;Margin:0;padding-bottom:15px">
                                                            <h3 class="p_name"
                                                              style="Margin:0;line-height:24px;mso-line-height-rule:exactly;font-family:'Fredoka One', helvetica, arial, sans-serif;font-size:20px;font-style:normal;font-weight:normal;color:#0F181A">
                                                              Vegetarian pizza</h3>
                                                          </td>
                                                        </tr>
                                                      </tbody>
                                                    </table>
                                                  </td>
                                                </tr>
                                              </tbody>
                                            </table>
                                          </td>
                                          <td style="padding:0;Margin:0;width:20px"></td>
                                          <td class="esdev-mso-td" valign="top" style="padding:0;Margin:0">
                                            <table cellpadding="0" cellspacing="0" class="es-right" align="right"
                                              style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:right">
                                              <tbody>
                                                <tr>
                                                  <td align="center" style="padding:0;Margin:0;width:173px">
                                                    <table cellpadding="0" cellspacing="0" width="100%" role="presentation"
                                                      style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                                      <tbody>
                                                        <tr>
                                                          <td align="right" class="es-m-txt-r" style="padding:0;Margin:0">
                                                            <h3
                                                              style="Margin:0;line-height:24px;mso-line-height-rule:exactly;font-family:'Fredoka One', helvetica, arial, sans-serif;font-size:20px;font-style:normal;font-weight:normal;color:#0F181A">
                                                              <b class="p_price">$25.99</b>
                                                            </h3>
                                                          </td>
                                                        </tr>
                                                      </tbody>
                                                    </table>
                                                  </td>
                                                </tr>
                                              </tbody>
                                            </table>
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </td>
                                </tr>
                                <tr>
                                  <td class="esdev-adapt-off" align="left"
                                    style="padding:0;Margin:0;padding-top:20px;padding-left:20px;padding-right:20px">
                                    <table cellpadding="0" cellspacing="0" class="esdev-mso-table"
                                      style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;width:560px">
                                      <tbody>
                                        <tr>
                                          <td class="esdev-mso-td" valign="top" style="padding:0;Margin:0">
                                            <table cellpadding="0" cellspacing="0" class="es-left" align="left"
                                              style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:left">
                                              <tbody>
                                                <tr>
                                                  <td align="center" style="padding:0;Margin:0;width:367px">
                                                    <table cellpadding="0" cellspacing="0" width="100%" role="presentation"
                                                      style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                                      <tbody>
                                                        <tr>
                                                          <td align="left" style="padding:0;Margin:0;padding-bottom:15px">
                                                            <h3 class="p_name"
                                                              style="Margin:0;line-height:24px;mso-line-height-rule:exactly;font-family:'Fredoka One', helvetica, arial, sans-serif;font-size:20px;font-style:normal;font-weight:normal;color:#0F181A">
                                                              Vegetarian pizza</h3>
                                                          </td>
                                                        </tr>
                                                      </tbody>
                                                    </table>
                                                  </td>
                                                </tr>
                                              </tbody>
                                            </table>
                                          </td>
                                          <td style="padding:0;Margin:0;width:20px"></td>
                                          <td class="esdev-mso-td" valign="top" style="padding:0;Margin:0">
                                            <table cellpadding="0" cellspacing="0" class="es-right" align="right"
                                              style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:right">
                                              <tbody>
                                                <tr>
                                                  <td align="center" style="padding:0;Margin:0;width:173px">
                                                    <table cellpadding="0" cellspacing="0" width="100%" role="presentation"
                                                      style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                                      <tbody>
                                                        <tr>
                                                          <td align="right" class="es-m-txt-r" style="padding:0;Margin:0">
                                                            <h3
                                                              style="Margin:0;line-height:24px;mso-line-height-rule:exactly;font-family:'Fredoka One', helvetica, arial, sans-serif;font-size:20px;font-style:normal;font-weight:normal;color:#0F181A">
                                                              <b class="p_price">$25.99</b>
                                                            </h3>
                                                          </td>
                                                        </tr>
                                                      </tbody>
                                                    </table>
                                                  </td>
                                                </tr>
                                              </tbody>
                                            </table>
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </td>
                                </tr>
                                <tr>
                                  <td class="esdev-adapt-off" align="left"
                                    style="padding:0;Margin:0;padding-top:20px;padding-left:20px;padding-right:20px">
                                    <table cellpadding="0" cellspacing="0" class="esdev-mso-table"
                                      style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;width:560px">
                                      <tbody>
                                        <tr>
                                          <td class="esdev-mso-td" valign="top" style="padding:0;Margin:0">
                                            <table cellpadding="0" cellspacing="0" class="es-left" align="left"
                                              style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:left">
                                              <tbody>
                                                <tr>
                                                  <td align="center" style="padding:0;Margin:0;width:367px">
                                                    <table cellpadding="0" cellspacing="0" width="100%" role="presentation"
                                                      style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                                      <tbody>
                                                        <tr>
                                                          <td align="left" style="padding:0;Margin:0;padding-bottom:15px">
                                                            <h3 class="p_name"
                                                              style="Margin:0;line-height:24px;mso-line-height-rule:exactly;font-family:'Fredoka One', helvetica, arial, sans-serif;font-size:20px;font-style:normal;font-weight:normal;color:#0F181A">
                                                              Vegetarian pizza</h3>
                                                          </td>
                                                        </tr>
                                                      </tbody>
                                                    </table>
                                                  </td>
                                                </tr>
                                              </tbody>
                                            </table>
                                          </td>
                                          <td style="padding:0;Margin:0;width:20px"></td>
                                          <td class="esdev-mso-td" valign="top" style="padding:0;Margin:0">
                                            <table cellpadding="0" cellspacing="0" class="es-right" align="right"
                                              style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:right">
                                              <tbody>
                                                <tr>
                                                  <td align="center" style="padding:0;Margin:0;width:173px">
                                                    <table cellpadding="0" cellspacing="0" width="100%" role="presentation"
                                                      style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                                      <tbody>
                                                        <tr>
                                                          <td align="right" class="es-m-txt-r" style="padding:0;Margin:0">
                                                            <h3
                                                              style="Margin:0;line-height:24px;mso-line-height-rule:exactly;font-family:'Fredoka One', helvetica, arial, sans-serif;font-size:20px;font-style:normal;font-weight:normal;color:#0F181A">
                                                              <b class="p_price">$25.99</b>
                                                            </h3>
                                                          </td>
                                                        </tr>
                                                      </tbody>
                                                    </table>
                                                  </td>
                                                </tr>
                                              </tbody>
                                            </table>
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </td>
                                </tr>
                                <tr>
                                  <td class="esdev-adapt-off" align="left"
                                    style="padding:0;Margin:0;padding-top:20px;padding-left:20px;padding-right:20px">
                                    <table cellpadding="0" cellspacing="0" class="esdev-mso-table"
                                      style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;width:560px">
                                      <tbody>
                                        <tr>
                                          <td class="esdev-mso-td" valign="top" style="padding:0;Margin:0">
                                            <table cellpadding="0" cellspacing="0" class="es-left" align="left"
                                              style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:left">
                                              <tbody>
                                                <tr>
                                                  <td align="center" style="padding:0;Margin:0;width:367px">
                                                    <table cellpadding="0" cellspacing="0" width="100%" role="presentation"
                                                      style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                                      <tbody>
                                                        <tr>
                                                          <td align="left" style="padding:0;Margin:0;padding-bottom:15px">
                                                            <h3 class="p_name"
                                                              style="Margin:0;line-height:24px;mso-line-height-rule:exactly;font-family:'Fredoka One', helvetica, arial, sans-serif;font-size:20px;font-style:normal;font-weight:normal;color:#0F181A">
                                                              Vegetarian pizza</h3>
                                                          </td>
                                                        </tr>
                                                      </tbody>
                                                    </table>
                                                  </td>
                                                </tr>
                                              </tbody>
                                            </table>
                                          </td>
                                          <td style="padding:0;Margin:0;width:20px"></td>
                                          <td class="esdev-mso-td" valign="top" style="padding:0;Margin:0">
                                            <table cellpadding="0" cellspacing="0" class="es-right" align="right"
                                              style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:right">
                                              <tbody>
                                                <tr>
                                                  <td align="center" style="padding:0;Margin:0;width:173px">
                                                    <table cellpadding="0" cellspacing="0" width="100%" role="presentation"
                                                      style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                                      <tbody>
                                                        <tr>
                                                          <td align="right" class="es-m-txt-r" style="padding:0;Margin:0">
                                                            <h3
                                                              style="Margin:0;line-height:24px;mso-line-height-rule:exactly;font-family:'Fredoka One', helvetica, arial, sans-serif;font-size:20px;font-style:normal;font-weight:normal;color:#0F181A">
                                                              <b class="p_price">$25.99</b>
                                                            </h3>
                                                          </td>
                                                        </tr>
                                                      </tbody>
                                                    </table>
                                                  </td>
                                                </tr>
                                              </tbody>
                                            </table>
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <table cellpadding="0" cellspacing="0" class="es-content" align="center"
                      style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%">
                      <tbody>
                        <tr>
                          <td align="center" style="padding:0;Margin:0">
                            <table bgcolor="#ffffff" class="es-content-body" align="center" cellpadding="0" cellspacing="0"
                              style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#FFFFFF;width:600px">
                              <tbody>
                                <tr>
                                  <td class="esdev-adapt-off" align="left"
                                    style="padding:0;Margin:0;padding-top:20px;padding-left:20px;padding-right:20px">
                                    <table cellpadding="0" cellspacing="0" class="esdev-mso-table"
                                      style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;width:560px">
                                      <tbody>
                                        <tr>
                                          <td class="esdev-mso-td" valign="top" style="padding:0;Margin:0">
                                            <table cellpadding="0" cellspacing="0" class="es-left" align="left"
                                              style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:left">
                                              <tbody>
                                                <tr>
                                                  <td align="left" style="padding:0;Margin:0;width:429px">
                                                    <table cellpadding="0" cellspacing="0" width="100%" role="presentation"
                                                      style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                                      <tbody>
                                                        <tr>
                                                          <td align="right" class="es-m-txt-r" style="padding:0;Margin:0">
                                                            <p
                                                              style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:Nunito, Roboto, sans-serif;line-height:28px;color:#0F181A;font-size:14px">
                                                              Subtot<strong>al (3 items):</strong></p>
                                                          </td>
                                                        </tr>
                                                        <tr>
                                                          <td align="right" class="es-m-txt-r es-m-p10t"
                                                            style="padding:0;Margin:0">
                                                            <p
                                                              style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:Nunito, Roboto, sans-serif;line-height:28px;color:#0F181A;font-size:14px">
                                                              Delivery Charge</p>
                                                          </td>
                                                        </tr>
                                                        <tr>
                                                          <td align="right" class="es-m-txt-r es-m-p10t"
                                                            style="padding:0;Margin:0">
                                                            <p
                                                              style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:Nunito, Roboto, sans-serif;line-height:28px;color:#0F181A;font-size:14px">
                                                              Discount:</p>
                                                          </td>
                                                        </tr>
                                                        <tr>
                                                          <td align="right" class="es-m-txt-r es-m-p10t"
                                                            style="padding:0;Margin:0">
                                                            <p
                                                              style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:Nunito, Roboto, sans-serif;line-height:28px;color:#0F181A;font-size:14px">
                                                              Bag Fee:</p>
                                                          </td>
                                                        </tr>
                                                        <tr>
                                                          <td align="right" class="es-m-txt-r es-m-p10t"
                                                            style="padding:0;Margin:0">
                                                            <p
                                                              style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:Nunito, Roboto, sans-serif;line-height:28px;color:#0F181A;font-size:14px">
                                                              Service Fee</p>
                                                          </td>
                                                        </tr>
                                                        <tr>
                                                          <td align="right" class="es-m-txt-r es-m-p5t"
                                                            style="padding:0;Margin:0">
                                                            <h3
                                                              style="Margin:0;line-height:40px;mso-line-height-rule:exactly;font-family:'Fredoka One', helvetica, arial, sans-serif;font-size:20px;font-style:normal;font-weight:normal;color:#0F181A">
                                                              Order total:</h3>
                                                          </td>
                                                        </tr>
                                                      </tbody>
                                                    </table>
                                                  </td>
                                                </tr>
                                              </tbody>
                                            </table>
                                          </td>
                                          <td style="padding:0;Margin:0;width:20px"></td>
                                          <td class="esdev-mso-td" valign="top" style="padding:0;Margin:0">
                                            <table cellpadding="0" cellspacing="0" class="es-right" align="right"
                                              style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:right">
                                              <tbody>
                                                <tr>
                                                  <td align="left" style="padding:0;Margin:0;width:111px">
                                                    <table cellpadding="0" cellspacing="0" width="100%" role="presentation"
                                                      style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                                      <tbody>
                                                        <tr>
                                                          <td align="right" class="es-m-txt-r" style="padding:0;Margin:0">
                                                            <h3
                                                              style="Margin:0;line-height:24px;mso-line-height-rule:exactly;font-family:'Fredoka One', helvetica, arial, sans-serif;font-size:20px;font-style:normal;font-weight:normal;color:#0F181A">
                                                              <b>£77.97</b>
                                                            </h3>
                                                          </td>
                                                        </tr>
                                                        <tr>
                                                          <td align="right" class="es-m-txt-r"
                                                            style="padding:0;Margin:0;padding-top:5px">
                                                            <h3
                                                              style="Margin:0;line-height:24px;mso-line-height-rule:exactly;font-family:'Fredoka One', helvetica, arial, sans-serif;font-size:20px;font-style:normal;font-weight:normal;color:#c1312d">
                                                              <b>£2.50</b>
                                                            </h3>
                                                          </td>
                                                        </tr>
                                                        <tr>
                                                          <td align="right" class="es-m-txt-r"
                                                            style="padding:0;Margin:0;padding-top:5px">
                                                            <h3
                                                              style="Margin:0;line-height:24px;mso-line-height-rule:exactly;font-family:'Fredoka One', helvetica, arial, sans-serif;font-size:20px;font-style:normal;font-weight:normal;color:#0F181A">
                                                              <b>£<span style="color:#8B4513">5.0</span></b>
                                                            </h3>
                                                          </td>
                                                        </tr>
                                                        <tr>
                                                          <td align="right" class="es-m-txt-r"
                                                            style="padding:0;Margin:0;padding-top:5px">
                                                            <h3
                                                              style="Margin:0;line-height:24px;mso-line-height-rule:exactly;font-family:'Fredoka One', helvetica, arial, sans-serif;font-size:20px;font-style:normal;font-weight:normal;color:#0F181A">
                                                              <b>£0.5</b>
                                                            </h3>
                                                          </td>
                                                        </tr>
                                                        <tr>
                                                          <td align="right" class="es-m-txt-r"
                                                            style="padding:0;Margin:0;padding-top:5px">
                                                            <h3
                                                              style="Margin:0;line-height:24px;mso-line-height-rule:exactly;font-family:'Fredoka One', helvetica, arial, sans-serif;font-size:20px;font-style:normal;font-weight:normal;color:#0F181A">
                                                              <b>£0.5</b>
                                                            </h3>
                                                          </td>
                                                        </tr>
                                                        <tr>
                                                          <td align="right" class="es-m-txt-r"
                                                            style="padding:0;Margin:0;padding-top:10px">
                                                            <h3
                                                              style="Margin:0;line-height:24px;mso-line-height-rule:exactly;font-family:'Fredoka One', helvetica, arial, sans-serif;font-size:20px;font-style:normal;font-weight:normal;color:#0F181A">
                                                              <b>£77.97</b>
                                                            </h3>
                                                          </td>
                                                        </tr>
                                                      </tbody>
                                                    </table>
                                                  </td>
                                                </tr>
                                              </tbody>
                                            </table>
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </td>
                                </tr>
                                <tr>
                                  <td align="left"
                                    style="Margin:0;padding-left:20px;padding-right:20px;padding-top:30px;padding-bottom:40px">
                                    <!--[if mso]><table style="width:560px" cellpadding="0" cellspacing="0"><tr><td style="width:270px" valign="top"><![endif]-->
                                    <table cellpadding="0" cellspacing="0" class="es-left" align="left"
                                      style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:left">
                                      <tbody>
                                        <tr>
                                          <td class="es-m-p20b" align="left" style="padding:0;Margin:0;width:270px">
                                            <table cellpadding="0" cellspacing="0" width="100%" role="presentation"
                                              style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                              <tbody>
                                                <tr>
                                                  <td align="left" style="padding:0;Margin:0;padding-bottom:20px">
                                                    <h2
                                                      style="Margin:0;line-height:38px;mso-line-height-rule:exactly;font-family:'Fredoka One', helvetica, arial, sans-serif;font-size:32px;font-style:normal;font-weight:normal;color:#0F181A">
                                                      Summary</h2>
                                                  </td>
                                                </tr>
                                                <tr>
                                                  <td align="left" style="padding:0;Margin:0">
                                                    <p
                                                      style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:Nunito, Roboto, sans-serif;line-height:21px;color:#0F181A;font-size:14px">
                                                      Order #:&nbsp;<strong>68583</strong></p>
                                                    <p
                                                      style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:Nunito, Roboto, sans-serif;line-height:21px;color:#0F181A;font-size:14px">
                                                      Order Date:&nbsp;<strong>May&nbsp;21, 2023</strong></p>
                                                    <p
                                                      style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:Nunito, Roboto, sans-serif;line-height:21px;color:#0F181A;font-size:14px">
                                                      Status: Unpaid</p>
                                                  </td>
                                                </tr>
                                              </tbody>
                                            </table>
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                    <!--[if mso]></td><td style="width:20px"></td><td style="width:270px" valign="top"><![endif]-->
                                    <table cellpadding="0" cellspacing="0" class="es-right" align="right"
                                      style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:right">
                                      <tbody>
                                        <tr>
                                          <td align="left" style="padding:0;Margin:0;width:270px">
                                            <table cellpadding="0" cellspacing="0" width="100%" role="presentation"
                                              style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                              <tbody>
                                                <tr>
                                                  <td align="left" style="padding:0;Margin:0;padding-bottom:20px">
                                                    <h2
                                                      style="Margin:0;line-height:38px;mso-line-height-rule:exactly;font-family:'Fredoka One', helvetica, arial, sans-serif;font-size:32px;font-style:normal;font-weight:normal;color:#0F181A">
                                                      Delivery Address</h2>
                                                  </td>
                                                </tr>
                                                <tr>
                                                  <td align="left" style="padding:0;Margin:0">
                                                    <p
                                                      style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:Nunito, Roboto, sans-serif;line-height:21px;color:#0F181A;font-size:14px">
                                                      Andry Petrin</p>
                                                    <p
                                                      style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:Nunito, Roboto, sans-serif;line-height:21px;color:#0F181A;font-size:14px">
                                                      78 Somewhere St</p>
                                                    <p
                                                      style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:Nunito, Roboto, sans-serif;line-height:21px;color:#0F181A;font-size:14px">
                                                      Somewhere, Canada 99743</p>
                                                  </td>
                                                </tr>
                                              </tbody>
                                            </table>
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table><!--[if mso]></td></tr></table><![endif]-->
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <table cellpadding="0" cellspacing="0" class="es-content" align="center"
                      style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%">
                      <tbody>
                        <tr>
                          <td align="center" style="padding:0;Margin:0">
                            <table bgcolor="#fafafa" class="es-content-body" align="center" cellpadding="0" cellspacing="0"
                              style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#fafafa;width:600px">
                              <tbody>
                                <tr>
                                  <td align="left"
                                    style="Margin:0;padding-left:20px;padding-right:20px;padding-top:30px;padding-bottom:30px">
                                    <!--[if mso]><table style="width:560px" cellpadding="0" cellspacing="0"><tr><td style="width:270px" valign="top"><![endif]-->
                                    <table cellpadding="0" cellspacing="0" align="left" class="es-left"
                                      style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:left">
                                      <tbody>
                                        <tr>
                                          <td align="center" valign="top" style="padding:0;Margin:0;width:270px">
                                            <table cellpadding="0" cellspacing="0" width="100%" role="presentation"
                                              style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                              <tbody>
                                                <tr>
                                                  <td align="center" style="padding:35px;Margin:0;font-size:0px"><a
                                                      target="_blank" href="https://viewstripo.email"
                                                      style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:underline;color:#F1BA0A;font-size:14px"><img
                                                        src="https://mfbsbn.stripocdn.email/content/guids/CABINET_37fa9af71c93e641990ef539715b0b24/images/onlinepayment_4.png"
                                                        alt=""
                                                        style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic"
                                                        width="200"></a></td>
                                                </tr>
                                              </tbody>
                                            </table>
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                    <!--[if mso]></td><td style="width:20px"></td><td style="width:270px" valign="top"><![endif]-->
                                    <table cellpadding="0" cellspacing="0" class="es-right" align="right"
                                      style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:right">
                                      <tbody>
                                        <tr>
                                          <td align="left" style="padding:0;Margin:0;width:270px">
                                            <table cellpadding="0" cellspacing="0" width="100%" role="presentation"
                                              style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                              <tbody>
                                                <tr>
                                                  <td align="center" class="es-m-txt-c"
                                                    style="padding:0;Margin:0;padding-top:10px;padding-bottom:10px">
                                                    <h2
                                                      style="Margin:0;line-height:38px;mso-line-height-rule:exactly;font-family:'Fredoka One', helvetica, arial, sans-serif;font-size:32px;font-style:normal;font-weight:normal;color:#0F181A">
                                                      We're here to help</h2>
                                                  </td>
                                                </tr>
                                                <tr>
                                                  <td align="center"
                                                    style="padding:0;Margin:0;padding-top:10px;padding-bottom:10px"><!--[if mso]><a href="tel:+(000)123456789" target="_blank" hidden>
            <v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" esdevVmlButton href="tel:+(000)123456789" 
                        style="height:40px; v-text-anchor:middle; width:223px" arcsize="50%" stroke="f"  fillcolor="#f6c936">
                <w:anchorlock></w:anchorlock>
                <center style='color:#0f181a; font-family:Nunito, Roboto, sans-serif; font-size:14px; font-weight:700; line-height:14px;  mso-text-raise:1px'>+ (000) 123 456 789</center>
            </v:roundrect></a>
        <![endif]--><!--[if !mso]><!-- --><span class="msohide es-button-border"
                                                      style="border-style:solid;border-color:#2CB543;background:#F1BA0A;border-width:0px;display:inline-block;border-radius:30px;width:auto;mso-hide:all"><a
                                                        href="tel:+(000)123456789" class="es-button" target="_blank"
                                                        style="mso-style-priority:100 !important;text-decoration:none;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;color:#0F181A;font-size:16px;border-style:solid;border-color:#F1BA0A;border-width:10px 30px 10px 30px;display:inline-block;background:#F1BA0A;border-radius:30px;font-family:Nunito, Roboto, sans-serif;font-weight:bold;font-style:normal;line-height:19px;width:auto;text-align:center">+
                                                        (000) 123 456 789<img
                                                          src="https://mfbsbn.stripocdn.email/content/guids/CABINET_37fa9af71c93e641990ef539715b0b24/images/group_361.png"
                                                          alt="icon" width="20" align="absmiddle"
                                                          style="display:inline-block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic;vertical-align:middle;margin-left:10px"></a></span><!--<![endif]-->
                                                  </td>
                                                </tr>
                                                <tr>
                                                  <td align="center"
                                                    style="padding:0;Margin:0;padding-top:10px;padding-bottom:20px"><!--[if mso]><a href="mailto:fresh_in_box@email" target="_blank" hidden>
            <v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" esdevVmlButton href="mailto:fresh_in_box@email" 
                        style="height:40px; v-text-anchor:middle; width:218px" arcsize="50%" stroke="f"  fillcolor="#f6c936">
                <w:anchorlock></w:anchorlock>
                <center style='color:#0f181a; font-family:Nunito, Roboto, sans-serif; font-size:14px; font-weight:700; line-height:14px;  mso-text-raise:1px'>fresh_in_box@email</center>
            </v:roundrect></a>
        <![endif]--><!--[if !mso]><!-- --><span class="msohide es-button-border"
                                                      style="border-style:solid;border-color:#2CB543;background:#F1BA0A;border-width:0px;display:inline-block;border-radius:30px;width:auto;mso-hide:all"><a
                                                        href="mailto:fresh_in_box@email" class="es-button" target="_blank"
                                                        style="mso-style-priority:100 !important;text-decoration:none;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;color:#0F181A;font-size:16px;border-style:solid;border-color:#F1BA0A;border-width:10px 30px 10px 30px;display:inline-block;background:#F1BA0A;border-radius:30px;font-family:Nunito, Roboto, sans-serif;font-weight:bold;font-style:normal;line-height:19px;width:auto;text-align:center">fresh_in_box@email<img
                                                          src="https://mfbsbn.stripocdn.email/content/guids/CABINET_37fa9af71c93e641990ef539715b0b24/images/group_361.png"
                                                          alt="icon" width="20" align="absmiddle"
                                                          style="display:inline-block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic;vertical-align:middle;margin-left:10px"></a></span><!--<![endif]-->
                                                  </td>
                                                </tr>
                                                <tr>
                                                  <td align="center"
                                                    style="padding:0;Margin:0;padding-top:10px;padding-bottom:20px"><!--[if mso]><a href="https://koshi.co.uk" target="_blank" hidden>
            <v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" esdevVmlButton href="https://koshi.co.uk" 
                        style="height:40px; v-text-anchor:middle; width:197px" arcsize="50%" stroke="f"  fillcolor="#f1ba0a">
                <w:anchorlock></w:anchorlock>
                <center style='color:#0f181a; font-family:Nunito, Roboto, sans-serif; font-size:14px; font-weight:700; line-height:14px;  mso-text-raise:1px'>Visit our Website</center>
            </v:roundrect></a>
        <![endif]--><!--[if !mso]><!-- --><span class="msohide es-button-border"
                                                      style="border-style:solid;border-color:#2CB543;background:#F1BA0A;border-width:0px;display:inline-block;border-radius:30px;width:auto;mso-hide:all"><a
                                                        href="https://koshi.co.uk" class="es-button" target="_blank"
                                                        style="mso-style-priority:100 !important;text-decoration:none;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;color:#0F181A;font-size:16px;border-style:solid;border-color:#F1BA0A;border-width:10px 30px 10px 30px;display:inline-block;background:#F1BA0A;border-radius:30px;font-family:Nunito, Roboto, sans-serif;font-weight:bold;font-style:normal;line-height:19px;width:auto;text-align:center">Visit
                                                        our Website<img
                                                          src="https://mfbsbn.stripocdn.email/content/guids/CABINET_37fa9af71c93e641990ef539715b0b24/images/group_361.png"
                                                          alt="icon" width="20" align="absmiddle"
                                                          style="display:inline-block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic;vertical-align:middle;margin-left:10px"></a></span><!--<![endif]-->
                                                  </td>
                                                </tr>
                                                <tr>
                                                  <td align="center"
                                                    style="padding:0;Margin:0;padding-top:10px;padding-bottom:20px"><!--[if mso]><a href="https://koshi.co.uk" target="_blank" hidden>
            <v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" esdevVmlButton href="https://koshi.co.uk" 
                        style="height:40px; v-text-anchor:middle; width:213px" arcsize="50%" stroke="f"  fillcolor="#f1ba0a">
                <w:anchorlock></w:anchorlock>
                <center style='color:#0f181a; font-family:Nunito, Roboto, sans-serif; font-size:14px; font-weight:700; line-height:14px;  mso-text-raise:1px'>Download Our App</center>
            </v:roundrect></a>
        <![endif]--><!--[if !mso]><!-- --><span class="msohide es-button-border"
                                                      style="border-style:solid;border-color:#2CB543;background:#F1BA0A;border-width:0px;display:inline-block;border-radius:30px;width:auto;mso-hide:all"><a
                                                        href="https://koshi.co.uk" class="es-button" target="_blank"
                                                        style="mso-style-priority:100 !important;text-decoration:none;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;color:#0F181A;font-size:16px;border-style:solid;border-color:#F1BA0A;border-width:10px 30px 10px 30px;display:inline-block;background:#F1BA0A;border-radius:30px;font-family:Nunito, Roboto, sans-serif;font-weight:bold;font-style:normal;line-height:19px;width:auto;text-align:center">Download
                                                        Our App<img
                                                          src="https://mfbsbn.stripocdn.email/content/guids/CABINET_37fa9af71c93e641990ef539715b0b24/images/group_361.png"
                                                          alt="icon" width="20" align="absmiddle"
                                                          style="display:inline-block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic;vertical-align:middle;margin-left:10px"></a></span><!--<![endif]-->
                                                  </td>
                                                </tr>
                                                <tr>
                                                  <td align="center"
                                                    style="padding:0;Margin:0;padding-left:20px;padding-right:20px">
                                                    <p
                                                      style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:Nunito, Roboto, sans-serif;line-height:21px;color:#0F181A;font-size:14px">
                                                      also available&nbsp;in messengers and social networks<br></p>
                                                  </td>
                                                </tr>
                                              </tbody>
                                            </table>
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table><!--[if mso]></td></tr></table><![endif]-->
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <table cellpadding="0" cellspacing="0" class="es-footer" align="center"
                      style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%;background-color:transparent;background-repeat:repeat;background-position:center top">
                      <tbody>
                        <tr>
                          <td align="center" style="padding:0;Margin:0">
                            <table bgcolor="#ffffff" class="es-footer-body" align="center" cellpadding="0" cellspacing="0"
                              style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#0F181A;width:600px">
                              <tbody>
                                <tr>
                                  <td align="left"
                                    style="padding:0;Margin:0;padding-top:20px;padding-left:20px;padding-right:20px">
                                    <!--[if mso]><table style="width:560px" cellpadding="0" cellspacing="0"><tr><td style="width:270px" valign="top"><![endif]-->
                                    <table cellpadding="0" cellspacing="0" class="es-left" align="left"
                                      style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:left">
                                      <tbody>
                                        <tr>
                                          <td class="es-m-p20b" align="left" style="padding:0;Margin:0;width:270px">
                                            <table cellpadding="0" cellspacing="0" width="100%" role="presentation"
                                              style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                              <tbody>
                                                <tr>
                                                  <td align="left" class="h-auto" height="80" style="padding:0;Margin:0">
                                                    <p
                                                      style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:Nunito, Roboto, sans-serif;line-height:20px;color:#FFFFFF;font-size:20px">
                                                      <br><br><strong>Powered by Grub Direct&nbsp;</strong>
                                                    </p>
                                                    <p
                                                      style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:Nunito, Roboto, sans-serif;line-height:20px;color:#FFFFFF;font-size:20px">
                                                      <br>
                                                    </p>
                                                  </td>
                                                </tr>
                                              </tbody>
                                            </table>
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                    <!--[if mso]></td><td style="width:20px"></td><td style="width:270px" valign="top"><![endif]-->
                                    <table cellpadding="0" cellspacing="0" class="es-right" align="right"
                                      style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:right">
                                      <tbody>
                                        <tr>
                                          <td align="left" style="padding:0;Margin:0;width:270px">
                                            <table cellpadding="0" cellspacing="0" width="100%" role="presentation"
                                              style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                              <tbody>
                                                <tr>
                                                  <td align="center"
                                                    style="padding:0;Margin:0;padding-bottom:10px;padding-right:40px;font-size:0px">
                                                    <img class="adapt-img"
                                                      src="https://mfbsbn.stripocdn.email/content/guids/CABINET_c9d012bc56ea930554b6184970a54bf6b67ef28c1411113c79fcc405fcaf048a/images/imageedit_2_7170529251.png"
                                                      alt=""
                                                      style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic"
                                                      width="169"></td>
                                                </tr>
                                              </tbody>
                                            </table>
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table><!--[if mso]></td></tr></table><![endif]-->
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        
        
        </body>
        </html>`;
        email.attachments = [attachment];
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