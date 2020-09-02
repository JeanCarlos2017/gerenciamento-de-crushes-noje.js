import * as mongoose from 'mongoose';

class DataBase {
    private dburl = 'mongodb://localhost:27017/db-gerenciamento-crush';
    private dbconnection;

    constructor() {}

    createConnection(){
        mongoose.connect(this.dburl);
        this.logger();

    }

    logger(){
        this.dbconnection = mongoose.connection;
        this.dbconnection.on('connected', ()=>{
            console.log('Mongoose conectado')
        });
        this.dbconnection.on('erros', error=>{
            console.error.bind(console, 'Erro de conexão ao Mongoose :: '+error);

        })
    }


}

export default DataBase;