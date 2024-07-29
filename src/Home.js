import React from 'react'
import './HomePage.css'
function Home() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-light fixed-top" >
        <div className='container-fluid'>
            <button className='navbar-brand'>
                <img src='https://t4.ftcdn.net/jpg/04/06/91/91/360_F_406919161_J0pGxe1sewqnk5dnvyRS77MKmEd6SVac.jpg' class="logo" alt=''></img>
                <h5>MeeVickee</h5>
            </button>
        </div>
        <div className='conatiner-fluid' id='div2'>
        <ul class="navbar-nav">
                <div>
                <li class="nav-item">
                    <a class="nav-link text-dark active" href="/">HOME</a>
                </li>
                </div>
                <div>
                <li class="nav-item">
                    <a class="nav-link text-dark" href="/addart">ADDARTIST</a>
                </li>
                </div>
                <div>
                <li class="nav-item">
                    <a class="nav-link text-dark" href="/viewart">VIEWARTIST</a>
                </li>
                </div>
            </ul>
        </div>
      </nav>
    </div>
  )
}

export default Home
