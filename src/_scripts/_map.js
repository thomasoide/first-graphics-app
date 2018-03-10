var map = L.map('map',  {
  scrollWheelZoom: false
});
var osm = L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  minZoom: 16,
  //scrollWheelZoom: false
});
osm.addTo(map);
map.setView([33.983265, -118.306799], 18);
//map.scrollWheelZoom.disable();

homicides.forEach(function(obj) {
  L.circleMarker([obj.latitude,  obj.longitude])
      .addTo(map)
      .bindTooltip(obj.first_name + " " + obj.last_name, {permanent: true});
});

var osm2 = L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 9,
    mapOptions: {
      scrollWheelZoom: false
    }
});
var mini = new L.Control.MiniMap(osm2, { toggleDisplay: true });
mini.addTo(map);
