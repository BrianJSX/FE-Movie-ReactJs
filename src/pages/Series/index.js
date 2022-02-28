import React from "react";
import { useSelector } from "react-redux";
import Slider from "../../components/Slider";
import Lists from "../../features/Lists";
import Trailer from "../../features/Trailer";

function SeriesPage(props) {
  const isOpenTrailer = useSelector((state) => state.trailer.isOpen);

  return (
    <div className="homePage">
      {isOpenTrailer && <Trailer></Trailer>}
      <Slider name={props.type}></Slider>
      <Lists></Lists>
      <Lists></Lists>
      <Lists></Lists>
    </div>
  );
}

export default SeriesPage;
