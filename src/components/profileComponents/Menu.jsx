import React from "react";
import { HiUser } from "react-icons/hi";

const Menu = ({ setSelectedItem }) => {
  return (
    <div className="profile__main__right">
      <div className="profile__main__right__container">
        <div className="profile__main__right__container__userinfo">
          <div className="profile__main__right__container__userinfo--pic">
            <HiUser />
          </div>
          <h5 className="profile__main__right__container__userinfo--text">
            09001234567
          </h5>
        </div>
        <ul className="profile__main__right__container__menu">
          <li
            className="profile__main__right__container__menu__item"
            onClick={() =>
              setSelectedItem({
                userInfo: true,
                favorite: false,
                subscription: false,
                paymentRecords: false,
              })
            }
          >
            <a
              href="#"
              className="profile__main__right__container__menu__item__userprofile"
            >
              <svg
                className="profile__main__right__container__menu__item__userprofile--logo"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 28 28"
              >
                <path
                  fill="currentColor"
                  d="M15 15c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"
                ></path>
              </svg>
              <span className="profile__main__right__container__menu__item__userprofile--text">
                حساب کاربری
              </span>
            </a>
          </li>
          <li
            className="profile__main__right__container__menu__item"
            onClick={() =>
              setSelectedItem({
                userInfo: false,
                favorite: true,
                subscription: false,
                paymentRecords: false,
              })
            }
          >
            <a
              href="#"
              className="profile__main__right__container__menu__item__favorite"
            >
              <svg
                className="profile__main__right__container__menu__item__subscription--logo"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  d="M7.249 20.973c-.38.005-.74-.15-.987-.425a1.182 1.182 0 0 1-.29-.996l.798-4.637-3.398-3.301a1.182 1.182 0 0 1-.306-1.247c.152-.437.55-.755 1.028-.821l4.674-.672 2.076-4.173C11.054 4.273 11.505 4 12 4c.495 0 .945.273 1.156.701l2.076 4.173 4.674.672c.478.066.876.384 1.028.821.153.438.035.92-.306 1.247l-3.417 3.3.799 4.638c.091.468-.11.945-.518 1.22a1.327 1.327 0 0 1-1.354.08L12 18.666l-4.138 2.16c-.19.095-.4.145-.613.146zM12 17.361c.107 0 .212.025.307.074l4.47 2.318-.881-4.966a.593.593 0 0 1 .179-.525l3.64-3.527-5.014-.72a.636.636 0 0 1-.479-.341L12 5.226 9.778 9.698a.636.636 0 0 1-.48.342l-5.013.714 3.64 3.526c.138.134.204.32.18.507l-.856 4.966 4.47-2.318A.662.662 0 0 1 12 17.36z"
                  fill="currentColor"
                  fill-rule="nonzero"
                ></path>
              </svg>
              <span className="profile__main__right__container__menu__item__favorite--text">
                علاقه مندی ها
              </span>
            </a>
          </li>
          <li
            className="profile__main__right__container__menu__item"
            onClick={() =>
              setSelectedItem({
                userInfo: false,
                favorite: false,
                subscription: true,
                paymentRecords: false,
              })
            }
          >
            <a
              href="#"
              className="profile__main__right__container__menu__item__subscription"
            >
              <svg
                className="profile__main__right__container__menu__item__favorite--logo"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
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
              <span className="profile__main__right__container__menu__item__subscription--text">
                اشتراک
              </span>
            </a>
          </li>
          <li
            className="profile__main__right__container__menu__item"
            onClick={() =>
              setSelectedItem({
                userInfo: false,
                favorite: false,
                subscription: false,
                paymentRecords: true,
              })
            }
          >
            <a
              href="#"
              className="profile__main__right__container__menu__item__payment"
            >
              <svg
                className="profile__main__right__container__menu__item__payment--logo"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
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
              <span className="profile__main__right__container__menu__item__payment--text">
                سوابق پرداخت
              </span>
            </a>
          </li>
          <li className="profile__main__right__container__menu__item">
            <a
              href="#"
              className="profile__main__right__container__menu__item__exit"
            >
              <svg
                className="profile__main__right__container__menu__item__exit-logo"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  fill-rule="nonzero"
                  d="M18.3276874,17.6958617 C18.3276874,17.34637 18.6110064,17.0630509 18.9604982,17.0630509 C19.3099899,17.0630509 19.5933089,17.34637 19.5933089,17.6958617 L19.5933089,18.9614833 C19.5933089,20.0102158 18.7432177,20.8599157 17.6948766,20.8599157 L13.8980118,20.8599157 C13.54852,20.8599157 13.265201,20.5765967 13.265201,20.2271049 C13.265201,19.8776132 13.54852,19.5942941 13.8980118,19.5942941 L17.6948766,19.5942941 C18.0443646,19.5942941 18.3276874,19.3111018 18.3276874,18.9614833 L18.3276874,17.6958617 Z M13.8980118,5.67245663 C13.54852,5.67245663 13.265201,5.38913759 13.265201,5.03964584 C13.265201,4.69015409 13.54852,4.40683504 13.8980118,4.40683504 L17.6948766,4.40683504 C18.7429914,4.40683504 19.5933089,5.25715256 19.5933089,6.30526743 L19.5933089,7.57088902 C19.5933089,7.92038077 19.3099899,8.20369981 18.9604982,8.20369981 C18.6110064,8.20369981 18.3276874,7.92038077 18.3276874,7.57088902 L18.3276874,6.30526743 C18.3276874,5.95613606 18.0440079,5.67245663 17.6948766,5.67245663 L13.8980118,5.67245663 Z M3.14010787,5.01442942 L3.14022829,19.774603 L10.734033,20.8592755 L10.734033,3.14096033 L3.14010787,5.01442942 Z M2.96106105,21.0270806 C2.33742532,20.937749 1.8746067,20.404348 1.8746067,19.774603 L1.87460922,5.01671162 C1.87292019,4.41879519 2.29100122,3.90178655 2.85614466,3.78123358 L10.4698537,1.90268138 C10.8423244,1.82346815 11.2308854,1.91609025 11.5312526,2.15707834 C11.8276796,2.39792534 11.9995794,2.75891486 11.9995794,3.14096033 L11.9995794,20.8596626 C11.9995794,21.2263972 11.8396505,21.5756206 11.5641226,21.8141824 C11.2869864,22.0558316 10.9184252,22.1644333 10.5546783,22.1121242 L2.96106105,21.0270806 Z M18.5130334,10.5487533 C18.2659054,10.3016253 18.2659054,9.90095163 18.5130334,9.65382365 C18.7601613,9.40669566 19.160835,9.40669566 19.407963,9.65382365 L21.9392061,12.1850668 C22.3378547,12.5837154 22.0555155,13.2653424 21.4917413,13.2653424 L14.5308226,13.2653424 C14.1813308,13.2653424 13.8980118,12.9820234 13.8980118,12.6325316 C13.8980118,12.2830399 14.1813308,11.9997208 14.5308226,11.9997208 L19.9640009,11.9997208 L18.5130334,10.5487533 Z M19.4088067,15.6112396 C19.1616787,15.8583676 18.7610051,15.8583676 18.5138771,15.6112396 C18.2667491,15.3641116 18.2667491,14.963438 18.5138771,14.71631 L21.0451203,12.1850668 C21.2922483,11.9379388 21.6929219,11.9379388 21.9400499,12.1850668 C22.1871779,12.4321948 22.1871779,12.8328684 21.9400499,13.0799964 L19.4088067,15.6112396 Z M8.51912004,11.0479734 C8.77078415,11.0479734 9.01205098,11.1471609 9.19017799,11.3252879 C9.36881073,11.5039206 9.46833623,11.7450529 9.46832254,11.9930265 C9.47084788,12.3768781 9.24255029,12.7254076 8.89158359,12.8733024 C8.53660989,13.025434 8.12517556,12.9470313 7.85099189,12.6753864 C7.57763943,12.404565 7.49463323,11.9952586 7.64171355,11.6377064 C7.77393579,11.3185493 8.06776962,11.0988356 8.4053931,11.0581649 C8.44228699,11.0514698 8.4802952,11.0479734 8.51912004,11.0479734 Z"
                ></path>
              </svg>
              <span className="profile__main__right__container__menu__item__exit--text">
                خروج
              </span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Menu;
