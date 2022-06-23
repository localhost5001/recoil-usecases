import { Suspense, lazy } from 'react'
import { Routes, Route } from 'react-router-dom'

const Home = lazy(() => import('./views/home'))
const SimpleAtom = lazy(() => import('./views/simpleAtom'))

function App() {
  return (
    <Routes>
      <Route path='/' element={
          <Suspense> 
            <Home /> 
          </Suspense>
        } 
      />
      <Route path='/simple-atom' element={
          <Suspense> 
            <SimpleAtom /> 
          </Suspense>
        } 
      />
    </Routes>
  );
}

export default App;
