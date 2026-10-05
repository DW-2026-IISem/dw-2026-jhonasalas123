"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toRefreshTokenResponse = toRefreshTokenResponse;
/**
 * Mapper modelo -> DTO de respuesta.
 * El resultado es un objeto plano y no incluye token_hash.
 */
function toRefreshTokenResponse(token) {
    const { token_hash, ...safe } = token.toJSON();
    return {
        ...safe,
        is_expired: new Date(token.expires_at).getTime() <= Date.now(),
    };
}
//# sourceMappingURL=refresh-token-response.dto.js.map