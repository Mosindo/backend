const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/census",{useNewUrlParser: true, useUnifiedTopology: true },()=>{
    console.log("db connected");
});

const cities = [
    {_id:1, department: 75, city: 'Paris', population: 2175601},
    {_id:2, department: 13, city: 'Marseille', population: 868277},
    {_id:3, department: 69, city: 'Lyon', population: 518635},
    {_id:4, department: 31, city: 'Toulouse', population: 486828},
    {_id:5, department: 60, city: 'Nice', population: 341032},
    {_id:6, department: 44, city: 'Nantes', population: 314138},
    {_id:7, department: 34, city: 'Montpellier', population: 290053},
    {_id:8, department: 67, city: 'Strasbourg', population: 284677},
    {_id:9, department: 33, city: 'Bordeaux', population: 257068},
    {_id:10, department: 59, city: 'Lille', population: 233098},
    {_id:11, department: 35, city: 'Rennes', population: 217728},
    {_id:12, department: 51, city: 'Reims', population: 182211},
    {_id:13, department: 83, city: 'Toulon', population: 176198},
    {_id:14, department: 42, city: 'Saint-Étienne', population: 173089},
    {_id:15, department: 76, city: 'Le Havre', population: 169733},
    {_id:16, department: 38, city: 'Grenoble', population: 157650},
    {_id:17, department: 21, city: 'Dijon', population: 156854},
    {_id:18, department: 49, city: 'Angers', population: 154508},
    {_id:19, department: 69, city: 'Villeurbanne', population: 150659},
    {_id:20, department: 97, city: 'Saint-Denis', population: 150535},
    {_id:21, department: 30, city: 'Nîmes', population: 149633},
    {_id:22, department: 63, city: 'Clermont-Ferrand', population: 146734},
    {_id:23, department: 72, city: 'Le Mans', population: 143252},
    {_id:24, department: 13, city: 'Aix-en-Provence', population: 143097},
    {_id:25, department: 29, city: 'Brest', population: 139602},
    {_id:26, department: 37, city: 'Tours', population: 136463},
    {_id:27, department: 80, city: 'Amiens', population: 133891},
    {_id:28, department: 87, city: 'Limoges', population: 131479},
    {_id:29, department: 74, city: 'Annecy', population: 128199},
    {_id:30, department: 92, city: 'Boulogne-Billancourt', population: 121334},
    {_id:31, department: 66, city: 'Perpignan', population: 119188},
    {_id:32, department: 25, city: 'Besançon', population: 116775},
    {_id:33, department: 57, city: 'Metz', population: 116581},
    {_id:34, department: 45, city: 'Orléans', population: 116238},
    {_id:35, department: 93, city: 'Saint-Denis', population: 112091},
    {_id:36, department: 76, city: 'Rouen', population: 111360},
    {_id:37, department: 95, city: 'Argenteuil', population: 110213},
    {_id:38, department: 93, city: 'Montreuil', population: 109914},
    {_id:39, department: 68, city: 'Mulhouse', population: 108942},
    {_id:40, department: 14, city: 'Caen', population: 105512},
    {_id:41, department: 54, city: 'Nancy', population: 104885},
    {_id:42, department: 97, city: 'Saint-Paul', population: 103492},
    {_id:43, department: 59, city: 'Roubaix', population: 98089},
    {_id:44, department: 59, city: 'Tourcoing', population: 97442},
    {_id:45, department: 92, city: 'Nanterre', population: 96807},
    {_id:46, department: 94, city: 'Vitry-sur-Seine', population: 94649},
    {_id:47, department: 94, city: 'Créteil', population: 92265},
    {_id:48, department: 84, city: 'Avignon', population: 91729},
    {_id:49, department: 86, city: 'Poitiers', population: 88665},
    {_id:50, department: 93, city: 'Aubervilliers', population: 87572},
    {_id:51, department: 59, city: 'Dunkerque', population: 86865},
    {_id:52, department: 93, city: 'Aulnay-sous-Bois', population: 86278},
    {_id:53, department: 92, city: 'Colombes', population: 86052},
    {_id:54, department: 92, city: 'Asnières-sur-Seine', population: 85946},
    {_id:55, department: 78, city: 'Versailles', population: 85205},
    {_id:56, department: 97, city: 'Saint-Pierre', population: 84961},
    {_id:57, department: 92, city: 'Courbevoie', population: 82198},
    {_id:58, department: 97, city: 'Le Tampon', population: 79385},
    {_id:59, department: 50, city: 'Cherbourg-en-Cotentin', population: 79144},
    {_id:60, department: 97, city: 'Fort-de-France', population: 78126},
    {_id:61, department: 92, city: 'Rueil-Malmaison', population: 77986},
    {_id:62, department: 34, city: 'Béziers', population: 77599},
    {_id:63, department: 94, city: 'Champigny-sur-Marne', population: 77039},
    {_id:64, department: 64, city: 'Pau', population: 76275},
    {_id:65, department: 17, city: 'La Rochelle', population: 76114},
    {_id:66, department: 94, city: 'Saint-Maur-des-Fossés', population: 75298},
    {_id:67, department: 60, city: 'Cannes', population: 73965},
    {_id:68, department: 62, city: 'Calais', population: 72929},
    {_id:69, department: 60, city: 'Antibes', population: 72915},
    {_id:70, department: 93, city: 'Drancy', population: 72109},
    {_id:71, department: 20, city: 'Ajaccio', population: 70817},
    {_id:72, department: 33, city: 'Mérignac', population: 70813},
    {_id:73, department: 44, city: 'Saint-Nazaire', population: 70619},
    {_id:74, department: 68, city: 'Colmar', population: 68703},
    {_id:75, department: 92, city: 'Issy-les-Moulineaux', population: 68260},
    {_id:76, department: 93, city: 'Noisy-le-Grand', population: 68126},
    {_id:77, department: 91, city: 'Évry-Courcouronnes', population: 67131},
    {_id:78, department: 69, city: 'Vénissieux', population: 67129},
    {_id:79, department: 95, city: 'Cergy', population: 66322},
    {_id:80, department: 92, city: 'Levallois-Perret', population: 65817},
    {_id:81, department: 26, city: 'Valence', population: 64726},
    {_id:82, department: 18, city: 'Bourges', population: 64668},
    {_id:83, department: 33, city: 'Pessac', population: 64374},
    {_id:84, department: 97, city: 'Cayenne', population: 63652},
    {_id:85, department: 94, city: 'Ivry-sur-Seine', population: 63309},
    {_id:86, department: 29, city: 'Quimper', population: 63166},
    {_id:87, department: 83, city: 'La Seyne-sur-Mer', population: 62888},
    {_id:88, department: 92, city: 'Antony', population: 62858},
    {_id:89, department: 59, city: 'Villeneuve-dAscq', population: 62727},
    {_id:90, department: 92, city: 'Clichy', population: 62485},
    {_id:91, department: 10, city: 'Troyes', population: 61996},
    {_id:92, department: 82, city: 'Montauban', population: 60952},
    {_id:93, department: 92, city: 'Neuilly-sur-Seine', population: 59940},
    {_id:94, department: 93, city: 'Pantin', population: 59060},
    {_id:95, department: 79, city: 'Niort', population: 59059},
    {_id:96, department: 73, city: 'Chambéry', population: 58833},
    {_id:97, department: 95, city: 'Sarcelles', population: 58811},
    {_id:98, department: 93, city: 'Le Blanc-Mesnil', population: 57150},
    {_id:99, department: 56, city: 'Lorient', population: 57084}
]

const citySchema = new mongoose.Schema({
    _id: Number,
    department: Number,
    city: String,
    population: Number,
  });

  const cityModel = new mongoose.model("cities", citySchema);
//   cityModel.deleteMany({}).then(()=>{
//     cityModel.create(cities)
//   })
// cityModel.aggregate([
//     { $group: { _id:"$_id",totalPopulation: { $sum: "$population" } } }
// ])
// .then((response) => console.log(response));

// cityModel.aggregate().group({_id:"$department",totalPopulation:{$sum:"$population"} ,countCities:{$sum:1}, MoyennePop:{$avg:"$population"}})
// .sort({totalPopulation:1})
// .then((response) => console.log(response));

// cityModel.aggregate().match({city:/P/}).group({_id:"$department",totalPopulation:{$sum:"$population"} ,countCities:{$sum:1}, MoyennePop:{$avg:"$population"}})
// .sort({totalPopulation:1})
// .then((response) => console.log(response));

cityModel.find({department:"$93",city:/^s/i})
.then((response) => console.log(response));