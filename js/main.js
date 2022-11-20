/* -----------------------------------------------
/* How to use? : Check the GitHub README
/* ----------------------------------------------- */

/* To load a config file (particles.json) you need to host this demo (MAMP/WAMP/local)... */
/*
particlesJS.load('particles-js', 'particles.json', function() {
  console.log('particles.js loaded - callback');
});
*/

/* Otherwise just put the config content (json): */

particlesJS('particles',
  
  {
    "particles": {
      "number": {
        "value": 80,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "#ffffff"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 5
        },
        "image": {
          "src": "img/github.svg",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 0.5,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 5,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 40,
          "size_min": 0.1,
          "sync": false
        }
      }, 
      "line_linked": {
        "enable": false,
        "distance": 150,
        "color": "#ffffff",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 6,
        "direction": "top",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": false,
          "mode": "repulse"
        },
        "onclick": {
          "enable": false,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 400,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 200
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true,
    "config_demo": {
      "hide_card": false,
      "background_color": "#b61924",
      "background_image": "",
      "background_position": "50% 50%",
      "background_repeat": "no-repeat",
      "background_size": "cover"
    }
  }

);
// // Create a request variable and assign a new XMLHttpRequest object to it.
var request = new XMLHttpRequest()

// // Open a new connection, using the GET request on the URL endpoint
request.open('GET', 'https://api.github.com/users/Openlake/repos', true)

request.onload = function () {
//   // Begin accessing JSON data here
  var data = JSON.parse(this.response);
//   // var statusHTML = '';
//   // $.each(data, function(i, status) {
//     // statusHTML += '<tr>';
//     // statusHTML += '<h5>' + status.id + '</h5>';
//     // statusHTML += '<td>' + status.name + '</td>';
//     // statusHTML += '<td>' + status.html_url + '</td>';
//     // statusHTML += '<td>' + status.language + '</td>';
//     // statusHTML += '</tr>';
   
//   // });
  for (i in data){
    let ul = document.getElementById('cards');

    // Create variable that will create li's to be added to ul
    let li = document.createElement('li');

    // Add Bootstrap list item class to each li
    li.classList.add('card')

    // Create the html markup for each li
    li.innerHTML = (`
      <div class="card" id="card" >
      <div class="card-body">
      <h5 class="card-title" id="iid">${data[i].name}</h5>
      <p class="card-text">${data[i].description}</p>
      <a href="${data[i].html_url}" <button class="btn btn-primary">Learn More</button></a>
      </div>
      </div>
 `);

    // Append each li to the ul
    ul.appendChild(li);
  }
//   // $('tbody').html(statusHTML);
}
function myFunction() {
  document.getElementById("field2").value =   document.getElementById("field1").value;
}
// // Send request
request.send();

