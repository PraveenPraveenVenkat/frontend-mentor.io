/**
 * @param {Array<Function>} functions
 * @return {Promise<any>}
 */
var promiseAll = async function(functions) {
    return new Promise((resolve, reject) => {
        let results = [];
        functions.forEach(fn => {
            fn()
            .then(val => results.push(val))
            .catch(reason => reject(reason));
        }));
        resolve(results);
    };
}