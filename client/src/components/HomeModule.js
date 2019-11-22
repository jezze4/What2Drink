import React, {PureComponent} from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";


class HomeModule extends PureComponent{

  state = {
    cssExploded: undefined,
  }

  delayRedirect = event => {
    const { history: { push }, link } = this.props;
    event.preventDefault();
    setTimeout(()=>push(link), 300);
  }

  handleOnClick = (event) => {
    if(!this.state.cssExploded){
      this.setState({cssExploded: 'home-module-explode'})
    } else {
      this.setState({cssExploded: undefined})
    }
  }

  render(){
    const { cssExploded } = this.state;
    return(
      <Link to="/directory" onClick={this.delayRedirect} style={{textDecoration: 'none'}}>
        <Paper classes={{root: 'home-module-root ' + cssExploded}}
          onClick={this.handleOnClick}
          style={{
            background: 'linear-gradient(to bottom right, rgba(20,20,100,.2),rgba(0,0,50,.3),rgba(20,20,100,.2)), '
            +'url('+this.props.image+')'}}>
          <Typography className="home-module-title" >{this.props.title}</Typography>
          <Typography className="home-module-detail" >{this.props.details}</Typography>
        </Paper>
      </Link>
    );
  }
}

export default withRouter(HomeModule);
