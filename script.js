// getting places from APIs
function loadPlaces(position) {
    return [
        {
            name: 'Villa 177',  
            location: {
                lat: 10.904797481042223,
                lng: 76.96982338078661
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
            name: 'Villa 122',  
            location: {
                lat: 10.904941444387129, 
                lng: 76.96977882261955
            },
        },
        {
            name: 'Villa 111',  
            location: {
                lat: 10.904893471606636, 
                lng: 76.96969312735844
            },
        },
        {
            name: 'Villa 156',  
            location: {
                lat: 10.90484707021516, 
                lng: 76.9695654391672
            },
        },
        {
            name: 'Restaurant',  
            location: {
                lat: 10.904779936274256, 
                lng: 76.96969011110195
            },
        },
        {
            name: 'Canteen',  
            location: {
                lat: 10.904851019270032, 
                lng: 76.96993040620204
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
            name: 'Hostel',  
            location: {
                lat: 10.90421390245723, 
                lng: 76.97005392795391
            },
        },
        {
            name: 'Office',  
            location: {
                lat: 10.904267887588869, 
                lng: 76.97016781047577
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