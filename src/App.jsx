import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import Carousela from './components/Carousela'


function App() {
  return (
    <>
      <Header />
      <Main />
      <div className='flex justify-center'>
        <Carousela />
      </div>
      <Footer />
    </>
  )
}

export default App
