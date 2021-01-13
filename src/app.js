import {initializeMongoose} from "./repository/connection";
import express from "express";
import cookieParser from "cookie-parser";
import logger from "morgan";
import indexRouter from "./routes";
import productsRouter from "./routes/products";
import {port} from "./env";
import {createServer} from "http";

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

initializeMongoose();

app.use('/', indexRouter);
app.use('/products', productsRouter);

const server = createServer(app);

server.listen(port, 'localhost');
server.on('listening', () => {
    console.log('Express src started on port %s at %s', server.address().port, server.address().address);
});
