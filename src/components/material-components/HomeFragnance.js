import React from 'react'
import { withRouter } from 'react-router'

class HomeFragnance extends React.Component{
  
    render(){
        const {history} = this.props
        return(
            <div onClick={()=>history.push('home')}>HomeFragnance</div>
        )
    }
}

export default withRouter(HomeFragnance)