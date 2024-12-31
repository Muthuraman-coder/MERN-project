const signupschema = require('../Schema/signup')
const jwt = require('jsonwebtoken')

const Createtoken = (_id) => {
    return jwt.sign({_id} , process.env.secret , {expiresIn : '2d'})
}

const signup = async (req , res ) =>{
    const {username , password} = req.body

    try{
        const user = await signupschema.signup(username , password)
        const token = Createtoken(user._id)
        res.json({username , token})
        console.log('user is here',user)
        await user.save()
    }catch(error){
        res.json({error : error.message})
    }
    
}

const signin = async (req , res) => {
    const {username , password } = req.body
    try{
        const user = await signupschema.signin(username , password)
        const token = Createtoken(user._id)
        res.json({username , token})
    }catch(error){
        res.json({error : error.message})
    }
}

module.exports = { signup , signin}