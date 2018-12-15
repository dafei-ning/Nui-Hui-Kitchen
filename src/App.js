import React, { Component } from 'react';

import Layout from './components/Layout/Layout';
import DishBuilder from './containers/DishBuilder/DishBuilder'; 

class App extends Component {
  render() {
    return (
      <div className="App">
       <Layout>
         <DishBuilder />
       </Layout>
      </div>
    );
  }
}

export default App;
