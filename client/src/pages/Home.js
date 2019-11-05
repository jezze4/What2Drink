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
            title="Soft Drinks"
            details="Various kinds of soft drinks - from Coke to La Croix"
            link="/soft-drinks"
            image={ImageSodas}
          />
        </Grid>
        <Grid item sm={3}>
          <HomeModule
            title="Alcohol"
            details="From beer to fruity mixed drinks"
            link="/soft-drinks"
            image={(isMobile)?ImageAlcohol2:ImageAlcohol2}
          />
        </Grid>
        <Grid item sm={3}>
          <HomeModule
            title="Teas"
            details="Because, why not"
            link="/soft-drinks"
            image={ImageTeas}
          />
        </Grid>
      </Grid>
    );
  }
}

export default Home;
