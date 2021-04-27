import Button from "./components/button";
import './app.scss';
import Input from "./components/input";
import Login from "./components/login";

function App() {
  return (
    // // <div className='test'>
    // //   <Button
    // //     text='Click'
    // //     onClick={() => console.log('clicked')}
    // //     gridArea='a'
    // //   />
    // <Input
    //   placeholder='enter'
    //   onChange={text => console.log(text)}
    // />
    <Login />
  );
}

export default App;
