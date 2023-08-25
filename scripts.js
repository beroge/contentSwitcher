jQuery(document).ready(function() {

  function activateData(dataClassToShow, linkWidth) {
    jQuery(".data1, .data2, .data3, .data4, .data5")
      .removeClass("active")
      .css("display", "none");
      jQuery(dataClassToShow).css({
  display: 'flex',
  'flex-direction': 'column'
});

    setTimeout(function () {
      jQuery(dataClassToShow).addClass("active");
    }, 1);

    jQuery("#rotmenu a").css("width", "190px");
    jQuery(this).css("width", linkWidth);
  }

  function setActiveLink(link) {
    jQuery("#rotmenu a").css("width", "190px");
    link.css("width", "200px");
  }

  // Extend the first link on page load
  var $firstLink = jQuery(".link1");
  activateData(".data1", "200px");
  setActiveLink($firstLink);
  jQuery(".rotator, #rotmenu").css("background-color", "blue");

  $firstLink.click(function () {
    activateData(".data1", "200px");
    setActiveLink(jQuery(this));
    jQuery(".rotator, #rotmenu").css("background-color", "blue");
  });

  jQuery(".link2").click(function () {
    activateData(".data2", "200px");
    setActiveLink(jQuery(this));
    jQuery(".rotator, #rotmenu").css("background-color", "red");
  });

  jQuery(".link3").click(function () {
    activateData(".data3", "260px");
    setActiveLink(jQuery(this));
    jQuery(".rotator, #rotmenu").css("background-color", "blue");
  });
  jQuery(".link4").click(function () {
    activateData(".data4", "260px");
    setActiveLink(jQuery(this));
    jQuery(".rotator, #rotmenu").css("background-color", "red");
  });

  jQuery(".link5").click(function () {
    activateData(".data5", "260px");
    setActiveLink(jQuery(this));
    jQuery(".rotator, #rotmenu").css("background-color", "blue");
  });
  jQuery(".thumbnail").click(function() {
    var imageUrl = jQuery(this).data("image");
    openModal(imageUrl);
});

// Photo modal
function openModal(imageUrl) {
  jQuery("#myModal").fadeIn(800); // Use fadeIn with easing
  jQuery("#modalImage").attr("src", imageUrl);
}

function closeModal() {
  jQuery("#myModal").fadeOut(900, function() {
      jQuery("#modalImage").attr("src", ""); // Clear image source when faded out
  });
}

// Attach event handlers using event delegation
jQuery(document).on("click", ".rotator img", function() {
  var imageUrl = jQuery(this).data("image");
  openModal(imageUrl);
});

jQuery(document).on("click", ".close", function() {
  closeModal();
});

jQuery(document).on("click", "#myModal", function(event) {
  if (event.target === this) {
      closeModal();
  }
});

});

