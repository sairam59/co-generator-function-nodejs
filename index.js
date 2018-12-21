var co = require('co');

console.log('Generator functions ....');

co(function* () {
    var res = yield Promise.resolve('true');
    console.log(res);
    var rej = yield Promise.reject(new Error('Biscuit'));
}).catch(onerror);

function onerror(err) {
    console.log(err.message);
}