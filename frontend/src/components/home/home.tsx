import { BrowserRouter, Route, useRouteMatch } from "react-router-dom";
import Navigation from "../navigation";
import Room from "../room";
import './home.scss';

function B() {
  return (
    <div>B</div>
  );
}
  function C() {
  return (
    <div>C</div>
  );
}

export default function Home() {
  const match = useRouteMatch();

  return (
    <BrowserRouter>
      <div id='home'>
        <Navigation path={match.path} />
        <div id='room-content'>
          <Route exact path="/" component={Room}/>
          <Route exact path="/manage" component={B}/>
          <Route exact path="/invitations" component={C}/>
        </div>
      </div>
    </BrowserRouter>
  );
};
