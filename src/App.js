import React, { Suspense } from 'react';
import NavBar from './NavBar';
import * as M from 'materialize-css'
import { ProgressBar } from 'react-materialize';

const PaperInput = React.lazy(() => import('./PaperInput'))

function App() {
  return (
    <div >
      <NavBar />
      <Suspense fallback={<ProgressBar/>}>
        <PaperInput />
      </Suspense>
    </div>
  );
}

export default App;
