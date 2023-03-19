
const products = [
    // Los hijos de frutas
    {              
    tradeId: "6417200973a688bf33f96546",
    name: "Banana",
    category: "Frutas",
    description: "Bananas del Ecuador",
    price: 400,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/4/4c/Bananas.jpg",
  },
  {
    tradeId: "6417200973a688bf33f96546",
    name: "Mandarinas",
    category: "Frutas",
    description: "Mandarinas Dancing",
    price: 600,
    image:
      "https://www.lavanguardia.com/files/article_main_microformat/files/fp/uploads/2021/10/26/6177ce4b24bbf.r_d.3122-142-2353.jpeg",   
  },
  {
    tradeId: "6417200973a688bf33f96546",
    name: "Calabaza",
    category: "Verduras",
    description: "Calabazas medianas",
    price: 500,
    image:
      "https://www.antojoentucocina.com/wp-content/uploads/2020/09/calabazas-scaled.jpg",    
  },
  {
    tradeId: "6417200973a688bf33f96546",
    name: "Morron",
    category: "Verduras",
    description: "Morrones verdes, rojos o amarillos",
    price: 740,
    image:
      "https://www.recetas.com.bo/sites/default/files/2020-02/empanadas-de-jamon-y-queso-1012.jpg",    
  },
  {
    tradeId: "6417200973a688bf33f96546",
    name: "Carbon",
    category: "Varios",
    description: "Carbon en bolsa 4kg.",
    price: 350,
    image:
      "http://papelerabarchiesi.com.ar/store/1548-large_default/bolsa-p-carbon-de-papel-4-kg-c-u.jpg",    
  },
  {
    tradeId: "6417200973a688bf33f96546",
    name: "Manzana roja",
    category: "Frutas",
    description: "2kg de manzana roja.",
    price: 500,
    image:
      "https://cocina-casera.com/wp-content/uploads/2016/12/manzanas-rojas.jpg",    
  },
  {
    tradeId: "6417200973a688bf33f96546",
    name: "Manzana verde",
    category: "Frutas",
    description: "2kg de manzana verde",
    price: 600,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS63uiG327RtBODiyXCZrNdJni6cU2lFqPCZw&usqp=CAU",    
  },
  {
    tradeId: "6417200973a688bf33f96546",
    name: "Pera",
    category: "Frutas",
    description: "2kg de peras.",
    price: 600,
    image:
      "https://elpais.com/especiales-branded/la-despensa/2020/la-importancia-de-llevarnos-a-casa-las-peras-con-rabitos/img/1581683292_617447_1581684057_noticia_normal.jpg",    
  },
  {
    tradeId: "6417200973a688bf33f96546",
    name: "Uvas",
    category: "Frutas",
    description: "1 kg de uvas.",
    price: 400,
    image:
      "https://eldiariony.com/wp-content/uploads/sites/2/2022/08/Uvas-shutterstock_210742753.jpg?quality=75&strip=all&w=1200",    
  },
  {
    tradeId: "6417200973a688bf33f96546",
    name: "Uvas blancas",
    category: "Frutas",
    description: "Kg de uvas blancas.",
    price: 450,
    image:
      "https://www.vinetur.com/imagenes/2019/julio/15/uvablanca3.jpg",    
  },
  {
    tradeId: "6417200973a688bf33f96546",
    name: "Cebollas",
    category: "Verduras",
    description: "Kg de cebollas.",
    price: 325,
    image:
      "https://5aldia.cl/wp-content/uploads/2018/03/cebolla.jpg",    
  },
  {
    tradeId: "6417200973a688bf33f96546",
    name: "Ajo",
    category: "Verduras",
    description: "3 cabezas de ajo.",
    price: 450,
    image:
      "https://hdstatic.net/gridfs/holadoctor/ns_bottomline-garlic-sp-1548152502,074.jpg",    
  },
  {
    tradeId: "6417200973a688bf33f96546",
    name: "Tomate",
    category: "Frutas",
    description: "1kg de tomates.",
    price: 250,
    image:
      "https://s1.eestatic.com/2021/07/12/actualidad/595952167_195030066_1706x960.jpg",    
  },
  {
    tradeId: "6417200973a688bf33f96546",
    name: "Zanahoria",
    category: "Verduras",
    description: "Kg de zanahoria.",
    price: 375,
    image:
      "https://www.lavanguardia.com/files/content_image_mobile_filter/uploads/2021/07/09/60e81840d4549.jpeg",    
  },
  {
    tradeId: "6417200973a688bf33f96546",
    name: "Papa",
    category: "Verduras",
    description: "2Kg de papas.",
    price: 500,
    image:
      "https://www.herbazest.com/imgs/0/a/c/451775/papa.jpg",    
  },
  {
    tradeId: "6417200973a688bf33f96546",
    name: "Batata",
    category: "Verduras",
    description: "2Kg de batatas.",
    price: 700,
    image:
      "https://www.cucinare.tv/wp-content/uploads/2019/04/Batata.jpg",    
  },
  //La granjita
  {              
    tradeId: "6417212e150601e686edad90",
    name: "Banana",
    category: "Frutas",
    description: "Bananas del Ecuador",
    price: 400,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/4/4c/Bananas.jpg",
  },
  {
    tradeId: "6417212e150601e686edad90",
    name: "Mandarinas",
    category: "Frutas",
    description: "Mandarinas Dancing",
    price: 600,
    image:
      "https://www.lavanguardia.com/files/article_main_microformat/files/fp/uploads/2021/10/26/6177ce4b24bbf.r_d.3122-142-2353.jpeg",   
  },
  {
    tradeId: "6417212e150601e686edad90",
    name: "Calabaza",
    category: "Verduras",
    description: "Calabazas medianas",
    price: 500,
    image:
      "https://www.antojoentucocina.com/wp-content/uploads/2020/09/calabazas-scaled.jpg",    
  },
  {
    tradeId: "6417212e150601e686edad90",
    name: "Morron",
    category: "Verduras",
    description: "Morrones verdes, rojos o amarillos",
    price: 740,
    image:
      "https://www.recetas.com.bo/sites/default/files/2020-02/empanadas-de-jamon-y-queso-1012.jpg",    
  },
  {
    tradeId: "6417212e150601e686edad90",
    name: "Carbon",
    category: "Varios",
    description: "Carbon en bolsa 4kg.",
    price: 350,
    image:
      "http://papelerabarchiesi.com.ar/store/1548-large_default/bolsa-p-carbon-de-papel-4-kg-c-u.jpg",    
  },
  {
    tradeId: "6417212e150601e686edad90",
    name: "Manzana roja",
    category: "Frutas",
    description: "2kg de manzana roja.",
    price: 500,
    image:
      "https://cocina-casera.com/wp-content/uploads/2016/12/manzanas-rojas.jpg",    
  },
  {
    tradeId: "6417212e150601e686edad90",
    name: "Manzana verde",
    category: "Frutas",
    description: "2kg de manzana verde",
    price: 600,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS63uiG327RtBODiyXCZrNdJni6cU2lFqPCZw&usqp=CAU",    
  },
  {
    tradeId: "6417212e150601e686edad90",
    name: "Pera",
    category: "Frutas",
    description: "2kg de peras.",
    price: 600,
    image:
      "https://elpais.com/especiales-branded/la-despensa/2020/la-importancia-de-llevarnos-a-casa-las-peras-con-rabitos/img/1581683292_617447_1581684057_noticia_normal.jpg",    
  },
  // Deniro
  {
    tradeId: "6417200973a688bf33f96548",
    name: "Doble cuarto",
    category: "Hamburguesas",
    description:
      "Hamburguesa doble cuarto con cheddar, tomate, lechuga, jamon y queso.",
    price: 500,
    image:
      "https://cache-backend-mcd.mcdonaldscupones.com/media/image/product$kqXt7Sq2/200/200/original?country=ar",    
  },
  {
    tradeId: "6417200973a688bf33f96548",
    name: "Calabresa",
    category: "Pizzas",
    description: "Muzzarella y salamin",
    price: 1000,
    image:
      "https://tn.com.ar/resizer/XFTAWVNFjpzqUnsgs2qTXzzEAfk=/767x0/smart/filters:format(webp)/cloudfront-us-east-1.images.arcpublishing.com/artear/QQO4WNFYZNDB7E4QHDS725TGNU.jpg",   
  },
  {
    tradeId: "6417200973a688bf33f96548",
    name: "Fugazzetas",
    category: "Pizzas",
    description: "Cebolla y muzarella",
    price: 900,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Fugazzeta_en_pizzeria_Guerrin%2C_Buenos_Aires.JPG/1200px-Fugazzeta_en_pizzeria_Guerrin%2C_Buenos_Aires.JPG",  
  },
  {
    tradeId: "6417200973a688bf33f96548",
    name: "Empanadas de jamon y queso",
    category: "Empanadas",
    description: "Empanadas de jamon y muzzarella",
    price: 140,
    image:
      "https://www.recetas.com.bo/sites/default/files/2020-02/empanadas-de-jamon-y-queso-1012.jpg",
  },
  {
    tradeId: "6417200973a688bf33f96548",
    name: "Hamburlomo",
    category: "Hamburguesas",
    description: "Hamburguesa con carne de lomo",
    price: 950,
    image:
      "https://biotrendies.com/wp-content/uploads/2015/06/manzana.jpg",
  },
  // Nivel 10
  {
    tradeId: "6417212a150601e686edad85",
    name: "Doble cuarto",
    category: "Hamburguesas",
    description:
      "Hamburguesa doble cuarto con cheddar, tomate, lechuga, jamon y queso.",
    price: 500,
    image:
      "https://cache-backend-mcd.mcdonaldscupones.com/media/image/product$kqXt7Sq2/200/200/original?country=ar",    
  },
  {
    tradeId: "6417212a150601e686edad85",
    name: "Blue cheese",
    category: "Hamburguesas",
    description: "Hamburguesa con queso azul, cebolla caramelizada, jamon, y morron asado",
    price: 1000,
    image:
      "https://okdiario.com/img/recetas/2016/11/15/hamburguesa-con-queso-azul-y-oregano-o-blue-moon-burget.jpg",   
  },
  {
    tradeId: "6417212a150601e686edad85",
    name: "Ranchera",
    category: "Hamburguesa",
    description: "Hamburguesa con combinacion de ajies, queso cheddar, salsa barbacoa y huevo",
    price: 900,
    image:
      "http://assets.kraftfoods.com/recipe_images/opendeploy/57729_MXM_K818V0_OR1_CR_640x428.jpg",  
  },
  {
    tradeId: "6417212a150601e686edad85",
    name: "Lomo cheesesteak",
    category: "Lomo",
    description: "Lomo con cheddar",
    price: 140,
    image:
      "https://gastronomiaycia.republica.com/wp-content/photos/bocata_lomo_higos1.jpg",
  },
  {
    tradeId: "6417212a150601e686edad85",
    name: "Hamburlomo",
    category: "Hamburguesas",
    description: "Hamburguesa con carne de lomo",
    price: 950,
    image:
      "https://biotrendies.com/wp-content/uploads/2015/06/manzana.jpg",
  },
  {
    tradeId: "6417212a150601e686edad85",
    name: "Papas Fritas",
    category: "Papas",
    description: "Papas fritas baston",
    price: 800,
    image:
      "https://www.clarin.com/img/2023/01/24/V6Zed1p80_2000x1500__1.jpg",
  },
  {
    tradeId: "6417212a150601e686edad85",
    name: "Papas Fritas provenzal",
    category: "Papas",
    description: "Papas fritas baston a la provenzal",
    price: 900,
    image:
      "https://mybbqrecipe.com/wp-content/uploads/2022/03/Papas-fritas-a-la-provenzal-Latin-American-fries-scaled.jpg",
  },
  {
    tradeId: "6417212a150601e686edad85",
    name: "Papas Fritas con cheddar",
    category: "Papas",
    description: "Papas fritas baston con cheddar y bacon",
    price: 950,
    image:
      "https://live.mrf.io/statics/i/ps/irecetasfaciles.com/wp-content/uploads/2019/05/papas-francesas-con-tocineta-y-salsa-de-queso.png?width=1200&enable=upscale",
  },
  // La Pizza Nostra
  {
    tradeId: "6417200a73a688bf33f9654a",
    name: "Napolitana",
    category: "Pizzas",
    description: "Salsa de tomates, muzzarella, tomate, ajo, oregano, aceite de oliva.",
    price: 1900,
    image:
      "https://cache-backend-mcd.mcdonaldscupones.com/media/image/product$kqXt7Sq2/200/200/original?country=ar",
  },
  {
    tradeId: "6417200a73a688bf33f9654a",
    name: "Calabresas",
    category: "Pizzas",
    description: "Muzzarella y salamin",
    price: 1000,
    image:
      "https://tn.com.ar/resizer/XFTAWVNFjpzqUnsgs2qTXzzEAfk=/767x0/smart/filters:format(webp)/cloudfront-us-east-1.images.arcpublishing.com/artear/QQO4WNFYZNDB7E4QHDS725TGNU.jpg",
  },
  {
    tradeId: "6417200a73a688bf33f9654a",
    name: "Fugazzeta",
    category: "Pizzas",
    description: "Cebolla y muzarella",
    price: 900,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Fugazzeta_en_pizzeria_Guerrin%2C_Buenos_Aires.JPG/1200px-Fugazzeta_en_pizzeria_Guerrin%2C_Buenos_Aires.JPG",
  },
  {
    tradeId: "6417200a73a688bf33f9654a",
    name: "Empanadas de cebolla y queso",
    category: "Empanadas",
    description: "Empanadas de cebolla y muzzarella",
    price: 140,
    image:
      "https://www.recetas.com.bo/sites/default/files/2020-02/empanadas-de-jamon-y-queso-1012.jpg",
  },
  {
    tradeId: "6417200a73a688bf33f9654a",
    name: "Empanadas de cebolla y queso",
    category: "Empanadas",
    description: "Empanadas de cebolla y queso",
    price: 140,
    image:
      "https://infoagro.com.ar/wp-content/uploads/2021/07/Empanadas-de-queso-cebolla-y-laurel.jpg",
  },
  // Best Pizza
  {
    tradeId: "6417200a73a688bf33f9654e",
    name: "Napolitana",
    category: "Pizzas",
    description: "Salsa de tomates, muzzarella, tomate, ajo, oregano, aceite de oliva.",
    price: 1900,
    image:
      "https://cache-backend-mcd.mcdonaldscupones.com/media/image/product$kqXt7Sq2/200/200/original?country=ar",
  },
  {
    tradeId: "6417200a73a688bf33f9654e",
    name: "Calabresas",
    category: "Pizzas",
    description: "Muzzarella y salamin",
    price: 1000,
    image:
      "https://tn.com.ar/resizer/XFTAWVNFjpzqUnsgs2qTXzzEAfk=/767x0/smart/filters:format(webp)/cloudfront-us-east-1.images.arcpublishing.com/artear/QQO4WNFYZNDB7E4QHDS725TGNU.jpg",
  },
  // El pinar
  {
    tradeId: "6417200a73a688bf33f9654c",
    name: "Canelones de verdura a la bolognesa",
    category: "Pastas",
    description: "Canelones de verdura a la bolognesa.",
    price: 1900,
    image:
      "https://www.recetasnestle.com.co/sites/default/files/srh_recipes/20f03eefe5e1e7c2d13be780567a4773.jpg",
  },
  {
    tradeId: "6417200a73a688bf33f9654c",
    name: "Tarta de atún",
    category: "Tartas",
    description: "Atún, queso, cebolla, morrón, pimentón.",
    price: 2000,
    image:
      "https://img-global.cpcdn.com/recipes/480d48a2d409ba5c/400x400cq70/photo.jpg",
  },
  {
    tradeId: "6417200a73a688bf33f9654c",
    name: "Ñoquis a la Parissienne",
    category: "Pastas",
    description: "Ñoquis a la Parissienne",
    price: 1300,
    image:
      "https://recetas-rapidas.es/wp-content/uploads/2019/11/%C3%B1oquis-848x477.jpg",
  },
  {
    tradeId: "6417200a73a688bf33f9654c",
    name: "Albondigas con puré",
    category: "Carnes",
    description:
      "Carne de ternera, cebolla, morron, oregano, peregil, ajo, huevo, salsa de tomates, papa, leche, manteca, sal, pimienta.",
    price: 140,
    image:
      "https://www.recetas.com.bo/sites/default/files/2020-02/empanadas-de-jamon-y-queso-1012.jpg",
  },
  {
    tradeId: "6417200a73a688bf33f9654c",
    name: "Suprema a caballo con papas fritas",
    category: "Carnes",
    description:
      "Pollo, huevo, pan rallado, oregano, peregil, ajo, huevo, aceite, sal, papa, leche, manteca",
    price: 2100,
    image:
      "https://infoagro.com.ar/wp-content/uploads/2021/07/Empanadas-de-queso-cebolla-y-laurel.jpg",
  },
  // Duomo
  {
    tradeId: "6417212e150601e686edad8e",
    name: "Rucula",
    category: "Pizzas",
    description:
      "Salsa de tomates, muzzarella, ajo, oregano, jamón crudo, rúcula.",
    price: 1900,
    image:
      "https://cdn0.recetasgratis.net/es/posts/5/6/1/pizza_con_rucula_y_tomates_cherry_65165_orig.jpg",
  },
  {
    tradeId: "6417212e150601e686edad8e",
    name: "Especial de morrones",
    category: "Pizzas",
    description:
      "Muzzarella, salsa de tomates, jamón, morron colorado, oregano, peregil, ajo, sal y pimienta.",
    price: 2000,
    image:
      "https://tn.com.ar/resizer/XFTAWVNFjpzqUnsgs2qTXzzEAfk=/767x0/smart/filters:format(webp)/cloudfront-us-east-1.images.arcpublishing.com/artear/QQO4WNFYZNDB7E4QHDS725TGNU.jpg",
  },
  {
    tradeId: "6417212e150601e686edad8e",
    name: "Fugazzeta",
    category: "Pizzas",
    description: "Cebolla y muzarella",
    price: 2400,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Fugazzeta_en_pizzeria_Guerrin%2C_Buenos_Aires.JPG/1200px-Fugazzeta_en_pizzeria_Guerrin%2C_Buenos_Aires.JPG",
  },
  {
    tradeId: "6417212e150601e686edad8e",
    name: "Especial de huevo",
    category: "Pizzas",
    description: "Muzzarella, salsa de tomates, huevo.",
    price: 2140,
    image:
      "https://razaitaliana.com/wp-content/uploads/2020/07/pizza-d-huevo.jpg",
  },
  {
    tradeId: "6417212e150601e686edad8e",
    name: "Empanadas de cebolla y queso",
    category: "Empanadas",
    description: "Empanadas de cebolla y queso",
    price: 140,
    image:
      "https://infoagro.com.ar/wp-content/uploads/2021/07/Empanadas-de-queso-cebolla-y-laurel.jpg",
  },
  //Los pinos 
  {
    tradeId: "6417201273a688bf33f9657a",
    name: "Rucula",
    category: "Pizzas",
    description:
      "Salsa de tomates, muzzarella, ajo, oregano, jamón crudo, rúcula.",
    price: 1900,
    image:
      "https://cdn0.recetasgratis.net/es/posts/5/6/1/pizza_con_rucula_y_tomates_cherry_65165_orig.jpg",
  },
  {
    tradeId: "6417201273a688bf33f9657a",
    name: "Especial de morrones",
    category: "Pizzas",
    description:
      "Muzzarella, salsa de tomates, jamón, morron colorado, oregano, peregil, ajo, sal y pimienta.",
    price: 2000,
    image:
      "https://tn.com.ar/resizer/XFTAWVNFjpzqUnsgs2qTXzzEAfk=/767x0/smart/filters:format(webp)/cloudfront-us-east-1.images.arcpublishing.com/artear/QQO4WNFYZNDB7E4QHDS725TGNU.jpg",
  },
  {
    tradeId: "6417201273a688bf33f9657a",
    name: "Fugazzeta",
    category: "Pizzas",
    description: "Cebolla y muzarella",
    price: 2400,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Fugazzeta_en_pizzeria_Guerrin%2C_Buenos_Aires.JPG/1200px-Fugazzeta_en_pizzeria_Guerrin%2C_Buenos_Aires.JPG",
  },
  {
    tradeId: "6417201273a688bf33f9657a",
    name: "Especial de huevo",
    category: "Pizzas",
    description: "Muzzarella, salsa de tomates, huevo.",
    price: 2140,
    image:
      "https://razaitaliana.com/wp-content/uploads/2020/07/pizza-d-huevo.jpg",
  },
  {
    tradeId: "6417201273a688bf33f9657a",
    name: "Empanadas de cebolla y queso",
    category: "Empanadas",
    description: "Empanadas de cebolla y queso",
    price: 140,
    image:
      "https://infoagro.com.ar/wp-content/uploads/2021/07/Empanadas-de-queso-cebolla-y-laurel.jpg",
  },
  {
    tradeId: "6417201273a688bf33f9657a",
    name: "Napolitana",
    category: "Pizzas",
    description: "Salsa de tomates, muzzarella, tomate, ajo, oregano, aceite de oliva.",
    price: 1900,
    image:
      "https://cache-backend-mcd.mcdonaldscupones.com/media/image/product$kqXt7Sq2/200/200/original?country=ar",
  },
  {
    tradeId: "6417201273a688bf33f9657a",
    name: "Calabresas",
    category: "Pizzas",
    description: "Muzzarella y salamin",
    price: 1000,
    image:
      "https://tn.com.ar/resizer/XFTAWVNFjpzqUnsgs2qTXzzEAfk=/767x0/smart/filters:format(webp)/cloudfront-us-east-1.images.arcpublishing.com/artear/QQO4WNFYZNDB7E4QHDS725TGNU.jpg",
  },
  {
    tradeId: "6417201273a688bf33f9657a",
    name: "Jamon y queso",
    category: "Pizzas",
    description: "Pizza de jamon y muzzarella",
    price: 750,
    image:
      "https://i.ytimg.com/vi/MelbCjeSZs8/maxresdefault.jpg",
  },
  {
    tradeId: "6417201273a688bf33f9657a",
    name: "4 Quesos",
    category: "Pizza",
    description: "Pizza con recubrimiento de 4 quesos",
    price: 900,
    image:
      "https://imag.bonviveur.com/foto-portada-pizza-cuatro-quesos.jpg",
  },
  // Farmacia Bozicovich
  {
    tradeId: "6417200b73a688bf33f96550",
    name: "Adermicina",
    category: "Cremas",
    description:
      "Crema germicida, cicatrizante, regeneradora y revitalizadora de los tejidos.",
    price: 500,
    image:
      "http://farmaciazentner.com.ar/wp-content/uploads/2021/08/7796285287856-1.jpg",
  },
  {
    tradeId: "6417200b73a688bf33f96550",
    name: "Voltarem",
    category: "Cremas",
    description:
      "Crema antinflamatoria con activo de Diclofenac sódico.",
    price: 500,
    image:
      "https://www.zonafarma.com.ar/wp-content/uploads/2021/10/40382409-01-BASEIMAGE-Midres.jpg",
  },
  {
    tradeId: "6417200b73a688bf33f96550",
    name: "Diclofenac Sódico",
    category: "Comprimidos",
    description: "Diclofenac 50 mg. caja x 16 comprimidos",
    price: 500,
    image:
      "https://www.zonafarma.com.ar/wp-content/uploads/2021/10/40382409-01-BASEIMAGE-Midres.jpg",
  },
  {
    tradeId: "6417200b73a688bf33f96550",
    name: "Lorazepam",
    category: "Comprimidos",
    description: "Lorazepam 1 mg. tira x 8 comprimidos",
    price: 900,
    image:
      "https://quefarmacia.com/wp-content/uploads/2018/05/IMG_1012-300x258.png",
  },
  {
    tradeId: "6417200b73a688bf33f96550",
    name: "Ibuprofeno",
    category: "Jarabe",
    description: "Ibuprofeno 4% x 120 ml. sabor frutilla.",
    price: 1500,
    image:
      "https://images.rappi.com.ar/products/436892210298_igmfaxzgbbpm_585391217122_skywvqoveysm_97719_1.jpeg",
  },
  // Farmacia Condor
  {
    tradeId: "6417200e73a688bf33f96560",
    name: "Adermicina",
    category: "Cremas",
    description:
      "Crema germicida, cicatrizante, regeneradora y revitalizadora de los tejidos.",
    price: 500,
    image:
      "http://farmaciazentner.com.ar/wp-content/uploads/2021/08/7796285287856-1.jpg",
  },
  {
    tradeId: "6417200e73a688bf33f96560",
    name: "Voltarem",
    category: "Cremas",
    description:
      "Crema antinflamatoria con activo de Diclofenac sódico.",
    price: 500,
    image:
      "https://www.zonafarma.com.ar/wp-content/uploads/2021/10/40382409-01-BASEIMAGE-Midres.jpg",
  },
  {
    tradeId: "6417200e73a688bf33f96560",
    name: "Diclofenac Sódico",
    category: "Comprimidos",
    description: "Diclofenac 50 mg. caja x 16 comprimidos",
    price: 500,
    image:
      "https://www.zonafarma.com.ar/wp-content/uploads/2021/10/40382409-01-BASEIMAGE-Midres.jpg",
  },
  {
    tradeId: "6417200e73a688bf33f96560",
    name: "Lorazepam",
    category: "Comprimidos",
    description: "Lorazepam 1 mg. tira x 8 comprimidos",
    price: 900,
    image:
      "https://quefarmacia.com/wp-content/uploads/2018/05/IMG_1012-300x258.png",
  },
  {
    tradeId: "6417200e73a688bf33f96560",
    name: "Ibuprofeno",
    category: "Jarabe",
    description: "Ibuprofeno 4% x 120 ml. sabor frutilla.",
    price: 1500,
    image:
      "https://images.rappi.com.ar/products/436892210298_igmfaxzgbbpm_585391217122_skywvqoveysm_97719_1.jpeg",
  },
  {
    tradeId: "6417200e73a688bf33f96560",
    name: "Actron 600",
    category: "Pastillas",
    description:
      "Ideal para la recuperacion muscular",
    price: 500,
    image:
      "https://cdn.shopify.com/s/files/1/0650/7895/2193/products/7793640215523_1024x1024_1_1024x1024.webp?v=1671794727",
  },
  {
    tradeId: "6417200e73a688bf33f96560",
    name: "Platsul",
    category: "Cremas",
    description:
      "Ideal para el tratamiento de heridas, quemaduras, etc.",
    price: 750,
    image:
      "https://http2.mlstatic.com/D_NQ_NP_712119-MLA51561526775_092022-V.jpg",
  },
  {
    tradeId: "6417200e73a688bf33f96560",
    name: "Ketorolac",
    category: "Comprimidos",
    description: "Antiinflamatorio",
    price: 600,
    image:
      "https://www.zonafarma.com.ar/wp-content/uploads/2021/10/40382409-01-BASEIMAGE-Midres.jpg",
  },
  {
    tradeId: "6417200e73a688bf33f96560",
    name: "Dipirona",
    category: "Comprimidos",
    description: "Analgesico",
    price: 900,
    image:
      "https://prixz.com.co/salud/wp-content/uploads/2021/09/dipirona.jpeg",
  },
  {
    tradeId: "6417200e73a688bf33f96560",
    name: "Buscapina",
    category: "Comprimidos",
    description: "Para el dolor estomacal",
    price: 1500,
    image:
      "https://farmacenter.cdn1.dattamax.com/userfiles/images/productos/600/667774.jpg?v=1637597732",
  },
  
  // Ortofarma
  {
    tradeId: "6417200b73a688bf33f96552",
    name: "Faja lumbar",
    category: "Elementos de contención",
    description:
      "Faja lumbar con tutores metalicos para corrección de postura y rotección de columna lumbar ante esfuerzos",
    price: 3500,
    image:
      "https://www.lubeseguridad.com.ar/images/faja4.jpg",
  },
  {
    tradeId: "6417200b73a688bf33f96552",
    name: "Muñequera",
    category: "Elementos de contención",
    description:
      "Muñequera para la limitación de movimientos en caso de lesiones.",
    price: 2900,
    image:
      "https://www.americansurgerysa.com/wp/wp-content/uploads/2020/03/9513-000-AS-SoporteYEstabilidad-Mu%C3%B1equera-Boomerang-Pulgar-02.jpg",
  },
  {
    tradeId: "6417200b73a688bf33f96552",
    name: "Muletas",
    category: "Elementos de desplazamiento",
    description: "Muletas regulables en altura de 1,50 a 1,90 mts. con apoyo antideslizante y axilares ergonómicos",
    price: 4700,
    image:
      "https://http2.mlstatic.com/D_NQ_NP_694376-MLA52557942063_112022-O.jpg",
  },
  {
    tradeId: "6417200b73a688bf33f96552",
    name: "Silla de ruedas",
    category: "Elementos de desplazamiento",
    description: "Silla de ruedas ergonomica plegable con apoya pies, frenos, agarres antideslizantes y armadura para autodesplazamiento",
    price: 12000,
    image:
      "https://www.silfab.com.ar/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/s/3/s3011a_1.jpg",
  },
  {
    tradeId: "6417200b73a688bf33f96552",
    name: "Venda elástica",
    category: "Varios",
    description: "Venda elástica de 15 cm x 2 mts. Confección de alta calidad.",
    price: 1500,
    image:
      "https://tienda.gelombardozzi.com.ar/wp-content/uploads/2018/06/VENDA-ELASTICA-2.jpg",
  },
  // Ortopedia 9 de julio
  {
    tradeId: "6417200e73a688bf33f96564",
    name: "Faja lumbar",
    category: "Elementos de contención",
    description:
      "Faja lumbar con tutores metalicos para corrección de postura y rotección de columna lumbar ante esfuerzos",
    price: 3500,
    image:
      "https://www.lubeseguridad.com.ar/images/faja4.jpg",
  },
  {
    tradeId: "6417200e73a688bf33f96564",
    name: "Muñequera",
    category: "Elementos de contención",
    description:
      "Muñequera para la limitación de movimientos en caso de lesiones.",
    price: 2900,
    image:
      "https://www.americansurgerysa.com/wp/wp-content/uploads/2020/03/9513-000-AS-SoporteYEstabilidad-Mu%C3%B1equera-Boomerang-Pulgar-02.jpg",
  },
  {
    tradeId: "6417200e73a688bf33f96564",
    name: "Muletas",
    category: "Elementos de desplazamiento",
    description: "Muletas regulables en altura de 1,50 a 1,90 mts. con apoyo antideslizante y axilares ergonómicos",
    price: 4700,
    image:
      "https://http2.mlstatic.com/D_NQ_NP_694376-MLA52557942063_112022-O.jpg",
  },
  {
    tradeId: "6417200e73a688bf33f96564",
    name: "Silla de ruedas",
    category: "Elementos de desplazamiento",
    description: "Silla de ruedas ergonomica plegable con apoya pies, frenos, agarres antideslizantes y armadura para autodesplazamiento",
    price: 12000,
    image:
      "https://www.silfab.com.ar/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/s/3/s3011a_1.jpg",
  },
  {
    tradeId: "6417200e73a688bf33f96564",
    name: "Venda elástica",
    category: "Varios",
    description: "Venda elástica de 15 cm x 2 mts. Confección de alta calidad.",
    price: 1500,
    image:
      "https://tienda.gelombardozzi.com.ar/wp-content/uploads/2018/06/VENDA-ELASTICA-2.jpg",
  },
  {
    tradeId: "6417200e73a688bf33f96564",
    name: "Plantillas",
    category: "Varios",
    description: "Para corregir la posicion del pie",
    price: 4500,
    image:
      "https://laopinion.com/wp-content/uploads/sites/3/2019/04/plantillas.jpg?quality=80&strip=all&w=1200",
  },
  {
    tradeId: "6417200e73a688bf33f96564",
    name: "Protesis varias",
    category: "Varios",
    description: "Hechas a medida segun las necesidades del cliente",
    price: 25000,
    image:
      "https://www.tec.ac.cr/hoyeneltec/sites/default/files/styles/colorbox/public/media/img/main/protesis-ergotec-tec.png",
  },
  // Spring Cleaning
  {
    tradeId: "6417200b73a688bf33f96554",
    name: "Detergente",
    category: "Cocina",
    description: "Detergente Ala x 300cc.",
    price: 500,
    image:
      "https://statics.dinoonline.com.ar/imagenes/full_600x600_ma/2790704_f.jpg",
  },
  {
    tradeId: "6417200b73a688bf33f96554",
    name: "Esponja",
    category: "Cocina",
    description: "Esponja Scotch Brite Limpieza Pesada x 1u.",
    price: 300,
    image:
      "https://multimedia.3m.com/mws/media/1385972P/scotch-brite-heavy-duty-scrub-spong-pack.jpg",
  },
  {
    tradeId: "6417200b73a688bf33f96554",
    name: "Echo",
    category: "Pisos",
    description: "Echo en el Balde 3 en 1 - Blem - x 5L",
    price: 500,
    image:
      "https://masbrillo.com.ar/wp-content/uploads/2022/02/echo-en-el-balde-5-litros1-aefa10334db057398315831643361918-640-0.jpg",
  },
  {
    tradeId: "6417200b73a688bf33f96554",
    name: "Pinoluz",
    category: "Pisos",
    description: "Pinoluz x 4L",
    price: 1300,
    image:
      "https://statics.dinoonline.com.ar/imagenes/full_600x600_ma/2750449_f.jpg",
  },
  {
    tradeId: "6417200b73a688bf33f96554",
    name: "Mr. Musculo Baños",
    category: "Baño",
    description: "Limpiador para baños Mr. Musculo x 500 ml.",
    price: 1500,
    image: "https://bahiaoffice.com/images/prods/7790520012388.jpg",
  },
  // Kalen
  {
    tradeId: "6417200c73a688bf33f96556",
    name: "Reloj de pared Tressa",
    category: "Living",
    description: "Reloj de pared Tressa.",
    price: 3600,
    image:
      "https://casatagger.com.ar/wp-content/uploads/2022/02/T-RP101-MD.jpg",
  },
  {
    tradeId: "6417200c73a688bf33f96556",
    name: "Sommier y colchon Belmo Belsping",
    category: "Dormitorio",
    description: "Colchón y sommier de 2 plazas 190 x 130 cm, gomaespuma de alta densidad.",
    price: 101000,
    image:
      "https://simmonsarg.vteximg.com.br/arquivos/ids/155797-1000-1000/sommier-belspring2-2plazas-190-130.jpg?v=637147142836570000",
  },
  {
    tradeId: "6417200c73a688bf33f96556",
    name: "Fuente de agua Deco",
    category: "Living",
    description: "Fuente de agua Deco - 220v.",
    price: 500,
    image:
      "https://abanicobazar.com/wp-content/uploads/2022/08/c029b443-dbad-4252-8ac6-2341d9b08828-PhotoRoom.png",
  },
  {
    tradeId: "6417200c73a688bf33f96556",
    name: "Martillo ablanda carne",
    category: "Cocina",
    description: "Martillo de madera para ablandar la carne",
    price: 550,
    image:
      "https://abanicobazar.com/wp-content/uploads/2020/05/WhatsApp-Image-2020-05-19-at-14.59.44-300x300.jpeg",
  },
  {
    tradeId: "6417200c73a688bf33f96556",
    name: "Abrelatas con uña",
    category: "Baño",
    description: "Abrelatas con uña marca Chef Houseware.",
    price: 360,
    image: "https://abanicobazar.com/wp-content/uploads/2021/06/e0a93411-b678-4a84-b21e-7883094dbbf9-300x300.jpg",
  },
  // Decoraland
  {
    tradeId: "6417200d73a688bf33f9655e",
    name: "Elefantes",
    category: "Varios",
    description: "Elefantes en distintos tamaños de ceramica",
    price: 3600,
    image:
      "https://i.pinimg.com/originals/34/f4/58/34f4583d50a17f8511b679a25157019b.jpg",
  },
  {
    tradeId: "6417200d73a688bf33f9655e",
    name: "Alfombras",
    category: "Varios",
    description: "Alfombras de distintos tamaños de la mejor calidad",
    price: 5000,
    image:
      "https://assets.hotsale.com.ar/uploads/offers/219571/628803e7b6d82.jpg?w=500&h=375",
  },
  {
    tradeId: "6417200d73a688bf33f9655e",
    name: "Fuente de agua Deco",
    category: "Living",
    description: "Fuente de agua Deco - 220v.",
    price: 500,
    image:
      "https://abanicobazar.com/wp-content/uploads/2022/08/c029b443-dbad-4252-8ac6-2341d9b08828-PhotoRoom.png",
  },
  {
    tradeId: "6417200d73a688bf33f9655e",
    name: "Martillo ablanda carne",
    category: "Cocina",
    description: "Martillo de madera para ablandar la carne",
    price: 550,
    image:
      "https://abanicobazar.com/wp-content/uploads/2020/05/WhatsApp-Image-2020-05-19-at-14.59.44-300x300.jpeg",
  },
  {
    tradeId: "6417200d73a688bf33f9655e",
    name: "Abrelatas con uña",
    category: "Baño",
    description: "Abrelatas con uña marca Chef Houseware.",
    price: 360,
    image: "https://abanicobazar.com/wp-content/uploads/2021/06/e0a93411-b678-4a84-b21e-7883094dbbf9-300x300.jpg",
  },
  {
    tradeId: "6417200d73a688bf33f9655e",
    name: "Reloj de pared Tressa",
    category: "Living",
    description: "Reloj de pared Tressa.",
    price: 3600,
    image:
      "https://casatagger.com.ar/wp-content/uploads/2022/02/T-RP101-MD.jpg",
  },
  {
    tradeId: "6417200d73a688bf33f9655e",
    name: "Sommier y colchon Belmo Belsping",
    category: "Dormitorio",
    description: "Colchón y sommier de 2 plazas 190 x 130 cm, gomaespuma de alta densidad.",
    price: 101000,
    image:
      "https://simmonsarg.vteximg.com.br/arquivos/ids/155797-1000-1000/sommier-belspring2-2plazas-190-130.jpg?v=637147142836570000",
  },
  {
    tradeId: "6417200d73a688bf33f9655e",
    name: "Lamparas",
    category: "Living",
    description: "Lamparas con distintos diseños y tamaños.",
    price: 1500,
    image:
      "https://imagenes.elpais.com/resizer/HiMp4tCf0GuTUS2_M8_aY8atMqc=/414x0/cloudfront-eu-central-1.images.arcpublishing.com/prisa/B24CV5JM7VFHVCIASCZCWS54HY.jpg",
  },
  {
    tradeId: "6417200d73a688bf33f9655e",
    name: "Lamparas de lava",
    category: "Varios",
    description: "Lampara decorativa para cualquier lugar de la casa",
    price: 550,
    image:
      "https://i.ytimg.com/vi/TC5fod_bwvY/maxresdefault.jpg",
  },
  {
    tradeId: "6417200d73a688bf33f9655e",
    name: "Velas aromaticas",
    category: "Varios",
    description: "Velas aromaticas variadas",
    price: 360,
    image: "https://okdiario.com/coolthelifestyle/img/2022/06/30/sixteen-miles-out-odfefv-y2v0-unsplash-scaled-e1656604213773.jpg",
  },

  //La casa del angel
  {
    tradeId: "6417200f73a688bf33f96566",
    name: "Alfombras",
    category: "Varios",
    description: "Alfombras de distintos tamaños de la mejor calidad",
    price: 5000,
    image:
      "https://assets.hotsale.com.ar/uploads/offers/219571/628803e7b6d82.jpg?w=500&h=375",
  },
  {
    tradeId: "6417200f73a688bf33f96566",
    name: "Fuente de agua Deco",
    category: "Living",
    description: "Fuente de agua Deco - 220v.",
    price: 500,
    image:
      "https://abanicobazar.com/wp-content/uploads/2022/08/c029b443-dbad-4252-8ac6-2341d9b08828-PhotoRoom.png",
  },
  {
    tradeId: "6417200f73a688bf33f96566",
    name: "Martillo ablanda carne",
    category: "Cocina",
    description: "Martillo de madera para ablandar la carne",
    price: 550,
    image:
      "https://abanicobazar.com/wp-content/uploads/2020/05/WhatsApp-Image-2020-05-19-at-14.59.44-300x300.jpeg",
  },
  {
    tradeId: "6417200f73a688bf33f96566",
    name: "Abrelatas con uña",
    category: "Baño",
    description: "Abrelatas con uña marca Chef Houseware.",
    price: 360,
    image: "https://abanicobazar.com/wp-content/uploads/2021/06/e0a93411-b678-4a84-b21e-7883094dbbf9-300x300.jpg",
  },
  {
    tradeId: "6417200f73a688bf33f96566",
    name: "Reloj de pared Tressa",
    category: "Living",
    description: "Reloj de pared Tressa.",
    price: 3600,
    image:
      "https://casatagger.com.ar/wp-content/uploads/2022/02/T-RP101-MD.jpg",
  },
  {
    tradeId: "6417200f73a688bf33f96566",
    name: "Sommier y colchon Belmo Belsping",
    category: "Dormitorio",
    description: "Colchón y sommier de 2 plazas 190 x 130 cm, gomaespuma de alta densidad.",
    price: 101000,
    image:
      "https://simmonsarg.vteximg.com.br/arquivos/ids/155797-1000-1000/sommier-belspring2-2plazas-190-130.jpg?v=637147142836570000",
  },
  {
    tradeId: "6417200f73a688bf33f96566",
    name: "Lamparas",
    category: "Living",
    description: "Lamparas con distintos diseños y tamaños.",
    price: 1500,
    image:
      "https://imagenes.elpais.com/resizer/HiMp4tCf0GuTUS2_M8_aY8atMqc=/414x0/cloudfront-eu-central-1.images.arcpublishing.com/prisa/B24CV5JM7VFHVCIASCZCWS54HY.jpg",
  },
  {
    tradeId: "6417200f73a688bf33f96566",
    name: "Lamparas de lava",
    category: "Varios",
    description: "Lampara decorativa para cualquier lugar de la casa",
    price: 550,
    image:
      "https://i.ytimg.com/vi/TC5fod_bwvY/maxresdefault.jpg",
  },
  {
    tradeId: "6417200f73a688bf33f96566",
    name: "Velas aromaticas",
    category: "Varios",
    description: "Velas aromaticas variadas",
    price: 360,
    image: "https://okdiario.com/coolthelifestyle/img/2022/06/30/sixteen-miles-out-odfefv-y2v0-unsplash-scaled-e1656604213773.jpg",
  },
  // Fravega
  {
    tradeId: "6417200c73a688bf33f96558",
    name: "Heladera",
    category: "Cocina",
    description: "Heladera de ultima generacion",
    price: 155000,
    image:
      "https://www.kohinoor.com.ar/Image/0/750_750-KHDA43-7_1.jpg",
  },
  {
    tradeId: "6417200c73a688bf33f96558",
    name: "Microondas",
    category: "Cocina",
    description: "Para recalentar tu comida o descongelar alimentos",
    price: 55500,
    image:
      "https://ichef.bbci.co.uk/news/640/cpsprodpb/183B1/production/_113494299_gettyimages-489937746.jpg",
  },
  {
    tradeId: "6417200c73a688bf33f96558",
    name: "Cocina",
    category: "Cocina",
    description: "Cocina de 4 hornallas",
    price: 121550,
    image:
      "https://whirlpoolarg.vtexassets.com/arquivos/ids/162615/perspectiva02-min.jpg?v=637813104308200000",
  },
  {
    tradeId: "6417200c73a688bf33f96558",
    name: "Lavaplatos",
    category: "Cocina",
    description: "Lavaplatos con secado automatico",
    price: 90000,
    image: "https://http2.mlstatic.com/D_NQ_NP_669180-MLA40241936834_122019-V.jpg",
  },
  {
    tradeId: "6417200c73a688bf33f96558",
    name: "Lavarropas",
    category: "Lavadero",
    description: "Lavarropas con centrifugado",
    price: 123600,
    image:
      "https://fabricasunidas.com.ar/wp-content/uploads/2022/05/aurora-frente.png",
  },
  // Ferreteria Roman
  {
    tradeId: "6417200d73a688bf33f9655c",
    name: "Cinta Aislante",
    category: "Varios",
    description: "Cinta aislante 5 mts",
    price: 400,
    image:
      "https://industriaslitoral.com.ar/wp-content/uploads/sites/25/2022/05/cinta-aisladora-1.jpg",
  },
  {
    tradeId: "6417200d73a688bf33f9655c",
    name: "Burletes",
    category: "Varios",
    description: "Para puertas o ventanas",
    price: 1200,
    image:
      "https://industriaslitoral.com.ar/wp-content/uploads/sites/25/2022/05/burlete-doble-1.jpg",
  },
  {
    tradeId: "6417200d73a688bf33f9655c",
    name: "Escuadras",
    category: "Medicion",
    description: "Escuadra de 40 cm",
    price: 700,
    image:
      "https://tiotomar.vtexassets.com/arquivos/ids/167956-800-800?v=637937558832100000&width=800&height=800&aspect=true",
  },
  // Kumanda
  {
    tradeId: "6417200e73a688bf33f96562",
    name: "Granola",
    category: "Alimentos",
    description: "Granola natural",
    price: 500,
    image:
      "https://industriaslitoral.com.ar/wp-content/uploads/sites/25/2022/05/cinta-aisladora-1.jpg",
  },
  {
    tradeId: "6417200e73a688bf33f96562",
    name: "Granola saborizada",
    category: "Alimentos",
    description: "Granola sabor frutilla",
    price: 800,
    image:
      "https://industriaslitoral.com.ar/wp-content/uploads/sites/25/2022/05/burlete-doble-1.jpg",
  },
  {
    tradeId: "6417200e73a688bf33f96562",
    name: "Granola con chocolate",
    category: "Alimentos",
    description: "Granola con chispas de chocolate",
    price: 700,
    image:
      "https://tiotomar.vtexassets.com/arquivos/ids/167956-800-800?v=637937558832100000&width=800&height=800&aspect=true",
  },
  {
    tradeId: "6417200e73a688bf33f96562",
    name: "Avena",
    category: "Alimentos",
    description: "Avena integral",
    price: 400,
    image:
      "https://industriaslitoral.com.ar/wp-content/uploads/sites/25/2022/05/cinta-aisladora-1.jpg",
  },
  {
    tradeId: "6417200e73a688bf33f96562",
    name: "Barras de cereales",
    category: "Snack",
    description: "Barras de cereales con cascaras de naranja",
    price: 600,
    image:
      "https://industriaslitoral.com.ar/wp-content/uploads/sites/25/2022/05/burlete-doble-1.jpg",
  },
  {
    tradeId: "6417200e73a688bf33f96562",
    name: "Galletas de avena",
    category: "Snack",
    description: "Galletas de avena con frutilla",
    price: 700,
    image:
      "https://tiotomar.vtexassets.com/arquivos/ids/167956-800-800?v=637937558832100000&width=800&height=800&aspect=true",
  },
  {
    tradeId: "6417200e73a688bf33f96562",
    name: "Alfajores light",
    category: "Snack",
    description: "Alfajores light con mermelada de frutilla",
    price: 400,
    image:
      "https://industriaslitoral.com.ar/wp-content/uploads/sites/25/2022/05/cinta-aisladora-1.jpg",
  },
  // Samsung
  {
    tradeId: "6417200d73a688bf33f9655a",
    name: "Monitor Gaming",
    category: "Monitores",
    description: "Monitor de 27 pulgadas, excelente calidad",
    price: 140800,
    image:
      "https://www.lg.com/co/images/monitores/md07541889/gallery/D1.jpg",
  },
  {
    tradeId: "6417200d73a688bf33f9655a",
    name: "Monitor led",
    category: "Monitores",
    description: "Monitor de 24 pulgadas, muy accesible",
    price: 62700,
    image:
      "https://images.samsung.com/is/image/samsung/p6pim/ar/ls27ag550elxzb/gallery/ar-odyssey-g5-g55a-407983-ls27ag550elxzb-530679369?$650_519_PNG$",
  },
  {
    tradeId: "6417200d73a688bf33f9655a",
    name: "Smart TV",
    category: "Televisores",
    description: "Smart tv de 55 pulgadas",
    price: 159400,
    image:
      "https://samsungar.vtexassets.com/arquivos/ids/175718/AU7000_55_Shop_02.jpg?v=638048267078900000",
  },
  {
    tradeId: "6417200d73a688bf33f9655a",
    name: "Galaxy S23",
    category: "Celular",
    description: "Celular ultima generacion color cobalto",
    price: 455600,
    image:
      "https://images.samsung.com/ar/smartphones/galaxy-s23/images/galaxy-s23-common-buynow-banner-s.jpg",
  },
  {
    tradeId: "6417200d73a688bf33f9655a",
    name: "Galaxy S21",
    category: "Celular",
    description: "Opcion mas accesible, color a eleccion",
    price: 228700,
    image:
      "https://images.samsung.com/sa_en/smartphones/galaxy-s21/buy/s21_group_kv_mo_img.jpg",
  },
  {
    tradeId: "6417200d73a688bf33f9655a",
    name: "Galaxy A33",
    category: "Celular",
    description: "Opcion alternativa",
    price: 130400,
    image:
      "https://i5.walmartimages.com/asr/963ca2fd-2e2d-47cd-89f2-a4490f3c2cc4.7faef8e649c026f04c603165415095f3.png",
  },
  // Motorola
  {
    tradeId: "6417201073a688bf33f9656e",
    name: "Monitor Gaming",
    category: "Monitores",
    description: "Monitor de 27 pulgadas, excelente calidad",
    price: 140800,
    image:
      "https://www.lg.com/co/images/monitores/md07541889/gallery/D1.jpg",
  },
  {
    tradeId: "6417201073a688bf33f9656e",
    name: "Monitor led",
    category: "Monitores",
    description: "Monitor de 24 pulgadas, muy accesible",
    price: 62700,
    image:
      "https://images.samsung.com/is/image/samsung/p6pim/ar/ls27ag550elxzb/gallery/ar-odyssey-g5-g55a-407983-ls27ag550elxzb-530679369?$650_519_PNG$",
  },
  {
    tradeId: "6417201073a688bf33f9656e",
    name: "Smart TV",
    category: "Televisores",
    description: "Smart tv de 55 pulgadas",
    price: 159400,
    image:
      "https://samsungar.vtexassets.com/arquivos/ids/175718/AU7000_55_Shop_02.jpg?v=638048267078900000",
  },
  {
    tradeId: "6417201073a688bf33f9656e",
    name: "Galaxy S23",
    category: "Celular",
    description: "Celular ultima generacion color cobalto",
    price: 455600,
    image:
      "https://images.samsung.com/ar/smartphones/galaxy-s23/images/galaxy-s23-common-buynow-banner-s.jpg",
  },
  {
    tradeId: "6417201073a688bf33f9656e",
    name: "Galaxy S21",
    category: "Celular",
    description: "Opcion mas accesible, color a eleccion",
    price: 228700,
    image:
      "https://images.samsung.com/sa_en/smartphones/galaxy-s21/buy/s21_group_kv_mo_img.jpg",
  },
  {
    tradeId: "6417201073a688bf33f9656e",
    name: "Galaxy A33",
    category: "Celular",
    description: "Opcion alternativa",
    price: 130400,
    image:
      "https://i5.walmartimages.com/asr/963ca2fd-2e2d-47cd-89f2-a4490f3c2cc4.7faef8e649c026f04c603165415095f3.png",
  },
  {
    tradeId: "6417201073a688bf33f9656e",
    name: "Auriculares inalambricos",
    category: "Complementos",
    description: "Auriculares de excelente calidad",
    price: 28700,
    image:
      "https://tienda.pago24.com.ar/media/catalog/product/cache/f07023a9a396e3e18fd61127b1cc0fbc/p/u/pulse-escape-camo_1.jpg",
  },
  {
    tradeId: "6417201073a688bf33f9656e",
    name: "Adaptador de audio",
    category: "Complementos",
    description: "Cargador para el auto",
    price: 30400,
    image:
      "https://armoto.vtexassets.com/arquivos/ids/163645-300-300?v=1765559993&width=300&height=300&aspect=true",
  },
  //Compragamer
  {
    tradeId: "6417200f73a688bf33f96568",
    name: "Monitor Gaming",
    category: "Monitores",
    description: "Monitor de 27 pulgadas, excelente calidad",
    price: 140800,
    image:
      "https://www.lg.com/co/images/monitores/md07541889/gallery/D1.jpg",
  },
  {
    tradeId: "6417200f73a688bf33f96568",
    name: "Monitor led",
    category: "Monitores",
    description: "Monitor de 24 pulgadas, muy accesible",
    price: 62700,
    image:
      "https://images.samsung.com/is/image/samsung/p6pim/ar/ls27ag550elxzb/gallery/ar-odyssey-g5-g55a-407983-ls27ag550elxzb-530679369?$650_519_PNG$",
  },
  {
    tradeId: "6417200f73a688bf33f96568",
    name: "Procesador AMD Ryzen",
    category: "Procesadores",
    description: "Procesador AMD Ryzen 1600 a precio muy accesible",
    price: 42400,
    image:
      "https://static-geektopia.com/storage/t/i/426/42698/fd77402d6c94821439a2f670c.webp",
  },
  {
    tradeId: "6417200f73a688bf33f96568",
    name: "Fuente ASUS",
    category: "Complementos",
    description: "Fuente muy potente para tu nuevo equipo gaming",
    price: 75700,
    image:
      "https://tiendabc-st.com/wp-content/uploads/2022/03/FUENTE-GAMING-PODER-ASUS-STRIX-650W-GOLD-80PLUS_11zon.jpg",
  },
  {
    tradeId: "6417200f73a688bf33f96568",
    name: "Placa de Video Geforce 3070",
    category: "Placas de video",
    description: "Placa de video de ultima generacion con descuento!",
    price: 230400,
    image:
      "https://http2.mlstatic.com/D_NQ_NP_610563-MLA50333890244_062022-O.webp",
  },
  // Sony
  {
    tradeId: "6417200f73a688bf33f9656a",
    name: "Playstation 5",
    category: "Consolas",
    description: "Playstation con lector de cds",
    price: 250800,
    image:
      "https://jumboargentina.vtexassets.com/arquivos/ids/604345/Consola-Playstation-5-Ps5-Hw-Standard-2-853923.jpg?v=637369032320830000",
  },
  {
    tradeId: "6417200f73a688bf33f9656a",
    name: "Playstation 5 digital",
    category: "Consolas",
    description: "Playstation sin lectora de cd",
    price: 202700,
    image:
      "https://static.hendel.com/media/catalog/product/cache/0c3e9ac8430b5a3e77d1544ae1698a10/4/5/45505dig_1-min.jpg",
  },
  {
    tradeId: "6417200f73a688bf33f9656a",
    name: "Control dualsense",
    category: "Complementos",
    description: "Control de ultima generacion con motion sense",
    price: 30400,
    image:
      "https://arsonyb2c.vtexassets.com/arquivos/ids/357022/PS5-DualSense-MidnightBlack.jpg?v=637588179574830000",
  },
  // Pampagames
  {              
    tradeId: "6417201073a688bf33f9656c",
    name: "Resident Evil",
    category: "Videojuegos",
    description: "Remake del clasico juego de PS1",
    price: 400,
    image:
      "https://media.vandal.net/i/ivandal/1200x630/25457/resident-evil-hd-remaster-2015121151211_1.jpg",
  },
  {
    tradeId: "6417201073a688bf33f9656c",
    name: "God of war",
    category: "Videojuegos",
    description: "Reimaginacion y continuacion de la historia de Kratos, esta vez viajando a tierras nordicas",
    price: 600,
    image:
      "https://media.vandal.net/m/27407/god-of-war-201837182554_1.jpg",   
  },
  {
    tradeId: "6417201073a688bf33f9656c",
    name: "God of war Ragnarok",
    category: "Videojuegos",
    description: "Secuela de la saga nordica del dios de la guerra",
    price: 500,
    image:
      "https://media.vandal.net/m/90451/god-of-war-ragnarok-20221131016774_1.jpg",    
  },
  {
    tradeId: "6417201073a688bf33f9656c",
    name: "Elder Scrolls V Skyrim",
    category: "Videojuegos",
    description: "Explora este mundo de fantasia epica ahora en pc",
    price: 740,
    image:
      "https://static.wikia.nocookie.net/elderscrolls/images/c/c5/Skyrim_Cover.png/revision/latest?cb=20160812173034",    
  },
  {
    tradeId: "6417201073a688bf33f9656c",
    name: "Divinity Original Sin",
    category: "Videojuegos",
    description: "Recorre estas tierras mientras estas cumpliendo tu destino",
    price: 350,
    image:
      "https://http2.mlstatic.com/D_NQ_NP_714762-MLA49380055323_032022-O.jpg",    
  },
  {
    tradeId: "6417201073a688bf33f9656c",
    name: "Final Fantasy XV",
    category: "Videojuegos",
    description: "Acompaña a Noctis y sus compañeros de viaje en este viaje por un mundo que necesita ayuda",
    price: 500,
    image:
      "https://dixgamer.com/wp-content/uploads/2016/11/final-fantasy-xv-7.jpg",    
  },
  {
    tradeId: "6417201073a688bf33f9656c",
    name: "Final Fantasy VII Remake",
    category: "Videojuegos",
    description: "Remake de un juego clasico, considerado de los mejores de todos los tiempos",
    price: 600,
    image:
      "https://media.vandal.net/m/31658/final-fantasy-vii-remake-20199241755017_1.jpg",    
  },
  {
    tradeId: "6417201073a688bf33f9656c",
    name: "Bioshock",
    category: "Videojuegos",
    description: "Has escuchado hablar de rapture? no? Pues toca explorarlo!",
    price: 600,
    image:
      "hhttps://upload.wikimedia.org/wikipedia/en/6/6d/BioShock_cover.jpg",    
  },
  {
    tradeId: "6417201073a688bf33f9656c",
    name: "Bioshock 2",
    category: "Videojuegos",
    description: "Secuela donde veremos la historia de rapture desde otro punto de vista",
    price: 400,
    image:
      "https://cdn1.epicgames.com/offer/304724b675974566b1d7e23af80a1f52/EGS_BioShock2Remastered_MassMediaGames_S2_1200x1600-9ce67143723d05cda671b3e966732fd7",    
  },
  {
    tradeId: "6417201073a688bf33f9656c",
    name: "Black Mesa",
    category: "Videojuegos",
    description: "Remake del Half life con nuevo motor grafico",
    price: 450,
    image:
      "https://i0.wp.com/pivigames.blog/wp-content/uploads/2020/11/Black-Mesa-Definitive-Edition-PiviGames.jpg?fit=616%2C353&ssl=1",    
  },
  {
    tradeId: "6417201073a688bf33f9656c",
    name: "Doom",
    category: "Videojuegos",
    description: "Remake del clasico juego de los 80 que reinvento un genero",
    price: 325,
    image:
      "https://dixgamer.com/wp-content/uploads/2016/11/Doom-1.jpg",    
  },
  {
    tradeId: "6417201073a688bf33f9656c",
    name: "Dragon Ball FighterZ",
    category: "Videojuegos",
    description: "Lucha junto con los guerreros z en este frenetico juego en 2.5D",
    price: 450,
    image:
      "https://media.vandal.net/m/49073/dragon-ball-fighterz-2017102315937_3.jpg",    
  },
  {
    tradeId: "6417201073a688bf33f9656c",
    name: "Ender Lilies",
    category: "Videojuegos",
    description: "Preparate para un viaje en este metroidvania en 2d",
    price: 250,
    image:
      "https://cdn.cloudflare.steamstatic.com/steam/apps/1369630/capsule_616x353.jpg?t=1669342310",    
  },
  {
    tradeId: "6417201073a688bf33f9656c",
    name: "Hades",
    category: "Videojuegos",
    description: "Ayuda a Zagreo a escapar de y del Hades",
    price: 375,
    image:
      "https://i.ytimg.com/vi/BJNfc-xRYJI/maxresdefault.jpg",    
  },
  {
    tradeId: "6417201073a688bf33f9656c",
    name: "Ori and the Blind Forest",
    category: "Videojuegos",
    description: "El bosque del espiritu esta perdiendo su vida, ayudaras a Ori en esta aventura?",
    price: 500,
    image:
      "https://upload.wikimedia.org/wikipedia/en/thumb/b/b2/Ori_and_the_Blind_Forest_Logo.jpg/220px-Ori_and_the_Blind_Forest_Logo.jpg",    
  },
  {
    tradeId: "6417201073a688bf33f9656c",
    name: "Ori and the will of the wisps",
    category: "Videojuegos",
    description: "Una nueva amenaza se cierne sobre el bosque, y Ori tiene que volver a ayudar",
    price: 700,
    image:
      "https://store-images.s-microsoft.com/image/apps.18799.14047496556148589.9fda5cef-7995-4dbb-a626-66d2ab3feb4f.1e167626-8b7d-47b4-9fe5-d06a43ac6677?q=90&w=177&h=265",    
  },  
  {              
    tradeId: "6417201073a688bf33f9656c",
    name: "Outer wilds",
    category: "Videojuegos",
    description: "Prepara pañuelos, porque este viaje espacial, es muy especial",
    price: 400,
    image:
      "https://image.api.playstation.com/vulcan/ap/rnd/202208/1623/Zofebh60Ue7Zt5sC10UAtU3D.png",
  },
  {
    tradeId: "6417201073a688bf33f9656c",
    name: "Prince of persia",
    category: "Videojuegos",
    description: "Vuelve a jugar este clasico de plataformas",
    price: 600,
    image:
      "https://upload.wikimedia.org/wikipedia/en/8/86/Sands_of_time_cover.jpg",   
  },
  {
    tradeId: "6417201073a688bf33f9656c",
    name: "Star wars fallen order",
    category: "Videojuegos",
    description: "Acompaña A Cal Kestis a recorrer la galaxia en esta nueva aventura basada en el universo de Star wars",
    price: 500,
    image:
      "https://i.blogs.es/307bf0/starwars/1366_2000.jpeg",    
  },
  {
    tradeId: "6417201073a688bf33f9656c",
    name: "Monster hunter World",
    category: "Videojuegos",
    description: "Monstruos grandes y poder cazarlos con amigos? en serio tienes un mejor plan?",
    price: 740,
    image:
      "https://image.api.playstation.com/vulcan/img/rnd/202010/0106/IyY3JSzHNCVoh7FultMPaE8F.jpg",    
  },
  {
    tradeId: "6417201073a688bf33f9656c",
    name: "Mass Effect Legendary Edition",
    category: "Videojuegos",
    description: "Remake de la legendaria saga de John Shepard en el espacio",
    price: 350,
    image:
      "https://cdn.akamai.steamstatic.com/steam/apps/1328670/capsule_616x353.jpg?t=1669773470",    
  },
  //Showsport
  {
    tradeId: "6417201073a688bf33f96570",
    name: "Zapatillas adidas",
    category: "Calzados",
    description: "Zapatillas adidas ideales para hacer deportes",
    price: 600,
    image:
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/a3b3c26ba11f450a9f91ae9b00f43cb9_9366/Zapatillas_Galaxy_6_Negro_GW3847_01_standard.jpg",   
  },
  {
    tradeId: "6417201073a688bf33f96570",
    name: "Zapatillas nike",
    category: "Calzados",
    description: "Zapatillas para correr",
    price: 500,
    image:
      "https://essential.vtexassets.com/arquivos/ids/655876-800-auto?v=638040472081700000&width=800&height=auto&aspect=true",    
  },
  {
    tradeId: "6417201073a688bf33f96570",
    name: "Camiseta boca",
    category: "Futbol",
    description: "Camiseta titular de boca en todos los talles",
    price: 740,
    image:
      "https://bocashop.vteximg.com.br/arquivos/ids/168359-1000-1000/HE6323_1.jpg?v=637922173219300000",    
  },
  {
    tradeId: "6417201073a688bf33f96570",
    name: "Camiseta River",
    category: "Futbol",
    description: "Camiseta titular de river en todos los talles",
    price: 350,
    image:
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/42f6e0d4f39047e8b476aee60109bc4c_9366/Camiseta_Titular_River_Plate_22-23_Blanco_GB7592_01_laydown.jpg",    
    },
  //Waiting
  {
    tradeId: "6417201073a688bf33f96572",
    name: "Chomba",
    category: "Remeras",
    description: "Comoda chomba coleccion verano en todos los talles",
    price: 600,
    image:
      "https://http2.mlstatic.com/D_NQ_NP_863801-MLA48199575407_112021-V.jpg",   
  },
  {
    tradeId: "6417201073a688bf33f96572",
    name: "Boxers",
    category: "Ropa interior",
    description: "3 boxer lisos en promocion ",
    price: 500,
    image:
      "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/186/418/products/gftjyjyjyj1-24fa6397a07865f4f616473800648993-480-0.png",    
  },
  {
    tradeId: "6417201073a688bf33f96572",
    name: "Camisa",
    category: "Camisas",
    description: "Camisa manga cortas a rayas en todos los talles",
    price: 740,
    image:
      "https://http2.mlstatic.com/D_NQ_NP_979111-MLA47759618362_102021-O.jpg",    
  },
  {
    tradeId: "6417201073a688bf33f96572",
    name: "Camisa",
    category: "Camisas",
    description: "Camisa manga larga a cuadros en todos los talles",
    price: 350,
    image:
      "http://d3ugyf2ht6aenh.cloudfront.net/stores/001/186/418/products/sdasdasd1-cb6b268b4e2745069016482316161329-640-0.png",    
    },
  //Gucci
  {
    tradeId: "6417201173a688bf33f96574",
    name: "Vestido liso",
    category: "Vestidos",
    description: "Elegante vestido",
    price: 600,
    image:
      "https://http2.mlstatic.com/D_NQ_NP_845176-MLA43242971974_082020-O.jpg",   
  },
  {
    tradeId: "6417201173a688bf33f96574",
    name: "Vestido estampado",
    category: "Vestidos",
    description: "Audaz vestido con estampado floral para impresionar en esta primavera ",
    price: 500,
    image:
      "https://images.vestiairecollective.com/cdn-cgi/image/w=3840,q=70,f=auto,/produit/vestidos-gucci-de-lino-multicolor-14306217-1_3.jpg",    
  },
  {
    tradeId: "6417201173a688bf33f96574",
    name: "Cartera",
    category: "Accesorios",
    description: "Con un accesible precio, y un arriesgado diseño, te llevaras las miradas con esta cartera",
    price: 600,
    image:
      "https://http2.mlstatic.com/D_NQ_NP_796879-MLA54069843293_022023-W.jpg",   
  },
  {
    tradeId: "6417201173a688bf33f96574",
    name: "Cartera edicion Limitada",
    category: "Accesorios",
    description: "Cartera edicion limitada por la coleccion primavera verano ",
    price: 500,
    image:
      "https://i.pinimg.com/236x/50/87/5d/50875d98e622f21dc5ff8c0fa95e299e.jpg",    
  },
  {
    tradeId: "6417201173a688bf33f96574",
    name: "Mocasines",
    category: "Calzado",
    description: "Elegantes zapatos para acompañar ese outfit formal que tiene preparado",
    price: 600,
    image:
      "https://media.vogue.mx/photos/63289105b806051d7b7f1866/master/w_1772,h_1060,c_limit/mocassini%20gucci%20404069_BLM00_1000.jpg",   
  },
  {
    tradeId: "6417201173a688bf33f96574",
    name: "Zapatos",
    category: "Calzados",
    description: "Elegantes zapatos con tacones para lucir a donde vayas ",
    price: 500,
    image:
      "https://media.gucci.com/style/DarkGray_Center_0_0_600x314/1662567342/719846_10R60_1000_001_100_0000_Light-Mocasn-con-GG-para-mujer.jpg",    
  },
  //Pasito a pasito
  {
    tradeId: "6417201173a688bf33f96576",
    name: "Chupetes para bebe",
    category: "Chupetes",
    description: "Pack de 4 chupetes para esos primeros meses del infante",
    price: 500,
    image:
      "https://farmacityar.vteximg.com.br/arquivos/ids/224953-600-600/228686_chupetes-avent-ultra-air-deco-gris-y-azul-6-18-m-x-2-un_imagen-1.jpg?v=637922929127500000",    
  },
  {
    tradeId: "6417201173a688bf33f96576",
    name: "Entero de corderito",
    category: "Ropa",
    description: "Entero de cordero hecho de lana para que mantener abrigado al bebe durante el invierno",
    price: 600,
    image:
      "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/117/945/products/enterito_teddy_natural1-e1584106901904-omif4b2el3q6jns5sjmtt2th4okxa5qqc72g6t2ntk1-1cd690b3688a22fe0e15910268528437-480-0.jpg",   
  },
  {
    tradeId: "6417201173a688bf33f96576",
    name: "Zapatillas",
    category: "Calzados",
    description: "Zapatillas con un diseño simple para mantener seguros los pies del infante mientras esta dando sus primeros pasos! ",
    price: 500,
    image:
      "https://media.solodeportes.com.ar/media/catalog/product/cache/7c4f9b393f0b8cb75f2b74fe5e9e52aa/z/a/zapatillas-nike-pico-5-bebe-blanca-510010ar4162100-1.jpg",    
  },
  //PioPio
  {
    tradeId: "6417201173a688bf33f96578",
    name: "Chupetes para bebe",
    category: "Chupetes",
    description: "Pack de 4 chupetes para esos primeros meses del infante",
    price: 500,
    image:
      "https://farmacityar.vteximg.com.br/arquivos/ids/224953-600-600/228686_chupetes-avent-ultra-air-deco-gris-y-azul-6-18-m-x-2-un_imagen-1.jpg?v=637922929127500000",    
  },
  {
    tradeId: "6417201173a688bf33f96578",
    name: "Entero de corderito",
    category: "Ropa",
    description: "Entero de cordero hecho de lana para que mantener abrigado al bebe durante el invierno",
    price: 600,
    image:
      "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/117/945/products/enterito_teddy_natural1-e1584106901904-omif4b2el3q6jns5sjmtt2th4okxa5qqc72g6t2ntk1-1cd690b3688a22fe0e15910268528437-480-0.jpg",   
  },
  {
    tradeId: "6417201173a688bf33f96578",
    name: "Zapatillas",
    category: "Calzados",
    description: "Zapatillas con un diseño simple para mantener seguros los pies del infante mientras esta dando sus primeros pasos! ",
    price: 500,
    image:
      "https://media.solodeportes.com.ar/media/catalog/product/cache/7c4f9b393f0b8cb75f2b74fe5e9e52aa/z/a/zapatillas-nike-pico-5-bebe-blanca-510010ar4162100-1.jpg",    
  },
  {
    tradeId: "6417201173a688bf33f96578",
    name: "Short a rayas ",
    category: "Ropa",
    description: "Short a rayas muy coqueto para estos dias de calor",
    price: 500,
    image:
      "https://i.pinimg.com/originals/d3/59/27/d35927943e1736dace7a4487c91e496c.jpg",    
  },
  {
    tradeId: "6417201173a688bf33f96578",
    name: "Remeras estampadas",
    category: "Ropa",
    description: "Remeras con distintos diseños para que vestirse tambien sea divertido!",
    price: 600,
    image:
      "https://http2.mlstatic.com/D_NQ_NP_630618-MLA42732516425_072020-O.jpg",   
  },
  {
    tradeId: "6417201173a688bf33f96578",
    name: "Gorrito",
    category: "Ropa",
    description: "Gorro de lana para estos dias de frio que se vienen ",
    price: 500,
    image:
      "https://images-na.ssl-images-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/81juf0LJmML._AC_UL330_SR330,330_.jpg",    
  },
    ]

module.exports = {products}