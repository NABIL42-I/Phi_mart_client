import { useForm } from "react-hook-form";
import { Link } from "react-router";
import useAuthContext from "../hooks/useAuthContext";
import ErrorAlert from "../components/ErrorAlert";
import { useRef, useState } from "react";
// import { useNavigate } from "react-router";

const Register = () => {
  const successModalRef = useRef(null);
  const { registerUser, errorMsg } = useAuthContext();
  const [successMsg, setSuccessMsg] = useState("");
  // const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors,isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    delete data.confirm_password;
    try {
      const response = await registerUser(data);
      console.log(response);
      if (response.success) {
      setSuccessMsg(response.message);
      // Triggers the modal to open
      if (successModalRef.current) {
        successModalRef.current.showModal();
        }
         }
    } catch (error) {
      console.log("Registration failed", error);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center px-4 py-12 bg-base-200">
      <div className="card w-full max-w-md bg-base-100 shadow-xl">
        <div className="card-body">
          {errorMsg && <ErrorAlert error={errorMsg} />}

          {/* {successMsg && (
            <div role="alert" className="alert alert-success">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 shrink-0 stroke-current"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>{successMsg}</span>
            </div>
          )} */}


          {/* --- DAISYUI SUCCESS MODAL (LARGE VERSION WITH ACTIVATION EMAIL) --- */}
          <dialog ref={successModalRef} className="modal modal-bottom sm:modal-middle">
            <div className="modal-box max-w-2xl text-center p-12 border-t-8 border-success shadow-2xl relative">
              
              {/* --- Top Right Cross Close Button --- */}
              <form method="dialog">
                <button className="btn btn-sm btn-circle btn-ghost absolute right-4 top-4 text-base-content/50 hover:text-base-content">
                  ✕
                </button>
              </form>

              {/* Success Icon */}
              <div className="mx-auto flex items-center justify-center h-20 w-20 rounded-full bg-success/10 text-success mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>

              {/* Headline */}
              <h3 className="font-extrabold text-4xl text-success tracking-tight">Registration Successful!</h3>
              
              {/* Main message & instructions */}
              <div className="pt-6 space-y-3 max-w-lg mx-auto">
                <p className="text-xl font-medium text-base-content/90">
                  {successMsg || "Your account has been created successfully."}
                </p>
                
                {/* Professional activation prompt */}
                <p className="text-base text-base-content/60 leading-relaxed border-t border-base-200 pt-3">
                  An activation email has been sent to your provided email address. 
                  Please check your inbox (and spam folder) to complete your registration.
                </p>
              </div>
              
            </div>
            
            {/* Background overlay */}
            <form method="dialog" className="modal-backdrop bg-black/50 backdrop-blur-sm">
              <button>close</button>
            </form>
          </dialog>
           
          <h2 className="card-title text-2xl font-bold">Sign Up</h2>
          <p className="text-base-content/70">
            Create an account to get started
          </p>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 mt-4">
            <div className="form-control">
              <label className="label" htmlFor="first_name">
                <span className="label-text">First Name</span>
              </label>
              <input
                id="first_name"
                type="text"
                placeholder="John"
                className="input input-bordered w-full"
                {...register("first_name", {
                  required: "First Name is Required",
                })}
              />
              {errors.first_name && (
                <span className="label-text-alt text-error">
                  {errors.first_name.message}
                </span>
              )}
            </div>

            <div className="form-control">
              <label className="label" htmlFor="last_name">
                <span className="label-text">Last Name</span>
              </label>
              <input
                id="last_name"
                type="text"
                placeholder="Doe"
                className="input input-bordered w-full"
                {...register("last_name", {
                  required: "Last Name is Required",
                })}
              />
              {errors.last_name && (
                <span className="label-text-alt text-error">
                  {errors.last_name.message}
                </span>
              )}
            </div>

            <div className="form-control">
              <label className="label" htmlFor="email">
                <span className="label-text">Email</span>
              </label>
              <input
                id="email"
                type="email"
                placeholder="name@example.com"
                className="input input-bordered w-full"
                {...register("email", {
                  required: "Email is Required",
                })}
              />
              {errors.email && (
                <span className="label-text-alt text-error">
                  {errors.email.message}
                </span>
              )}
              {/* <p>Email: {watch("email")}</p> */}
            </div>

            <div className="form-control">
              <label className="label" htmlFor="address">
                <span className="label-text">Address</span>
              </label>
              <input
                id="address"
                type="text"
                placeholder="7/A Dhanmondi, Dhaka"
                className="input input-bordered w-full"
                {...register("address")}
              />
            </div>

            <div className="form-control">
              <label className="label" htmlFor="phone_number">
                <span className="label-text">Phone Number</span>
              </label>
              <input
                id="phone_number"
                type="text"
                placeholder="0123456789"
                className="input input-bordered w-full"
                {...register("phone_number")}
              />
            </div>

            <div className="form-control">
              <label className="label" htmlFor="password">
                <span className="label-text">Password</span>
              </label>
              <input
                id="password"
                type="password"
                placeholder="••••••••"
                className="input input-bordered w-full"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 8,
                    message: "Password must be at least 8 characters",
                  },
                })}
              />
              {errors.password && (
                <span className="label-text-alt text-error">
                  {errors.password.message}
                </span>
              )}
            </div>

            <div className="form-control">
              <label className="label" htmlFor="confirmPassword">
                <span className="label-text">Confirm Password</span>
              </label>
              <input
                id="confirmPassword"
                type="password"
                placeholder="••••••••"
                className="input input-bordered w-full"
                {...register("confirm_password", {
                  required: "Confirm Password is required",
                  validate: (value) =>
                    value === watch("password") || "Password do not match",
                })}
              />
              {errors.confirm_password && (
                <span className="label-text-alt text-error">
                  {errors.confirm_password.message}
                </span>
              )}
            </div>

            {/* <button type="submit" className="btn btn-primary w-full">Sign UP</button> */}
            {/* Submit Button with built-in loading state */}
            <button 
              type="submit" 
              className="btn btn-primary w-full" 
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <span className="loading loading-infinity text-accent w-11 h-10"></span>
                  Submitting...
                </>
              ) : (
                "Sign UP"
              )}
            </button>
            
          </form>

          <div className="text-center mt-4">
            <p className="text-base-content/70">
              Already have an account?{" "}
              <Link to="/login" className="link link-primary">
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;