import { UsersRepository } from "../users/users.repository";
import { comparePassword } from "../../../shared/auth/password";
import { signAccessToken } from "../../../shared/auth/jwt";
import { AppError } from "../../../shared/errors/app-error";

export interface LoginDto {
  identifier: string;
  password: string;
}

export interface LoginResponseDto {
  access_token: string;
  token_type: "Bearer";
  expires_in: number;
  user: {
    id: number;
    username: string;
    email: string;
  };
}

export class SessionService {
  public constructor(
    private readonly usersRepository: UsersRepository = new UsersRepository()
  ) {}

  public async login(body: LoginDto): Promise<LoginResponseDto> {
    const identifier = body.identifier?.trim().toLowerCase();
    const password = body.password;

    if (!identifier || !password) {
      throw new AppError(400, "identifier and password are required");
    }

    const user =
      await this.usersRepository.findByIdentifierWithPassword(identifier);

    if (!user || user.status !== "active") {
      throw new AppError(401, "Invalid credentials");
    }

    const validPassword = await comparePassword(password, user.password);

    if (!validPassword) {
      throw new AppError(401, "Invalid credentials");
    }

    const accessToken = signAccessToken({
      id: user.id,
      username: user.username,
    });

    return {
      access_token: accessToken.token,
      token_type: "Bearer",
      expires_in: accessToken.expiresIn,
      user: {
        id: user.id,
        username: user.username,
        email: user.email,
      },
    };
  }
}
