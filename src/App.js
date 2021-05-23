import React, { Suspense } from 'react';
import NavBar from './NavBar';
import * as M from 'materialize-css'
import { ProgressBar } from 'react-materialize';
import { useSelector } from 'react-redux';
import PDFViewer from './Components/PDFViewer';

const PaperInput = React.lazy(() => import('./Components/PaperInput'))

function App() {
  let isLoadedPaperReady = useSelector(state => state.loadedPaper.success);

  return (
    <div >
      <NavBar />
      <Suspense fallback={<ProgressBar />}>
        {isLoadedPaperReady ? <PDFViewer /> : <PaperInput />}
      </Suspense>
    </div>
  );
}

export default App;
