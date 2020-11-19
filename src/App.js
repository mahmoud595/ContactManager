import "./App.css";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Contacts from "./components/contacts/Contacts";
import Header from "./components/layout/Header";
import AddContact from "./components/contacts/AddContact";
import EditContact from "./components/contacts/EditContact";
import About from "./components/pages/About";
import NotFound from "./components/pages/NotFound";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "./Context";

const App = () => {
  return (
    <Provider>
      <Router>
        <div className="App">
          <Header branding="new brand" />
          <div className="container">
            <Switch>
              <Route exact path="/" component={Contacts} />
              <Route exact path="/contact/add" component={AddContact} />
              <Route exact path="/contact/edit/:id" component={EditContact} />

              <Route
                exact
                path="/about"
                render={props => <About {...props} name="about" />}
              />
              <Route component={NotFound} />
            </Switch>
          </div>
        </div>
      </Router>
    </Provider>
  );
};

export default App;
