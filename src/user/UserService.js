import User from "../../models/User.js";
import Session from "../../models/ Sessions.js";
import bcrypt from 'bcrypt'

class UserService {
    constructor() {

    }

    register = async (email, password, name) => {
        const user = await User.findOne({where: {email}})
        if (user) throw {message: 'Email account already in use', status: 400}

        const salt = await bcrypt.genSalt(10)
        const password_hash = bcrypt.hashSync(password, salt)

        let newUser = await User.create(({email, password:password_hash, name}))
        return newUser
    }

}

export default UserService