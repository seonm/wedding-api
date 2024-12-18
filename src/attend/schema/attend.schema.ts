import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Attend extends Document {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  tel: string;

  @Prop({ required: true })
  direction: string;

  @Prop({ required: true })
  boarding: string;
}

export const AttendSchema = SchemaFactory.createForClass(Attend);
