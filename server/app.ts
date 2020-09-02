import * as express from 'express';
import database from './db';
import controllerCrush from "../controller/controllerCrush";

class App{
    public app: express.Application;
    private database: database;
    private controllerCrush = new controllerCrush();

    constructor() {
        this.app = express();
        this.database = new database();
        this.database.createConnection();
        this.routes();
    }

    routes(){
        this.app.route('/').get( ((req, res) => {
            res.status(200).json({"result" : "Bem vindo ao gerenciamento de crushes"});
        }));
        this.app.route('/api/crushs').get( (req,res)=>
            this.controllerCrush.select(req, res)
        );

    }
}


export default new App();