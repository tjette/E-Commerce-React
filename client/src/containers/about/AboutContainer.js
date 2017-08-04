import React from 'react';
import {About} from '../../components'

class AboutContainer extends React.Component {

  state = {
    title: undefined
  }

  componentDidMount(){
    this.setTitle();
  }

  setTitle = () => {
    setTimeout(() => {
      this.setState({title: "This is about containers title"})
    }, 3000)
  }
  render(){
    return (
      <div>
          {
            this.state.title
            ? <About title={this.state.title} />
            : <h1>No state from the about title</h1>
          }

      </div>
    )
  }
}

export default AboutContainer;
