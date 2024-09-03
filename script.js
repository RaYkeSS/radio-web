const searchBtnOpen = document.querySelector('.search__btn-open');
const seacrhForm = document.querySelector('.search__form');
const searchBtnClose = document.querySelector('.search__btn-close');

searchBtnOpen.addEventListener('click', function(){seacrhForm.style.display='block'; searchBtnOpen.style.display='none'});
searchBtnClose.addEventListener('click', function(){seacrhForm.style.display='none'; searchBtnOpen.style.display='block'});
