const routineschema = require('../Schema/routineschema')

const getroutines = async(req , res ) => {
   const routines = await routineschema.find().sort({createdAt : -1}) 
            res.status(200).json(routines)
}

const getroutine = async(req , res ) => {
    const {id }= req.params
    await routineschema.findById(id)
        .then((result) => {
            res.status(200).json(result)
        })
}

const postroutines = async(req , res ) => {
    const {name , body , duration } = req.body;
    const data = {name , body , duration}

    const emptyfields = Object.keys(data).filter(field => !data[field]);
    if (emptyfields.length > 0) {
      return res.status(400).json({ error: 'Please fill in all fields', emptyfields });
    }

    await routineschema.create(data)
        .then((result) => {
            res.status(200).json(result)
        })
}

const deleteroutine = async(req , res ) => {
   const {id} = req.params
   await routineschema.findOneAndDelete({_id : id})
        .then((result) => {
            res.status(200).json(result)
        })
}

const updateroutine = async(req , res ) => {
   const {id} = req.params
   await routineschema.findOneAndUpdate({_id : id } , { ...req.body})
        .then((result) => {
            res.status(200).json(result)
        })
}

module.exports = {getroutines , getroutine , postroutines , deleteroutine , updateroutine}