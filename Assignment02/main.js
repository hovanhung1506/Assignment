window.addEventListener('load', function () {
  const barsMobile = document.querySelector('.icon__bars-m');
  const iconCloseBarsMobile = document.querySelector('.icon-close');
  const navMobile = document.querySelector('.navbar__mobile');
  const navMobileContent = document.querySelector('.navbar__mobile__content');
  const searchMobile = document.querySelector('.icon__search-m');
  const search = document.querySelector('.search .icon-search');
  const backTop = document.querySelector('.back-to-top');

  function debounce(fn, ms) {
    let timer;

    return function () {
      const args = arguments;
      const context = this;

      if (timer) clearTimeout(timer);

      timer = setTimeout(() => {
        fn.apply(context, args);
      }, ms);
    };
  }

  barsMobile.addEventListener('click', function () {
    navMobile.classList.add('active');
    navMobileContent.classList.add('active');
  });

  iconCloseBarsMobile.addEventListener('click', function () {
    navMobileContent.classList.remove('active');
    navMobile.classList.remove('active');
  });

  function toggleSearch() {
    searchMobile.addEventListener('click', function () {
      const searchMobileContent = document.querySelector('.search-mobile');
      searchMobileContent.classList.toggle('active');
    });

    search.addEventListener('click', function () {
      const searchDesktop = document.querySelector('.search-desktop');
      searchDesktop.classList.toggle('active');
    });
  }

  document.body.addEventListener('click', function (e) {
    if (
      !e.target.closest('.search') &&
      !e.target.closest('.icon__search-m') &&
      !e.target.closest('.search-mobile')
    ) {
      const searchDesktop = document.querySelector('.search-desktop');
      const searchMobileContent = document.querySelector('.search-mobile');
      searchDesktop.classList.remove('active');
      searchMobileContent.classList.remove('active');
    }
  });

  function backToTop() {
    window.addEventListener(
      'scroll',
      debounce(function () {
        if (document.body.scrollTop > 60 || document.documentElement.scrollTop > 60) {
          backTop.classList.add('active');
        } else {
          backTop.classList.remove('active');
        }
      }, 200)
    );

    backTop.addEventListener('click', function () {
      window.scrollTo(0, 0);
    });
  }
  toggleSearch();
  backToTop();
});
