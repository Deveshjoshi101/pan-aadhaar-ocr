# PAN and Aadhaar OCR Extraction

This project uses **Tesseract.js** to extract text from images and detect PAN or Aadhaar card details from the extracted text. The OCR processing is done on a sample image, and based on the text extracted, the program detects whether the card is a **PAN** or **Aadhaar** card.

## Features

- Extracts text from images using Tesseract.js OCR.
- Detects **PAN** and **Aadhaar** card numbers from the extracted text.
- Provides a simple console output with detected card details.

## Requirements

Before you can run the project, you need to ensure you have the following installed:

- **Node.js**: Download and install the latest version of Node.js from [https://nodejs.org/](https://nodejs.org/).
- **npm (Node Package Manager)**: npm comes bundled with Node.js, so installing Node.js will install npm as well.
- **Tesseract.js**: The OCR library that is used in the project to process the image.

## Setup Instructions

### 1. Clone the repository (if applicable)
If you haven’t already, clone the repository to your local machine:

```bash
git clone https://github.com/Deveshjoshi101/pan-aadhaar-ocr.git
cd pan-aadhaar-ocr
```

### 2. Install dependencies
Run the following command in your terminal to install the required dependencies:

```bash
npm install
```

This will install `tesseract.js` and any other necessary packages.

### 3. Prepare the Image
Ensure you have the image you want to process. The code assumes an image named `pan.png` is located in the root directory of the project.

If you want to use a different image, update the `imagePath` variable in the code (in the `main()` function). Make sure the image path points to the correct file.

### 4. Run the Code
Once the dependencies are installed and the image is ready, run the following command:

```bash
node index.js
```

This will process the image using **Tesseract.js**, extract the text, and attempt to detect the PAN or Aadhaar card details from the text. If successful, it will display the extracted details in the console.

### 5. Output
The console will show the following:
- The extracted text from the image.
- The detected card type (`PAN` or `AADHAAR`), along with the number.

If the OCR fails to detect either of the two card types, it will return `UNKNOWN`.

Example Output:
```
Processing: /path/to/pan.png
Extracted Text: XXXX1234Y
Detected Card Details: { type: 'PAN', Number: 'XXXX1234Y' }
```

### 6. Expected Card Formats

- **PAN Card**: A PAN card number is a 10-character string in the format `XXXXX1234Y`, where:
  - The first 5 characters are uppercase letters.
  - The next 4 characters are digits.
  - The last character is an uppercase letter.
  
- **Aadhaar Card**: An Aadhaar card number is a 12-digit number in the format `1234 5678 9012` (with spaces in between).

The program will attempt to detect the card type based on these formats.

## Troubleshooting

- **OCR Accuracy**: If the OCR extraction doesn't work well (e.g., blurry or poor-quality images), try improving the image quality or preprocessing the image to make the text clearer.
  
- **Image Path**: Ensure the path to the image file is correct in the code. You can modify the `imagePath` variable to point to your image file. If the image is in a different folder, make sure to include the full path or use a relative path.

- **Incorrect Output**: If the OCR is not detecting the correct card type (e.g., detecting a PAN as an Aadhaar card), ensure the image is clear and the card is properly visible. Consider using image preprocessing techniques like resizing, thresholding, or converting to grayscale to improve OCR results.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

### File Structure

- `index.js`: The main JavaScript file where the OCR extraction and card detection logic reside.
- `pan.png`: A sample image for testing the OCR functionality (make sure to replace it with your image).
- `package.json`: The configuration file for the project with dependencies listed.
- `README.md`: This file, which contains instructions and details about the project.

---

### Dependencies

- **tesseract.js**: JavaScript library for OCR.
- **fs (File System)**: Node.js module for file handling.
- **path**: Node.js module for handling file and directory paths.

---

### Credits

- **Tesseract.js**: [Tesseract.js GitHub Repository](https://github.com/naptha/tesseract.js)
- **Node.js**: [Node.js Official Website](https://nodejs.org/)
