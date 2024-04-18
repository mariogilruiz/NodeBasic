
const mongoose = require("mongoose");

const User = require("../api/models/user.model");

const arrayUsers = [
    {
        "name": "Ana Zabaleta",
        "phoneNumber": 657843902,
        "email": "anazab@gmail.com",
        "coverImage": "https://img.freepik.com/foto-gratis/mujer-hermosa-joven-mirando-camara-chica-moda-verano-casual-camiseta-blanca-pantalones-cortos-hembra-positiva-muestra-emociones-faciales-modelo-divertido-aislado-amarillo_158538-15796.jpg?t=st=1713422760~exp=1713426360~hmac=eb7e2664ef85c108220b161e06353ba502a02dafafb147829ab98abca2bcc7e6&w=740",
        "password": "anazUpgrade",
        "allergy": ["661fe9ec1f0e96735320f7a9"]
    },

    {
    "name": "Juan Perez",
    "phoneNumber": 657843901,
    "email": "juanperez@gmail.com",
    "coverImage": "https://example.com/image.jpg",
    "password": "juanUpgrade",
    "allergy": ["661fe9ec1f0e96735320f7a9", "661fe9c71f0e96735320f7a1"]
    },

    {
    "name": "María García",
    "phoneNumber": 657843902,
    "email": "mariagarcia@gmail.com",
    "coverImage": "https://example.com/image.jpg",
    "password": "mariaUpgrade",
    "allergy": ["661fe9d91f0e96735320f7a5"]
    },

    {
    "name": "Carlos López",
    "phoneNumber": 657843903,
    "email": "carloslopez@gmail.com",
    "coverImage": "https://example.com/image.jpg",
    "password": "carlosUpgrade",
    "allergy": ["661fe9d01f0e96735320f7a3", "661fe9df1f0e96735320f7a7"]
    },

    {
    "name": "Laura Rodríguez",
    "phoneNumber": 657843904,
    "email": "laurarodriguez@gmail.com",
    "coverImage": "https://example.com/image.jpg",
    "password": "lauraUpgrade",
    "allergy": ["661fe9c71f0e96735320f7a1"]
    },

    {
    "name": "Javier Ruiz",
    "phoneNumber": 657843909,
    "email": "javierruiz@gmail.com",
    "coverImage": "https://example.com/image.jpg",
    "password": "javierUpgrade",
    "allergy": ["661fe9d91f0e96735320f7a5"]
    },

    {
    "name": "Elena González",
    "phoneNumber": 657843910,
    "email": "elenagonzalez@gmail.com",
    "coverImage": "https://example.com/image.jpg",
    "password": "elenaUpgrade",
    "allergy": ["661fe9ec1f0e96735320f7a9", "661fe9d91f0e96735320f7a5"]
    },

    {
    "name": "Sara Fernández",
    "phoneNumber": 657843908,
    "email": "sarafernandez@gmail.com",
    "coverImage": "https://example.com/image.jpg",
    "password": "saraUpgrade",
    "allergy": ["661fe9c71f0e96735320f7a1", "661fe9df1f0e96735320f7a7"]
    },
] 

    mongoose.connect("mongodb+srv://anabh05:Upgrade24@cluster0.xccbjus.mongodb.net/Applergic")
        .then(async () => {
            const allUsers = await User.find();
            if (allUsers.length > 0) {
                await User.collection.drop();
                console.log("Usuarios borrados");
            }
        })
        .catch((error) => console.log("error borrando usuarios", error))
        .then(async () => {
            const userMap = arrayUsers.map((user) => new User(user));
            await User.insertMany(userMap);
            console.log("Usuarios insertados");
        })
        .catch((error) => console.log("error insertando usuarios", error))
        .finally(() => mongoose.disconnect());
