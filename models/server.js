const express = require('express');
const cors = require('cors');
const fs = require('fs');
class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.sportsPath = '/';

        //MIDDLEWARE
        this.middleware();

        //ROUTES
        this.routes();

        //CREATE DB
        this.readDB();

    }

    middleware() {
        //CORS
        this.app.use(cors());

        //LECTURA Y PARSEO DEL BODY
        this.app.use(express.json());

        //DIRECTORIO PUBLICO
        this.app.use(express.static('public'));
    }

    routes() {
        this.app.use(this.sportsPath, require('../routes/sports.routes'));
    }

    start() {
        this.app.listen(this.port, () => {
            console.log('Server is running on port: ' + this.port);
        });
    }

    readDB() {
        const base = {
            deportes: []
        }
        const pathDB = './db/sports.json';
        if (!fs.existsSync(pathDB)) {
            fs.writeFileSync(pathDB, JSON.stringify(base));
        }
    }
}


module.exports = Server;