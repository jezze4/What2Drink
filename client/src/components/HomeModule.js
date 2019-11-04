import React, {PureComponent} from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

class HomeModule extends PureComponent{

  handleOnClick(){
    console.log(`Clicked on ${this.props.link}`);
  }

  render(){
    return(
      <Paper classes={{root: 'home-module-root'}} style={{background: {this.props.image}}}>
        <Typography variant="h4">{this.props.title}</Typography>
        <Typography variant="body2">{this.props.details}</Typography>
      </Paper>
    );
  }
}

export default HomeModule;
