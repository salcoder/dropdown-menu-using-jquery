// Problem: It look gross in smaller browser widths and small devices
// Solution: To hide the text links and swap them out with a more appropriate navigation

// Create select and append to menu
var $select = $("<select></select>");
$("#menu").append($select);

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
  console.log($anchor.text());

  // Option's value is the href
  $option.val($anchor.attr("href"));
  
  // Append option to select
  $select.append($option);

});
// Create button 
var $button = $("<button>Go</button>");
$("#menu").append($button);
// Bind click to button
$button.click(function () {
  // Go to select's location
  window.location = $select.val();
});
  
// Modify CSS to hide links on small resolutions and show button and select
  // Also hides select and button on larger resolutions
