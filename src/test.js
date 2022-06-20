const toReadable = (num) => {
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
            4: "thousand",
            7: "million",
            10: "billion",
            13: "trillion",
        },
    };

    const arrFromNum = [...`${num}`];

    // let lastTwo;

    // //check if number more than 1 digit long
    // if (arrFromNum.length > 1) {
    //     lastTwo = num.toString().slice(-2);
    // }
    // console.log(lastTwo);

    // const result = [];

    // if (arrFromNum.length in map.bigRound) {
    //     //adding bigRound if length matches `ones` + `biground`
    //     result.push(map.bigRound[arrFromNum.length]);
    //     result.unshift(map.ones[arrFromNum[0]]);
    // }
    // if (lastTwo in map.afterTen) {
    //     //adding lastTwo if 10-19 at the end
    //     result.push(map.afterTen[lastTwo]);
    // } else if (lastTwo in map.tens) {
    //     //adding lastTwo if % 10 === 0
    //     result.push(map.tens[lastTwo]);
    // } else if (+(`${lastTwo}`[0] + "0") in map.tens) {
    //     //adding if 1-9 last number
    //     result.push(map.tens[+(`${lastTwo}`[0] + "0")]);
    //     result.push(map.ones[lastTwo.toString()[1]]);
    // }

    const arr = [...num.toString()].reverse().map((el) => +el); // reversed num

    console.log(arr);

    const result = [];

    const getOne = (arr) => map.ones[arr[0]];

    const getTwo = (arr) => {
        const lastTwo = `${arr[1]}${arr[0]}`;
        if (lastTwo in map.tens) {
            // if lastTwo % 10 === 0
            return map.tens[lastTwo];
        } else if (lastTwo in map.afterTen) {
            // if lastTwo 10-19
            return map.afterTen[lastTwo];
        } else if (lastTwo[0] === "0") {
            // if lastTwo is 0x or 00
            return lastTwo[1] === "0" ? "" : map.ones[lastTwo[1]];
        }
        return `${map.tens[lastTwo[0] + 0]} ${map.ones[lastTwo[1]]}`;
    };

    const getHundred = (arr) => {
        return `${map.ones[arr[2]]} ${map.bigRound[3]}`;
    };

    // 1 digit
    if (arr.length === 1) result.push(getOne(arr));

    // 2 digits
    if (arr.length === 2) result.push(getTwo(arr));

    // 3+ digits
    if (arr.length > 2) {
        result.push(getTwo(arr));
        result.unshift(getHundred(arr));
    }

    return result.filter((el) => el).join(" ");
};

console.log(toReadable(692));
