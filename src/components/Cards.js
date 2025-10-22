import React from 'react'
import CardItem from './CardItem'
import './Cards.css'
function Cards() {
  return (
    <div className='cards' id='myProject'>
        <h1>My Profile</h1>
        <div className="cards__container">
            <div className="cards__wrapper">
                <ul className="cards__items">
                    <CardItem
              src='Samsung.webp'
              text='Developed an AI-powered Elephant Detection System, awarded First Place in the Samsung Solve for Tomorrow Thailand 2024 competition.'
              path='https://www.solvefortomorrow.in.th/galleries/13997/'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='SPC.png'
              text='Designed a sensor-based device that monitors and adjusts filament extrusion in real time for precise diameter control.'
              path='/Abstract_SPC.pdf'
              isPdf={true}
            />
            <CardItem
              src='cansat.png'
              text='Designed and launched a can-sized satellite prototype — Finalist and Scientific Award Winner at Thailand CANSAT-ROCKET 2023.'
              path='/'
            />
                </ul>
            </div>
        </div>

    </div>
  )
}

export default Cards