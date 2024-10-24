import Counter from '../Components/Counter/Counter'
import Timer from '../Components/Timer/Timer'
import Add from '../Components/Add/Add'
import Temperatures from '../Components/Temperatures/Temperatures';

import './Components.css'

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

function App() {
  
  return (
    <>
    
    <div className='main'>
      	<h1 className='container'>REACT COMPONENTS</h1>
      	<div className='component'>
        	<Counter className='counter-main'/>
        	<Add className='add-main' aValue={10} bValue={0}/>
        	<Timer className='timer-main' />
      </div>
        	<Temperatures className='tem-main' cel={25} fah={77} kel={298} />
    		<h3 className='name'>อรัชพร นาคมอญ 65057974</h3>
	</div>
    </>
  )
}

export default App
