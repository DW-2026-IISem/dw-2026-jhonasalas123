"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.withTransaction = withTransaction;
const db_1 = require("../../database/db");
async function withTransaction(work) {
    const transaction = await db_1.sequelize.transaction();
    try {
        const result = await work(transaction);
        await transaction.commit();
        return result;
    }
    catch (error) {
        await transaction.rollback();
        throw error;
    }
}
//# sourceMappingURL=with-transaction.js.map