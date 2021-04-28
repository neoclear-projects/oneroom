import { BrowserRouter, Route, useRouteMatch } from "react-router-dom";
import Navigation from "../navigation";
import './home.scss';

function A() {
  return (
    <div>A</div>
  );
}

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
          <Route exact path="/" component={A}/>
          <Route exact path="/manage" component={B}/>
          <Route exact path="/invitations" component={C}/>
        </div>
      </div>
    </BrowserRouter>
  );
};
