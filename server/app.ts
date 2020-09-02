import * as express from 'express';
import * as bodyparser from 'body-parser';
import database from './db';
import controllerCrush from "../controller/controllerCrush";

class App{
    public app: express.Application;
    private database: database;
    private controllerCrush = new controllerCrush();

    constructor() {
        this.app = express();
        this.middleware();
        this.database = new database();
        this.database.createConnection();
        this.routes();
    }

    middleware(){
        this.app.use(bodyparser.json());
        this.app.use(bodyparser.urlencoded({extended: true}));
    }

    routes(){
        this.app.route('/').get( ((req, res) => {
            res.status(200).json({"result" : "Bem vindo ao gerenciamento de crushes"});
        }));
        this.app.route('/api/crushs').get( (req,res)=>
            this.controllerCrush.select(req, res)
        );
        this.app.route('/api/crushs/:id').get( (req,res)=>
            this.controllerCrush.selectOne(req, res)
        );
        this.app.route('/api/crushs').post( (req,res)=>
            this.controllerCrush.insert(req, res)
        );
        this.app.route('/api/crushs/:id').put( (req,res)=>
            this.controllerCrush.update(req, res)
        );

    }
}


export default new App();