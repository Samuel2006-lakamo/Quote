//popup script

let popup = document.querySelector('.popup');


function closePopup() {

  popup.classList.remove('open-popup');
  setTimeout(() => { document.querySelector('.quote-box').style.display = 'block'; }, 1500)
}

window.addEventListener('load', (event) => {
  event.preventDefault();

  document.querySelector('.quote-box').style.display = 'none';
  popup.classList.add('open-popup')
});
//popup script end


const quote = document.getElementById('quote');
const author = document.getElementById('author');
const apiKey = 'bNmHgMa2bna5kRi2//DGGA==FPPiYVjzCXBQAq8y'

async function getQuote() {
  const apiurl = `c`;

  try {
        const response = await fetch('https://api.api-ninjas.com/v1/quotes', {
      method: 'GET',
      headers: {
        'X-Api-Key': 'bNmHgMa2bna5kRi2//DGGA==FPPiYVjzCXBQAq8y',
        'Content-Type': 'application/json'
      }
    });

    // Check if the response is successful
    if (!response.ok) {
      throw new Error('Failed to fetch the quote');
    }

    const datas = await response.json();
    console.log(datas);
    datas.forEach(data => {
      quote.textContent = data.quote;
      author.textContent = data.author;
    });

    // Set the quote and author text
    //author.innerText = data.author;
  } catch (e) {
    console.log(e);
    quote.innerText = 'Failed to load quote. Please try again later.';
    author.innerText = '';
  }
}


getQuote();