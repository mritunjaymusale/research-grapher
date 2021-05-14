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
  },[currently_selected_node]);

  return (
    <Button
      {...buttonConfig}
      onClick={(event) => {
        // TODO: add other paper id methods aswell
        var id;

        if (reducedPaperDetails.arxivId) {
          id = "arxiv:" + reducedPaperDetails.arxivId;
        } else if (reducedPaperDetails.doi) {
          id = reducedPaperDetails.doi;
        } else if (reducedPaperDetails.paperId) {
          id = reducedPaperDetails.paperId;
        }
        dispatch({
          type: "UPDATE_PAPER_ID",
          id: id,
        });
      }}
      tooltip="Preview the paper in the PDF Window"
      tooltipOptions={{
        position: "top",
      }}
      className="orange-text">
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
