/**
 * @ngDoc directive
 * @name ng.directive:abbreviation
 *
 * @description
 * A directive to aid in handling abbreviations in a web application.
 *
 * @element EA
 *
 */
angular.module('ng.abbreviation', []).directive('abbreviation', function () {

    /**
     * The angular return value required for the directive
     * Feel free to tweak / fork values for your application
     */
    return {

        // Restrict to elements and attributes
        restrict: 'EA',

        // Assign the angular link function
        // link: fieldLink,
        
        // Assign the angular directive template HTML
        template: fieldTemplate,

        // Assign the angular scope attribute formatting
        scope: {
            long: '=',
            short: '='
        }
                    
    };

    /**
     * Link the directive to enable our scope watch values
     *
     * @param {object} scope - Angular link scope
     * @param {object} el - Angular link element
     * @param {object} attrs - Angular link attribute
     */
    function fieldLink(scope, el, attrs) {
        // Hook in our watched items
        scope.$watchCollection('[long,short]', function () { });
    }
    
    
    /**
     * Create our template html 
     * We use a function to figure out how to handle href correctly
     * 
     * @param {object} el - Angular link element
     * @param {object} attrs - Angular link attribute
     */
    function fieldTemplate(el, attrs){
            return '<abbr title="{{long}}">{{short}}</abbr>'
    }
});
