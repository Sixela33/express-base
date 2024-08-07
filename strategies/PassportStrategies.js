import passport from "passport";
import { Strategy } from "passport-local";
import User from "../models/User.js";
import bcrypt from "bcrypt";

passport.serializeUser((user, done) => {
    done(null, user.id)
})

passport.deserializeUser(async (id, done) => {
    try {
        const foundUser = await User.findOne({where: {id}})
        if(!foundUser) throw {message: "User Not Found", status: 401}
        done(null, foundUser.dataValues)
    } catch (error) {
        done(error, null)
    }
})

export default passport.use(
    new Strategy({usernameField: "email"}, async (email, password, done) => {
        try {
            let foundUser = await User.findOne({where: {email}})
            foundUser = foundUser?.dataValues
            
            if(!foundUser) throw {message: "Invalid User", status: 401}
            if(!await bcrypt.compare(password, foundUser.password)) throw {message: "Invalid User", status: 401}

            done(null, foundUser)
        } catch (error) {
            done(error, null)
        }
    })
)