
var events ={
  day1:{
    places:[

    ]
  },
  day2:{

  },
  day3:{

  }
}

$.get('restaurants.json', function(res) {
  console.log(res)
})

// console.log(restaurants)



document.addEventListener("DOMContentLoaded", function() {
  var Title = React.createClass({
    render: function() {
      return (
      <div>
        <h1> It's React Time. </h1>
      </div>
    )
    }
  })
  // var schedule = document.getElementById('schedule')
  // for (var i = 0; i < events.day1.places.length; i++) {
  //   var location = document.createElement("LI")
  //   location.innerHTML = "<h4>" + events.day1.places[i].name + "</h4><h5>" + events.day1.places[i].foodType + "</h5>"
  //   schedule.appendChild(location)
  // }
  var app = document.getElementById('app')
  console.log(app);
  ReactDOM.render(<Title />, app)

})
