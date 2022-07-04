import React from 'react'
import { useSelector } from 'react-redux'
import { selectUserDetail } from '../redux/Admin/selector'
import { AiOutlineCheck } from 'react-icons/ai';

function UserDetail() {
    const user = useSelector(selectUserDetail)
    console.log(user);
  return (
    <div className='w-[1217px] h-[946px] bg-[#E5E5E5]'>
      <div>
          <p className="w-[371px] h-[18px] ml-[32px] pt-[25px] font-arial not-italic font-medium text-[18px] leading-[21px] text-[#929395]">
              DashBoard / User / User Detail #{user.id}
          </p>
          <p className="w-[300px] h-[31px] ml-[31px] pt-[15px] mt-[21px] font-WorkSans not-italic font-semibold text-[35px] leading-[41px]">User Detail #{user.id}</p>
          <p className="w-[98px] h-[19px] ml-[35px] mt-[10px] font-arial not-italic font-medium text-[16px] leading-[19px] text-[#929395]">
              User ID : {user.id}
          </p>
      </div>
      <div className='flex flex-col w-[1141px] h-[749px] bg-[#FFFFFF] ml-[40px] mt-[28px] shadow-image'>
            <img
                className="w-[238px] h-[238px] mt-[33px] ml-[423px]"
                src={user.avatar}
            />
            <p className="w-[172px] h-[41px] mt-[19px] ml-[480px] font-semibold mb-0 text-[35px] leading-[41px] not-italic font-WorkSans">{user.username}</p>
            <p className="w-[246px] h-[29px] mt-[7px] ml-[430px] font-semibold mb-0 text-[#2234D2] text-[25px] leading-[29px] not-italic font-WorkSans">{user.email}</p>
            <p className="w-[134px] h-[29px] mt-[8px] ml-[510px] font-normal mb-0 text-[25px] leading-[29px] not-italic font-WorkSans">{user.contact ? user.contact : 'null'}</p>
            <hr className="w-[1093px] ml-[20px] h-0 border border-solid border-[#929395] mt-[23px]" />
            <div className="flex flex-row">
                <p className="w-[67px] h-[29px] mt-[30px] ml-[410px] mb-0 text-[25px] leading-[29px] font-WorkSans not-italic font-medium">Role:</p>
                <p className="w-[123px] h-[39px] mt-[19px] ml-[141px] mb-0 pt-[6px] text-[25px] leading-[29px] text-center text-[#FFFFFF] font-WorkSans not-italic font-medium bg-[#4B9528] rounded-[50px]">{user.role}</p>
            </div>
            <div className="flex flex-row">
                <p className="w-[92px] h-[29px] mt-[29px] ml-[410px] mb-0 text-[25px] leading-[29px] font-WorkSans not-italic font-medium">Status:</p>
                <p className="w-[123px] h-[39px] mt-[22px] ml-[117px] mb-0 pt-[6px] text-[25px] leading-[29px] text-center text-[#FFFFFF] font-WorkSans not-italic font-medium bg-[#4B9528] rounded-[50px]">{user.isActive ? 'Active' : 'Disabled'}</p>
            </div>
            <div >
                {user.isEmailVerified ?  
                (
                    <div className="flex flex-row">
                        <p className="w-[200px] h-[29px] mt-[33px] ml-[410px] mb-0 text-[25px] leading-[29px] font-WorkSans not-italic font-medium">Verify Email:</p>
                        <p className="w-[35px] h-[35px] mt-[23px] ml-[51px] mb-0 p-[6px] text-[25px] leading-[29px] text-center text-[#FFFFFF] font-WorkSans not-italic font-medium bg-[#4B9528] rounded-[50px]"><AiOutlineCheck /></p>
                    </div>
                ) : 
                (
                    <div className="flex flex-row">
                        <p className="w-[160px] h-[29px] mt-[33px] ml-[410px] mb-0 text-[25px] leading-[29px] font-WorkSans not-italic font-medium">Verify Email:</p>
                        <p className="w-[35px] h-[35px] mt-[23px] ml-[91px] mb-0 p-[6px] text-[25px] leading-[29px] text-center text-[#FFFFFF] font-WorkSans not-italic font-medium bg-[#af1818] rounded-[50px]">x</p>
                    </div>)
                }
            </div>
            <div className="flex flex-row">
            {user.isContactVerified ?  
                (
                    <div className="flex flex-row">
                        <p className="w-[200px] h-[29px] mt-[33px] ml-[410px] mb-0 text-[25px] leading-[29px] font-WorkSans not-italic font-medium">Verify Contact:</p>
                        <p className="w-[35px] h-[35px] mt-[23px] ml-[51px] mb-0 p-[6px] text-[25px] leading-[29px] text-center text-[#FFFFFF] font-WorkSans not-italic font-medium bg-[#4B9528] rounded-[50px]"><AiOutlineCheck /></p>
                    </div>
                ) : 
                (
                    <div className="flex flex-row">
                        <p className="w-[200px] h-[29px] mt-[33px] ml-[410px] mb-0 text-[25px] leading-[29px] font-WorkSans not-italic font-medium">Verify Contact:</p>
                        <p className="w-[35px] h-[35px] mt-[25px] ml-[51px] mb-0 pt-[4px] text-[25px] leading-[29px] text-center text-[#FFFFFF] font-WorkSans not-italic font-medium bg-[#af1818] rounded-[50px]">x</p>
                    </div>)
                }
            </div>
      </div>
    </div>
  )
}

export default UserDetail
