"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SessionController = void 0;
const base_controller_1 = require("../../../shared/http/base-controller");
const session_service_1 = require("./session.service");
class SessionController extends base_controller_1.BaseController {
    constructor() {
        super(...arguments);
        this.service = new session_service_1.SessionService();
        this.login = async (req, res) => {
            await this.run(res, () => this.service.login(req.body));
        };
    }
}
exports.SessionController = SessionController;
//# sourceMappingURL=session.controller.js.map