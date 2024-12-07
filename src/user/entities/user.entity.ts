import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Type } from "class-transformer";
import { HydratedDocument } from "mongoose";
import { Address, AddressSchema } from "src/address/entities/address.entity";
import { v4 as uuidv4 } from 'uuid';
export type UserDocument = HydratedDocument<User>;

@Schema()
export class User {
  @Prop({
    type: String,
    default: () => uuidv4(),
    required: true,
  })
  _id: string; // Overrides MongoDB default ObjectId with UUID

  @Prop({ required: true })
  name: string;

  @Prop({ required: true, unique: true})
  email: string;

  @Prop({ type: String, ref: 'Address' }) // Tham chiếu tới Address bằng _id
  address: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
