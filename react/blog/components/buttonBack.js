import React from 'react';

class ButtonBack extends React.Component{
    constructor(props){
        super(props);
    }
    goBack(){
        window.history.back();        
    }


    render(){
        return(
            <button className='btnBack' onClick={this.goBack}>Go back</button>
        );
    }
}

export default ButtonBack;