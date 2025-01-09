const Actor = require('../models/Actor');

module.exports = class ActorController{

    static createActor(req,res){
        res.render('actors/addActor') 
    }

    static async showActor(req,res){
        
        //ASC -> Ascendente 
        //DESC -> Descendente 

        const actor = await Actor.findAll({order:[['code', 'ASC']], raw: true})

        res.render('actors/showActor', {actor})
    }

    static async showClient(req,res){

        const actor = await Actor.findAll({where: {client: true}, order:[['code', 'ASC']], raw: true})

        res.render('actors/showActor', {actor})
    }

    static async showSupplier(req,res){

        const actor = await Actor.findAll({where: {supplier: true}, order:[['code', 'ASC']], raw: true})

        res.render('actors/showActor', {actor})
    }

    static async editActor(req,res){

        const uuid = req.params.uuid; 
        const actor = await Actor.findOne({where:{uuid: uuid}, raw: true})

        //res.render('actors/editActor', {actor})
        res.render('actors/editActor', {actor})
    }

    // Funciton POST 

    static async addActor(req,res){

        let client = req.body.client;
        let supplier = req.body.supplier;

        if(client === 'on'){
            client = true
        }else{
            client = false
        }

        if(supplier === 'on'){
            supplier = true
        }else{
            supplier = false
        }


        const actor = {
            name: req.body.name,
            client,
            supplier,
            contact: req.body.contact,
            contact_number: req.body.contact_number, 
            email: req.body.email,
        }

        await Actor.create(actor)

        res.redirect('/actors/showActor')

    }

    static async removeActor(req,res){
        const uuid = req.body.uuid
        await Actor.destroy({where:{uuid: uuid}})

        res.redirect('/actors/showActor')
    }
    
    static async updateActor(req,res){
        const uuid = req.body.uuid

        let client = req.body.client;
        let supplier = req.body.supplier;

        if(client === "on"){
            client = true
        }else{
            client = false
        }

        if(supplier === "on"){
            supplier = true
        }else{
            supplier = false
        }

        const actor ={
            name: req.body.name,
            contact: req.body.contact,
            contact_number: req.body.contact_number,
            email: req.body.email,
            client,
            supplier,
        }

        await Actor.update(actor, {where: {uuid: uuid}})

        res.redirect('/actors/showActor')
    }

} 