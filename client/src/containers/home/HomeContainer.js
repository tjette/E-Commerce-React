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
      this.setState({title: "This is home containers title"})
    }, 3000)
  }
  render() {
    return (
      <div>
        {
          this.state.title
          ? <Home title={this.state.title} />
          : <h1>No state yet from home title</h1>
        }

      </div>
    )
  }
}

export default HomeContainer;
