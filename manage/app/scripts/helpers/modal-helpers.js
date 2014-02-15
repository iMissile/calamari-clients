/*global define */
(function() {
    'use strict';
    define(['lodash'], function(_) {
        return {
            UnAuthorized: function($modal, options) {
                options = options || {};
                return $modal(_.extend({
                    title: 'UNAUTHORIZED ACCESS',
                    content: 'Unauthorized access to API. It looks like your authentication tokens are invalid. Please try logging out and back in again.',
                    container: 'body',
                    template: 'views/custom-modal.html'
                }, options));
            },
            SuccessfulRequest: function($modal, options) {
                options = options || {};
                return $modal(_.extend({
                    content: 'This may take a few seconds. We\'ll let you know when it\'s done.',
                    container: 'body',
                    template: 'views/custom-modal.html'
                }, options));
            }
        };
    });
})();