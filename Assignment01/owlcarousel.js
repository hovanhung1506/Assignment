const c = document.querySelectorAll('.courses .course__main .course-wrapper > div');
c.forEach((i) => {
  i.className.split(' ').forEach((cname) => {
    if (cname.includes('course__')) {
      $(`.${cname}`).owlCarousel({
        loop: true,
        nav: true,
        responsive: {
          0: {
            items: 1,
          },
          768: {
            items: 2,
          },
          1024: {
            items: 3,
          },
          1280: {
            items: 4,
            margin: 20,
          },
        },
        dots: false,
      });
    }
  });
});

$('.banner__content').owlCarousel({
  nav: true,
  loop: true,
  responsive: {
    0: {
      items: 1,
    },
  },
  dots: true,
  navSpeed: 500,
  autoplay: true,
  autoplayTimeout: 5000,
  autoplayHoverPause: true,
  autoplaySpeed: 500,
});

$('.list__feedback').owlCarousel({
  loop: true,
  responsive: {
    0: {
      items: 1,
      margin: 20,
    },
  },
  dots: true,
});
