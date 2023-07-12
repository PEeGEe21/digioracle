'use client';

import {
  Arrow,
  Bezier,
  CloudSunny,
  Code,
  Code1,
  Global,
  Money2,
  MouseCircle,
  People,
  Shuffle,
  Wifi,
} from 'iconsax-react';
import Image from 'next/image';
import Link from 'next/link';
import { Tabs } from 'react-tabs';
import Tab from 'react-tabs/lib/components/Tab';
import TabList from 'react-tabs/lib/components/TabList';
import TabPanel from 'react-tabs/lib/components/TabPanel';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

export const Logos = [
  {
    name: 'klaytn',
    src: '/images/Logos/klaytn.png',
  },
  {
    name: 'celo',
    src: '/images/Logos/celo.png',
  },
  {
    name: 'binance',
    src: '/images/Logos/binance.png',
  },
  {
    name: 'polygon',
    src: '/images/Logos/polygon.png',
  },
  {
    name: 'tron',
    src: '/images/Logos/tron.png',
  },
  {
    name: 'optimism',
    src: '/images/Logos/optimism.png',
  },
  {
    name: 'arb',
    src: '/images/Logos/arb.png',
  },
  {
    name: 'vechain',
    src: '/images/Logos/vechain.png',
  },
];

export default function Home() {
  return (
    <>
      <div className="font-gtwalsh space-y-6">
        <div>
          <Navbar />
          <section className="hero relative py-20 md:py-40 px-5">
            <div className="container hero__block max-w-[800px] mx-auto w-full">
              <div className="flex items-center justify-center text-center">
                <div className="">
                  <div className="mb-5">
                    <h1 className="font-michroma text-[34px] md:text-[56px] leading-[49px] md:leading-[79px] font-medium text-white">
                      Supercharge your smart contracts with real-world data
                    </h1>
                  </div>

                  <div>
                    <p className="mb-10 hero-subtext text-[19px] leading-[30px] text-white">
                      DigiOracle is a highly modular blockchain oracle that
                      allows you securely connect your Web3 applications with
                      events, data and assets from the real world.
                    </p>
                  </div>
                  <div className="flex md:block w-full md:w-auto ">
                    <Link
                      href="https://klayoracle.gitbook.io/v1.0.0/"
                      className="hero-button btn w-full border border-[#11a97d] text-white px-8 py-4 rounded"
                    >
                      Start Building
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        <section className="py-[7rem] sec_021">
          <div className="container mx-auto px-3 lg:px-6 max-w-7xl w-full next_level">
            <div className=" w-full  mt-3 md:mt-0 rounded fade-in relative py-6">
              <Tabs>
                <div className="">
                  <div className="mb-3  w-full">
                    <TabList className="flex flex-row  justify-start md:justify-evenly inner_tab_header gap-3 w-full border-b border-[#5f5353] whitespace-nowrap overflow-x-auto">
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

                  <div className="flex flex-col w-full">
                    <TabPanel>
                      <div className="mx-auto max-w-3xl py-6 fade-in">
                        <div className="flex items-center justify-center gap-12 flex-wrap w-full">
                          {Logos?.map((x, i) => (
                            <div key={i} className="h-auto w-auto">
                              <Image
                                src={x?.src}
                                height={80}
                                width={100}
                                className="object-cover"
                                alt={x?.name}
                                loading={'lazy'}
                              />
                            </div>
                          ))}
                        </div>
                      </div>
                    </TabPanel>
                    <TabPanel>
                      <div className="fade-in">isd</div>
                    </TabPanel>
                    <TabPanel>
                      <div className="fade-in">checnk</div>
                    </TabPanel>
                  </div>
                </div>
              </Tabs>
            </div>
          </div>
        </section>

        <section className="py-[7rem] sec_022">
          <div className="container mx-auto px-3 lg:px-6 max-w-7xl w-full next_level">
            <div className="py-14">
              <div className="mb-9">
                <h2 className="text-center font-semibold font-michroma text-[40px] text-white">
                  The Next Level of Oracle Solutions
                </h2>
              </div>

              <div className="pt-4 px-3">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-x-5 gap-y-8">
                  <div className="card border border-[#2C2929] p-5 backdrop-filter backdrop-blur-xs rounded-lg">
                    <div className="flex items-start justify-start h-14 w-14 mb-4">
                      <span className="rounded-full p-3 border border-[#484747]">
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
                    <div className="flex items-start justify-start  mb-4 h-14 w-14">
                      <span className="rounded-full p-3 border border-[#484747]">
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
                      <span className="rounded-full p-3 border border-[#484747]">
                        <Wifi />
                      </span>
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

        <div className="px-4 sec_023">
          <div className="rounded-3xl bg-[#0D1A1A] container mx-auto max-w-7xl relative h-full w-full block">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-4  py-12 px-5 md:py-20 md:px-20">
              <div className="flex flex-col gap-4 text-center md:text-left">
                <h2 className="font-michroma text-white text-[40px]">
                  The DigiOracle Primer
                </h2>
                <p className="text-lg text-white font-light">
                  DigiOracle&apos;s modular architecture enables the
                  interdependent operation of data providers and nodes. Learn
                  more about how this unlocks greater efficiency and resource
                  utilization for oracle networks.
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
            <Image
              src="/images/Waiau.png"
              fill
              className="rounded-3xl absolute right-0 top-0 pointer-events-none object-cover"
              alt="Waiau"
              loading={'lazy'}
            />
          </div>
        </div>

        <section className="py-[7rem] sec_024">
          <div className="container mx-auto px-3 lg:px-6 max-w-7xl w-full next_level">
            <div className="py-14">
              <div className="mb-9 py-8 flex flex-col gap-4">
                <h2 className="text-center font-semibold font-michroma text-[40px]">
                  Embed real-world data into your dApps
                </h2>
                <p className="text-center">
                  Integrate DigiOracle into your projects with our intuitive
                  APIs and developer-friendly documentation
                </p>
              </div>

              <div className=" w-full  mt-3 md:mt-10 rounded fade-in relative py-6">
                <Tabs>
                  <div className="flex gap-4 flex-wrap md:flex-nowrap ">
                    <div className="flex items-center mb-3 flex-col  lg:w-1/4 w-full">
                      <TabList className="flex flex-col items-start justify-start flex-wrap inner_tab_header  rounded-md gap-3 w-full ">
                        <Tab className="w-full border-b border-[#303836]">
                          <button className="flex items-center justify-start  gap-3 text-lg p-3 px-3 w-full font-light">
                            <span className=" ">
                              <Money2 />
                            </span>
                            Price Feeds
                          </button>
                        </Tab>
                        <Tab className="w-full border-b border-[#303836]">
                          <button className="flex items-center justify-start gap-3 text-lg py-3 px-3  w-full font-light">
                            <span className="">
                              <Shuffle />
                            </span>
                            Verifiable Random Numbers
                          </button>
                        </Tab>
                        <Tab className="w-full border-b border-[#303836]">
                          <button className="flex items-center justify-start gap-3 text-lg py-3 px-3 w-full font-light">
                            <span className="">
                              <Code />
                            </span>
                            Web APIs
                          </button>
                        </Tab>

                        <Tab
                          className="w-full border-b border-[#303836]"
                          disabled
                        >
                          <button
                            className="flex items-center justify-between gap-3 text-lg py-3 px-3 w-full font-light"
                            disabled
                          >
                            <span className="flex items-center justify-start gap-3 opacity-30">
                              <span className="">
                                <CloudSunny />
                              </span>
                              Weather data
                            </span>

                            <span className="text-[#0C0F0E] text-xs font-light rounded-3xl bg-[#BAFBE8] px-3 py-1 ">
                              coming soon
                            </span>
                          </button>
                        </Tab>
                        <Tab
                          className="w-full border-b border-[#303836]"
                          disabled
                        >
                          <button
                            className="flex items-center justify-between gap-3 text-lg py-3 px-3 w-full font-light"
                            disabled
                          >
                            <span className="flex items-center justify-start gap-3 opacity-30">
                              <span className="">
                                <Global />
                              </span>
                              Web APIs{' '}
                            </span>

                            <span className="text-[#0C0F0E] text-xs font-light rounded-3xl bg-[#BAFBE8] px-3 py-1 ">
                              coming soon
                            </span>
                          </button>
                        </Tab>
                      </TabList>
                    </div>

                    <div className="flex flex-col lg:w-3/4 w-full">
                      <TabPanel>
                        <div>ience</div>
                      </TabPanel>
                      <TabPanel>
                        <div>isd</div>
                      </TabPanel>
                      <TabPanel>
                        <div>fdf</div>
                      </TabPanel>
                      <TabPanel>
                        <div>fefe</div>
                      </TabPanel>
                      <TabPanel>
                        <div>isfefd</div>
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

              <div className="h-[250px] md:h-[350px] w-100 block relative">
                <Image
                  src="/images/Device - Macbook Pro.png"
                  fill
                  className="object-cover"
                  alt="Device-Macbook-Pro"
                  loading={'lazy'}
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-[7rem]">
          <div className="container mx-auto max-w-7xl px-4">
            <div className="mb-5">
              <h2 className="font-michroma text-center text-[40px] text-white mb-5">
                Explore The DigiOracle Ecosystem
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3  lg:grid-cols-3 gap-8 mt-10">
              <div className="card rounded-lg border border-[#484747] px-[22px] py-[62px] backdrop-filter backdrop-blur-xs relative h-full w-full block">
                <div className="card-img flex items-center justify-center py-5 mb-12">
                  <Code1 className="h-[100px] w-[100px]" />
                </div>
                <div className="card-body my-4 flex flex-col gap-8 ">
                  <h5 className="text-[30px] leading-[40px] w-full md:w-3/4 text-white ">
                    DigiOracle For Developers
                  </h5>
                  <Link
                    href="/"
                    className="text-base font-light text-[#96FADD] cta-link"
                  >
                    Explore{' '}
                    <span className="cta-icon_animate transition-all duration-150 ease-in-out">
                      &gt;&gt;
                    </span>
                  </Link>
                </div>
                <Image
                  src="/images/Vector 1.svg"
                  fill
                  className="absolute right-0 bottom-0 pointer-events-none object-contain object-bottom -z-10"
                  alt="Vector1"
                  loading={'lazy'}
                />
              </div>

              <div className="card rounded-lg border border-[#484747] px-[22px] py-[62px] backdrop-filter backdrop-blur-xs relative h-full w-full block">
                <div className="card-img flex items-center justify-center py-5 mb-12">
                  <Bezier className="h-[100px] w-[100px]" />
                </div>
                <div className="card-body my-4 flex flex-col gap-8 justify-end">
                  <h5 className="text-[30px] leading-[40px] w-full md:w-3/4">
                    For Nodes & Data Providers
                  </h5>
                  <Link
                    href="/"
                    className="text-base font-light text-[#96FADD] cta-link"
                  >
                    Explore{' '}
                    <span className="cta-icon_animate transition-all duration-150 ease-in-out">
                      &gt;&gt;
                    </span>
                  </Link>
                </div>
                <Image
                  src="/images/Vector 2.svg"
                  fill
                  className="absolute left-0 bottom-0 pointer-events-none object-contain object-bottom -z-10"
                  alt="Vector2"
                  loading={'lazy'}
                />
              </div>

              <div className="card rounded-lg border border-[#484747] px-[22px] py-[62px] backdrop-filter backdrop-blur-xs relative h-full w-full block">
                <div className="card-img flex items-center justify-center py-5 mb-12">
                  <People className="h-[100px] w-[100px]" />
                </div>
                <div className="card-body my-4 flex flex-col gap-8 justify-end">
                  <h5 className="text-[30px] leading-[40px] w-full md:w-3/4">
                    For Community
                  </h5>
                  <Link
                    href="/"
                    className="text-base font-light text-[#96FADD] cta-link"
                  >
                    Explore{' '}
                    <span className="cta-icon_animate transition-all duration-150 ease-in-out">
                      &gt;&gt;
                    </span>
                  </Link>
                </div>
                <Image
                  src="/images/Vector 3.svg"
                  fill
                  className="absolute right-0 bottom-0 pointer-events-none object-contain object-bottom -z-10"
                  alt="Vector3"
                  loading={'lazy'}
                />
              </div>
              {/* <div className="h-[25rem] card rounded-lg border border-[#484747] px-6 py-6 backdrop-filter backdrop-blur-xs">
                <div className="card-img flex items-center justify-center py-5">
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
              </div> */}
              {/* <div className="h-[25rem] card rounded-lg border border-[#484747] px-6 py-8 backdrop-filter backdrop-blur-xs">
                <div className="card-img flex items-center justify-center py-5">
                  <People className="h-20 w-20" />
                </div>
                <div className="card-body my-4  flex flex-col gap-8">
                  <h5 className="text-[30px] leading-[40px]">For Community</h5>
                  <Link href="/" className="text-base font-light">
                    Explore &gt;&gt;
                  </Link>
                </div>
              </div> */}
            </div>
          </div>
        </section>

        <Footer/>
      </div>
    </>
  );
}
