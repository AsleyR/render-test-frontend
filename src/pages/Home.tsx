import logo from '../logo.svg';
import '../App.css';
import Message from '../components/Message'

const Home = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Frontend test example of a React App.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React?
        </a>
        <Message/>
      </header>
    </div>
  )
}

export default Home
