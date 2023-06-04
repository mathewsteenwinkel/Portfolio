import '../src/components/LivingShapes.scss';
import './App.scss';
import Navbar from '../src/components/Navbar';
import LivingShapes from './components/LivingShapes';
import Hero_image from './components/Hero_image';



function App() {
  return (
    <div>
      <div className='container'>
        <Navbar/>
         </div>
        <div>
         <Hero_image />
         </div>

         <div className='livingShapes'>
         <LivingShapes />
         </div> 
    </div>
  );
}

export default App;
