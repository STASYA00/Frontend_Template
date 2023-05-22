mapboxgl.accessToken = 'pk.eyJ1Ijoic3RhMDAiLCJhIjoiY2xodWhxc2s2MGZ2YTNkcWgyamFwbTNyayJ9.cqMre3Bfp8Q-Tx_8eCZ-mg';
var map = new mapboxgl.Map({
    container: 'map', // HTML container id
    style: 'mapbox://styles/mapbox/streets-v9', // style URL
    center: [-21.9270884, 64.1436456], // starting position as [lng, lat]
    zoom: 13
  });