import React from "react";
import "./subscription.scss";

const Subscription = () => {
  return (
    <div className="subscription__main__left">
      <div className="subscription__main__left__sectionmark">
        <div className="subscription__main__left__sectionmark__logo">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="70"
            height="70"
            viewBox="0 0 16 16"
          >
            <g
              id="Page-1"
              stroke="none"
              stroke-width="1"
              fill="none"
              fill-rule="evenodd"
            >
              <g id="Subscription" fill="currentColor" fill-rule="nonzero">
                <path
                  d="M12.583 2.708c1.197 0 2.167.97 2.167 2.167v6.25c0 1.197-.97 2.167-2.167 2.167H3.417c-1.197 0-2.167-.97-2.167-2.167v-6.25c0-1.197.97-2.167 2.167-2.167h9.166zm0 1H3.417c-.645 0-1.167.523-1.167 1.167v6.25c0 .644.522 1.167 1.167 1.167h9.166c.645 0 1.167-.523 1.167-1.167v-6.25c0-.644-.522-1.167-1.167-1.167zM7.177 5.73L9.657 6.9c.437.19.719.622.719 1.099s-.282.908-.705 1.093L7.177 10.27c-.328.154-.71.137-1.02-.04-.325-.182-.529-.524-.533-.902V6.666c.004-.373.208-.716.528-.893.314-.18.696-.197 1.025-.043zm-.533.914c-.012.007-.02.02-.02.028v2.65c0 .014.008.027.027.038.031.018.07.02.1.005l2.506-1.183c.072-.031.119-.103.119-.182 0-.08-.047-.15-.132-.188L6.753 6.635c-.033-.015-.07-.013-.11.009z"
                  transform="translate(-258 -27) translate(173 19) translate(16 5) translate(69 3)"
                ></path>
              </g>
            </g>
          </svg>
        </div>
      </div>
      <div className="subscription__main__left__create">
        <p className="subscription__main__left__create--text">
          لطفا اشتراک مورد نظر را انتخاب کنید
        </p>
        <div className="subscription__main__left__create__submit">
          <button className="subscription__main__left__create__submit--button">
            بروز رسانی
          </button>
        </div>
      </div>
    </div>
  );
};

export default Subscription;
