const generateOTP = (digits = 4, alphanumeric = false) => {
    const numbers = '0123456789';
    const letters = 'aAbBcCdDeEfFgGhHiIjJkKlLmMnNoOpPqQrRsStTuUvVwWxXyYzZ';
    const resultString = alphanumeric ? `${numbers}${letters}` : numbers;
    let otp = '';
    for (let i = 0; i < digits; ++i) {
        otp += resultString[Math.floor(Math.random() * resultString.length)];
    }
    return otp;
}
console.log(generateOTP());         // 8736
console.log(generateOTP(6));        // 269869
console.log(generateOTP(6, true));  // hkIkj4