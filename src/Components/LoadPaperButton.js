import { useEffect, useState } from "react";
import { Button } from "react-materialize";
import { useDispatch, useSelector } from "react-redux";

export const LoadPaperButton = () => {
  const dispatch = useDispatch();
  const [reducedPaperDetails, setReducedPaperDetails] = useState(null);
  // This can be generalised for other type of papers aswell
  var currently_selected_node = useSelector(
    (state) => state.graphReducer.currently_selected_node
  );
  useEffect(() => {
    if (currently_selected_node)
      setReducedPaperDetails(currently_selected_node.attributes);
  });

  return (
    <Button
      {...buttonConfig}
      onClick={(event) => {
        dispatch({
          type: "UPDATE_ARXIV_ID",
          newId: reducedPaperDetails.arxivId,
        });
      }}
      tooltip="Preview the paper in the PDF Window"
      tooltipOptions={{
        position: "top",
      }}
    className="orange-text"
    >
      Load Paper
    </Button>
  );
};

const buttonConfig = {
  flat: true,
  modal: "close",
  node: "button",
  waves: "light",
};
