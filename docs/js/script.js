
document.addEventListener('DOMContentLoaded', function () {

  // Burger
  document.querySelector('#burger').addEventListener('click', function () {
    document.querySelector('#burger-menu').classList.add('is-active')
  })

  document.querySelector('#menu-close-btn').addEventListener('click', function () {
    document.querySelector('#burger-menu').classList.remove('is-active')
  })

  // Search input
  const searchInput = document.querySelector('#search-input');
  document.querySelector('#search-btn').addEventListener('click', function(e) {
    e.preventDefault();
    if (searchInput.classList.contains('header-search__container--visible')) {
      searchInput.classList.remove('header-search__container--visible')
    } else {
      searchInput.classList.add('header-search__container--visible')
    }

  })

  // Swiper
  const swiper = new Swiper('.swiper-container', {
    direction: 'horizontal',
    loop: true,

    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });


  // Tabs
  document.querySelectorAll('.tabs__btn').forEach(function (tabsBtn) {
    tabsBtn.addEventListener('click', function (event) {
      const path = event.currentTarget.dataset.path
      console.log(path)

      document.querySelectorAll('.how-tab__content').forEach(function (tabContent) {
        tabContent.classList.remove('how-tab__content__active')
      })

      document.querySelector(`[data-target="${path}"]`).classList.add('how-tab__content__active')
    })
  })

  // Accordion
    $(function () {
      $("#accordion").accordion({
        collapsible: true
      });
    });
})

