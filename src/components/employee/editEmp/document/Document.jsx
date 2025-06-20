import React, { useEffect, useState } from "react";
import { CiFolderOn } from "react-icons/ci";
import { FaArrowRight } from "react-icons/fa6";
import { IoDocumentAttachOutline } from "react-icons/io5";
import { LuFolderKanban } from "react-icons/lu";
import { useDispatch, useSelector } from "react-redux";
import { Link, Outlet, useParams } from "react-router-dom";
import { fetchCategories } from "../../../../redux/slice/documentCategorySlice";

function Document() {
  const userId = useParams().id;
  console.log("DocumentUserId", userId);
  const [files, setFiles] = useState([]);
  const [isDragging, setIsDragging] = useState(false);
  const dispatch = useDispatch();

  const handleFileChange = (e) => {
    const selectedFiles = Array.from(e.target.files);
    setFiles((prevFiles) => [...prevFiles, ...selectedFiles]);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    const droppedFiles = Array.from(e.dataTransfer.files);
    setFiles((prevFiles) => [...prevFiles, ...droppedFiles]);
  };

  const { categories } = useSelector((state) => state.documentCategory);
  console.log("categories", categories);

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  return (
    <div
      class="purg7v1 purg7vx purg7vc9 purg7vuy _15se5fi0 p-10"
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
              class="purg7v1 purg7v6f purg7vc9 _15se5fi0"
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
                        <LuFolderKanban size={28} color={"#1F74EC"} />
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
                        Personal folders
                      </span>
                    </div>
                    <span
                      class="_6o3wap1 _6o3wapm _6o3wapv _6o3wap7 _6o3wap9 _6o3wap11"
                      style={{ "--_6o3wap0": "var(--seicjt2u)" }}
                    >
                      <span
                        title="Organize sareh's documents in folders."
                        class="_1sco1wt1"
                        style={{ "--_1sco1wt0": 5 }}
                      >
                        Organize sareh's documents in folders.
                      </span>
                    </span>
                  </div>
                </div>
              </div>
              <div
                class="purg7v1 purg7v8w purg7vc9 _15se5fi0"
                style={{ "--purg7v0": "transparent" }}
              >
                <div
                  class="purg7v1 purg7vc9 _15se5fi0"
                  style={{ "--purg7v0": "transparent" }}
                >
                  <div class="@container grow py-2">
                    <div class="grid grid-cols-2 lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 gap-4">
                      {categories.length > 0 &&
                        categories.map((category) => {
                          if (category._id !== "678bb47b1715662eb100ef28") {
                            return (
                              <div role="presentation" tabindex="0">
                                <div
                                  class="purg7v1 purg7vc9 _15se5fi1 _15se5fi1v _15se5fio _1y2tv655"
                                  style={{
                                    "--purg7v0": "transparent",
                                    cursor: "pointer",
                                    position: "relative",
                                  }}
                                >
                                  <input
                                    multiple=""
                                    type="file"
                                    tabindex="-1"
                                    style={{ display: "none" }}
                                  />
                                  <Link
                                    to={
                                      userId
                                        ? `/teamgrid/employees/edit_employee/${userId}/employee/document/${category._id}`
                                        : `/teamgrid/document/${category._id}`
                                    }
                                  >
                                    <div class="ymp25l0 isClickable slim">
                                      <div class="ymp25l2">
                                        <div class="ymp25l1">
                                          <div
                                            class="purg7v1 purg7v4d purg7vc7 purg7vd0 purg7vda purg7v64 _15se5fi0"
                                            style={{
                                              "--purg7v0": "transparent",
                                              marginLeft: "-4px",
                                            }}
                                          >
                                            <div
                                              class="purg7v1 purg7vc7 purg7vcf purg7vd9 _15se5fi0"
                                              style={{
                                                "--purg7v0": "transparent",
                                                overflowWrap: "break-word",
                                                width: "100%",
                                              }}
                                            >
                                              <div
                                                class="purg7v1 purg7vc9 _15se5fi0"
                                                style={{
                                                  "--purg7v0": "transparent",
                                                }}
                                              >
                                                <svg
                                                  aria-hidden="true"
                                                  class="_1qphaha1 _1qphaha5 _1qphaha6 _1qphaha7"
                                                  style={{
                                                    "--_1qphaha0":
                                                      "var(--_1wf7mbl3p)",
                                                  }}
                                                >
                                                  <CiFolderOn size={30} />
                                                </svg>
                                              </div>
                                              <div
                                                class="purg7v1 purg7vx purg7vc9 _15se5fi0"
                                                style={{
                                                  "--purg7v0": "transparent",
                                                }}
                                              >
                                                <span
                                                  class="_6o3wap1 _6o3wapm _6o3wapu _6o3wap7 _6o3wap9 _6o3wapy _6o3wap11"
                                                  style={{
                                                    "--_6o3wap0":
                                                      "var(--_1wf7mbl3s)",
                                                  }}
                                                >
                                                  <span
                                                    title="Agreement"
                                                    class="_1sco1wt2 pl-3"
                                                    style={{ "--_1sco1wt0": 1 }}
                                                  >
                                                    {category.name}
                                                  </span>
                                                </span>
                                                <div
                                                  class="purg7v1 purg7vc9 _15se5fi0"
                                                  style={{
                                                    "--purg7v0": "transparent",
                                                  }}
                                                >
                                                  <span
                                                    class="_6o3wap1 _6o3wapl _6o3wapu _6o3wap7 _6o3wap9"
                                                    style={{
                                                      "--_6o3wap0":
                                                        "var(--_1wf7mbl3r)",
                                                    }}
                                                  ></span>
                                                </div>
                                              </div>
                                            </div>
                                            <div
                                              class="purg7v1 purg7v9 purg7vc9 _15se5fi0"
                                              style={{
                                                "--purg7v0": "transparent",
                                              }}
                                            >
                                              <svg
                                                aria-hidden="true"
                                                class="_1qphaha1 _1qphaha4 _1qphaha6 _1qphaha7"
                                                style={{
                                                  "--_1qphaha0":
                                                    "var(--_1wf7mbl3p)",
                                                }}
                                              >
                                                <FaArrowRight size={22} />
                                              </svg>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </Link>
                                </div>
                              </div>
                            );
                          }
                        })}
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="purg7v1 purg7vc9 purg7vd8 _15se5fi0"
                style={{ "--purg7v0": "transparent" }}
              >
                <div
                  class="purg7v1 purg7v8y purg7vc9 _15se5fi0"
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
                          class="purg7v1 purg7vc7 purg7vci purg7vd8 _15se5fi0"
                          style={{ "--purg7v0": "transparent" }}
                        >
                          <span
                            class="_6o3wap1 _6o3wapn _6o3wapt _6o3wap7 _6o3wap9"
                            style={{ "--_6o3wap0": "var(--seicjt2t)" }}
                          >
                            Files with no folder
                          </span>
                        </div>
                        <span
                          class="_6o3wap1 _6o3wapm _6o3wapv _6o3wap7 _6o3wap9 _6o3wap11"
                          style={{ "--_6o3wap0": "var(--seicjt2u)" }}
                        >
                          <span
                            title="These are the files without an associated folder. You can select what the person can access."
                            class="_1sco1wt1"
                            style={{ "--_1sco1wt0": 5 }}
                          >
                            These are the files without an associated folder.
                            You can select what the person can access.
                          </span>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  role="presentation"
                  tabIndex="0"
                  style={{ outline: "none" }}
                  onDragOver={handleDragOver}
                  onDragLeave={handleDragLeave}
                  onDrop={handleDrop}
                >
                  <div
                    className={`purg7v1 purg7v7a purg7v84 purg7vx purg7vuf purg7vc9 purg7vcz purg7vd9 _15se5fi2 _15se5fi1w _15se5fio _1y2tv655 _1ko7w9c0 ${
                      isDragging ? "dragging" : ""
                    }`}
                    role="button"
                    style={{ "--purg7v0": "transparent" }}
                    onClick={() => document.getElementById("fileInput").click()}
                  >
                    <input
                      id="fileInput"
                      accept="application/pdf,application/doc,application/docx,application/ms-doc,application/vnd.openxmlformats-officedocument.wordprocessingml.document,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,application/vnd.ms-excel,application/msword,application/vnd.ms-excel.sheet.macroenabled.12,application/vnd.openxmlformats-officedocument.presentationml.presentation,application/vnd.oasis.opendocument.spreadsheet,application/xml,application/vnd.oasis.opendocument.text,application/vnd.oasis.opendocument.graphics,application/vnd.openxmlformats-officedocument.wordprocessingml.template,application/vnd.ms-powerpoint,application/vnd.openxmlformats-officedocument.presentationml.template,application/vnd.openxmlformats-officedocument.spreadsheetml.template,application/json,application/x-yaml,application/vnd.openxmlformats-officedocument.presentationml.slideshow,application/vnd.oasis.opendocument.presentation,application/rtf,application/msaccess,application/vnd.ms-word.document.macroenabled.12,application/vnd.ms-excel.sheet.binary.macroenabled.12,application/vnd.ms-powerpoint.presentation.macroenabled.12,application/vnd.ms-publisher,application/vnd.ms-works,application/vnd.ms-xpsdocument,application/x-tika-msoffice,application/oxps,application/x-iwork-keynote-sffkey,application/vnd.apple.pages,application/vnd.apple.keynote,application/vnd.apple.numbers,application/x-adobe-indesign,application/msonenote,application/zip,application/x-zip-compressed,application/gzip,text/plain,text/html,text/xml,text/markdown,text/x-web-markdown,text/vcard,text/x-vcard,text/csv,text/comma-separated-values,text/x-matlab,image/jpeg,image/png,image/apng,image/avif,image/gif,image/bmp,image/tiff,image/webp,image/svg+xml,image/heic,image/emf,image/vnd.adobe.photoshop,image/vnd.microsoft.icon,image/vnd.dwg,image/jpx,image/aces,video/x-msvideo,video/mp4,video/mpeg,video/webm,video/3gpp,video/quicktime,video/x-ms-wmv,audio/mpeg,audio/amr,audio/ogg,audio/aac,audio/wave,audio/wav,audio/x-wav,audio/x-pn-wav,audio/vnd.wave"
                      multiple
                      type="file"
                      tabIndex="-1"
                      style={{ display: "none" }}
                      onChange={handleFileChange}
                    />
                    <div
                      className="purg7v1 purg7vc9 purg7vcf purg7vcz purg7v64 _15se5fi0"
                      style={{ "--purg7v0": "transparent" }}
                    >
                      <IoDocumentAttachOutline size={30} color="#ccc" />
                    </div>
                    <span
                      className="_6o3wap1 _6o3wapm _6o3wapv _6o3wap7 _6o3wap9"
                      style={{ "--_6o3wap0": "var(--_1wf7mbl3r)" }}
                    >
                      Drag and drop or click here.
                    </span>
                  </div>
                  {/* <div style={{ marginTop: "20px" }}>
                    <h4>Selected Files:</h4>
                    {files.length > 0 ? (
                      <ul>
                        {files.map((file, index) => (
                          <li key={index}>{file.name}</li>
                        ))}
                      </ul>
                    ) : (
                      <p>No files selected yet.</p>
                    )}
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Document;
