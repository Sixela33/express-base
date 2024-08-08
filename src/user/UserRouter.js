import express from 'express'
import UserController from './UserController.js'
import passport from 'passport'
import authMiddleware from '../../middleware/AuthHandler.js'
class UserRouter {
    constructor() {
        this.router = express.Router()
        this.controller = new UserController()
    }

    start() {

        this.router.post('/login', passport.authenticate('local'), this.controller.login)
        this.router.post('/register', this.controller.register)
        this.router.post('/logout', this.controller.logout)

        this.router.get('/status', authMiddleware(), this.controller.status)

        return this.router
    }

}

export default UserRouter