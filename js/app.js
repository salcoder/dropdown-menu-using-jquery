// Problem: It look gross in smaller browser widths and small devices
// Solution: To hide the text links and swap them out with a more appropriate navigation

// Create select and append to menu
var $select = $("<select></select>");
$("#select-wrapper").append($select);

// Cycle over menu links and execute some code
$("#menu ul li a").each(function () {
  var $anchor = $(this);

  // Create an option
  var $option = $("<option></option>");

  // Deal with selected options depending on current page
  if($anchor.parent().hasClass('selected')) {
    $option.prop("selected", true);
  }  

  // Option's text is the text of link
  $option.text($anchor.text());

  // Option's value is the href
  $option.val($anchor.attr("href"));
  
  // Append option to select
  $select.append($option);

});

// Bind change listener to the select
$select.change(function () {
  // Go to the link
  window.location = $select.val();
});