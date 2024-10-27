import React from 'react'
import SidebarApp from '../sidebarComponent/sidebar'

const Layout = ({children}) => {
  return (
    <div style={{display:"flex",gap:"10px"}}>
        <SidebarApp/>
        <div>

        {children}
        </div>
      
    </div>
  )
}

export default Layout
