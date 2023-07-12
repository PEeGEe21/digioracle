'use client';

import { Arrow, Bezier, Code1, MouseCircle, People, Wifi } from 'iconsax-react';
import Image from 'next/image';
import Link from 'next/link';
import { Tabs } from 'react-tabs';
import Tab from 'react-tabs/lib/components/Tab';
import TabList from 'react-tabs/lib/components/TabList';
import TabPanel from 'react-tabs/lib/components/TabPanel';

export default function Home() {
  return (
    <>
      <div className="font-gtwalsh space-y-6">
        <section className="hero relative py-20 md:py-40 px-5">
          <div className="container hero__block max-w-[800px] mx-auto w-full">
            <div className="flex items-center justify-center text-center">
              <div className="">
                <div className="mb-5">
                  <h1 className="font-michroma text-[56px] leading-[79px] font-medium text-white">
                    Supercharge your smart contracts with real-world data
                  </h1>
                </div>

                <div>
                  <p className="mb-10 hero-subtext text-[19px] leading-[30px] text-white">
                    DigiOracle is a highly modular blockchain oracle that allows
                    you securely connect your Web3 applications with events,
                    data and assets from the real world.
                  </p>
                </div>
                <div>
                  <Link
                    href="https://klayoracle.gitbook.io/v1.0.0/"
                    className="hero-button btn border border-[#11a97d] text-white px-8 py-3 rounded"
                  >
                    Start Building
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-[7rem]">
          <div className="container mx-auto px-3 lg:px-6 max-w-7xl w-full next_level">
            <div className=" w-full  mt-3 md:mt-0 rounded fade-in relative py-6">
              <Tabs>
                <div className="">
                  <div className="mb-3  w-full">
                    <TabList className="flex flex-row  justify-evenly inner_tab_header gap-3 w-full border-b border-[#5f5353] whitespace-nowrap ">
                      <Tab className="">
                        <button className="flex items-center justify-center p-2 px-3 w-full hover:border-b-[3px] hover:border-b-[#628FC4] hover:text-[#344054] ">
                          <span className="text-white text-2xl px-6 py-3 transition duration-200 ease">
                            Supported chains
                          </span>
                        </button>
                      </Tab>
                      <Tab className="">
                        <button className="flex items-center justify-center p-2 px-3 w-full  hover:border-b-[3px] hover:border-b-[#628FC4] hover:text-[#344054]">
                          <span className="text-white text-2xl px-6 py-3 transition duration-200 ease">
                            Partners
                          </span>
                        </button>
                      </Tab>
                      <Tab className="">
                        <button className="flex items-center justify-center p-2 px-3 w-full hover:border-b-[3px] hover:border-b-[#628FC4] hover:text-[#344054]">
                          <span className="text-white text-2xl px-6 py-3 transition duration-200 ease">
                            Data Providers
                          </span>
                        </button>
                      </Tab>
                    </TabList>
                  </div>

                  <div className="flex flex-col lg:w-3/4 w-fulls">
                    <TabPanel>
                      <div>ience</div>
                    </TabPanel>
                    <TabPanel>
                      <div>isd</div>
                    </TabPanel>
                    <TabPanel>
                      <div>checnk</div>
                    </TabPanel>
                  </div>
                </div>
              </Tabs>
            </div>
          </div>
        </section>

        <section className="py-[7rem]">
          <div className="container mx-auto px-3 lg:px-6 max-w-7xl w-full next_level">
            <div className="py-14">
              <div className="mb-9">
                <h2 className="text-center font-semibold font-michroma text-[40px] text-white">
                  The Next Level of Oracle Solutions
                </h2>
              </div>

              <div className="pt-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-x-5 gap-y-8">
                  <div className="card border border-[#2C2929] p-5 backdrop-filter backdrop-blur-xs rounded-lg">
                    <div className="flex items-start justify-start h-14 w-14 mb-4">
                      <span>
                        <Arrow />
                      </span>
                    </div>
                    <div className="text-left mt-4 py-2">
                      <h4 className="text-xl mb-3 text-[#FFF]">
                        Modular Architecture
                      </h4>
                      <p className="text-[#DBDBDB] text-base">
                        Leo mauris quis mus dapibus iaculis platea nibh nibh.
                        Volutpat leo suspendisse vulputate faucibus in non erat.
                        Consequat pharetra consectetur convallis id. In enim
                        libero faucibus arcu purus amet diam. In risus placerat
                        in tellus ornare senectus.
                      </p>
                    </div>
                  </div>

                  <div className="card border border-[#2C2929] p-5 backdrop-filter backdrop-blur-xs rounded-lg">
                    <div className="flex items-start justify-start  mb-4">
                      <span className="h-14 w-14">
                        <MouseCircle />
                      </span>
                    </div>
                    <div className="text-left mt-4 py-2">
                      <h4 className="text-xl mb-3 text-[#FFF]">
                        Minimalism and ease of use
                      </h4>
                      <p className="text-[#DBDBDB] text-base">
                        Leo mauris quis mus dapibus iaculis platea nibh nibh.
                        Volutpat leo suspendisse vulputate faucibus in non erat.
                        Consequat pharetra consectetur convallis id. In enim
                        libero faucibus arcu purus amet diam. In risus placerat
                        in tellus ornare senectus.
                      </p>
                    </div>
                  </div>
                  <div className="card border border-[#2C2929] p-5 backdrop-filter backdrop-blur-xs rounded-lg">
                    <div className="flex items-start justify-start h-14 w-14 mb-4">
                      <Wifi />
                    </div>
                    <div className="text-left mt-4 py-2">
                      <h4 className="text-xl mb-3 text-[#FFF]">
                        Secure Connectivity
                      </h4>
                      <p className="text-[#DBDBDB] text-base">
                        Leo mauris quis mus dapibus iaculis platea nibh nibh.
                        Volutpat leo suspendisse vulputate faucibus in non erat.
                        Consequat pharetra consectetur convallis id. In enim
                        libero faucibus arcu purus amet diam. In risus placerat
                        in tellus ornare senectus.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="mx-2">
          <div className="rounded-3xl bg-[#0D1A1A] container mx-auto max-w-7xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-4  py-12 px-5 md:py-20 md:px-20">
              <div className="flex flex-col gap-4 text-center md:text-left">
                <h2 className="font-michroma text-white text-[40px]">
                  The DigiOracle Primer
                </h2>
                <p className="text-lg text-white font-light">
                  DigiOracle's modular architecture enables the interdependent
                  operation of data providers and nodes. Learn more about how
                  this unlocks greater efficiency and resource utilization for
                  oracle networks.
                </p>
              </div>

              <div className="flex items-center justify-center md:justify-end w-full">
                <Link
                  href="https://klayoracle.gitbook.io/v1.0.0/"
                  className="hero-button btn bg-[#11A97D] w-full md:w-auto px-10 py-4 text-center rounded-md"
                >
                  Read Manifesto
                </Link>
              </div>
            </div>
          </div>
        </div>

        <section className="py-[7rem]">
          <div className="container mx-auto px-3 lg:px-6 max-w-7xl w-full next_level">
            <div className="py-14">
              <div className="mb-9 py-8 flex flex-col gap-4">
                <h2 className="text-center font-semibold font-michroma text-[40px]">
                  Embed real-world data into your dApps
                </h2>
                <p className='text-center'>
                  Integrate DigiOracle into your projects with our intuitive
                  APIs and developer-friendly documentation
                </p>
              </div>

              <div className=" w-full  mt-3 md:mt-10 rounded fade-in relative py-6">
                <Tabs>
                  <div className="flex gap-4 flex-wraps">
                    <div className="flex items-center mb-3 flex-col lg:w-1/4 w-fulls">
                      <TabList className="flex flex-col items-start justify-start flex-wrap inner_tab_header  rounded-md gap-3 w-full ">
                        <Tab className="w-full">
                          <button className="flex items-center justify-start text-sm p-2 px-3 w-full transition-colors duration-200 ease-in-out hover:bg-[#F6F6F7] hover:text-[#344054]  rounded-lg gap-2">
                            <span className="text-[#046ED1] text-xs rounded-full bg-[#F3F9FF] p-2 transition duration-200 ease">
                              njnjkenec
                            </span>
                          </button>
                        </Tab>
                        <Tab className="w-full">
                          <button className="flex items-center justify-start text-sm p-2 px-3 w-full transition-colors duration-200 ease-in-out hover:bg-[#F6F6F7] hover:text-[#344054]  rounded-lg gap-2">
                            <span className="text-[#046ED1] text-xs rounded-full bg-[#F3F9FF] p-2 transition duration-200 ease">
                              rvjrirv
                            </span>
                          </button>
                        </Tab>
                      </TabList>
                    </div>

                    <div className="flex flex-col lg:w-3/4 w-fulls">
                      <TabPanel>
                        <div>ience</div>
                      </TabPanel>
                      <TabPanel>
                        <div>isd</div>
                      </TabPanel>
                    </div>
                  </div>
                </Tabs>
              </div>
            </div>
          </div>
        </section>

        <section className="py-[7rem] bg-[#131414]">
          <div className="container mx-auto max-w-7xl py-12 px-5 md:py-20 md:px-20 ">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-4 items-center space-y-3">
              <div className="flex flex-col gap-4">
                <div>
                  <div className="flex items-center justify-center md:justify-start mb-3">
                    <span className="text-[#0C0F0E] text-sm font-light rounded-3xl bg-[#BAFBE8] px-4 py-1 ">
                      Coming soon
                    </span>
                  </div>

                  <h2 className="text-center md:text-left font-michroma text-white text-[40px] font-normal mt-4">
                    DigiOracle Explorer
                  </h2>
                </div>

                <p className="text-lg text-white font-light text-center md:text-left">
                  Molestie morbi praesent urna eget purus mattis vitae blandit.
                  Iaculis non rhoncus tortor phasellus pulvinar consectetur
                  neque magnis. Risus nunc praesent in.
                </p>
              </div>

              <div className="h-[350px] w-100 block relative">
                <Image
                  src="/images/Device - Macbook Pro.png"
                  fill
                  className="object-cver"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-[7rem]">
          <div className="container mx-auto max-w-7xl">
            <div className="mb-5">
              <h2 className="font-michroma text-center text-[40px] text-white mb-5">
                Explore The DigiOracle Ecosystem
              </h2>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 space-x-3 mt-10">
              <div className="h-[25rem] card rounded-lg border border-[#484747] px-5 py-6 backdrop-filter backdrop-blur-xs flex flex-col justify-between ">
                <div className="card-img flex items-center justify-center">
                  <Code1 className="h-20 w-20" />
                </div>
                <div className="card-body my-4 flex flex-col gap-8">
                  <h5 className="text-[30px] leading-[40px]">
                    DigiOracle For Developers
                  </h5>
                  <Link href="/" className="text-base font-light">
                    Explore &gt;&gt;
                  </Link>
                </div>
              </div>
              {/* <div className="p-4 "> */}
              <div className="h-[25rem] card rounded-lg border border-[#484747] px-5 py-6 backdrop-filter backdrop-blur-xs flex flex-col justify-between">
                <div className="card-img flex items-center justify-center">
                  <Bezier className="h-20 w-20" />
                </div>
                <div className="card-body my-4 flex flex-col gap-8">
                  <h5 className="text-[30px] leading-[40px]">
                    For Nodes & Data Providers
                  </h5>
                  <Link href="/" className="text-base font-light">
                    Explore &gt;&gt;
                  </Link>
                </div>
                {/* </div> */}
              </div>
              {/* <div className="p-4 h-full"> */}
              <div className="h-[25rem] card rounded-lg border border-[#484747] px-5 py-8 backdrop-filter backdrop-blur-xs flex flex-col justify-between">
                <div className="card-img flex items-center justify-center">
                  <People className="h-20 w-20" />
                </div>
                <div className="card-body my-4  flex flex-col gap-8">
                  <h5 className="text-[30px] leading-[40px]">For Community</h5>
                  <Link href="/" className="text-base font-light">
                    Explore &gt;&gt;
                  </Link>
                </div>
                {/* </div> */}
              </div>
            </div>
          </div>
        </section>

        <footer className="py-8">
          <div className="container mx-auto max-w-7xl ">
            <div className="top-footer py-12">
              <div className="mb-4 lg:mb-0  ">
                <div className="flex items-center justify-center text-center px-2 px-lg-4">
                  <div>
                    <Link
                      href="/"
                      className="navbar-brand mb-5 flex items-center justify-center text-center"
                    >
                      <Image
                        src="/images/voracle.svg"
                        width={50}
                        height={50}
                        alt="logo"
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
                        href="https://klayoracle.gitbook.io/v1.0.0/"
                        className="footer-link rounded-circle p-3 flex items-center justify-center relative"
                      >
                        Community
                        <span></span>
                      </Link>
                      <Link
                        href="https://klayoracle.gitbook.io/v1.0.0/"
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
                  <p>&copy; DigiOracle. All rights reserved</p>
                </div>
                <div>
                  <div className="inline-flex items-center justify-start lg:justify-center gap-2">
                    <a
                      target="_blank"
                      href="https://github.com/alofeoluwafemi/klay-oracle"
                      className="social-icon"
                    >
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
      </div>
    </>
  );
}
