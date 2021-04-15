import Link from "next/link";
import React, { useEffect, useRef } from "react";
import { scroller } from "react-scroll";
import { useRouter } from "next/router";

const Navbar = () => {
  const router = useRouter();
  const refAbout = useRef(null);
  const refGallery = useRef(null);

  useEffect(() => {
    refAbout.current.onclick = (e) => {
      e.preventDefault();
      router.push("/").then(() => {
        scroller.scrollTo("featured", {
          duration: 800,
          delay: 0,
          smooth: "easeInOutQuart",
        });
      });
    };

    refGallery.current.onclick = (e) => {
      e.preventDefault();
      router.push("/").then(() => {
        scroller.scrollTo("blog", {
          duration: 800,
          delay: 0,
          smooth: "easeInOutQuart",
        });
      });
    };
  });

  return (
    <div className="nav-container">
      <header>
        <Link href="/">
          <a className="logo">Alexandra Newman</a>
        </Link>

        <nav>
          <ul>
            <li>
              <a ref={refAbout}>About</a>
            </li>

            <li>
              <a ref={refGallery}>Gallery</a>
            </li>

            <li>
              <Link href="/contact">
                <a>Contact</a>
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      <div className="social-header">
        <ul>
          <li>
            <a target="_blank" href="https://www.instagram.com/">
              <img src="images/instagram_icon.svg" alt="instagram" />
            </a>
          </li>
          <li>
            <a target="_blank" href="https://www.linkedin.com/">
              <img src="images/linked_icon.svg" alt="linkedin" />
            </a>
          </li>
          <li>
            <a target="_blank" href="https://twitter.com/">
              <img src="images/twitter_icon.svg" alt="twitter" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
