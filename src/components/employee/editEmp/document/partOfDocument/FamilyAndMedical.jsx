import React, { useEffect } from "react";
import { HiOutlineUpload } from "react-icons/hi";
import { IoSettingsOutline } from "react-icons/io5";
import { LuFolder } from "react-icons/lu";
import { TbFolderPlus } from "react-icons/tb";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchEmploymentInfoByUserId } from "../../../../../redux/slice/employeeSlice";
import { fetchUserById } from "../../../../../redux/slice/userSlice";
import { FaAngleRight } from "react-icons/fa6";

function FamilyAndMedical() {
  const dispatch = useDispatch();
  const userId = useParams().id;
  console.log("userId", userId);
  const { employee } = useSelector((state) => state.employee);
  console.log("employmentInfos", employee);
  const { users } = useSelector((state) => state.user);
  console.log("users", users);

  useEffect(() => {
    if (userId) {
      dispatch(fetchEmploymentInfoByUserId(userId));
      dispatch(fetchUserById(userId));
    }
  }, [userId, dispatch]);
  return (
    <div className="_110my71a pt-5">
      <div className="_18xzzfe0 regular" data-size="regular">
        <main className="content level-1">
          <div
            className="purg7v1 purg7vx purg7v3x purg7vc9 purg7vu8 purg7vum purg7vuu _15se5fi0 _4onk9z0"
            style={{ "--purg7v0": "var(--_1wf7mbl3k)", borderRadius: 10 }}
          >
            <div
              className="purg7v1 purg7v4e purg7vc9 _15se5fi6f _15se5fi7m _15se5fi5s _4onk9z2"
              style={{ "--purg7v0": "transparent" }}
            >
              <div
                className="purg7v1 purg7v6d purg7vc9 _15se5fi0"
                style={{ "--purg7v0": "transparent" }}
              >
                <div
                  className="purg7v1 purg7v3b purg7vc7 purg7vcf purg7vd0 purg7vdb _15se5fi0"
                  style={{ "--purg7v0": "transparent" }}
                >
                  <div
                    className="purg7v1 purg7vc7 purg7vcf purg7vum _15se5fi0"
                    style={{ "--purg7v0": "transparent" }}
                  >
                    <div
                      className="purg7v1 purg7vc7 purg7vcf _15se5fi0"
                      style={{
                        "--purg7v0": "transparent",
                        opacity: 1,
                        transform: "translateX(0px) translateZ(0px)",
                      }}
                    >
                      <div
                        className="purg7v1 purg7v73 purg7vc9 _15se5fi0"
                        style={{ "--purg7v0": "transparent" }}
                      ></div>
                      <a className="wsh9h10" title="Me" href="/profile">
                        <span
                          className="_6o3wap1 _6o3wapl _6o3wapt _6o3wap6 _6o3wap9 _6o3wapy _6o3wap11"
                          style={{ "--_6o3wap0": "var(--_1wf7mbl3r)" }}
                        >
                          <span
                            title="Me"
                            className="_1sco1wt2"
                            style={{ "--_1sco1wt0": 1 }}
                          >
                            My Document
                          </span>
                        </span>
                      </a>
                      <FaAngleRight size={12} color="grey" />
                      <span
                        className="_6o3wap1 _6o3wapl _6o3wapt _6o3wap6 _6o3wap9 _6o3wapy _6o3wap11"
                        style={{ "--_6o3wap0": "var(--_1wf7mbl3r)" }}
                      >
                        <span
                          title="Me"
                          className="_1sco1wt2"
                          style={{ "--_1sco1wt0": 1 }}
                        >
                          {users?.firstName} {users?.lastName}
                        </span>
                      </span>
                      <FaAngleRight size={12} color="grey" />
                      <span
                        className="_6o3wap1 _6o3wapl _6o3wapt _6o3wap6 _6o3wap9 _6o3wapy _6o3wap11 ml-1"
                        style={{ "--_6o3wap0": "var(--_1wf7mbl3r)" }}
                      >
                        <span
                          title="Me"
                          className="_1sco1wt2 font-semibold "
                          style={{ "--_1sco1wt0": 1 }}
                        >
                          Document
                        </span>
                      </span>
                      <FaAngleRight size={12} color="grey" />
                      <span
                        className="_6o3wap1 _6o3wapl _6o3wapt _6o3wap6 _6o3wap9 _6o3wapy _6o3wap11 ml-1"
                        style={{ "--_6o3wap0": "var(--_1wf7mbl3r)" }}
                      >
                        <span
                          title="Me"
                          className="_1sco1wt2 font-semibold "
                          style={{ "--_1sco1wt0": 1 }}
                        >
                          Family and medical leaves
                        </span>
                      </span>
                    </div>
                  </div>
                  <div
                    class="purg7v1 purg7vc7 purg7vcy purg7vd8 _15se5fi0"
                    style={{ "--purg7v0": "transparent" }}
                  >
                    <div
                      class="purg7v1 purg7vc9 _15se5fi0"
                      style={{ "--purg7v0": "transparent" }}
                    >
                      <button
                        class="_1nz7aia3 _1nz7aia4"
                        type="button"
                        style={{
                          "--_1nz7aia2": "var(--_1wf7mbl4v)",
                          "--_1nz7aia1": "var(--_1wf7mbl4v)",
                          "--_1nz7aia0": "none",
                          padding: 10,
                        }}
                      >
                        <svg
                          aria-hidden="true"
                          class="_1qphaha1 _1qphaha4 _1qphaha6 _1qphaha7"
                          style={{ "--_1qphaha0": "var(--seicjt3i)" }}
                        >
                          <HiOutlineUpload size={22} />
                        </svg>
                        <span
                          class="_6o3wap1 _6o3wapl _6o3wapu _6o3wap7 _6o3wap9"
                          style={{ "--_6o3wap0": "var(--seicjt3d)" }}
                        >
                          Upload files
                        </span>
                      </button>
                    </div>
                    <div
                      class="purg7v1 purg7vc9 _15se5fi0"
                      style={{ "--purg7v0": "transparent" }}
                    >
                      <button
                        class="_1nz7aia3 _1nz7aia5"
                        type="button"
                        style={{
                          "--_1nz7aia2": "var(--_1wf7mbl4v)",
                          "--_1nz7aia1": "var(--_1wf7mbl4v)",
                          "--_1nz7aia0": "none",
                        }}
                      >
                        <svg
                          aria-hidden="true"
                          class="_1qphaha1 _1qphaha4 _1qphaha6 _1qphaha7"
                          style={{ "--_1qphaha0": "var(--seicjt3o)" }}
                        >
                          <IoSettingsOutline size={23} color="#ccc" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="purg7v1 purg7v3x purg7vc9 purg7vcf purg7v64 _15se5fi0 _4onk9z1 p-10"
              data-scroll-container="true"
              style={{ "--purg7v0": "transparent" }}
            >
              <div
                class="purg7v1 purg7v8r purg7v9x purg7vx purg7vc9 purg7v64 _15se5fi0 bfo8zk3 bfo8zk0"
                style={{ "--purg7v0": "transparent" }}
              >
                <div
                  class="purg7v1 purg7vc9 purg7vdc purg7v64 _15se5fi0"
                  style={{ "--purg7v0": "transparent" }}
                >
                  <div
                    class="purg7v1 purg7vc9 purg7vv2 purg7v64 _15se5fi0"
                    style={{ "--purg7v0": "transparent" }}
                  >
                    <div
                      class="purg7v1 purg7v9r purg7vc9 purg7vd8 _15se5fi0"
                      style={{ "--purg7v0": "transparent" }}
                    >
                      <div
                        class="purg7v1 purg7vc7 purg7vcc purg7vd0 purg7vdb _15se5fi0"
                        style={{ "--purg7v0": "transparent" }}
                      >
                        <div
                          class="purg7v1 purg7v2o purg7vc9 purg7vd8 _15se5fi0"
                          style={{ "--purg7v0": "transparent" }}
                        >
                          <div
                            class="purg7v1 purg7vc9 _15se5fi0"
                            style={{ "--purg7v0": "transparent" }}
                          >
                            <svg
                              aria-hidden="true"
                              class="_1qphaha1 _1qphaha5 _1qphaha6 _1qphaha7"
                              style={{ "--_1qphaha0": "var(--seicjt35)" }}
                            >
                              <LuFolder size={25} color={"#1F74EC"} />
                            </svg>
                          </div>
                          <div
                            class="purg7v1 purg7vc7 purg7vci purg7vd8 _15se5fi0"
                            style={{ "--purg7v0": "transparent" }}
                          >
                            <span
                              class="_6o3wap1 _6o3wapo _6o3wapt _6o3wap7 _6o3wap9"
                              style={{ "--_6o3wap0": "var(--seicjt2t)" }}
                            >
                              Shantay's Family and medical leaves
                            </span>
                          </div>
                          <span
                            class="_6o3wap1 _6o3wapm _6o3wapv _6o3wap7 _6o3wap9 _6o3wap11"
                            style={{ "--_6o3wap0": "var(--seicjt2u)" }}
                          >
                            <span
                              title="Silpi, your contract and other related documents are stored here."
                              class="_1sco1wt1"
                              style={{ "--_1sco1wt0": 5 }}
                            >
                              All Shantay's FMLA documents are stored here.
                            </span>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div
                      class="purg7v1 purg7vc9 _15se5fi0"
                      style={{ "--purg7v0": "transparent" }}
                    >
                      <div
                        class="purg7v1 purg7v83 purg7vc9 _15se5fi0"
                        style={{ "--purg7v0": "transparent" }}
                      >
                        <div
                          class="purg7v1 purg7vc9 _15se5fi0"
                          style={{ "--purg7v0": "transparent" }}
                        >
                          <div class="@container grow">
                            <div class="grid grid-cols-1 @lg:grid-cols-2 @4xl:grid-cols-3 @7xl:grid-cols-4 @9xl:grid-cols-6 @10xl:grid-cols-8 @12xl:grid-cols-12 gap-4"></div>
                          </div>
                        </div>
                        <div
                          class="purg7v1 purg7v8y purg7vc9 _15se5fi0"
                          style={{ "--purg7v0": "transparent" }}
                        >
                          <div
                            role="presentation"
                            tabindex="0"
                            style={{ outline: "none" }}
                          >
                            <div
                              class="purg7v1 purg7v7a purg7v84 purg7vx purg7vuf purg7vc9 purg7vcz purg7vd9 _15se5fi2 _15se5fi1w _15se5fio _1y2tv655 _1ko7w9c0 false"
                              role="button"
                              style={{ "--purg7v0": "transparent" }}
                            >
                              <input
                                accept="application/pdf,application/doc,application/docx,application/ms-doc,application/vnd.openxmlformats-officedocument.wordprocessingml.document,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,application/vnd.ms-excel,application/msword,application/vnd.ms-excel.sheet.macroenabled.12,application/vnd.openxmlformats-officedocument.presentationml.presentation,application/vnd.oasis.opendocument.spreadsheet,application/xml,application/vnd.oasis.opendocument.text,application/vnd.oasis.opendocument.graphics,application/vnd.openxmlformats-officedocument.wordprocessingml.template,application/vnd.ms-powerpoint,application/vnd.openxmlformats-officedocument.presentationml.template,application/vnd.openxmlformats-officedocument.spreadsheetml.template,application/json,application/x-yaml,application/vnd.openxmlformats-officedocument.presentationml.slideshow,application/vnd.oasis.opendocument.presentation,application/rtf,application/msaccess,application/vnd.ms-word.document.macroenabled.12,application/vnd.ms-excel.sheet.binary.macroenabled.12,application/vnd.ms-powerpoint.presentation.macroenabled.12,application/vnd.ms-publisher,application/vnd.ms-works,application/vnd.ms-xpsdocument,application/x-tika-msoffice,application/oxps,application/x-iwork-keynote-sffkey,application/vnd.apple.pages,application/vnd.apple.keynote,application/vnd.apple.numbers,application/x-adobe-indesign,application/msonenote,application/zip,application/x-zip-compressed,application/gzip,text/plain,text/html,text/xml,text/markdown,text/x-web-markdown,text/vcard,text/x-vcard,text/csv,text/comma-separated-values,text/x-matlab,image/jpeg,image/png,image/apng,image/avif,image/gif,image/bmp,image/tiff,image/webp,image/svg+xml,image/heic,image/emf,image/vnd.adobe.photoshop,image/vnd.microsoft.icon,image/vnd.dwg,image/jpx,image/aces,video/x-msvideo,video/mp4,video/mpeg,video/webm,video/3gpp,video/quicktime,video/x-ms-wmv,audio/mpeg,audio/amr,audio/ogg,audio/aac,audio/wave,audio/wav,audio/x-wav,audio/x-pn-wav,audio/vnd.wave"
                                multiple=""
                                type="file"
                                tabindex="-1"
                                style={{ display: "none" }}
                              />
                              <div
                                class="purg7v1 purg7vc9 purg7vcf purg7vcz purg7v64 _15se5fi0"
                                style={{ "--purg7v0": "transparent" }}
                              >
                                <svg
                                  aria-hidden="true"
                                  class="_1qphaha1 _1qphaha5 _1qphaha6 _1qphaha7"
                                  style={{ "--_1qphaha0": "var(--_1wf7mbl3p)" }}
                                >
                                  <TbFolderPlus size={30} />
                                </svg>
                              </div>
                              <span
                                class="_6o3wap1 _6o3wapm _6o3wapv _6o3wap7 _6o3wap9"
                                style={{ "--_6o3wap0": "var(--_1wf7mbl3r)" }}
                              >
                                Drag and drop or click here.
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default FamilyAndMedical;
