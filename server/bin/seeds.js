// Un archivo de seeds debe ejecutarse independientemete: node bin/seeds.js
const mongoose = require('mongoose');
const Material = require('../models/Material.model');

// OJO --> MISMA BASE DE DATOS PRESENTE EN EL .env
const MONGO_URI = process.env.MONGODB_URI || 'mongodb+srv://Hiba:Proyecto3@cluster0.2nacf.mongodb.net/proyecto3';

mongoose
    .connect(MONGO_URI)
    .then((x) => {
        console.log(
            `Connected to Mongo! Database name: "${x.connections[0].name}"`
        );
    })
    .catch((err) => {
        console.error("Error connecting to mongo: ", err);
    });


const material = [
    {
        name: "The 4-Hour Workweek",
        details: "",
        type: "Book",
        image: "https://images-na.ssl-images-amazon.com/images/I/81qW97ndkvL.jpg",
        description:
            "Olvídate del trasnochado concepto de jubilación y deja de aplazar tu vida: no hace falta esperar, existen demasiadas razones para no hacerlo. Si tu sueño es dejar de depender de un sueldo, viajar por el mundo a todo tren, ingresar más de 10.000 euros al mes o, simplemente, vivir más y trabajar menos, este libro es la brújula que necesitas.",

    },
    {
        name: "Crushing it",
        details: "",
        type: "Book",
        image: "https://images-na.ssl-images-amazon.com/images/I/51SxLaKwSaL.jpg",
        description:
            "El libro es una síntesis de los principios fundamentales a tener en cuenta al momento de crear contenido para hacer crecer una marca personal, basada en nuestra pasión y poder generar ingresos apartir de esta como un influencer o simplemente aumentando el alcance del negocio en particular.",

    },
    {
        name: "Building a story Brand",
        details: "",
        type: "Book",
        image: "https://images-na.ssl-images-amazon.com/images/I/41TRnujborL._SX342_SY445_QL70_ML2_.jpg",
        description:
            "El principio del método StoryBrand es considerar al cliente como el héroe de la historia, no tu marca. Toda buena historia necesita un héroe, y tu función es hacer que el consumidor comprenda que es el héroe de esta jornada. Por lo tanto, inicialmente es importante entender lo que quiere tu cliente.",

    },
    {
        name: "Stay with Why",
        details: "",
        type: "Book",
        image: "https://images-na.ssl-images-amazon.com/images/I/71QUhm-AnIL.jpg",
        description:
            "En construcción",

    },
    {
        name: "Rich dad poor dad",
        details: "",
        type: "Book",
        image: "https://thetowerofscience.com/wp-content/uploads/2022/01/Padre-rico-padre-pobre-1.gif",
        description:
            "El libro cuenta las enseñanzas de los “2 padres” del autor, el biológico que es un profesor que defiende el sistema de estudia, trabaja, trabaja más y llegarás algo, y el padre de un amigo que le instruye en el arte de poner el dinero a trabajar para ti.",

    },
    {
        name: "The lean startup",
        details: "",
        type: "Book",
        image: "https://acelerandoempresas.com/wp-content/uploads/2020/05/el-metodo-lean-startup-eric-ries.png",
        description:
            "Nueve de cada diez startups desaparecen. Y más de la mitad de las startups que tienen éxito, lo consiguen con un producto muy diferente al inicial. ¿Por qué tantas startups fracasan? No fracasan porque tengan un mal producto, o un producto defectuoso. Fracasan porque crean un producto que nadie quiere. Fracasan por falta de clientes. El método Lean Startup te enseña una forma de montar tu empresa asegurándote que el producto que desarrollas va a triunfar en el mercado. ",

    },
    {
        name: "Hooked",
        details: "",
        type: "Book",
        image: "https://static-01.daraz.com.np/p/1dc0e803dd7fbbfbd4d4403a40e15517.jpg",
        description:
            "Lo reconozcamos o no, estamos manipulados. Las tecnologías que usamos nos han forzado a adoptar conductas y también han generado nuevas adicciones. Son cosas que hacemos con poco o ningún pensamiento consciente. Los productos y servicios que usamos habitualmente alteran nuestro comportamiento, porque así es como fueron diseñados.",

    },
    {
        name: "The Art of the start",
        details: "",
        type: "Book",
        image: "https://images-na.ssl-images-amazon.com/images/I/71SNTwwXbVL.jpg",
        description:
            "Lo reconozcamos o no, estamos manipulados. Las tecnologías que usamos nos han forzado a adoptar conductas y también han generado nuevas adicciones. Son cosas que hacemos con poco o ningún pensamiento consciente. Los productos y servicios que usamos habitualmente alteran nuestro comportamiento, porque así es como fueron diseñados.",

    },
    {
        name: "Zero to one",
        details: "",
        type: "Book",
        image: "https://m.media-amazon.com/images/I/51JkDEpHUQL.jpg",
        description:
            "En Zero To One , Thiel reconoce y promueve el hecho de que NADIE puede llegar tan alto en la vida sin la habilidad de vender. Aunque este libro habla mucho sobre emprendimiento y la cultura de Silicon Valley, el contenido relacionado a ventas es increíble y no pueden dejar de leerlo.",

    },
    {
        name: "Smarter Faster Better",
        details: "",
        type: "Book",
        image: "https://images-na.ssl-images-amazon.com/images/I/81X-8QDCOIL.jpg",
        description:
            "Los secretos para ser más productivo en la vida y en el trabajo, nos presenta las historias de como profesionales de todo el mundo consiguen lo que han logrado, y como siguen mejorando para mantenerse como los mejores en su sector.",

    },
    {
        name: "Steve Jobs: The Exclusive Biography",
        details: "",
        type: "Book",
        image: "https://images-na.ssl-images-amazon.com/images/I/81VStYnDGrL.jpg",
        description:
            "Steve Jobs es la biografía oficial del cofundador de Apple y Pixar. Tenía una pasión por crear productos revolucionarios como iPhone, iPad, iPod, iTunes y Macintosh. Steve Jobs es una biografía del camino que siguió para llevar a Apple a ser el imperio que es hoy en día.",

    },
    {
        name: "Atomic Habits",
        details: "",
        type: "Book",
        image: "https://imagessl1.casadellibro.com/a/l/t7/31/9781847941831.jpg",
        description:
            "Cambios pequeños, resultados extraordinarios es quizá el mejor libro sobre como romper malos hábitos y usar las señales que te llevan a seguirlos para crear nuevos hábitos. El libro te enseña a crear pequeñas rutinas para conseguir grandes objetivos.",

    },
    {
        name: "Rework",
        details: "",
        type: "Book",
        image: "https://cdn.lifestylealcuadrado.com/wp-content/uploads/2015/09/rework-cover-front-big1.png",
        description:
            "Necesitamos menos de lo que pensamos para empezar un negocio. Aprende porque los planes pueden ser contraproductivos, como la productividad no depende del número de horas y porque buscar inversores debería ser nuestro último recurso.",

    },

    {
        name: "Spaces Castellana",
        details: "",
        type: "Coworking",
        image: "https://cdn.lifestylealcuadrado.com/wp-content/uploads/2015/09/rework-cover-front-big1.png",
        description:
            "Paseo de la Castellana, 200, Madrid 28046, España",

    },
    {
        name: "The Shed Coworking",
        details: "",
        type: "Coworking",
        image: "https://cdn.lifestylealcuadrado.com/wp-content/uploads/2015/09/rework-cover-front-big1.png",
        description:
            "Calle Hermosilla, 48 1º derecha, Madrid 28001, España",

    },
    {
        name: "dcollab",
        details: "",
        type: "Coworking",
        image: "https://cdn.lifestylealcuadrado.com/wp-content/uploads/2015/09/rework-cover-front-big1.png",
        description:
            "Calle Hortaleza, 108, Madrid 28004 Madrid, España",

    },
    {
        name: "Oasiscoworking",
        details: "",
        type: "Coworking",
        image: "https://cdn.lifestylealcuadrado.com/wp-content/uploads/2015/09/rework-cover-front-big1.png",
        description:
            "Calle Menéndez Pidal, 28, 28036 Madrid, España",

    },
    {
        name: "Impacthub",
        details: "",
        type: "Coworking",
        image: "https://cdn.lifestylealcuadrado.com/wp-content/uploads/2015/09/rework-cover-front-big1.png",
        description:
            "Locales en Madrid y Barcelona",

    },
    {
        name: "Loom",
        details: "",
        type: "Coworking",
        image: "https://cdn.lifestylealcuadrado.com/wp-content/uploads/2015/09/rework-cover-front-big1.png",
        description:
            "Locales en Madrid y Barcelona",

    },
    {
        name: "Cool inquieto",
        details: "Malasaña",
        type: "Coworking",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjFIY-FVL8h7Wiqg7r_BFVT4_0RutSCc74kQ&usqp=CAU",
        description:
            "http://coolinquieto.com/",

    },
    {
        name: "Utopicus",
        details: "Locales en Madrid y Barcelona",
        type: "Coworking",
        image: "https://utopicus.es/sites/default/files/styles/teaser_3cols/public/node/workplace/image/2021-01/Utopicus%20Principe%20de%20Vergara.jpg?h=8f9cfe54&itok=YJCybvQJ",
        description:
            "https://utopicus.es/",

    },
    {
        name: "Nomad",
        details: "Metro: Cuzco",
        type: "Coworking",
        image: "https://nomadcoworkingmadrid.com/wp-content/uploads/2020/04/nomadcoworking-despacho-oficinaprivada-2500x1406.jpg",
        description:
            "https://nomadcoworkingmadrid.com/",

    },
    {
        name: "cinkcoworking",
        details: "Varios locales en Madrid",
        type: "Coworking",
        image: "https://cinkcoworking.es/wp-content/uploads/2020/05/MG_4282-1200x800.jpg",
        description:
            "https://cinkcoworking.es/",

    },

];



Material.create(material)
    .then(materialFromDB => {
        console.log(`Created ${materialFromDB.length} material`);
        mongoose.connection.close();
    })
    .catch(err => console.log(`An error occurred while creating material from the DB: ${err}`));