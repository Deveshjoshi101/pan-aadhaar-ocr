const { extractCardDetails } = require('pan-aadhaar-ocr');

const imagePath = 'D:/Devesh/office/AccelEdge/pan-aadhaar-ocr/aadhar.PNG';
const cardType = 'PAN';

extractCardDetails(imagePath, cardType)
    .then((extractedDetails) => {
        console.log(`PAN Number: ${extractedDetails.Number}`);
    })
    .catch((err) => {
        console.error(err);
    });