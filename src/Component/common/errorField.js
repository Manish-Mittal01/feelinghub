import React from "react";

export const ErrorField = ({ error }) => {
  return error ? (
    <p className="small text-danger m-0" style={{ marginTop: 2 }}>
      {error}
    </p>
  ) : (
    ""
  );
};
