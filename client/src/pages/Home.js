import React, {PureComponent} from 'react';
import Grid from '@material-ui/core/Grid';

import HomeModule from '../components/HomeModule';

import ImageSodas from '../assets/home_coke.jpg';

class Home extends PureComponent {
  render(){
    return(
      <Grid container className="home-container" direction="row" justify="space-around">
        <Grid item sm={3}>
          <HomeModule
            title="Soft Drinks"
            details="Various kinds of soft drinks - from Coke to La Croix"
            link="/soft-drinks"
            image={ImageSodas}
          />
        </Grid>
        <Grid item sm={3}>
          <HomeModule
            title="Soft Drinks"
            details="Various kinds of soft drinks - from Coke to La Croix"
            link="/soft-drinks"
            image={ImageSodas}
          />
        </Grid>
        <Grid item sm={3}>
          <HomeModule
            title="Soft Drinks"
            details="Various kinds of soft drinks - from Coke to La Croix"
            link="/soft-drinks"
            image={ImageSodas}
          />
        </Grid>
      </Grid>
    );
  }
}

export default Home;
