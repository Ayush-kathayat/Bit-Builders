import React from "react";
import { useForm } from "react-hook-form";
import "./form.css";
import Button from 'react-bootstrap/Button';


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
        <div>
            <p className="text-center fs-2 fw-bolder p-5">Signup Page</p>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group">

                    {/* first name */}
                    <div className="form-group m-5">
                        <label
                            className="m-2 first-name"
                        >
                            Enter First Name
                        </label>
                        <input
                            {...register("firstName", { required: "First name is required" })}
                            className="form-control input-first-name"
                            placeholder="Enter name"
                        />
                        {errors.firstName && (
                            <div className="first-name-invalid invalid">
                                {errors.firstName.message}
                            </div>
                        )}
                    </div>


                    {/* // Last Name */}
                    <div className="form-group m-5">
                        <label
                            className="m-2 last-name"
                        >
                            Enter Last Name
                        </label>
                        <input
                            {...register("lastName", { required: "Last name is required" })}
                            className="form-control input-last-name"
                            placeholder="Enter name"
                        />
                        {errors.lastName && (
                            <div className="last-name-invalid invalid">
                                {errors.lastName.message}
                            </div>
                        )}
                    </div>


                    {/* Email */}
                    <div className="form-group m-5">
                        <label
                            className="m-2 email"
                        >
                            Enter your email
                        </label>
                        <input
                            {...register("email", { required: "Email is required" })}
                            className="form-control input-last-name"
                            placeholder="Enter name"
                        />
                        {errors.email && (
                            <div className="email-invalid invalid">
                                {errors.email.message}
                            </div>
                        )}
                    </div>



                    {/* //Contact */}
                    <div className="form-group m-5">
                        <label
                            className="m-2 last-name"
                        >
                            Enter your mobile number
                        </label>
                        <input
                            {...register("contact", { required: "Mobile Number is required" })}
                            className="form-control input-last-name"
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
                        <label className="stream-form-label">Stream</label>
                        <div className="stream-sub">
                            <div>
                                <label>
                                    <input
                                        type="radio"
                                        name="stream"
                                        value="science"
                                        {...register("stream", { required: "Stream is required" })}
                                        className={`form-check-input ${errors.stream ? "is-invalid" : ""
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
                                        className={`form-check-input ${errors.stream ? "is-invalid" : ""
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
                                        className={`form-check-input ${errors.stream ? "is-invalid" : ""
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
                                    className={`form-check-input ${errors.field ? "is-invalid" : ""
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
                                    className={`form-check-input ${errors.field ? "is-invalid" : ""
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
                                className="subs form-control"
                            />
                            <input
                                type="text"
                                name="subject2"
                                {...register("subject2")}
                                placeholder="Subject 2"
                                className="subs form-control"
                            />
                            <input
                                type="text"
                                name="subject3"
                                {...register("subject3")}
                                placeholder="Subject 3"
                                className="subs form-control"
                            />
                            <input
                                type="text"
                                name="subject4"
                                {...register("subject4")}
                                placeholder="Subject 4"
                                className="subs form-control"
                            />
                        </div>
                    </div>
                </div>
<div className="text-center pb-5">

                <Button variant="primary" size="lg" type="submit" className="">
                    Large button
                </Button>
</div>

            </form>
        </div>
    );
};

export default Auth;