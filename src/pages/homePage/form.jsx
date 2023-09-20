import React from "react";
import { useForm } from "react-hook-form";
import "./form.css";

const MyForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form values:", data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="form-wrapper">
        {/* // First Name */}
        <div className="first-name">
          <label className="first-name-label">First Name</label>
          <input
            {...register("firstName", { required: "First name is required" })}
            className="input-first-name"
          />
          {errors.firstName && (
            <div className="first-name-invalid invalid">
              {errors.firstName.message}
            </div>
          )}
        </div>
        {/* // Last Name */}
        <div className="last-name">
          <label className="input-name-label">Last Name</label>
          <input {...register("lastName")} className="input-last-name" />
          {errors.lastName && <div>{errors.lastName.message}</div>}
        </div>
        {/* Email */}
        <div className="email">
          <label className="email-form-label">Email</label>
          <input
            name="email"
            type="text"
            {...register("email", { required: "Email is required" })}
            className="email-input"
          />
          <div className="email-invalid invalid">{errors.email?.message}</div>
        </div>
        {/* //Contact */}
        <div className="contact">
          <label className="contact-form-label">Contact</label>
          <input
            name="contact"
            type="text"
            {...register("contact", { required: "Contact is required" })}
            className={`form-control ${errors.contact ? "is-invalid" : ""}`}
          />
          <div className="contact-invalid invalid">
            {errors.contact?.message}
          </div>
        </div>
        {/* //Stream */}

        <div className="stream">
          <label className="stream-form-label">Stream</label>
          <div className="stream-sub">
            <div>
              <label>
                <input
                  type="radio"
                  name="stream"
                  value="science"
                  {...register("stream", { required: "Stream is required" })}
                  className={`form-check-input ${
                    errors.stream ? "is-invalid" : ""
                  }`}
                />
                Science
              </label>
            </div>
            <div>
              <label>
                <input
                  type="radio"
                  name="stream"
                  value="arts"
                  {...register("stream", { required: "Stream is required" })}
                  className={`form-check-input ${
                    errors.stream ? "is-invalid" : ""
                  }`}
                />
                Arts
              </label>
            </div>
            <div>
              <label>
                <input
                  type="radio"
                  name="stream"
                  value="commerce"
                  {...register("stream", { required: "Stream is required" })}
                  className={`form-check-input ${
                    errors.stream ? "is-invalid" : ""
                  }`}
                />
                Commerce
              </label>
            </div>
          </div>

          <div className="invalid-feedback invalid ">
            {errors.stream?.message}
          </div>
        </div>

        {/* below asking if you are intrested in the field or not */}

        <div className="field">
          <label className="field-form-label">Field</label>
          <div>
            <label>
              <input
                type="radio"
                name="field"
                value="yes"
                {...register("field", { required: "Field is required" })}
                className={`form-check-input ${
                  errors.field ? "is-invalid" : ""
                }`}
              />
              Yes
            </label>
          </div>
          <div>
            <label>
              <input
                type="radio"
                name="field"
                value="no"
                {...register("field", { required: "Field is required" })}
                className={`form-check-input ${
                  errors.field ? "is-invalid" : ""
                }`}
              />
              No
            </label>
          </div>
          <div className="invalid-feedback invalid ">
            {errors.field?.message}
          </div>
        </div>
        {/* below asking for the 4 intresting subjects */}

        <div className="intrest">
          <label className="intrest-form-label">Favorite Subjects</label>
          <div className="subjects">
            {" "}
            <input
              type="text"
              name="subject1"
              {...register("subject1")}
              placeholder="Subject 1"
              className="subs"
            />
            <input
              type="text"
              name="subject2"
              {...register("subject2")}
              placeholder="Subject 2"
              className="subs"
            />
            <input
              type="text"
              name="subject3"
              {...register("subject3")}
              placeholder="Subject 3"
              className="subs"
            />
            <input
              type="text"
              name="subject4"
              {...register("subject4")}
              placeholder="Subject 4"
              className="subs"
            />
          </div>
        </div>
      </div>

      <button type="submit">Submit</button>
    </form>
  );
};

export default MyForm;
