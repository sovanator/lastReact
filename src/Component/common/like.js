import React, { Component } from 'react';

class Like extends Component {
    constructor(props){
    super(props)

    this.state = { 
        
     }
    }
  

    
    render() { 
        return (
            <React.Fragment>
               
                <i onClick={this.props.onLike} className={this.props.liked ? "fa fa-heart" :  "fa fa-heart-o"}></i>
               
            </React.Fragment>
          );
    }
}
 
export default Like;