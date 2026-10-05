"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SessionService = void 0;
const users_repository_1 = require("../users/users.repository");
const password_1 = require("../../../shared/auth/password");
const jwt_1 = require("../../../shared/auth/jwt");
const app_error_1 = require("../../../shared/errors/app-error");
class SessionService {
    constructor(usersRepository = new users_repository_1.UsersRepository()) {
        this.usersRepository = usersRepository;
    }
    async login(body) {
        const identifier = body.identifier?.trim().toLowerCase();
        const password = body.password;
        if (!identifier || !password) {
            throw new app_error_1.AppError(400, "identifier and password are required");
        }
        const user = await this.usersRepository.findByIdentifierWithPassword(identifier);
        if (!user || user.status !== "active") {
            throw new app_error_1.AppError(401, "Invalid credentials");
        }
        const validPassword = await (0, password_1.comparePassword)(password, user.password);
        if (!validPassword) {
            throw new app_error_1.AppError(401, "Invalid credentials");
        }
        const accessToken = (0, jwt_1.signAccessToken)({
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
exports.SessionService = SessionService;
//# sourceMappingURL=session.service.js.map