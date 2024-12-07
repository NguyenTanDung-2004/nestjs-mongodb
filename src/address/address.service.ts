import { Injectable } from '@nestjs/common';
import { CreateAddressDto } from './dto/create-address.dto';
import { UpdateAddressDto } from './dto/update-address.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Address } from 'web3';

@Injectable()
export class AddressService {
  constructor(
    @InjectModel('Address') private addressModel: Model<Address>,
  ){}
  create(createAddressDto: CreateAddressDto) {
    return 'This action adds a new address';
  }

  async createAddress(street: string, city: string){
    return await new this.addressModel({
      city: city,
      street: street,
    }).save();
  }

  findAll() {
    return `This action returns all address`;
  }

  findOne(id: number) {
    return `This action returns a #${id} address`;
  }

  update(id: number, updateAddressDto: UpdateAddressDto) {
    return `This action updates a #${id} address`;
  }

  remove(id: number) {
    return `This action removes a #${id} address`;
  }
}
