const prices = [1,34,45,346];

// map() in JS
const doublePrices = (prices: number[]) => {
    return prices.map(price => price * 2);
}

// map() in JSX (React)
prices.map(price => {
    return <p>{price}</p>;
});
