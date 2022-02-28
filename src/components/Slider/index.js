import { InfoCircleOutlined, PlayCircleOutlined } from "@ant-design/icons";
import { Button } from "antd";
import React from "react";
import { Select } from "antd";

function Slider(props) {
  function handleChange(value) {
    console.log(`selected ${value}`);
  }

  const { Option, OptGroup } = Select;
  const name = props.name;

  return (
    <div
      className="slider"
      style={{
        backgroundImage: `url('https://genk.mediacdn.vn/2019/11/12/1-1573571042465953988347.jpeg')`,
      }}
    >
      <div className="slider-action">
        { name && (
          <div className="slider-action__list">
            <div className="slider-action__list__left">{name}</div>
            <div className="slider-action__list__right">
              <Select
                defaultValue="lucy"
                style={{ width: 200 }}
                onChange={handleChange}
              >
                <OptGroup label="Manager">
                  <Option value="jack">Jack</Option>
                  <Option value="lucy">Lucy</Option>
                </OptGroup>
              </Select>
              ,
            </div>
          </div>
        )}

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
