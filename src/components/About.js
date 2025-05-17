import React from "react";

class About extends React.Component{
    constructor(props){
        super(props)
        
    }

    render(){
        return(
            <div className="user-card">
                <h2>{this.props.user.name}</h2>
                <h2>{this.props.user.location}</h2>
                <h2>{this.props.user.contact}</h2>
            </div>
        )
    }
}

export default About