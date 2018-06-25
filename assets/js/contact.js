
(function ($) {
    "use strict";
    jQuery(document).ready(function ($) {
        $(document).on('submit','#contact_form_submit',function(e){
            e.preventDefault();
            
            var first_name = $('#first_name').val();
            var last_name = $('#last_name').val();
            var phone_number = $('#phone_number').val();
            var email = $('#email').val();
            var subject = $('#subject').val();
            var message = $('#message').val();

            if (!first_name) {
                 $('#first_name').removeClass('error');
                 $('#first_name').addClass('error').attr('placeholder', 'Please Enter Name');
             }else{
                 $('#first_name').removeClass('error');
             }
            if (!last_name) {
                 $('#last_name').removeClass('error');
                 $('#last_name').addClass('error').attr('placeholder', 'Please Enter Name');
             }else{
                 $('#last_name').removeClass('error');
             }
            if (!phone_number) {
                 $('#phone_number').removeClass('error');
                 $('#phone_number').addClass('error').attr('placeholder', 'Please Enter Name');
             }else{
                 $('#phone_number').removeClass('error');
             }
            if (!email) {
                 $('#email').removeClass('error');
                 $('#email').addClass('error').attr('placeholder', 'Please Enter Name');
             }else{
                 $('#email').removeClass('error');
             }
            if (!subject) {
                 $('#subject').removeClass('error');
                 $('#subject').addClass('error').attr('placeholder', 'Please Enter Name');
             }else{
                 $('#subject').removeClass('error');
             }
             if (!message) {
                  $('#message').removeClass('error');
                  $('#message').addClass('error').attr('placeholder', 'Please Enter Name');
              }else{
                  $('#message').removeClass('error');
              }

            
             if ( name && email && message ) {
              	$.ajax({
	                  type: "POST",
	                  url:'contact.php',
	                  data:{
                          'first_name': first_name,
                          'last_name': last_name,
                          'phone_number': phone_number,
                          'email': email,
                          'subject': subject,
                          'message': message
	                  },
	                  success:function(data){
                          $('#contact_form_submit').children('.email-success').remove();
                          $('#contact_form_submit').prepend('<span class="alert alert-success email-success">'+data+'</span>');
                          $('#first_name').val('');
                          $('#last_name').val('');
                          $('#phone_number').val('');
                          $('#email').val('');
                          $('#subject').val('');
                          $('#message').val('');
                          $('.email-success').fadeOut(3000);
	                  },
	                  error:function(res){}
	              });
              }else{
                 $('#contact_form_submit').children('.email-success').remove();
                 $('#contact_form_submit').prepend('<span class="alert alert-danger email-success">somenthing is wrong</span>');
                 $('.email-success').fadeOut(3000);
              }

            
            
        });
    })

}(jQuery));	
