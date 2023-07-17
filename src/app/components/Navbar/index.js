'use client';

import { MenuContext } from '@/app/utils/context';
import { ArrowDown2 } from 'iconsax-react';
import Image from 'next/image';
import Link from 'next/link';
import React, { useContext, useState } from 'react';
import { Dropdown, Space } from 'antd';
// import { DownOutlined } from '@ant-design/icons';

// import navbarLogo from '/images/Logo.png'

const items = [
  {
    label: (
      <Link href="/">
        Why DigiOracle?
      </Link>
    ),
    key: '1',
  },
  {
    label: (
      <Link href="/about/company">
        Company
      </Link>
    ),
    key: '2',
  },
];

const Navbar = () => {
  const { toggle, showMenu } = useContext(MenuContext) || {};

  console.log(showMenu, 'showMenu');
  return (
    <>
      <header className={`shadow-header w-full bg-transparent z-50 `}>
        <div className="container mx-auto max-w-7xl py-5">
          <nav className="flex items-center justify-between px-3 lg:px-6 py-4 whitespace-nowrap text-sm">
            <div className=" lg:order-1 w-auto lg:w-1/4 lg:text-center">
              <Link
                href="/"
                className="text-xl text-gray-800 font-semibold font-heading flex items-center justify-center"
              >
                <Image
                  src={'/Logo.png'}
                  alt={'logo'}
                  width={60}
                  height={60}
                  priority
                />
              </Link>
            </div>

            <div className="lg:order-2 w-auto lg:w-1/4 lg:text-center"></div>
            <div className="block lg:hidden">
              <button
                className="navbar-burger flex items-center py-2 px-3 text-white rounded "
                onClick={toggle}
              >
                <svg
                  className="fill-current h-5 w-5"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Menu</title>
                  <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
                </svg>
              </button>
            </div>
            <div className="hidden lg:order-2 lg:block w-full lg:w-auto lg:text-center">
              <div className="navbar-menu flex items-center justify-end md:gap-8 lg:gap-9 font-outfit">
                <Link
                  href="/developers"
                  className="block lg:inline-block py-4 px-8 rounded-[32px] bg-[#1F1F1F] text-white text-base"
                >
                  Developers
                </Link>

                <Link
                  className="block lg:inline-block py-4 px-8 rounded-[32px] bg-[#1F1F1F] text-white text-base "
                  href="/ecosystem"
                >
                  Ecosystem
                </Link>
                <Link
                  className="block lg:inline-block py-4 px-8 rounded-[32px] bg-[#1F1F1F] text-white text-base "
                  href="/community"
                >
                  Community
                </Link>
                <Dropdown menu={{ items }} className='font-outfit'>
                  <button
                    onClick={(e) => e.preventDefault()}
                    className="block lg:inline-flex py-4 px-8 rounded-[32px] bg-[#1F1F1F] text-white text-base gap-1 font-outfit"
                  >
                    <Space>
                      About
                      <ArrowDown2 className="h-6 w-4" />
                    </Space>
                  </button>
                </Dropdown>

                {/* <Link
                  className="block lg:inline-flex py-4 px-8 rounded-[32px] bg-[#1F1F1F] text-white text-base gap-1"
                  href=""
                >
                  About{' '}
                  <span>
                    <ArrowDown2 className="h-6 w-4" />
                  </span>
                </Link> */}
              </div>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Navbar;
