// index.html js
function myWeb() {
	location.replace(
		"/Users/Brian Sanya/Desktop/portfolio/frontend/websites.html"
	);
}

function mypos() {
	location.replace(
		"/Users/Brian Sanya/Desktop/portfolio/frontend/posters.html"
	);
}

function myLogo() {
	location.replace(
		"C:/Users/Brian Sanya/Desktop/portfolio/frontend/graphics.html"
	);
}

/* Open when someone clicks on the span element */
/* Set the width of the side navigation to 250px and the left margin of the page content to 250px and add a black background color to body */
function openNav() {
	document.getElementById("mySidenav").style.width = "300px";
	document.getElementById("main").style.marginLeft = "300px";
	document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0, and the background color of body to white */
function closeNav() {
	document.getElementById("mySidenav").style.width = "0";
	document.getElementById("main").style.marginLeft = "0";
	document.body.style.backgroundColor = "white";
}

// graphics page js
// portfolio
$(".gallery ul li a").click(function () {
	var itemID = $(this).attr("href");
	$(".gallery ul").addClass("item_open");
	$(itemID).addClass("item_open");
	return false;
});
$(".close").click(function () {
	$(".port, .gallery ul").removeClass("item_open");
	return false;
});

$(".gallery ul li a").click(function () {
	$("html, body").animate(
		{
			scrollTop: parseInt($("#top").offset().top),
		},
		400
	);
});
