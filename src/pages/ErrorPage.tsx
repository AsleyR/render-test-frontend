import '../App.css'

const ErrorPage = () => {
  return (
    <div className='App'>
      <div className="App-header">
        <h1>404</h1>
        <h2>The page you were looking for doesn't exist.</h2>
        <p>Return to <a href="/" target={'_self'}>homepage</a>.</p>
      </div>
    </div>
  )
}

export default ErrorPage
