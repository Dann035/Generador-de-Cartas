
window.onload = function () {

  const $ = (selector) => document.querySelector(selector);
  const $symbolTop = $('.symbolTop');
  const $symbolBottom = $('.symbolBottom');
  const $valueCard = $('.valueCard');

  console.log($symbolBottom)
  console.log($symbolTop)
  console.log($valueCard)

  const symbolCard = ['♦', '♥', '♠', '♣'];
  const valueCard = ['K', 'Q', 'J', '10', '9', '8', '7', '6', '5', '4', '3', '2', 'A'];

  const randomNumber = (array) => Math.floor(Math.random() * array.length);

  const randomSymbol = randomNumber(symbolCard);
  const randomValue = randomNumber(valueCard);

  $symbolTop.innerHTML = symbolCard[randomSymbol]
  $symbolBottom.innerHTML = symbolCard[randomSymbol];
  $valueCard.innerHTML = valueCard[randomValue];


  if (symbolCard[randomSymbol] === '♦' || symbolCard[randomSymbol] === '♥') {
    $symbolBottom.classList.add('textRed')
    $symbolTop.classList.add('textRed')

  } else {
    console.log('negro');
  }


};