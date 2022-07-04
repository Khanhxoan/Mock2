import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
  changeAvatar,
  changeContact,
  changeEmail,
  changePassword,
  changeUsername,
} from '../redux/auth/action';
import { selectAccessToken, selectUser } from '../redux/auth/selector';

function EditProfile() {
  const dispatch = useDispatch();
  const accessToken = useSelector(selectAccessToken);
  const nav = useNavigate();
  const [user, setUser] = useState({
    username: '',
    email: '',
    oldPassword: '',
    password: '',
    contact: '',
    avatar: '',
  });
  const handleUserName = async () => {
    console.log('start');
    console.log(user.username);
    await changeUsername(accessToken, user.username);
    // nav('/userdetail/myprofile');
  };
  const handleEmail = async () => {
    await changeEmail(accessToken, user.email);
    // nav('/userdetail/myprofile');
  };
  const handlePassword = async () => {
    console.log(user.password);
    console.log(user.oldPassword);
    await changePassword(accessToken, user.password, user.oldPassword);
    // nav('/userdetail/myprofile');
  };
  const handleContact = async () => {
    console.log(user.contact);
    await changeContact(accessToken, user.contact);
    // nav('/userdetail/myprofile');
  };
  const handleAvatar = async () => {
    await changeAvatar(accessToken, user.avatar);
    // nav('/userdetail/myprofile');
  };
  const onChangeInput = function (event) {
    const { name, value } = event.target;
    console.log(value);
    setUser({ ...user, [name]: value });
  };
  return (
    <div className="flex flex-col">
      <p className="not-italic text-center mt-7 font-bold text-[36px] leading-7 font-roboto">
        Edit Profile
      </p>
      <div className="flex flex-row">
        <input
          className="w-[700px] p-4 h-[50px] mt-[50px] ml-[50px] text-[22px] rounded-[5px] mr-10 font-roboto text-[#757575] border-2"
          name="username"
          type="text"
          placeholder="username"
          value={user.username}
          onChange={onChangeInput}
        />
        <button
          onClick={handleUserName}
          className="w-[250px] h-[50px] mt-[50px] mr-10 bg-[#FFD333] rounded-[5px] font-roboto font-bold text-[20px] leading-[19px] not-italic"
        >
          Change username
        </button>
      </div>
      <div className="flex flex-row">
        <input
          className="w-[700px] p-4 h-[50px] mt-[50px] ml-[50px] text-[22px] rounded-[5px] mr-10 font-roboto text-[#757575] border-2"
          name="email"
          type="email"
          placeholder="Email@mail.com"
          value={user.email}
          onChange={onChangeInput}
        />
        <button
          onClick={handleEmail}
          className="w-[250px] h-[50px] mt-[50px] mr-10 bg-[#FFD333] rounded-[5px] font-roboto font-bold text-[20px] leading-[19px] not-italic"
        >
          Change email
        </button>
      </div>
      <div className="flex flex-row">
        <input
          className="w-[230px] p-4 h-[50px] mt-[50px] ml-[50px] text-[22px] rounded-[5px] mr-10 font-roboto text-[#757575] border-2"
          name="oldPassword"
          type="password"
          placeholder="Old Password"
          value={user.oldPassword}
          onChange={onChangeInput}
        />
        <input
          className="w-[230px] p-4 h-[50px] mt-[50px] ml-[20px] text-[22px] rounded-[5px] mr-10 font-roboto text-[#757575] border-2"
          name="password"
          type="password"
          placeholder="New Password"
          value={user.password}
          onChange={onChangeInput}
        />
        <button
          onClick={handlePassword}
          className="w-[250px] h-[50px] mt-[50px] mr-10 bg-[#FFD333] rounded-[5px] font-roboto font-bold text-[20px] leading-[19px] not-italic"
        >
          Change password
        </button>
      </div>
      <div className="flex flex-row">
        <input
          className="w-[700px] p-4 h-[50px] mt-[50px] ml-[50px] text-[22px] rounded-[5px] mr-10 font-roboto text-[#757575] border-2"
          name="contact"
          type="text"
          placeholder="Contact"
          value={user.contact}
          onChange={onChangeInput}
        />
        <button
          onClick={handleContact}
          className="w-[250px] h-[50px] mt-[50px] mr-10 bg-[#FFD333] rounded-[5px] font-roboto font-bold text-[20px] leading-[19px] not-italic"
        >
          Change contact
        </button>
      </div>
      <div className="flex flex-row">
        <input
          className="w-[700px] p-4 h-[50px] mt-[50px] ml-[50px] text-[22px] rounded-[5px] mr-10 font-roboto text-[#757575] border-2"
          name="avatar"
          type="text"
          placeholder="Avatar"
          value={user.avatar}
          onChange={onChangeInput}
        />
        <button
          onClick={handleAvatar}
          className="w-[250px] h-[50px] mt-[50px] mr-10 bg-[#FFD333] rounded-[5px] font-roboto font-bold text-[20px] leading-[19px] not-italic"
        >
          Change avatar
        </button>
      </div>
    </div>
  );
}

export default EditProfile;