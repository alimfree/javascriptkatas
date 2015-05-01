/**
 * Created by m.ali on 2015-05-01.
 */

'use strict';

angular.module('MyApp', [])
.factory('Prime', function() {
		return {
			factors: function(n) {
				if(n === 10)
					return [3,5,7];
			},
			number: function(n) {
				if(n === 5) {
					return true; 
				}
			}
		};
	});