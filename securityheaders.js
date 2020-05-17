'use strict';

exports.handler = (event, context, callback) => {
    const response = event.Records[0].cf.response;
    response.headers['strict-transport-security'] = [{
        key: 'Strict-Transport-Security',
        value: 'max-age=31622400; includeSubDomains; preload',
    }];
    response.headers['x-content-type-options'] = [{
        key: 'X-Content-Type-Options',
        value: 'nosniff',
    }];
    response.headers['tk'] = [{
        key: 'Tk',
        value: 'N',
    }];
    response.headers['x-frame-options'] = [{
        key: 'X-Frame-Options',
        value: 'DENY',
    }];
    response.headers['x-Xss-protection'] = [{
        key: 'X-Xss-Protection',
        value: '1; mode=block',
    }];
    response.headers['referrer-policy'] = [{
        key: 'Referrer-Policy',
        value: 'no-referrer',
    }];
    response.headers['content-security-policy'] = [{
        key: 'Content-Security-Policy',
        value: "default-src 'none'; frame-src https://app.acuityscheduling.com; connect-src https://a.tiles.mapbox.com https://b.tiles.mapbox.com https://c.tiles.mapbox.com 'self'; font-src 'self'; img-src https://a.tiles.mapbox.com https://b.tiles.mapbox.com https://c.tiles.mapbox.com 'self'; media-src blob: 'self'; style-src 'self' https://hello.myfonts.net/count/; script-src https://d3gxy7nm8y4yjr.cloudfront.net/js/embed.js 'unsafe-eval' 'self'; object-src 'none'; frame-ancestors 'none'; form-action 'none'; base-uri 'self'; block-all-mixed-content",
    }];
    response.headers['feature-policy'] = [{
        key: 'Feature-Policy',
        value: "sync-xhr 'self'; autoplay 'self'; accelerometer 'none'; camera 'none'; geolocation 'none'; gyroscope 'none'; magnetometer 'none'; microphone 'none'; payment 'none'; usb 'none'",
    }];
    response.headers['expect-ct'] = [{
        key: 'Expect-CT',
        value: 'enforce, max-age=604800',
    }];
        

    callback(null, response);
};
