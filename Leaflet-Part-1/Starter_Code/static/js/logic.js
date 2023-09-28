//store API endpoint
let url = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson";

//use d3 to get the url
d3.json(url).then(function(data) {

  //send the data to the createfeatures function
  createFeatures(data.features);
});
    
//create function for earthquake  data
function createFeatures(earthquakeData) {  
  
  //feature for popup's that describe the place, time, mag, and depth
  function onEachFeature(feature, layer) {
      layer.bindPopup(`<h3>Location: ${feature.properties.place}</h3><hr><p>Time: ${new Date(feature.properties.time)}</p><hr><p>Mag: ${feature.properties.mag}</p><hr><p>Depth: ${feature.geometry.coordinates[2]}</p>`);
    }
    
    //style the markers based on magnitude and coordinates 
    let earthquakes = L.geoJson(earthquakeData, {
      pointToLayer: function(feature, location) {
        return L.circleMarker(location, {
          radius: feature.properties.mag * 5,
            fillColor: chooseColor(feature.geometry.coordinates[2]),
            weight: 1.5,
            fillOpacity: 0.75
        });
      },
      onEachFeature: onEachFeature,
    });


    //create a function for the earthquake layer
    createMap(earthquakes);
  }

  //create a function to determine depth color
    function chooseColor(depth) {
      if (depth < 10) {
        return "lightgreen";
      } else if (depth < 30) {
        return "yellowgreen";
      } else if (depth < 50) {
        return "orange";
      } else if (depth < 70) {
        return "pink";
      } else if (depth < 90) {
        return "red";
      } else {
        return "darkred";
      }
  
    }

    //create the legend
    let legend = L.control({position: "bottomright"});

    legend.onAdd = function() {
      let div = L.DomUtil.create('div', 'info legend'),
          depth = [-10,10,30,50,70,90];
      
      for (let i = 0; i < depth.length; i++) {
        div.innerHTML += '<i style="background:' + chooseColor(depth[i] + 1) + '"></i> ' + depth[i] + (depth[1 + i] ? '&ndash;' + depth[i + 1] + '<br>': '+');
        
      }
      
      return div;
   };

  //create tile layer
 function createMap(earthquakes) {
    let street = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      });
    
    let topo = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
    attribution: 'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'
  });

  //send til layers to map object 
  let map = {
  "street map": street,
  "topographic map": topo
  };

  //send earthquake data to overlay object
  let overlaymaps = {
    Earthquakes: earthquakes
  };

  //define map object
  let myMap = L.map("map", {
    center: [
      37.09, -95.71],
    zoom: 5,
    layers: [street, earthquakes]
  });

  //pass the map layers to our layer control
  //add the layer control to the map
  L.control.layers(map, overlaymaps, {
    collapsed: false
  }).addTo(myMap);
  legend.addTo(myMap);

}



