const jwt = require('jsonwebtoken');
const signupschema =  require('../Schema/signup')

const requireAuth = async (req ,res , next) => {

    const { authorization } = req.headers

    if(!authorization){
        return res.json({error :'authication error'})
    }

    const token = authorization.split(' ')[1];

    try {
        const { _id } = jwt.verify(token, process.env.secret)
    
        req.user = await signupschema.findOne({ _id }).select('_id')
        next()
    
      } catch (error) {
        console.log(error)
        res.status(401).json({error: 'Request is not authorized'})
      }
}

module.exports = requireAuth;