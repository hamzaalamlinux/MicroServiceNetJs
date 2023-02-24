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
            case 'ORDER_DELIVERY':
                try {
                    await this.notificationService.sendEmail(
                        message.businessMetadata.email,
                        'Order Delivery',
                        'Order {{ orderId }} has been placed.',
                        message,
                        message.recepientInfo.recipientName
                    );
                    await this.notificationService.sendSMS(
                        message.businessMetadata.phoneNumber,
                        `Order ${message.orderId} has been placed.`,
                    );
                } catch (error) {
                    console.log(error);
                }
                break;
            case 'rejected':
                await this.notificationService.sendEmail(
                    message.businessMetadata.email,
                    'Order Rejected',
                    'Order {{ orderId }} has been rejected.',
                    message,
                    message.recepientInfo.recipientName
                );
                await this.notificationService.sendSMS(
                    message.businessMetadata.phoneNumber,
                    `Order ${message.content.orderId} has been rejected.`,
                );
                break;
            case 'cancelled':
                await this.notificationService.sendEmail(
                    message.businessMetadata.email,
                    'Order Cancelled',
                    'Order {{ orderId }} has been cancelled.',
                    message,
                    message.recepientInfo.recipientName
                );
                await this.notificationService.sendSMS(
                    message.businessMetadata.phoneNumber,
                    `Order ${message.content.orderId} has been cancelled.`,

                );
                break;
            default:
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
