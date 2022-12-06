import { Route, Switch } from "react-router-dom";

import Home from "../pages/Home";
import Login from "../pages/Login";
import MyContacts from "../pages/MyContacts";
import Register from "../pages/Register";

function Routes() {
  // const [authenticated, setAuthenticated] = useState(false);

  // useEffect(() => {
  //   const token = JSON.parse(localStorage.getItem("@Contact:token"));

  //   if (token) {
  //     setAuthenticated(true);
  //   }
  // }, []);

  return (
    <div>
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/mycontacts">
          <MyContacts />
        </Route>
      </Switch>
    </div>
  );
}

export default Routes;
