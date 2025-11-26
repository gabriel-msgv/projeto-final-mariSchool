import { IsString, Length } from 'class-validator'

export class CreateCourseDto {
    @IsString()
    @Length()
    name: string = 'Gabriel'
}
