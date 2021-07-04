const Database = require('./database/db');
const saveOphanage = require('./database/saveOphanage');

module.exports = {
    index(req,res){ //request and response//
        return res.render('index')
    },

    async orphanage(req,res){
        
        
        const id = req.query.id

        try {
            const db = await Database;
            const results = await db.all(`SELECT * FROM orphanages WHERE id = "${id}"`)
            const orphanage = results[0]    
            
            orphanage.images = orphanage.images.split(",")
            orphanage.firstImage = orphanage.images[0]

            if(orphanage.open_on_weekends =="0"){
                orphanage.open_on_weekends = false
            }else{
                orphanage.open_on_weekends = true
            }

            return res.render('orphanage', { orphanage })
        } catch (error) {
            console.log(error);
            return res.send('Erro no banco de dados!')
        }
        
    },

    async orphanages(req,res){
        //colocar o orphanage pelo banco
        try{
            const db = await Database;
            const orphanages = await db.all("SELECT * FROM orphanages")
            return res.render('orphanages', { orphanages })
        }catch(error){
            console.log(error)
            return res.send('Erro no banco de dados')
        }
        
    },

    createOphanages(req,res){
        return res.render('create-orphanage')
    },

    async saveOphanage(req, res){
        const fields = req.body

        //validar se todos os campors estão preenchidos //
        if(Object.values(fields).includes('')){
            return res.send('Todos os campos devem ser preechedos!')
        }

        try {
            //salvar um orphanage//
            const db = await Database
            await saveOphanage(db,{
                lat: fields.lat,
                lng: fields.lng,
                name: fields.name,
                about: fields.about,
                whatsapp: fields.whatsapp,
                images: fields.images.toString(),
                instructions: fields.instructions,
                opening_hours: fields.opening_hours,
                open_on_weekends: fields.open_on_weekends,
            })
            //redirecionamento
            return res.redirect('/orphanages')
        } catch (error) {
            console.log(error)
            return res.send('Erro no banco de dados!')
        }

        

    }

}