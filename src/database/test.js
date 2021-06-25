const Database = require('./db');

Database.then(async db => {
    //inserir dados na tabela
    await db.run(`
        INSERT INTO orphanages (
            lat,
            lng,
            name,
            about,
            whatsapp,
            images,
            instructions,
            opening_hours,
            open_on_weekends
        ) VALUES (
            "-27.222633",
            "-49.6455874",
            "Lar das meninas",
            "Presta assistência a crianças de 06 a 15 anos que se encontre em situações de risco e/ou vulnerabilidade social.",
            "989809876567"
            "https://images.unsplash.com/photo-1600267188403-e6ab238d84a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjI0NTAzNTkz&ixlib=rb-1.2.1&q=80&w=1080&utm_source=unsplash_source&utm_medium=referral&utm_campaign=api-credit",
            "Venha como se sentir a vontade e traga muito amor e paciência para dar.",
            "Horários de visitas das 18h até 8h",
            "1"
        );
    `)

    //consultar dados da tabela
    const selectedOphanages = await db.all("SELECT * FROM orphanages")
    console.log(selectedOphanages)

    //consultar somente um orphanato por id
    const orphanage = await db.all('SELECT * FROM orphanages WHERE id = "1"')
    console.log(orphanage)
})