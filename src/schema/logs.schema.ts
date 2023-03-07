import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose"
import { IsObject } from "class-validator";

@Schema({ collection: 'NotificationLogs' })
export class logs {
   @Prop()
   NotificationName: string;
   @Prop()
   status : string;
   @Prop({type : IsObject})
   notificationEvent: object;
   @Prop()
   DateTime : string;
}
export const LogsSchema = SchemaFactory.createForClass(logs);