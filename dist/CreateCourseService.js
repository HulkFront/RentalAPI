"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CreateCurseService {
    execute({ name, duration = 8, educator }) {
        console.log(name, duration, educator);
    }
}
exports.default = new CreateCurseService();
