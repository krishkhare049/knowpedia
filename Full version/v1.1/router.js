


const router = new Navigo("/", { hash: true });

// router.hooks({
//   before(done, match) {
//   },
// leave(done, match) {
// }
// });

// Page-s routing-

router.navigate("/");



router
    .on("/", () => {

        console.log("HOME");

        home_icon.classList.add("active_nav_icon");
        projects_icon.classList.remove("active_nav_icon");
        contact_icon.classList.remove("active_nav_icon");

        home_page.classList.add("active_page");
        projects_page.classList.remove("active_page");
        contact_page.classList.remove("active_page");

        // Scroll body to top-
        document.body.scrollTo(0, 0);

        // PAGE_SWIPER.slideTo(0, 0);

    })
    .on("/projects", () => {

        console.log("PROJECTS");

        home_icon.classList.remove("active_nav_icon");
        projects_icon.classList.add("active_nav_icon");
        contact_icon.classList.remove("active_nav_icon");

        home_page.classList.remove("active_page");
        projects_page.classList.add("active_page");
        contact_page.classList.remove("active_page");

        // Scroll body to top-
        document.body.scrollTo(0, 0);

        // PAGE_SWIPER.slideTo(1, 0);

    })
    .on("/contact", () => {

        console.log("CONTACT");

        home_icon.classList.remove("active_nav_icon");
        projects_icon.classList.remove("active_nav_icon");
        contact_icon.classList.add("active_nav_icon");

        home_page.classList.remove("active_page");
        projects_page.classList.remove("active_page");
        contact_page.classList.add("active_page");

        // Scroll body to top-
        document.body.scrollTo(0, 0);

        // PAGE_SWIPER.slideTo(4, 0);

    });

home_icon.addEventListener("click", () => {

    router.navigate("");

});

projects_icon.addEventListener("click", () => {

    router.navigate("projects");

});

contact_icon.addEventListener("click", () => {

    router.navigate("contact");

});