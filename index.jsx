
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
})

// console.log(restaurants)


var Title = React.createClass({
  render: function() {
    return (
      <div>
      <DayCounter/>
      <h1> It's React Time. Whoa.</h1>
      </div>
    )
  }
})

var DayCounter = React.createClass({
  getDays: function() {
    var deadline = new Date(2017, 21, 0, 0, 0)
    var lastDay = new Date(2017, 24, 0, 0, 0)
    var currentDay = new Date()
    var message = []
    if (currentDay < deadline) {
        var daysLeft = parseInt(deadline.date - currentDay.date)
        return(<h2> Only <h1>{this.daysLeft}</h1> days left! </h2>)
      )
    } elseif (currentDay > lastDay) {
        return(<h2> That's it! Go <h1>Home</h1>! </h2>)
    } else {
        var day = parseInt(lastDay.date - currentDay.date)
        return(<h2> Day <h1>{this.day}</h1></h2>)
    }

  },
  render: function() {
    var timeContent = this.getDays()
    return (
      <div>
        {this.timeContent}
      </div>
    )
  }
})

document.addEventListener("DOMContentLoaded", function() {
  // var schedule = document.getElementById('schedule')
  // for (var i = 0; i < events.day1.places.length; i++) {
  //   var location = document.createElement("LI")
  //   location.innerHTML = "<h4>" + events.day1.places[i].name + "</h4><h5>" + events.day1.places[i].foodType + "</h5>"
  //   schedule.appendChild(location)
  // }
  var app = document.getElementById('app')
  ReactDOM.render(<Title />, app)

})
