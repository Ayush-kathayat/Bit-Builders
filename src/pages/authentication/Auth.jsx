import { useForm } from "react-hook-form";
import "./form.css";
import Button from "react-bootstrap/Button";

const Auth = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form values:", data);
  };

  return (
    <body className="Auth-body">
      <div className="form-top">
        <p className="sign-text text-center fs-2 fw-bolder p-5">Signup Page</p>
        <form className="" onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group">
            {/* first name */}
            <div className="form-group m-4">
              <label className="m-2 first-name fs-5">Enter First Name</label>
              <input
                {...register("firstName", {
                  required: "First name is required",
                })}
                className="form-control input-first-name py-3 px-3 "
                placeholder="Enter name"
              />
              {errors.firstName && (
                <div className="first-name-invalid invalid">
                  {errors.firstName.message}
                </div>
              )}
            </div>

            {/* // Last Name */}
            <div className="form-group mx-4 my-5">
              <label className="m-2 last-name fs-5">Enter Last Name</label>
              <input
                {...register("lastName", { required: "Last name is required" })}
                className="form-control input-last-name py-3 px-3 "
                placeholder="Enter name"
              />
              {errors.lastName && (
                <div className="last-name-invalid invalid">
                  {errors.lastName.message}
                </div>
              )}
            </div>

            {/* Email */}
            <div className="form-group mx-4 my-5">
              <label className="m-2 email fs-5">Enter your email</label>
              <input
                {...register("email", { required: "Email is required" })}
                className="form-control email py-3 px-3 "
                placeholder="Enter name"
              />
              {errors.email && (
                <div className="email-invalid invalid">
                  {errors.email.message}
                </div>
              )}
            </div>

            {/* //Contact */}
            <div className="form-group mx-4 my-5">
              <label className="m-2 contact fs-5">
                Enter your mobile number
              </label>
              <input
                {...register("contact", {
                  required: "Mobile Number is required",
                })}
                className="form-control contact py-3 px-3 "
                placeholder="Enter name"
              />
              {errors.contact && (
                <div className="mobile-invalid invalid">
                  {errors.contact.message}
                </div>
              )}
            </div>

            {/* //Stream */}
            <div className="stream">
              <label className="stream-form-label my-1 mx-4 fs-4">Stream</label>
              <div className="stream-sub my-0 mx-5">
                <div>
                  <label className="m-0">
                    <input
                      type="radio"
                      name="stream"
                      value="science"
                      {...register("stream", {
                        required: "Stream is required",
                      })}
                      className={`form-check-input mx-2 ${
                        errors.stream ? "is-invalid" : ""
                      }`}
                    />
                    Science
                  </label>
                </div>
                <div>
                  <label className="m-0">
                    <input
                      type="radio"
                      name="stream"
                      value="arts"
                      {...register("stream", {
                        required: "Stream is required",
                      })}
                      className={`form-check-input mx-2 ${
                        errors.stream ? "is-invalid" : ""
                      }`}
                    />
                    Arts
                  </label>
                </div>
                <div>
                  <label className="m-0">
                    <input
                      type="radio"
                      name="stream"
                      value="commerce"
                      {...register("stream", {
                        required: "Stream is required",
                      })}
                      className={`form-check-input mx-2 ${
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
              {/* <label className="stream-form-label fs-4">Field</label> */}
              <label className="my-2 pt-5 fs-4">Field</label>
              <div>
                <label className="m-0 my-0 mx-5">
                  <input
                    type="radio"
                    name="field"
                    value="yes"
                    {...register("field", { required: "Field is required" })}
                    className={`form-check-input mx-2 ${
                      errors.field ? "is-invalid" : ""
                    }`}
                  />
                  Yes
                </label>
              </div>
              <div>
                <label className="m-0 my-0 mx-5">
                  <input
                    type="radio"
                    name="field"
                    value="no"
                    {...register("field", { required: "Field is required" })}
                    className={`form-check-input mx-2 ${
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
              <label className="my-2 pt-5 fs-5">Favorite Subjects</label>
              <div className="subjects mx-5">
                {" "}
                <input
                  type="text"
                  name="subject1"
                  {...register("subject1")}
                  placeholder="Subject 1"
                  className="form-control input-first-name py-3 px-3 my-2"
                  // className="subs form-control"
                />
                <input
                  type="text"
                  name="subject2"
                  {...register("subject2")}
                  placeholder="Subject 2"
                  className="form-control input-first-name py-3 px-3 my-2"
                />
                <input
                  type="text"
                  name="subject3"
                  {...register("subject3")}
                  placeholder="Subject 3"
                  className="form-control input-first-name py-3 px-3 my-2"
                />
                <input
                  type="text"
                  name="subject4"
                  {...register("subject4")}
                  placeholder="Subject 4"
                  className="form-control input-first-name py-3 px-3 my-2"
                />
              </div>
            </div>
          </div>
          <div className="text-center pb-5">
            <Button variant="primary" size="lg" type="submit" className="sub-btn">
            SUBMIT
            </Button>
          </div>
        </form>
      </div>
    </body>
  );
};

export default Auth;
