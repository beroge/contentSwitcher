jQuery(function () {
    function activateData(dataClassToShow, linkWidth) {
      jQuery(".data1, .data2, .data3, .data4, .data5")
        .removeClass("active")
        .css("display", "none");
      jQuery(dataClassToShow).css("display", "block");
  
      setTimeout(function () {
        jQuery(dataClassToShow).addClass("active");
      }, 1);
  
      jQuery("#rotmenu a").css("width", "230px");
      jQuery(this).css("width", linkWidth);
    }
  
    function setActiveLink(link) {
      jQuery("#rotmenu a").css("width", "230px");
      link.css("width", "260px");
    }
  
    // Extend the first link on page load
    var $firstLink = jQuery(".link1");
    activateData(".data1", "260px");
    setActiveLink($firstLink);
    jQuery("#rotmenu").css("background-color", "blue");
  
    $firstLink.click(function () {
      activateData(".data1", "260px");
      setActiveLink(jQuery(this));
      jQuery("#rotmenu, .rotator").css("background-color", "blue");
    });
  
    jQuery(".link2").click(function () {
      activateData(".data2", "260px");
      setActiveLink(jQuery(this));
      jQuery("#rotmenu").css("background-color", "red");
    });
  
    jQuery(".link3").click(function () {
      activateData(".data3", "260px");
      setActiveLink(jQuery(this));
      jQuery("#rotmenu").css("background-color", "blue");
    });
    jQuery(".link4").click(function () {
      activateData(".data4", "260px");
      setActiveLink(jQuery(this));
      jQuery("#rotmenu").css("background-color", "red");
    });
  
    jQuery(".link5").click(function () {
      activateData(".data5", "260px");
      setActiveLink(jQuery(this));
      jQuery("#rotmenu").css("background-color", "blue");
    });
    jQuery(".thumbnail").click(function() {
      var imageUrl = jQuery(this).data("image");
      openModal(imageUrl);
  });
  
  // Photo modal
  jQuery(".close").click(function() {
      closeModal();
  });
  
  jQuery("#myModal").click(function(event) {
      if (event.target === this) {
          closeModal();
      }
  });
  function openModal(imageUrl) {
    jQuery("#myModal").show();
    jQuery("#modalImage").attr("src", imageUrl);
  }
  
  function closeModal() {
    jQuery("#myModal").hide();
  }
  
  });
  
  
  
  
  