import React, {PureComponent} from 'react';
import { withRouter } from "react-router";
import Paper from "@material-ui/core/Paper";

class Directory extends PureComponent {


  renderMobile(){

  }

  render(){
    return(
      <Paper style={{background: 'white', height: '100%'}}>
        <h1>DIRECTORY</h1>
        <h2>Load data for {this.props.match.params.directory}</h2>
      </Paper>
    );
  }
}

export default withRouter(Directory);
