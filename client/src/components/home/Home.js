import React from 'react';

const Home = (props) => {
  return (
    <div className="bodyHome">
    <div className="homeTitleDiv">
      <h1 className="">{props.title}</h1>
    </div>
    <div>
      <img className="fishImage" src="http://www.threeforksranch.com/wp-content/gallery/activities-fly-fishing/FlyFishing.jpg" />
    </div>
    </div>

  )
}

export default Home;
