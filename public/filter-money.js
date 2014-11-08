/**
 * Round a number by a specific precision or method
 * @param  {integer} val       
 * @param  {integer} precision 
 * @param  {string} method
 * @return {string} 
 */
PolymerExpressions.prototype.money = function (val) {
    return val.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
};