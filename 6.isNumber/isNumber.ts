const isNumber = (s: string) => {
    const n = Number(s);

    return !isNaN(n);
};

const test = "24";

isNumber(test);
