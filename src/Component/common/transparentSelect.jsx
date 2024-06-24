import React from "react";
import Select from "react-select";

export default function TransparentSelect({ ...props }) {
  return (
    <Select
      className={`w-100 ${props.className}`}
      classNamePrefix={"transparent_select"}
      components={{
        IndicatorSeparator: () => null,
      }}
      {...props}
    />
  );
}
