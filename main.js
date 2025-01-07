let popup = document.querySelector('.popup');


function closePopup() {
  
  popup.classList.remove('open-popup');
  setTimeout(() => {document.querySelector('.quote-box').style.display = 'block';},1500)
}

window.addEventListener('load',(event) =>{ event.preventDefault();

document.querySelector('.quote-box').style.display = 'none';
  popup.classList.add('open-popup')})