"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("./config");
async function main() {
    const app = new config_1.App();
    await app.listen();
}
main().catch((error) => {
    console.error("❌ Error al iniciar la aplicación:", error);
    process.exit(1);
});
//# sourceMappingURL=main.js.map