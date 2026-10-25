import { IsEmail, IsOptional, IsString, Matches, MaxLength, MinLength } from 'class-validator';

export class RegisterDto {
  @IsEmail({}, { message: 'a valid email is required' })
  public email!: string;

  /** Malawi numbers normalised to +265XXXXXXXXX on arrival. */
  @Matches(/^\+?[0-9\s\-().]{7,18}$/, { message: 'a valid phone number is required' })
  public phone!: string;

  @IsString()
  @MinLength(8, { message: 'password must be at least 8 characters' })
  @MaxLength(72, { message: 'password must be at most 72 characters' })
  public password!: string;

  @IsOptional()
  @IsString()
  @MaxLength(120)
  public fullName?: string;
}
