import { Link } from 'react-router-dom'
import Message from '../components/Message'
import logo from '../logo.svg';
import '../App.css';

const Home = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Message/>
        <p>Go to <Link to={'/second-page'}>second page</Link>.</p>
      </header>
    </div>
  )
}

export default Home
