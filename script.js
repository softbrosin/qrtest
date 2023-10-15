function domReady(fn) {
    if (
        document.readyState === "complete" ||
        document.readyState === "interactive"
    ) {
        setTimeout(fn, 1000);
    } else {
        document.addEventListener("DOMContentLoaded", fn);
    }
}

domReady(function () {

    // If found you qr code
    function onScanSuccess(decodeText, decodeResult) {
        document.querySelector('#pigmy-act-no input').value =  decodeText, decodeResult;
        document.getElementById('html5-qrcode-button-camera-stop').click();
    }

    let htmlscanner = new Html5QrcodeScanner(
        "my-qr-reader",
        { fps: 10, qrbos: 250 }
    );
    htmlscanner.render(onScanSuccess);
});

document.querySelector('#my-qr-reader__scan_region img').src = "asset/tenor.gif"

document.querySelector('select option:last-child').selected = true;
document.querySelector('select').style.display='none';
