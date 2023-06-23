"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectNodeDatabase = void 0;
const mysql_1 = __importDefault(require("mysql"));
const connection = mysql_1.default.createConnection({
    host: "localHost",
    user: "root",
    password: "Anjali@12345",
    database: "anjalidb"
});
const connectNodeDatabase = () => {
    return new Promise((resolve, reject) => {
        try {
            connection.connect((error) => {
                if (error)
                    return reject(error);
                return resolve("Database connected successfully");
            });
        }
        catch (error) {
            console.log({ error });
        }
    });
};
exports.connectNodeDatabase = connectNodeDatabase;
