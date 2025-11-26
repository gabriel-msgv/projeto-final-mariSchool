import { DataSource } from 'typeorm';
import { Collaborator } from './src/collaborator/entities/collaborator.entity';
import { Course } from './src/course/entities/course.entity';
import { Enrollment } from './src/enrollment/entities/enrollment.entity';

export default new DataSource({
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: '',
  database: 'marischool',
  entities: [Collaborator, Course, Enrollment],
  migrations: ['dist/migrations/*.js,ts'],
});