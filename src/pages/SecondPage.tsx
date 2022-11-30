import { Link } from 'react-router-dom'
import '../App.css'

const SecondPage = () => {
  return (
    <div className='App-header'>
      <h1>Second Page</h1>
      <p>This is a test example of a second page for react.</p>
      <p>Return to <Link to={'/'}>homepage</Link>.</p>
    </div>
  )
}

export default SecondPage
