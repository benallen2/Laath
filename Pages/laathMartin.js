
function galleryChange(){
	$("#newyorkbtn").click(function(){
		document.getElementById("photothumb1").src="../Photos/NewYork/bridge.jpg";
		document.getElementById("photothumb2").src="../Photos/NewYork/exercise.jpg";
		document.getElementById("photothumb3").src="../Photos/NewYork/gulls.jpg";
		document.getElementById("photothumb4").src="../Photos/NewYork/street.jpg";
		document.getElementById("photothumb5").src="../Photos/NewYork/street2.jpg";
		document.getElementById("photothumb6").src="../Photos/NewYork/wall.jpg";
		$("#gallerybar>a.active").removeClass("active");
		$("#newyorkbtn").addClass("active");
		return false;
	});
	$("#nanulegabtn").click(function(){
		document.getElementById("photothumb1").src="../Photos/Nanulega/beach.jpg";
		document.getElementById("photothumb2").src="../Photos/Nanulega/boat.jpg";
		document.getElementById("photothumb3").src="../Photos/Nanulega/dock.jpg";
		document.getElementById("photothumb4").src="../Photos/Nanulega/dock2.jpg";
		document.getElementById("photothumb5").src="../Photos/Nanulega/lighttree.jpg";
		document.getElementById("photothumb6").src="../Photos/Nanulega/rain.jpg";
		$("#gallerybar>a.active").removeClass("active");
		$("#nanulegabtn").addClass("active");
		return false;
	});
	$("#huntforurbancarpbtn").click(function(){
		document.getElementById("photothumb1").src="../Photos/UrbanCarp/carp1.jpg";
		document.getElementById("photothumb2").src="../Photos/UrbanCarp/carp2.jpg";
		document.getElementById("photothumb3").src="../Photos/UrbanCarp/carp3.jpg";
		document.getElementById("photothumb4").src="../Photos/UrbanCarp/carp4.jpg";
		document.getElementById("photothumb5").src="../Photos/UrbanCarp/carp5.jpg";
		document.getElementById("photothumb6").src="../Photos/UrbanCarp/carp6.jpg";
		$("#gallerybar>a.active").removeClass("active");
		$("#huntforurbancarpbtn").addClass("active");
		return false;
	});
		$("#ghostsofghanabtn").click(function(){
		document.getElementById("photothumb1").src="../Photos/Ghana/ghana1.jpg";
		document.getElementById("photothumb2").src="../Photos/Ghana/ghana2.jpg";
		document.getElementById("photothumb3").src="../Photos/Ghana/ghana3.jpg";
		document.getElementById("photothumb4").src="../Photos/Ghana/ghana4.jpg";
		document.getElementById("photothumb5").src="../Photos/Ghana/ghana5.jpg";
		document.getElementById("photothumb6").src="../Photos/Ghana/ghana6.jpg";
		$("#gallerybar>a.active").removeClass("active");
		$("#ghostsofghanabtn").addClass("active");
		return false;
	});
};



$(document).ready(function(){
	galleryChange();
	
});



