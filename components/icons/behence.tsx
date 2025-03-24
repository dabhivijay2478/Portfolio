import { IconProps } from "@/lib/types";
import React from "react";

const BehenceIcon: React.FC<IconProps> = ({ width, height }) => (
  <svg width={width} height={height} viewBox="0 0 128 128">
    <path
      fill="currentColor"
      d="M52.63 60.28s10.5-.78 10.5-13.09-8.59-18.32-19.47-18.32H7.86v68.8h35.8s21.85.69 21.85-20.31c0 0 .96-17.08-12.88-17.08zm-29-19.18h20s4.87 0 4.87 7.16-2.86 8.2-6.11 8.2H23.64zm19.1 44.34H23.64V67.06h20s7.25-.1 7.25 9.45c.02 7.95-5.28 8.85-8.15 8.93zM94.66 46.38c-26.46 0-26.43 26.43-26.43 26.43s-1.82 26.3 26.43 26.3c0 0 23.54 1.34 23.54-18.29h-12.1s.4 7.4-11 7.4c0 0-12.11.81-12.11-12h35.65s3.87-29.84-23.98-29.84zm10.76 20.68h-22.6s1.48-10.6 12.11-10.6 10.49 10.6 10.49 10.6zM79.86 32.93h28.38v8.47H79.86z"
    ></path>
  </svg>
);
export default BehenceIcon;
