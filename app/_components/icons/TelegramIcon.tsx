import { ComponentPropsWithoutRef } from "react";

export const TelegramIcon = (
  props: ComponentPropsWithoutRef<"svg"> & { size?: number }
) => {
  return (
    <svg
      width={props.size}
      height={props.size}
      viewBox="0 0 256 250"
      version="1.1"
      preserveAspectRatio="xMidYMid"
      {...props}
    >
      <g>
        <path
          d="M128,0 C94.06,0 61.48,13.494 37.5,37.49 C13.5,61.486 0,94.066 0,128 C0,161.934 13.5,194.514 37.5,218.51 C61.48,242.506 94.06,256 128,256 C161.94,256 194.52,242.506 218.5,218.51 C242.5,194.514 256,161.934 256,128 C256,94.066 242.5,61.486 218.5,37.49 C194.52,13.494 161.94,0 128,0 Z"
          fill="url(#telegramLinearGradient-1)"
        ></path>
        <path
          d="M57.94,126.6476 C95.26,110.3916 120.14,99.6736 132.58,94.4956 C168.14,79.7096 175.52,77.1416 180.34,77.0547542 C181.4,77.0376 183.76,77.2996 185.3,78.5456 C186.58,79.5956 186.94,81.0156 187.12,82.0116 C187.28,83.0076 187.5,85.2776 187.32,87.0496 C185.4,107.2896 177.06,156.4056 172.82,179.0756 C171.04,188.668 167.5,191.884 164.08,192.198 C156.64,192.882 151,187.286 143.8,182.5676 C132.54,175.1816 126.18,170.5856 115.24,163.3796 C102.6,155.0516 110.8,150.4736 118,142.9936 C119.88,141.0356 152.64,111.2456 153.26,108.5436 C153.34,108.2056 153.42,106.9456 152.66,106.2816 C151.92,105.6156 150.82,105.8436 150.02,106.0236 C148.88,106.2796 130.9,118.1756 96.02,141.7096 C90.92,145.2176 86.3,146.9276 82.14,146.8376 C77.58,146.7396 68.78,144.2536 62.24,142.1296 C54.24,139.5236 47.86,138.1456 48.42,133.7196 C48.7,131.4156 51.88,129.0576 57.94,126.6476 L57.94,126.6476 Z"
          fill="#FFFFFF"
        ></path>
      </g>
    </svg>
  );
};
