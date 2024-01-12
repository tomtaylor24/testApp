import "./App.css";
import "./news.css";
import News from "./pages/News";
import NewsDetail from "./pages/NewsDetail";
import { BrowserRouter, Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={News} />
        <Route path="/news/:id" component={NewsDetail} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
