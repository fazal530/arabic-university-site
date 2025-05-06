/**
 * @file
 * All Sliders of the site will go here.
 */
(function ($, Drupal) {
	Drupal.behaviors.sliders = {
		attach(context, settings) {
			// JUST REUSE THIS CODE FOR SLIDER
			// HOME PAGE LOGO SLIDER
			let $sliderwrap = $(".logos__carousel");
			// fix for flex begins here ----
			function setW() {
				// use parent width, not always the right way
				// change it if your $sliderwrap parent width
				// does not match your $sliderwrap width
				$sliderwrap.width($sliderwrap.parent().width());
			}
			setW();
			window.addEventListener("resize", setW);
			// end fix here ----
			// instantiate the slider
			$sliderwrap.not(".slick-initialized").slick({
				infinite: true,
				speed: 300,
				slidesToShow: 6,
				autoplay: true,
				autoplaySpeed: 3000,
				pauseOnHover: true,
				arrows: false,
				responsive: [
					{
						breakpoint: 1280,
						settings: {
							slidesToShow: 4,
						},
					},
					{
						breakpoint: 767,
						settings: {
							slidesToShow: 2,
						},
					},
				],
			});

			console.log("hello world");
//////////////// Riaz work to copy email and enter in webform to email

document.addEventListener('DOMContentLoaded', function() {
    // Select all instances of the .contactPageContainer class
    const containers = document.querySelectorAll('.contactPageContainer');
    containers.forEach(container => {
      // Select the email anchor tag within the current container
      const emailWrapper = container.querySelector('.contactPageContainer__cardAndFormWrapper__cardWrapper__emailWrapper a');
      // Select the input field within the .form-item-to-email wrapper in the same container
      const emailInput = container.querySelector('.form-item-to-email input');
	  
      if (emailWrapper && emailInput) {
        // Extract the email address from the anchor tag and set it in the input field
        const email = emailWrapper.textContent.trim();
        emailInput.value = email;

      }
    });


// Find all .contactPageContainer elements
var formContainers = context.querySelectorAll('.contactPageContainer');

formContainers.forEach(function (container) {
  // Check if the element has already been processed
  if (container.hasAttribute('data-form-toggle-handler-processed')) {
	return;
  }

  // Mark the container as processed
  container.setAttribute('data-form-toggle-handler-processed', true);

// Select the button within the current container
var button = container.querySelector('.contactPageContainer__cardAndFormWrapper__cardWrapper__buttonWrapper button');
// Select the form to toggle within the current container
var form = container.querySelector('.webform-submission-contact-webform-form');
// Select the label to toggle within the current container
var formLabel = container.querySelector('.contactPageContainer__cardAndFormWrapper__formWrapper__formLabelWrapper');

if (button && form) {
  // Ensure the form and label are initially hidden
  form.style.display = 'none';
  if (formLabel) {
	formLabel.style.display = 'none';
  }

  // Add a click event listener to the button to toggle the form and label
  button.addEventListener('click', function () {
	// Check the current state of the form and toggle
	if (form.style.display === 'none' || form.style.display === '') {
	  form.style.display = 'block';
	  if (formLabel) {
		formLabel.style.display = 'block';
	  }
	} else {
	  form.style.display = 'none';
	  if (formLabel) {
		formLabel.style.display = 'none';
	  }
	}
  });
}

//   // Select the button within the current container
//   var button = container.querySelector('.contactPageContainer__cardAndFormWrapper__cardWrapper__buttonWrapper button');
//   // Select the form to toggle within the current container
//   var form = container.querySelector('.webform-submission-contact-webform-form');

//   if (button && form) {
// 	// Ensure the form is initially hidden
// 	form.style.display = 'none';

// 	// Add a click event listener to the button to toggle the form
// 	button.addEventListener('click', function () {
// 	  if (form.style.display === 'none') {
// 		form.style.display = 'block';
// 	  } else {
// 		form.style.display = 'none';
// 	  }
// 	});
//   }
});

});


		},
	};
})(jQuery, Drupal);
