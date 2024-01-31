import { useState, useEffect, useRef } from "react";
import { BiShareAlt } from "react-icons/bi";
import {
  EmailShareButton,
  EmailIcon,
  TwitterShareButton,
  TwitterIcon,
  FacebookShareButton,
  FacebookIcon,
  WhatsappShareButton,
  WhatsappIcon,
} from "react-share";

export default function ShareDropdown({ title, url, hashtags }) {
  const [isOpen, setIsOpen] = useState(false);
  const [currentItem, setCurrentItem] = useState(null);
  const wrapperRef = useRef(null);

  //   const navigationItems = [
  //     {
  //       linkName: "Send an Email",
  //     },
  //     {
  //       linkName: "Share on Twitter",
  //     },
  //     {
  //       linkName: "Share on Facebook",
  //     },
  //     {
  //       linkName: "Share on WhatsApp",
  //     },
  //     {
  //       linkName: "Share on Youtube",
  //     },
  //   ];

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  });

  useEffect(() => {
    function handleClickOutside(event) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [wrapperRef]);

  const handleKeyDown = (e) => {
    if (isOpen) {
      //e.preventDefault();
      console.log(e.keyCode);

      switch (e.keyCode) {
        // KeyDown
        case 40:
          if (currentItem === navigationItems.length - 1) {
            setCurrentItem(0);
          } else {
            setCurrentItem(currentItem + 1);
          }
          break;
        // KeyUp
        case 38:
          if (currentItem === 0) {
            setCurrentItem(navigationItems.length - 1);
          } else {
            setCurrentItem(currentItem - 1);
          }
          break;
        // Escape
        case 27:
          setCurrentItem(1);
          setIsOpen(false);
          break;
        default:
          break;
      }
    }
  };

  return (
    <>
      {/* <!-- Component: Basic dropdown menu--> */}
      <div className="relative inline-flex " id="dropdown">
        {/*  <!--  Start Dropdown trigger --> */}
        <button
          className="inline-flex gap-2 items-center text-primary-500 hover:underline transition-colors duration-300"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen ? " true" : "false"}
          ref={wrapperRef}
        >
          <BiShareAlt />
          <span>Share on</span>
        </button>
        {/*  <!--  End Dropdown trigger --> */}
        {/*  <!-- Start Menu list --> */}
        <ul
          className={`${
            isOpen ? "flex" : "hidden"
          } absolute top-full z-10 mt-1 flex w-72 list-none flex-col rounded bg-white py-2 shadow-md shadow-slate-500/10 `}
        >
          <li>
            <button onClick={() => alert("hai")}>Test</button>
          </li>
          <li>
            <a href="http://google.com" target="_blank" rel="noreferrer">
              Google
            </a>
          </li>
          <li>
            <EmailShareButton
              subject={title}
              body={url}
              className="flex items-center gap-4"
            >
              <EmailIcon size={32} round={true} />
              Share on Emails
            </EmailShareButton>
          </li>
          <li>
            <TwitterShareButton
              title={title}
              url={url}
              hashtags={hashtags}
              className="flex items-center gap-4"
            >
              <TwitterIcon size={32} round={true} />
              Share on Twitter
            </TwitterShareButton>
          </li>
          <li>
            <FacebookShareButton
              title={title}
              url={url}
              hashtags={hashtags}
              className="flex items-center gap-4"
            >
              <FacebookIcon size={32} round={true} />
              Share on Facebook
            </FacebookShareButton>
          </li>
          <li>
            <WhatsappShareButton
              title={title}
              url={url}
              hashtags={hashtags}
              className="flex items-center gap-4"
            >
              <WhatsappIcon size={32} round={true} />
              Share on WhatsApp
            </WhatsappShareButton>
          </li>
        </ul>
        {/*  <!-- End Menu list --> */}
      </div>
      {/* <!-- End Basic dropdown menu--> */}
    </>
  );
}
