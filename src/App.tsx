import { ThemeProvider } from './context/ThemeContext'
import './App.css'
import Header from './components/Layout/Header'
import Contents from './components/Layout/Contents'
import Footer from './components/Layout/Footer'
import Shutter from './components/common/Shutter'

function App() {

  return (
    <ThemeProvider>
      <Shutter />
      <div className='flex flex-col mx-0 px-0 w-full max-w-screen select-none'>
        <Header />
        <Contents />
        <Footer />

      </div>
    </ThemeProvider>
  )
}

export default App
