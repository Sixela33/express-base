import express from "express"
import sequelize from "./models/index.js";
import cors from "cors";
import session from "express-session";

import errorHandler from "./middleware/ErrorHandler.js";
import './strategies/PassportStrategies.js'
import corsOptions from "./config/corsOptions.js";

import requestLogger from "./loggers/requestLogger.js";

import UserRouter from "./src/user/UserRouter.js";
import passport from "passport";
import credentials from "./middleware/credentials.js";
import SequelizeStore from 'connect-session-sequelize'

class Server {

    constructor(port, host) {
        this.port = port
        this.host = host
        this.app = express()
    }

    async start() {
        this.app.use(express.json({ limit: '20mb' }));
        this.app.use(express.urlencoded({ limit: '20mb', extended: true }));
        this.app.use(credentials)
        this.app.use(cors(corsOptions));
        this.app.use(requestLogger)

        // -----------------------------------------------
        //                  SEQUELIZE                        
        // -----------------------------------------------

        const SequelizeStoreInit = SequelizeStore(session.Store)


        try {
            await sequelize.authenticate();
            console.log('Conexión a la base de datos establecida correctamente.');
            await sequelize.sync({ logging: false})
            console.log('La base de datos fue sincronizada correctamente.');

        } catch (error) {
            console.error('No se pudo conectar a la base de datos:', error);
            process.exit(1);
        }


        this.app.use(session({
            secret: process.env.SESSION_SECRET,
            cookie: { 
                maxAge: 1 * 1000 * 60 * 60, // 1 hour
                secure: process.env.NODE_ENV === 'production', // use secure cookies in production
                httpOnly: true
            }, 
            saveUninitialized: false,
            resave: false,
            store: new SequelizeStoreInit({
                db: sequelize
            })
        }));

        this.app.use(passport.initialize())
        this.app.use(passport.session())
        // -----------------------------------------------
        //                  ROUTES                        
        // -----------------------------------------------

        this.app.use('/api/users', new UserRouter().start())

        // -----------------------------------------------
        //                  HANDLERS
        // -----------------------------------------------
    
        this.app.use(errorHandler)

        // -----------------------------------------------
        //                 SERVER LISTEN
        // -----------------------------------------------
        
        this.server = this.app.listen(this.port, () =>
            console.log(`Express server listening at: ${this.host}:${this.port}`)
        );
        this.server.on("error", (error) =>
            console.log(`Server Error: \n ${error.message}`)
        );

        return this.app

    }

    async stop() {
        if (this.server) {
          this.server.close()
          this.server = null
        }
      }
}

new Server(8080, 'localhost').start()