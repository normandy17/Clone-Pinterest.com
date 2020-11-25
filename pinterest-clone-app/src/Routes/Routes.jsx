import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { Navbar } from '../Components/Navbar/Navbar'
import { Home } from '../Pages/Home'
import styled from 'styled-components'
import { DashBoard } from '../Pages/Dashboard'
import { Today } from '../Pages/Today'
import { TodayItem } from '../Pages/TodayItem'

const NavPositioner = styled.div`
    position: sticky;
    top : 0px;
`;

const Routes = () => {
    return (
        <div>
           <NavPositioner><Route path="/" render={()=><Navbar />} /></NavPositioner>
           <Switch>
                <Route path="/" exact render={()=><Home />} />
                <Route path="/today" exact render={()=> <Today/> } />
                <Route path="/today/:today_id" exact render={(props)=> <TodayItem {...props}/> }/>      
                <Route path="/following" exact render={()=><div style={{textAlign:"center"}}><img src="https://blog.apbbuilders.com/hubfs/Imported_Blog_Media/Blog%20Posts%20Featured%20Images/WIPAA-e1490930889545.jpg" alt="" width="100%"/></div>} />
                <Route path="/dashboard" exact render={(props)=><DashBoard {...props}/>} />
           </Switch>
        </div>
    )
}

export default Routes
