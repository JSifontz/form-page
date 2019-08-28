const $dropdown = document.querySelector('.select')
const $dropdownList = document.querySelector('ul.optList')
const $listElements = document.querySelectorAll('.option')
const $nativeSelect = document.querySelector('select')

// this will show or hide the list
function toggleDropdown () {
  $dropdownList.classList.toggle('hidden')
}

// this function update the value displayed of the custom widget and
// synchronizes with the native widget
function updateValue (listEl, index) {
  const elementSelected = document.querySelector('span.value')
  elementSelected.innerHTML = listEl.innerHTML
  listEl.classList.add('highlight')
  $nativeSelect.selectedIndex = index
}

// to remove any highlight class
// and highlight the element selected 
function highlight (listEl) {
  $listElements.forEach(clearHighlight)
  listEl.target.classList.add('highlight')
}

function clearHighlight (listEl) {
  listEl.classList.remove('highlight')
}

// if the list is displayed and we click outside out it,
// the list must close it due unfocus event
function deactiveDropdown(dropdown){
  if ($dropdownList.classList.contains('hidden')) return
  
  $dropdownList.classList.add('hidden')
}

$dropdown.addEventListener('blur', deactiveDropdown)
$dropdown.addEventListener('click', toggleDropdown)

$listElements.forEach( function (listEl, index) {
  listEl.addEventListener('click', function(ev) {
    updateValue(listEl, index)
  })

  listEl.addEventListener('mouseover', highlight)
})
