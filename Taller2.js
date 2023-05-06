// use("sample_restaurants")

// db.restaurants.find()
// //1
//  db.listingsAndReviews.aggregate([

// {
//     $project: {
//       _id:"$amenities",
//       nroAmenisties:{$size:"$amenities"},
//       name:true
//     }
// },
// {
//   $sort: {
//     nroAmenisties: -1
//   }
// }

// ]);


// //2
// db.listingsAndReviews.aggregate([
//     {$match: {
//         "amenities": {
//             $in: ["Wifi","Ethernet" ]  
//     }
//     }},
//     {
//       $count: 'NroPropiedadesConexionInternet'
//     }
// ])

// //3

// db.listingsAndReviews.aggregate([
//   {
//     $match: {
//       "address.country": "Brazil",
//       "amenities": { $all: [ "Ethernet connection" ] },
//       "review_scores.review_scores_rating": { $gte: 80 },
//       "number_of_reviews": { $gte: 50 }
//     }
//   }
// ])

// //4

// db.listingsAndReviews.aggregate([
//   {
//     $match: {
//       "property_type": "House"
//     }
//   },
//   {
//     $group: {
//       _id: "$address.country",
//       avg_price: { $avg: "$price" }
//     }
//   }
// ])

// //5

// //¿Cuántos restaurantes hay en total?



// db.restaurants.count()


// //¿Cuál es el distrito que cuenta con el mayor número de restaurantes?


// db.restaurants.aggregate([
//   {
//     $group: {
//       _id: "$borough",
//       count: { $sum: 1 }
//     }
//   },
//   {
//     $sort: {
//       count: -1
//     }
//   },
//   {
//     $limit: 1
//   }
// ])



//  //¿Cuántos restaurantes hay por cada código postal?

// db.restaurants.aggregate([
//   {
//     $group: {
//       _id: "$address.zipcode",
//       count: { $sum: 1 }
//     }
//   },
//   {
//     $sort: {
//       count: -1
//     }
//   }
// ])


// // ¿Cuántos restaurantes hay por cada tipo de cocina?
// db.restaurants.aggregate([
//   {
//     $unwind: "$cuisine"
//   },
//   {
//     $group: {
//       _id: "$cuisine",
//       count: { $sum: 1 }
//     }
//   },
//   {
//     $sort: {
//       count: -1
//     }
//   }
// ])