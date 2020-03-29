export const getCurrentLocation = () => {
    return new Promise(resolve => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(position => {
                resolve({lat: position.coords.latitude, lng: position.coords.longitude});
            }, () => resolve({lat: 0, lng: 0}));
        } else {
            resolve({lat: 0, lng: 0});
        }
    })
}

