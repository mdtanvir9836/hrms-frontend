import React from "react";
import { FaAngleUp, FaAngleDown } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

function Tab({ isOpen, handleToggle, level, title, icon, submenu, link }) {
  // Debugging logs to verify props
  // console.log(link);
   const navigate = useNavigate();
  return (
    <div data-state={isOpen ? "open" : "closed"} className="_1m988qb0">
      <div
        className="purg7v1 purg7v6a purg7vc7 purg7vcf _15se5fi0 _1m988qb1"
        style={{ background: "transparent" }}
      >
        <a className="_1m988qb5" data-intercom-target="inbox Tab"  onClick={() => {
                      if (link) {
                        navigate(link); // Navigate only if a link is provided
                      }
                    }}>
          <div
            className="purg7v1 purg7vx purg7vc7 purg7vcf purg7vcz purg7vum _15se5fi0"
            style={{ background: "transparent" }}
          >
            <div
              className="purg7v1 purg7vc7 purg7vum purg7v64 _15se5fi0"
              style={{ background: "transparent" }}
            >
              <div
                className="purg7v1 purg7vc9 purg7v63 _15se5fi0"
                style={{ background: "transparent" }}
              >
                <div
                  className="purg7v1 purg7vc9 purg7vv2 _15se5fi0"
                  style={{ background: "transparent" }}
                >
                  <svg
                    aria-hidden="true"
                    className="_1qphaha1 _1qphaha4 _1qphaha6 _1qphaha7"
                    style={{
                      "--_1qphaha0": "var(--seicjt58)",
                    }}
                  >
                    {icon}
                  </svg>
                </div>
              </div>
              <div
                className="purg7v1 purg7vam purg7vc7 purg7vcf purg7vum purg7v64 _15se5fi0"
                style={{ background: "transparent" }}
              >
                <span
                  className="_6o3wap1 _6o3wapl _6o3wapu _6o3wap7 _6o3wap9"
                  style={{ "--_6o3wap0": "var(--seicjt51)" }}
                >
                  <div
                    title={title}
                    style={{
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      whiteSpace: "nowrap",
                    }}
                   
                  >
                    {level}
                  </div>
                </span>
              </div>
            </div>
          </div>
        </a>
        <button
          type="button"
          aria-controls="radix-:r7:"
          aria-expanded={isOpen}
          data-state={isOpen ? "open" : "closed"}
          className="_1m988qb6"
          onClick={() => handleToggle(title)}
        >
          
 
          {submenu.length > 0 && (
            <span className="_1m988qb8 _1qphaha1 _1qphaha2 _1qphaha6 _1qphaha7">
             
                {isOpen ? <FaAngleUp size={10} /> : <FaAngleDown size={10} />}
           
            </span>
          )}
        </button>
      </div>

      <div
        data-state={isOpen ? "open" : "closed"}
        id="radix-:r7:"
        className="_1m988qb9"
        style={{
          transitionDuration: "0.3s",
          animationName: "none",
          "--radix-collapsible-content-width": isOpen
            ? "248px"
            : "231.1999969482422px",
          "--radix-collapsible-content-height": isOpen ? "68px" : "0px",
          overflow: isOpen ? "visible" : "hidden",
        }}
      >
        {isOpen && (
          <div style={{ height: "auto", marginLeft:10,padding:5 }}>
            <div
              class="purg7v1 purg7vx purg7vc9 _15se5fi0"
              style={{ "--purg7v0": "transparent", borderLeft:"2px solid #ccc" }}
            >
              {submenu.map((menu) => (
                <a class="_18x9o3k0" href="/inbox/requests">
                  <div
                    class="purg7v1 purg7v80 purg7van purg7vx purg7vc7 purg7vcf purg7vcz _15se5fi0"
                    style={{ "--purg7v0": "transparent" }}
                  >
                    <div
                      class="purg7v1 purg7vbg purg7vam purg7vc7 purg7vcf purg7vd0 purg7vum purg7v64 _15se5fi0"
                      style={{ "--purg7v0": "transparent" }}
                    >
                      <span
                        class="_6o3wap1 _6o3wapl _6o3wapv _6o3wap7 _6o3wap9"
                        style={{
                          "--_6o3wap0": "var(--_1wf7mbl3r)",
                        }}
                      >
                        <div
                          title={menu}
                          style={{
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            whiteSpace: "nowrap",
                            color: "var(--seicjt53)",
                          }}
                        >
                          {menu}
                        </div>
                      </span>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Tab;
