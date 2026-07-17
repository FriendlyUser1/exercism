/**
 * format a name and number as a sentence
 *
 * @param {string} name
 * @param {number} number
*/
export const format = (name, number) => {
    let ord = "th";
    const nStr = number.toString()

    if (nStr.endsWith("1") && !nStr.endsWith("11")) ord = "st";
    else if (nStr.endsWith("2") && !nStr.endsWith("12")) ord = "nd";
    else if (nStr.endsWith("3") && !nStr.endsWith("13")) ord = "rd";

    return `${name}, you are the ${number}${ord} customer we serve today. Thank you!`
};
