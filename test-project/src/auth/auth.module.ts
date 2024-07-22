import { forwardRef, Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { AuthService } from './services/auth.service';
import { RolesGuard } from './guards/roles.guards';
import { JWtAuthGuard } from './guards/jwt-guard';
import { JwtStrategy } from './guards/jwt-strategy';
import { UserModule } from 'src/user/user.module';

@Module({
    imports:[
        forwardRef(()=> UserModule),
        JwtModule.registerAsync({
            imports: [ConfigModule],
            inject : [ConfigService],
            useFactory: async (configService: ConfigService) => ({
                secret: configService.get('JWT_SECRET'),
                signOptions: {expiresIn : '100000s'}
            })
        })
    ],
    providers: [AuthService, RolesGuard, JWtAuthGuard, JwtStrategy],
    exports: [AuthService]
})
export class AuthModule {}
