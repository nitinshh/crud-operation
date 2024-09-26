const Models=require("../models/index")
const Joi=require("joi")
const helper=require("../helpers/commanHelper")

module.exports={
    insert: async(req, res)=> {
        try {
            const schema = Joi.object().keys({
                name: Joi.string().required(),
                email: Joi.string().required()
            })

            let payload = await helper.validationJoi(req.body, schema)

            let objToSave = {
                name: payload.name,
                email:payload.email 
            }

            let result = await Models.usersModel.create(objToSave)
            return res.send(result)

        } catch (error) {
            console.log(error)
            throw error
        }
        
    },

    getAllRecords: async (req, res) => {
        try {
            let result = await Models.usersModel.findAll();
            return res.json(result);
        } catch (error) {
            console.log(error);
            return res.status(500).json({ error: 'An error occurred while fetching records.' }); // Optional: return error response
        }
    },
    
    updateSomeRecords: async (req, res) => {
        try {
            await Models.usersModel.update({name:req.body.name},{where:{id:req.body.id}})
            let respose=await Models.usersModel.findOne({where:{id:req.body.id},raw:true})
            return res.send(respose)
        } catch (error) {
            console.log(error)
            throw error
        }
    },

    updateAllRecords:async(req,res)=>{
        try {
          await Models.usersModel.update({name:req.body.name},{where:{id:req.body.id}})
          let respose=await Models.usersModel.findOne({where:{id:req.body.id},raw:true})
          return res.send(respose)
        } catch (error) {
            console.log(error)
            throw error  
        }
    },

    deleteRecords:async(req,res)=>{
        try {
            await Models.usersModel.destroy({where:{id:req.body.id}})
            return res.send("deleted Record successfully")
        } catch (error) {
            console.log(error)
            throw error
        }
    }
};