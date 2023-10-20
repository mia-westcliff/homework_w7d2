$(document).ready(function() {
  $("td:not(:contains('Not Available'))").addClass("selectable");
  $(document).bind("click", function (e) {
      $(e.target).closest("td:not(:contains('Not Available'))").toggleClass("selected");
    })
}); 
$(document).ready(function () {
  const selectedActivities = [];

  $("td:contains('Not Available')").addClass("unselectable");
  $("td:not(:contains('Not Available'))").addClass("selectable");

  $("td.selectable").on("click", function () {
      const cellContent = $(this).text();
      const activityIndex = selectedActivities.indexOf(cellContent);

      if (activityIndex === -1) {
          selectedActivities.push(cellContent);
      } else {
          selectedActivities.splice(activityIndex, 1);
      }
      $("#cellContent").html(selectedActivities.join("<br>"));

      $("#cellModal").modal("show");
  });

  $("#getInfoButton").on("click", function () {
  });
});