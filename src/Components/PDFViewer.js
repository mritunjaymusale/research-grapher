import React from 'react'
import { Card } from 'react-materialize'

const PDFViewer = () => {
    return (
        <Card title="Preview">
            
        </Card>
    )
}

export default PDFViewer


// return (
//     <Card title="Preview">
//       <PopUpUrlLink url={url} paper={paper} />
//       <div className="video-container">
//         {progressBar ? <ProgressBar /> : null}
//         {showPDF ? (
//           <iframe title='pdf_viewer'
//             src={url}
//             frameBorder="0"
//             onLoad={(event) => setProgressBar(false)}
//             allowFullScreen
//           />
//         ) : null}
//       </div>
//     </Card>
//   );