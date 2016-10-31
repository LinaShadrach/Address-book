// -------------Back-end---------------
function Contact(first, last) {
  this.firstName = first;
  this.lastName = last;
}

Contact.prototype.fullName = function(){
  return this.firstName + " " + this.lastName;
}




// --------------- Front-End---------------
$(document).ready(function(){
  $("form").submit(function(event){
    event.preventDefault();
    var firstNameInput = $("#new-first-name").val();
    var lastNameInput = $("#new-last-name").val();
    console.log(firstNameInput);
    var newContact = new Contact(firstNameInput, lastNameInput);
    $("#contacts").append("<li><span class = 'contact'>" + newContact.fullName() + "</span></li>");
    console.log(newContact);
    $("#all-contacts").show();
    $(".contact").last().click(function(){
      $("#show-contact").show();
      $("#show-contact h2").text(newContact.firstName);
      $(".first-name").text(newContact.firstName);
      $(".last-name").text(newContact.lastName);
    });
  });
});
