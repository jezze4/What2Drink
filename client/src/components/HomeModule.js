import React, {PureComponent} from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

class HomeModule extends PureComponent{

  state = {
    cssExploded: undefined,
  }

  handleOnClick = (event) => {
    if(!this.state.cssExploded){
      this.setState({cssExploded: 'home-module-explode'})
    } else {
      this.setState({cssExploded: undefined})
    }
    // event.target.classList.add("home-module-explode");
  }

  render(){
    const { cssExploded } = this.state;
    return(
      <Paper classes={{root: 'home-module-root ' + cssExploded}}
        onClick={this.handleOnClick}
        style={{
          background: 'linear-gradient(to bottom right, rgba(20,20,100,.2),rgba(0,0,50,.3),rgba(20,20,100,.2)), '
          +'url('+this.props.image+')'}}>
        <Typography className="home-module-title" >{this.props.title}</Typography>
        <Typography className="home-module-detail" >{this.props.details}</Typography>
      </Paper>
    );
  }
}

export default HomeModule;
