var resultDiv;

document.addEventListener("deviceready", init, false);

function init() {
	document.querySelector("#startScan").addEventListener("touchend", startScan, false);
	resultDiv = document.querySelector("#results");
}
//functions which starts to read and scan qrcode
function startScan() {

	cordova.plugins.barcodeScanner.scan(
		function (result) {//function display the result of scanning
			var s = "Result: " + result.text + "<br/>" +
			"Format: " + result.format + "<br/>" +
			"Cancelled: " + result.cancelled;
			resultDiv.innerHTML = s;
		}, 
		function (error) {//function display error if it occures during the scanning
			alert("Scanning failed: " + error);
		}
	);

}