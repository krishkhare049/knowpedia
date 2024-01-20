// const PAGE_SWIPER = new Swiper('.page_swiper', {
//     // Optional parameters
//     // direction: 'vertical',
//     loop: true,

// If we need pagination
// pagination: {
//   el: '.swiper-pagination',
// },

// Navigation arrows
// navigation: {
//   nextEl: '.swiper-button-next',
//   prevEl: '.swiper-button-prev',
// },

// And if we need scrollbar
// scrollbar: {
//   el: '.swiper-scrollbar',
// },
// });

// const swiper = new Swiper('.swiper', {
//     // Optional parameters
//     // direction: 'vertical',
//     loop: true,

//     // If we need pagination
//     pagination: {
//       el: '.swiper-pagination',
//     },

//     // Navigation arrows
//     navigation: {
//       nextEl: '.swiper-button-next',
//       prevEl: '.swiper-button-prev',
//     },

//     // And if we need scrollbar
//     scrollbar: {
//       el: '.swiper-scrollbar',
//     },
//   });


let home_page = document.getElementById("home_page");
let projects_page = document.getElementById("projects_page");
let contact_page = document.getElementById("contact_page");

let home_icon = document.getElementById("home_icon");
let projects_icon = document.getElementById("projects_icon");
let contact_icon = document.getElementById("contact_icon");

let smooth_scroll_to_top = document.getElementById("smooth_scroll_to_top");

let loader = document.getElementById("loader");
window.addEventListener("load", () => {
  loader.style.display = "none";
});

// window.addEventListener("scroll", () => {
//   if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
//     smooth_scroll_to_top.style.display = "flex";
//   }
//   else {
//     smooth_scroll_to_top.style.display = "none";

//   }
// });
document.body.addEventListener("scroll", () => {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    smooth_scroll_to_top.style.display = "flex";
  }
  else {
    smooth_scroll_to_top.style.display = "none";
  }
});

smooth_scroll_to_top.addEventListener("click", () => {
  // console.log("Scroll to top!");
  // window.scrollTo(0, 0);
  document.body.scrollTo(0, 0);
});


let check_essays = document.querySelectorAll(".check_essays");
let check_projects = document.querySelectorAll(".check_projects");
let check_contact = document.querySelectorAll(".check_contact");

check_essays.forEach(check_essays_element => {
  check_essays_element.addEventListener("click", () => {
    router.navigate("");
  });
});

check_projects.forEach(check_projects_element => {
  check_projects_element.addEventListener("click", () => {
    router.navigate("projects");
  });
});

check_contact.forEach(check_contact_element => {
  check_contact_element.addEventListener("click", () => {
    router.navigate("contact");
  });
});

