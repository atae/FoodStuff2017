
const GooglePlaces = require('googleplaces');
const googlePlaces = new GooglePlaces("AIzaSyBMcepvtIKebBiDYIk0c41oIUHFTze_9dY", "json");

var place_ids = {
    "Portillo's Hot Dogs": {
        "placeid": "ChIJCWNdVNgr3YAR4pLlOt8CfEk"
    },
    "Mr. Holmes Bakehouse": {
        "placeid": "ChIJhb17sBHEwoARRutNSZcyn5w"
    },
    "Eggslut": {
        "placeid": "ChIJuQ5bj0vGwoAR8xOTMYQAboQ"
    },
    "SOMI SOMI": {
        "placeid": "ChIJH1mNvpq4woARJgxKjSz3HGo"
    },
    "Oo Kook Korean BBQ": {
        "placeid": "ChIJOZrTe4G4woARlH2H9bL45L8"
    },
    "Sushi4u": {
        "placeid": "ChIJqZalpJgq3YARwC_ghsywtZU"
    },
    "Red Castle Korean BBQ": {
        "placeid": "ChIJP3HZxWEqw4ARPwqqBSzXVcM"
    },
    "Jazz Cat Restaurant": {
        "placeid": "ChIJ--EyvbnawoARJJBZVDgXfF4"
    },
    "Gresescent Ice Cream": {
        "placeid": "ChIJoS7f-bXHwoARp4Z2oLgKanY"
    },
    "Sushi Stop Hollywood": {
        "placeid": "ChIJPdKmy0a_woAR4rzPHGegdkE"
    },
    "Senor Baja": {
        "placeid": "ChIJTQrKeO4ow4AR_mUrmko1098"
    },
    "Beau bar coffee & tea": {
        "placeid": "ChIJMRtkj3zHwoARdjPGFzK864U"
    },
    "Pasta Sisters": {
        "placeid": "ChIJm2xhhmG4woAR3vNYLM_QsCM"
    },
    "Kang Ho-Dong Baekjeong": {
        "placeid": "ChIJdVPAOX3HwoARBTPEsiVXppw"
    },
    "Yuko Kitchen": {
        "placeid": "ChIJDd6ViR-5woAR3GM-wHwBmu4"
    },
    "Copenhagen Pastry": {
        "placeid": "ChIJlXVxwD66woARSu1zTYo-aKc"
    },
    "M Pizza": {
        "placeid": "ChIJQUM6BpC4woARD3ewPW27xtU"
    },
    "Baker's Drive-Thru": {
        "placeid": "ChIJyV44gJgxw4ARDtMrpuOtQvo"
    },
    "CAVA": {
        "placeid": "ChIJT_axsiGcwoARBVLaLcfKqQc"
    },
    "Avenue 26 Tacos": {
        "placeid": "ChIJVWtVV4_GwoARB2yVRDdTW8g"
    },
    "Drips & Swirls": {
        "placeid": "ChIJcb_LLX_HwoARr4zYW7lKaok"
    },
    "Sugarfish By Sushi Nozawa": {
        "placeid": "ChIJqWzcR7THwoARg7eO0wui4tM"
    },
    "The Hat": {
        "placeid": "ChIJsfd5gQoxw4AR7n7JCUCYyVc"
    },
    "Button Mash": {
        "placeid": "ChIJq_kHdP3GwoARNCJ8hw3EXDU"
    },
    "Seoul Sausage Co.": {
        "placeid": "ChIJtXN-S0jGwoARSsTp90P79SA"
    },
    "Pitchoun Bakery & Café": {
        "placeid": "ChIJUZymwbTHwoAR1RJIniCE5vw"
    },
    "Howlin' Ray's": {
        "placeid": "ChIJsTjh9VrGwoAR0AENjgs5swY"
    },
    "Zzamong": {
        "placeid": "ChIJYXSKE5m4woARXRHhC1kUb-8"
    },
    "Sul & Beans": {
        "placeid": "ChIJa1TWxpq4woARqCguoBjcSa0"
    },
    "Mister Bossam": {
        "placeid": "ChIJ9ZEZm5m4woARr_aHWJ2e0wI"
    },
    "Dunkin' Donuts": {
        "placeid": "ChIJj6AGlLXHwoARGi45hsYECKM"
    },
    "Quarters Korean BBQ": {
        "placeid": "ChIJoz3QPH3HwoAR-eUJ2juVyzQ"
    },
    "Native Foods Cafe": {
        "placeid": "ChIJK3ByJIK8woAR5TgqOE-ON7I"
    },
    "Guisados": {
        "placeid": "ChIJJa92LAnGwoARwH4CYPv5T6k"
    },
    "Porto's Bakery & Cafe": {
        "placeid": "ChIJXYCo9lTAwoARV6lX-L_cIeY"
    },
    "SLAPFISH": {
        "placeid": "ChIJE75jJmbU3IARn3XN2F_2A70"
    },
    "Hwa Sun Ji": {
        "placeid": "ChIJp17EOpC4woARI374aFtdGj8"
    },
    "Golden Pouch": {
        "placeid": "ChIJ43V07XzHwoARMiJ0890GY2U"
    },
    "Bottega Louie": {
        "placeid": "ChIJ_yXhTrTHwoARU36hVDFInhg"
    },
    "RING Baked Tofu Donuts": {
        "placeid": "ChIJJ03nvRecwoARVivnlCgCZVE"
    },
    "Honeymee Los Angeles": {
        "placeid": "ChIJl_bLpn3HwoAR994afZvh5Co"
    },
    "Cauldron Ice Cream": {
        "placeid": "ChIJTZ0UpS3f3IARfEQhMp7guRU"
    },
    "Uncle John's Cafe": {
        "placeid": "ChIJZX3WdLbHwoARXgQYRyTmkic"
    },
    "Museum of Neon Art": {
        "placeid": "ChIJc08iRf7AwoARbuhdP6GYUIg"
    },
    "Shake Shack - Glendale": {
        "placeid": "ChIJ_12ob_7AwoARN1xSDJHzBaA"
    },
    "The Springs": {
        "placeid": "ChIJEW3mASPGwoAR4c5ERwMfO4k"
    },
    "TANCCA": {
        "placeid": "ChIJC7iZPGAqw4ARkZl9Z9L9NhE"
    },
    "Midori Matcha Cafe": {
        "placeid": "ChIJ-V9i9UjGwoARglbbGlqYwUc"
    },
    "626 Night Market": {
        "placeid": "ChIJE7jOdpXbwoARWx1tqIs_QXM"
    },
    "Vicious Dogs": {
        "placeid": "ChIJ6drNgPGVwoARE0w1r0-S4EY"
    },
    "Blue Star Donuts": {
        "placeid": "ChIJAZpHUce6woARMFiF_GkAA90"
    },
    "Sumo Dog": {
        "placeid": "ChIJe_C_UJq4woARLZykYEcZ53E"
    },
    "Spread Mediterranean Kitchen": {
        "placeid": "ChIJ0a0QiknGwoARRzLnXcQEcu4"
    },
    "Gus’s World Famous Fried Chicken": {
        "placeid": "ChIJE8L2mvW4woAR-Cc7WipCW4A"
    },
    "Blockheads Shavery": {
        "placeid": "ChIJsU-S2XS7woARxNdMwfnE1ow"
    },
    "Bia Coffee": {
        "placeid": "ChIJu0oY4pq4woARwPPV3xmAifw"
    },
    "스쿨푸드 School Food Enterprises": {
        "placeid": "ChIJJRT2w5q4woARblXIl9kWvOc"
    },
    "Scoops": {
        "placeid": "ChIJQVRyl1nHwoARKXxtq_4-13E"
    },
    "Smorgasburg": {
        "placeid": "ChIJgXwEey_GwoAR3hBKbYGk-2U"
    },
    "By Chloe": {
        "placeid": "ChIJ4fYRfivHwoAR_2DlpZxO5_8"
    },
    "YUP DDUK LA": {
        "placeid": "ChIJSzImS524woARyPHri-JA_do"
    },
    "Cafe Dulce": {
        "placeid": "ChIJCfsD7kfGwoARTf0tjYY4J74"
    },
    "Cafe Maji": {
        "placeid": "ChIJMUfaggQt3YARKJNfU7_WM4k"
    },
    "Class 302": {
        "placeid": "ChIJb5oTGloqw4AROPdsQWvN6ok"
    },
    "Choice Music": {
        "placeid": "ChIJKRRLeoe4woARfYnMclf5PSc"
    },
    "Wi Spa": {
        "placeid": "ChIJ33ySYnbHwoARD9qfzHI_DzQ"
    },
    "Best Western Plus LA Mid-Town Hotel": {
        "placeid": "ChIJKbTZfnvHwoAR-pGNKdMyBM0"
    },
    "Fatburger": {
        "placeid": "ChIJE-yFIbfHwoARKF0cL7wsBUY"
    },
    "Grand Central Market": {
        "placeid": "ChIJ53JDjkvGwoAR2NMG6_1OnUg"
    },
    "Sydney": {
        "placeid": "ChIJP3Sa8ziYEmsRUKgyFmh9AQM"
    }
}
var object = {}
for (var i = 0; i < Object.keys(place_ids).length; i++) {
  // console.log(place_ids[Object.keys(place_ids)[i]])
  // console.log(place_ids);
  // console.log(Object.keys(place_ids)[i]);
  console.log(place_ids[Object.keys(place_ids)[i]])
  var parameters = {
    placeid: place_ids[Object.keys(place_ids)[i]].placeid
  }

  googlePlaces.placeDetailsRequest(parameters, function(error,response) {
    console.log(response)
    if (response.result){
    object[response.result.name] = {
      name: response.result.name,
      hours: response.result.opening_hours,
      address: response.result.formatted_address,
      phone: response.result.formatted_phone_number,
      coords: response.result.geometry.location,
      icon: response.result.icon,
      photos: response.result.photos,
      types: response.result.types,
      site: response.result.website,
      place_id: response.result.place_id
    }
    }else {
      console.log(parameters)
      console.log(response)
    }
  })
}
var fs = require('fs');

setTimeout(function(){

var text = JSON.stringify(object, null, 4)
fs.writeFile('./restaurants.json', "", function(err) {
  if(err) {
      return console.log(err);
  }
  console.log("The file was replaced!");
})
fs.appendFile("./restaurants.json", text , function(err) {
    if(err) {
        return console.log(err);
    }
    console.log("The file was saved!");
  })
}, 2000);
