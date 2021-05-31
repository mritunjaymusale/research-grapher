import React, { Suspense } from "react";
import { ProgressBar } from "react-materialize";
import {ForceGraph3D} from 'react-force-graph'
const Card = React.lazy(() => import("react-materialize/lib/Card"));

const CitationGraph = () => {
  return (
    <Suspense fallback={<ProgressBar />}>
      <Card title="Citation Graph">
        <ForceGraph3D/>
      </Card>
    </Suspense>
  );
};

export default CitationGraph;
