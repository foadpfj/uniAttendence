import React, { useState } from "react";
import Favorite from "../../components/profileComponents/Favorite";
import Menu from "../../components/profileComponents/Menu";
import PaymentRecords from "../../components/profileComponents/PaymentRecords";
import Subscription from "../../components/profileComponents/Subscription";
import UserInfo from "../../components/profileComponents/UserInfo";
import "./profile.scss";

const Profile = () => {
  const [selectedItem, setSelectedItem] = useState({
    userInfo: true,
    favorite: false,
    subscription: false,
    paymentRecords: false,
  });

  return (
    <>
      <div className="profile">
        <div className="profile__main">
          <Menu setSelectedItem={setSelectedItem} />
          {selectedItem.userInfo && <UserInfo />}
          {selectedItem.favorite && <Favorite />}
          {selectedItem.subscription && <Subscription />}
          {selectedItem.paymentRecords && <PaymentRecords />}
        </div>
      </div>
    </>
  );
};

export default Profile;
