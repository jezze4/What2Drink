import React, {PureComponent} from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

class HomeModule extends PureComponent{

  handleOnClick(){
    console.log(`Clicked on ${this.props.link}`);
  }

  render(){
    return(
      <Paper classes={{root: 'home-module-root'}} style={{backgroundImage: this.props.image}}>
        <Typography className="home-module-title" >{this.props.title}</Typography>
        <Typography className="home-module-detail" >{this.props.details}</Typography>
      </Paper>
    );
  }
}

export default HomeModule;
