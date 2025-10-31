import './App.css'
import Header from './components/Layout/Header'
import Navigator from './components/Layout/Navigator'
import Contents from './components/Layout/Contents'
function App() {

  return (
    <div className='container flex flex-col w-[1080px] mx-auto'>
        <Navigator />
        <Header />
        <Contents />
    </div>
  )
}

export default App
