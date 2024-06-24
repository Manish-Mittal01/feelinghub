import React from "react";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";

export function LeftIcon({ onClick, className }) {
  return (
    <MdKeyboardArrowLeft className={`crouselIcon crouselLeftIcon ${className}`} onClick={onClick} />
  );
}
export function RightIcon({ onClick, className }) {
  return (
    <MdKeyboardArrowRight
      className={`crouselIcon crouselRightIcon ${className}`}
      onClick={onClick}
    />
  );
}
