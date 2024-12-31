const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const validator = require('validator');
const schema = mongoose.Schema;

const signup = new schema({
    username :{
        type: String,   
        required : true   
    },   
    password :{   
        type: String,   
        required : true
    }
})

//satatics

signup.statics.signup = async function(username , password){
    if(!username || !password){
         throw Error('all fields must be filled ')
    }

    if(!validator.isStrongPassword(password)){
        throw Error('password not strong')
    }

    const sameusername = await this.findOne({username})
    if(sameusername){
        throw Error('username is already taken')
    }

    const hash = await bcrypt.hash(password , 10)
    const user = await this.create({username , password : hash})

    return user
}

//signin

signup.statics.signin = async function(username , password){

    if(!username || !password){
        throw Error('all fields must be filled')
    }

    const user = await this.findOne({username})
    if(!user){
        throw Error('username not found')
    }

    const match = await bcrypt.compare(password , user.password)
    if(!match){
        throw Error('password is wrong')
    }

    return user
}

const su = mongoose.model('signup-routines' , signup)
module.exports = su;