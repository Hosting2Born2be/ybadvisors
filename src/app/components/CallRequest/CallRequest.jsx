"use client";
import React from "react";
import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import ButtonArrow from "@/icons/ButtonArrow";
import CheckboxIcon from "@/icons/CheckboxIcon";
import styles from "./CallRequest.module.scss";
import useCountryCode from "@/utils/useCountryCode";
import usePopupStore from "@/stores/popupStore";
import CloseIcon from "@/icons/CloseIcon";
import Select from "react-select";

const CallRequest = () => {
  const { requestPopupDisplay, setRequestPopupDisplay, plansValue } =
    usePopupStore();
  const countryCode = useCountryCode();

  const types = [
    { value: "General Questions", label: "General Questions" },
    { value: "Accounting and Taxation", label: "Accounting and Taxation" },
    { value: "Regulatory and Compliance", label: "Regulatory and Compliance" },
    { value: "I am not sure", label: "I am not sure" },
  ];

  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      width: "100%",
      color: "#000000",
      height: "50px",
      borderRadius: "0",
      background: "#e2e8f0",
      border: "2px solid #e2e8f0",
      borderBottom: "2px solid #e2e8f0",
      fontSize: "14px",
      fontWeight: "400",
      lineHeight: "1.2",
      textAlign: "left",
      padding: "0 16px",
      boxShadow: "unset",
      "&:hover": {
        //borderColor: "#4b5563",
      },
    }),
    valueContainer: (provided) => ({
      ...provided,
      height: "50px",
      margin: "0",
      padding: "0",
      border: "none",
    }),
    input: (provided) => ({
      ...provided,
      height: "50px",
      margin: "0",
      padding: "0",
      border: "none",
      color: "#000000",
    }),
    singleValue: (provided) => ({
      ...provided,
      color: "#000000",
    }),
    indicatorsContainer: (provided) => ({
      ...provided,
      "> span": {
        display: "none",
      },
      "> div": {
        padding: "0",
        width: "24px",
        height: "24px",
        backgroundImage: "url(/images/selectArrow.svg)",
        backgroundinquiryType: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
      },
      "> div > svg": {
        display: "none",
      },
    }),
    indicatorContainer: (provided) => ({
      ...provided,
      padding: "0",
    }),
    menu: (provided) => ({
      ...provided,
      background: "#e2e8f0",
    }),
    option: (provided, state) => ({
      ...provided,
      background: state.isSelected ? "#e2e8f0" : "#e2e8f0",
      color: "#0d0d0d",
      "&:hover": {
        background: "#121321",
        color: "#ffffff",
      },
    }),
  };

  const closePopup = (resetForm) => {
    setRequestPopupDisplay(false);
    resetForm();
  };

  const validationSchema = Yup.object({
    firstName: Yup.string().required("This field is required"),
    lastName: Yup.string().required("This field is required"),
    industry: Yup.string().required("This field is required"),
    phone: Yup.string().required("This field is required"),
    email: Yup.string()
      .email("Please provide a valid email address")
      .required("This field is required"),
    inquiryType: Yup.string().required("This field is required"),
    agree: Yup.boolean()
      .oneOf([true], "You must accept the terms")
      .required("This field is required"),
  });

  const initialValues = {
    firstName: "",
    lastName: "",
    company: "",
    requestDetails: "",
    industry: "",
    phone: "",
    email: "",
    inquiryType: "",
    agree: false,
  };

  const handleSubmit = async (
    values,
    { setSubmitting, resetForm, setStatus }
  ) => {
    setTimeout(() => {
      setSubmitting(false);
      resetForm();
      setStatus({ success: true });
    }, 400);
  };

  return (
    <section
      className={`${styles.callRequest} ${
        requestPopupDisplay ? styles.opened : ""
      }`}
    >
      <div className={styles.callRequestContainer}>
        <div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className={styles.body}
        >
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({
              isSubmitting,
              status,
              setFieldValue,
              touched,
              errors,
              resetForm,
              values
            }) => (
              <div className={styles.formWrap}>
                <button
                  className={styles.close}
                  onClick={() => closePopup(resetForm)}
                >
                  Close
                  <CloseIcon />
                </button>
                <Form>
                  {!status && (
                    <>
                      <div className={styles.formTitle}>
                        <h2>
                          Financial and <br />
                          Accounting Consultation <br />
                          Call Request
                        </h2>
                        <div className={styles.image}></div>
                      </div>
                      <div className={styles.formData}>
                        <div className={styles.formInner}>
                          <div>
                            <Field
                              name="firstName"
                              type="text"
                              placeholder="First Name"
                              className={
                                touched.firstName && errors.firstName
                                  ? styles.invalid
                                  : ""
                              }
                            />
                            <ErrorMessage
                              name="firstName"
                              component="div"
                              className={styles.error}
                            />
                          </div>
                          <div>
                            <Field
                              name="industry"
                              type="text"
                              placeholder="Industry"
                              className={
                                touched.industry && errors.industry
                                  ? styles.invalid
                                  : ""
                              }
                            />
                            <ErrorMessage
                              name="industry"
                              component="div"
                              className={styles.error}
                            />
                          </div>
                          <div>
                            <Field
                              name="lastName"
                              type="text"
                              placeholder="Last Name"
                              className={
                                touched.lastName && errors.lastName
                                  ? styles.invalid
                                  : ""
                              }
                            />
                            <ErrorMessage
                              name="lastName"
                              component="div"
                              className={styles.error}
                            />
                          </div>
                          <div>
                            <PhoneInput
                              country={countryCode}
                              placeholder="Phone"
                              onChange={(phone) =>
                                setFieldValue("phone", phone)
                              }
                              className={`${styles.phoneWrap} ${
                                touched.email && errors.email
                                  ? styles.invalid
                                  : ""
                              }`}
                            />
                            <ErrorMessage
                              name="phone"
                              component="div"
                              className={styles.error}
                            />
                          </div>
                          <div>
                            <Field
                              name="company"
                              type="text"
                              placeholder="Company"
                            />
                            <ErrorMessage
                              name="company"
                              component="div"
                              className={styles.error}
                            />
                          </div>
                          <div>
                            <Field
                              name="email"
                              type="email"
                              placeholder="Email"
                              className={
                                touched.email && errors.email
                                  ? styles.invalid
                                  : ""
                              }
                            />
                            <ErrorMessage
                              name="email"
                              component="div"
                              className={styles.error}
                            />
                          </div>
                          <div>
                            <Field
                              name="requestDetails"
                              placeholder="Request Details"
                            />
                            <ErrorMessage
                              name="requestDetails"
                              component="div"
                              className={styles.error}
                            />
                          </div>

                          <div>
                            <Select
                              name="inquiryType"
                              options={types}
                              styles={customStyles}
                              className={`form-field ${
                                touched.inquiryType && errors.inquiryType
                                  ? "invalid"
                                  : ""
                              }`}
                              onChange={(option) =>
                                setFieldValue(
                                  "inquiryType",
                                  option ? option.value : ""
                                )
                              }
                              placeholder="Type of Inquiry"
                              instanceId="inquiryType-select"
                              value={
                                types.find(
                                  (type) => type.value === values.inquiryType
                                ) || null
                              }
                            />
                          </div>
                          <div className={styles.checkbox}>
                            <label
                              className={
                                touched.agree && errors.agree
                                  ? styles.invalid
                                  : ""
                              }
                            >
                              <Field name="agree" type="checkbox" />
                              <CheckboxIcon />
                              <span>
                                I accept the Terms of Service and understand
                                that my data will be securely stored in
                                accordance with the policy.
                              </span>
                            </label>
                            <ErrorMessage
                              name="agree"
                              component="div"
                              className={styles.error}
                            />
                          </div>
                          <button
                            type="submit"
                            disabled={isSubmitting}
                            className={styles.orderButton}
                          >
                            <div>
                              <div className={styles.circle}>
                                <ButtonArrow />
                              </div>
                              <span>Submit</span>
                              <div className={styles.circleTransparent}>
                                <ButtonArrow />
                              </div>
                            </div>
                          </button>
                        </div>
                      </div>
                    </>
                  )}
                  {isSubmitting && (
                    <div className={styles.loading}>
                      <img src="/images/loading.svg" alt="Loading" />
                    </div>
                  )}
                  {status && status.success && (
                    <div className={styles.success}>
                      <div className={styles.title}>
                        <h2>Thank you!</h2>
                        <p>
                          We have received your consultation <br />
                          request. One of our experts will contact <br />
                          you shortly to assist with your inquiry.
                        </p>
                      </div>
                      <div className={styles.image}></div>
                    </div>
                  )}
                </Form>
              </div>
            )}
          </Formik>
        </div>
      </div>
    </section>
  );
};

export default CallRequest;
