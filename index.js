
var dumplingStand = {
  name: "Golden Pouch",
  type: "Dumpling Stand",
  foodType: "Snack",
  cid: ""
}

var quarters = {
  name: 'Quarters',
  type: "Korean BBQ",
  foodType: "Sit Down",
  cid: ""
}

var flower = {
  name: "Flower Coffee",
  type: "Coffee",
  foodType: "Coffee",
  cid: ""
}

var yupTheDuck = {
  name: 'Yup Dduk LA',
  type: "Korean",
  foodType: "Coffee",
  cid: ""
}

var events ={
  day1:{
    places:[
      dumplingStand,
      flower,
      quarters,
      yupTheDuck
    ]
  },
  day2:{

  },
  day3:{

  }
}


fetch('restaurants.json').then(function(res) {
  console.log(res)
})
// console.log(restaurants)

document.addEventListener("DOMContentLoaded", function() {
  var schedule = document.getElementById('schedule')

  for (var i = 0; i < events.day1.places.length; i++) {
    var location = document.createElement("LI")
    location.innerHTML = "<h4>" + events.day1.places[i].name + "</h4><h5>" + events.day1.places[i].foodType + "</h5>"
    schedule.appendChild(location)
  }

})
