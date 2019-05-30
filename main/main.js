module.exports = function main(inputs) {
    const startPrice = 6;
    const pricePerKM = 0.8;
    const parkTimePrice = 0.25;
    const Over8KMPercent = 0.5;
    var distance = inputs["distance"];
    var parkTime = inputs["parkTime"];
    var price = 0;
    if(distance <= 2) {
        price += startPrice;
    } else {
        price += startPrice + pricePerKM * (distance - 2);
        if(distance >= 8) {
            price += pricePerKM * Over8KMPercent * (distance - 8);
        }
    }
    price += parkTime * parkTimePrice;
    return Math.round(price);
};
