 
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';  
import Drugs from './Components/Drugs'; 
function Main() {
  return (
    <div>
      <Router> 
        <div >
          <Switch>
              <Route exact path = "/" component = {Drugs}/> 
          </Switch>
        </div> 
      </Router>
    </div>
  );
}

export default Main;