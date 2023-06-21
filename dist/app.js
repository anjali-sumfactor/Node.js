"use strict";
// import express, { Request, Response, NextFunction, Application, ErrorRequestHandler } from 'express';
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
const http_1 = require("http");
const port = 8080;
const server = (0, http_1.createServer)((request, response) => {
    console.log("🚀 ~ file: app.ts:60 ~ server ~ request:", request);
    if (request.url == "/name") {
        if (request.method === "GET") {
            response.end("hello world");
        }
        else {
            response.end("Worng method for this api");
        }
    }
});
server.listen(port, () => console.log(`server islistining at port ${port}`));