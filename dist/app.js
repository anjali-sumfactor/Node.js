"use strict";
// import express, { Request, Response, NextFunction, Application, ErrorRequestHandler } from 'express';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// import { Server } from 'http';
// import createHttpError from 'http-errors';
// import { config } from 'dotenv';
// config();
// const app: Application = express()
// app.get('/', (req: Request, res: Response, next: NextFunction) => {
//     res.send('Hello from ts app');
// });
// app.use((req: Request, res: Response, next: NextFunction) => {
//     next(new createHttpError.NotFound())
// });
// const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
//     res.status(err.status || 500);
//     res.send({
//         status: err.status || 500,
//         message: err.message,
//     })
// }
// app.use(errorHandler);
// const PORT: Number = Number(process.env.PORT) || 3000
// const server: Server = app.listen(PORT, () =>
//     console.log(server, `server is on port ${PORT}`));
// import { createServer, IncomingMessage, ServerResponse } from "http";
// import * as fs from 'fs';
// import * as url from "url";
// import * as path from 'path';
// const port = 8080;
// const server = createServer((request: IncomingMessage, response: ServerResponse) => {
//     console.log("🚀 ~ file: app.ts:60 ~ server ~ request:", request)
//     if (request.url == "/name") {
//         if (request.method === "GET") {
//             // response.end("hello world");
//             // Create files:-
//             fs.open('mynewfile2.txt', 'w', function (err, file) {
//                 if (err) throw err;
//                 console.log('File open');
//             });
//             //Update files:-
//             fs.appendFile('mynewfile.txt', ' Append content', function (err) {
//                 if (err) throw err;
//                 console.log('File append');
//             });
//             fs.writeFile("myFile.txt", "This is node js session", function (err) {
//                 if (err) throw err;
//                 console.log("File written Sucessfully ")
//             });
//             // Read files:-
//             const readfile = fs.readFileSync(path.join(__dirname, 'myFile.txt'), { encoding: 'utf-8' })
//             console.log(readfile);
//             // Delete files:-
//             // fs.unlink('mynewfile3.txt', function (err) {
//             //     if (err) throw err;
//             //     console.log('File deleted!');
//             // });
//             //Rename files:-
//             // fs.rename('mynewfile1.txt', 'myrenamedfile.txt', function (err) {
//             //     if (err) throw err;
//             //     console.log('File Renamed!');
//             // });
//             var adr = 'http://localhost:8080/default.htm?year=2021&month=August&name=anjali&tech=fullstack';
//             var q = url.parse(adr, true);
//             console.log("🚀 ~ file: app.ts:105 ~ server ~ q:", q)
//         } else {
//             response.end("Worng method for this api");
//         }
//     }
// });
// server.listen(port, () => console.log(`server is listining at port ${port}`));
//=============================== EVENTS ===============================:- 
const events_1 = require("events");
const eventBroker = new events_1.EventEmitter();
eventBroker.on('event-1', () => {
    console.log("event 1 is fired");
});
eventBroker.on('checkPage', (statusCode, msg) => {
    console.log(`status code is ${statusCode} and the page is ${msg}`);
});
eventBroker.emit('event-1');
eventBroker.emit('checkPage', 200, 'ok');
//=============================== MULTER ===============================:-
const express_1 = __importDefault(require("express"));
const multer_1 = __importDefault(require("multer"));
const app = (0, express_1.default)();
const port = 8080;
const storage = multer_1.default.diskStorage({
    destination(req, file, callback) {
        callback(null, './src');
    },
    filename(req, file, callback) {
        callback(null, file.originalname);
    },
});
const upload = (0, multer_1.default)({ storage: storage });
app.get('/uploadFile', upload.single('file'), (req, res, next) => {
    try {
        const file = req.file;
        console.log("🚀 ~ file: app.ts:46 ~ app.get ~ file:", file);
        res.status(200).send("file is sucessfully saved");
    }
    catch (error) {
        console.log("🚀 ~ file: app.ts:51 ~ app.get ~ error:", error);
    }
});
app.listen(port, () => console.log(`server is listining at port ${port}`));
// const transporter = nodemailer.createTransport({
//     service: 'gmail',
//     auth: { user: "na8008983@gmail.com", pass: "ulgrmvjgqnjbcmzp" }
// })
// let mailOptions = {
//     from: "na8008983@gmail.com",
//     to: "nikhil.sumfactor@gmail.com",
//     subject: "NODEJS",
//     text: "THIS IS NODEJS TUTORIAL"
// }
// app.get('/sendEmail', (req: Request, res: Response, next: NextFunction) => {
//     transporter.sendMail(mailOptions, (error, info) => {
//         if (error) return res.status(500).send({ error: error })
//         console.log("🚀 ~ file: app.ts:80 ~ transporter.sendMail ~ info:", info)
//         return res.status(200).send({ info: info })
//     })
// })
