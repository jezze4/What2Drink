import React, {PureComponent} from 'react';
import Grid from '@material-ui/core/Grid';

import HomeModule from '../components/HomeModule';

import ImageSodas from '../assets/home_coke.jpg';
// import ImageAlcohol from '../assets/home_cocktail.jpg';
import ImageAlcohol2 from '../assets/home_mojitos.jpg';
import ImageTeas from '../assets/home_icedtea.jpg';

class Home extends PureComponent {

  render(){
    const { isMobile } = this.props;
    if(isMobile) console.log("Home is mobile");
    return(
      <Grid
        container
        className={(isMobile)?"home-container-mobile": "home-container"}
        direction={(isMobile)?"column":"row"}
        justify="space-evenly">
        <Grid item sm={3}>
          <HomeModule
            title="soft drinks"
            details="From Coke to La Croix"
            link="/softdrinks"
            image={ImageSodas}
          />
        </Grid>
        <Grid item sm={3}>
          <HomeModule
            title="alcohol"
            details="From beer to fruity mixed drinks"
            link="/alcohol"
            image={(isMobile)?ImageAlcohol2:ImageAlcohol2}
          />
        </Grid>
        <Grid item sm={3}>
          <HomeModule
            title="teas"
            details="Because, why not"
            link="/teas"
            image={ImageTeas}
          />
        </Grid>
      </Grid>
    );
  }
}

export default Home;
