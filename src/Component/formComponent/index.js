import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import PhoneInput from "react-phone-input-2";
import { ReactComponent as OpenEyeIcon } from "../../assets/icons/open-eye.svg";
import { ReactComponent as CloseEyeIcon } from "../../assets/icons/close-eye.svg";
import parseKey from "../../utils/formatersAndParsers";
import MySelect from "../../Component/common/mySelect";
import { ErrorField } from "../../Component/common/errorField";

export default function MyForm({
  valueState = {},
  setValueState = () => {},
  errors = {},
  formFields = [],
  RestForm = () => <></>,
  disableFields = false,
}) {
  const [showpass, setshowpass] = useState(false);

  const eyetoggle = () => {
    setshowpass(!showpass);
  };

  const handleChange = (e) => {
    const type = e.target.type;
    const value = type === "checkbox" ? (e.target.checked ? "Y" : "N") : e.target.value;
    if (type === "file") {
      setValueState((prev) => ({ ...prev, [e.target.name]: "123" }));
    } else {
      setValueState((prev) => ({ ...prev, [e.target.name]: value }));
    }
  };

  return (
    <Form className="signup_form inputall_same">
      {formFields?.map((field) =>
        field.type === "phone" ? (
          <div className="position-relative my-2">
            <label for="emailid">{field.lable || parseKey(field.value)}</label>
            <PhoneInput
              inputClass="w-100 border-0"
              buttonClass="border-0"
              country="in"
              placeholder={field.placeholder || "Enter phone number"}
              disabled={disableFields}
              value={valueState[field.value]}
              onChange={(value, data, e, formattedValue) => {
                setValueState((prev) => ({
                  ...prev,
                  [field.value]: value,
                  country_code: data.dialCode,
                  nationality: data.name,
                }));
              }}
            />
            <ErrorField error={errors[field.value]} />
          </div>
        ) : field.type === "password" ? (
          <div className="position-relative my-2">
            <div className=" d-flex align-items-center gap-3 w-100">
              <label for="password">{field.label || parseKey(field.value)}</label>
            </div>
            <Button variant="" className="eye_btn" onClick={eyetoggle}>
              {showpass ? <OpenEyeIcon /> : <CloseEyeIcon />}
            </Button>
            <input
              type={showpass ? "text" : "password"}
              id="password"
              className="form-control"
              placeholder={field.placeholder || parseKey(field.value)}
              disabled={disableFields}
              name={field.value}
              value={valueState[field.value]}
              onChange={handleChange}
            />
            <p className="small muted m-0">
              Use 8 or more characters with a mix of letters, numbers & symbols
            </p>
            <ErrorField error={errors[field.value]} />
          </div>
        ) : field.type === "select" ? (
          <div className="position-relative my-2">
            <label for="">{field.label || parseKey(field.value)}</label>
            <MySelect
              classNamePrefix="latSelect"
              isDisabled={disableFields}
              options={field.options}
              value={valueState[field.value]}
              onChange={(selected) => {
                setValueState((prev) => ({
                  ...prev,
                  [field.value]: selected,
                }));
              }}
            />

            <ErrorField error={errors[field.value]} />
          </div>
        ) : field.type === "checkbox" ? (
          <div className="position-relative my-2">
            <input
              type="checkbox"
              id={field.value}
              name={field.value}
              checked={valueState[field.value] === "Y"}
              onChange={handleChange}
              disabled={disableFields}
            />
            <label for={field.value}>{field.label || parseKey(field.value)}</label>
          </div>
        ) : field.type === "file" ? (
          <div className="position-relative my-2">
            <label for="is_newsletter_subscribe">{field.label || parseKey(field.value)}</label>
            <input
              type="file"
              id={field.value}
              className="form-control"
              name={field.value}
              onChange={handleChange}
            />
          </div>
        ) : (
          ["text", "email", "number", "date"].includes(field.type) && (
            <div className="position-relative my-2">
              <label for="name">{field.label || parseKey(field.value)}</label>
              <input
                type={field.type || "text"}
                id={field.value}
                className="form-control"
                placeholder={field.placeholder || parseKey(field.value)}
                disabled={disableFields}
                name={field.value}
                value={valueState[field.value]}
                onChange={handleChange}
              />
              {field.value === "passport_number" && (
                <p className="password_info m-0">Valid format: A21 90457</p>
              )}
              <ErrorField error={errors[field.value]} />
            </div>
          )
        )
      )}
      <RestForm />
    </Form>
  );
}
