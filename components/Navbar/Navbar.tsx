import { useState } from "react";
import Link from "next/link";
import cx from "classnames";
import {
  IoClose,
  IoLogoFacebook,
  IoLogoTwitter,
  IoLogoLinkedin,
} from "react-icons/io5";
import { fullpageApi } from "@fullpage/react-fullpage";
import NavItem from "./NavItem";
import NavLogo from "./NavLogo";

type Props = {
  theme: "white" | "black";
  fullPageApi?: fullpageApi | undefined;
};
const Navbar = ({ theme, fullPageApi }: Props) => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  return (
    <div
      className={cx("navigation", {
        "menu-is-open": menuIsOpen,
        "nav-white": theme === "white",
        "nav-black": theme === "black",
      })}
    >
      <nav className={cx("navbar navbar-desktop")}>
        <div className="w-100">
          <NavLogo theme={theme} fullPageApi={fullPageApi} />

          <div className="navbar-right">
            <NavItem
              name={"About"}
              fullPageApi={fullPageApi}
              link={"/#about"}
              anchorName={"about"}
            />
            <NavItem
              name={"Team"}
              fullPageApi={fullPageApi}
              link={"/#team"}
              anchorName={"team"}
            />
            <NavItem
              name={"Sponsors"}
              fullPageApi={fullPageApi}
              link={"/#sponsors"}
              anchorName={"sponsors"}
            />
            <NavItem
              name={"Gallery"}
              fullPageApi={fullPageApi}
              link={"/gallery"}
            />
            <NavItem
              name={"Open Source"}
              fullPageApi={fullPageApi}
              link={"/opensource"}
            />
            <NavItem
              name={"recruitment"}
              fullPageApi={fullPageApi}
              link={"/recruitment"}
            />
            <NavItem
              name={"Contact"}
              fullPageApi={fullPageApi}
              link={"/#contact"}
              anchorName={"contact"}
            />
          </div>

          <button
            className="toggler"
            onClick={() => setMenuIsOpen(!menuIsOpen)}
          >
            <span className="toggler-icon"></span>
            <span className="toggler-icon"></span>
            <span className="toggler-icon"></span>
          </button>
        </div>
      </nav>
      <nav className="navbar-bottom">
        <div className="social">
          <ul className="social-icons mr-auto mr-lg-0 d-none d-sm-block list-none">
            <li>
              <a href="#" className="ion-icon">
                <IoLogoFacebook />
              </a>
            </li>
            <li>
              <a href="#" className="ion-icon">
                <IoLogoTwitter />
              </a>
            </li>
            <li>
              <a href="#" className="ion-icon">
                <IoLogoLinkedin />
              </a>
            </li>
          </ul>
        </div>

        <div className={"copy d-none d-sm-block footer-text"}>
          © Técnico Solar Boat {new Date().getFullYear()}
        </div>
      </nav>
      <nav className="navbar navbar-mobile">
        <span className="close" onClick={() => setMenuIsOpen(false)}>
          <IoClose />
        </span>

        <ul className="navbar-nav navbar-nav-mobile">
          <li className="active">
            <a className="nav-link active" data-menuanchor="home" href="#home">
              Home
            </a>
          </li>
          <li>
            <a className="nav-link" data-menuanchor="about" href="#about">
              About
            </a>
          </li>
          <li>
            <a
              className="nav-link"
              data-menuanchor="experience"
              href="#experience"
            >
              Experience
            </a>
          </li>
          <li>
            <a className="nav-link" data-menuanchor="skills" href="#skills">
              Skills
            </a>
          </li>
          <li>
            <a className="nav-link" data-menuanchor="projects" href="#projects">
              Projects
            </a>
          </li>
          <li>
            <a className="nav-link" data-menuanchor="partners" href="#partners">
              Partners
            </a>
          </li>
          <li>
            <a
              className="nav-link"
              data-menuanchor="testimonials"
              href="#testimonials"
            >
              Testimonials
            </a>
          </li>
          <li>
            <a className="nav-link" data-menuanchor="news" href="#news">
              News
            </a>
          </li>
          <li>
            <a className="nav-link" data-menuanchor="contact" href="#contact">
              Contact
            </a>
          </li>
        </ul>
        <div
          className={cx("navbar-mobile-footer", {
            "text-white": theme === "black",
          })}
        >
          <p>© Denzel. 2020. All Rights Reserved.</p>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
