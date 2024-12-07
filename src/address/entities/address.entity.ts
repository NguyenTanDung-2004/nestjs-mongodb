import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Transform } from 'class-transformer';
import { v4 as uuidv4 } from 'uuid';
export type AddressDocument = Address & Document;
 
@Schema()
export class Address {
    @Prop({
        type: String,
        default: () => uuidv4(),
        required: true,
      })
  _id: string;
 
  @Prop()
  city: string;
 
  @Prop()
  street: string;
}
 
export const AddressSchema = SchemaFactory.createForClass(Address);