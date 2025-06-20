import React, { useEffect, useRef, useState } from "react";
import { BsQuestionCircleFill } from "react-icons/bs";
import { CiStar } from "react-icons/ci";
import { FaArrowRight, FaCaretDown } from "react-icons/fa6";
import { MdOutlineMapsHomeWork } from "react-icons/md";
import { PiUserCirclePlusFill } from "react-icons/pi";
import { RiTeamLine } from "react-icons/ri";
import { fetchUserById } from "../../redux/slice/userSlice";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import {
  createUserProfile,
  getUserProfile,
  updateUserProfile,
} from "../../redux/slice/userProfileSlice";

function Profile() {
  const dispatch = useDispatch();
  const editId = useParams().id;
  console.log("editId", editId);
  const userId =
    editId !== null && editId !== undefined
      ? editId
      : localStorage.getItem("userId");
  console.log("userId", userId);

  const fileInputRef = useRef(null);
  const [preview, setPreview] = useState(null);

  useEffect(() => {
    if (userId) {
      dispatch(fetchUserById(userId));
      dispatch(getUserProfile(userId));
    }
  }, [userId, dispatch]);

  const { users } = useSelector((state) => state.user);
  console.log(users);
  
  const { loading, profiles } = useSelector((state) => state.profile);

  const validationSchema = Yup.object({
    photo: Yup.mixed()
      .test(
        "fileSize",
        "File size is too large. Maximum size is 2MB.",
        (value) => !value || value.size <= 2 * 1024 * 1024 // 2MB
      )
      .test(
        "fileType",
        "Only JPG, JPEG, PNG files are allowed",
        (value) =>
          !value ||
          ["image/jpeg", "image/png", "image/jpg"].includes(value.type)
      ),
  });

  const initialValues = {
    userId: userId,
    photo: profiles?.[0]?.photo || null,
  };

  const handleSubmit = (values, { setSubmitting }) => {
    const profileData = new FormData();
    profileData.append("photo", values.photo); // Append the photo
    profileData.append("userId", values.userId); // Append other fields

    if (profiles[0]?._id) {
      dispatch(
        updateUserProfile({ id: profiles[0]._id, profileData })
      ).unwrap();
    } else {
      dispatch(createUserProfile(profileData))
        .unwrap()
        .then(() => {
          dispatch(getUserProfile(userId));
        })
        .catch((err) => {
          console.error("Submission error:", err);
        })
        .finally(() => {
          setSubmitting(false);
        });
    }
  };

  const handleFileChange = (event, setFieldValue) => {
    const photo = event.target.files[0];
    if (photo) {
      setFieldValue("photo", photo);

      const reader = new FileReader();
      reader.onload = () => {
        setPreview(reader.result);
      };
      reader.onerror = () => {
        console.error("Error reading file");
        alert("Failed to load image. Please try again.");
      };
      reader.readAsDataURL(photo);
    }
  };

  const triggerFileUpload = () => fileInputRef.current.click();

  return (
    <section className="relative flex-1 overflow-auto">
      <div className="relative flex min-h-full w-full flex-col gap-4 place-self-center overflow-y-auto px-6 py-5 max-w-screen-lg">
        <div className="bDqlz">
          <div className="gc6a5">
            <div className="k93hF">
              <div className="JsOur px-16">
                <div className="LmTK2 _3k5ae">
                  <div className="_6o1-A">
                    <div className="WToIY medium XOGJ7">
                      <div
                        className="purg7v1 purg7vc7 purg7vd0 _15se5fi0"
                        style={{ "--purg7v0": "transparent" }}
                      >
                        <div className="_6ILTG">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="60"
                            height="70"
                            viewBox="0 0 24 24"
                            aria-labelledby=""
                            aria-label=""
                            class="fill-current text-radical-100 h-xl w-xl min-w-xl"
                          >
                            <path d="M9 8a1 1 0 0 1 1-1h3a1 1 0 1 1 0 2h-3a1 1 0 0 1-1-1ZM10 10a1 1 0 1 0 0 2h3a1 1 0 1 0 0-2h-3ZM9 14a1 1 0 0 1 1-1h3a1 1 0 1 1 0 2h-3a1 1 0 0 1-1-1Z"></path>
                            <path
                              fill-rule="evenodd"
                              d="M8 4a2 2 0 0 0-2 2v12H5a1 1 0 1 0 0 2h13a1 1 0 1 0 0-2h-1V6a2 2 0 0 0-2-2H8Zm0 14h2v-1a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v1h2V6H8v12Z"
                              clip-rule="evenodd"
                            ></path>
                          </svg>
                        </div>
                      </div>
                      <div className="Z2tZY">
                        <span
                          className="_6o3wap1 _6o3wapn _6o3wapt _6o3wap7 _6o3wap9"
                          style={{
                            "--_6o3wap0": "var(--_1wf7mbl3s)",
                          }}
                        >
                          Basic info
                        </span>
                      </div>
                      <div className="lsgRP">
                        <span
                          className="_6o3wap1 _6o3wapm _6o3wapv _6o3wap7 _6o3wap9"
                          style={{
                            "--_6o3wap0": "var(--_1wf7mbl3r)",
                          }}
                        >
                          Details about you and your role.
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="YI2-W">
                    <div className="">
                      <Formik
                        initialValues={initialValues}
                        validationSchema={validationSchema}
                        enableReinitialize={true}
                        onSubmit={handleSubmit}
                      >
                        {({
                          values,
                          errors,
                          touched,
                          isSubmitting,
                          setFieldValue,
                        }) => (
                          <Form className="tY4kP hpwg5k2 hpwg5k1">
                            {console.log(values)}
                            <div
                              className="hpwg5k3"
                              onClick={triggerFileUpload}
                            >
                              {preview || profiles[0]?.photo ? (
                                <>
                                  <div class="_3n2uG _2ijBo fGFPk">
                                    <div role="tooltip">
                                      <img
                                        src={preview || profiles[0]?.photo}
                                        class="jXKUD tether-target tether-pinned tether-pinned-right tether-element-attached-bottom tether-target-attached-top tether-enabled"
                                      />
                                    </div>
                                  </div>
                                  <div
                                    role="presentation"
                                    tabindex="0"
                                    style={{ visibility: "hidden" }}
                                  >
                                    <input
                                      type="file"
                                      ref={fileInputRef}
                                      style={{ display: "none" }}
                                      accept="image/jpeg,image/png"
                                      onChange={(event) =>
                                        handleFileChange(event, setFieldValue)
                                      }
                                    />
                                  </div>
                                </>
                              ) : (
                                <div
                                  role="presentation"
                                  tabindex="0"
                                  className="D0cpR _2ijBo fGFPk"
                                >
                                  <input
                                    type="file"
                                    ref={fileInputRef}
                                    style={{ display: "none" }}
                                    accept="image/jpeg,image/png"
                                    onChange={(event) =>
                                      handleFileChange(event, setFieldValue)
                                    }
                                  />
                                  <div className="gxYMh">
                                    <svg
                                      aria-hidden="true"
                                      className="_1qphaha1 _1qphaha5 _1qphaha6 _1qphaha7"
                                      style={{
                                        "--_1qphaha0": "var(--_1wf7mbl3p)",
                                      }}
                                    >
                                      <PiUserCirclePlusFill size={35} />
                                    </svg>
                                  </div>
                                </div>
                              )}
                              {errors.photo && touched.photo && (
                                <div className="error-message">
                                  {errors.photo}
                                </div>
                              )}
                            </div>

                            <div
                              className="purg7v1 purg7vuf purg7vc9 _15se5fi0"
                              style={{
                                "--purg7v0": "transparent",
                                marginTop: 50,
                              }}
                            >
                              <span
                                className="_6o3wap1 _6o3wapn _6o3wapu _6o3wap7 _6o3wap9"
                                style={{
                                  "--_6o3wap0": "var(--_1wf7mbl3s)",
                                  textAlign: "center",
                                }}
                              >
                                {users?.firstName} {users?.lastName}
                              </span>
                            </div>
                            <div
                              className="purg7v1 purg7v9t purg7vuf purg7vc9 _15se5fi0"
                              style={{ "--purg7v0": "transparent" }}
                            >
                              <span
                                className="_6o3wap1 _6o3wapm _6o3wapu _6o3wap7 _6o3wap9"
                                style={{
                                  "--_6o3wap0": "var(--_1wf7mbl3r)",
                                }}
                              ></span>
                            </div>
                            <div className="OV-fI">
                              <div
                                className="purg7v1 purg7vx purg7vc9 _15se5fi0"
                                style={{
                                  "--purg7v0": "transparent",
                                }}
                              >
                                <button
                                  type="button"
                                  aria-haspopup="dialog"
                                  aria-expanded="false"
                                  aria-controls="radix-:r17:"
                                  data-state="closed"
                                >
                                  <label className="hqyye0">
                                    <div
                                      className="purg7v1 purg7vx purg7vc9 purg7vd6 _15se5fi0"
                                      style={{
                                        "--purg7v0": "transparent",
                                      }}
                                    >
                                      <div
                                        className="purg7v1 purg7vc9 purg7vd5 _15se5fi0"
                                        style={{
                                          "--purg7v0": "transparent",
                                        }}
                                      >
                                        <div
                                          className="purg7v1 purg7vc7 purg7vcf purg7vd8 _15se5fi0"
                                          style={{
                                            "--purg7v0": "transparent",
                                          }}
                                        >
                                          <span
                                            className="_6o3wap1 _6o3wapl _6o3wapu _6o3wap7 _6o3wap9"
                                            style={{
                                              "--_6o3wap0": "var(--_1wf7mbl3s)",
                                            }}
                                          >
                                            Manager
                                          </span>
                                          <div role="tooltip">
                                            <BsQuestionCircleFill />
                                          </div>
                                        </div>
                                      </div>
                                      <div
                                        className="purg7v1 purg7v5x purg7vc9 _15se5fio _15se5fi2 _15se5fi1v _1y2tv656 hqyye1"
                                        style={{
                                          "--purg7v0": "var(--_1wf7mbl3k)",
                                        }}
                                      >
                                        <div
                                          className="purg7v1 purg7v78 purg7v81 purg7vx purg7v3c purg7vug purg7vc7 purg7vcf _15se5fi0"
                                          style={{
                                            "--purg7v0": "transparent",
                                          }}
                                        >
                                          <div
                                            className="purg7v1 purg7vx purg7vc7 purg7vd7 _15se5fi0"
                                            style={{
                                              "--purg7v0": "transparent",
                                            }}
                                          >
                                            <div
                                              className="purg7v1 purg7vud purg7vc9 purg7vum _15se5fi0"
                                              style={{
                                                "--purg7v0": "transparent",
                                              }}
                                            >
                                              <span
                                                className="_6o3wap1 _6o3wapm _6o3wapv _6o3wap7 _6o3wap9 _6o3wapy _6o3wapz _6o3wap11"
                                                style={{
                                                  "--_6o3wap0":
                                                    "var(--_1wf7mbl3p)",
                                                }}
                                              >
                                                <span
                                                  title="Select"
                                                  className="_1sco1wt2"
                                                  style={{
                                                    "--_1sco1wt0": 1,
                                                  }}
                                                >
                                                  Select
                                                </span>
                                              </span>
                                            </div>
                                          </div>
                                          <FaCaretDown color="#ccc" />
                                        </div>
                                      </div>
                                    </div>
                                  </label>
                                </button>
                              </div>
                            </div>
                            <div className="OV-fI">
                              <div
                                className="purg7v1 purg7vc9 purg7vd8 _15se5fi0"
                                style={{
                                  "--purg7v0": "transparent",
                                }}
                              >
                                <label className="hqyye0">
                                  <div
                                    className="purg7v1 purg7vx purg7vc9 purg7vd6 _15se5fi0"
                                    style={{
                                      "--purg7v0": "transparent",
                                    }}
                                  >
                                    <div
                                      className="purg7v1 purg7vc9 purg7vd5 _15se5fi0"
                                      style={{
                                        "--purg7v0": "transparent",
                                      }}
                                    >
                                      <div
                                        className="purg7v1 purg7vc7 purg7vcf purg7vd8 _15se5fi0"
                                        style={{
                                          "--purg7v0": "transparent",
                                        }}
                                      >
                                        <span
                                          className="_6o3wap1 _6o3wapl _6o3wapu _6o3wap7 _6o3wap9"
                                          style={{
                                            "--_6o3wap0": "var(--_1wf7mbl3s)",
                                          }}
                                        >
                                          Email
                                        </span>
                                      </div>
                                    </div>
                                    <div
                                      className="purg7v1 purg7v5x purg7vc9 _15se5fio _15se5fi2 _15se5fi1v _1y2tv656 hqyye1"
                                      style={{
                                        "--purg7v0": "var(--_1wf7mbl3k)",
                                      }}
                                    >
                                      <input
                                        className="_1tr1dnd0"
                                        type="text"
                                        value={users?.email}
                                        style={{ border: "none" }}
                                      />
                                    </div>
                                  </div>
                                </label>
                              </div>
                            </div>

                            <div className="OV-fI">
                              <label className="hqyye0">
                                <div
                                  className="purg7v1 purg7vx purg7vc9 purg7vd6 _15se5fi0"
                                  style={{
                                    "--purg7v0": "transparent",
                                  }}
                                >
                                  <div
                                    className="purg7v1 purg7vc9 purg7vd5 _15se5fi0"
                                    style={{
                                      "--purg7v0": "transparent",
                                    }}
                                  >
                                    <div
                                      className="purg7v1 purg7vc7 purg7vcf purg7vd8 _15se5fi0"
                                      style={{
                                        "--purg7v0": "transparent",
                                      }}
                                    >
                                      <span
                                        className="_6o3wap1 _6o3wapl _6o3wapu _6o3wap7 _6o3wap9"
                                        style={{
                                          "--_6o3wap0": "var(--_1wf7mbl3s)",
                                        }}
                                      >
                                        Legal entity
                                      </span>
                                    </div>
                                  </div>
                                  <div
                                    className="purg7v1 purg7v5x purg7vc9 _15se5fio _15se5fi2 _15se5fi1v _1y2tv656 hqyye1"
                                    style={{
                                      "--purg7v0": "var(--_1wf7mbl3m)",
                                    }}
                                  >
                                    <input
                                      className="_1tr1dnd0"
                                      type="text"
                                      disabled=""
                                      value={users?.organizationId?.name}
                                      style={{ border: "none" }}
                                    />
                                  </div>
                                </div>
                              </label>
                            </div>
                            <div className="OV-fI">
                              <label className="hqyye0">
                                <div
                                  className="purg7v1 purg7vx purg7vc9 purg7vd6 _15se5fi0"
                                  style={{
                                    "--purg7v0": "transparent",
                                  }}
                                >
                                  <div
                                    className="purg7v1 purg7vc9 purg7vd5 _15se5fi0"
                                    style={{
                                      "--purg7v0": "transparent",
                                    }}
                                  >
                                    <div
                                      className="purg7v1 purg7vc7 purg7vcf purg7vd8 _15se5fi0"
                                      style={{
                                        "--purg7v0": "transparent",
                                      }}
                                    >
                                      <span
                                        className="_6o3wap1 _6o3wapl _6o3wapu _6o3wap7 _6o3wap9"
                                        style={{
                                          "--_6o3wap0": "var(--_1wf7mbl3s)",
                                        }}
                                      >
                                        Employee company identifier
                                      </span>
                                      <div role="tooltip">
                                        <BsQuestionCircleFill />
                                      </div>
                                    </div>
                                  </div>
                                  <div
                                    className="purg7v1 purg7v5x purg7vc9 _15se5fio _15se5fi2 _15se5fi1v _1y2tv656 hqyye1"
                                    style={{
                                      "--purg7v0": "var(--_1wf7mbl3k)",
                                    }}
                                  >
                                    <input
                                      className="_1tr1dnd0"
                                      type="text"
                                      value=""
                                      style={{ border: "none" }}
                                    />
                                  </div>
                                </div>
                              </label>
                            </div>
                            <div className="OV-fI">
                              <label className="hqyye0">
                                <div
                                  className="purg7v1 purg7vx purg7vc9 purg7vd6 _15se5fi0"
                                  style={{
                                    "--purg7v0": "transparent",
                                  }}
                                >
                                  <div
                                    className="purg7v1 purg7vc9 purg7vd5 _15se5fi0"
                                    style={{
                                      "--purg7v0": "transparent",
                                    }}
                                  >
                                    <div
                                      className="purg7v1 purg7vc7 purg7vcf purg7vd8 _15se5fi0"
                                      style={{
                                        "--purg7v0": "transparent",
                                      }}
                                    >
                                      <span
                                        className="_6o3wap1 _6o3wapl _6o3wapu _6o3wap7 _6o3wap9"
                                        style={{
                                          "--_6o3wap0": "var(--_1wf7mbl3s)",
                                        }}
                                      >
                                        Seniority date
                                      </span>
                                    </div>
                                  </div>
                                  <div
                                    className="purg7v1 purg7v5x purg7vc9 _15se5fio _15se5fi2 _15se5fi1v _1y2tv656 hqyye1"
                                    style={{
                                      "--purg7v0": "var(--_1wf7mbl3k)",
                                    }}
                                  >
                                    <div
                                      className="purg7v1 purg7vx purg7vc7 purg7vcf purg7vv2 _15se5fi0"
                                      style={{
                                        "--purg7v0": "transparent",
                                      }}
                                    >
                                      <div
                                        className="purg7v1 purg7vx purg7vc9 _15se5fi0"
                                        style={{
                                          "--purg7v0": "transparent",
                                        }}
                                      >
                                        <input
                                          className="_1tr1dnd0"
                                          type="text"
                                          value=""
                                          style={{
                                            textOverflow: "ellipsis",
                                            paddingRight: "var(--_1wf7mbl4y)",
                                            border: "none",
                                          }}
                                        />
                                      </div>
                                      <div
                                        className="purg7v1 purg7vc9 _15se5fi0 ydan0q0"
                                        style={{
                                          "--purg7v0": "transparent",
                                        }}
                                      >
                                        <FaCaretDown color="#ccc" />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </label>
                            </div>
                            <div class="OV-fI zyPqg">
                              <div class="OnRSf">
                                {values && values.photo && (
                                  <button
                                    className="_1nz7aia3 _1nz7aia4"
                                    type="submit"
                                    disabled={isSubmitting || loading}
                                    style={{
                                      "--_1nz7aia2": "var(--_1wf7mbl52)",
                                      "--_1nz7aia1": "var(--_1wf7mbl52)",
                                      "--_1nz7aia0": "none",
                                    }}
                                  >
                                    <span
                                      className="_6o3wap1 _6o3wapl _6o3wapu _6o3wap7 _6o3wap9"
                                      style={{
                                        "--_6o3wap0": "var(--seicjt3d)",
                                      }}
                                    >
                                      Save
                                    </span>
                                  </button>
                                )}
                              </div>
                            </div>
                          </Form>
                        )}
                      </Formik>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="k93hF">
              <div className="JsOur jZmi-">
                <div
                  className="purg7v1 purg7v7d purg7v85 purg7vx purg7vc9 purg7v64 _15se5fi0"
                  style={{ "--purg7v0": "transparent" }}
                >
                  <div className="_7ygv9y0">
                    <div className="_7ygv9y1 _7ygv9y3">
                      <div
                        className="purg7v1 purg7vbo purg7vc9 _15se5fi0"
                        style={{ "--purg7v0": "transparent" }}
                      >
                        <div className="_17d9nud0">
                          <div
                            className="purg7v1 purg7v9r purg7vc9 purg7vd8 _15se5fi0"
                            style={{ "--purg7v0": "transparent" }}
                          >
                            <div
                              className="purg7v1 purg7vc7 purg7vcc purg7vd0 purg7vdb _15se5fi0"
                              style={{
                                "--purg7v0": "transparent",
                              }}
                            >
                              <div
                                className="purg7v1 purg7v2o purg7vc9 purg7vd8 _15se5fi0"
                                style={{
                                  "--purg7v0": "transparent",
                                }}
                              >
                                <div
                                  className="purg7v1 purg7vc9 _15se5fi0"
                                  style={{
                                    "--purg7v0": "transparent",
                                  }}
                                >
                                  <MdOutlineMapsHomeWork
                                    size={35}
                                    color="#1F74EC"
                                  />
                                </div>
                                <div
                                  className="purg7v1 purg7vc7 purg7vci purg7vd8 _15se5fi0"
                                  style={{
                                    "--purg7v0": "transparent",
                                  }}
                                >
                                  <span
                                    className="_6o3wap1 _6o3wapn _6o3wapt _6o3wap7 _6o3wap9"
                                    style={{ "--_6o3wap0": "var(--seicjt2t)" }}
                                  >
                                    Workplaces
                                  </span>
                                </div>
                                <span
                                  className="_6o3wap1 _6o3wapm _6o3wapv _6o3wap7 _6o3wap9 _6o3wap11"
                                  style={{ "--_6o3wap0": "var(--seicjt2u)" }}
                                >
                                  <span
                                    title="You can belong to many workplaces. These are the workplaces you currently belong to:"
                                    className="_1sco1wt1"
                                    style={{ "--_1sco1wt0": 5 }}
                                  >
                                    You can belong to many workplaces. These are
                                    the workplaces you currently belong to:
                                  </span>
                                </span>
                              </div>
                            </div>
                          </div>
                          <div
                            className="purg7v1 purg7v8y purg7vc9 purg7vcg _15se5fi0"
                            style={{ "--purg7v0": "transparent" }}
                          >
                            <button
                              className="_1nz7aia3 _1nz7aia5"
                              type="button"
                              style={{
                                "--_1nz7aia2": "var(--_1wf7mbl52)",
                                "--_1nz7aia1": "var(--_1wf7mbl52)",
                                "--_1nz7aia0": "none",
                              }}
                            >
                              <span
                                className="_6o3wap1 _6o3wapl _6o3wapu _6o3wap7 _6o3wap9"
                                style={{ "--_6o3wap0": "var(--seicjt3j)" }}
                              >
                                Assign workplaces
                              </span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="_7ygv9y1 _7ygv9y3">
                      <ul
                        className="purg7v1 purg7vc9 purg7vum _15se5fi1 _15se5fio _15se5fi1v _1y2tv656"
                        style={{
                          "--purg7v0": "var(--_1wf7mbl3k)",
                        }}
                      >
                        <li
                          className="purg7v1 purg7v79 purg7v83 purg7vc7 purg7vcf purg7vd0 get7bh0 "
                          style={{ "--purg7v0": "transparent" }}
                        >
                          <div
                            className="purg7v1 purg7vx purg7vc7 purg7vcf purg7vd0 purg7vdb _15se5fi0"
                            style={{ "--purg7v0": "transparent" }}
                          >
                            <div
                              className="purg7v1 purg7v1y purg7vc7 purg7vd8 _15se5fi0"
                              style={{
                                "--purg7v0": "transparent",
                              }}
                            >
                              <CiStar size={20} color="#888" />
                              <div role="tooltip">
                                <span
                                  className="_6o3wap1 _6o3wapm _6o3wapu _6o3wap7 _6o3wap9 _6o3wapy _6o3wap11 tether-target tether-pinned tether-pinned-right tether-enabled tether-pinned-bottom"
                                  style={{
                                    "--_6o3wap0": "var(--_1wf7mbl3s)",
                                  }}
                                >
                                  <span
                                    title="Ideal E design  (in)"
                                    className="_1sco1wt2"
                                    style={{ "--_1sco1wt0": 1 }}
                                  >
                                    Ideal E design (in)
                                  </span>
                                </span>
                              </div>
                            </div>
                            <div
                              className="purg7v1 purg7vc7 purg7vd9 _15se5fi0"
                              style={{
                                "--purg7v0": "transparent",
                              }}
                            >
                              <a
                                className="ckhy410"
                                href="/settings/locations/381343/details"
                              >
                                <button
                                  className="_1nz7aia3 _1nz7aia5"
                                  type="button"
                                  style={{
                                    "--_1nz7aia2": "var(--_1wf7mbl4v)",
                                    "--_1nz7aia1": "var(--_1wf7mbl4v)",
                                    "--_1nz7aia0": "none",
                                  }}
                                >
                                  <FaArrowRight color="#ccc" />
                                </button>
                              </a>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="k93hF">
            <div className="JsOur jZmi-">
              <div className="LmTK2 _3k5ae">
                <div className="_6o1-A">
                  <div className="WToIY medium XOGJ7">
                    <div
                      className="purg7v1 purg7vc7 purg7vd0 _15se5fi0"
                      style={{ "--purg7v0": "transparent" }}
                    >
                      <div className="_6ILTG">
                        <svg
                          aria-hidden="true"
                          className="_1qphaha1 _1qphaha5 _1qphaha6 _1qphaha7"
                          style={{"--_1qphaha0": "var(--_1wf7mbl49)"}}
                        >
                          <use xlink:href="/assets/large-symbols.lnup1txy2w.svg#calendar-clock"></use>
                        </svg>
                      </div>
                    </div>
                    <div className="Z2tZY">
                      <span
                        className="_6o3wap1 _6o3wapn _6o3wapt _6o3wap7 _6o3wap9"
                      style={{
                                    "--_6o3wap0":
                                      "var(--_1wf7mbl3s)",
                                  }}
                      >
                        Time off
                      </span>
                    </div>
                    <div className="lsgRP">
                      <span
                        className="_6o3wap1 _6o3wapm _6o3wapv _6o3wap7 _6o3wap9"
                        style={{"--_6o3wap0": "var(--_1wf7mbl3r)"}}
                      >
                        The Time off supervisor is in charge
                        of reviewing your time off requests.
                      </span>
                    </div>
                  </div>
                </div>
                <div className="YI2-W">
                  <div className="_6NtRo">
                    <form className="tY4kP">
                      <div className="OV-fI">
                        <label className="hqyye0">
                          <div
                            className="purg7v1 purg7vx purg7vc9 purg7vd6 _15se5fi0"
                            style={{
                              "--purg7v0": "transparent",
                            }}
                          >
                            <div
                              className="purg7v1 purg7vc9 purg7vd5 _15se5fi0"
                              style={{
                                "--purg7v0": "transparent",
                              }}
                            >
                              <div
                                className="purg7v1 purg7vc7 purg7vcf purg7vd8 _15se5fi0"
                                style={{
                                  "--purg7v0": "transparent",
                                }}
                              >
                                <span
                                  className="_6o3wap1 _6o3wapl _6o3wapu _6o3wap7 _6o3wap9"
                                style={{
                                    "--_6o3wap0":
                                      "var(--_1wf7mbl3s)",
                                  }}
                                >
                                  Time off policy
                                </span>
                              </div>
                            </div>
                            <div
                              className="purg7v1 purg7v5x purg7vc9 _15se5fio _15se5fi2 _15se5fi1v _1y2tv656 hqyye1"
                              style={{"--purg7v0": "var(--_1wf7mbl3m)"}}
                            >
                              <div
                                className="purg7v1 purg7vx purg7vc7 purg7vcf purg7vv2 _15se5fi0"
                                style={{
                                  "--purg7v0": "transparent",
                                }}
                              >
                                <div
                                  className="purg7v1 purg7vx purg7vc9 _15se5fi0"
                                  style={{
                                    "--purg7v0":
                                      "transparent",
                                  }}
                                >
                                  <select
                                    className="t5hzt70"
                                    disabled=""
                                  >
                                    <option value="333771">
                                      Política de ausencias
                                    </option>
                                  </select>
                                </div>
                                <div
                                  className="purg7v1 purg7vc9 _15se5fi0 ydan0q0"
                                  style={{
                                    "--purg7v0":
                                      "transparent",
                                  }}
                                >
                                  <svg
                                    aria-hidden="true"
                                    className="_1qphaha1 _1qphaha3 _1qphaha6 _1qphaha7"
                                    style="--_1qphaha0: var(--_1wf7mbl3p);"
                                  >
                                    <use xlink:href="/assets/small-symbols.npd95zexj0.svg#caret-down"></use>
                                  </svg>
                                </div>
                              </div>
                            </div>
                          </div>
                        </label>
                      </div>
                      <div className="OV-fI">
                        <label className="hqyye0">
                          <div
                            className="purg7v1 purg7vx purg7vc9 purg7vd6 _15se5fi0"
                            style={{
                              "--purg7v0": "transparent",
                            }}
                          >
                            <div
                              className="purg7v1 purg7vc9 purg7vd5 _15se5fi0"
                              style={{
                                "--purg7v0": "transparent",
                              }}
                            >
                              <div
                                className="purg7v1 purg7vc7 purg7vcf purg7vd8 _15se5fi0"
                                style={{
                                  "--purg7v0": "transparent",
                                }}
                              >
                                <span
                                  className="_6o3wap1 _6o3wapl _6o3wapu _6o3wap7 _6o3wap9"
                                style={{
                                    "--_6o3wap0":
                                      "var(--_1wf7mbl3s)",
                                  }}
                                >
                                  Time off supervisor
                                </span>
                              </div>
                            </div>
                            <div
                              className="purg7v1 purg7v5x purg7vc9 _15se5fio _15se5fi2 _15se5fi1v _1y2tv656 hqyye1"
                              style={{
                                "--purg7v0":
                                  "var(--_1wf7mbl3k)",
                              }}
                            >
                              <div
                                className="purg7v1 purg7vx purg7vc7 purg7vcf purg7vv2 _15se5fi0"
                                style={{
                                  "--purg7v0": "transparent",
                                }}
                              >
                                <div
                                  className="purg7v1 purg7vx purg7vc9 _15se5fi0"
                                  style={{
                                    "--purg7v0":
                                      "transparent",
                                  }}
                                >
                                  <input
                                    className="_1tr1dnd0"
                                    type="text"
                                    value="Select"
                                    style={{textOverflow: "ellipsis", paddingRight: "var(--_1wf7mbl4y)"}}
                                  />
                                </div>
                                <div
                                  className="purg7v1 purg7vc9 _15se5fi0 ydan0q0"
                                  style={{
                                    "--purg7v0":
                                      "transparent",
                                  }}
                                >
                                  <svg
                                    aria-hidden="true"
                                    className="_1qphaha1 _1qphaha3 _1qphaha6 _1qphaha7"
                                    style={{"--_1qphaha0": "var(--_1wf7mbl3p)"}}
                                  >
                                    <use xlink:href="/assets/small-symbols.npd95zexj0.svg#caret-down"></use>
                                  </svg>
                                </div>
                              </div>
                            </div>
                          </div>
                        </label>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
            <div className="k93hF">
              <div className="JsOur jZmi-">
                <div className="LmTK2 _3k5ae">
                  <div className="_6o1-A">
                    <div className="WToIY medium XOGJ7">
                      <div
                        className="purg7v1 purg7vc7 purg7vd0 _15se5fi0"
                        style={{ "--purg7v0": "transparent" }}
                      >
                        <div className="_6ILTG">
                          <RiTeamLine size={35} color="#1F74EC" />
                        </div>
                      </div>
                      <div className="Z2tZY">
                        <span
                          className="_6o3wap1 _6o3wapn _6o3wapt _6o3wap7 _6o3wap9"
                          style={{
                            "--_6o3wap0": "var(--_1wf7mbl3s)",
                          }}
                        >
                          Teams
                        </span>
                      </div>
                      <div className="lsgRP">
                        <span
                          className="_6o3wap1 _6o3wapm _6o3wapv _6o3wap7 _6o3wap9"
                          style={{ "--_6o3wap0": "var(--_1wf7mbl3r)" }}
                        >
                          You can belong to many teams. These are the teams you
                          belong to:
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="YI2-W">
                    <div className="">
                      <div
                        className="purg7v1 purg7v6e purg7vc9 purg7vcf purg7vcz _15se5fi1v _15se5fi1 _15se5fio _1y2tv656"
                        style={{ "--purg7v0": "transparent" }}
                      >
                        <span
                          className="_6o3wap1 _6o3wapl _6o3wapv _6o3wap7 _6o3wap9"
                          style={{ "--_6o3wap0": "var(--_1wf7mbl3r)" }}
                        >
                          No teams assigned
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="k93hF">
            <div
              className="purg7v1 purg7v7d purg7v85 purg7vx purg7vc9 purg7v64 _15se5fi0"
              style={{ "--purg7v0": "transparent" }}
            >
              <div className="_7ygv9y0">
                <div className="_7ygv9y1 _7ygv9y3">
                  <div
                    className="purg7v1 purg7vbo purg7vc9 _15se5fi0"
                    style={{ "--purg7v0": "transparent" }}
                  >
                    <div className="_17d9nud0">
                      <div
                        className="purg7v1 purg7v9r purg7vc9 purg7vd8 _15se5fi0"
                        style={{ "--purg7v0": "transparent" }}
                      >
                        <div
                          className="purg7v1 purg7vc7 purg7vcc purg7vd0 purg7vdb _15se5fi0"
                          style={{
                            "--purg7v0": "transparent",
                          }}
                        >
                          <div
                            className="purg7v1 purg7v2o purg7vc9 purg7vd8 _15se5fi0"
                            style={{
                              "--purg7v0": "transparent",
                            }}
                          >
                            <div
                              className="purg7v1 purg7vc9 _15se5fi0"
                              style={{
                                "--purg7v0": "transparent",
                              }}
                            >
                              <svg
                                aria-hidden="true"
                                className="_1qphaha1 _1qphaha5 _1qphaha6 _1qphaha7"
                                style={{"--_1qphaha0": "var(--seicjt35)"}}
                              >
                                <use xlink:href="/assets/large-symbols.lnup1txy2w.svg#report-library"></use>
                              </svg>
                            </div>
                            <div
                              className="purg7v1 purg7vc7 purg7vci purg7vd8 _15se5fi0"
                              style={{
                                "--purg7v0": "transparent",
                              }}
                            >
                              <span
                                className="_6o3wap1 _6o3wapn _6o3wapt _6o3wap7 _6o3wap9"
                                style={{"--_6o3wap0": "var(--seicjt2t)"}}
                              >
                                Dimensions
                              </span>
                            </div>
                            <span
                              className="_6o3wap1 _6o3wapm _6o3wapv _6o3wap7 _6o3wap9 _6o3wap11"
                              style={{"--_6o3wap0": "var(--seicjt2u)"}}
                            >
                              <span
                                title="Analytic dimensions you belong to."
                                className="_1sco1wt1"
                                style={{"--_1sco1wt0": 5}}
                              >
                                Analytic dimensions you belong
                                to.
                              </span>
                            </span>
                            <a
                              href="/settings/finance"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="_1jw01pu0"
                            >
                              <div
                                className="purg7v1 purg7vc7 purg7vcf purg7vd6 _15se5fi0"
                                style={{
                                  "--purg7v0": "transparent",
                                }}
                              >
                                <span
                                  className="_6o3wap1 _6o3wapl _6o3wapu _6o3wap7 _6o3wap9 _6o3wap5"
                                  style={{"--_6o3wap0": "var(--seicjt31)"}}
                                >
                                  Manage dimensions
                                </span>
                                <div data-testid="undefined-external-link-icon">
                                  <svg
                                    aria-hidden="true"
                                    className="_1qphaha1 _1qphaha3 _1qphaha6 _1qphaha7"
                                    style={{"--_1qphaha0": "var(--seicjt3c)"}}
                                  >
                                    <use xlink:href="/assets/small-symbols.npd95zexj0.svg#external-link"></use>
                                  </svg>
                                </div>
                              </div>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="_7ygv9y1 _7ygv9y3">
                  <div
                    className="purg7v1 purg7vat purg7vc9 _15se5fi0"
                    style={{ "--purg7v0": "transparent" }}
                  >
                    <div
                      className="purg7v1 purg7v79 purg7v83 purg7vud purg7vc7 purg7vd9 _15se5fi0 _1y2tv656"
                      style={{"--purg7v0": "var(--_1wf7mbl37)", overflowWrap: "break-word"}}
                    >
                      <div
                        className="purg7v1 purg7vc9 purg7vda _15se5fi0"
                        style={{ "--purg7v0": "transparent" }}
                      >
                        <span
                          className="_6o3wap1 _6o3wapm _6o3wapu _6o3wap7 _6o3wap9"
                          style={{"--_6o3wap0": "var(--_1wf7mbl3r)"}}
                        >
                          There are no dimensions for this
                          employee’s legal entity. You need to
                          create them before assigning.
                        </span>
                        <a href="/settings/finance">
                          <div
                            className="purg7v1 purg7vc7 purg7vcf purg7vd6 _15se5fi0"
                            style={{
                              "--purg7v0": "transparent",
                            }}
                          >
                            <span
                              className="_6o3wap1 _6o3wapl _6o3wapu _6o3wap7 _6o3wap9 _6o3wap5"
                              style={{"--_6o3wap0": "var(--seicjt31)"}}
                            >
                              Manage dimensions
                            </span>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
            <div className="k93hF"></div>
            <div className="k93hF"></div>
            {/* <div className="k93hF">
            <div className="JsOur jZmi-">
              <div className="LmTK2 _3k5ae">
                <div className="_6o1-A">
                  <div className="WToIY medium XOGJ7">
                    <div
                      className="purg7v1 purg7vc7 purg7vd0 _15se5fi0"
                      style={{ "--purg7v0": "transparent" }}
                    >
                      <div className="_6ILTG">
                        <svg
                          aria-hidden="true"
                          className="_1qphaha1 _1qphaha5 _1qphaha6 _1qphaha7"
                          style={{"--_1qphaha0": "var(--_1wf7mbl49)"}}
                        >
                          <use xlink:href="/assets/large-symbols.lnup1txy2w.svg#user-bookmark"></use>
                        </svg>
                      </div>
                    </div>
                    <div className="Z2tZY">
                      <span
                        className="_6o3wap1 _6o3wapn _6o3wapt _6o3wap7 _6o3wap9"
                      style={{
                                    "--_6o3wap0":
                                      "var(--_1wf7mbl3s)",
                                  }}
                      >
                        Face recognition settings
                      </span>
                    </div>
                    <div className="lsgRP">
                      <span
                        className="_6o3wap1 _6o3wapm _6o3wapv _6o3wap7 _6o3wap9"
                        style={{"--_6o3wap0": "var(--_1wf7mbl3r)"}}
                      >
                        Upload and review the reference
                        pictures for the Face Recognition time
                        tracking system.
                      </span>
                    </div>
                  </div>
                  <button
                    className="_1nz7aia3 _1nz7aia4"
                    type="button"
                    style={{"--_1nz7aia2": "var(--_1wf7mbl52)", "--_1nz7aia1": "var(--_1wf7mbl51)", "--_1nz7aia0": "none"}}
                  >
                    <svg
                      aria-hidden="true"
                      className="_1qphaha1 _1qphaha4 _1qphaha6 _1qphaha7"
                      style={{"--_1qphaha0": "var(--seicjt3i)"}}
                    >
                      <use xlink:href="/assets/medium-symbols.o9x3thcc74.svg#add"></use>
                    </svg>
                    <span
                      className="_6o3wap1 _6o3wapl _6o3wapu _6o3wap7 _6o3wap9"
                      style={{"--_6o3wap0": "var(--seicjt3d)"}}
                    >
                      Upload picture
                    </span>
                  </button>
                  <div
                    className="purg7v1 purg7v90 purg7vc9 _15se5fi0"
                    style={{ "--purg7v0": "transparent" }}
                  >
                    <div className="OV-fI">
                      <label className="hqyye0">
                        <div
                          className="purg7v1 purg7vx purg7vc9 purg7vd6 _15se5fi0"
                          style={{
                            "--purg7v0": "transparent",
                          }}
                        >
                          <div
                            className="purg7v1 purg7vc9 purg7vd5 _15se5fi0"
                            style={{
                              "--purg7v0": "transparent",
                            }}
                          >
                            <div
                              className="purg7v1 purg7vc7 purg7vcf purg7vd8 _15se5fi0"
                              style={{
                                "--purg7v0": "transparent",
                              }}
                            >
                              <span
                                className="_6o3wap1 _6o3wapl _6o3wapu _6o3wap7 _6o3wap9"
                              style={{
                                    "--_6o3wap0":
                                      "var(--_1wf7mbl3s)",
                                  }}
                              >
                                ID number
                              </span>
                            </div>
                            <div
                              className="purg7v1 purg7vc7 _15se5fi0"
                              style={{
                                "--purg7v0": "transparent",
                              }}
                            >
                              <span
                                className="_6o3wap1 _6o3wapl _6o3wapv _6o3wap7 _6o3wap9"
                                style={{"--_6o3wap0": "var(--_1wf7mbl3r)"}}
                              >
                                Use this code in case of
                                facial recognition failure.
                              </span>
                            </div>
                          </div>
                          <div
                            className="purg7v1 purg7v5x purg7vc9 _15se5fio _15se5fi2 _15se5fi1v _1y2tv656 hqyye1"
                            style={{"--purg7v0": "var(--_1wf7mbl3m)"}}
                          >
                            <input
                              className="_1tr1dnd0"
                              type="number"
                              disabled=""
                              value=""
                            />
                          </div>
                        </div>
                      </label>
                    </div>
                  </div>
                </div>
                <div className="YI2-W">
                  <div className="">
                    <div
                      className="purg7v1 purg7v79 purg7v85 purg7vc9 purg7vcf purg7vcz _15se5fi1v _15se5fi1 _15se5fio _1y2tv656"
                      style={{ "--purg7v0": "transparent" }}
                    >
                      <span
                        className="_6o3wap1 _6o3wapl _6o3wapv _6o3wap7 _6o3wap9"
                        style={{"--_6o3wap0": "var(--_1wf7mbl3r)"}}
                      >
                        No picture added yet
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Profile;
