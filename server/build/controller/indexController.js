"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.indexController = void 0;
class IndexController {
    index(req, res) {
        // res.send('CONTROLLER [INDEX]');
        res.json({ text: 'API => /api/games' });
    }
}
exports.indexController = new IndexController();
