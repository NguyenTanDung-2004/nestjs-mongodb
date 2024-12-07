import { IsEmpty } from "class-validator";
import { Address } from "web3";

export class CreateUserDto {
  name: string;
  email: string;
  city: string;
  street: string;
}
