import React from 'react'

function DropDown() {
  return (
    <div class="dropdown">
  <button class="butons dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    Sección
  </button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Another action</a></li>
    <li><a class="dropdown-item" href="#">Something else here</a></li>
    <li><a class="dropdown-item" href="#">Something else here</a></li>
    <li><a class="dropdown-item" href="#">Something else here</a></li>
    <li><a class="dropdown-item" href="#">Something else here</a></li>
  </ul>
</div>
  )
}

export default DropDown;