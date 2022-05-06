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
        <p>description of what is done here</p>
        </div>
        <div class="card_footer">
        <p>last Updated</p>
    <p>3/8/2020</p>
        </div>
    </div>

  )
}

export {Agenda1}