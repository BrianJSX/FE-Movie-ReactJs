import { InfoCircleOutlined, PlayCircleOutlined } from "@ant-design/icons";
import { Button } from "antd";
import React from "react";

function Slider() {
  return (
    <div
      className="slider"
      style={{
        backgroundImage: `url('https://external-preview.redd.it/W_Bx1cy5ykqfxyqRtOB1cxOdhyB42P_v4hWM4uTDKFI.png?auto=webp&s=da691bd51edbe0bf2326e16238a0c06192d7ba8b')`,
      }}
    >
      <div className="slider-action">
        <div className="slider-action__desc">
          Ngày mùa. Vùng nông thôn quê hương em lại náo nhiệt biết bao. Từ tờ mờ
          sáng, các bác nông dân đã í ới gọi nhau ra đồng. Từng đoàn người nối
          đuôi nhau ra đồng gặt lúa cho kịp vụ mùa thu hoạch. Trên những cánh
          đồng, từng bàn thay thoăn thoắt cầm những chiếc liềm gặt lúa trông
          thật điêu luyện như những nghệ sĩ biểu diễn.
        </div>
        <div className="slider-action__button">
          <Button icon={<PlayCircleOutlined />}>Play</Button>
          <Button style={{ marginLeft: 20 }} icon={<InfoCircleOutlined />}>
            Info
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Slider;
