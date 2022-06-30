const changeLetterValue = (text) => {
    // at board's pointer change value to text
    
}

const enterLetter = (keyText) => {
    if (keyText === "Enter") {
        return;
    }
    if (keyText === "Backspace") {
        return;
    }
    changeLetterValue(keyText);
    console.log(keyText);
}
export default enterLetter;
