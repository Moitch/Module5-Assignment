let requestURL = "https://moitch.github.io/Module5-Assignment/properties.json";
// new xhr object, grabs things from the server without refresh
let request = new XMLHttpRequest();
request.open("GET", requestURL);
request.responseType = "json";
request.send();

request.onload = function(){
    let properties = request.response;
    console.log(properties);
    createProperty(properties);
};


function createProperty(jsonObj){

  let createProperties = jsonObj.Properties;
  for (let i = 0; i < createProperties.length; i++) {

    let main = document.querySelector("main");


    let article = document.createElement("article");
    let h2 = document.createElement("h2");
    let img = document.createElement("img");
    let p1 = document.createElement("p");
    let p2 = document.createElement("p");

    if(createProperties[i].superHost === true){
      p2.textContent = "This is a superhost property!"
      createProperties[i].rating = "10 stars"
      p2.className = "superHost";
    }
    else if(createProperties[i].specialProperty === true){
      p2.textContent = "This is a special price property!"
      createProperties[i].price = createProperties[i].price * 0.8
      p2.className = "specialPrice";
    }
    else
      p2.textContent = "This is a regular property.";


    img.setAttribute("src", "https://Moitch.github.io/Module5-Assignment/" +
    createProperties[i].image);
    img.setAttribute("alt", createProperties[i].image);
    h2.textContent = createProperties[i].name;
    p1.textContent = createProperties[i].name + " has " +
    createProperties[i].rooms + " rooms, a " +
    createProperties[i].features + " and has a "
    + createProperties[i].rating + " star rating. " + createProperties[i].name+
    " is located in " + createProperties[i].location + ", it is " +
    createProperties[i].availability + " and costs $" +
    createProperties[i].price + " per day.";


    // Appends all of the elements to the page.
    article.appendChild(h2);
    article.appendChild(img);
    article.appendChild(p1);
    article.appendChild(p2);
    main.appendChild(article);
    }
}

function initMap(){
  //Initialize property locations.
  let iglooLocation = {
    lat: 63.4879662,
    lng: -148.8210564
  };

  let beachfrontLocation = {
    lat: 44.325064,
    lng: -79.533958
  };
  let cabinLocation = {
    lat: 44.6029529,
    lng: -79.487165
  };
  let treehouseLocation = {
    lat: 44.3587683,
    lng: -79.6709766
  };

  let div = document.querySelector("div");
// Create new map object
  let map = new google.maps.Map(div, {
    zoom: 12,
    center: beachfrontLocation,
  });
/* Creates new marker objects, click listeners,
and info windows for the click listeners.*/
var infowindow1 = new google.maps.InfoWindow({
    content: "Alaskan Igloo"
  });

let marker = new google.maps.Marker({position:iglooLocation, map:map});

marker.addListener("click", function() {
    infowindow1.open(map, marker);
});



var infowindow2 = new google.maps.InfoWindow({
    content: "Beachfront Property"
  });

let marker2 = new google.maps.Marker({position:beachfrontLocation, map:map});
marker2.addListener("click", function() {
  infowindow2.open(map, marker2);
});



var infowindow3 = new google.maps.InfoWindow({
    content: "Cabin in the Woods"
  });

let marker3 = new google.maps.Marker({position:cabinLocation, map:map});
marker3.addListener("click", function() {
  infowindow3.open(map, marker3);
});



var infowindow4 = new google.maps.InfoWindow({
    content: "Treehouse Getaway"
  });

let marker4 = new google.maps.Marker({position:treehouseLocation, map:map});
marker4.addListener("click", function() {
  infowindow4.open(map, marker4);
});
}
