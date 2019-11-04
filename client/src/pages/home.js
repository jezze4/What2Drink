import React, {PureComponent} from 'react';

import HomeModule from '../components/HomeModule';

class Home extends PureComponent {
  render(){
    return(
      <div className="home-container">
        <HomeModule
          title="Soft Drinks"
          details="Various kinds of soft drinks - from Coke to La Croix"
          link="/soft-drinks"
        />
      </div>
    );
  }
}

export default Home;
