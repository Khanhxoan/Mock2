import React from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Button,
  Col,
  Form,
  Input,
  InputNumber,
  Row,
  Select,
  Upload,
} from "antd";
import "./antd.css";
import TextArea from "antd/lib/input/TextArea";
import upload from "../Assets/Upload.png";
import { Option } from "antd/lib/mentions";

const ProductUpdatePage = () => {
  const navigte = useNavigate();
  return (
    <div className="ml-[32px] mt-[25px]">
      <div>
        <p>
          <Link className="text-[black]" to="/admin">
            Dashboard
          </Link>{" "}
          / <span>Product</span> / <span>Update product</span>
        </p>
        <div className="flex items-center justify-between">
          <div>
          <h1 className="mb-0 text-[35px] leading-[41.06px] font-WorkSans">
            Update Product
          </h1>
          <p className="mb-0">ProductID: #463</p>
          </div>
          <button className="w-fit h-[40px] px-[10px] mr-[36px] rounded-[5px] bg-[#FFD333] text-[20px] leading-[23.46px] font-[600] font-WorkSans">
            Save
          </button>
        </div>
      </div>
      <div className="flex mr-[32px] mt-[46px] h-[676px]">
        <div className="w-[58.8%] h-full mr-[32px] bg-[white]">
          <div className="h-[55px] mb-0 bg-[white] border-b-[#929395] border-b-[1px] flex items-center">
            <span className="text-[22px] font-[700] leading-[25.3px] mb-0 ml-[29px]">
              Basic Information
            </span>
          </div>
          <div className="px-[29px] pt-[21px] bg-[white]">
            <Form>
              <Form.Item>
                <p className="name-field">Name</p>
                <Input style={{ height: "40px" }} />
              </Form.Item>
              <Form.Item>
                <p className="name-field">Description</p>
                <TextArea
                  placeholder="Controlled autosize"
                  autoSize={{
                    minRows: 4.65,
                  }}
                />{" "}
              </Form.Item>
              <Form.Item>
                <Row>
                  <Col span={12}>
                    <Form.Item style={{ marginRight: "20px", marginBottom: 0 }}>
                      <p className="name-field">Price</p>
                      <InputNumber
                        defaultValue={1000}
                        formatter={(value) =>
                          `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                        }
                        parser={(value) => value.replace(/\$\s?|(,*)/g, "")}
                      />{" "}
                    </Form.Item>
                  </Col>
                  <Col span={12}>
                    <Form.Item style={{ marginLeft: "20px", marginBottom: 0 }}>
                      <p className="name-field">Discount Percent</p>
                      <InputNumber
                        defaultValue={100}
                        min={0}
                        max={100}
                        formatter={(value) => `${value}%`}
                        parser={(value) => value.replace("%", "")}
                      />{" "}
                    </Form.Item>
                  </Col>
                </Row>
              </Form.Item>
              <Form.Item style={{ marginBottom: 0 }}>
                <p className="name-field">Brand</p>
                <Input style={{ height: "40px", marginBottom: "37px" }} />
              </Form.Item>
              <Form.Item style={{ marginBottom: 0 }}>
                <p className="name-field">Stock quantity</p>
                <Input style={{ height: "40px" }} />
              </Form.Item>
            </Form>
          </div>
        </div>
        <div className="w-[41.2%] h-[676px]">
          <div className="bg-[white]">
            <div className="h-[55px] mb-0 border-b-[#929395] border-b-[1px] flex items-center">
              <span className="text-[22px] font-[700] leading-[25.3px] mb-0 ml-[29px]">
                Images
              </span>
            </div>
            <div className="items-center">
              <img src={upload} className="mx-auto mt-[25px] mb-[25px]" />
              <div className="flex mx-[27px] pb-[26px]">
                <Upload>
                  <button className="w-[124px] h-[40px] rounded-[2px] bg-[#C4CDD5] text-[18px] font-[400] text-[black] leading-[20.7px]">
                    Chọn tệp
                  </button>
                </Upload>
                <Input style={{ borderColor: "#929395", borderWidth: "1px" }} />
              </div>
            </div>
          </div>
          <div className="bg-[white] mt-[34px]">
            <div className="h-[55px] mb-0 border-b-[#929395] border-b-[1px] flex items-center">
              <span className="text-[22px] font-[700] leading-[25.3px] mb-0 ml-[29px]">
                Categories
              </span>
            </div>
            <div className="mx-[27px] py-[28px]">
              <Select
                mode="multiple"
                style={{
                  width: "100%",
                }}
                placeholder="select one country"
                optionLabelProp="label"
              >
                <Option value="china" label="China">
                  <div className="demo-option-label-item">
                    <span role="img" aria-label="China">
                      🇨🇳
                    </span>
                    China (中国)
                  </div>
                </Option>
              </Select>
            </div>
          </div>
          <div className="h- bg-[white] mt-[34px]">
            <div className="h-[55px] mb-0 border-b-[#929395] border-b-[1px] flex items-center">
              <span className="text-[22px] font-[700] leading-[25.3px] mb-0 ml-[29px]">
                Rating
              </span>
            </div>
            <div className="mx-[27px] mt-[28px] pb-[87px] ">
              <Select
                style={{
                  width: "100%",
                }}
              >
                <Option value="1">1</Option>
                <Option value="2">2</Option>
                <Option value="3">3</Option>
                <Option value="4">4</Option>
                <Option value="5">5</Option>
              </Select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductUpdatePage;
