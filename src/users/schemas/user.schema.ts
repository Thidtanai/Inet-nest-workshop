import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = Users & Document;

@Schema({ timestamps: true })
export class Users {
  @Prop({ required: true, unique: true })
  username: string;

  @Prop()
  password: string;

  @Prop()
  firstName: string;

  @Prop()
  lastName: string;

  @Prop()
  email: string;
}

export const UserSchema = SchemaFactory.createForClass(Users);
