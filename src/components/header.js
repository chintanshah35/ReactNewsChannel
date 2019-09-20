import React, { Component } from 'react';

/*let styles= {
  header:{
    background:'#03a9f4'
  },
  logo:{
    color:'#fff',
    fontFamily:'Arial',
    textAlign: 'center'
  }
}*/

class Header extends Component{

  state ={
    active:'active',
    keywords:''
  };


  inputChange(event){
    const value = event.target.value === ''? 'not-active':'active';

    this.setState({
      active:value,
      keywords: event.target.value
    })

  }



  render(){

    console.log(this.state);
    console.log(this.props.keywords);

    return(
    //<header style={{background:`${this.state.active ? 'red' : 'blue'}`}}>
    <header className={this.state.active}>
      <div className="logo">Logo</div>
      <input onChange={(event)=>this.props.keywords(event)}/>
      <div>{this.state.keywords}</div>
    </header>

  )
}
}

export default Header;
