import { Link } from "react-router-dom"


function App() {


  return (
    <>
    <h1>I have Successfully deployed</h1>
    <Link to={"/test"}>To test page</Link>
    <br />
    <a href="/test">Achor to test page</a>
    </>
  )
}

export default App
