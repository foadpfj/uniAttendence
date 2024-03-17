import React from "react";
import { MdAddAPhoto } from "react-icons/md";

const UserInfo = () => {
  return (
    <div className="profile__main__left">
      <div className="profile__main__left__setpic">
        <div className="profile__main__left__setpic__logo">
          <MdAddAPhoto />
          <img
            src=""
            alt=""
            className="profile__main__left__setpic__logo--userpic"
          />
        </div>
      </div>
      <div className="profile__main__left__setinfo">
        <div className="profile__main__left__setinfo__name">
          <label className="profile__main__left__setinfo__name--label">
            نام و نام خانوادگی
          </label>
          <input
            className="profile__main__left__setinfo__name--input"
            type="text"
            placeholder="نام و نام خانوادگی خود را وارد کنید"
          />
        </div>
        <div className="profile__main__left__setinfo__sex">
          <label className="profile__main__left__setinfo__sex--label">
            جنسیت
          </label>
          <select
            className="profile__main__left__setinfo__sex--select"
            placeholder="جنسیت را انتخاب کنید"
          >
            <option value>جنسیت را انتخاب کنید</option>
            <option value="1">مرد</option>
            <option value="2">زن</option>
          </select>
        </div>
        <div className="profile__main__left__setinfo__birth">
          <label className="profile__main__left__setinfo__birth--label">
            تاریخ تولد
          </label>
          <input
            className="profile__main__left__setinfo__birth--input"
            type="text"
            placeholder="روز / ماه / سال"
          />
        </div>
      </div>
      <div className="profile__main__left__submit">
        <button className="profile__main__left__submit--button">
          بروز رسانی
        </button>
      </div>
    </div>
  );
};

export default UserInfo;
