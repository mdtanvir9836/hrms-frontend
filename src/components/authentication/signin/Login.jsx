import React from "react";
import "../../../style/Login.css";
import { useNavigate } from "react-router-dom";
import logo from "../../../assets/images/logo.png";
import { loginUser } from "../../../redux/slice/userSlice";
import { Field, Formik, Form } from "formik";
import * as Yup from "yup"
import { useDispatch } from "react-redux";

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const initialValues = {
    email: "",
    password: "",
  };
  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });

  const handleSubmit = (values, { setSubmitting }) => {
    console.log(values);
    
    dispatch(loginUser(values))
      .unwrap()
      .then(() => {
        navigate("/hrms/dashboard");
      })
      .catch((err) => {
        console.error("Submission error:", err);
      })
      .finally(() => {
        setSubmitting(false);
      });
  };

  return (
    <div className="js-page-layout layout">
      <div className="container-fluid secureHeader">
        <div className="secureHeader__content">
          <a
            title="HRMS"
            className="HRMS-logo"
            href="https://HRMShr.com"
          >
            <img
              alt="HRMS logo"
              src={logo}
              width="150"
              height="50"
              className="logo"
            />
          </a>
          <div className="secureHeader__sign_link">
            <span className="secureHeader__sign_link__sign_description">
              You do not have an account?
            </span>
            <button
              className="secureHeader__sign_link__link"
              onClick={() => navigate("/email-verification")}
            >
              Get started now
            </button>
          </div>
        </div>
      </div>

      <div className="form__wrapper">
        <div className="container-fluid">
          <div className="row center-xs">
            <div className="col-xs-12 col-sm-6 col-md-5 form__container-wrapper">
              <div className="form__container">
                <div className="form__header">
                  <div className="header-block">
                    <div className="header-block__content">
                      <p className="header-block__description">
                        Log in to your HRMS account
                      </p>
                      <div className="header-block__line"></div>
                    </div>
                  </div>
                </div>
                <h3 className="sso-title">Continue with...</h3>
                <ul className="sso-list">
                  <li className="sso-list__item">
                    <a
                      href="https://HRMS-production.auth.eu-central-1.amazoncognito.com/oauth2/authorize?redirect_uri=https://api.HRMShr.com/cognito/oauth&amp;response_type=CODE&amp;client_id=53avjrh4f9bre669tbhbeo03gn&amp;scope=email%20openid%20profile%20aws.cognito.signin.user.admin&amp;state=eyJob3N0IjoiYXBpLmZhY3RvcmlhbGhyLmNvbSIsInJldHVybl90byI6Imh0cHM6Ly9hcHAuZmFjdG9yaWFsaHIuY29tIn0=&amp;identity_provider=Google"
                      className="button button--lightGrey--outline button--full-width"
                      title="Continue with Google"
                    >
                      <div className="sso_button_content">
                        <img
                          alt="Continue with Google"
                          className="sso_button_logo"
                          width="20"
                          height="20"
                          src="https://assets.HRMShr.com/assets/public/sso_provider_logos/google-c7c08d5d3307dbc65c897b1c6749d2700457711c7f31b3ff17c93bfd6da21fae.svg"
                        />
                      </div>
                    </a>
                  </li>
                  <li className="sso-list__item">
                    <a
                      href="https://HRMS-production.auth.eu-central-1.amazoncognito.com/oauth2/authorize?redirect_uri=https://api.HRMShr.com/cognito/oauth&amp;response_type=CODE&amp;client_id=53avjrh4f9bre669tbhbeo03gn&amp;scope=email%20openid%20profile%20aws.cognito.signin.user.admin&amp;state=eyJob3N0IjoiYXBpLmZhY3RvcmlhbGhyLmNvbSIsInJldHVybl90byI6Imh0cHM6Ly9hcHAuZmFjdG9yaWFsaHIuY29tIn0=&amp;identity_provider=Microsoft"
                      className="button button--lightGrey--outline button--full-width"
                      title="Continue with Microsoft"
                    >
                      <div className="sso_button_content">
                        <img
                          alt="Continue with Microsoft"
                          className="sso_button_logo"
                          width="20"
                          height="20"
                          src="https://assets.HRMShr.com/assets/public/sso_provider_logos/microsoft-cd5583bb7690f13cc9da270f87352506c5a6dc7d48c71c1354a76269fef26d1c.svg"
                        />
                      </div>
                    </a>
                  </li>
                </ul>
                <div className="sso_separator">
                  <span className="sso_separator_text">or</span>
                </div>
                <Formik
                  initialValues={initialValues}
                  validationSchema={validationSchema}
                  onSubmit={handleSubmit}
                >
                  {({ isSubmitting, values }) => (
                    <Form
                      className="form"
                      id="new_user"
                      action="https://api.HRMShr.com/en-US/users/sign_in"
                      acceptCharset="UTF-8"
                      method="post"
                    >
                      <div className="form__row">
                        <div className="text-input">
                          <Field
                            autoFocus
                            className="text-input__input"
                            required
                            type="email"
                            name="email"
                          />
                          <label
                            className="text-input__label"
                            htmlFor="user_email"
                          >
                            Email
                          </label>
                        </div>
                      </div>
                      <div className="form__row">
                        <div className="text-input">
                          <Field
                            autoComplete="off"
                            className="text-input__input"
                            required
                            type="password"
                            name="password]"
                          />
                          <label
                            className="text-input__label"
                            htmlFor="user_password"
                          >
                            Password
                          </label>
                        </div>
                      </div>
                      <div className="form__row row">
                        <div className="col-xs right-aligned">
                          <a href="https://api.HRMShr.com/en-US/users/password/new">
                            Forgot your password?
                          </a>
                        </div>
                      </div>
                      <input
                        type="submit"
                        name="commit"
                        value="Sign in"
                        className="js-submit button button--brand button--full-width"
                      />
                      <a
                        className="form__saml_link"
                        href="https://api.HRMShr.com/saml_login/new?locale=en-US"
                      >
                        Sign in with SAML SSO
                      </a>
                    </Form>
                  )}
                </Formik>
              </div>
              <div className="form__footer"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
