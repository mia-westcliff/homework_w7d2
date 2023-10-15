$(document).ready(function() {
    $("td:not(:contains('Not Available'))").addClass("selectable");
    $(document).bind("click", function (e) {
        $(e.target).closest("td:not(:contains('Not Available'))").toggleClass("selected");
      })
  });  