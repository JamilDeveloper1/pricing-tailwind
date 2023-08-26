import Cards from "./components/Cards"
import Console from "./components/Console"
import Header from "./components/Header"
import Navbar from "./components/Navbar"

const App = () => {
  return (
<div className='w-full h-screen bg-lightpink flex flex-col'>
<Navbar />
<Header/>
<Cards/>
<Console/>
</div>
  )
}

export default App
