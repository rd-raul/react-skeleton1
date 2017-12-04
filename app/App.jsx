import '../styles/common.less';

import React, {PropTypes} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

const home= () =><h1>Home</h1>

const App = ()=>(
  <Router>
    <div>
      <Route exact path="/" component={home}/>
      <Route path="/about" component={home}/>
   </div>
  </Router>
)

export default App;

// export default class Main extends React.Component {
//   constructor(props) {
//     super(props);
//   }
//
//   render() {
//     return (<div>{this.props.children}</div>);
//   }
// }
