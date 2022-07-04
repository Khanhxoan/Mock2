import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  Col,
  Form,
  Input,
  InputNumber,
  message,
  Row,
  Select,
  Upload,
} from "antd";
import "./antd.css";
import upload from "../Assets/Upload.png";
import { Option } from "antd/lib/mentions";
import { useForm } from "antd/lib/form/Form";
import { createNewProduct } from "../redux/product/action";
import { selectAccessToken } from "../redux/auth/selector";

const ProductCreatePage = () => {
  const navigte = useNavigate();
  const dispatch = useDispatch();
  const accessToken = useSelector(selectAccessToken);
  console.log(accessToken);

  const [form] = Form.useForm();
  const onFinish = async (value) => {
    const newProduct = {
      name: value.name,
      category: value.category[0],
      countInStock: value.countInStock,
      description: value.description,
      imageUrls: [`${value.imageUrls}`],
      brand: value.brand,
      price: value.price,
      rating: value.rating,
    };
    await createNewProduct(dispatch, newProduct, accessToken);
    form.resetFields();
  };

  // ********************* Uploadimage
  const getBase64 = (img, callback) => {
    const reader = new FileReader();
    reader.addEventListener("load", () => callback(reader.result));
    reader.readAsDataURL(img);
  };

  const beforeUpload = (file) => {
    const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";

    if (!isJpgOrPng) {
      message.error("You can only upload JPG/PNG file!");
    }

    const isLt2M = file.size / 1024 / 1024 < 2;

    if (!isLt2M) {
      message.error("Image must smaller than 2MB!");
    }

    return isJpgOrPng && isLt2M;
  };

  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState();

  const handleChange = (info) => {
    if (info.file.status === "uploading") {
      setLoading(true);
      return;
    }

    if (info.file.status === "done") {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj, (url) => {
        setLoading(false);
        setImageUrl(url);
      });
    }
  };

  const UploadImage = () => {
    return (
      <Upload
        name="avatar"
        className="avatar-uploader"
        showUploadList={false}
        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
        beforeUpload={beforeUpload}
        onChange={handleChange}
      >
        {imageUrl ? (
          <img
            src={imageUrl}
            alt="avatar"
            style={{
              width: "100px",
              height: "100px",
              marginBottom: "25px",
              marginTop: "25px",
            }}
          />
        ) : (
          <img src={upload} className="my-[25px] h-[100px] w-[80px] mx-auto" />
        )}
      </Upload>
    );
  };

  return (
    <div className="h-[100vh]">
      <Form onFinish={onFinish} form={form}>
        <div className="ml-[32px] mt-[25px]">
          <div>
            <Form.Item>
              <p>
                <Link className="text-[black]" to="/admin">
                  Dashboard
                </Link>{" "}
                / <span>Product</span> / <span>Update product</span>
              </p>
              <div className="flex items-center justify-between">
                <div>
                <h1 className="mb-0 text-[35px] leading-[41.06px] font-WorkSans">
                  Update Product #423
                </h1>
                <p className="mb-[-21.5px]">Product ID : 423</p>
                </div>
                
                <button
                  type="submit"
                  className="px-[10px] h-[40px] mr-[36px] rounded-[5px] bg-[#FFD333] text-[20px] leading-[23.46px] font-[600] font-WorkSans"
                >
                  Save
                </button>
              </div>
            </Form.Item>
          </div>
          <div className="flex mr-[32px] mt-[46px] h-[760px]">
            <div className="w-[58.8%] h-full mr-[32px] bg-[white]">
              <div className="h-[55px] mb-0 bg-[white] border-b-[#929395] border-b-[1px] flex items-center">
                <span className="text-[22px] font-[700] leading-[25.3px] mb-0 ml-[29px]">
                  Basic Information
                </span>
              </div>

              <div className="px-[29px] pt-[21px] bg-[white]">
                <div>
                  <p className="name-field">Name</p>
                  <Form.Item name="name">
                    <Input
                      style={{ height: "40px" }}
                      className="name-field"
                      placeholder="Name"
                    />
                  </Form.Item>
                </div>
                <div>
                  <p className="name-field mt-[29px]">Description</p>
                  <Form.Item name="description">
                    <Input.TextArea
                      placeholder="Description"
                      autoSize={{
                        minRows: 4.65,
                      }}
                      className="name-field"
                    />
                  </Form.Item>
                </div>
                <div className="mt-[29px]">
                  <Row>
                    <Col span={12}>
                      <p className="name-field">Price</p>
                      <Form.Item
                        name="price"
                        style={{ marginRight: "20px", marginBottom: 0 }}
                      >
                        <InputNumber
                          className="name-field"
                          placeholder="Price"
                        />
                      </Form.Item>
                    </Col>
                    <Col span={12}>
                      <Form.Item
                        style={{ marginLeft: "20px", marginBottom: 0 }}
                      >
                        <p className="name-field">Discount Percent</p>
                        <InputNumber
                          defaultValue={100}
                          min={0}
                          max={100}
                          placeholder="Discount"
                          className="name-field"
                        />
                      </Form.Item>
                    </Col>
                  </Row>
                </div>
                <p className="name-field mt-[37px]">Brand</p>
                <Form.Item style={{ marginBottom: 0 }} name="brand">
                  <Input
                    style={{ height: "40px", marginBottom: "37px" }}
                    className="name-field"
                  />
                </Form.Item>
                <p className="name-field">Stock quantity</p>
                <Form.Item style={{ marginBottom: 0 }} name="countInStock">
                  <InputNumber style={{ height: "40px" }} className="name-field" />
                </Form.Item>
              </div>
            </div>
            <div className="w-[41.2%] h-[676px]">
              <div className="bg-[white]">
                <div className="h-[55px] mb-0 border-b-[#929395] border-b-[1px] flex items-center">
                  <span className="text-[22px] font-[700] leading-[25.3px] mb-0 ml-[29px]">
                    Images
                  </span>
                </div>
                <div className=" flex-col">
                  <div className="flex justify-center">
                    <UploadImage />
                  </div>
                  <Form.Item name="imageUrls">
                    <div className="flex mx-[27px] pb-[26px]">
                      <Upload
                        name="avatar"
                        className="avatar-uploader"
                        showUploadList={false}
                        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                        beforeUpload={beforeUpload}
                        onChange={handleChange}
                      >
                        <button
                          className="w-[124px] h-[40px] rounded-[2px] bg-[#C4CDD5] text-[18px] font-[400] text-[black] leading-[20.7px]"
                        >
                          Chọn tệp
                        </button>
                      </Upload>
                      <Input
                        style={{ borderColor: "#929395", borderWidth: "1px" }}
                        className="name-field"
                        value={imageUrl}
                      />
                    </div>
                  </Form.Item>
                </div>
              </div>
              <div className="bg-[white] mt-[34px]">
                <div className="h-[55px] mb-0 border-b-[#929395] border-b-[1px] flex items-center">
                  <span className="text-[22px] font-[700] leading-[25.3px] mb-0 ml-[29px]">
                    Categories
                  </span>
                </div>
                <div className="mx-[27px] py-[28px]">
                  <Form.Item name="category">
                    <Select
                      mode="multiple"
                      style={{
                        width: "100%",
                      }}
                      placeholder="select one country"
                      optionLabelProp="label"
                      className="name-field"
                    >
                      <Option value="Ao khoac" label="Ao khoac">
                        <div className="demo-option-label-item">Ao khoac</div>
                      </Option>
                      <Option value="Hand Bag" label="Hand Bag">
                        <div className="demo-option-label-item">Hand Bag</div>
                      </Option>
                      <Option value="Clothing" label="Clothing">
                        <div className="demo-option-label-item">Clothing</div>
                      </Option>
                      <Option value="Jewels" label="Jewels">
                        <div className="demo-option-label-item">Jewels</div>
                      </Option>
                      <Option value="cooking" label="cooking">
                        <div className="demo-option-label-item">cooking</div>
                      </Option>
                      <Option value="Glasses" label="Glasses">
                        <div className="demo-option-label-item">Glasses</div>
                      </Option>
                      <Option value="Wallet" label="Wallet">
                        <div className="demo-option-label-item">Wallet</div>
                      </Option>
                      <Option value="Shoes" label="Shoes">
                        <div className="demo-option-label-item">Shoes</div>
                      </Option>
                    </Select>
                  </Form.Item>
                </div>
              </div>
              <div className="h- bg-[white] mt-[34px]">
                <div className="h-[55px] mb-0 border-b-[#929395] border-b-[1px] flex items-center">
                  <span className="text-[22px] font-[700] leading-[25.3px] mb-0 ml-[29px]">
                    Rating
                  </span>
                </div>
                <div className="mx-[27px] mt-[28px] pb-[156.74px] ">
                  <Form.Item name="rating">
                    <Select
                      style={{
                        width: "100%",
                      }}
                      className="name-field"
                    >
                      <Option value="1">1</Option>
                      <Option value="2">2</Option>
                      <Option value="3">3</Option>
                      <Option value="4">4</Option>
                      <Option value="5">5</Option>
                    </Select>
                  </Form.Item>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Form>
    </div>
  );
};

export default ProductCreatePage;
