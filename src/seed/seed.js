
const mongoose = require("mongoose");

const Producto = require("../api/models/producto.model");

const arrayProductos = [
    {
        "name": "Pizza",
        "ingredients": ["harina", "levadura", "salsa de tomate", "mozarella", "jamón", "sal", "aceite"],
        "allergy": ["661fe9c71f0e96735320f7a1", "661fe9d01f0e96735320f7a3"],
        "coverImage": "https://media.istockphoto.com/photos/pizza-picture-id179315563?k=20&m=179315563&s=612x612&w=0&h=yCRn95J-gs9yQZdzDCyjDwjo9FQYzr4bqTUnfAuB7zY="
    },
    {
        "name": "Ensalada",
        "ingredients": ["lechuga", "tomate", "aceitunas", "zanahoria", "vinagreta"],
        "allergy": ["661fe9ec1f0e96735320f7a9"],
        "coverImage": "https://media.istockphoto.com/photos/healthy-salad-in-a-bowl-picture-id183684056?k=20&m=183684056&s=612x612&w=0&h=STjo9FQYzr4bqTUnfAuB7zY="
    },


    {
        "name": "Sushi",
        "ingredients": ["arroz", "pescado", "alga nori", "wasabi", "jengibre"],
        "allergy": ["661fe9d91f0e96735320f7a5"],
        "coverImage": "https://media.istockphoto.com/photos/sushi-picture-id15835833?k=20&m=15835833&s=612x612&w=0&h=yCRn95J-gs9yQZdzDCyjDwjo9FQYzr4bqTUnfAuB7zY="
    },
    {
        "name": "Paella",
        "ingredients": ["arroz", "pollo", "camarones", "calamares", "pimentón"],
        "allergy": ["661fe9d01f0e96735320f7a3"],
        "coverImage": "https://media.istockphoto.com/photos/paella-picture-id15835833?k=20&m=15835833&s=612x612&w=0&h=yCRn95J-gs9yQZdzDCyjDwjo9FQYzr4bqTUnfAuB7zY="
    },
    {
        "name": "Tacos",
        "ingredients": ["tortilla", "carne", "cebolla", "cilantro", "limón"],
        "allergy": ["661fe9c71f0e96735320f7a1"],
        "coverImage": "https://media.istockphoto.com/photos/tacos-picture-id15835833?k=20&m=15835833&s=612x612&w=0&h=yCRn95J-gs9yQZdzDCyjDwjo9FQYzr4bqTUnfAuB7zY="
    },
    {
        "name": "Pasta Carbonara",
        "ingredients": ["pasta", "huevo", "bacon", "queso parmesano", "aceite"],
        "allergy": ["661fe9d01f0e96735320f7a3"],
        "coverImage": "https://media.istockphoto.com/photos/pasta-carbonara-picture-id15835833?k=20&m=15835833&s=612x612&w=0&h=yCRn95J-gs9yQZdzDCyjDwjo9FQYzr4bqTUnfAuB7zY="
    },
    {
        "name": "Hamburguesa de Pollo",
        "ingredients": ["pollo", "pan", "lechuga", "tomate", "mayonesa"],
        "allergy": ["661fe9c71f0e96735320f7a1"],
        "coverImage": "https://media.istockphoto.com/photos/chicken-burger-picture-id15835833?k=20&m=15835833&s=612x612&w=0&h=yCRn95J-gs9yQZdzDCyjDwjo9FQYzr4bqTUnfAuB7zY="
    }, 

    {
        "name": "Hamburguesa",
        "ingredients": ["Pan", "sésamo", "carne", "lechuga", "tomate", "queso", "mayonesa", "pepinillo"],
        "allergy": ["661fe9c71f0e96735320f7a1", "661fef782998d4f432304277", "661fe9df1f0e96735320f7a7", "661fe9d01f0e96735320f7a3"],
        "coverImage": ""
    },
    {
        "name": "Galletas de avena y chocolate",
        "ingredients": ["avena", "azúcar", "mantequilla", "chocolate", "huevo"],
        "allergy": ["661fe9df1f0e96735320f7a7", "661fe9d01f0e96735320f7a3"],
        "coverImage": ""
    },
    {
        "name": "Cacahuete cubierto de chocolate",
        "ingredients": ["cacahuete", "azúcar", "chocolate"],
        "allergy": ["661fef782998d4f432304277", "661fe9df1f0e96735320f7a7"],
        "coverImage": ""
    },
    {
        "name": "Compota de manzana",
        "ingredients": ["Manzana", "azúcar", "canela"],
        "allergy": ["661fe9ec1f0e96735320f7a9"],
        "coverImage": ""
    }
] 

    mongoose.connect("mongodb+srv://anabh05:Upgrade24@cluster0.xccbjus.mongodb.net/Applergic")
        .then(async () => {
            const allProductos = await Producto.find();
            if (allProductos.length > 0) {
                await Producto.collection.drop();
                console.log("Comidas borradas");
            }
        })
        .catch((error) => console.log("error borrando comidas", error))
        .then(async () => {
            const productoMap = arrayProductos.map((producto) => new Producto(producto));
            await Producto.insertMany(productoMap);
            console.log("Comidas insertadas");
        })
        .catch((error) => console.log("error insertando comidas", error))
        .finally(() => mongoose.disconnect());
