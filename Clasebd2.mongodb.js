use('sample_restaurants')

// 1.    Mostrar todos los documentos en los restaurantes de colección.
// db.restaurants.find()


// 2.    Muestre los campos del id del restaurante, nombre, distrito y tipo de cocina para todos los documentos de la colección.
// db.restaurants.find({},{"restaurant_id":true,"name":true, "borough":true, "cuisine":true})


// 3.    Muestre los campos del id del restaurante, nombre, distrito y tipo de cocina, pero excluya el campo _id para todos los documentos en la colección restaurant.
// db.restaurants.find({},{"_id":false,"restaurant_id":true,"name":true,"borough":true,"cuisine":true})

// 4.    muestre los campos restaurant_id, nombre, distrito y código postal (zipcode), pero excluya el campo _id para todos los documentos en la colección restaurant.
// db.restaurants.find({},{"restarnt_id":true,"name":true,"borough":true,"address":true,"_id":false})


// 5.    Mostrar todos los restaurantes que se encuentran en el distrito del Bronx.
// db.restaurants.find({"borough":"Bronx"})


// 6.    Mostrar los primeros 5 restaurantes que se encuentran en el barrio Bronx.
// db.restaurants.find({"borough":"Bronx"}).limit(5)


// 7.    Mostrar los primeros 3 restaurantes después de omitir los primeros 10 que se encuentran en el distrito Bronx.
// db.restaurants.find({"borough":"Bronx"}).skip(10).limit(3)


// 8.    Encuentrar todos los restaurantes que se ubican en latitud valor inferior a -95.754168.
// db.restaurants.find({"address.coord.0" : {$lt : -95.754168}})

// 9.    encuentre la identificación del restaurante, el nombre, el distrito y la cocina de aquellos restaurantes que contienen 'Wil' como las primeras tres letras de su nombre.
// db.restaurants.find({"name" : /^Wil/},{"_id":false,"restaurant_id":true,"name":true,"borough":true,"cuisine":true})
//alt+gr+llavequeabre



// 10.    encuentre la identificación del restaurante, el nombre, el distrito y la cocina de aquellos restaurantes que contienen 'ces' como las últimas tres letras de su nombre.
// db.restaurants.find({"name": /ces$/},{"restaurant_id":true,"name":true,"borough":true,"cuisine":true})


// 11.    Encuentre el id del restaurante, el nombre, el distrito y el tipo de cocina de aquellos restaurantes que contienen 'Reg' como tres letras en alguna parte de su nombre.
// db.restaurants.find({"name": /^Reg/},{"id_restaurants":true,"name":true,"borough":true,"cuisine":true})

// 12.    Encuentre el nombre del restaurante, distrito, coordenadas (longitud y latitud) y tipo de cocina para aquellos restaurantes que contienen 'mon' como tres letras en alguna parte de su nombre.
// db.restaurants.find({"name": /mon/},{"address.coord":true})

// 13.    Encuentre el nombre del restaurante, el distrito, coordenadas (longitud y latitud) y el tipo de cocina de aquellos restaurantes que contienen 'Mad' como las tres primeras letras de su nombre.
// db.restaurants.find({"name" : /^Mad/},{"name":true,"borought":true,"address.coord":true})

// 14.    Encuentre el id del restaurante, el nombre, el distrito y el tipo de cocina de aquellos restaurantes cuyas especialidades no son ni 'Americana' ni 'China' y el nombre del restaurante comienza con la letra 'Wil'.
// db.restaurants.find({"cuisine": { $nin: ["American", "Chinese"] },"name": /^Wil/ },{"_id":false,"restaurant_id":true,"name":true,"borough":true,"cuisine":true})

// 15.    Encuentra los restaurantes que pertenecen al barrio Bronx y preparan platos americanos o chinos.
// db.restaurants.find({"borough": "Bronx", "cuisine":{$in:["American","Chinese"]}})

// 16.    Encuentre el id del restaurante, el nombre, el distrito y el tipo de cocina para aquellos restaurantes que pertenecen al distrito 'Staten Island', 'Queens', 'Bronx' o 'Brooklyn'.
// db.restaurants.find({"borough":{$in:["Staten Island", "Queens", "Bronx", "Brooklyn"]}},{"_id":false,"restaurant_id":true,"name":true,"borough":true,"cuisine":true})


// 17.    Encuentre el id del restaurante, el nombre, el distrito y el tipo de cocina para aquellos restaurantes que no pertenecen a los distritos de 'Staten Island', 'Queens', 'Bronx' o 'Brooklyn'.
// db.restaurants.find({"borough":{$nin:["Staten Island", "Queens", "Bronx", "Brooklyn"]}},{"_id":false,"restaurant_id":true,"name":true,"borough":true,"cuisine":true})


// 18.    Encuentre la identificación del restaurante, el nombre, el distrito y el tipo de cocina de aquellos restaurantes que lograron al menos una puntuación que no supere los 10.
// db.restaurants.find({"grades.score":{$lte:10}},{"_id":false,"restaurant_id":true,"name":true,"borough":true,"cuisine":true,"grades":true})


// 19.    Ordena el nombre de los restaurantes en orden ascendente junto con todas las columnas.
// db.restaurants.find().sort({"name" : 1})


// 20.    Ordenar el nombre de los restaurantes en forma descendente junto con todas las columnas.
// db.restaurants.find().sort({"name" : -1})

// 21. Ordenar el tipo de cocina en orden ascendente y el distrito debe estar en orden descendente.
// db.restaurants.find().sort({"cuisine" : 1, "borough" : -1})

// 22. Verificar si todas las direcciones contienen la palabra “Street”.
// db.restaurants.find({"address.street":{$exists:true}})

// if (db.restaurants.find({"address":{$not:{$all: ["street"]}}}).count() === 0){
//     print("Todas las arrays de direcciones contienen el array 'Street'");
// } else {
//     print("No todas las arrays de direcciones contienen el array 'Street'");
// }

// 23. Escriba una consulta MongoDB que seleccione todos los documentos en la colección de restaurantes donde el valor del campo coord es de tipo Doble.
// db.restaurants.find({"address.coord":{$type:"double"}})

// 24. ¿Cuántos restaurantes están ubicados en el distrito de Queens?¿Cuántos en Brooklyn?¿Cuántos en el Bronx?
// db.restaurants.find({"borough":{$in:["Queens", "Brooklyn","Bronx"]}}).count() // Muestra el total de los 3
// db.restaurants.find({"borough": "Queens"}).count() //Muestra el total de Queens
// db.restaurants.find({"borough": "Brooklyn"}).count() // Muestra el total de Brooklyn
// db.restaurants.find({"borough": "Bronx"}).count() // Muestra el total de Bronx

// // 25. ¿Cuántos restaurantes que estan en el Bronx cocinan comida de tipo "Americana"?
// db.restaurants.find({$and:[{"borough":"Bronx"},{"cuisine":"American"}]}).count()


