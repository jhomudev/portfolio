import { Toaster } from 'sonner'
import { Outlet } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import ParticlesContainer from './components/ParticlesContainer'

function App () {
  return (
    <>
      <div className='dark relative container-all min-h-screen font-nunito bg-gradient-to-r from-mydark to-mydarkblue'>
        <Header />
        <div className='relative z-10'>
          <Outlet />
        </div>
        <Footer />
        <ParticlesContainer />
        <Toaster richColors />
      </div>
    </>
  )
}

export default App
