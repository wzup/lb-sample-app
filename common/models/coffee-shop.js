module.exports = function(CoffeeShop) {
    // 'use strict';
    CoffeeShop.status = function(cb) {
        var currentDate = new Date(),
            currentHour = currentDate.getHours(),
            OPEN_HOUR = 6,
            CLOSE_HOUR = 20,
            response;

        console.log('currentHour is:', currentHour);

        if(currentHour > OPEN_HOUR && currentHour < CLOSE_HOUR) {
            response = ['We are open for business.',
                    ' Current Hour it is ', currentHour].join('');
        } else {
            response = ['Sorry, we are closed.',
                  ' Open daily from 6am to 8pm.',
                  ' Current Hour it is ',
                  currentHour].join('');
        }
        cb(null, response);
    };

    CoffeeShop.remoteMethod('status', {
        http: {path: '/status', verb: 'get'},
        returns: {arg: 'status', type: 'string'}
    });
};
