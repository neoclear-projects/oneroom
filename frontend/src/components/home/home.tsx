import { BrowserRouter, Route } from "react-router-dom";
import Login from "../login";
import Navigation from "../navigation";
import Register from "../register";

export default function Home() {
  return (
    <BrowserRouter>
      <Navigation />
      <div className="content">
        <Route exact path="/" component={Login}/>
        <Route exact path="/invitations" component={Register}/>
      </div>
    </BrowserRouter>
  );
};
