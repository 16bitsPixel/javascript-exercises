const getTheTitles = function(arr) {
    let result = [];
    arr.forEach(book => {
        result.push(book.title);
    });
    return result;
};

// Do not edit below this line
module.exports = getTheTitles;
