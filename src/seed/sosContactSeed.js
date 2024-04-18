
const mongoose = require("mongoose");

const SosContact = require("../api/models/sosContact.model");

const arraySosContact = [

    {
        "name": "José Martínez",
        "numberPhone": 123456789,
        "email": "josemartinez@example.com",
        "user": "6620cb91119b75097dab3d02"
    },
    {
        "name": "María García",
        "numberPhone": 987654321,
        "email": "mariagarcia@example.com",
        "user": "6620cb91119b75097dab3d03"
    },
    {
        "name": "Antonio López",
        "numberPhone": 246813579,
        "email": "antoniolopez@example.com",
        "user": "6620cb91119b75097dab3d04"
    },
    {
        "name": "Carmen Rodríguez",
        "numberPhone": 135792468,
        "email": "carmenrodriguez@example.com",
        "user": "6620cb91119b75097dab3d05"
    },
    {
        "name": "Francisco Martín",
        "numberPhone": 369258147,
        "email": "franciscomartin@example.com",
        "user": "6620cb91119b75097dab3d06"
    },
    {
        "name": "Ana Pérez",
        "numberPhone": 852741963,
        "email": "anaperez@example.com",
        "user": "6620cb91119b75097dab3d07"
    },
    {
        "name": "Javier González",
        "numberPhone": 741852963,
        "email": "javiergonzalez@example.com",
        "user": "6620cb91119b75097dab3d08"
    },
    {
        "name": "Laura Ruiz",
        "numberPhone": 159263748,
        "email": "lauraruiz@example.com",
        "user": "6620cb91119b75097dab3d09"
    }
]

    mongoose.connect("mongodb+srv://anabh05:Upgrade24@cluster0.xccbjus.mongodb.net/Applergic")
        .then(async () => {
            const allSosContacts = await SosContact.find();
            if (allSosContacts.length > 0) {
                await SosContact.collection.drop();
                console.log("Usuarios borrados");
            }
        })
        .catch((error) => console.log("error borrando usuarios", error))
        .then(async () => {
            const sosContactMap = arraySosContact.map((sosContact) => new  SosContact(sosContact));
            await SosContact.insertMany(sosContactMap);
            console.log("Usuarios insertados");
        })
        .catch((error) => console.log("error insertando usuarios", error))
        .finally(() => mongoose.disconnect());
