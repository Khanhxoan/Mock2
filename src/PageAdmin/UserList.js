import Item from 'antd/lib/list/Item'
import { useDispatch, useSelector } from 'react-redux'
import { selectAllUser } from '../redux/Admin/selector'
import './app.css'
import { BsSearch } from 'react-icons/bs';
import { FiEdit } from 'react-icons/fi';
import { FiTrash2 } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom'
import { getUserById, getUsersPageSize } from '../redux/Admin/action'
import { selectAccessToken } from '../redux/auth/selector'
import { useEffect, useState } from 'react';
import { IoMdSearch } from "react-icons/io";
import { FaSort } from "react-icons/fa";
import { RiArrowRightSLine } from "react-icons/ri";
import { RiArrowLeftSLine } from "react-icons/ri";

function UserList() {
    const [query, setQuery] = useState('') 
    const User = useSelector(selectAllUser)
    console.log(User);
    const [order, setOrder] = useState("ASC")
    const nav = useNavigate();
    const dispatch = useDispatch();
    const accessToken = useSelector(selectAccessToken)
    const [page, setPage] = useState(1);
    const [size, setSize] = useState(4);

    let [num, setNum] = useState(1);
    let [cur, setCur] = useState(1);
    // const UserPreprocess = data.map((item, index) => ({
    //   key: index +1,
    //   id: item.id,
    //   username: item.username,
    //   email: item.email,
    //   role: item.role,
    //   contact: item.contact ? item.contact : 'null',
    //   isActive: item.isActive ? 'Active' : 'Disabled',
    //   isEmailVerified: item.isEmailVerified ? 'Yes' : 'No',
    //   isContactVerified: item.isContactVerified ? 'Yes' : 'No',
    // }));

    // const [User, setUser] = useState(data)
    console.log(User);
    const pages = [
        { page: num },
        { page: num + 1 },
        { page: num + 2 },
        { page: num + 3 },
        { page: num + 4 },
    ];
    const Next = () => {
        setNum(++num);
    };
    const Back = () => {
        num > 1 && setNum(--num);
    };

    const sorting = (col) => {
      if (order === 'ASC'){
        // const sorted = [...User].sort((a,b) => {
        //   a[col] > b[col] ? 1 : -1
        // })
        // console.log(sorted);
        // setUser(sorted)
        setOrder("DSC")
      }
      if (order === 'DSC'){
        // const sorted = [...User].sort((a,b) => {
        //   a[col] < b[col] ? 1 : -1
        // })
        // setUser(sorted)
        setOrder("ASC")
      }
    }

    const handleClick = async (id) => {
        await getUserById(accessToken, dispatch, id)
        nav('/admin/userdetail')
    }

    useEffect(() => {
      getUsersPageSize( accessToken, dispatch, page, size);
    }, [size]);
  return (
  <div className='w-[1217px] h-[945px] bg-[#F5F7FA]'> 
    <div className='relative'>
      <p className="w-[226px] h-[18px] ml-[32px] pt-[25px] font-arial not-italic font-medium text-[18px] leading-[21px] text-[#929395]">DashBoard / User</p>
      <p className="w-[227px] h-[31px] ml-[31px] pt-[15px] mt-[21px] font-WorkSans not-italic font-semibold text-[35px] leading-[41px]">User</p>
      <button className='absolute w-[111.83px] h-[40px] right-[39px] top-[55px] font-WorkSans not-italic font-semibold text-[20px] leading-[23px] bg-[#FFD333] rounded-[5px]'>New user</button>
    </div>
    <div>
        <div className="w-[1153px] h-[760px] ml-[32px] shadow-user mt-[47px] bg-[#FFFFFF] pt-[0.1px]">
        <div className='w-[1093px] h-[51.08px] flex border-[1.5px] border-[#C4C4C4] ml-[30px] mt-[43.92px]'>
            <IoMdSearch
                className="w-[30px] h-[30px] ml-[24px] mt-[10px]"
                color="#929395"
              />
            <input className='w-[1060px] text-[20px] focus:outline-none' type='text' placeholder="Search user" onChange={(e) => setQuery(e.target.value)}/>
        </div>
        <hr className="w-[1153px] h-0 border border-solid border-[#6b6b6b] mt-[30.9px]" />
        <table>
          <thead>
            <tr className='w-[100px] h-[20.3px]'>
              <th className='w-[50px] h-[20.3px] pl-[31px]' >ID</th>
              <th onClick = {()=>sorting('username')} className='text-left pl-8'>User</th>
              <th onClick = {()=>sorting('contact')} className='text-center'>Contact</th>
              <th onClick = {()=>sorting('isActive')} className='text-center'>Status</th>
              <th onClick = {()=>sorting('isEmailVerified')} className='text-center'>Verify Email</th>
              <th onClick = {()=>sorting('isContactVerified')} className='text-center'>Verify Contact</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {User?.filter((val) => {
                    if (query === "") {
                      return val;
                    } else if (
                      val.username
                        .toLowerCase()
                        .includes(query.toLowerCase()) ||
                        (val.contact ? val.contact : 'null').
                        toString().toLowerCase()
                        .includes(query.toLowerCase()) || 
                        val.role.
                        toString().toLowerCase()
                        .includes(query.toLowerCase()) ||
                        (val.isActive ? 'Active' : 'Disabled')
                        .toLowerCase()
                        .includes(query.toLowerCase()) ||
                        (val.isEmailVerified ? 'Yes' : 'No')
                        .toLowerCase()
                        .includes(query.toLowerCase()) ||
                        (val.isContactVerified ? 'Yes' : 'No')
                        .toLowerCase()
                        .includes(query.toLowerCase()) ||
                        val.email
                        .toLowerCase()
                        .includes(query.toLowerCase()) ||
                        val.id === query
                    ) {
                      return val;
                    }
                  }).map((user, index) => (
              <tr onClick={()=>{handleClick(user.id)}} key={user.id} className='text-center border-t border-solid border-[#929395] h-[50px]'>
                <td className='w-[100px] text-[20px] leading-[23px]'>{index + 1}</td>
                <td className='relative w-[100px] text-[20px] leading-[23px]' >
                  <div>
                      <img
                        className="absolute w-[60px] h-[60px] mt-[14px] ml-[26px] mb-[13px]"
                        src={user.avatar}
                      />
                      <div className= 'flex flex-row'>
                      <p className='truncate ml-[105px] mt-[21px]'>{user.username}</p>
                      {user.role === 'admin' ? <p className='w-[65px] h-[18px] ml-[10px] bg-[#4B9528] rounded-[10px] font-semibold text-[12px] leading-[14px] text-[#FFFFFF] mt-[26px]'>{user.role}</p> : <p className=' h-[18px] ml-[10px] text-[#FFFFFF] w-[65px] ml-[18px] mt-[26px] bg-[#E13A44] rounded-[10px] font-semibold text-[12px] leading-[14px]'>{user.role}</p> }
                    </div>
                    <p className=' ml-[105px] mt-[-10px] truncate font-arial font-medium not-italic text-[18px] w-[174px] leading-[21px]'>{user.email}</p>
                  </div>
                  </td>
                <td className='w-[100px] text-[20px] leading-[23px]' >{user.contact ? user.contact : 'null'}</td>
                <td className='w-[100px] text-[20px] leading-[23px]' >{user.isActive ? 'Active' : 'Disabled'}</td>
                <td className='w-[100px] text-[20px] leading-[23px]'>{user.isEmailVerified ? 'Yes' : 'No'}</td>
                <td className='w-[100px] text-[20px] leading-[23px]'>{user.isContactVerified ? 'Yes' : 'No'}</td>
                <td className="w-[100px] mt-[32px] flex flex-row justify-center">
                  <FiEdit
                      className=" w-[25px] h-[25px] cursor-pointer"
                      color="#387B18"
                    />
                    <FiTrash2
                      className="w-[25px] h-[25px] ml-[30px] cursor-pointer"
                      color="#F02020"
                    />
                    </td>
              </tr>
            ))
            }
          </tbody>
      </table>
      <div className="flex justify-between">
              <div className="flex mt-[20px] ml-[30px]">
                <button
                  onClick={Back}
                  className='w-[32px] h-[32px] text-center 
                text-[14px] font-bold font-sans bg-[#DFE3E8] rounded-[4px] flex justify-center align-middle
                hover:bg-[#919EAB] hover:text-[#FFD333]
                    '
                >
                  <RiArrowLeftSLine size={20} className="my-auto" />
                </button>
                {pages?.map((pg, i) => (
                  <button
                    key={i}
                    onClick={() => {
                      setCur(pg.page);
                      getUsersPageSize(accessToken,dispatch, pg.page, size);
                    }}
                    className={`w-[32px] h-[32px] ml-[8px] text-center 
                text-[14px] font-bold font-sans bg-[#DFE3E8] rounded-[4px] 
                ${cur === pg.page ? " bg-mainbar": ''}`}
                  >
                    {pg.page}
                  </button>
                ))}
                <button
                  onClick={Next}
                  className="w-[32px] h-[32px] ml-[8px] text-center 
                text-[14px] font-bold font-sans bg-[#DFE3E8] rounded-[4px]  hover:bg-[#919EAB] hover:text-[#FFD333] flex justify-center align-middle"
                >
                  <RiArrowRightSLine size={20} className="my-auto" />
                </button>
              </div>
              <div className="flex mt-[20px] mr-[40px]">
                <p className="w-[133px] h-[30px] text-[20px] font-roboto">
                  Items per page{" "}
                </p>
                <input
                  type="number"
                  onChange={(e) => {
                    setSize(e.target.value);
                  }}
                  className="w-[50px] h-[30px] rounded-[2px] border border-solid border-[#929395] text-[16px] text-center mt-[2px] ml-[5px]"
                  defaultValue={10}
                />
              </div>
            </div>
    </div>
    </div>
  </div>
  )
}

export default UserList