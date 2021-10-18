import React from "react";
import { useSelector } from "react-redux";
import Slider from "../../components/Slider";
import Lists from "../../features/Lists";
import Trailer from "../../features/Trailer";

function HomePage() {
  const isOpenTrailer = useSelector((state) => state.trailer.isOpen);

  return (
    <div className="homePage">
      {isOpenTrailer && <Trailer></Trailer>}
      <Slider></Slider>
      <Lists></Lists>
      <Lists></Lists>
      <Lists></Lists>
    </div>
  );
}
export default HomePage;
