exports.CurveTypes = {
    "None": 0,
    "Linear": 1,
    "Exponential": 2,
    "Logarithmic": 3
}

exports.DECIMALS = 1000000000000000000;

exports.ZeroAddress = "0x0000000000000000000000000000000000000000";

exports.fetchPureArray = function (res, parseFunc) {
    let arr = [];
    for (let key in res) {
        if (parseFunc != null) {
            arr.push(parseFunc(res[key].valueOf()));
        } else {
            arr.push(res[key].valueOf());
        }
    }
    return arr;
}

exports.calculateTokWithCurve = function (dotsRequired, constants, parts, dividers) {
    let tok = 0;
    for (let i = 0; i < dotsRequired; i++) {
        tok += multiplier * i + startValue
    }
    return tok;
}

