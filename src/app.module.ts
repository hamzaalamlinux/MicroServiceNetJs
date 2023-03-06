import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MailerModule } from '@nestjs-modules/mailer';
import { NotificationController } from './notification/notification.controller';
import { NotificationService } from './notification/notification.service';
import { MongooseModule } from '@nestjs/mongoose/dist/mongoose.module';

@Module({

  imports: [
    MongooseModule.forRoot('mongodb+srv://hamza:hackpeople12@logs.fvdv3ak.mongodb.net/?retryWrites=true&w=majority'),
    ConfigModule.forRoot(),
    MailerModule.forRoot({
      transport: {
        host: 'smtp.gmail.com',
        port: '465',
        auth: {
          user: 'createme501@gmail.com',
          pass: "Dogmission1!",
        },
      },
    }),
  ],
  controllers: [NotificationController],
  providers: [NotificationService],
})
export class AppModule { }
