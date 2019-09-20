import  React from 'react';

class Footer extends React.Component{

constructor(props){
  super(props);

  console.log(this.props);
}
  render(){
    return(
      <footer>
      { this.props.footerText }
      </footer>
    )
  }
}

export default Footer;
