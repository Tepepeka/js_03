document.querySelector('form').addEventListener('submit',(e) => {
  console.log(e);
  e.preventDefault()
  const form = e.currentTarget
  const data = new FormData(form)
  console.log(data.get('name'));
})

document.querySelector('input').addEventListener('change', (e) => {
  console.log('change');
})

document.querySelector('input').addEventListener('input', (e) => {
  console.log('input', e.currentTarget.value);
})

document.querySelector('input').addEventListener('keydown', (e) => {
  console.log('keydown', e);
})
//il existe aussi keypress et keyup

document.querySelector('input').addEventListener('focus', (e) => {
  console.log('focus', e);
})

document.querySelector('input').addEventListener('blur', (e) => {
  console.log('blur', e);
})
//c'est quand on quitte le focus

document.querySelector('input').addEventListener('blur', (e) => {
  console.log('blur', e);
})

//CHECKBOX
document.querySelector('input:nth-of-type(2)').addEventListener('change', (e) => {
  console.log(e.currentTarget.checked);
})

//SELECT
document.querySelector('select').addEventListener('change', (e) => {
  console.log(e.currentTarget.value, e.currentTarget.selectedOptions);
})

//EXO
/*
document.querySelectorAll('.spoiler').forEach(spoiler => {
  spoiler.addEventListener('click', e => {
    e.currentTarget.classList.remove('spoiler')
  })
})
*/

const spoilers = document.querySelectorAll('.spoiler')
function revealSpoiler() {
  spoilers.forEach(spoiler => spoiler.classList.remove('spoiler'))
}
spoilers.forEach(spoiler => {
  spoiler.addEventListener('click', revealSpoiler)
})