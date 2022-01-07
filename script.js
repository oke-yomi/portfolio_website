$(document).ready(function () {
	$("#menu").click(function () {
		$(this).toggleClass("fa-times");
		$("header").toggleClass("toggle");
	});

	$(window).on("scroll load", function () {
		$("#menu").removeClass("fa-times");
		$("header").removeClass("toggle");

		if ($(window).scrollTop() > 0) {
			$(".top").show();
		} else {
			$(".top").hide();
		}
	});

	// smooth scrolling

	$('a[href*="#"]').on("click", function (e) {
		e.preventDefault();

		$("html, body").animate(
			{
				scrollTop: $($(this).attr("href")).offset().top,
			},
			500,
			"linear"
		);
	});
});

function sendMail(params) {
	let tempParams = {
		name: document.getElementById("name").value,
		email: document.getElementById("email").value,
		phone: document.getElementById("phone").value,
		project_title: document.getElementById("project_title").value,
		message: document.getElementById("message").value,
	};

	emailjs.send("service_43qekuk", "template_otesmbg", tempParams).then(
		function (res) {
			console.log("SUCCESS!", res.status);
		},
		function (error) {
			console.log("FAILED...", error);
		}
	);
}
