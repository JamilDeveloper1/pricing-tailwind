import Cards from "./components/Cards"
import Header from "./components/Header"
import Navbar from "./components/Navbar"

const App = () => {
  return (
<div className='w-full h-screen bg-lightpink flex flex-col'>
<Navbar />
<Header/>
<Cards/>
</div>
  )
}

export default App
