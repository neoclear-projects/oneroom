import Button from "./components/button";
import './app.scss';
import Input from "./components/input";

function App() {
  return (
    // <div className='test'>
    //   <Button
    //     text='Click'
    //     onClick={() => console.log('clicked')}
    //     gridArea='a'
    //   />
    <Input
      placeholder='enter'
      onChange={text => console.log(text)}
    />
  );
}

export default App;
