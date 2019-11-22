import React, {PureComponent} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import {withRouter, Link} from 'react-router-dom';

class AppNavbar extends PureComponent {

  render(){
    var value = this.props.location.pathname;
    if (value !== "/about" && value !== "/contact") value = '/'
    return(
      <AppBar color="default" classes={{root: 'appbar-root'}}>
        <Toolbar>
          <Typography variant="h5">What2Drink</Typography>

          <Tabs
            classes={{root: 'nav-tabs-root', indicator: 'nav-tabs-indicator'}}
            value={value}>
            <Tab
            classes={{root: 'nav-tab-root', selected: 'nav-tab-selected'}}
            label="Home"
            component={Link}
            to="/"
            value="/"
            />
            <Tab
            classes={{root: 'nav-tab-root', selected: 'nav-tab-selected'}}
            label="About"
            component={Link}
            to="/about"
            value="/about"
            />
            <Tab
            classes={{root: 'nav-tab-root', selected: 'nav-tab-selected'}}
            label="Contact"
            component={Link}
            to="/contact"
            value="/contact"
            />
          </Tabs>


          {/* <div className="appbar-links">
            <Link
              className={'appbar-link ' + ((value==="/about")?'link-active':'')}
              to="/about"
              onClick={(e)=>this.handleChange(e, '/about')}
              >
              About
            </Link>
            <Link
              className={'appbar-link ' + ((value==="/contact")?'link-active':'')}
              to="/contact"
              onClick={(e)=>this.handleChange(e, '/contact')}
              >
              Contact
            </Link>
          </div> */}
        </Toolbar>
      </AppBar>
    );
  }
}

export default withRouter(AppNavbar);
