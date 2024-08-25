import express from 'express';
import cors from 'cors';

import routes from './routes';

export class App{
    public server;
    
    constructor() {
        this.server = express();

        this.server.use(express.json({limit: '1mb'}));
        this.server.use(express.urlencoded({ limit: '1mb' }));
        
        this.middleware();
        this.routing();
    }

    private middleware() {
        this.server.use(express.json());
        this.server.use((req, res, next) => {
            res.header("Access-Control-Allow-Origin", "*");            
            res.header("Access-Control-Allow-Methods", 'GET,PUT,POST,DELETE');  
            this.server.use(cors());
            next();
        });
    }

    private routing() {
        this.server.use(routes);
    }
}