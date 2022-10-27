import './App.css';
import {useEffect, useState} from "react";
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [messageList, setMessageList] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const author = event.target.author.value;
    const text = event.target.text.value;

    setMessageList(stateList => [
        ...stateList, {
          author: author,
          text: text,
          id: uuidv4()
        }
      ]
    );
  }
  // useEffect(() => {
  //   setTimeout(,1500)
  // }, messageList)
  return (
    <div className="main">
      <form onSubmit={handleSubmit} className="form">
        <input className="formInput" placeholder="Введите имя" type="text" name="author"></input> <br/>
        <input className="formInput" placeholder="Введите сообщение" type="text" name="text"></input> <br/>
        <input className="formButton" type="submit" value="Отправить"/>
      </form>
      {messageList.map((message) => {
        return (
          <div key={message.id} className="answerBlock">
            <p>Сообщение: "{message.text}"</p>
            <p>Автор: {message.author} </p>
          </div>
        )
      })
      }
    </div>
  )
}
export default App;
