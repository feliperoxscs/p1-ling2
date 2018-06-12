var mymap = L.map('mapid').setView([-23.63340409, -46.55708854], 13);
L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoiZmVsaXBlcm94c2NzIiwiYSI6ImNqaTliaDQ4cDByemQzd21sZWRnbXN1dHcifQ.85-izFacYNwYzXFEyuYvxw', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1IjoiZmVsaXBlcm94c2NzIiwiYSI6ImNqaTliaDQ4cDByemQzd21sZWRnbXN1dHcifQ.85-izFacYNwYzXFEyuYvxw'
}).addTo(mymap);