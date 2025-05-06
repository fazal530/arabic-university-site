(function ($, Drupal) {
    Drupal.behaviors.customAccordion = {
      attach: function (context, settings) {
        // Use a class or data attribute to track whether the event has already been bound.
        $(".at-title", context).each(function () {
          if (!$(this).hasClass('accordion-initialized')) {
            $(this).addClass('accordion-initialized');
            $(this).click(function () {
              $(this)
                .toggleClass("active")
                .next(".at-tab")
                .slideToggle()
                .parent()
                .siblings()
                .find(".at-tab")
                .slideUp()
                .prev()
                .removeClass("active");
            });
          }
        });
      }
    };
  })(jQuery, Drupal);
  

// document.getElementById('webform-submission-contact-webform-add-form').addEventListener('submit', function(event) {
//     event.preventDefault(); // Prevent the form from submitting the traditional way

//     // Clear previous error messages
//     document.getElementById('name-error1').textContent = '';
//     document.getElementById('business-error1').textContent = '';
//     document.getElementById('email-error1').textContent = '';
//     document.getElementById('phoneNumber-error1').textContent = '';
//     document.getElementById('message-error1').textContent = '';

//     // Validate the form fields
//     var isValid = true;
//     var formElements = this.elements;

//     if (!formElements.name.value) {
//         document.getElementById('name-error1').textContent = ' *';
//         isValid = false;
//     }

//     if (!formElements.business.value) {
//         document.getElementById('business-error1').textContent = ' *';
//         isValid = false;
//     }

//     if (!formElements.email.value) {
//         document.getElementById('email-error1').textContent = ' *';
//         isValid = false;
//     }

//     if (!formElements.phoneNumber.value) {
//         document.getElementById('phoneNumber-error1').textContent = ' *';
//         isValid = false;
//     }

//     if (!formElements.message.value) {
//         document.getElementById('message-error1').textContent = ' *';
//         isValid = false;
//     }

//     if (isValid) {
//         // Show processing message
//         document.getElementById('processing-message1').style.display = 'block';

    
//     }
// });
///////////////////////////////////////////////////////// form 1 end 



///////////////////////////////////////////////////////  form 2 end 

// document.getElementById('contact-form3').addEventListener('submit', function(event) {
//     event.preventDefault(); // Prevent the form from submitting the traditional way

//     // Clear previous error messages
//     document.getElementById('name-error3').textContent = '';
//     document.getElementById('business-error3').textContent = '';
//     document.getElementById('email-error3').textContent = '';
//     document.getElementById('phoneNumber-error3').textContent = '';
//     document.getElementById('message-error3').textContent = '';

//     // Validate the form fields
//     var isValid = true;
//     var formElements = this.elements;

//     if (!formElements.name.value) {
//         document.getElementById('name-error3').textContent = ' *';
//         isValid = false;
//     }

//     if (!formElements.business.value) {
//         document.getElementById('business-error3').textContent = ' *';
//         isValid = false;
//     }

//     if (!formElements.email.value) {
//         document.getElementById('email-error3').textContent = ' *';
//         isValid = false;
//     }

//     if (!formElements.phoneNumber.value) {
//         document.getElementById('phoneNumber-error3').textContent = ' *';
//         isValid = false;
//     }

//     if (!formElements.message.value) {
//         document.getElementById('message-error3').textContent = ' *';
//         isValid = false;
//     }

//     if (isValid) {
//         // Show processing message
//         document.getElementById('processing-message3').style.display = 'block';

    
//     }
// });

///////////////////////////////////////////////////////// form 3 end 

// document.getElementById('contact-form4').addEventListener('submit', function(event) {
//     event.preventDefault(); // Prevent the form from submitting the traditional way

//     // Clear previous error messages
//     document.getElementById('name-error4').textContent = '';
//     document.getElementById('business-error4').textContent = '';
//     document.getElementById('email-error4').textContent = '';
//     document.getElementById('phoneNumber-error4').textContent = '';
//     document.getElementById('message-error4').textContent = '';

//     // Validate the form fields
//     var isValid = true;
//     var formElements = this.elements;

//     if (!formElements.name.value) {
//         document.getElementById('name-error4').textContent = ' *';
//         isValid = false;
//     }

//     if (!formElements.business.value) {
//         document.getElementById('business-error4').textContent = ' *';
//         isValid = false;
//     }

//     if (!formElements.email.value) {
//         document.getElementById('email-error4').textContent = ' *';
//         isValid = false;
//     }

//     if (!formElements.phoneNumber.value) {
//         document.getElementById('phoneNumber-error4').textContent = ' *';
//         isValid = false;
//     }

//     if (!formElements.message.value) {
//         document.getElementById('message-error4').textContent = ' *';
//         isValid = false;
//     }

//     if (isValid) {
//         // Show processing message
//         document.getElementById('processing-message').style.display = 'block';

    
//     }
// });

////////////////////////////////////////////////form 4 end 

// document.getElementById('contact-form5').addEventListener('submit', function(event) {
//     event.preventDefault(); // Prevent the form from submitting the traditional way

//     // Clear previous error messages
//     document.getElementById('name-error5').textContent = '';
//     document.getElementById('business-error5').textContent = '';
//     document.getElementById('email-error5').textContent = '';
//     document.getElementById('phoneNumber-error5').textContent = '';
//     document.getElementById('message-error5').textContent = '';

//     // Validate the form fields
//     var isValid = true;
//     var formElements = this.elements;

//     if (!formElements.name.value) {
//         document.getElementById('name-error5').textContent = ' *';
//         isValid = false;
//     }

//     if (!formElements.business.value) {
//         document.getElementById('business-error5').textContent = ' *';
//         isValid = false;
//     }

//     if (!formElements.email.value) {
//         document.getElementById('email-error5').textContent = ' *';
//         isValid = false;
//     }

//     if (!formElements.phoneNumber.value) {
//         document.getElementById('phoneNumber-error5').textContent = ' *';
//         isValid = false;
//     }

//     if (!formElements.message.value) {
//         document.getElementById('message-error5').textContent = ' *';
//         isValid = false;
//     }

//     if (isValid) {
//         // Show processing message
//         document.getElementById('processing-message5').style.display = 'block';

    
//     }
// });

////////////////////////////////////////////////form 5 end 

// document.getElementById('contact-form6').addEventListener('submit', function(event) {
//     event.preventDefault(); // Prevent the form from submitting the traditional way

//     // Clear previous error messages
//     document.getElementById('name-error6').textContent = '';
//     document.getElementById('business-error6').textContent = '';
//     document.getElementById('email-error6').textContent = '';
//     document.getElementById('phoneNumber-error6').textContent = '';
//     document.getElementById('message-error6').textContent = '';

//     // Validate the form fields
//     var isValid = true;
//     var formElements = this.elements;

//     if (!formElements.name.value) {
//         document.getElementById('name-error6').textContent = ' *';
//         isValid = false;
//     }

//     if (!formElements.business.value) {
//         document.getElementById('business-error6').textContent = ' *';
//         isValid = false;
//     }

//     if (!formElements.email.value) {
//         document.getElementById('email-error6').textContent = ' *';
//         isValid = false;
//     }

//     if (!formElements.phoneNumber.value) {
//         document.getElementById('phoneNumber-error6').textContent = ' *';
//         isValid = false;
//     }

//     if (!formElements.message.value) {
//         document.getElementById('message-error6').textContent = ' *';
//         isValid = false;
//     }

//     if (isValid) {
//         // Show processing message
//         document.getElementById('processing-message6').style.display = 'block';

    
//     }
// });

////////////////////////////////////////////////form 6 end 
  