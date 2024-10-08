import UserService from './UserService.js'

class UserController {
    constructor() {
        this.service = new UserService()
    }

    login = async (req, res, next) => {
        try {
            const {password, id, createdAt, updatedAt, ...userData} = req.user
            res.json(userData)
        } catch (error) {
            next(error)
        }
    }

    register = async (req,res, next) => {
        try {
            const {email, password, name} = req.body
            await this.service.register(email, password, name)
            res.sendStatus(200)
        } catch (error) {
            next(error)
        }
    }

    logout  = async (req,res, next) => {
        try {
            req.logout((err) => {
               if(err) {return next(err)}
            })
            res.sendStatus(200)
        } catch (error) {
            next(error)
        }
    }

    status = async (req, res, next) => {
        try {
            res.send(req.user)
        } catch (error) {
            next(error)
        }
    }
}

export default UserController