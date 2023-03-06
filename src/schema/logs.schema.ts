import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose"

@Schema()
export class logs {
   @Prop()
   NotificationName: string;
   @Prop()
   status : string;
   @Prop()
   object: string;
}
export const LogsSchema = SchemaFactory.createForClass(logs);