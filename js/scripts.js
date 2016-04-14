/*
   JS to control the background and additional options


*/
function closest (num, arr) {
	var curr = arr[0];
	var diff = Math.abs (num - curr);
	for (var val = 0; val < arr.length; val++) {
		var newdiff = Math.abs (num - arr[val]);
		if (newdiff < diff) {
			diff = newdiff;
			curr = arr[val];
		}
	}
	return curr;
}
	

function generateBackgroundTable() {

	var measurement = "15-06-12,06:46:18,06:46:18,280.48,15-06-12,06:46:23,06:46:23,281.57,15-06-12,06:46:28,06:46:28,282.66,15-06-12,06:46:33,06:46:33,284.29,15-06-12,06:46:38,06:46:38,285.12,15-06-12,06:46:43,06:46:43,286.21,15-06-12,06:46:48,06:46:48,287.3,15-06-12,06:46:53,06:46:53,288.93,15-06-12,06:46:58,06:46:58,290.56,15-06-12,06:47:03,06:47:03,291.64,15-06-12,06:47:08,06:47:08,291.93,15-06-12,06:47:13,06:47:13,293.02,15-06-12,06:47:18,06:47:18,293.56,5-06-12,06:47:23,06:47:23,294.65,15-06-12,06:47:28,06:47:28,295.73,15-06-12,06:47:33,06:47:33,296.27,15-06-12,06:47:38,06:47:38,296.82,15-06-12,06:47:43,06:47:43,296.57,15-06-12,06:47:48,06:47:48,297.9,15-06-12,06:47:53,06:47:53,297.65,15-06-12,06:47:58,06:47:58,298.19,15-06-12,06:48:03,06:48:03,298.19,15-06-12,06:48:08,06:48:08,298.74,15-06-12,06:48:13,06:48:13,299.28,15-06-12,06:48:18,06:48:18,299.82,15-06-12,06:48:23,06:48:23,299.82,15-06-12,06:48:28,06:48:28,300.36,15-06-12,06:48:33,06:48:33,300.36,15-06-12,06:48:38,06:48:38,300.9,15-06-12,06:48:43,06:48:43,300.65,15-06-12,06:48:48,06:48:48,300.65,15-06-12,06:48:53,06:48:53,301.2,15-06-12,06:48:58,06:48:58,300.07,15-06-12,06:49:03,06:49:03,300.9,15-06-12,06:49:08,06:49:08,302.28,15-06-12,06:49:13,06:49:13,302.03,15-06-12,06:49:18,06:49:18,302.57,15-06-12,06:53:08,06:53:08,317.91,15-06-12,06:49:23,06:49:23,303.11,15-06-12,06:53:13,06:53:13,318.45,15-06-12,06:49:28,06:49:28,303.11,15-06-12,06:53:18,06:53:18,318.21,15-06-12,06:49:33,06:49:33,303.66,15-06-12,06:53:23,06:53:23,318.75,15-06-12,06:49:38,06:49:38,303.66,15-06-12,06:53:28,06:53:28,319.29,15-06-12,06:49:43,06:49:43,304.2,15-06-12,06:53:33,06:53:33,319.04,15-06-12,06:49:48,06:49:48,304.74,15-06-12,06:53:38,06:53:38,320.12,15-06-12,06:49:53,06:49:53,303.95,15-06-12,06:53:43,06:53:43,320.66,15-06-12,06:49:58,06:49:58,304.49,15-06-12,06:53:48,06:53:48,321.21,15-06-12,06:50:03,06:50:03,305.03,15-06-12,06:53:53,06:53:53,320.96,15-06-12,06:50:08,06:50:08,305.57,15-06-12,06:53:58,06:53:58,321.5,15-06-12,06:50:13,06:50:13,306.11,15-06-12,06:54:03,06:54:03,322.04,15-06-12,06:50:18,06:50:18,306.11,15-06-12,06:54:08,06:54:08,322.04,15-06-12,06:50:23,06:50:23,305.87,15-06-12,06:54:13,06:54:13,322.58,15-06-12,06:50:28,06:50:28,306.41,15-06-12,06:54:18,06:54:18,322.33,15-06-12,06:50:33,06:50:33,306.95,15-06-12,06:54:23,06:54:23,322.87,15-06-12,06:50:38,06:50:38,306.95,15-06-12,06:54:28,06:54:28,323.42,15-06-12,06:50:43,06:50:43,307.49,15-06-12,06:54:33,06:54:33,323.96,15-06-12,06:50:48,06:50:48,308.03,15-06-12,06:54:38,06:54:38,324.5,15-06-12,06:50:53,06:50:53,308.57,15-06-12,06:54:43,06:54:43,324.25,15-06-12,06:50:58,06:50:58,308.32,15-06-12,06:54:48,06:54:48,324.79,15-06-12,06:51:03,06:51:03,308.32,15-06-12,06:54:53,06:54:53,325.33,15-06-12,06:51:08,06:51:08,308.87,15-06-12,06:54:58,06:54:58,325.33,15-06-12,06:51:13,06:51:13,309.41,15-06-12,06:55:03,06:55:03,325.87,15-06-12,06:51:18,06:51:18,309.95,15-06-12,06:55:08,06:55:08,325.63,15-06-12,06:51:23,06:51:23,309.7,15-06-12,06:55:13,06:55:13,325.63,15-06-12,06:51:28,06:51:28,310.24,15-06-12,06:55:18,06:55:18,326.17,15-06-12,06:51:33,06:51:33,310.78,15-06-12,06:55:23,06:55:23,326.71,15-06-12,06:51:38,06:51:38,310.78,15-06-12,06:55:28,06:55:28,327.25,15-06-12,06:51:43,06:51:43,311.33,15-06-12,06:55:33,06:55:33,327.79,15-06-12,06:51:48,06:51:48,311.08,15-06-12,06:55:38,06:55:38,327,15-06-12,06:51:53,06:51:53,311.62,15-06-12,06:55:43,06:55:43,328.09,15-06-12,06:51:58,06:51:58,312.16,15-06-12,06:55:48,06:55:48,328.09,15-06-12,06:52:03,06:52:03,312.7,15-06-12,06:55:53,06:55:53,328.63,15-06-12,06:52:08,06:52:08,313.24,15-06-12,06:55:58,06:55:58,329.17,15-06-12,06:52:13,06:52:13,312.99,15-06-12,06:56:03,06:56:03,328.92";

	var table = document.getElementById("background-table");

	var rows = Math.floor(window.innerHeight/25);
	console.log("Number of rows: ");
	console.log(rows);

	var cells_ = Math.floor(window.innerWidth/100);
	console.log("Number of cells: ");
	console.log(cells_);

	// fix bug with this code, when the number of cells is not div by 4
	var testArray = [4,8,12,16,20,24,28,32,36,40,44,48,52,56,60,64,68,72,76,80,84,88,92,96,100];
	var cells = closest(cells_,testArray);
	console.log("Closest number is: ");
	console.log(cells);

	var temp = 0;

	// var row = table.insertRow(2);
	for (j = 0; j < rows; j++) {

		var row = table.insertRow(j);

		// start filling the row with cells
		for (i = 0; i < cells; i++) {
			var cell = row.insertCell(i);
			var measure = measurement.split(",");
			cell.innerHTML = measure[temp+i];
			
			if (i == cells-1) { 
				temp = temp + i + 1; 
				// console.log(temp);
			}
		}	
	}

	console.log("done");
} 
