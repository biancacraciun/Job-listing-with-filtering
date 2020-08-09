export const uppercase = (str) => str !== null ? str.toUpperCase() : null;

export const exclamationMark = (str) => str !== null ? str.toUpperCase().concat("!") : null;

export const capitalize = str => {
    let arr = str.split(" ");
    let result = [];
    
    arr.map(word => {
        let arr = [...word];
        arr.splice(0, 1, arr[0].toUpperCase()).join("");
        result.push(arr.join(""));
    });

    return result.join(" ");
};