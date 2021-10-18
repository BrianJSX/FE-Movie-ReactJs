import {
  DislikeOutlined,
  LikeOutlined,
  PlayCircleOutlined,
  YoutubeOutlined
} from "@ant-design/icons";
import React from "react";
import { useDispatch } from "react-redux";
import { openTrailer, setTrailerId } from "../../../Slice/trailerSlice";

function ListItem(props) {
  const dispatch = useDispatch();

  const handleTrailer = async () => { 
    await dispatch(openTrailer(true));
    await dispatch(setTrailerId(props.idTrailer));
  }

  return (
    <div className="listItem">
      <div className="listItem-header">
        <img
          className="listItem-image"
          src="https://wallpaperaccess.com/full/183794.jpg"
        ></img>
      </div>
      <div className="listItem-content">
        <div className="listItem-content__action">
          <div className="listItem-button" title="watching">
            <PlayCircleOutlined />
          </div>
          <div className="listItem-button" title="Trailer" onClick={handleTrailer}>
            <YoutubeOutlined />
          </div>
          <div className="listItem-button" title="Like">
            <LikeOutlined />
          </div>
          <div className="listItem-button" title="Unlike">
            <DislikeOutlined />
          </div>
        </div>
        <div className="listItem-content__footer">
          <div className="listItem-title">
            Thám tử lừng danh conan asdasd sadasd sad sad
          </div>
          <div className="listItem-timer">1 hour 14 mins</div>
          <div className="listItem-desc">
            helloc xin chao sadhjs sad saddasdsa sadsadsad helloc xin chao
            sadhjs sad saddasdsa sadsadsad helloc xin chao sadhjs sad saddasdsa
            sadsadsad helloc xin chao sadhjs sad saddasdsa sadsadsad helloc xin
            chao sadhjs sad saddasdsa sadsadsad helloc xin chao sadhjs sad
            saddasdsa sadsadsad helloc xin chao sadhjs sad saddasdsa
            sadsadsadhelloc xin chao sadhjs sad saddasdsa sadsadsad helloc xin
            chao sadhjs sad saddasdsa sadsadsad
          </div>
        </div>
      </div>
    </div>
  );
}

export default ListItem;
