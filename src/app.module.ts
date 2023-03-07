import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MailerModule } from '@nestjs-modules/mailer';
import { NotificationController } from './notification/notification.controller';
import { NotificationService } from './notification/notification.service';
import { MongooseModule } from '@nestjs/mongoose/dist/mongoose.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LogsSchema } from './schema/logs.schema';

@Module({

  imports: [
    MongooseModule.forRoot('mongodb+srv://hamza:hackpeople12@logs.fvdv3ak.mongodb.net/?retryWrites=true&w=majority'),
    ConfigModule.forRoot(),
    MongooseModule.forFeature([{ name: 'Logs', schema: LogsSchema }])
  ],
  controllers: [AppController , NotificationController],
  providers: [AppService ,NotificationService],
})
export class AppModule { }
