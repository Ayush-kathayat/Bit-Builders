function generateRandomNumbers(n, data) {
    const randomNumbers = [];
    const dataLength = data.length

    while (randomNumbers.length < n) {
        const randomNumber = Math.floor(Math.random() * dataLength);
        if (!randomNumbers.includes(randomNumber)) {
            randomNumbers.push(randomNumber);
        }
    }

    return randomNumbers;
}