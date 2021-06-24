const orphanages = require('./database/fakedata');

module.exports = {
    index(req,res){ //request and response//
        return res.render('index')
    },

    orphanage(req,res){
        return res.render('orphanage')
    },

    orphanages(req,res){
        return res.render('orphanages', { orphanages })
    },

    createOphanages(req,res){
        return res.render('create-orphanage')
    }

}