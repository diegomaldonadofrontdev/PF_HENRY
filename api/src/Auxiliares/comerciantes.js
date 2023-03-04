const trades = [
  {
    category: "Gastronomía",
    comercios: [
      {
        id: 1,
        commerceName: "Los hijos de fruta",
        subcategory: "verdulerias",
        description: "Las verduras frescas de mejor calidad de la zona",
        userName: "verdulagas",
        email: "loshijosdefruta@gmail.com",
        password: "verdu123",
        country: "Argentina",
        city: "Rosario",
        address: "belgrano 1324",
        phone: "03428901929",
        Productos: [
          {
            id: 1,
            name: "Banana",
            category: "Frutas",
            description: "Bananas del Ecuador",
            price: "$400",
            image:
              "https://upload.wikimedia.org/wikipedia/commons/4/4c/Bananas.jpg",
            rating: "8/10",
            stock: "250",
          },
          {
            id: 2,
            name: "Mandarinas",
            category: "Frutas",
            description: "Mandarinas Dancing",
            price: "$600",
            image:
              "https://www.lavanguardia.com/files/article_main_microformat/files/fp/uploads/2021/10/26/6177ce4b24bbf.r_d.3122-142-2353.jpeg",
            rating: "9.5/10",
            stock: "300",
          },
          {
            id: 3,
            name: "Calabaza",
            category: "Verduras",
            description: "Calabazas medianas",
            price: "$500",
            image:
              "https://www.antojoentucocina.com/wp-content/uploads/2020/09/calabazas-scaled.jpg",
            rating: "8/10",
            stock: "350",
          },
          {
            id: 4,
            name: "Morron",
            category: "Verduras",
            description: "Morrones verdes, rojos o amarillos",
            price: "$740",
            image:
              "https://www.recetas.com.bo/sites/default/files/2020-02/empanadas-de-jamon-y-queso-1012.jpg",
            rating: "10/10",
            stock: "600",
          },
          {
            id: 5,
            name: "Carbon",
            category: "Varios",
            description: "Carbon en bolsa 4kg.",
            price: "$350",
            image:
              "http://papelerabarchiesi.com.ar/store/1548-large_default/bolsa-p-carbon-de-papel-4-kg-c-u.jpg",
            rating: "10/10",
            stock: "250",
          },
        ],
        active: true,
      },
      {
        id: 2,
        commerceName: "Hambur-heros",
        subcategory: "Fast food",
        description:
          "Las mejores promociones en hamburguesas, que incluyen juguetes para los mas chicos",
        userName: "ironburger",
        email: "losaburgers@gmail.com",
        password: "hulkvegano123",
        country: "Colombia",
        city: "Medellin",
        address: "Bolivar 857",
        phone: "08958839219",
        Productos: [
          {
            id: 1,
            name: "Doble cuarto",
            category: "Hamburguesas",
            description:
              "Hamburguesa doble cuarto con cheddar, tomate, lechuga, jamon y queso.",
            price: "$500",
            image:
              "https://cache-backend-mcd.mcdonaldscupones.com/media/image/product$kqXt7Sq2/200/200/original?country=ar",
            rating: "8/10",
            stock: "250",
          },
          {
            id: 2,
            name: "Calabresa",
            category: "Pizzas",
            description: "Muzzarella y salamin",
            price: "$1000",
            image:
              "https://tn.com.ar/resizer/XFTAWVNFjpzqUnsgs2qTXzzEAfk=/767x0/smart/filters:format(webp)/cloudfront-us-east-1.images.arcpublishing.com/artear/QQO4WNFYZNDB7E4QHDS725TGNU.jpg",
            rating: "9.5/10",
            stock: "300",
          },
          {
            id: 3,
            name: "Fugazzeta",
            category: "Pizzas",
            description: "Cebolla y muzarella",
            price: "$900",
            image:
              "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Fugazzeta_en_pizzeria_Guerrin%2C_Buenos_Aires.JPG/1200px-Fugazzeta_en_pizzeria_Guerrin%2C_Buenos_Aires.JPG",
            rating: "8/10",
            stock: "350",
          },
          {
            id: 4,
            name: "Empanadas de jamon y queso",
            category: "Empanadas",
            description: "Empanadas de jamon y muzzarella",
            price: "$140",
            image:
              "https://www.recetas.com.bo/sites/default/files/2020-02/empanadas-de-jamon-y-queso-1012.jpg",
            rating: "10/10",
            stock: "600",
          },
          {
            id: 5,
            name: "Hamburlomo",
            category: "Hamburguesas",
            description: "Hamburguesa con carne de lomo",
            price: "$950",
            image:
              "https://biotrendies.com/wp-content/uploads/2015/06/manzana.jpg",
            rating: "7.5/10",
            stock: "250",
          },
        ],
        active: true,
      },
      {
        id: 3,
        commerceName: "La Pizza-Nostra",
        subcategory: "Pizzeria",
        description:
          "Si te contaramos nuestras recetas,no podriamos alimentarte",
        userName: "muzzacorleone",
        email: "vitoycalabresa@gmail.com",
        password: "tonyjamone",
        country: "Uruguay",
        city: "Montevideo",
        address: "Artigas 2563",
        phone: "028575643",
        Productos: [
          {
            id: 1,
            name: "Napolitana",
            category: "Pizzas",
            description:
              "Salsa de tomates, muzzarella, tomate, ajo, oregano, aceite de oliva.",
            price: "$1900",
            image:
              "https://cache-backend-mcd.mcdonaldscupones.com/media/image/product$kqXt7Sq2/200/200/original?country=ar",
            rating: "8/10",
            stock: "250",
          },
          {
            id: 2,
            name: "Calabresa",
            category: "Pizzas",
            description: "Muzzarella y salamin",
            price: "$1000",
            image:
              "https://tn.com.ar/resizer/XFTAWVNFjpzqUnsgs2qTXzzEAfk=/767x0/smart/filters:format(webp)/cloudfront-us-east-1.images.arcpublishing.com/artear/QQO4WNFYZNDB7E4QHDS725TGNU.jpg",
            rating: "9.5/10",
            stock: "300",
          },
          {
            id: 3,
            name: "Fugazzeta",
            category: "Pizzas",
            description: "Cebolla y muzarella",
            price: "$900",
            image:
              "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Fugazzeta_en_pizzeria_Guerrin%2C_Buenos_Aires.JPG/1200px-Fugazzeta_en_pizzeria_Guerrin%2C_Buenos_Aires.JPG",
            rating: "8/10",
            stock: "350",
          },
          {
            id: 4,
            name: "Empanadas de jamon y queso",
            category: "Empanadas",
            description: "Empanadas de jamon y muzzarella",
            price: "$140",
            image:
              "https://www.recetas.com.bo/sites/default/files/2020-02/empanadas-de-jamon-y-queso-1012.jpg",
            rating: "10/10",
            stock: "600",
          },
          {
            id: 5,
            name: "Empanadas de cebolla y queso",
            category: "Empanadas",
            description: "Empanadas de cebolla y queso",
            price: "$140",
            image:
              "https://infoagro.com.ar/wp-content/uploads/2021/07/Empanadas-de-queso-cebolla-y-laurel.jpg",
            rating: "7.5/10",
            stock: "250",
          },
        ],
        active: true,
      },
      {
        id: 4,
        commerceName: "El pinar",
        subcategory: "Restaurant",
        description: "Los mejores platos, a delivery y en el lugar",
        userName: "pinito4215",
        email: "araucariasno@gmail.com",
        password: "araucan0s",
        country: "Argentina",
        city: "Posadas",
        address: "Entre Rios 6329",
        phone: "045829394",
        Productos: [
          {
            id: 1,
            name: "Canelones de verdura a la bolognesa",
            category: "Pastas",
            description: "Canelones de verdura a la bolognesa.",
            price: "$1900",
            image:
              "https://www.recetasnestle.com.co/sites/default/files/srh_recipes/20f03eefe5e1e7c2d13be780567a4773.jpg",
            rating: "8/10",
            stock: "250",
          },
          {
            id: 2,
            name: "Tarta de atún",
            category: "Tartas",
            description: "Atún, queso, cebolla, morrón, pimentón.",
            price: "$2000",
            image:
              "https://img-global.cpcdn.com/recipes/480d48a2d409ba5c/400x400cq70/photo.jpg",
            rating: "9.5/10",
            stock: "300",
          },
          {
            id: 3,
            name: "Ñoquis a la Parissienne",
            category: "Pastas",
            description: "Ñoquis a la Parissienne",
            price: "$1300",
            image:
              "https://recetas-rapidas.es/wp-content/uploads/2019/11/%C3%B1oquis-848x477.jpg",
            rating: "8/10",
            stock: "350",
          },
          {
            id: 4,
            name: "Albondigas con puré",
            category: "Carnes",
            description:
              "Carne de ternera, cebolla, morron, oregano, peregil, ajo, huevo, salsa de tomates, papa, leche, manteca, sal, pimienta.",
            price: "$140",
            image:
              "https://www.recetas.com.bo/sites/default/files/2020-02/empanadas-de-jamon-y-queso-1012.jpg",
            rating: "10/10",
            stock: "600",
          },
          {
            id: 5,
            name: "Suprema a caballo con papas fritas",
            category: "Carnes",
            description:
              "Pollo, huevo, pan rallado, oregano, peregil, ajo, huevo, aceite, sal, papa, leche, manteca",
            price: "$2100",
            image:
              "https://infoagro.com.ar/wp-content/uploads/2021/07/Empanadas-de-queso-cebolla-y-laurel.jpg",
            rating: "7.5/10",
            stock: "250",
          },
        ],
        active: true,
      },
      {
        id: 5,
        commerceName: "Pizzteros",
        subcategory: "Pizzeria",
        description:
          "Si no llega tu pedido en tiempo y forma, te devolvemos la plata",
        userName: "hondaypizza",
        email: "harleypizzason@gmail.com",
        password: "ducatiprovolone",
        country: "Argentina",
        city: "Buenos Aires",
        address: "Rosas",
        phone: "074372894",
        Productos: [
          {
            id: 1,
            name: "Rucula",
            category: "Pizzas",
            description:
              "Salsa de tomates, muzzarella, ajo, oregano, jamón crudo, rúcula.",
            price: "$1900",
            image:
              "https://cdn0.recetasgratis.net/es/posts/5/6/1/pizza_con_rucula_y_tomates_cherry_65165_orig.jpg",
            rating: "8/10",
            stock: "250",
          },
          {
            id: 2,
            name: "Especial de morrones",
            category: "Pizzas",
            description:
              "Muzzarella, salsa de tomates, jamón, morron colorado, oregano, peregil, ajo, sal y pimienta.",
            price: "$2000",
            image:
              "https://tn.com.ar/resizer/XFTAWVNFjpzqUnsgs2qTXzzEAfk=/767x0/smart/filters:format(webp)/cloudfront-us-east-1.images.arcpublishing.com/artear/QQO4WNFYZNDB7E4QHDS725TGNU.jpg",
            rating: "9.5/10",
            stock: "300",
          },
          {
            id: 3,
            name: "Fugazzeta",
            category: "Pizzas",
            description: "Cebolla y muzarella",
            price: "$2400",
            image:
              "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Fugazzeta_en_pizzeria_Guerrin%2C_Buenos_Aires.JPG/1200px-Fugazzeta_en_pizzeria_Guerrin%2C_Buenos_Aires.JPG",
            rating: "8/10",
            stock: "350",
          },
          {
            id: 4,
            name: "Especial de huevo",
            category: "Pizzas",
            description: "Muzzarella, salsa de tomates, huevo.",
            price: "$2140",
            image:
              "https://razaitaliana.com/wp-content/uploads/2020/07/pizza-d-huevo.jpg",
            rating: "10/10",
            stock: "600",
          },
          {
            id: 5,
            name: "Empanadas de cebolla y queso",
            category: "Empanadas",
            description: "Empanadas de cebolla y queso",
            price: "$140",
            image:
              "https://infoagro.com.ar/wp-content/uploads/2021/07/Empanadas-de-queso-cebolla-y-laurel.jpg",
            rating: "7.5/10",
            stock: "250",
          },
        ],
        active: true,
      },
    ],
  },
  {
    category: "Salud",
    comercios: [
      {
        id: 6,
        commerceName: "Farmacito",
        subcategory: "Farmacias",
        description: "Los precios mas baratos ante cualquier urgencia",
        userName: "farmaboys",
        email: "farmacito08@gmail.com",
        password: "farma321",
        country: "Paraguay",
        city: "Asuncion",
        address: "Romero 3543",
        phone: "01245009483",
        Productos: [
          {
            id: 1,
            name: "Adermicina",
            category: "Cremas",
            description:
              "Crema germicida, cicatrizante, regeneradora y revitalizadora de los tejidos.",
            price: "$500",
            image:
              "http://farmaciazentner.com.ar/wp-content/uploads/2021/08/7796285287856-1.jpg",
            rating: "8/10",
            stock: "250",
          },
          {
            id: 2,
            name: "Voltarem",
            category: "Cremas",
            description:
              "Crema antinflamatoria con activo de Diclofenac sódico.",
            price: "$500",
            image:
              "https://www.zonafarma.com.ar/wp-content/uploads/2021/10/40382409-01-BASEIMAGE-Midres.jpg",
            rating: "8/10",
            stock: "250",
          },
          {
            id: 3,
            name: "Diclofenac Sódico",
            category: "Comprimidos",
            description: "Diclofenac 50 mg. caja x 16 comprimidos",
            price: "$500",
            image:
              "https://www.zonafarma.com.ar/wp-content/uploads/2021/10/40382409-01-BASEIMAGE-Midres.jpg",
            rating: "8/10",
            stock: "250",
          },
          {
            id: 4,
            name: "Lorazepam",
            category: "Comprimidos",
            description: "Lorazepam 1 mg. tira x 8 comprimidos",
            price: "$900",
            image:
              "https://quefarmacia.com/wp-content/uploads/2018/05/IMG_1012-300x258.png",
            rating: "8/10",
            stock: "250",
          },
          {
            id: 5,
            name: "Ibuprofeno",
            category: "Jarabe",
            description: "Ibuprofeno 4% x 120 ml. sabor frutilla.",
            price: "$1500",
            image:
              "https://images.rappi.com.ar/products/436892210298_igmfaxzgbbpm_585391217122_skywvqoveysm_97719_1.jpeg",
            rating: "8/10",
            stock: "250",
          },
        ],
        active: true,
      },
    ],
  },
  {
    category: "Limpieza",
    comercios: [
      {
        id: 7,
        commerceName: "Fregadito",
        subcategory: "Limpieza",
        description: "Los productos para el hogar, al precio mas accesible",
        userName: "lavaditoelmate",
        email: "fregandoporunmañana@gmail.com",
        password: "detergen3",
        country: "Argentina",
        city: "Tucuman",
        address: "Juan Manuel Dorrego 2394",
        phone: "029348510",
        Productos: [
          {
            id: 1,
            name: "Detergente",
            category: "Cocina",
            description: "Detergente Ala x 300cc.",
            price: "$500",
            image:
              "https://statics.dinoonline.com.ar/imagenes/full_600x600_ma/2790704_f.jpg",
            rating: "8/10",
            stock: "250",
          },
          {
            id: 2,
            name: "Esponja",
            category: "Cocina",
            description: "Esponja Scotch Brite Limpieza Pesada x 1u.",
            price: "$300",
            image:
              "https://multimedia.3m.com/mws/media/1385972P/scotch-brite-heavy-duty-scrub-spong-pack.jpg",
            rating: "8/10",
            stock: "250",
          },
          {
            id: 3,
            name: "Echo",
            category: "Pisos",
            description: "Echo en el Balde 3 en 1 - Blem - x 5L",
            price: "$500",
            image:
              "https://masbrillo.com.ar/wp-content/uploads/2022/02/echo-en-el-balde-5-litros1-aefa10334db057398315831643361918-640-0.jpg",
            rating: "8/10",
            stock: "250",
          },
          {
            id: 4,
            name: "Pinoluz",
            category: "Pisos",
            description: "Pinoluz x 4L",
            price: "$1300",
            image:
              "https://statics.dinoonline.com.ar/imagenes/full_600x600_ma/2750449_f.jpg",
            rating: "8/10",
            stock: "250",
          },
          {
            id: 5,
            name: "Mr. Musculo Baños",
            category: "Baño",
            description: "Limpiador para baños Mr. Musculo x 500 ml.",
            price: "$1500",
            image: "https://bahiaoffice.com/images/prods/7790520012388.jpg",
            rating: "8/10",
            stock: "250",
          },
        ],
        active: true,
      },
    ],
  },
];

module.exports = {
  trades,
};
