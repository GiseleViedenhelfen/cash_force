"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_model_1 = require("../database/models/user.model");
class UserService {
    constructor() {
        this.model = user_model_1.default;
    }
    async getUsers() {
        const users = await this.model.findAll();
        return users;
    }
}
exports.default = UserService;
//# sourceMappingURL=userService.js.map