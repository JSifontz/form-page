const $dropdown = document.querySelector('.select')
const $dropdownList = document.querySelector('ul.optList')
const $listElements = document.querySelectorAll('.option')

$dropdown.addEventListener('click', toggleDropdown)

// this will show or hide the list
function toggleDropdown () {
  $dropdownList.classList.toggle('hidden')
}


$listElements.forEach( function (listEl) {
  listEl.addEventListener('click', selectElement)
})

// lets change the text of the span
// the element selected from the list
function selectElement (listEl) {
  const elementSelected = document.querySelector('span.value')
  elementSelected.innerHTML = listEl.target.innerHTML
  listEl.target.classList.add('highlight')
}

// to remove any highlight class
// and highlight the element selected 
function highlight (option) {
  $listElements.forEach(clearHighlight)

  option.target.classList.add('highlight')
}

function clearHighlight (listEl) {
  listEl.classList.remove('highlight')
}

$listElements.forEach( function (option) {
  option.addEventListener('mouseover', highlight)
})

// if the list is displayed and we click outside out it,
// the list must close it due unfocus event
// function deactiveDropdown(dropdown){
//   if (document.)
// }

$dropdown.addEventListener('blur', function(){
  if ($dropdownList.classList.contains('hidden')) return

  $dropdownList.classList.add('hidden')
})