/**
 * Contains the basic show and hide tests
 * These tests ensure the basic functionality of 'abbreviation' directive
 */
describe('Angular-Abbreviation: Basic tests', function() {

    // Global Variable Declaration
    var scope, compile, abbreviation;

    /**
    * This helps to quickly set scope values 
    * And update the abbreviation directive per test
    */
    var recompile = function(){

        // Set our test template markup
        var template = 
            '<div abbreviation="" ' +
                'short="short" ' +
                'long="long" ' +
            '</div>';

        abbreviation = compile(template)(scope);
        scope.$digest();
    };

    /**
    * Add our directive module to the tests
    */
    beforeEach(module('ng.abbreviation'));

    /**
    * Inject the default and setup values to the test
    */
    beforeEach(inject(function($rootScope, $compile) {

        // Set compile
        compile = $compile;

        // Set default scope values
        scope = $rootScope.$new();
        scope.short = 'Ameya';
        scope.long = 'Ameya S Naik';
        recompile();

    }));

	it('Should generate a single \'abbr\' element', function() {
		expect(abbreviation.find('abbr').length).toEqual(1);
	});

});
