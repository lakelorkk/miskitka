let phrases = [
    { text: 'будь всегда счастливой ', image: 'https://code.s3.yandex.net/web-code/procrastinate/1.gif' },
    { text: 'путешествуй много', image: 'https://code.s3.yandex.net/web-code/procrastinate/2.png' },
   
  
    { text: 'исследуй новое!', image: 'https://code.s3.yandex.net/web-code/procrastinate/6.png' },
  
    { text: 'не грусти!', image: 'https://code.s3.yandex.net/web-code/procrastinate/8.png' }, ]
  
  
  function getRandomElement(arr) {
    let randIndex = Math.floor(Math.random() * arr.length);
    return arr[randIndex];
  }
  
  let button = document.querySelector('.button');
  let phrase = document.querySelector('.phrase');
  let advice = document.querySelector('.advice');
  let image = document.querySelector('.image');
  
  button.addEventListener('click', function () {
    let randomElement = getRandomElement(phrases);
    smoothly(phrase, 'textContent', randomElement.text)
    smoothly(image, 'src', randomElement.image)
  
    if (randomElement.text.length > 40) {
      advice.style.fontSize = '33px';
    } else {
      advice.style.fontSize = '42px';
    }
  });
  for (let i = 0; i <= 2; i = i + 1) {smoothly(phrase, 'textContent', phrases[i].text);(phrases[i])
    smoothly(image, 'src', phrases[i].image);
  } 