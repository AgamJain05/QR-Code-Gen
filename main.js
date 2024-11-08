import './style.css';
import QRCode from 'qrcode';

document.addEventListener('DOMContentLoaded', () => {
  const generateButton = document.getElementById('generateButton');
  const inputText = document.getElementById('inputText');
  const qrcodeContainer = document.getElementById('qrcode');

  generateButton.addEventListener('click', () => {
    const text = inputText.value;
    qrcodeContainer.innerHTML = ''; // Clear previous QR code

    if (text) {
      QRCode.toCanvas(document.createElement('canvas'), text, { width: 200, height: 200 }, (error, canvas) => {
        if (error) {
          console.error(error);
          alert('Error generating QR code');
          return;
        }
        qrcodeContainer.appendChild(canvas);
      });
    } else {
      alert('Please enter a valid text or URL');
    }
  });
});