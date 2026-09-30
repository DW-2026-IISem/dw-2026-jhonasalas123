"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolveSeedCounts = resolveSeedCounts;
function resolveSeedCounts() {
    return {
        clients: Number(process.env.SEED_CLIENTS ?? 10),
        pets: Number(process.env.SEED_PETS ?? 10),
    };
}
//# sourceMappingURL=counts.js.map