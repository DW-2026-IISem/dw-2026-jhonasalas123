"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const config_1 = require("./config");
const express_1 = __importDefault(require("express"));
async function main() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.use(express_1.default.json());
    const appConfig = new config_1.App(app.getHttpAdapter().getInstance());
    appConfig.routes();
    await app.listen(config_1.config.port);
}
main();
//# sourceMappingURL=main.js.map