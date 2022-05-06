import React from 'react'
import "../style/agenda1.css"
function Agenda1() {
  return (
    <div class="card">
        <div class="card_header red">
            <div class="tittle">
                <div class="circle">1</div>
                <p>Agenda/Topic</p>
            </div>
            <div class="id">
                <p>SAAS-000</p>
                
            </div>
        </div>
        <div class="card_section">
            <p>Descripcion de la card</p>
        </div>
        <div class="card_footer">
            <p>Mis Actualizaciones</p>
            <p>14/07/2021</p>
        </div>
    </div>

  )
}

export {Agenda1}