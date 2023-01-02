"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const userService_1 = require("../service/userService");
class UserController {
    constructor(userService = new userService_1.default()) {
        this.userService = userService;
        this.getAll = async (req, res) => {
            const users = await this.userService.getUsers();
            return res.status(200).json(users);
        };
    }
}
exports.default = UserController;
//# sourceMappingURL=user.controller.js.map