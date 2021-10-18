import { DoubleLeftOutlined, DoubleRightOutlined } from "@ant-design/icons";
import React, { useRef } from "react";
import ListItem from "./ListItem";

function Lists() {
  const refScroll = useRef();

  const handleMoveLeft = () => {
    refScroll.current.scrollLeft += 400;
  };
  const handleMoveRight = () => {
    refScroll.current.scrollLeft += -400;
  };

  return (
    <div className="list">
      <div className="list-btn">
        <div className="list-title">Best Movie</div>
        <div className="list-btn__left" onClick={handleMoveRight}>
          <DoubleLeftOutlined />
        </div>
        <div className="list-btn__right" onClick={handleMoveLeft}>
          <DoubleRightOutlined />
        </div>
      </div>
      <div className="list-all" ref={refScroll}>
        <ListItem id="1" idTrailer="2g811Eo7K8U" ></ListItem>
        <ListItem id="1" idTrailer="2g811Eo7K8U" ></ListItem>
        <ListItem id="1" idTrailer="2g811Eo7K8U" ></ListItem>
        <ListItem id="1" idTrailer="2g811Eo7K8U" ></ListItem>
        <ListItem id="1" idTrailer="2g811Eo7K8U" ></ListItem>
        <ListItem id="1" idTrailer="2g811Eo7K8U" ></ListItem>
        <ListItem id="1" idTrailer="2g811Eo7K8U" ></ListItem>
      </div>
    </div>
  );
}

export default Lists;
