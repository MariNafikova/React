import {useEffect, useState} from "react";
import {v4 as uuidv4} from 'uuid';
import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import TextField from '@mui/material/TextField';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import Divider from '@mui/material/Divider';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import './Chats.css'

const drawerWidth = 300;
const Chats = () => {
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
  const [chatsList, setChatsList] = useState([
    {
      id: uuidv4(),
      name: 'Andrew',
      avatar: 'https://mui.com/static/images/avatar/1.jpg',
      topic: 'Monday meeting',
      messageText: ' — Agreed! Meet me at 3 p.m...'
    },
    {
      id: uuidv4(),
      name: 'Olga',
      avatar: 'https://mui.com/static/images/avatar/3.jpg',
      topic: 'Theatre tickets',
      messageText: ' — There are many options for theatre performance for you...'
    },
    {
      id: uuidv4(),
      name: 'Vladimir',
      avatar: 'https://mui.com/static/images/avatar/2.jpg',
      topic: 'Excursion trip',
      messageText: ' — The bus departs at 7 a.m. every day...'
    },
  ]);

  return (
    <div className="main">
      <Box sx={{display: 'flex'}}>
        <CssBaseline/>
        <Drawer
          variant="permanent"
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            [`& .MuiDrawer-paper`]: {width: drawerWidth, boxSizing: 'border-box'},
          }}
        >
          <Box sx={{overflow: 'auto'}}>
            <List sx={{marginTop: '48px', width: '100%', maxWidth: 360, bgcolor: 'background.paper'}}>
              {chatsList.map((chat) => (
                <ListItem key={chatsList.id} alignItems="flex-start">
                  <ListItemButton>
                    <ListItemAvatar>
                      <Avatar alt={chat.name} src={chat.avatar}/>
                    </ListItemAvatar>
                    <ListItemText
                      primary={chat.topic}
                      secondary={
                        <React.Fragment>
                          <Typography
                            sx={{display: 'inline'}}
                            component="span"
                            variant="body2"
                            color="text.primary"
                          >
                            {chat.name}
                          </Typography>
                          {chat.messageText}
                        </React.Fragment>
                      }
                    />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Box>
        </Drawer>
        <Box component="main" sx={{marginTop: '48px', flexGrow: 1, p: 3}}>
          <div>
            <form onSubmit={handleSubmit} className="form">
              <TextField id="standard-basic"
                         label="Name"
                         variant="standard"
                         placeholder="Enter your name"
                         type="text"
                         name="author"
                         size="small"
                         color="secondary"
                         autoFocus={true}/>
              <br/>
              {/*<input className="formInput" placeholder="Введите сообщение" type="text" name="text"></input> <br/>*/}
              <div className="messageBlock">
                <TextField id="outlined-basic"
                           label="Message"
                           variant="outlined"
                           placeholder="Enter a message"
                           type="text"
                           name="text"
                           size="big"
                           color="secondary"
                />
                <Stack direction="row" spacing={1}>
                  <Button size="small" variant="contained" color="secondary" type="submit" value="Send"
                          endIcon={<SendIcon/>}>
                    Send
                  </Button>
                </Stack>
                {/*<input className="formButton" type="submit" value="Отправить"/>*/}
              </div>
            </form>
            {messageList.map((message) => {
              if (message.author !== "bot") {
                return (
                  <div key={message.id} className="answerBlock">
                    <p>Message: "{message.text}"</p>
                    <p>Author: {message.author} </p>
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
        </Box>
      </Box>
    </div>
  );
};

export default Chats;






