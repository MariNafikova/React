import './App.css';
import Message from './Message';

function App() {
  let name = 'my friend';
  return (
    <div>
      <Message name={name}/>
    </div>
  );
}

export default App;
