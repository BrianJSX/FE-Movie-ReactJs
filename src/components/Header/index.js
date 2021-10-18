import {
  BellOutlined,
  DownCircleOutlined,
  SearchOutlined,
  UserOutlined
} from "@ant-design/icons";
import { Avatar } from "antd";
import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <div className="header-left">
        <img
          className="logo"
          src="https://static.wikia.nocookie.net/jurassicpark/images/5/54/Netflix_logo.png"
        ></img>
      </div>
      <div className="header-content">
        <ul className="header-content__list">
          <Link to="/">
            <li className="header-content__item">Home</li>
          </Link>
          <Link to="/home">
            <li className="header-content__item">Series</li>
          </Link>
          <Link to="/">
            <li className="header-content__item">Movies</li>
          </Link>
        </ul>
      </div>
      <div className="header-right">
        <ul className="header-content__list">
          <li className="header-content__item">
            <SearchOutlined />
          </li>
          <li className="header-content__item">KID</li>{" "}
          <li className="header-content__item">
            <BellOutlined />
          </li>
          <li className="header-content__item">
            <Avatar shape="square" size="small" icon={<UserOutlined />} />
          </li>
          <li className="header-content__item">
            <DownCircleOutlined />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
