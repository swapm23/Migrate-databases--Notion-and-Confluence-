import React from 'react'

export default function Navbar() {
  return (
    <div>

<nav  class="navbar navbar-expand-lg bg-Dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">CONVERTER</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Change :</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Converter Mode
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Notion to Confluence</a></li>
            <li><a class="dropdown-item" href="#">Confluence to Notion</a></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>

    </div>
  )
}
