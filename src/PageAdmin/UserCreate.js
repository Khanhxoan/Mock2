import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  Button,
  Col,
  Form,
  Input,
  InputNumber,
  message,
  Radio,
  Row,
  Select,
  Upload,
} from "antd";
import "./antd.css";
import upload from "../Assets/Upload.png";
import { Option } from "antd/lib/mentions";
import { selectAccessToken } from "../redux/auth/selector";
import { createUser } from "../redux/user/action";

const UserCreatePage = () => {
  const dispatch = useDispatch();
  const accessToken = useSelector(selectAccessToken);

  const [form] = Form.useForm();
  const onFinish = async (value) => {
    const newUser = {
      username: value.username,
      email: value.email,
      password: value.confirmpassword,
      role: value.role,
      avatar: value.avatar,
      isEmailVerified: value.isEmailVerified,
      isContactVerified: value.isContactVerified,
      isActive: value.isActive
    }
    await createUser(dispatch, newUser, accessToken)
    form.resetFields();
  };

  const [valueStatus, setValueStatus] = useState("Active");

  const onChangeStatus = (e) => {
    setValueStatus(e.target.value);
  };

  const [valueVerifyEmail, setValueVerifyEmail] = useState("Yes");

  const onChangeVerifyEmail = (e) => {
    setValueVerifyEmail(e.target.value);
  };

  const [valueVerifyContact, setValueVerifyContact] = useState("Yes");

  const onChangeVerifyContact = (e) => {
    setValueVerifyContact(e.target.value);
  };

  // **************** Upload image
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
  // *********************

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
                / <span>Product</span> / <span>Create product</span>
              </p>
              <div className="flex items-center justify-between">
                <h1 className="mb-0 text-[35px] leading-[41.06px] font-WorkSans">
                  Create User
                </h1>
                <button
                  type="submit"
                  className="px-[10px] h-[40px] mr-[36px] rounded-[5px] bg-[#FFD333] text-[20px] leading-[23.46px] font-[600] font-WorkSans"
                >
                  Add User
                </button>
              </div>
            </Form.Item>
          </div>
          <div className="flex mr-[32px] mt-[46px] h-[760px]">
            <div className="w-[58.8%] h-full mr-[32px] bg-[white]">
              <div className="h-[55px] mb-0 bg-[white] border-b-[#929395] border-b-[1px] flex items-center">
                <span className="text-[22px] font-[700] leading-[25.3px] mb-0 ml-[29px]">
                  User Information
                </span>
              </div>

              <div className="px-[29px] pt-[36.5px] bg-[white]">
                <div>
                  <p className="name-field">Name</p>
                  <Form.Item name="username">
                    <Input
                      style={{ height: "40px" }}
                      className="name-field"
                      placeholder="Name"
                    />
                  </Form.Item>
                </div>
                <div>
                  <p className="name-field mt-[31px]">Email</p>
                  <Form.Item
                    name="email"
                    rules={[
                      {
                        type: "email",
                        message: "The input is not valid E-mail!",
                      },
                      {
                        required: true,
                        message: "Please input your email!",
                      },
                    ]}
                  >
                    <Input
                      style={{ height: "40px" }}
                      className="name-field"
                      placeholder="Email"
                    />
                  </Form.Item>
                </div>
                <div>
                  <p className="name-field mt-[35px]">Password</p>
                  <Form.Item
                    name="password"
                    rules={[
                      {
                        required: true,
                        message: "Please input your Password!",
                      },
                    ]}
                  >
                    <Input
                      style={{ height: "40px" }}
                      className="name-field"
                      placeholder="Password"
                    />
                  </Form.Item>
                </div>
                <div>
                  <p className="name-field mt-[40px]">Retype password</p>
                  <Form.Item
                    name="confirmpassword"
                    dependencies={["password"]}
                    rules={[
                      {
                        required: true,
                        message: "Please confirm your Password!",
                      },
                      ({ getFieldValue }) => ({
                        validator(_, value) {
                          if (!value || getFieldValue("password") === value) {
                            return Promise.resolve();
                          }
                          return Promise.reject(
                            new Error(
                              "The two passwords that you entered do not match!"
                            )
                          );
                        },
                      }),
                    ]}
                  >
                    <Input
                      style={{ height: "40px" }}
                      className="name-field"
                      placeholder="Retype password"
                    />
                  </Form.Item>
                </div>
                <div className="mt-[39px]">
                  <p className="name-field mt-[29px]">Role</p>
                  <Form.Item name="role">
                    <Select
                      style={{
                        width: "100%",
                      }}
                      className="name-field"
                    >
                      <Option value="admin">Admin</Option>
                      <Option value="user">User</Option>
                    </Select>
                  </Form.Item>
                </div>
              </div>
            </div>
            <div className="w-[41.2%] h-[760px]">
              <div className="bg-[white]">
                <div className="h-[55px] mb-0 border-b-[#929395] border-b-[1px] flex items-center">
                  <span className="text-[22px] font-[700] leading-[25.3px] mb-0 ml-[29px]">
                    Avatar
                  </span>
                </div>
                <div className="items-center">
                  <div className="flex justify-center">
                    <UploadImage />
                  </div>
                  <Form.Item name="avatar">
                    <div className="flex mx-[27px] pb-[26px]">
                      <Upload
                        name="avatar"
                        className="avatar-uploader"
                        showUploadList={false}
                        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                        beforeUpload={beforeUpload}
                        onChange={handleChange}
                      >
                        <button className="w-[124px] h-[40px] rounded-[2px] bg-[#C4CDD5] text-[18px] font-[400] text-[black] leading-[20.7px]">
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
              <div className="h-[458px] mt-[39px] bg-[#FFFFFF]">
                <div className="h-[55px] mb-0 border-b-[#929395] border-b-[1px] flex items-center">
                  <span className="text-[22px] font-[700] leading-[25.3px] mb-0 ml-[29px]">
                    Another info
                  </span>
                </div>
                <div className="mx-[27px]">
                  <div>
                    <p className="name-field mt-[19.38px]">Contact</p>
                    <Form.Item name="contact">
                      <Input
                        style={{ height: "40px" }}
                        className="name-field"
                        placeholder="Contact"
                      />
                    </Form.Item>
                  </div>
                  <div className="items-center mt-[22.66px]">
                    <Form.Item name="isActive">
                      <Row>
                        <Col span={11}>
                          <p className="mb-0 text-[18px] font-[500] leading-[21.11px]">
                            Status
                          </p>
                        </Col>
                        <Col span={13}>
                          <Radio.Group
                            onChange={onChangeStatus}
                            defaultValue="false"
                            value={valueStatus}
                            style={{
                              width: "100%",
                              fontSize: "18px",
                              fontWeight: 500,
                            }}
                          >
                            <Row>
                              <Col span={12}>
                                <Radio value="true">Active</Radio>
                              </Col>
                              <Col span={12}>
                                <Radio value="false">Disabled</Radio>
                              </Col>
                            </Row>
                          </Radio.Group>
                        </Col>
                      </Row>
                    </Form.Item>
                  </div>
                  <div className="items-center mt-[38px]">
                    <Form.Item name="isEmailVerified">
                      <Row>
                        <Col span={11}>
                          <p className="mb-0 text-[18px] font-[500] leading-[21.11px]">
                            Verify Email
                          </p>
                        </Col>
                        <Col span={13}>
                          <Radio.Group
                            onChange={onChangeVerifyEmail}
                            value={valueVerifyEmail}
                            defaultValue="false"
                            style={{
                              width: "100%",
                              fontSize: "18px",
                              fontWeight: 500,
                            }}
                          >
                            <Row>
                              <Col span={12} offset={0}>
                                <Radio value={"true"}>Yes</Radio>
                              </Col>
                              <Col span={12} offset={0}>
                                <Radio value={"false"}>No</Radio>
                              </Col>
                            </Row>
                          </Radio.Group>
                        </Col>
                      </Row>
                    </Form.Item>
                  </div>
                  <div className="items-center mt-[38px]">
                    <Form.Item name="isContactVerified">
                      <Row>
                        <Col span={11} push={0}>
                          <p className="mb-0 text-[18px] font-[500] leading-[21.11px]">
                            Verify Contact
                          </p>
                        </Col>
                        <Col span={13} push={0}>
                          <Radio.Group
                            onChange={onChangeVerifyContact}
                            defaultValue="false"
                            value={valueVerifyContact}
                            style={{
                              width: "100%",
                              fontSize: "18px",
                              fontWeight: 500,
                            }}
                          >
                            <Row>
                              <Col span={12} offset={0}>
                                <Radio value="true">Yes</Radio>
                              </Col>
                              <Col span={12} offset={0}>
                                <Radio value="false">No</Radio>
                              </Col>
                            </Row>
                          </Radio.Group>
                        </Col>
                      </Row>
                    </Form.Item>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Form>
    </div>
  );
};

export default UserCreatePage;
