import { IsEmail, IsString, IsStrongPassword } from 'class-validator';


export class RegisterUserDto {

  @IsString()
  name: string;


  @IsString()
  @IsEmail()
  email:string;


  @IsString()
  @IsStrongPassword()
  password: string;


}