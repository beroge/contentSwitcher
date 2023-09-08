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

// List effects

const listItems = jQuery("#list li");
let currentIndex = 0;
const startButton = jQuery("#listEffect a");

function fadeInNextListItem() {
  if (currentIndex >= listItems.length) {
    return;
  }

  const currentItem = listItems.eq(currentIndex);

  // Use jQuery's animate method with linear easing to fade in the current item
  currentItem.animate({
    opacity: 1
  }, {
    duration: 1300,
    easing: 'linear',
    complete: function() {
      // Animation complete callback
      const spanElement = currentItem.find("span");
      typewriterEffect(spanElement);
      currentIndex++;
      fadeInNextListItem();
    }
  });
}

function typewriterEffect(element) {
  element.css("opacity", 1); // Make the span visible
  element.addClass("typewriter-text");
}

startButton.on("click", function() {
  currentIndex = 0;
  fadeInNextListItem();
});

// have button with a class of btn reveal popouts with a class of ess by removing the class hidethis  when it is clicked
jQuery(".btn1, .btn2, .btn3, .btn4").click(function() {
  if (jQuery(this).hasClass("btn1")) {
    jQuery(".ess").removeClass("hidethis");
    jQuery(".adv, .prem").addClass("hidethis");
  } else if (jQuery(this).hasClass("btn2")) {
    jQuery(".adv, .ess").removeClass("hidethis");
    jQuery(".prem").addClass("hidethis");
  } else if (jQuery(this).hasClass("btn3")) {
    jQuery(".prem, .adv, .ess").removeClass("hidethis");
  } else if (jQuery(this).hasClass("btn4")) {
    jQuery(".prem, .adv, .ess").removeClass("hidethis");
    jQuery(".ser").addClass("hidethis");
  }
});



// accordian

var popout = {
  html: {
     popouts: document.querySelectorAll('.popout')
  },
  popouts: [],
  init: function(){
     this.getPopouts()
     this.addEvents()
     this.closeAll()
  },
  getPopouts: function(){
     this.popouts = []
     var popouts = document.querySelectorAll('.popout')
     for(var i = 0; i < popouts.length; i++){
        this.popouts.push({
           container: popouts[i],
           title: popouts[i].getElementsByClassName('title')[0],
           text: popouts[i].getElementsByClassName('text')[0]
        })
     }
  },
  addEvents: function(){
     var that = this
     for(var popout of this.popouts){
        popout.title.addEventListener('click', function(){
           that.closeAll()
           this.parentElement.classList.toggle('close')
        })
     }
  },
  open: function(id){
     this.popouts[id].container.classList.remove('close')
  },
  close: function(id){
     this.popouts[id].container.classList.add('close')
  },
  closeAll: function(){
     for(var popout of this.popouts){
        popout.container.classList.add('close')
     }
  },
  openAll: function(){
     for(var popout of this.popouts){
        popout.container.classList.remove('close')
     }
  }
}

popout.init()

setTimeout(function(){ popout.close(0) }, 500)
// setTimeout(function(){ popout.close(0); popout.open(1) }, 1000)
// setTimeout(function(){ popout.close(1); popout.open(2) }, 2000)
// setTimeout(function(){ popout.close(2); popout.open(0) }, 3000)

});

