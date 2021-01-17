import { CSSProperties } from "react";

type Props = {
  id?: string;
  style?: CSSProperties;
};

export default function WolfBrown({ id, style }: Props): JSX.Element {
  return (
    <svg
      width="75"
      height="85"
      viewBox="0 0 75 85"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      id={id}
      style={style}
    >
      <g>
        <g id="wolf-tail">
          <path
            d="M74.4381 61.7488C72.8029 69.8246 68.0563 71.6658 68.0563 71.6658L54.8609 75.8533C55.1811 70.8879 53.5564 66.3835 50.6658 63.7386C69.6159 65.588 69.6159 49.5631 69.6159 49.5631C71.555 50.9401 73.044 52.8264 73.9006 54.9908C74.7571 57.1553 74.9439 59.5038 74.4381 61.7488Z"
            fill="#695958"
          />
          <path
            d="M74.4473 61.7506C74.9531 59.5057 74.7663 57.1571 73.9098 54.9927C73.0532 52.8283 71.5642 50.942 69.6251 49.565C69.4533 51.5134 69.0452 53.4321 68.4092 55.2821C69.5578 56.669 70.3717 58.2826 70.7906 60.0032C71.2094 61.7238 71.2225 63.5073 70.8287 65.2214C70.4186 67.4666 69.572 69.6105 68.3332 71.5411C69.3469 71.0205 73.0421 68.6904 74.4473 61.7506Z"
            fill="#877A79"
          />
        </g>
        <path
          d="M35.6101 65.8606C32.4142 65.8606 29.8289 64.3089 29.8289 62.3918V82.0481H41.3914V62.3918C41.3914 64.3089 38.806 65.8606 35.6101 65.8606Z"
          fill="#7D7171"
        />
        <path
          d="M49.4595 84.3606H64.4907C65.1035 84.3588 65.6906 84.1145 66.1239 83.6813C66.5572 83.248 66.8014 82.6608 66.8032 82.0481V70.4856C66.8032 70.0002 66.6505 69.5272 66.3667 69.1335C66.0829 68.7397 65.6824 68.4452 65.222 68.2918C64.7616 68.1383 64.2645 68.1336 63.8012 68.2783C63.3379 68.423 62.9319 68.7098 62.6407 69.0981L59.8657 72.7981H57.8885C56.0038 80.4293 52.9282 84.3606 49.4595 84.3606Z"
          fill="#695958"
        />
        <path
          d="M45.99 57.7681H52.9275C55.2631 57.7681 57.8993 56.0453 59.865 53.5709C59.9648 60.0358 59.3011 66.4899 57.8878 72.7993C56.0031 80.4305 52.9275 84.3617 49.4587 84.3617H43.6775C43.0738 84.3695 42.4916 84.1378 42.0582 83.7175C41.6249 83.2971 41.3756 82.7222 41.365 82.1186V62.3931C41.365 61.1665 41.8522 59.9901 42.7196 59.1227C43.587 58.2554 44.7633 57.7681 45.99 57.7681Z"
          fill="#695958"
        />
        <path
          d="M63.797 72.5668L61.022 76.2668H56.8595C57.2329 75.2088 57.5798 74.0595 57.8908 72.7981H59.8657L62.6407 69.0981C62.9319 68.7098 63.3379 68.423 63.8012 68.2783C64.2645 68.1336 64.7616 68.1383 65.222 68.2918C65.6824 68.4452 66.0829 68.7397 66.3667 69.1334C66.6505 69.5272 66.8032 70.0002 66.8032 70.4856V71.9644C66.4535 71.7557 66.0543 71.6443 65.647 71.6418C65.2882 71.643 64.9345 71.7271 64.6136 71.8875C64.2927 72.048 64.0132 72.2805 63.797 72.5668Z"
          fill="#877A79"
        />
        <path
          d="M59.7533 58.3261C59.7841 57.5792 59.8095 56.8192 59.8296 56.046C59.7935 61.6841 59.1437 67.3015 57.8917 72.7989C56.007 80.4302 52.9314 84.3614 49.4627 84.3614H45.9939C49.4627 84.3614 52.5383 80.4302 54.423 72.7989C55.3069 69.072 55.8721 65.2766 56.1122 61.4538C57.5121 60.6499 58.7474 59.5887 59.7533 58.3261Z"
          fill="#877A79"
        />
        <path
          d="M29.8289 62.3918C29.8289 64.3089 32.4142 65.8606 35.6101 65.8606C38.806 65.8606 41.3914 64.3089 41.3914 62.3918C41.3914 61.1652 41.8786 59.9888 42.746 59.1215C43.6133 58.2541 44.7897 57.7668 46.0164 57.7668H25.2039C26.4305 57.7668 27.6069 58.2541 28.4742 59.1215C29.3416 59.9888 29.8289 61.1652 29.8289 62.3918Z"
          fill="#695958"
        />
        <path
          d="M46.0164 62.3931H52.9539C55.2455 62.3931 57.824 60.7293 59.7757 58.3289C59.7827 58.1705 59.7919 58.0202 59.7977 57.8606C59.8555 56.4847 59.8902 47.0509 59.8902 45.5709C57.9257 48.0453 55.2895 49.7681 52.9539 49.7681L46.0164 57.7681C44.7897 57.7681 43.6133 58.2554 42.746 59.1227C41.8786 59.9901 41.3914 61.1665 41.3914 62.3931V67.0181C41.3914 65.7915 41.8786 64.6151 42.746 63.7477C43.6133 62.8804 44.7897 62.3931 46.0164 62.3931Z"
          fill="#695958"
        />
        <path
          d="M21.7351 84.3606H6.70386C6.09111 84.3588 5.50398 84.1145 5.07069 83.6813C4.63741 83.248 4.39319 82.6608 4.39136 82.0481V70.4856C4.39136 70.0002 4.54407 69.5272 4.82786 69.1335C5.11165 68.7397 5.51213 68.4452 5.97258 68.2918C6.43303 68.1383 6.93009 68.1336 7.39337 68.2783C7.85665 68.423 8.26265 68.7098 8.55386 69.0981L11.3289 72.7981H13.306C15.1907 80.4293 18.2664 84.3606 21.7351 84.3606Z"
          fill="#695958"
        />
        <path
          d="M25.2046 57.7681H18.2671C15.9315 57.7681 13.2952 56.0453 11.3296 53.5709C11.2298 60.0358 11.8935 66.4899 13.3068 72.7993C15.1915 80.4305 18.2671 84.3617 21.7359 84.3617H27.5171C28.1208 84.3695 28.703 84.1378 29.1363 83.7175C29.5697 83.2971 29.819 82.7222 29.8296 82.1186V62.3931C29.8296 61.1665 29.3423 59.9901 28.475 59.1227C27.6076 58.2554 26.4312 57.7681 25.2046 57.7681Z"
          fill="#695958"
        />
        <path
          d="M7.39761 72.5668L10.1726 76.2668H14.3351C13.9616 75.2088 13.6148 74.0595 13.3037 72.7981H11.3289L8.55386 69.0981C8.26265 68.7098 7.85665 68.423 7.39337 68.2783C6.93009 68.1336 6.43303 68.1383 5.97258 68.2918C5.51213 68.4452 5.11165 68.7397 4.82786 69.1334C4.54407 69.5272 4.39136 70.0002 4.39136 70.4856V71.9644C4.74111 71.7557 5.14032 71.6443 5.54761 71.6418C5.90641 71.643 6.26008 71.7271 6.581 71.8875C6.90192 72.048 7.1814 72.2805 7.39761 72.5668Z"
          fill="#877A79"
        />
        <path
          d="M11.4413 58.3261C11.4105 57.5792 11.385 56.8192 11.365 56.046C11.4011 61.6841 12.0509 67.3015 13.3029 72.7989C15.1876 80.4302 18.2632 84.3614 21.7319 84.3614H25.2007C21.7319 84.3614 18.6563 80.4302 16.7716 72.7989C15.8877 69.072 15.3225 65.2766 15.0823 61.4538C13.6825 60.6499 12.4472 59.5887 11.4413 58.3261Z"
          fill="#877A79"
        />
        <path
          d="M25.2039 57.7681L18.2664 49.7681C15.9307 49.7681 13.2945 48.0453 11.3289 45.5709C11.3289 47.2255 11.3763 56.8015 11.4445 58.3266C13.3951 60.7281 15.9735 62.3931 18.2664 62.3931H25.2039C26.4305 62.3931 27.6069 62.8804 28.4742 63.7477C29.3416 64.6151 29.8289 65.7915 29.8289 67.0181V62.3931C29.8289 61.1665 29.3416 59.9901 28.4742 59.1227C27.6069 58.2554 26.4305 57.7681 25.2039 57.7681Z"
          fill="#695958"
        />
        <path
          d="M41.3914 78.5793H29.8289V82.0481H41.3914V78.5793Z"
          fill="#695958"
        />
      </g>
      <g id="wolf-head" style={{ transformOrigin: "center center" }}>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M60.8066 3.20435C60.7332 2.32497 59.6398 1.96478 59.0581 2.62837L47.1949 16.162H24.1965L16.0077 6.82014L12.3333 2.62837C11.7516 1.96478 10.6582 2.32497 10.5848 3.20435L9.91137 11.2709L8.8642 23.8144L5.20614 47.5492C5.09777 48.2523 5.36219 48.952 5.93054 49.38C9.51633 52.08 23.2224 61.7212 36.1064 61.7212C48.9897 61.7212 62.0877 52.081 65.5042 49.3804C66.0479 48.9506 66.296 48.2678 66.1905 47.5828L62.5272 23.8144L60.8066 3.20435Z"
          fill="#8B8080"
        />
        <mask
          id="mask0"
          mask-type="alpha"
          maskUnits="userSpaceOnUse"
          x="5"
          y="0"
          width="62"
          height="62"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M60.6107 0.857178L47.1949 16.162H35.6957H24.1965L16.0077 6.82014L10.7807 0.857178L9.91137 11.2709L8.8642 23.8144L5.03113 48.6847C5.03113 48.6847 21.1246 61.7212 36.1064 61.7212C51.0882 61.7212 66.3603 48.6847 66.3603 48.6847L62.5272 23.8144L60.6107 0.857178Z"
            fill="white"
          />
        </mask>
        <g mask="url(#mask0)">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12.6886 50.5946V46.7684L18.4382 33.3767H52.9359L60.602 46.7684V50.5946H12.6886Z"
            fill="#9D9898"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M51.947 27.6398C59.6132 33.3791 59.6132 46.7708 59.6132 46.7708L35.9666 34.0608L12.7121 46.7709C12.7121 46.7709 10.6703 33.3792 18.8375 27.6399C25.2462 23.1364 32.912 29.2344 35.9161 32.0692C38.7358 29.2344 45.9315 23.1362 51.947 27.6398Z"
            fill="#9D9898"
          />
          <g className="wolf-eye" style={{ transformOrigin: "50%" }}>
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M46.8037 44.5552C42.9377 44.5552 39.8037 41.4212 39.8037 37.5552C39.8037 33.6892 42.9377 30.5552 46.8037 30.5552C50.6697 30.5552 53.8037 33.6892 53.8037 37.5552C53.8037 41.4212 50.6697 44.5552 46.8037 44.5552Z"
              fill="white"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M24.6013 44.5552C20.7353 44.5552 17.6013 41.4212 17.6013 37.5552C17.6013 33.6892 20.7353 30.5552 24.6013 30.5552C28.4673 30.5552 31.6013 33.6892 31.6013 37.5552C31.6013 41.4212 28.4673 44.5552 24.6013 44.5552Z"
              fill="white"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M46.8037 40.5552C48.4606 40.5552 49.8037 39.212 49.8037 37.5552C49.8037 35.8983 48.4606 34.5552 46.8037 34.5552C45.1469 34.5552 43.8037 35.8983 43.8037 37.5552C43.8037 39.212 45.1469 40.5552 46.8037 40.5552Z"
              fill="#114B5F"
            />
            <path
              d="M46.8037 41.5552C49.0128 41.5552 50.8037 39.7643 50.8037 37.5552C50.8037 35.346 49.0128 33.5552 46.8037 33.5552C44.5946 33.5552 42.8037 35.346 42.8037 37.5552C42.8037 39.7643 44.5946 41.5552 46.8037 41.5552Z"
              stroke="#90f0c4"
              strokeWidth="2"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M24.6013 40.5552C26.2582 40.5552 27.6013 39.212 27.6013 37.5552C27.6013 35.8983 26.2582 34.5552 24.6013 34.5552C22.9445 34.5552 21.6013 35.8983 21.6013 37.5552C21.6013 39.212 22.9445 40.5552 24.6013 40.5552Z"
              fill="#114B5F"
            />
            <path
              d="M24.6013 41.5552C26.8105 41.5552 28.6013 39.7643 28.6013 37.5552C28.6013 35.346 26.8105 33.5552 24.6013 33.5552C22.3922 33.5552 20.6013 35.346 20.6013 37.5552C20.6013 39.7643 22.3922 41.5552 24.6013 41.5552Z"
              stroke="#90f0c4"
              strokeWidth="2"
            />
            <circle cx="49.6113" cy="36.9315" r="1" fill="white" />
            <circle cx="27.2914" cy="36.9315" r="1" fill="white" />
          </g>
          <rect
            x="13.1056"
            y="37.3826"
            width="24.7916"
            height="6.18793"
            rx="3.09397"
            transform="rotate(9.1679 13.1056 37.3826)"
            fill="#9D9898"
          />
          <rect
            x="35.5922"
            y="40.9651"
            width="22.909"
            height="6.18793"
            rx="3.09397"
            transform="rotate(-9.04898 35.5922 40.9651)"
            fill="#9D9898"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M5.44006 48.4845L35.7213 42.5039L65.3948 48.7593C65.3948 48.7593 50.846 78.4086 35.7616 78.3394C20.6772 78.2703 5.44006 48.4845 5.44006 48.4845Z"
            fill="#8B8080"
          />
          <path
            d="M39.9298 44.9119C39.9298 45.188 39.706 45.4119 39.4298 45.4119H32.7637C32.4875 45.4119 32.2637 45.188 32.2637 44.9119V43.1129C32.2637 42.2694 32.9474 41.5857 33.7909 41.5857H38.4025C39.246 41.5857 39.9298 42.2694 39.9298 43.1129V44.9119Z"
            fill="#383838"
          />
          <rect
            x="39.3695"
            y="43.4973"
            width="6.54568"
            height="1.63349"
            rx="0.816743"
            transform="rotate(-180 39.3695 43.4973)"
            opacity="0.28"
            fill="white"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M20.2849 18.3356L13.1722 10.168L12.2364 23.5271L20.2849 18.3356Z"
            fill="#706160"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M51.1006 18.3356L58.2133 10.168L59.1491 23.5271L51.1006 18.3356Z"
            fill="#706160"
          />
          <g opacity="0.6">
            <path
              opacity="0.32373"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M51.7687 18.7334L55.387 14.5785L55.8631 21.3743L51.7687 18.7334Z"
              fill="white"
            />
            <path
              opacity="0.32373"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M53.5013 19.8762L56.6687 16.2391L57.0854 22.188L53.5013 19.8762Z"
              fill="white"
            />
            <path
              opacity="0.32373"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M55.1786 20.9687L58.0264 17.6984L58.4011 23.0473L55.1786 20.9687Z"
              fill="white"
            />
          </g>
          <g opacity="0.6">
            <path
              opacity="0.32373"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M19.6818 18.6908L16.0636 14.5359L15.5875 21.3318L19.6818 18.6908Z"
              fill="white"
            />
            <path
              opacity="0.32373"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M17.9492 19.8336L14.7819 16.1966L14.3652 22.1455L17.9492 19.8336Z"
              fill="white"
            />
            <path
              opacity="0.32373"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M16.272 20.9261L13.4241 17.6559L13.0494 23.0047L16.272 20.9261Z"
              fill="white"
            />
          </g>
        </g>
        <path
          d="M27.4414 46.6051C27.4414 46.6051 30.8422 51.3007 36.1483 51.1621C41.4545 51.0235 44.6056 46.1569 44.6056 46.1569"
          stroke="#383838"
          strokeWidth="0.954545"
          strokeLinecap="round"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M27.5728 46.1705C27.5728 46.1705 31.4464 51.8134 35.89 51.8134C40.3336 51.8134 44.4193 45.736 44.4193 45.736C44.4193 45.736 42.392 49.1773 35.89 49.1773C29.388 49.1773 27.5728 46.1705 27.5728 46.1705Z"
          fill="#383838"
        />
        <mask
          id="mask1"
          mask-type="alpha"
          maskUnits="userSpaceOnUse"
          x="28"
          y="47"
          width="16"
          height="5"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M28.703 47.5881C28.703 47.5881 30.451 51.8728 36.1699 51.8728C41.9616 51.5449 43.077 47.2479 43.077 47.2479C43.077 47.2479 39.2927 50.0515 35.8784 50.0515C32.4642 50.0515 28.703 47.5881 28.703 47.5881Z"
            fill="white"
          />
        </mask>
        <g mask="url(#mask1)">
          <rect
            x="31.1066"
            y="44.8548"
            width="9.58269"
            height="19.131"
            fill="#F9719F"
          />
          <path
            d="M30.47 46.5015H41.6953V52.0558C41.6953 52.0558 39.9054 51.0954 36.0985 50.9043C32.2916 50.7133 30.47 52.0558 30.47 52.0558V46.5015Z"
            fill="#383838"
          />
        </g>
        <path
          d="M31.1066 50.7263C31.1066 50.174 31.5543 49.7263 32.1066 49.7263H39.6893C40.2415 49.7263 40.6893 50.174 40.6893 50.7263V59.5306C40.6893 61.7397 38.8984 63.5306 36.6893 63.5306H35.1066C32.8974 63.5306 31.1066 61.7397 31.1066 59.5306V50.7263Z"
          fill="#F9719F"
          className="wolf-tongue"
          style={{ transformOrigin: "center center" }}
        />
        <mask
          id="mask2"
          mask-type="alpha"
          maskUnits="userSpaceOnUse"
          x="31"
          y="49"
          width="10"
          height="15"
        >
          <path
            d="M31.1066 50.7263C31.1066 50.174 31.5543 49.7263 32.1066 49.7263H39.6893C40.2415 49.7263 40.6893 50.174 40.6893 50.7263V59.5306C40.6893 61.7397 38.8984 63.5306 36.6893 63.5306H35.1066C32.8974 63.5306 31.1066 61.7397 31.1066 59.5306V50.7263Z"
            fill="#F9719F"
          />
        </mask>
        <g
          mask="url(#mask2)"
          className="wolf-tongue"
          style={{ transformOrigin: "center center" }}
        >
          <rect
            opacity="0.14"
            x="31.9728"
            y="50.8519"
            width="3.04218"
            height="9.89596"
            rx="1.52109"
            fill="white"
          />
        </g>
        <path
          d="M40.6892 51.5945C40.6892 52.1736 38.5441 51.5945 35.8979 51.5945C33.2517 51.5945 31.1065 52.1736 31.1065 51.5945C31.1065 48.5716 30.1057 49.546 35.8979 49.546C41.4503 49.546 40.6892 48.2623 40.6892 51.5945Z"
          fill="#254D61"
          fillOpacity="0.2"
          className="wolf-tongue"
          style={{ transformOrigin: "center center" }}
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M6.05947 48.438C5.57024 48.5358 5.25518 47.9354 5.61366 47.5884L12.3902 41.0288C12.567 40.8577 12.8421 40.8406 13.0387 40.9886L18.5002 45.1006C18.8451 45.3603 18.7209 45.9057 18.2975 45.9903L6.05947 48.438Z"
          fill="#9D9898"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M65.2547 48.8939C65.7391 49.0057 66.0721 48.4188 65.7277 48.0603L59.0669 41.1269C58.8631 40.9147 58.5209 40.9236 58.3283 41.1461L54.4348 45.6438C54.1882 45.9287 54.3333 46.3736 54.7004 46.4583L65.2547 48.8939Z"
          fill="#9D9898"
        />
      </g>
    </svg>
  );
}