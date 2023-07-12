import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Footer = () => {
    const date = new Date().getFullYear();
  return (
    <>
      <footer className="py-8">
        <div className="container mx-auto max-w-7xl px-4 ">
          <div className="top-footer py-12">
            <div className="mb-4 lg:mb-0  ">
              <div className="flex items-center justify-center text-center px-2 px-lg-4">
                <div>
                  <Link
                    href="/"
                    className="navbar-brand mb-5 flex items-center justify-center text-center"
                  >
                    <Image
                      src="/Logo.png"
                      width={50}
                      height={50}
                      alt="logo"
                      loading={'lazy'}
                    />
                  </Link>

                  <div className="flex items-center justify-center gap-2 mt-4 flex-wrap">
                    <Link
                      href="/"
                      className="footer-link rounded-circle p-3 flex items-center justify-center relative"
                    >
                      Developers
                      <span></span>
                    </Link>

                    <Link
                      href="/"
                      className="footer-link rounded-circle p-3 flex items-center justify-center relative"
                    >
                      Ecosystem
                      <span></span>
                    </Link>
                    <Link
                      href=""
                      className="footer-link rounded-circle p-3 flex items-center justify-center relative"
                    >
                      Community
                      <span></span>
                    </Link>
                    <Link
                      href=""
                      className="footer-link rounded-circle p-3 flex items-center justify-center relative"
                    >
                      About
                      <span></span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bottom-footer py-6 border-t border-[#4C4F51]">
            <div className="flex items-center justify-between flex-wrap flex-col-reverse md:flex-row gap-2">
              <div>
                <p>&copy; {date} DigiOracle. All rights reserved</p>
              </div>
              <div>
                <div className="inline-flex items-center justify-start lg:justify-center gap-2">
                  <a target="_blank" href="" className="social-icon">
                    <i className="fab fa-github"></i>
                  </a>
                  <a href="" className="social-icon">
                    <i className="fab fa-youtube"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
