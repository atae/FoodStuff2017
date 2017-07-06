const GooglePlaces = require('googleplaces');
const googlePlaces = new GooglePlaces("AIzaSyBMcepvtIKebBiDYIk0c41oIUHFTze_9dY", "json");


var restaurant_ids = {'Yuko Kitchen': 'ChIJDd6ViR-5woAR3GM-wHwBmu4',
 Zzamong: 'ChIJYXSKE5m4woARXRHhC1kUb-8',
 'Sushi Stop Hollywood': 'ChIJPdKmy0a_woAR4rzPHGegdkE',
 'Oo Kook Korean BBQ': 'ChIJOZrTe4G4woARlH2H9bL45L8',
 'YUP DDUK LA': 'ChIJSzImS524woARyPHri-JA_do',
 'Button Mash': 'ChIJq_kHdP3GwoARNCJ8hw3EXDU',
 'Mister Bossam': 'ChIJ9ZEZm5m4woARr_aHWJ2e0wI',
 Sushi4u: 'ChIJqZalpJgq3YARwC_ghsywtZU',
 'The Springs': 'ChIJEW3mASPGwoAR4c5ERwMfO4k',
 'Jazz Cat Restaurant': 'ChIJ--EyvbnawoARJJBZVDgXfF4',
 'RING Baked Tofu Donuts': 'ChIJJ03nvRecwoARVivnlCgCZVE',
 'Bia Coffee': 'ChIJu0oY4pq4woARwPPV3xmAifw',
 'Seoul Sausage Co.': 'ChIJtXN-S0jGwoARSsTp90P79SA',
 '스쿨푸드 School Food Enterprises': 'ChIJJRT2w5q4woARblXIl9kWvOc',
 Eggslut: 'ChIJuQ5bj0vGwoAR8xOTMYQAboQ',
 'Spread Mediterranean Kitchen': 'ChIJ0a0QiknGwoARRzLnXcQEcu4',
 'Shake Shack - Glendale': 'ChIJ_12ob_7AwoARN1xSDJHzBaA',
 'Hwa Sun Ji': 'ChIJp17EOpC4woARI374aFtdGj8',
 'Sumo Dog': 'ChIJe_C_UJq4woARLZykYEcZ53E',
 'Avenue 26 Tacos': 'ChIJVWtVV4_GwoARB2yVRDdTW8g',
 'Pasta Sisters': 'ChIJm2xhhmG4woAR3vNYLM_QsCM',
 'Vicious Dogs': 'ChIJ6drNgPGVwoARE0w1r0-S4EY',
 'Gresescent Ice Cream': 'ChIJoS7f-bXHwoARp4Z2oLgKanY',
 'Midori Matcha Cafe': 'ChIJ-V9i9UjGwoARglbbGlqYwUc',
 TANCCA: 'ChIJC7iZPGAqw4ARkZl9Z9L9NhE',
 'Cafe Dulce': 'ChIJCfsD7kfGwoARTf0tjYY4J74',
 'Cauldron Ice Cream': 'ChIJTZ0UpS3f3IARfEQhMp7guRU',
 'Red Castle Korean BBQ': 'ChIJP3HZxWEqw4ARPwqqBSzXVcM',
 'Wi Spa': 'ChIJ33ySYnbHwoARD9qfzHI_DzQ',
 Slapfish: 'ChIJR9T0qiixwoARyyf-TnQSHd4',
 'By Chloe': 'ChIJ4fYRfivHwoAR_2DlpZxO5_8',
 'Copenhagen Pastry': 'ChIJlXVxwD66woARSu1zTYo-aKc',
 Guisados: 'ChIJJa92LAnGwoARwH4CYPv5T6k',
 'SOMI SOMI': 'ChIJH1mNvpq4woARJgxKjSz3HGo',
 'Best Western Plus LA Mid-Town Hotel': 'ChIJKbTZfnvHwoAR-pGNKdMyBM0',
 'Choice Music': 'ChIJKRRLeoe4woARfYnMclf5PSc',
 'Honeymee Los Angeles': 'ChIJl_bLpn3HwoAR994afZvh5Co',
 'Quarters Korean BBQ': 'ChIJoz3QPH3HwoAR-eUJ2juVyzQ',
 'The Hat': 'ChIJC1rolpDPwoARC8BXCkGnbmw',
 'Mr. Holmes Bakehouse': 'ChIJhb17sBHEwoARRutNSZcyn5w',
 'Blue Star Donuts': 'ChIJAZpHUce6woARMFiF_GkAA90',
 'Class 302': 'ChIJsV1xT3LNwoARRQVIXQHIfFQ',
 'Blockheads Shavery': 'ChIJsU-S2XS7woARxNdMwfnE1ow',
 'Bottega Louie': 'ChIJ_yXhTrTHwoARU36hVDFInhg',
 'Gus’s World Famous Fried Chicken': 'ChIJE8L2mvW4woAR-Cc7WipCW4A',
 'Native Foods Cafe': 'ChIJK3ByJIK8woAR5TgqOE-ON7I',
 'Grand Central Market': 'ChIJ53JDjkvGwoAR2NMG6_1OnUg',
 'Golden Pouch': 'ChIJ43V07XzHwoARMiJ0890GY2U',
 'M Pizza': 'ChIJQUM6BpC4woARD3ewPW27xtU',
 '626 Night Market': 'ChIJE7jOdpXbwoARWx1tqIs_QXM',
 'Museum of Neon Art': 'ChIJc08iRf7AwoARbuhdP6GYUIg',
 Smorgasburg: 'ChIJgXwEey_GwoAR3hBKbYGk-2U',
 'Senor Baja': 'ChIJMXC0izst3YARIMjJHSSkQRc',
 CAVA: 'ChIJrVwAzoO8woAR4BS5v8M_-FI',
 'Cafe Maji': 'ChIJMUfaggQt3YARKJNfU7_WM4k',
 Fatburger: 'ChIJE-yFIbfHwoARKF0cL7wsBUY',
 'Sugarfish By Sushi Nozawa': 'ChIJqWzcR7THwoARg7eO0wui4tM',
 'Kang Ho-Dong Baekjeong': 'ChIJdVPAOX3HwoARBTPEsiVXppw',
 Scoops: 'ChIJQVRyl1nHwoARKXxtq_4-13E' }

 var fs = require('fs');

 fs.writeFile("./restaurants.json","", function( error, response ) {

 })

 var object = {}

 for (var i = 0; i < Object.keys(restaurant_ids).length; i++) {
   var parameters = {
           placeid: restaurant_ids[Object.keys(restaurant_ids)[i]]
         };


   googlePlaces.placeDetailsRequest(parameters, function (error, response) {

     object[response.result.name] = {
       name: response.result.name,
       hours: response.result.opening_hours,
       address: response.result.formatted_address,
       phone: response.result.formatted_phone_number,
       coords: response.result.geometry.location,
       icon: response.result.icon,
       photos: response.result.photos[0],
       types: response.result.types,
       site: response.result.website
     }

   })

 }

 setTimeout(function(){

 var text = JSON.stringify(object, null, 4)

 fs.appendFile("./restaurants.json", text , function(err) {
     if(err) {
         return console.log(err);
     }
     console.log("The file was saved!");
   })
 }, 2000);
