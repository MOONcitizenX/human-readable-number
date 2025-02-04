module.exports = function toReadable(num) {
    const map = {
        ones: {
            0: "zero",
            1: "one",
            2: "two",
            3: "three",
            4: "four",
            5: "five",
            6: "six",
            7: "seven",
            8: "eight",
            9: "nine",
        },
        afterTen: {
            10: "ten",
            11: "eleven",
            12: "twelve",
            13: "thirteen",
            14: "fourteen",
            15: "fifteen",
            16: "sixteen",
            17: "seventeen",
            18: "eighteen",
            19: "nineteen",
        },
        tens: {
            20: "twenty",
            30: "thirty",
            40: "forty",
            50: "fifty",
            60: "sixty",
            70: "seventy",
            80: "eighty",
            90: "ninety",
        },
        bigRound: {
            3: "hundred",
        },
    };

    const arr = [...num.toString()].reverse().map((el) => +el);

    const result = [];

    const getOne = (arr) => map.ones[arr[0]];

    const getTwo = (arr) => {
        const lastTwo = `${arr[1]}${arr[0]}`;
        if (lastTwo in map.tens) {
            return map.tens[lastTwo];
        } else if (lastTwo in map.afterTen) {
            return map.afterTen[lastTwo];
        } else if (lastTwo[0] === "0") {
            return lastTwo[1] === "0" ? "" : map.ones[lastTwo[1]];
        }
        return `${map.tens[lastTwo[0] + 0]} ${map.ones[lastTwo[1]]}`;
    };

    const getHundred = (arr) => {
        return `${map.ones[arr[2]]} ${map.bigRound[3]}`;
    };

    if (arr.length === 1) result.push(getOne(arr));

    if (arr.length === 2) result.push(getTwo(arr));

    if (arr.length > 2) {
        result.push(getTwo(arr));
        result.unshift(getHundred(arr));
    }

    return result.filter((el) => el).join(" ");
};
