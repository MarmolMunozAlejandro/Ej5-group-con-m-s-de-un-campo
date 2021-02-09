db.music.insertMany([

    {
        song:"Blanco y Negro", 
        genre:"Rap", author:"Nikone", 
        duration:{min:3, s:20}, 
        price: 4.05, 
        sales:50000, 
        date: new Date("2017,05,07")
    },
    {song:"Aviones de papel", genre:"Rap", author:"Nikone", duration:{min:3, s:0}, price: 12.05, sales:12540, date: new Date("2017,06,17")},
    {song:"Pal pulmón", genre:"Rap", author:"Nikone", duration:{min:2, s:40}, price:3.99, sales:45857, date: new Date("2017,08,21")},
    {song:"Mi estrella blanca", genre:"Flamenco", author:"FondoFlamenco", duration:{min:3, s:6}, price:5.75, sales:1500, date: new Date("2017,05,14")},
    {song:"Escúchame mujer", genre:"Flamenco", author:"FondoFlamenco", duration:{min:3, s:40}, price:6.33, sales:5060, date: new Date("2017,05,01")},
    {song:"Molinos de viento", genre:"Rap", author:"El mago de Oz", duration:{min:4, s:12}, price:21,sales:100000, date: new Date("2017,06,21")},
    {song:"Fiesta pagana", genre:"Pop", author:"El mago de Oz", duration:{min:7, s:1}, price: 15, sales:48520, date: new Date("2017,07,15")},
    {song:"La cantata del diablo", genre:"Metal", author:"El mago de Oz", duration:{min:21, s:13}, price:7.99, sales:80000, date: new Date("2018,01,24")},
    {song:"La gloire à mes genoux", genre:"Metal", author:"Côme", duration:{min:2, s:45}, price: 12.05, sales:5842, date: new Date("2018,02,17")},
    {song:"L'Assasymphonie", genre:"Metal", author:"Côme", duration:{min:4, s:3}, price:5.15, sales:1454, date: new Date("2018,04,04")},
    {song:"Lost on you", genre:"Pop", author:"LP", duration:{min:5, s:8}, price:9.99, sales:8920, date: new Date("2018,08,19")},
    {song:"You Know I'm No Good", genre:"Pop", author:"Amy Winehouse", duration:{min:4, s:14}, price:16.99, sales:889, date: new Date("2018,11,25")},
    {song:"Baby", genre:"Pop", author:"Amy Winehouse", duration:{min:3, s:39}, price:2.8, sales:143, date: new Date("2019,02,14")},
    {song:"Love The Way You Lie", genre:"Rap", author:"Eminem", duration:{min:4, s:26}, price:5.66, sales:53289, date: new Date("2019,03,09")},
    {song:"Despacito", genre:"Reggaeton", author:"Luis Fonsi", duration:{min:3, s:47}, price: 8.45, sales:568, date: new Date("2019,04,27")}
])