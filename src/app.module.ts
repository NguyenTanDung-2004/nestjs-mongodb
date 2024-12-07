import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { MongooseModule } from '@nestjs/mongoose';
import { AddressModule } from './address/address.module';
import { UserSchema } from './user/entities/user.entity';
import { AddressSchema } from './address/entities/address.entity';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://root:12345@localhost:27017/web3hackfest?authSource=admin&directConnection=true'),
    MongooseModule.forFeature([
      { name: 'User', schema: UserSchema },
      { name: 'Address', schema: AddressSchema },
    ]),
    UserModule, AddressModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
