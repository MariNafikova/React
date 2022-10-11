import './App.css';
import {useEffect, useState} from "react";
import {v4 as uuidv4} from 'uuid';
import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

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

  function botAnswer() {
    const lastAuthor = messageList[messageList.length - 1];
    if (lastAuthor && lastAuthor.author && lastAuthor.author !== "bot") {
      setMessageList(stateList => [
        ...stateList, {
          id: uuidv4(),
          text: `Сообщение автора ${lastAuthor.author} отправлено`,
          author: "bot"
        }
      ])
    }
  }

  useEffect(() => {
    setTimeout(() => {
      botAnswer()
    }, 500)
  }, [messageList])

  return (
    <div className="main">
      <form onSubmit={handleSubmit} className="form">
          <TextField id="outlined-basic"
                     label="Имя"
                     variant="outlined"
                     placeholder="Введите имя"
                     type="text"
                     name="author"
                     size="small"
                     color="secondary" />
      <br/>
        {/*<input className="formInput" placeholder="Введите сообщение" type="text" name="text"></input> <br/>*/}
          <TextField id="outlined-basic"
                     label="Сообщение"
                     variant="outlined"
                     placeholder="Введите сообщение"
                     type="text"
                     name="text"
                     size="small"
                     color="secondary" />
      <br/>
        <Stack direction="row" spacing={1}>
          <Button size="small" variant="contained" color="secondary" type="submit" value="Отправить">
            Отправить
          </Button>
        </Stack>
        {/*<input className="formButton" type="submit" value="Отправить"/>*/}
      </form>
      {messageList.map((message) => {
        if (message.author !== "bot") {
          return (
            <div key={message.id} className="answerBlock">
              <p>Сообщение: "{message.text}"</p>
              <p>Автор: {message.author} </p>
            </div>
          )
        } else {
          return (
            <div key={message.id} className="answerBlock">
              <p>"{message.text}"</p>
            </div>
          )
        }
      })
      }
    </div>
  )
}

export default App;



