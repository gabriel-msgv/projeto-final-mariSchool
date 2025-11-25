import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SchoolModule } from './school/school.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [SchoolModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'curso',
      entities: [],
      synchronize: false,  // importante! false em produção
      logging: true,
})

