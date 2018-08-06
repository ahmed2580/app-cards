import React from 'react';
import App from './App';
import Java from './Java';
import Nodes from './Node';
import Jquery from './Jquery';
import { BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom';


const BasicExample =  ()=>(
    <Router>
        <div>
        <ul>
        <li>
          <Link to="/1st">  1 / 4 </Link>
        </li>
        <li>
          <Link to="/2nd">  2 / 4 </Link>
        </li>
        <li>
          <Link to="/3rd"> 3 / 4</Link>
        </li>
        <li>
          <Link to="/"> 4 / 4  </Link>
        </li> 
      </ul>
        <Switch>
        <Route exact path="/" component={App} />
        <Route path="/1st" component={Java} />
        <Route path="/2nd" component={Nodes} />
        <Route path="/3rd" component={Jquery} />
        </Switch>
        </div>
        
    </Router>  
)


export default BasicExample;
