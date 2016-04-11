/*
   JS to control the background and additional options


*/

function insert(rows,cells) {

	var table = document.getElementById("background-table");

	// var row = table.insertRow(2);
	for (j = 0; j < rows; j++) {

		var row = table.insertRow(j);

		// start filling the row with cells
		for (i = 0; i < cells; i++) {
			var cell = row.insertCell(i);
			cell.innerHTML = "NEW:Cell"
		}	
	}
		/*
		var cell1 = row.insertCell(0);
		var cell2 = row.insertCell(1);
		cell1.innerHTML = "NEW Cell1";
		cell2.innerHTML = "NEW Cell2";
		*/
	console.log("done");
	console.log(getWindowSize());
} 

function getWindowSize() {
	
	var width = window.innerWidth;
	var height = window.innerHeight;

	var size = [width,height];

	return size;
}
