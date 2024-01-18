import "./App.css";
import "./style.css";
import News from "./pages/News";
import NewsDetail from "./pages/NewsDetail";
import Contact from "./pages/Contact";
import Header from "./pages/Header";
import { BrowserRouter, Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
    <Header />
      <Switch>
        <Route path="/" exact component={News} />
        <Route path="/news/:id" component={NewsDetail} />
        <Route path="/contact" component={Contact} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
