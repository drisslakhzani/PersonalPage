import './App.css'
import MainBio from './components/mainBio'
import NavigationBar from './components/navigationBar'




function App() {

  return (
    <section className='bg-gray-100 w-screen h-screen flex flex-col  items-center text-gray-700'>
      
      <div className='bg-white md:max-w-5xl h-fit mt-[10%] rounded-3xl '>

        <NavigationBar/>
        <MainBio/>
        
      </div>

    </section>
    
  )
}

export default App
