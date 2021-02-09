db.music.aggregate([
    {$match: 
            {date:{$gte: new Date("2017-01-01"), $lte: new Date("2018-05-05")}
        }},     
    {$group:
        {_id: "$author",
        songs:{$sum:1},
        moneyGot:
            {$sum:
                {$multiply:["$price","$sales"]}
            },
            mediaDuration:
                {$sum:
                    {$divide:
                        [{$sum:
                            [{$multiply:
                                ["$duration.min",
                                60]},
                            "duration.s"]},
                        {$sum:1}]
                    }
                }
        }
    },
    {$project:{
        _id:0,
        author: "$_id",
        songs:"$songs",
        mediaDuration:"$mediaDuration",
        moneyGot:{$round:["$moneyGot",1]},
        IVA:{$round:[{$multiply:["$moneyGot",0.21]},1]},
        benefitFinal:{$round:[{$multiply:["$moneyGot",0.79]},1]},
        }},
        {$sort:{author:1}}
]).pretty()

// Filtra los registros(match) y nos muestra aquellos que estén entre dos fechas concretas, y los agrupa 
// en función del autor. Dicho conjunto muestra el número de canciones de cada autor, el dinero obtenido
// con ellas y la media de duración de sus canciones. Luego proyecta a raiz de la agrupación nuevos campos 
// que muestran el IVA y el beneficio final que ha obtenido el cantante, para luego ordenarlo alfabéticamente.