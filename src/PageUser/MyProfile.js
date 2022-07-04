import React, { useEffect, useState } from 'react';
// import 'antd/dist/antd.css';
import './tableMyProfile.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectOrders } from '../redux/Orders/selectors';
import { Form, Table } from 'antd';
import { useNavigate } from 'react-router-dom';
import { selectAccessToken, selectUser } from '../redux/auth/selector';
import { getAllOrder } from '../redux/Orders/actions';

function MyProfile() {
  const nav = useNavigate();
  const handleEdit = () => {
    nav('/userdetail/editprofile');
  };
  const accessToken = useSelector(selectAccessToken)
  const dispatch = useDispatch();

  useEffect(() => {
    getAllOrder(accessToken, dispatch) 
  }, [])

  const user = useSelector(selectUser);
  const userRender = {
    avatar: user?.avatar,
    username: user?.username,
    email: 'Email:' + user?.email,
    address: 'Address: ' + user?.address,
    contact: 'Phone: ' + user?.contact,
  };

  const listOrder = useSelector(selectOrders);
  const listOrders = listOrder?.map((item) => ({
    key: '#' + item.id,
    createdAt: item.createdAt.slice(0, 10),
    status: item.status,
    total: '$' + item.totalPrice.toFixed(2),
  }));
  console.log(listOrders);

  const [form] = Form.useForm();
  // const [data, setData] = useState(listOrders?.reverse());
  // console.log(data);

  const columns = [
    {
      title: 'Order',
      dataIndex: 'key',
      editable: true,
      height: '54px',
      //   render: (text) => (
      //     <div style={{ backgroundColor: 'lightblue', padding: 10 }}>{text}</div>
      //   ),
    },
    {
      title: 'Date',
      dataIndex: 'createdAt',
      editable: true,
    },
    {
      title: 'Status',
      dataIndex: 'status',
      editable: true,
    },
    {
      title: 'Total',
      dataIndex: 'total',

      editable: true,
    },
  ];
  return (
    <div className="flex-col">
      <div className=" w-[835px] h-[258px] bg-opacity-40 bg-[#B6B6B6]">
        <div className="flex flex-row">
          <img
            className="rounded-full w-[128px] h-[128px] mt-[30px] ml-[33px]"
            src={userRender.avatar}
          />
          <div className="flex flex-col ">
            <p className="w-[65px] h-[42px] ml-[35px] mt-[39px] mb-0 font-roboto font-bold text-[36px] leading-[42px] not-italic">
              {userRender.username}
            </p>
            <p className="w-[195px] h-[23px] ml-[35px] mt-[3px] mb-0 font-roboto font-bold text-[20px] leading-[23px] not-italic">
              {userRender.email}
            </p>
            <p className="w-[619px] h-[23px] ml-[35px] mt-[10px] mb-0 font-roboto font-bold text-[20px] leading-[23px] not-italic">
              {userRender.address}
            </p>
            <p className="w-[619px] h-[23px] ml-[35px] mt-[10px] mb-0 font-roboto font-bold text-[20px] leading-[23px] not-italic">
              {userRender.contact}
            </p>
            <button
              onClick={handleEdit}
              className="w-[157px] h-[39px] ml-[35px] mt-[28px] bg-[#FFD333] rounded-[5px] font-roboto font-bold text-[16px] leading-[19px] not-italic"
            >
              Edit Profile
            </button>
          </div>
        </div>
      </div>
      <div>
        <p className="w-[180px] h-[38px] ml-[31px] mt-[19px] mb-[18px] font-roboto font-bold text-[28px] leading-[33px] not-italic">
          Recent Orders
        </p>
      </div>
      <div>
        <Form form={form} component={false}>
          <Table
            components={{
              body: {
                // cell: EditableCell,
              },
            }}
            bordered
            dataSource={listOrders}
            columns={columns}
            rowClassName="editable-row"
            pagination={{ pageSize: 4, position: 'bottom center' }}
          />
        </Form>
      </div>
    </div>
  );
}

export default MyProfile;
