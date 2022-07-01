import { MyComponent } from 'component-library-react';
import { useState, useEffect } from 'react';

const App: React.FC = () => {
  const [render, setRender] = useState(false);
  
  useEffect(() => {
    setTimeout(() => {
    setRender(true);
    },500);
  })
  
  return (
    <>
    { render && <MyComponent></MyComponent> }
    </>
  )
}

export default App;
