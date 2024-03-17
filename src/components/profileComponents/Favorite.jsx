import React from "react";
import { MdOutlineEdit } from "react-icons/md";
import { AiOutlineStar } from "react-icons/ai";
import "./favorite.scss";

const Favorite = () => {
  return (
    <div className="favorite__main__left">
      <div className="favorite__main__left__header">
        <h3 className="favorite__main__left__header--title">
          پلن های مورد علاقه
        </h3>
        <button className="favorite__main__left__header--btn">
          <MdOutlineEdit className="favorite__main__left__header--btn--svg" />
          ویرایش
        </button>
      </div>
      <div className="favorite__main__left__choice">
        <div className="favorite__main__left__choice__sectionmark">
          <div className="favorite__main__left__choice__sectionmark__logo">
            <AiOutlineStar />
          </div>
        </div>
        <h3 className="favorite__main__left__choice--text">
          شما هنوز پلن را انتخاب نکرده اید.
        </h3>
      </div>

      <div className="favorite__main__left__header">
        <h3 className="favorite__main__left__header--title">
          پلن های مورد علاقه
        </h3>
        <button className="favorite__main__left__header--btn">
          <MdOutlineEdit className="favorite__main__left__header--btn--svg" />
          ویرایش
        </button>
      </div>
      <div className="favorite__main__left__choice">
        <div className="favorite__main__left__choice__sectionmark">
          <div className="favorite__main__left__choice__sectionmark__logo">
            <AiOutlineStar />
          </div>
        </div>
        <h3 className="favorite__main__left__choice--text">
          شما هنوز پلن را انتخاب نکرده اید.
        </h3>
      </div>

      <div className="favorite__main__left__header">
        <h3 className="favorite__main__left__header--title">
          پلن های مورد علاقه
        </h3>
        <button className="favorite__main__left__header--btn">
          <MdOutlineEdit className="favorite__main__left__header--btn--svg" />
          ویرایش
        </button>
      </div>
      <div className="favorite__main__left__choice">
        <div className="favorite__main__left__choice__sectionmark">
          <div className="favorite__main__left__choice__sectionmark__logo">
            <AiOutlineStar />
          </div>
        </div>
        <h3 className="favorite__main__left__choice--text">
          شما هنوز پلن را انتخاب نکرده اید.
        </h3>
      </div>
    </div>
  );
};

export default Favorite;
