import React from "react";
import ReactPlayer from "react-player";
import WatchItem from "./WatchItem";
import { Button, Space } from "antd";
import { PoweroffOutlined } from "@ant-design/icons";

function WacthPage() {
  return (
    <div className="watchPage">
      <div className="watch">
        <div className="watch-left">
          <div className="watch-video">
            <ReactPlayer
              url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
              width="100%"
              height={500}
              controls={true}
            />
          </div>
        </div>
        <div className="watch-right">
          <div className="watch-headerList">
            <div className="watch-title">Danh sách tập</div>
            <div className="watch-comment">Bình luận</div>
          </div>
          <hr></hr>
          <div className="watch-contentList">
            <div className="watch-totalList">Tổng số: 5 video</div>
            <div className="watch-episode">Tập: 5</div>
          </div>
          <div className="watch-list">
            <WatchItem></WatchItem>
            <WatchItem></WatchItem>
            <WatchItem></WatchItem>
            <WatchItem></WatchItem>
            <WatchItem></WatchItem>
            <WatchItem></WatchItem>
            <WatchItem></WatchItem>
          </div>
        </div>
      </div>
      <div className="watch-content">
        <div className="watch-content__title">
          KOMI-SAN WA, COMYUSHOU DESU. TẬP 5
        </div>
        <div className="watch-content__view">
          <span>241,770</span> lượt xem
        </div>
        <div className="watch-content__action">
          <div>
            <Button type="danger" icon={<PoweroffOutlined />}>
              Thích
            </Button>
          </div>
          <div>
            <Button icon={<PoweroffOutlined />}>
              Theo dõi 
            </Button>
          </div>
          <div>
            <Button type="primary" icon={<PoweroffOutlined />}>
              Share
            </Button>
          </div>
        </div>
        <div className="watch-content-desc">
          Timid Tadano là một người y chang hoa tường vi, có tính cách hướng nội
          và thường tạo khoảng cách với đám đông. Nhưng tất cả đã thay đổi khi
          cậu thấy mình cô đơn trong lớp học vào ngày đầu tiên học Cao Trung với
          nhỏ con gái khác tên Komi. Cậu đã nhanh chóng nhận ra cô bạn này không
          hề xa cách - chỉ là cô siêu vụng về. Giờ đây, cậu sẽ phải thực hiện
          nhiệm vụ của mình là giúp cô ấy kết bạn với 100 người
        </div>
      </div>
    </div>
  );
}

export default WacthPage;
