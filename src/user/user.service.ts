import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Address } from 'src/address/entities/address.entity';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './entities/user.entity';
import { AddressService } from 'src/address/address.service';

@Injectable()
export class UserService {
  constructor(
    @InjectModel('User') private userModel: Model<User>,
    private readonly addressService: AddressService
  ){}

  async create(createUserDto: CreateUserDto) {
    const address = this.addressService.createAddress(createUserDto.email, createUserDto.city);

    const user = await new this.userModel(
      {
        email:  createUserDto.email,
        name: createUserDto.name,
        address: (await address)._id
      }
    ).save();

    return user;
  }

  async findAll() {
    return this.userModel.find().populate('address').exec();
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
