import React from 'react'
import MenuItem from './menuItem'
import MenuTree from './menuTree'

export default props => (
    <ul className='sidebar-menu'>
        <MenuItem path='#' label='Dashboard' icon='dashboard'></MenuItem>
        <MenuTree label='Cadastro' icon='edit'>
            <MenuItem path='#billingCycle'icon="usd" label="Ciclos de Pagamentos" ></MenuItem>
        </MenuTree>
    </ul>

)