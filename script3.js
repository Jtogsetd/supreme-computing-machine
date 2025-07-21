const qrText = document.getElementById('qr-text');
const sizes = document.getElementById('sizes');
const generateButton = document.getElementById('generateBtn');
const downloadButton = document.getElementById('downloadBtn');
const qrContainer = document.querySelector('.qrbody');

let size = sizes.value;


generateButton.addEventListener("click", (e)=> {
    e.preventDefault();
    isEmptyInput();
   
});
downloadButton.addEventListener('click', ()=> {
    let img = document.querySelector(".qrbody img");
    if (img !== null) {
        let imgAttr = img.getAttribute('src');
        downloadButton.setAttribute("href", imgAttr);
    } else {
        downloadButton.setAttribute("href", `${document.querySelector('canvas').toDataURL()}`);
    }
})
function isEmptyInput() {
    if (qrText.value.length > 0) {
        generateQRCode();
    } else {
        alert("QR код үүсгэхийн тулд бичвэр, эсвэл URL хаяг оруулна уу");
    }
}

sizes.addEventListener('change', (e)=> {
    size = e.target.value;
    isEmptyInput();
})
function generateQRCode() {
    qrContainer.innerHTML = "";
    new QRCode(qrContainer, {
        text:qrText.value,
        height:size,
        width:size,
        colorLight:"#fff",
        colorDark:"#000",
    });
};
