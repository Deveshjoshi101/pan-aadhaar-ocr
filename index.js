const Tesseract = require("tesseract.js");
const fs = require("fs");
const path = require("path");

// Function to extract text from image
async function extractText(imagePath) {
    try {
        console.log(`Processing: ${imagePath}`);
        const result = await Tesseract.recognize(imagePath, "eng");
        return result.data.text;
    } catch (err) {
        console.error("Error during OCR processing:", err);
        throw err;
    }
}

// Function to determine card type based on formats
function detectCardType(text) {
    const panPattern = /[A-Z]{5}[0-9]{4}[A-Z]/;
    const aadhaarPattern = /\b\d{4}\s\d{4}\s\d{4}\b/;

    const panMatch = text.match(panPattern);
    const aadhaarMatch = text.match(aadhaarPattern);

    if (panMatch) {
        return { type: "PAN", Number: panMatch[0] };
    } else if (aadhaarMatch) {
        return { type: "AADHAAR", Number: aadhaarMatch[0] };
    } else {
        return { type: "UNKNOWN", Number: "Not detected" };
    }
}

// Main function
async function main() {
    const imagePath = path.join(__dirname, "pan.png");
    if (!fs.existsSync(imagePath)) {
        console.error("Image file not found:", imagePath);
        return;
    }

    try {
        const text = await extractText(imagePath);
        console.log("Extracted Text:", text);

        const cardDetails = detectCardType(text);
        console.log("Detected Card Details:", cardDetails);
    } catch (err) {
        console.error("Error:", err);
    }
}

main();
