import { Controller, Post, Body, Get } from '@nestjs/common';
import { PubSub } from '@google-cloud/pubsub';
import { NotificationService } from './notification.service';
import { get } from 'http';

@Controller('notification')
export class NotificationController {
    private readonly pubsub: PubSub;

    constructor(private readonly notificationService: NotificationService) {
        this.pubsub = new PubSub();
    }
    @Get()
    async Trigger() {
        const pubsub = new PubSub({
            projectId: 'double-balm-378512'
        });
        const subscription = pubsub.subscription('projects/double-balm-378512/subscriptions/MySub');
        subscription.on('message', (message) => {
            console.log(message.data.toString());
            this.notify(JSON.parse(message.data.toString()));
            message.ack();
        });
    }
    @Post()
    async notify(@Body() message: any) {
        const { notificationType } = message;
        switch (notificationType) {
            
            case 'ORDER_CANCELLED':
                if(message.channel.email ==  "YES"){
                    await this.notificationService.sendEmail(
                        message.businessMetadata.email,
                        'Order Rejected',
                        'Order {{ orderId }} has been rejected.',
                        message,
                        message.recepientInfo.recipientName,
                        "Order_Confirmation_Delivery_CANCELLED.html"
                    );
                }
                if(message.channel.sms ==  "YES"){
                    await this.notificationService.sendSMS(
                        message.businessMetadata.phoneNumber,
                        `Order ${message.content.orderId} has been rejected.`,
                    );
                }
            
                break;
            case 'ORDER_NOT_PAID':
                if(message.channel.email ==  "YES"){
                    await this.notificationService.sendEmail(
                        message.businessMetadata.email,
                        'Order Cancelled',
                        'Order {{ orderId }} has been cancelled.',
                        message,
                        message.recepientInfo.recipientName,
                        "Order_Confirmation_Delivery_NOT_PAID.html"
                    );
                }
                if(message.channel.sms ==  "YES"){
                    await this.notificationService.sendSMS(
                        message.businessMetadata.phoneNumber,
                        `Order ${message.content.orderId} has been cancelled.`,
                       

                    );
                }
                break;
                case 'ORDER_PAID':
                    if(message.channel.email ==  "YES"){
                        await this.notificationService.sendEmail(
                            message.businessMetadata.email,
                            'Order Cancelled',
                            'Order {{ orderId }} has been cancelled.',
                            message,
                            message.recepientInfo.recipientName,
                            "Order_Confirmation_Delivery_PAID.html"
                        );
                    }
                    if(message.channel.sms ==  "YES"){
                        await this.notificationService.sendSMS(
                            message.businessMetadata.phoneNumber,
                            `Order ${message.content.orderId} has been cancelled.`,
    
                        );
                    }
                break;

                case 'ACCOUNT_ACTIVITATION':
                    if(message.channel.email ==  "YES"){
                        await this.notificationService.sendEmail(
                            message.businessMetadata.email,
                            'Order Cancelled',
                            'Order {{ orderId }} has been cancelled.',
                            message,
                            message.recepientInfo.recipientName,
                            "Accountdeactivation.html"
                        );
                    }
                    if(message.channel.sms ==  "YES"){
                        await this.notificationService.sendSMS(
                            message.businessMetadata.phoneNumber,
                            `Order ${message.content.orderId} has been cancelled.`,
    
                        );
                    }
                break;

                case 'DISCOUNT':
                    if(message.channel.email ==  "YES"){
                        await this.notificationService.sendEmail(
                            message.businessMetadata.email,
                            'Order Cancelled',
                            'Order {{ orderId }} has been cancelled.',
                            message,
                            message.recepientInfo.recipientName,
                            "Discount.html"
                        );
                    }
                    if(message.channel.sms ==  "YES"){
                        await this.notificationService.sendSMS(
                            message.businessMetadata.phoneNumber,
                            `Order ${message.content.orderId} has been cancelled.`,
    
                        );
                    }
                break;
                case 'GENERIC_ANNOUNCEMENT':
                    if(message.channel.email ==  "YES"){
                        await this.notificationService.sendEmail(
                            message.businessMetadata.email,
                            'Order Cancelled',
                            'Order {{ orderId }} has been cancelled.',
                            message,
                            message.recepientInfo.recipientName,
                            "Genericannouncement.html"
                        );
                    }
                    if(message.channel.sms ==  "YES"){
                        await this.notificationService.sendSMS(
                            message.businessMetadata.phoneNumber,
                            `Order ${message.content.orderId} has been cancelled.`,
    
                        );
                    }
                break;

                case 'CUSTOMER_ONBOARDING':
                    if(message.channel.email ==  "YES"){
                        await this.notificationService.sendEmail(
                            message.businessMetadata.email,
                            'Order Cancelled',
                            'Order {{ orderId }} has been cancelled.',
                            message,
                            message.recepientInfo.recipientName,
                            "GrubDirectCustomerOnboarding.html"
                        );
                    }
                    if(message.channel.sms ==  "YES"){
                        await this.notificationService.sendSMS(
                            message.businessMetadata.phoneNumber,
                            `Order ${message.content.orderId} has been cancelled.`,
    
                        );
                    }
                break;
                
                case 'OUTSTANDING_BALANCE':
                    if(message.channel.email ==  "YES"){
                        await this.notificationService.sendEmail(
                            message.businessMetadata.email,
                            'Order Cancelled',
                            'Order {{ orderId }} has been cancelled.',
                            message,
                            message.recepientInfo.recipientName,
                            "Outstandingbalance.html"
                        );
                    }
                    if(message.channel.sms ==  "YES"){
                        await this.notificationService.sendSMS(
                            message.businessMetadata.phoneNumber,
                            `Order ${message.content.orderId} has been cancelled.`,
    
                        );
                    }
                break;


                case 'RECTIFIED':
                    if(message.channel.email ==  "YES"){
                        await this.notificationService.sendEmail(
                            message.businessMetadata.email,
                            'Order Cancelled',
                            'Order {{ orderId }} has been cancelled.',
                            message,
                            message.recepientInfo.recipientName,
                            "Rectified.html"
                        );
                    }
                    if(message.channel.sms ==  "YES"){
                        await this.notificationService.sendSMS(
                            message.businessMetadata.phoneNumber,
                            `Order ${message.content.orderId} has been cancelled.`,
    
                        );
                    }
                break;

                case 'RESERVATION_CONFIRMATION':
                    if(message.channel.email ==  "YES"){
                        await this.notificationService.sendEmail(
                            message.businessMetadata.email,
                            'Order Cancelled',
                            'Order {{ orderId }} has been cancelled.',
                            message,
                            message.recepientInfo.recipientName,
                            "ReservationConfirmation.html"
                        );
                    }
                    if(message.channel.sms ==  "YES"){
                        await this.notificationService.sendSMS(
                            message.businessMetadata.phoneNumber,
                            `Order ${message.content.orderId} has been cancelled.`,
    
                        );
                    }
                break;
                
        }
    }

    @Post('queue')
    async notifyFromQueue(@Body() message: any) {
        const data = await this.pubsub.topic('projects/double-balm-378512/topics/MyTopic')
            .publish(Buffer.from(JSON.stringify(message)));
        return 'OK';
    }
}
