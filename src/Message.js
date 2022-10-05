function Message(props) {
  return (
    <div className="App">
      <header className='App-header'></header>
      <p className='App-text'> Hello, {props.name}!</p>
      <h1> Welcome to my first React App!</h1>
      <a className="App-link" href="https://mari-nafikova.ru/" target="_blank">website</a>
    </div>
  )
}
export default Message;