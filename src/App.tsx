
import './App.css'
import Logo from './components/Logo/Logo'
import Miner from './components/Miner'
import SocialLinks from './components/socialLinks/SocialLinks'

function App() {

  return (
    <div id='page'>
        <section id='intro'>
            <div id='social'>
                <SocialLinks/>
            </div>
            <Logo/>
        </section>
    
        <Miner/>
     
        <section id='comingSoon'>
           <div id="carrot">
            <div id='text'>
                <text>COMING SOON...</text>
            </div>
           </div>
        </section>
    </div>
  )
}

export default App
