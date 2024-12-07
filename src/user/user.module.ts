import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from './entities/user.entity';
import { Model } from 'mongoose';
import { Address } from 'web3';
import { AddressService } from 'src/address/address.service';
import { AddressModule } from 'src/address/address.module';

@Module({
  imports: [MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
    AddressModule
  ],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
