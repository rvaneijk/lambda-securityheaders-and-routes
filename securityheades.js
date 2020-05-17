'use strict';
exports.handler = (event, context, callback) => {
    
//    // Extract the request from the CloudFront event that is sent to Lambda@Edge 
    var request = event.Records[0].cf.request;

    // Extract the URI from the request
    var olduri = request.uri;

    if (olduri == '/privacy' || olduri == '/privacy/' ) {
        // Redirect the URI from the request
        const response = {
            status: '302',
            statusDescription: 'Found',
            headers: {
                location: [{
                    key: 'Location',
                    value: 'https://www.natuurlijkehaarkleuring.nl/privacystatement/',
                }],
            },
        };
        callback(null, response);
    } else {
        // Match any '/' that occurs at the end of a URI. Replace it with a default index
        var newuri = olduri.replace(/\/$/, '\/index.html');
        // Replace the received URI with the URI that includes the index page
        request.uri = newuri;
        // Return to CloudFront
        return callback(null, request);
    }

};
