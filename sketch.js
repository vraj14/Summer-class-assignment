
var table;

function preload(){
  table = loadTable("data/Accelerometer_exercise.csv");
}

function setup() {
  createCanvas(1350,500);
  console.log(table.getRowCount());
  console.log(table.getColumnCount());

  var colors = ["coral", "tomato"];
  var i = 1;

  window.setInterval(function(){
			document.body.style.backgroundColor = colors[i];
			i++;
			if (i === colors.length){
				i=0;
			}
		}, 700);
}

function draw(){

  var dataTipXY = drawLine();
  dataTip(dataTipXY[0], dataTipXY[1], dataTipXY[2]);
}

function drawLine(){

    var dataTipX = -1;
    var dataTipY = -1;

    var message ="";

    var lastXax = 0;
    var lastYax = 0;

    var lastXay = 0;
    var lastYay = 0;

    var lastXaz = 0;
    var lastYaz = 0;

    strokeWeight(1);

    for(i=0; i<table.getRowCount(); i++){
      var row = table.getRow(i);
      var ax = row.get(0); //accelerometer x reading
      var ay = row.get(1);
      var az = row.get(2);
      var timeStamp = i * 200;
      var y = map(ax, -10, 10, 0, height);
      var x = map(timeStamp, 0, 200*table.getRowCount(), 0, width);
      fill(255);
      stroke(255);
      ellipse(x, y, 5, 5);
      line(lastXax, lastYax, x, y);

      lastXax = x;
      lastYax = y;

      var y = map(ax, -30, 20, 0, height);
      var x = map(timeStamp, 0, 200*table.getRowCount(), 0, width);
      fill(204,204,204);
      stroke(204,204,204);
      rect(x, y, 5, 5);
      line(lastXay, lastYay, x, y);
      lastXay = x;
      lastYay = y;

      var y = map(ax, -50, 20, 0, height);
      var x = map(timeStamp, 0, 200*table.getRowCount(), 0, width);
      fill(76);
      stroke(76);
      ellipse(x, y, 5, 5);
      line(lastXaz, lastYaz, x, y);
      lastXaz = x;
      lastYaz = y;
  }
}
