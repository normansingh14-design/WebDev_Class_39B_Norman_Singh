
const validateWithdrawal = (amount, balance) => {
    if (amount <= 0) {
        return false;
    }

    if (amount % 500 !== 0) {
        return false;
    }

    if (amount + 25 > balance) {
        return false;
    }

    return true;
};

const withdrawMoney = (amount, balance, callback) => {
    if (callback(amount, balance)) {
        const transactionFee = 25;
        const remainingBalance = balance - amount - transactionFee;

        console.log("Withdrawal Successful!");
        console.log("Transaction Fee: Rs.", transactionFee);
        console.log("Remaining Balance: Rs.", remainingBalance);
    } 
    else {
        console.log("Withdrawal Failed!");
        console.log("Invalid amount or insufficient balance.");
        console.log("Remaining Balance: Rs.", balance);
    }
};

const balance = 10000;
const amount = 3000;

console.log("Account Balance: Rs.", balance);
console.log("Withdrawal Amount: Rs.", amount);

withdrawMoney(amount, balance, validateWithdrawal);
