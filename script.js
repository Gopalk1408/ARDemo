// getting places from APIs
function loadPlaces(position) {
    return [
        {
            name: 'Garden',
            icon: '/images/arch.png',  
            location: {
                lat: 10.90426806753599, 
                lng: 76.97075933151562
            },
        },
        {
                name: 'Villa 143',  
                icon: '/images/arch.png',  
                location: {
                lat: 10.904950618519505, 
                lng: 76.96988087519571
            },
        },
        {
            name: 'Badminton',  
            icon: '/images/arch.png', 
            location: {
                lat: 10.903886169093484,  
                lng: 76.97017997439947
            },
        },
        {
            name: 'Worker Areas',  
            icon: '/images/arch.png', 
            location: {
                lat: 10.905116143702928,  
                lng: 76.96946650683977
            },
        },
        {
            name: 'Villa U/C',  
            icon: '/images/arch.png', 
            location: {
                lat: 10.90487647024874,  
                lng: 76.97050183946399
            },
        },
        {
            name: 'Restaurant',  
            icon: '/images/arch.png',
            location: {
                lat: 10.904262799974605,  
                lng: 76.96969181238491
            },
        },
        {
            name: 'Shop',  
            icon: '/images/arch.png', 
            location: {
                lat: 10.904713789582376, 
                lng: 76.96997162837401
            },
        },
        {
            name: 'Security',  
            icon: '/images/arch.png', 
            location: {
                lat: 10.90320799072564,  
                lng: 76.96978879139236
            },
        },
        {
            name: 'Office',  
            icon: '/images/arch.png',
            location: {
                lat: 10.903546410756588,  
                lng: 76.96963280378976
            },
        },
        {
            name: 'DJAD',  
            location: {
                        lat: 10.872391878067093, 
                        lng: 77.00233236699457
            }
        },
        {
            name: 'Waav',  
            location: {
                        lat: 10.872371922623035, 
                        lng: 77.0020004704595
            }
        },
        {
            name: 'Library',  
            location: {
                        lat: 10.87289575260213, 
                        lng: 77.00264055663018
            }
        },
        {
            name: 'Dabba',  
            location: {
                        lat: 10.873417259869253, 
                        lng: 77.00220372728621
            }
        },
        {
            name: 'Cafeteria',  
            location: {
                        lat: 10.872903904118381, 
                        lng: 77.00173189044992
            }
        },
        {
            name: 'Foundees Block',  
            location: {
                        lat: 10.872278208340134, 
                        lng: 77.00156438123518
            }
        },
        {
            name: 'Design Block',  
            location: {
                        lat: 10.872517673660923, 
                        lng: 77.00201311890666
            }
        },
        {
            name: 'Mens Hostel',  
            location: {
                        lat: 10.873499912026068, 
                        lng: 77.0016485362464
            }
        },
        {
            name: 'Womens Hostel',  
            location: {
                        lat: 10.874076987995402, 
                        lng: 77.00219478080179
            }
        },
        {
            name: 'Parking',  
            location: {
                        lat: 10.873578299042608, 
                        lng: 77.00379181742726
            }
        },
        {
            name: 'Temple',  
            location: {
                        lat: 10.873987880822291, 
                        lng: 77.00367364412776
            }
        },
        {
            name: 'Guest House?',  
            location: {
                        lat: 10.874347926910907, 
                        lng: 77.00410158689384
            }
        },
        {
            name: 'Main Gate',  
            location: {
                        lat: 10.875595576759162, 
                        lng: 77.00453924217922
            }
        }
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

                //alert(place.name);

                // add place name
                const placeText = document.createElement('a-link');
                placeText.setAttribute('gps-entity-place', `latitude: ${latitude}; longitude: ${longitude};`);
                placeText.setAttribute('title', place.name);
                placeText.setAttribute('src', place.icon);
                placeText.setAttribute('scale', '3 3 3');
                
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