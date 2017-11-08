class planeTransportService {

    transportTo(place) {
        console.log('Let\'s fly to ' + place);
    }
};

class carTransportService {

    transportTo(place) {
        console.log('Let\'s drive to ' + place);
    }
};

class boatTransportService {

    transportTo(place) {
        console.log('Let\'s float to ' + place);
    }
};

module.exports.transportService = carTransportService;

