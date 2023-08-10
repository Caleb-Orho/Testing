import { useState } from 'react';
import { BrowserRouter } from "react-router-dom";
import { Header, Content, StarsCanvas, AniCanvas } from './assets';

const App = () => {
  const [count, setCount] = useState(0)
  // relative z-0 bg-primary
  return (
    <BrowserRouter>
      <div className='bg-primary'>
        <Header />
        <Content />
        <AniCanvas />
        <StarsCanvas />
      </div>
    </BrowserRouter>

  )
}

export default App