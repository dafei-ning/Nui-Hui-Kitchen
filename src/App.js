import React, { Component } from 'react';

import Layout from './hoc/Layout/Layout';
import DishBuilder from './containers/DishBuilder/DishBuilder'; 

class App extends Component {

  state = {
    show: true
  }

  // componentDidMount() {
  //   setTimeout(() => {
  //     this.setState({show: false});
  //   }, 5000);
  // }
  
  render() {
    return (
      <div className="App">
       <Layout>
         {this.state.show ? <DishBuilder /> : null}
       </Layout>
      </div>
    );
  }
}

export default App;
