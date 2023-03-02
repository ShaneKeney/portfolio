import Isotope from "isotope-layout";
import Image from "next/image";
import Link from "next/link";
import { Fragment, useEffect, useRef, useState } from "react";
import { parallax } from "../utils";
const ItemIsotope = () => {
  useEffect(() => {
    parallax();
  }, []);

  // Isotope
  const isotope = useRef();
  const [filterKey, setFilterKey] = useState("box-item");
  useEffect(() => {
    setTimeout(() => {
      isotope.current = new Isotope(".portfolio-items", {
        itemSelector: ".box-item",
        //    layoutMode: "fitRows",
        percentPosition: true,
        masonry: {
          columnWidth: ".box-item",
        },
        animationOptions: {
          duration: 750,
          easing: "linear",
          queue: false,
        },
      });
    }, 1000);
    //     return () => isotope.current.destroy();
  }, []);
  useEffect(() => {
    if (isotope.current) {
      filterKey === "*"
        ? isotope.current.arrange({ filter: `*` })
        : isotope.current.arrange({ filter: `.${filterKey}` });
    }
  }, [filterKey]);
  const handleFilterKeyChange = (key) => () => {
    setFilterKey(key);
  };
  const activeBtn = (value) => (value === filterKey ? "glitch-effect" : "");

  useEffect(() => {
    const circle = document.querySelectorAll(".circle");
    circle.forEach((e) => {
      e.addEventListener("mouseenter", (m) => {
        if (!e.getElementsByClassName("ink")[0]) {
          const span = document.createElement("span");
          span.classList.add("ink");
          e.appendChild(span);
          span.classList.add("ink-animate");
          // span.style.height = `${e.clientHeight}px`;
          // span.style.width = `${e.clientWidth}px`;
          // span.style.top = `${m.pageY - e.offsetTop - e.clientHeight / 2}px`;
          // span.style.left = `${m.pageX - e.offsetLeft - e.clientWidth / 2}px`;
        }
      });
      e.addEventListener("mouseleave", (m) => {
        const span = document.querySelector(".ink");
        if (span) {
          span.classList.remove("ink-animate");
        }
      });
    });
  }, []);

  return (
    <Fragment>
      {/* portfolio filter */}
      <div className="filter-menu content-box">
        <div className="filters">
          <div className="btn-group">
            <label
              data-text="All"
              className={`c-pointer ${activeBtn("box-item")}`}
              onClick={handleFilterKeyChange("box-item")}
            >
              <input type="radio" name="fl_radio" defaultValue=".box-item" />
              All
            </label>
          </div>
          <div className="btn-group">
            <label
              className={`c-pointer ${activeBtn("f-mobile")}`}
              onClick={handleFilterKeyChange("f-mobile")}
              data-text="Mobile"
            >
              <input type="radio" name="fl_radio" defaultValue=".f-mobile" />
              Mobile
            </label>
          </div>
          <div className="btn-group">
            <label
              className={`c-pointer ${activeBtn("f-web")}`}
              onClick={handleFilterKeyChange("f-web")}
              data-text="Web"
            >
              <input type="radio" name="fl_radio" defaultValue=".f-web" />
              Web
            </label>
          </div>
          <div className="btn-group">
            <label
              className={`c-pointer ${activeBtn("f-api")}`}
              onClick={handleFilterKeyChange("f-api")}
              data-text="API"
            >
              <input type="radio" name="fl_radio" defaultValue=".f-api" />
              API
            </label>
          </div>
        </div>
      </div>
      {/* portfolio items */}
      <div className="box-items portfolio-items">
        <div className="box-item f-mobile">
          <div className="image">
            <a href="#popup-1" className="has-popup-media hover-animated">
              <img
                src="images/promotional/spikeball-app-banner.png"
                className="wp-post-image"
                alt="spikeball-app-deck"
              />
              <span className="info circle">
                <span className="centrize full-width">
                  <span className="vertical-center">
                    <span className="icon fas fa-plus" />
                    <span className="desc">
                      <span className="category">App</span>
                      <span className="name">Spikeball Mobile App</span>
                    </span>
                  </span>
                </span>
              </span>
            </a>
          </div>
          <div id="popup-1" className="popup-box mfp-fade mfp-hide">
            <div className="content">
              <div
                className="image"
                style={{
                  backgroundImage:
                    "url(images/promotional/spikeball-app-banner.png)",
                }}
              />
              <div className="desc single-post-text">
                <div className="category">Content</div>
                <h4>Hand holding pyramid painting</h4>
                <p>Test</p>
                <div
                  className="image"
                  style={{
                    backgroundImage:
                      "url(images/promotional/spikeball-app-banner.png)",
                  }}
                  width={100}
                  height={100}
                />
                <p>
                  Now there is more fashion. There is no so-called trends. Now
                  chase after anything not necessary — nor for fashionable color
                  nor the shape, nor for style. Think about the content that you
                  want to invest in a created object, and only then will form.
                  The thing is your spirit. A spirit unlike forms hard copy.
                </p>
                <ul>
                  <li>
                    Now there is more fashion. There is no so-called trends.
                  </li>
                  <li>
                    Now chase after anything not necessary — nor for fashionable
                    color nor the shape, nor for style.
                  </li>
                  <li>
                    Think about the content that you want to invest in a created
                    object, and only then will form.
                  </li>
                  <li>
                    The thing is your spirit. A spirit unlike forms hard copy.
                  </li>
                </ul>
                <p>
                  Now there is more fashion. There is no so-called trends. Now
                  chase after anything not necessary — nor for fashionable color
                  nor the shape, nor for style. Think about the content that you
                  want to invest in a created object, and only then will form.
                  The thing is your spirit. A spirit unlike forms hard copy.
                </p>
                <Link href="/works_single_1">
                  <a className="btn hover-animated">
                    <span className="circle" />
                    <span className="lnk">View Project</span>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default ItemIsotope;
