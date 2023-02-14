const objCrush = (obj = {}) => Object.keys(obj || {}).reduce((acc, cur) => {
    if (typeof obj[cur] === 'object') {
        acc = { ...acc, ...objCrush(obj[cur]) }
    } else {
        acc[cur] = obj[cur];
    }
    return acc;
}, {});

module.exports = objCrush;
