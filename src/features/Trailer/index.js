import { CloseCircleOutlined } from "@ant-design/icons";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import YouTube from "react-youtube";
import { closeTrailer, setTrailerId } from "../../Slice/trailerSlice";

function Trailer() {
  const idTrailer = useSelector((state) => state.trailer.idTrailer);
  const dispatch = useDispatch();

  const opts = {
    height: "500",
    width: "650",
    playerVars: {
      autoplay: 1,
    },
  };

  const handleClose = async () => {
    dispatch(closeTrailer(false));
    dispatch(setTrailerId(null));
  };

  return (
    <div className="trailer">
      <div className="trailer-content">
        <div className="trailer-close" onClick={handleClose}>
          <CloseCircleOutlined />
        </div>
        <YouTube videoId={idTrailer} opts={opts} />
      </div>
    </div>
  );
}

export default Trailer;
