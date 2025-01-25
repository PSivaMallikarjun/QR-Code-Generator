// Function to generate QR Code
function generateQRCode() {
  const inputText = document.getElementById("qr-input").value;
  const qrCodeContainer = document.getElementById("qrcode");

  // Clear previous QR code
  qrCodeContainer.innerHTML = "";

  if (inputText.trim() !== "") {
    // Generate new QR code
    new QRCode(qrCodeContainer, inputText);
  } else {
    alert("Please enter text or URL to generate QR code.");
  }
}
