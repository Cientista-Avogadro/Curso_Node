function isNULLorWhitespace(str) {
    if (str == null || str == "") {
        return true;
    } else {
        return false;
    }
}

console.log(isNULLorWhitespace("null"));