var request = require("request");
const GooglePlaces = require('googleplaces');
const googlePlaces = new GooglePlaces("AIzaSyBMcepvtIKebBiDYIk0c41oIUHFTze_9dY", "json");

//Coordinates are backwards
var coords = [
  [-118.2486981,34.0506538]
,

  [-118.2586531,34.0448979]
,

  [-118.2566381,34.045177]
,

  [-118.1905076,34.1101662]
,

  [-118.3114708,34.0618891]
,

  [-118.243729,34.0490392]
,

  [-118.254654,34.1427466]
,

  [-118.317255,34.047547]
,

  [-117.9871491,33.8463782]
,

  [-118.3754405,34.1657556]
,

  [-118.2554535,34.1504211]
,

  [-118.2396493,34.061498]
,

  [-118.2114677,34.0482592]
,

  [-118.261957,34.0465881]
,

  [-118.3093674,34.0627692]
,

  [-118.2322358,34.0377204]
,

  [-118.2586152,34.1031997]
,

  [-118.4459704,34.0598901]
,

  [-118.6046308,34.184264]
,

  [-118.3482179,34.0621327]
,

  [-118.2949821,34.0632103]
,

  [-118.326348,34.0480944]
,

  [-118.2515224,34.0739963]
,

  [-118.3088451,34.0648848]
,

  [-117.8499943,33.9091909]
,

  [-117.9190372,33.6973327]
,

  [-117.6987726,34.0989307]
,

  [-117.6899832,34.1041561]
,

  [-117.8637617,34.0951757]
,

  [-118.3089464,34.0678224]
,

  [-118.3028343,34.0580039]
,

  [-118.2179328,34.0801217]
,

  [-118.3186367,34.1053873]
,

  [-118.3071786,34.0693095]
,

  [-118.2467476,34.0482508]
,

  [-118.3007013,34.0640051]
,

  [-118.257171,34.047409]
,

  [-118.0988887,34.0801015]
,

  [-117.9316771,33.9185283]
,

  [-117.9049569,33.9895543]
,

  [-118.2972823,34.0637327]
,

  [-118.297709,34.064016]
,

  [-118.3099889,34.0629329]
,

  [-118.2420697,34.0499565]
,

  [-118.3100064,34.0628982]
,

  [-118.2938794,34.0574893]
,

  [-118.313194,34.061534]
,

  [-118.3082836,34.0637024]
,

  [-118.2943457,34.063411]
,

  [-118.2404543,34.0488479]
,

  [-118.4693296,33.9913488]
,

  [-118.2578095,34.0439333]
,

  [-118.2540584,34.0485154]
,

  [-118.4119778,34.009361]
,

  [-118.2564831,34.0469536]
,

  [-118.6012779,34.1941167]
,

  [-117.8876486,33.7005444]
,

  [-118.2946912,34.08404]
,

  [-118.4429043,34.0394469]
,

  [-118.071322,33.872686]
,

  [-117.8900665,33.9963793]
,

  [-118.2975983,34.0621489]
,

  [-117.9033421,33.9887333]
,

  [-118.0446356,34.138862]
,

  [-118.2490251,34.0508806]
,

  [-118.2398369,34.0321693]
,

  [-118.2545011,34.1437608]
,

  [-118.3085165,34.0522327]
,

  [-118.2827339,34.0607004]
,
  [-118.2932426,
  34.0633841]
]

var names = [
"Eggslut",
"Uncle John's Cafe",
"Dunkin' Donuts",
"Mr. Holmes Bakehouse",
"Mr. Pizza",
"Seoul Sausage Co.",
"Shake Shack",
"Pasta Sisters",
"Portillo's Hot Dogs",
"Vicious Dogs",
"Porto's Bakery & Cafe",
"Howlin' Ray's",
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
"Musubiya Balls?! & Burgers",
"Baker's Drive-Thru",
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
"Sul & Beans",
"Drips & Swirls",
"Hwa Sun Ji",
"Bia Coffee",
"Beau bar coffee & tea",
"Cafe Dulce",
"Blue Star Donuts",
"Gresescent Ice Cream",
"Pitchoun Bakery & Café",
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
"Best Western"
]


  var placeIds = {}
  var placeIdsArray = []
  var nonPlaceIds = {}
  var name = ""

  var fs = require('fs');

  fs.writeFile("./restaurants.json","", function( error, response ) {

  })

  var object = {}


  for (var i = 0; i < coords.length; i++) {
    var parameters = {
            name: names[i],
            location: [coords[i][1], coords[i][0]]
            // radius: 10
          };
    // var searchURL = "https://maps.googleapis.com/maps/api/place/textsearch/json?query="+ restaurants[i] +"&key=AIzaSyBMcepvtIKebBiDYIk0c41oIUHFTze_9dY"
    // console.log(searchURL)
    // request(searchURL, function(err, resp, body) {
    //   console.log(body)
    //   console.log(resp)
    //   var response = JSON.parse(body);
    googlePlaces.placeSearch(parameters, function (error, response) {

      if (response.results[0]){
      object[response.results[0].name] = {
        name: response.results[0].name,
        hours: response.results[0].opening_hours,
        address: response.results[0].formatted_address,
        phone: response.results[0].formatted_phone_number,
        coords: response.results[0].geometry.location,
        icon: response.results[0].icon,
        photos: response.results[0].photos,
        types: response.results[0].types,
        site: response.results[0].website
      }
      }else {
        console.log(parameters)
        console.log(response)
      }

    })


      //
      //
      //     placeIds[response.results[0].name] = response.results[0].place_id
      //     console.log(response)
      // } else {
      //   console.log(JSON.stringify(response, 4, null))
      // }
      //

  }

  //For some reason hotel isn't working, so here's a direct call
var parameters2 = {
  placeid:'ChIJKbTZfnvHwoAR-pGNKdMyBM0'
}

googlePlaces.placeSearch(parameters2, function (error, response) {

  if (response.results[0]){
  object[response.results[0].name] = {
    name: response.results[0].name,
    hours: response.results[0].opening_hours,
    address: response.results[0].formatted_address,
    phone: response.results[0].formatted_phone_number,
    coords: response.results[0].geometry.location,
    icon: response.results[0].icon,
    photos: response.results[0].photos,
    types: response.results[0].types,
    site: response.results[0].website
  }
  }else {
    console.log(parameters)
    console.log(response)
  }

})




  setTimeout(function(){

  var text = JSON.stringify(object, null, 4)

  fs.appendFile("./restaurants.json", text , function(err) {
      if(err) {
          return console.log(err);
      }
      console.log("The file was saved!");
    })
  }, 2000);
