function initMap() {
    var options = {
        zoom: 10,
        center: { lat: 22.3307, lng: 88.6104 }
    }

    var map = new google.maps.Map(document.getElementById('map'), options);

    const marker = new google.maps.Marker({
        postion: { lat: 22.5726, lng: 88.3639 },
        map: map,
    });

}