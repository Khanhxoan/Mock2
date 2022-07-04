import React, { useEffect, useState } from 'react';
import imgApp from '../Components/imgs/shopApp.png';
import 'antd/dist/antd.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectOrders } from '../redux/order/selector';
import { Form, Table } from 'antd';
import { useNavigate } from 'react-router-dom';
import NavTabs from '../Components/NavTabs';
import {
  selectAccessToken,
  selectDeviceId,
  selectRefreshToken,
} from '../redux/auth/selector';
import { getAllOrder } from '../redux/order/action';

function OrderHistory() {
  const nav = useNavigate();

  const listOrder = useSelector(selectOrders);
  const accessToken = useSelector(selectAccessToken);
  const dispatch = useDispatch();
  const refreshToken = useSelector(selectRefreshToken);
  const deviceId = useSelector(selectDeviceId);
  const handleMyprofile = async () => {
    await getAllOrder(accessToken, dispatch);
    nav('/userdetail/myprofile');
  };
  const handleOrder = async () => {
    await getAllOrder(accessToken, dispatch);
    nav('/orderhistory');
  };
  const handleLogout = async () => {
    await logout(refreshToken, deviceId);
    nav('/');
  };

  console.log('list order' + listOrder + listOrder[0]);
  const listOrders = listOrder.map((item) => ({
    key: '#' + item.id,
    createdAt: item.createdAt.slice(0, 10),
    status: item.status,
    total: '$' + item.totalPrice.toFixed(2),
  }));
  console.log(listOrders);

  const [form] = Form.useForm();
  const [data, setData] = useState(listOrders.reverse());

  const columns = [
    {
      title: 'Order',
      dataIndex: 'key',
      width: '20%',
      editable: true,
      //   render: (text) => (
      //     <div style={{ backgroundColor: 'lightblue', padding: 10 }}>{text}</div>
      //   ),
    },
    {
      title: 'Date',
      dataIndex: 'createdAt',
      width: '14%',
      editable: true,
    },
    {
      title: 'Status',
      dataIndex: 'status',
      width: '14%',
      editable: true,
    },
    {
      title: 'Total',
      dataIndex: 'total',
      width: '14%',
      editable: true,
    },
  ];
  return (
    <div>
      <NavTabs />
      <div className="w-[215px] h-[47px] mt-[19px] ml-[159px]">
        <p className="font-bold text-[40px] text-[#000000] font-roboto not-italic leading-[47px]">
          My Account
        </p>
      </div>
      <div className="relative w-[1152px] h-[674px] mt-[23px] ml-[144px]">
        <div className="absolute w-[280px] h-[474px] shadow-userdetail rounded-[5px] border-[1px] bg-[#FFFEFE]">
          <div className="w-[141.91px] h-[33px] mt-[29px] ml-[38.13px]">
            <p className="not-italic font-roboto font-bold text-[28px] leading-[33px]">
              Navigation
            </p>
          </div>
          <div>
            <a>
              <p
                onClick={handleMyprofile}
                className=" w-[113.74px] h-[28px] mt-[29px] ml-[36.04px] hover:text-[#FFD333] font-roboto text-[24px] not-italic text-[#868484] font-medium leading-7"
              >
                My profile
              </p>
            </a>
          </div>
          <div>
            <a>
              <p
                onClick={handleOrder}
                className=" w-[149.21px] h-[28px] mt-[18px] ml-[36.04px] hover:text-[#FFD333] font-roboto text-[24px] not-italic text-[#868484] font-medium leading-7"
              >
                Order History
              </p>
            </a>
          </div>
          <div>
            <a className="" href="#">
              <p
                onClick={handleLogout}
                className=" w-[79.3px] h-[28px] mt-[24px] ml-[36.04px] hover:text-[#FFD333] font-roboto text-[24px] not-italic text-[#868484] font-medium leading-7"
              >
                Logout
              </p>
            </a>
          </div>
        </div>
        <div className="absolute ml-[315px] w-[826.41px] h-[474px] shadow-userdetail rounded-[5px] border-[1px] bg-[#FFFEFE]">
          <div className="flex-col">
            <div>
              <p className="w-[176.34px] h-[33px] ml-[30.26px] mt-[21px] font-roboto font-bold text-[28px] leading-[33px] not-italic">
                Order History
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
                  dataSource={data}
                  columns={columns}
                  rowClassName="editable-row"
                  pagination={{ pageSize: 5, position: 'bottom center' }}
                />
              </Form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderHistory;
