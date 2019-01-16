$(document).ready(function() {
  $("#formOne").submit(function(event) {
    var firstNameInput = $("input#firstName").val();
    var middleInitialInput = $("input#middleInitial").val();
    var lastNameInput = $("input#lastName").val();
    var fullName = firstNameInput + " " + middleInitialInput + " " + lastNameInput;

    $("#personName").append(fullName);

    $("#letter").show();

    event.preventDefault();
  });
});
