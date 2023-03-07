const first = function() {
  const footer = document.querySelector('footer')
  //console.log(footer);
  let i = 0
  const onFooterClick = function() {
    i++;
    console.log(`tepepeka ${i}`);
  }
  footer.addEventListener('click', onFooterClick)
}
first()


const second = function() {
  const hamburgerMenu = document.querySelector('.navbar-toggler')
  const navbarHeader = document.getElementById('navbarHeader')
  const onButtonClick = function() {
    navbarHeader.classList.toggle("collapse")
  }
  
  hamburgerMenu.addEventListener('click', onButtonClick)
}
second()


const third = function() {
  const card = document.querySelector('.card:first-of-type')
  const button = card.querySelector('.btn:first-of-type')
  const cardText = card.querySelector('.card-text')
  const onButtonClick = function() {
    //console.log(getComputedStyle(cardText).color);
    cardText.style.color = 'blueviolet'
  }
  button.addEventListener('click', onButtonClick)
}
third()


const fourth = function() {
  const card = document.querySelectorAll('.card')[1]
  const button = card.querySelectorAll('.btn')[1]
  const cardText = card.querySelector('.card-text')
  const onButtonClick = function() {
    if (cardText.style.color === 'blueviolet'){
      cardText.style.color = ''
    } else {
      cardText.style.color = 'blueviolet'
    }
  }
  button.addEventListener('click', onButtonClick)
}

fourth()


const fifth = function(){
  const navbar = document.querySelector('.navbar');
  const cdnLink = document.querySelector('link');
  const onNavbarDoubleClick = function() {
    if (cdnLink.disabled){
      cdnLink.disabled = false
    } else {
      cdnLink.disabled = true
    }
  }
navbar.addEventListener('dblclick', onNavbarDoubleClick)
//cliquer sur le petit point a cote de "JS et Event"
}

fifth()


const sixth = function(){
  const cards = document.querySelectorAll('')
}
