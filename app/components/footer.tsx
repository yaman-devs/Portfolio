"use client";
import { BsFillSendFill } from "react-icons/bs";
import Break from "./break";
import { useAnimate, useInView, stagger } from "framer-motion";
import { useEffect } from "react";

export default function Footer() {
  const [ref, animate] = useAnimate();
  const isInview = useInView(ref, { once: true });

  useEffect(() => {
    isInview &&
      animate(
        "div",
        { opacity: [0, 1], y: [100, 0] },
        { duration: 1.5, delay: stagger(0.1), ease: "easeInOut" }
      );
  }, [ref.current]);

  return (
    <footer className="relative overflow-hidden flex flex-col gap-2 md:gap-4 items-center">
      <Break section="Contacts" />
      <div ref={ref} className="max-w-4xl w-full mx-auto px-4 sm:px-6 lg:px-8 ">
        <div className="flex flex-col gap-2 items-center">
          <p className="text-center md:text-4xl text-2xl font-bold">
            Drop me a line!
          </p>
          <p className="text-center md:text-xl text-lg">
            I&apos;m always open to new opportunities!
          </p>
          <p className="text-center md:text-xl text-lg"></p>

          <button className="flex text-center bg-secondary rounded-xl p-4  md:text-xl text-lg mb-16">
            <a
              className="flex items-center gap-2"
              href="https://instagram.com/yamansdev"
              target="_blank"
              rel="noopener noreferrer"
            >
              Reach out to me! <BsFillSendFill />
            </a>
          </button>
        </div>
        <div className="flex  justify-between mb-2 items-baseline">
          <p className="text-sm md:text-base mb-0 ">
            © {new Date().getFullYear()} Yaman. All rights reserved.
          </p>

          <ul className="flex justify-between space-x-4">
            <li className="border-[1px] border-slate-400  bg-secondary p-2 rounded-xl w-8 h-8 md:w-10 md:h-10">
              <a
                href="https://x.com/yamansdev"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg viewBox="0 0 128 128">
                  <path
                    d="M75.916 54.2 122.542 0h-11.05L71.008 47.06 38.672 0H1.376l48.898 71.164L1.376 128h11.05L55.18 78.303 89.328 128h37.296L75.913 54.2ZM60.782 71.79l-4.955-7.086-39.42-56.386h16.972L65.19 53.824l4.954 7.086 41.353 59.15h-16.97L60.782 71.793Z"
                    fill="#fff"
                    style={{ strokeWidth: ".104373" }}
                  ></path>
                </svg>
              </a>
            </li>
            <li className="border-[1px] border-slate-400 px-2 bg-secondary p-2 rounded-xl w-8 h-8 md:w-10 md:h-10">
              <a
                href="https://github.com/yaman-dev"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg viewBox="0 0 128 128">
                  <g fill="#fff">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M64 5.103c-33.347 0-60.388 27.035-60.388 60.388 0 26.682 17.303 49.317 41.297 57.303 3.017.56 4.125-1.31 4.125-2.905 0-1.44-.056-6.197-.082-11.243-16.8 3.653-20.345-7.125-20.345-7.125-2.747-6.98-6.705-8.836-6.705-8.836-5.48-3.748.413-3.67.413-3.67 6.063.425 9.257 6.223 9.257 6.223 5.386 9.23 14.127 6.562 17.573 5.02.542-3.903 2.107-6.568 3.834-8.076-13.413-1.525-27.514-6.704-27.514-29.843 0-6.593 2.36-11.98 6.223-16.21-.628-1.52-2.695-7.662.584-15.98 0 0 5.07-1.623 16.61 6.19C53.7 35 58.867 34.327 64 34.304c5.13.023 10.3.694 15.127 2.033 11.526-7.813 16.59-6.19 16.59-6.19 3.287 8.317 1.22 14.46.593 15.98 3.872 4.23 6.215 9.617 6.215 16.21 0 23.194-14.127 28.3-27.574 29.796 2.167 1.874 4.097 5.55 4.097 11.183 0 8.08-.07 14.583-.07 16.572 0 1.607 1.088 3.49 4.148 2.897 23.98-7.994 41.263-30.622 41.263-57.294C124.388 32.14 97.35 5.104 64 5.104z"
                    ></path>
                    <path d="M26.484 91.806c-.133.3-.605.39-1.035.185-.44-.196-.685-.605-.543-.906.13-.31.603-.395 1.04-.188.44.197.69.61.537.91zm2.446 2.729c-.287.267-.85.143-1.232-.28-.396-.42-.47-.983-.177-1.254.298-.266.844-.14 1.24.28.394.426.472.984.17 1.255zM31.312 98.012c-.37.258-.976.017-1.35-.52-.37-.538-.37-1.183.01-1.44.373-.258.97-.025 1.35.507.368.545.368 1.19-.01 1.452zm3.261 3.361c-.33.365-1.036.267-1.552-.23-.527-.487-.674-1.18-.343-1.544.336-.366 1.045-.264 1.564.23.527.486.686 1.18.333 1.543zm4.5 1.951c-.147.473-.825.688-1.51.486-.683-.207-1.13-.76-.99-1.238.14-.477.823-.7 1.512-.485.683.206 1.13.756.988 1.237zm4.943.361c.017.498-.563.91-1.28.92-.723.017-1.308-.387-1.315-.877 0-.503.568-.91 1.29-.924.717-.013 1.306.387 1.306.88zm4.598-.782c.086.485-.413.984-1.126 1.117-.7.13-1.35-.172-1.44-.653-.086-.498.422-.997 1.122-1.126.714-.123 1.354.17 1.444.663zm0 0"></path>
                  </g>
                </svg>
              </a>
            </li>
            <li className="border-[1px] border-slate-400 px-2 bg-secondary p-2 rounded-xl w-8 h-8 md:w-10 md:h-10">
              <a
                href="https://www.linkedin.com/in/yaman/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg viewBox="0 0 128 128">
                  <path
                    fill="#fff"
                    d="M116 3H12a8.91 8.91 0 00-9 8.8v104.42a8.91 8.91 0 009 8.78h104a8.93 8.93 0 009-8.81V11.77A8.93 8.93 0 00116 3z"
                  ></path>
                  <path
                    fill="#12263b"
                    d="M21.06 48.73h18.11V107H21.06zm9.06-29a10.5 10.5 0 11-10.5 10.49 10.5 10.5 0 0110.5-10.49M50.53 48.73h17.36v8h.24c2.42-4.58 8.32-9.41 17.13-9.41C103.6 47.28 107 59.35 107 75v32H88.89V78.65c0-6.75-.12-15.44-9.41-15.44s-10.87 7.36-10.87 15V107H50.53z"
                  ></path>
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
