import { Blank, IconProps } from "grommet-icons";

export default function DotCircle(props: IconProps): JSX.Element {
  return (
    <Blank {...props} viewBox="0 0 16 16">
      <g clipPath="url(#clip0)">
        <path
          d="M8 2C8.55228 2 9 1.55228 9 1C9 0.447715 8.55228 0 8 0C7.44772 0 7 0.447715 7 1C7 1.55228 7.44772 2 8 2Z"
          fill={props.color}
        />
        <path
          d="M8 16C8.55228 16 9 15.5523 9 15C9 14.4477 8.55228 14 8 14C7.44772 14 7 14.4477 7 15C7 15.5523 7.44772 16 8 16Z"
          fill={props.color}
        />
        <path
          d="M16 8C16 8.55228 15.5523 9 15 9C14.4477 9 14 8.55228 14 8C14 7.44772 14.4477 7 15 7C15.5523 7 16 7.44772 16 8Z"
          fill={props.color}
        />
        <path
          d="M1 9C1.55228 9 2 8.55228 2 8C2 7.44772 1.55228 7 1 7C0.447715 7 0 7.44772 0 8C0 8.55228 0.447715 9 1 9Z"
          fill={props.color}
        />
        <path
          d="M13.6569 3.75738C13.2663 4.1479 12.6332 4.1479 12.2427 3.75738C11.8521 3.36685 11.8521 2.73369 12.2427 2.34316C12.6332 1.95264 13.2663 1.95264 13.6569 2.34316C14.0474 2.73369 14.0474 3.36685 13.6569 3.75738Z"
          fill={props.color}
        />
        <path
          d="M2.34313 13.6568C2.73365 14.0474 3.36682 14.0474 3.75734 13.6568C4.14787 13.2663 4.14787 12.6331 3.75734 12.2426C3.36682 11.8521 2.73365 11.8521 2.34313 12.2426C1.9526 12.6331 1.9526 13.2663 2.34313 13.6568Z"
          fill={props.color}
        />
        <path
          d="M13.6569 13.6568C13.2663 14.0474 12.6332 14.0474 12.2427 13.6568C11.8521 13.2663 11.8521 12.6331 12.2427 12.2426C12.6332 11.8521 13.2663 11.8521 13.6569 12.2426C14.0474 12.6331 14.0474 13.2663 13.6569 13.6568Z"
          fill={props.color}
        />
        <path
          d="M2.34313 3.75738C2.73365 4.1479 3.36681 4.1479 3.75734 3.75738C4.14786 3.36685 4.14786 2.73369 3.75734 2.34316C3.36681 1.95264 2.73365 1.95264 2.34313 2.34316C1.9526 2.73369 1.9526 3.36685 2.34313 3.75738Z"
          fill={props.color}
        />
      </g>
      <defs>
        <clipPath id="clip0">
          <rect width="16" height="16" rx="2" fill="white" />
        </clipPath>
      </defs>
    </Blank>
  );
}