import './App.css'
import NavigationBar from './components/navigationBar'
import Button from "@mui/material/Button" 



function App() {

  return (
    <section className='bg-red-100 w-screen h-screen flex flex-col justify-center items-center'>
      
      <div className='bg-white w-[60%] mt-[10%] rounded-3xl shadow-lg'>

        <NavigationBar/>
        <Button  variant="contained">Hello world</Button>;
      </div>

    </section>
    
  )
}

export default App
