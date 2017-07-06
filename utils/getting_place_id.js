var request = require("request");
const GooglePlaces = require('googleplaces');
const googlePlaces = new GooglePlaces("AIzaSyBMcepvtIKebBiDYIk0c41oIUHFTze_9dY", "json");

var restaurants = [
"Eggslut",
"Mr. Holmes Bakehouse",
"Mr. Pizza",
"Seoul Sausage Co.",
"Shake Shack",
"Pasta Sisters",
"Vicious Dogs",
"Guisados",
"Fatburger",
"School Food",
"The Springs",
"By Chloe",
"Native Foods Cafe",
"CAVA",
"Yuko Kitchen",
"Golden Pouch",
"Gus’s World Famous Fried Chicken",
"Button Mash",
"Sumo Dog",
"SLAPFISH",
"The Hat",
"Senor Baja",
"Mister Bossam",
"Oo Kook Korean BBQ",
"Avenue 26 Tacos",
"Sushi Stop Hollywood",
"Zzamong",
"Spread Mediterranean Kitchen",
"YUP DDUK LA",
"SUGARFISH BY SUSHI NOZAWA",
"Jazz Cat Restaurant",
"Sushi4u",
"Red Castle Korean BBQ",
"Kang Ho-Dong Baekjeong",
"Quarters Korean BBQ",
"SOMI SOMI",
"Midori Matcha Cafe",
"Hwa Sun Ji",
"Bia Coffee",
"Cafe Dulce",
"Blue Star Donuts",
"Gresescent Ice Cream",
"Copenhagen Pastry",
"Bottega Louie",
"RING Baked Tofu Donuts",
"Cauldron Ice Cream",
"Scoops",
"Blockheads Shavery",
"Cafe Maji",
"Class 302",
"Honeymee Los Angeles",
"TANCCA",
"626 Night Market",
"Grand Central Market",
"Smorgasburg",
"Museum of Neon Art",
"Choice Music",
"Wi Spa",
"Best Western Plus La Mid-Town Hotel"]

  var placeIds = {}
  var placeIdsArray = []
  var nonPlaceIds = {}
  var name = ""
  for (var i = 0; i < restaurants.length; i++) {
    var parameters = {
            query: restaurants[i],
            location: [34.063437, -118.293114],
            radius: 10000
          };
    // var searchURL = "https://maps.googleapis.com/maps/api/place/textsearch/json?query="+ restaurants[i] +"&key=AIzaSyBMcepvtIKebBiDYIk0c41oIUHFTze_9dY"
    // console.log(searchURL)
    // request(searchURL, function(err, resp, body) {
    //   console.log(body)
    //   console.log(resp)
    //   var response = JSON.parse(body);
    googlePlaces.textSearch(parameters, function (error, response) {
      // console.log(response)
      // if (response.results[1])
      if (response.results[0]){
        // console.log(response.results[1].place_id)
          placeIds[response.results[0].name] = response.results[0].place_id
      } else {
        console.log(response)
      }
      // placeIdsArray = placeIdsArray.concat({"path":"query", "value": restaurants[i]})
      // if(Object.keys(placeIds).length >= restaurants.length) {
      // }
    })
  }



  // googlePlaces.placeSearch(parameters, function (error, response) {
  //     // if (error) throw error;
  //     // assert.notEqual(response.results.length, 0, "Place search must not return 0 results");
  // });

  setTimeout(function() {console.log(placeIds)}, 5000)
