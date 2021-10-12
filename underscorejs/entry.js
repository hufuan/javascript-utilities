var _ = require('underscore');
var1 = [0, 2, 8, 4, 10, 6];
var2 = [3, 2, 1];

var res = _.every(var1, function(num){ return num %2 == 0; });

console.log(res);
//console.log(var2);