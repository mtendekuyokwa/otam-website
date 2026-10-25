import { IsEmail, IsString, MinLength } from 'class-validator';

export class LoginDto {
  @IsEmail({}, { message: 'a valid email is required' })
  public email!: string;

  @IsString()
  @MinLength(1, { message: 'password is required' })
  public password!: string;
}
