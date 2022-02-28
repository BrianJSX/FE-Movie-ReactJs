import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Slider from "../../components/Slider";
import Lists from "../../features/Lists";
import Trailer from "../../features/Trailer";
import axiosClient from "../../axios/axiosClient";

function HomePage(props) {
  const isOpenTrailer = useSelector((state) => state.trailer.isOpen);
  const [list, setList] = useState("");

  const getRandomList = async () => {
    try {
      const res = await axiosClient.get("movies/random/", {
        headers: { 
          token: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxOWU3NmQzNWNmZGFmNjRmMGU2MDlhMCIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE2Mzc3NzUwNzEsImV4cCI6MTYzODIwNzA3MX0.8w6z8R5sF9RIbcjRQ9l-HQ7RhCBXCLivFEAPFHrmxW8`
        }
      });
      console.log(res)
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() =>  {
    getRandomList();
  })

  return (
    <div className="homePage">
      {isOpenTrailer && <Trailer></Trailer>}
      <Slider name={props.type}></Slider>
      <Lists></Lists>
    </div>
  );
}
export default HomePage;
