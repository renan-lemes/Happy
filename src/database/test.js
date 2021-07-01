const Database = require('./db');
const saveOrphanage = require('./saveOphanage');

Database.then(async db => {

    //inserir dados na tabela
     await saveOrphanage(db, {
        lat: "-27.222633",
        lng: "-49.6455874",
        name: "Lar dos meninos",
        about: "Presta assistência a crianças de 06 a 15 anos que se encontre em situações de risco e/ou vulnerabilidade social.",
        whatsapp:"97949595647",
        images: [
            "https://images.unsplash.com/photo-1600267188403-e6ab238d84a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjI0NTAzNTkz&ixlib=rb-1.2.1&q=80&w=1080&utm_source=unsplash_source&utm_medium=referral&utm_campaign=api-credit",
            "https://images.unsplash.com/photo-1614613998084-2b014d2b56d6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjI0NTAzNjEz&ixlib=rb-1.2.1&q=80&w=1080&utm_source=unsplash_source&utm_medium=referral&utm_campaign=api-credit"
        ].toString(),
        instructions: "Venha como se sentir a vontade e traga muito amor e paciência para dar.",
        opening_hours: "Horários de visitas das 18h até 8h",
        open_on_weekends: "0"
    }) 

    //consultar dados da tabela
    const selectedOphanages = await db.all("SELECT * FROM orphanages")
    console.log(selectedOphanages)

    //consultar somente um orphanato por id
    const orphanage = await db.all('SELECT * FROM orphanages WHERE id = "2"')
    console.log(orphanage)

    //deletar dado da tabela//
    //console.log(await db.run("DELETE FROM orphanages WHERE id = '4'"))
    //console.log(await db.run("DELETE FROM orphanages WHERE id = '5'"))

})