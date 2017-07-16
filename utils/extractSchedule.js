
var tags = ["Fri 7/21", "Sat 7/22", "Sun 7/23", "Mon 7/24"]
//start on i = 5
// x%5 = 1
// currentTag = dataBlob[i]
//
// x%5 = 2
// object[tags[0]] = dataBlob[i]
//
// x%5 = 3
// object[tags[1]] = dataBlob[i]
//
// x%5 = 4
// object[tags[2]] = dataBlob[i]
//
// x%5 = 0
// object[tags[3]] = dataBlob[i]
//
// tags[(x+3) % 5]

var object = {
  "Fri 7/21" : {},
  "Sat 7/22" : {},
  "Sun 7/23" : {},
  "Mon 7/24" : {}
}

var currentTag = ""



var dataBlob = ["Time","Fri 7/21",
"Sat 7/22","Sun 7/23","Mon 7/24","6:00 AM","ROAD TRIP CREW TO LA","-","-","-","-","-","-","-","-",
"-","-","-","-","-","7:00 AM","-","-","-","-","-","-","-","-","-","-","-","-","-","-","8:00 AM","-",
"-","-","-","-","-","-","-","-","-","-","-","-","-","9:00 AM","-","-","-","breakfast somewhere","-",
"-","-","-","-","-","-","-","-","-","10:00 AM","-","DRIVE TO ONTARIO (50min)","*Egg Slut","-","-","-",
"-","Grand Central Market","-","-","-","-","-","-","11:00 AM","-","*Baker's Drive-Thru","*Bottega Louie",
"-","-","-","The Hat","-","-","-","-","Senor Baja","-","-","12:00 PM","ROAD TRIP CREW ARRIVAL","DRIVE TO PHM (25-30min)",
"Sugarfish By Sushi Nozawa","Hotel Check-out","-","*Shake Shack","-","Uncle John's Cafe","-","-","Porto's Bakery & Cafe",
"-","Fatburger","-","1:00 PM","*Bia Coffee","PHM Round 1","Midori Matcha Cafe","-","-","Golden Pouch","TANCCA",
"Cafe Dulce","-","-","*Honeymee Los Angeles","Class 302","-","-","2:00 PM","Drips and Swirls","Honeymee",
"Seoul Sausage Co.","-","-","-","-","-","-","-","-","-","-","-","3:00 PM","Hotel Check-in","LEAVE TO 626 NM (25-30min)",
"Guisados","-","-","FLIGHT CREW ARRIVAL","-","The Springs","-","-","Meet up at hotel","-","-","-","4:00 PM","Sumo Dog",
"*626 Night Market","-","-","-","스쿨푸드 School Food Enterprises","-","-","-","-","-","-","-","-","5:00 PM",
"Quarters Korean BBQ","-","Venice Beach","-","-","YUP DDUK LA","-","Blue Star Donuts","-","-","Mr. Pizza",
"-","Blockheads Shavery","-","6:00 PM","Pasta Sisters","-","-","-","-","-","-","-","-","-","-","-","-","-",
"7:00 PM","Choice Music","PHM Round 1","-","-","-","-","purikura","-","-","-","-","-","-","-","8:00 PM","-",
"-","Avenue 26 Tacos","-","-","-","-","-","-","-","-","-","-","-","9:00 PM","*SOMI SOMI","-","-","-","-",
"Sul & Beans","-","-","-","-","-","-","-","-","10:00 PM","-","-","-","-","-","-","-","-","-","-","-","-",
"-","-","11:00 PM","-","-","-","-","-","-","-","-","-","-","-","-","-","-","12:00 AM","Quarters Korean BBQ (if necessary)",
"-","-","-","-","-","-","-","-","-","-","-","-","-"]



var schedule = [{},{},{},{},{}]

var requiredPlaces = []


for (var i = 1; i < tags.length; i++) {
  for (var j = 0; j < dataBlob.length; j++) {
    if (j%5 == 0) {

        if (dataBlob[j] != '-') {
          currentTag = dataBlob[j]
          schedule[i][currentTag] = []
        }
   } else if (j%5 == i) {
     if (dataBlob[j][0] == "*") {
       requiredPlaces = requiredPlaces.concat([dataBlob[j].slice(1)])
       schedule[i][currentTag] = schedule[i][currentTag].concat([dataBlob[j].slice(1)])
     }
     else {
      schedule[i][currentTag] = schedule[i][currentTag].concat([dataBlob[j]])
    }
   }
 }
}

object["Fri 7/21"] = schedule[1]
object["Sat 7/22"] = schedule[2]
object["Sun 7/23"] = schedule[3]
object["Required Places"] = requiredPlaces
// for (var i = 5; i < dataBlob.length; i++) {
//   if (i%5 == 1) {
//     if (dataBlob[i-1] != '-') {
//       currentTag = dataBlob[i-1]
//     }
//   } else {
//     var newObject = {}
//     newObject[currentTag] = []
//     newObject[currentTag] = newObject[currentTag].concat([dataBlob[i]])
//     Object.assign(object[tags[(i+3) % 5]], newObject)
//   }
// }

var fs = require('fs');


var text = JSON.stringify(object, null, 4)
fs.writeFile('./schedule.json', "", function(err) {
  if(err) {
      return console.log(err);
  }
  console.log("The file was replaced!");
})
fs.appendFile("./schedule.json", text , function(err) {
    if(err) {
        return console.log(err);
    }
    console.log("The file was saved!");
  })
