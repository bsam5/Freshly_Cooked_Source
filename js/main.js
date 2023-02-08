let listNav = document.querySelectorAll("header ul li"),
  listFood = document.querySelectorAll(".list-food div"),
  menuFood = document.querySelectorAll("#all,#break-fast,#lunch ,#drinks,#desserts,#fastfood"),
  inputSearch = document.querySelector(".input-search"),
  imgSearch = document.querySelector(".img-search"),
  heart = document.querySelectorAll(".name-food svg path"),
  cunterTime = document.querySelector(".cunter-time"),
  listCuntry1 = document.querySelectorAll(".list-1 li"),
  listCuntry2 = document.querySelectorAll(".list-2 li"),
  icons = document.querySelectorAll(".icons"),
  listMenu = document.querySelectorAll(".menu-nav ul li"),
  index;



////////////////////// star button /////////////////////////////////////////////////

icons.forEach((e) => {
  var divchildren = e.querySelectorAll('path')
  divchildren.forEach((e) => {
    e.onclick = () => {
      index = e.getAttribute("data-id");
      let node = e.parentElement.parentElement.querySelectorAll('path');
      node.forEach((e, key) => {
        e.classList.remove("icons-svg");
        e.classList.remove("icons-svg-hover");
        if (key < index) {
          e.classList.remove("icons-svg-hover");
          e.classList.add("icons-svg");
        }
      })
    }
  })

})


/////////////////////////////////////
function addActive(arr) {
  arr.forEach((e) => {
    e.onclick = function () {
      arr.forEach((el) => {
        el.classList.remove("active");
      })
      e.classList.add("active");
    }
  })
}
///////////////////////////////////////////

addActive(listNav);
addActive(listCuntry1);
addActive(listCuntry2);
addActive(listMenu)
////////////////  list food  ///////////////////////////

listFood.forEach((e) => {
  e.onclick = _ => {
    listFood.forEach((el) => {
      el.classList.remove("active");
    })
    e.classList.add("active");
    menuFood.forEach((m) => {

      if (m.getAttribute("id") == e.getAttribute("data-id")) {
        menuFood.forEach((me) => {
          me.classList.add("hidden");
        })
        m.classList.remove("hidden");
      }
    })
  }
})
/////////////////////  button search  //////////////////////
imgSearch.onclick = _ => inputSearch.focus();
///////////////////  favorite button ////////////////////////
heart.forEach((e) => {
  e.onclick = _ => {
    e.classList.toggle("pink-svg");
    e.classList.toggle("white-svg");
  }
})

////////////////  time range   /////////////////////
let minute = 15,
  second = 20;
cunterTime.innerHTML = `${minute}<sup> m</sup> : ${second}<sup> s</sup>`;
let time = setInterval(function () {
  if (second > 1 && second > 10) {
    second -= 1;
  } else if (second == 1 && minute !== 0) {
    minute -= 1;
    second = 60;
  } else if (second > 1 && second <= 10) {
    second -= 1;
    second = "0" + second;
  }

  cunterTime.innerHTML = `${minute}<sup> m</sup>:${second}<sup> s</sup>`;
  if (second == 0 && minute == 0) {
    clearInterval(time);
    cunterTime.innerHTML = "Time Is Over";
  }
}, 1000);

//////////      rang slide ////////////////////

$(document).ready(function () {
  var initialValues = [15, 75],
    updateValue = function (ui) {
      var price = "$ " + ui.value;
      $(ui.handle).attr("data-value", price);
    };

  $(".slider-range").slider({
    min: 0,
    max: 99,
    step: 1,
    range: true,
    values: [15, 75],
    create: function (event, ui) {
      $.each(initialValues, function (i, v) {
        updateValue({
          value: v,
          handle: $(".ui-slider-handle").eq(i),
        });
      });
    },
    slide: function (event, ui) {
      updateValue(ui);
    },
  });
});


/////////////////////////////////////////////////////////////////
$(document).ready(function () {
  searchMenu = $("#serach-menu");
  headerMenu = $("#header-menu");
  imgIcons = $("#header-menu .menu img");
  hDivMenu = $(".menu-nav");
  sDivMenu = $(".div-menu");
  sDivMenu = $(".div-menu");
  layer = $(".layer");


  layer.on("click", function () {
    hDivMenu.css("transform", "translateX(116%)");
    imgIcons.css("transform", "rotate(180deg)");
    $(this).hide();
    
  });

  headerMenu.click(() => {
    
    hDivMenu.css("transform", "translateX(7%)");
    imgIcons.css("transform", "rotate(180deg)");
    layer.show();
  })

  searchMenu.click(() => {
    sDivMenu.slideDown();
    sDivMenu.removeClass("hide");
  })

  $(".close").click(function (e) {

    if (e.currentTarget.getAttribute("data-name") == "search-menu") {
      sDivMenu.addClass("hide");
      sDivMenu.slideUp();
    } else {
      hDivMenu.css("transform", "translateX(116%)");
      imgIcons.css("transform", "rotate(-180deg)");
      
      layer.hide();
    }
  });
});
headerNav = document.querySelector("header ul");
headerIconsMenu = document.getElementById("header-menu");

window.onresize = function(){
  if (window.innerWidth < '890') {
    headerNav.classList.add("hidden");
    headerIconsMenu.classList.remove("hidden");
  } else {
    headerNav.classList.remove("hidden");
    headerIconsMenu.classList.add("hidden");
  }
}
