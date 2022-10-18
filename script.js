// getting places from APIs
function loadPlaces(position) {
    return [
        {
            name: 'Garden',  
            location: {
                lat: 10.90426806753599, 
                lng: 76.97075933151562
            },
        },
        {
                name: 'Villa 143',  
            location: {
                lat: 10.904950618519505, 
                lng: 76.96988087519571
            },
        },
        {
            name: 'Badminton',  
            location: {
                lat: 10.903886169093484,  
                lng: 76.97017997439947
            },
        },
        {
            name: 'Worker Areas',  
            location: {
                lat: 10.905116143702928,  
                lng: 76.96946650683977
            },
        },
        {
            name: 'Villa U/C',  
            location: {
                lat: 10.90487647024874,  
                lng: 76.97050183946399
            },
        },
        {
            name: 'Restaurant',  
            location: {
                lat: 10.904262799974605,  
                lng: 76.96969181238491
            },
        },
        {
            name: 'Shop',  
            location: {
                lat: 10.904713789582376, 
                lng: 76.96997162837401
            },
        },
        {
            name: 'Security',  
            location: {
                lat: 10.90320799072564,  
                lng: 76.96978879139236
            },
        },
        {
            name: 'Office',  
            location: {
                lat: 10.903546410756588,  
                lng: 76.96963280378976
            },
        },
    ];
};

window.onload = () => {
    const scene = document.querySelector('a-scene');

    // first get current user location
    return navigator.geolocation.getCurrentPosition(function (position) {

        // than use it to load from remote APIs some places nearby
        let places = loadPlaces(position.coords)
            places.forEach((place) => {
                const latitude = place.location.lat;
                const longitude = place.location.lng;

                alert(place.name);

                // add place name
                const placeText = document.createElement('a-link');
                placeText.setAttribute('gps-entity-place', `latitude: ${latitude}; longitude: ${longitude};`);
                placeText.setAttribute('title', place.name);
                placeText.setAttribute('scale', '5 5 5');
                
                placeText.addEventListener('loaded', () => {
                    window.dispatchEvent(new CustomEvent('gps-entity-place-loaded'))
                });

                scene.appendChild(placeText);
            });
    },
        (err) => console.error('Error in retrieving position', err),
        {
            enableHighAccuracy: true,
            maximumAge: 0,
            timeout: 27000,
        }
    );
};