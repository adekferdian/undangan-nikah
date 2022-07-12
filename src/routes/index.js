import React from 'react';
import {
    BrowserRouter as Router,
    useLocation
} from "react-router-dom";
import Home from '../pages/adek/Home';

export default function QueryParamsExample(props) {
    return (
      <Router>
        <QueryParamsDemo to={props.to} />
      </Router>
    );
  }
  
  // A custom hook that builds on useLocation to parse
  // the query string for you.
  function useQuery() {
    const { search } = useLocation();
  
    return React.useMemo(() => new URLSearchParams(search), [search]);
  }
  
  function QueryParamsDemo(nama) {
    let query = useQuery();
  
    return (
      <div>
        <div>
          {/* <h2>Accounts</h2> */}
          {/* <ul>
            <li>
              <Link to="/for?to=${to}">Netflix</Link>
            </li>
            <li>
              <Link to="/for?to=zillow-group">Zillow Group</Link>
            </li>
            <li>
              <Link to="/for?to=yahoo">Yahoo</Link>
            </li>
            <li>
              <Link to="/for?to=modus-create">Modus Create</Link>
            </li>
          </ul> */}
  
          <Child to={query.get("to")} />
        </div>
      </div>
    );
  }
  
  function Child({ to }) {
    return (
      <div>
        {to ? (
        <Home to={to} />
        ) : (
          <h3>There is no to in the query string</h3>
        )}
      </div>
    );
  }