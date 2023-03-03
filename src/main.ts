import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { PubSub } from '@google-cloud/pubsub';
import { NotificationController } from './notification/notification.controller';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(process.env.PORT || 4000);
  // const pubsub = new PubSub({
  //   projectId: 'double-balm-378512'
  // });
  // const subscription = pubsub.subscription('projects/double-balm-378512/subscriptions/MySub');
  // subscription.on('message', (message) => {
  //   console.log(message.data.toString());
  //   app.get('notification').notify(JSON.parse(message.data.toString()));
  //   message.ack();
  // });
}
bootstrap();