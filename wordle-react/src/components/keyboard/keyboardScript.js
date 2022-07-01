import changeValue from "../board/BoardBox"

const changeLetterValue = (letter) => {
    // at board's pointer change value to letter 
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
