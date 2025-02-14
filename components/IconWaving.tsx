import * as React from "react";

// By: ph
// See: https://v0.app/icon/ph/hand-waving-light
// Example: <IconWaving width="24px" height="24px" style={{color: "#00b3ff"}} />

export const IconWaving = ({
  height = "1em",
  fill = "#86dafe",
  focusable = "false",
  ...props
}: Omit<React.SVGProps<SVGSVGElement>, "children">) => (
  <svg
    className="animate-wave"
    focusable={focusable}
    height={height}
    role="img"
    style={{ display: "inline-block", transformOrigin: "70% 70%" }}
    viewBox="0 0 256 256"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <style>
      {`
        @keyframes wave {
          0% { transform: rotate(0deg); }
          25% { transform: rotate(20deg); }
          50% { transform: rotate(10deg); }
          75% { transform: rotate(-10deg); }
          100% { transform: rotate(0deg); }
        }
        .animate-wave {
          animation: 2s infinite wave ease-in-out;
        }
      `}
    </style>
    <path
      d="M186.2 30.45a6 6 0 0 1 7.35-4.24c15.39 4.12 28 13.64 35.65 26.79a6 6 0 0 1-10.4 6c-6-10.38-16.06-17.91-28.35-21.2a6 6 0 0 1-4.25-7.35M78.34 227.29c-9.59-7.56-17.58-17.18-25.14-30.29a6 6 0 0 0-10.4 6c8.36 14.47 17.29 25.18 28.11 33.71a6 6 0 1 0 7.43-9.42m148.72-61A86.12 86.12 0 0 1 144.13 230a86.71 86.71 0 0 1-22.4-3a85.45 85.45 0 0 1-52.22-40l-38-65.82a26 26 0 0 1 23.68-39l-5-8.73A26 26 0 0 1 91.92 43a26 26 0 0 1 45.9-1.67l17.05 29.52a26 26 0 0 1 45.59-1l18 31.18a85.45 85.45 0 0 1 8.6 65.22Zm-19-59.26l-18-31.18a14 14 0 1 0-24.25 14l10 17.32a6 6 0 0 1-2.19 8.2a34 34 0 0 0-12.45 46.44a6 6 0 1 1-10.39 6a46.08 46.08 0 0 1 11.84-59.5l-35.2-61a14 14 0 0 0-24.25 14l26 45a6 6 0 1 1-10.39 6l-34-58.89a14 14 0 1 0-24.25 14l38 65.81a6 6 0 1 1-10.39 6l-22-38.1a14 14 0 1 0-24.25 14L79.9 181a74 74 0 0 0 128.17-74Z"
      fill={fill}
    />
  </svg>
);
