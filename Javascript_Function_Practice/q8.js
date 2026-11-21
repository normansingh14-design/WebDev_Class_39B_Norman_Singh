
const getFoodPrice = (foodName) => {
    const menu = {
        burger: 250,
        pizza: 500,
        momo: 150,
        chowmein: 180
    };

    return menu[foodName.toLowerCase()] || null;
};

const calculateServiceCharge = (total) => {
    return total * 0.05;
};

const calculateOrder = (foodName, quantity, callback) => {
    const price = getFoodPrice(foodName);

    if (price === null || quantity <= 0) {
        return null;
    }

    return callback(price, quantity);
};

const generateReceipt = (customerName, foodName, quantity, callback) => {
    const foodAmount = callback(
        foodName,
        quantity,
        (price, qty) => price * qty
    );

    if (foodAmount === null) {
        console.log("Invalid food item or quantity!");
        return;
    }

    const serviceCharge = calculateServiceCharge(foodAmount);
    const finalAmount = foodAmount + serviceCharge;

    console.log("Customer:", customerName);
    console.log("Food:", foodName);
    console.log("Quantity:", quantity);
    console.log("Food Amount: Rs.", foodAmount);
    console.log("Service Charge: Rs.", serviceCharge);
    console.log("Final Amount: Rs.", finalAmount);
};

generateReceipt("Suman", "Burger", 2, calculateOrder);
