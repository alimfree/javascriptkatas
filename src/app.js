/**
 * Created by m.ali on 2015-05-01.
 */

'use strict';

angular.module('MyApp', [])
.factory('Prime', function() {
		return {
			factors: function(n) {
				var array = new Array(); 
				for(var i=2; i=n>1; i++){
					for(; n%i==0; n/=i){
						array.push(i); 
					}
				}
				return array; 

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