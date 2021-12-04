import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Routes,
    useLocation
} from "react-router-dom";
import Home from '../pages/Home';

export default function QueryParamsExample(props) {
    console.log(props);
    return (
      <Router>
        <QueryParamsDemo name={props.name} />
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
      console.log(nama);
    let query = useQuery();
  
    return (
      <div>
        <div>
          {/* <h2>Accounts</h2> */}
          {/* <ul>
            <li>
              <Link to="/for?name=${name}">Netflix</Link>
            </li>
            <li>
              <Link to="/for?name=zillow-group">Zillow Group</Link>
            </li>
            <li>
              <Link to="/for?name=yahoo">Yahoo</Link>
            </li>
            <li>
              <Link to="/for?name=modus-create">Modus Create</Link>
            </li>
          </ul> */}
  
          <Child name={query.get("name")} />
        </div>
      </div>
    );
  }
  
  function Child({ name }) {
    console.log(name);
    return (
      <div>
        {name ? (
        //   <h3>
        //     The <code>name</code> in the query string is &quot;{name}
        //     &quot;
        //   </h3>
        <Home nama={name} />
        ) : (
          <h3>There is no name in the query string</h3>
        )}
      </div>
    );
  }