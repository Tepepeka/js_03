/*
const button = document.querySelector('button')
button.addEventListener('click', function(event){
 console.log(event.target, event.currentTarget);
})
*/

//JS doc pr avoir de l'autocompletion
/**
 * 
 * @param {PointerEvent} event
 */
function onButtonClick(event) {

  /*Empeche le comportement de base de l'event, exemple si c'est un lien, ca n'ira pas sur le lien au moment du click
  utile pr un formulaire pr empecher la soumission du form si ya des erreurs*/
  event.preventDefault()

  /*Evite la propagation, sinon quand je click sur le button il va aller voir si ya un listerner sur le button, puis sur la div, 
  puis sur le body, l'evenement se propage vers le haut*/
  event.stopPropagation()
  //console.log(this);
  //console.log(event.currentTarget);
  console.log('button click');
  //on vois tous ses parametres, position en X/Y, offset etc......
  console.log(event);
}

document.querySelectorAll('button').forEach(button => {
  button.addEventListener('click', onButtonClick, {
    once: true
  })
})

document.querySelector('div').addEventListener('click', () => {
  console.log('click div');
})

/* 
4 elements importants :
-> target
-> currentTarget
-> preventDefault()
-> stopPropagation()

addEventListener peut avoir 3 options cf. doc MDN
once : le listener va etre appelé que 1 seule fois cf. exemple
passive : appel jamais le preventDefault pour ameliorer les performance par exemple pr un scroll car si a chaque fois que
je defile l'ordinateur verifie si il ya un preventDefault ca va etre lent.
capute : inverse le syteme de propagation
*/