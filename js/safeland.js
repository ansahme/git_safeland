

// This example creates a simple polygon representing the Bermuda Triangle.

function initialize() {
  var mapOptions = {
    zoom: 5,
    center: new google.maps.LatLng(24.886436490787712, -70.2685546875),
    mapTypeId: google.maps.MapTypeId.TERRAIN
  };

  var bermudaTriangle;

  var map = new google.maps.Map(document.getElementById('map-canvas'),
      mapOptions);

  // Define the LatLng coordinates for the polygon's path.
  var triangleCoords = [
    new google.maps.LatLng(25.774252, -80.190262),
    new google.maps.LatLng(18.466465, -66.118292),
    new google.maps.LatLng(32.321384, -64.75737),
    new google.maps.LatLng(25.774252, -80.190262)
  ];

  // Construct the polygon.
  bermudaTriangle = new google.maps.Polygon({
    paths: triangleCoords,
    strokeColor: '#FF0000',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#FF0000',
    fillOpacity: 0.35
  });

  bermudaTriangle.setMap(map);
}

google.maps.event.addDomListener(window, 'load', initialize);


/**
 * Add/Remove Coords input row
 * */

$('#addRow').click(function( event ){
	 event.preventDefault();
	var newRow = $('<div class="a_point"><div class="form-group latitude"><label for="latitude" class="sr-only">Latitude1</label> <input'
			+ ' type="text" maxlength="9" size="9" class="form-control" '
			+ ' placeholder="Latitude"> </div> '
			+ ' <div class="form-group longitude"> <label for="longitude" class="sr-only">Longitude1</label> <input'
			+ '	type="text" size="9" maxlength="9" class="form-control" '
			+ '	placeholder="Longitude"> </div> </div>')
	$(".a_point:last").append(newRow);
});

$('#deleteRow').click(function( event ){
	 event.preventDefault();
	if($(".a_point").size() > 1){
		$(".a_point:last").remove();
	}
});

function getCoordsData(){
	var locData = new Array();
	var inputData = $(".a_point");
	for (i=0; i< inputData.length; i++){
		var latCoordDiv = $(inputData.get(i)).find(".latitude").get(0);
		var longCoordDiv = $(inputData.get(i)).find(".longitude").get(0);
		//getvalues
		var latCoord = $(latCoordDiv).find('INPUT').get(0).value;
		var longCoord = $(longCoordDiv).find('INPUT').get(0).value;
		if(latCoord.length ==0 || latCoord == "" || longCoord.length == 0 || longCoord == ""){
			continue;
		}
		locData.push(new LocPoint(Number(latCoord),Number(longCoord)));
	}
	//remove
	$(locData).each(function(index,element){
		console.log(index + " :" + element.lat + ", " + element.long);
	});
}

function openDialog() {
	$("#findland_div").dialog({
		title : "Enter Point Coordinates",
		autoOpen : true,
		modal : true,
		width:350,
		position:{my: "left top", at:"left bottom", of: "#navbar_"},
		buttons:{
		      Cancel: function(){$(this).dialog("close")},
		      Submit: function(){getCoordsData()
		    	  			$(this).dialog("close")
		    	  }
		     },

	});
}

//points class
function LocPoint(lat1,long1){
	this.lat = Number(lat1);
	this.long = Number(long1);
}

//Format toggle
$('#dmsFormat').change(function( event){
	if (this.checked){
		console.log(this.id);
	}
});
	

$('#ddFormat').change(function( event){
	if (this.checked){
		console.log(this.id);
	}
});