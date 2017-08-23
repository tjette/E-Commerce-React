import React, {Component} from 'react';
import {Home} from '../../components';

class HomeContainer extends Component {

  state = {
    title: undefined
  }

  componentDidMount(){
    this.getTitle()
  }

  getTitle = () => {

    setTimeout(() => {
      this.setState({title: "E-Commerce-React"})
    }, 3000)
  }
  render() {
    return (
      <div>
        {
          this.state.title
          ? <Home title={this.state.title} />
          :
          <div>
            <i className="homeLoadingIcon fa fa-refresh fa-spin fa-3x fa-fw"></i><h3 className="homeLoadingIcon">Loading</h3>

          </div>
        }

      </div>
    )
  }
}

export default HomeContainer;
