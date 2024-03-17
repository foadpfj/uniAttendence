import React from "react";
import "./paymentRecords.scss";

const PaymentRecords = () => {
  return (
    <div className="payment__main__left">
      <div className="payment__main__left__sectionmark">
        <div className="payment__main__left__sectionmark__logo">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="70"
            height="70"
            viewBox="0 0 72 72"
          >
            <g fill="none" fill-rule="evenodd">
              <g fill="currentColor" fill-rule="nonzero">
                <g>
                  <path
                    d="M39 9c14.912 0 27 12.088 27 27S53.912 63 39 63c-6.692 0-12.815-2.435-17.533-6.466l3.194-3.194c3.893 3.223 8.89 5.16 14.339 5.16 12.426 0 22.5-10.074 22.5-22.5S51.426 13.5 39 13.5 16.5 23.574 16.5 36c0 1.746.199 3.446.576 5.079l-3.998 2.498C12.376 41.173 12 38.631 12 36 12 21.088 24.088 9 39 9z"
                    transform="translate(-148 -139) translate(148 139)"
                  ></path>
                  <path
                    d="M36 24H40.5V39H36z"
                    transform="translate(-148 -139) translate(148 139)"
                  ></path>
                  <path
                    d="M42 33L46.5 33 46.5 48 42 48z"
                    transform="translate(-148 -139) translate(148 139) rotate(120 44.25 40.5)"
                  ></path>
                  <path
                    d="M3 36L27 36 15 48z"
                    transform="translate(-148 -139) translate(148 139)"
                  ></path>
                </g>
              </g>
            </g>
          </svg>
        </div>
      </div>
      <div className="payment__main__left__create">
        <p className="payment__main__left__create--text">
          شما تا کنون پرداختی نداشته‌اید
        </p>
        <div className="payment__main__left__create__submit">
          <button className="payment__main__left__create__submit--button">
            بروز رسانی
          </button>
        </div>
      </div>
    </div>
  );
};

export default PaymentRecords;
