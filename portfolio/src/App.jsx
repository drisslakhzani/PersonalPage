import './App.css'
import NavigationBar from './components/navigationBar'




function App() {

  return (
    <section className='bg-gray-100 w-screen h-screen flex flex-col justify-center items-center'>
      
      <div className='bg-white w-[75%] h-[10%] mt-[10%] rounded-3xl shadow-2xl drop-shadow-2xl'>

        <NavigationBar/>
        
      </div>

    </section>
    
  )
}

export default App
