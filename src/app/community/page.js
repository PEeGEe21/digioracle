import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { community, resources } from '../utils/data';
import { ArrowRight, Bezier, Code1, DocumentText, People } from 'iconsax-react';

const Community = () => {
  return (
    <div className="font-gtwalsh">
      {/* <div> */}
      <Navbar />
      <section className="hero relative  pb-20  pt-24 md:pb-40 md:pt-48 px-5 h-full w-full">
        <div className="container hero__block max-w-[900px] mx-auto w-full">
          <div className="flex items-center justify-center text-center">
            <div className="">
              <div className="mb-5">
                <h1 className="font-michroma text-[34px] md:text-[56px] leading-[49px] md:leading-[79px] font-medium text-white">
                  Built for the community
                </h1>
                <div className="my-4">
                  <p className="mb-10 hero-subtext text-[19px] leading-[30px] text-white">
                    DigiOracle is built on the ethos of simplicity and
                    inclusivity. As a result, our community welcomes both Web3
                    newbies and experts alike, fostering conversations and
                    initiatives to help grow the ecosystem.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* </div> */}

      <section className="py-[5rem] sec_022">
        <div className="container mx-auto px-3 lg:px-6 max-w-7xl w-full">
          <div className="py-5">
            <div className="mb-12">
              <h2 className="text-center font-semibold font-michroma text-[40px] text-white">
              Community Resources
              </h2>
            </div>

            <div className="pt-4 px-3">
              <div className="grid grid-cols-1 gap-x-5 gap-y-8">
                {/* {community?.map((item, i) => (
                  <div className="card border border-[#2C2929] p-5 backdrop-filter backdrop-blur-xs rounded-lg" key={i}>
                    <div className="flex flex-col md:flex-row items-center justify-between py-4 gap-y-5 gap-x-2">
                      <div className="flex items-center gap-3 flex-1 flex-col md:flex-row">
                        <div className="flex items-start justify-start h-12 w-12">
                          <span className="rounded-full p-2 border border-[#484747]">
                            {item?.icon}
                          </span>
                        </div>

                        <div>
                          <h4 className="text-xl text-[#FFF]">
                            {item?.title}
                          </h4>
                        </div>
                      </div>
                      <div className="text-center md:text-left flex-1">
                        <p className="text-[#DBDBDB] text-base">
                          {item?.subtext}
                        </p>
                      </div>

                      <div className="flex items-center justify-center gap-3 flex-1 flex-wrap">
                        
                        <Link
                          href=""
                          className="text-[#96FADD] text-sm inline-flex font-light items-center gap-1"
                        >
                          <span className="underline underline-offset-2">
                            Documentation
                          </span>
                          <ArrowRight className="text-sm h-3 w-3 -rotate-[30deg]" />
                        </Link>
                        <Link
                          href=""
                          className="text-[#96FADD] text-sm inline-flex font-light items-center gap-1"
                        >
                          <span className="underline underline-offset-2">
                            YouTube
                          </span>
                          <ArrowRight className="text-sm h-3 w-3 -rotate-[30deg]" />
                        </Link>
                        <Link
                          href=""
                          className="text-[#96FADD] text-sm inline-flex font-light items-center gap-1"
                        >
                          <span className="underline underline-offset-2">
                            Manifesto
                          </span>
                          <ArrowRight className="text-sm h-3 w-3 -rotate-[30deg]" />
                        </Link>
                      </div>
                    </div>
                  </div>
                ))} */}

                <div className="card border border-[#2C2929] p-5 backdrop-filter backdrop-blur-xs rounded-lg">
                  <div className="flex flex-col md:flex-row items-center justify-between py-4 gap-y-5 gap-x-2">
                    <div className="flex items-center gap-3 flex-1 flex-col md:flex-row">
                      <div className="flex items-start justify-start h-12 w-12">
                        <span className="rounded-full p-2 border border-[#484747]">
                          <DocumentText />
                        </span>
                      </div>

                      <div>
                        <h4 className="text-xl text-[#FFF]">
                          Learn about DigiOracle
                        </h4>
                      </div>
                    </div>
                    <div className="text-center md:text-left flex-1">
                      <p className="text-[#DBDBDB] text-base">
                        Dive deeper into documentation, tutorials and use cases
                      </p>
                    </div>

                    <div className="flex items-center justify-center gap-3 flex-1 flex-wrap">
                      <Link
                        href="https://klayoracle.gitbook.io/v1.0.0/"
                        className="text-[#96FADD] text-sm inline-flex font-light items-center gap-1 com_links"
                      >
                        <span className="underline underline-offset-2">
                          Documentation
                        </span>
                        <ArrowRight className="text-sm h-3 w-3 -rotate-[30deg] arrow" />
                      </Link>
                      <Link
                        href=""
                        className="text-[#96FADD] text-sm inline-flex font-light items-center gap-1 com_links"
                      >
                        <span className="underline underline-offset-2">
                          YouTube
                        </span>
                        <ArrowRight className="text-sm h-3 w-3 -rotate-[30deg] arrow" />
                      </Link>
                      <Link
                        href=""
                        className="text-[#96FADD] text-sm inline-flex font-light items-center gap-1 com_links"
                      >
                        <span className="underline underline-offset-2">
                          Manifesto
                        </span>
                        <ArrowRight className="text-sm h-3 w-3 -rotate-[30deg] arrow" />
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="card border border-[#2C2929] p-5 backdrop-filter backdrop-blur-xs rounded-lg">
                  <div className="flex flex-col md:flex-row items-center justify-between py-4 gap-y-5 gap-x-2">
                    <div className="flex items-center gap-3 flex-1 flex-col md:flex-row">
                      <div className="flex items-start justify-start h-12 w-12">
                        <span className="rounded-full p-2 border border-[#484747]">
                          <DocumentText />
                        </span>
                      </div>

                      <div>
                        <h4 className="text-xl text-[#FFF]">
                          Join the discussion
                        </h4>
                      </div>
                    </div>
                    <div className="text-center md:text-left flex-1">
                      <p className="text-[#DBDBDB] text-base">
                        Help us shape the future of DigiOracle
                      </p>
                    </div>

                    <div className="flex items-center justify-center gap-3 flex-1 flex-wrap">
                      <Link
                        href=""
                        className="text-[#96FADD] text-sm inline-flex font-light items-center gap-1 com_links"
                      >
                        <span className="underline underline-offset-2">
                          Discord
                        </span>
                        <ArrowRight className="text-sm h-3 w-3 -rotate-[30deg] arrow" />
                      </Link>
                      <Link
                        href="https://t.me/digioracle"
                        className="text-[#96FADD] text-sm inline-flex font-light items-center gap-1 com_links"
                      >
                        <span className="underline underline-offset-2">
                          Telegram
                        </span>
                        <ArrowRight className="text-sm h-3 w-3 -rotate-[30deg] arrow" />
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="card border border-[#2C2929] p-5 backdrop-filter backdrop-blur-xs rounded-lg">
                  <div className="flex flex-col md:flex-row items-center justify-between py-4 gap-y-5 gap-x-2">
                    <div className="flex items-center gap-3 flex-1 flex-col md:flex-row">
                      <div className="flex items-start justify-start h-12 w-12">
                        <span className="rounded-full p-2 border border-[#484747]">
                          <DocumentText />
                        </span>
                      </div>

                      <div>
                        <h4 className="text-xl text-[#FFF]">
                          Follow the project
                        </h4>
                      </div>
                    </div>
                    <div className="text-center md:text-left flex-1">
                      <p className="text-[#DBDBDB] text-base">
                        Keep up with the latest updates on Twitter and Medium
                      </p>
                    </div>

                    <div className="flex items-center justify-center gap-3 flex-1 flex-wrap">
                      <Link
                        href="https://twitter.com/klayoracle"
                        className="text-[#96FADD] text-sm inline-flex font-light items-center gap-1 com_links"
                      >
                        <span className="underline underline-offset-2">
                          Twitter
                        </span>
                        <ArrowRight className="text-sm h-3 w-3 -rotate-[30deg] arrow" />
                      </Link>
                      <Link
                        href="https://medium.com/@klayoracle"
                        className="text-[#96FADD] text-sm inline-flex font-light items-center gap-1 com_links"
                      >
                        <span className="underline underline-offset-2">
                          Medium
                        </span>
                        <ArrowRight className="text-sm h-3 w-3 -rotate-[30deg] arrow" />
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="card border border-[#2C2929] p-5 backdrop-filter backdrop-blur-xs rounded-lg">
                  <div className="flex flex-col md:flex-row items-center justify-between py-4 gap-y-5 gap-x-2">
                    <div className="flex items-center gap-3 flex-1 flex-col md:flex-row">
                      <div className="flex items-start justify-start h-12 w-12">
                        <span className="rounded-full p-2 border border-[#484747]">
                          <DocumentText />
                        </span>
                      </div>

                      <div>
                        <h4 className="text-xl text-[#FFF]">
                          Become an ambassador
                        </h4>
                      </div>
                    </div>
                    <div className="text-center md:text-left flex-1">
                      <p className="text-[#DBDBDB] text-base">
                        Help onboard newcomers into the ecosystem
                      </p>
                    </div>

                    <div className="flex items-center justify-center gap-3 flex-1 flex-wrap">
                      <Link
                        href="https://forms.gle/gD7USXnCJKsA12f18"
                        className="text-[#96FADD] text-sm inline-flex font-light items-center gap-1 com_links"
                      >
                        <span className="underline underline-offset-2">
                          Apply Now
                        </span>
                        <ArrowRight className="text-sm h-3 w-3 -rotate-[30deg] arrow" />
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="card border border-[#2C2929] p-5 backdrop-filter backdrop-blur-xs rounded-lg">
                  <div className="flex flex-col md:flex-row items-center justify-between py-4 gap-y-5 gap-x-2">
                    <div className="flex items-center gap-3 flex-1 flex-col md:flex-row">
                      <div className="flex items-start justify-start h-12 w-12">
                        <span className="rounded-full p-2 border border-[#484747]">
                          <DocumentText />
                        </span>
                      </div>

                      <div>
                        <h4 className="text-xl text-[#FFF]">DigiOracle DAO</h4>
                      </div>
                    </div>
                    <div className="text-center md:text-left flex-1">
                      <p className="text-[#DBDBDB] text-base">
                        Have your say in the development and growth of the
                        DigiOracle ecosystem
                      </p>
                    </div>

                    <div className="flex items-center justify-center gap-3 flex-1 flex-wrap">
                      <span className="text-[#0C0F0E] text-sm font-light rounded-3xl bg-[#BAFBE8] px-4 py-1 ">
                        coming soon
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-[5rem]">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="mb-5">
            <h2 className="font-michroma text-center text-[40px] text-white mb-5">
              Explore The DigiOracle Ecosystem
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-8 mt-10">
            <div className="card rounded-lg border border-[#484747] px-[22px] py-[62px] backdrop-filter backdrop-blur-xs relative h-full w-full block">
              <div className="card-img flex items-center justify-center py-5 mb-12">
                <Code1 className="h-[100px] w-[100px]" variant="Bulk" />
              </div>
              <div className="card-body my-4 flex flex-col gap-8 ">
                <h5 className="text-[30px] leading-[40px] w-full md:w-3/4 text-white md:h-20">
                  DigiOracle For Developers
                </h5>
                <div>
                  <Link
                    href="/developers"
                    className="text-base font-light text-[#96FADD] cta-link"
                  >
                    Explore{' '}
                    <span className="cta-icon_animate transition-all duration-150 ease-in-out">
                      &gt;&gt;
                    </span>
                  </Link>
                </div>
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
                <Bezier className="h-[100px] w-[100px]" variant="Bulk" />
              </div>
              <div className="card-body my-4 flex flex-col gap-8 justify-end">
                <h5 className="text-[30px] leading-[40px] w-full md:w-3/4 md:h-20">
                  For Nodes & Data Providers
                </h5>
                <div>
                  <Link
                    href="/ecosystem"
                    className="text-base font-light text-[#96FADD] cta-link"
                  >
                    Explore{' '}
                    <span className="cta-icon_animate transition-all duration-150 ease-in-out">
                      &gt;&gt;
                    </span>
                  </Link>
                </div>
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
                <People className="h-[100px] w-[100px]" variant="Bulk" />
              </div>
              <div className="card-body my-4 flex flex-col gap-8 justify-end">
                <h5 className="text-[30px] leading-[40px] w-full md:w-3/4 md:h-20">
                  For Community
                </h5>
                <div>
                  <Link
                    href="/community"
                    className="text-base font-light text-[#96FADD] cta-link"
                  >
                    Explore{' '}
                    <span className="cta-icon_animate transition-all duration-150 ease-in-out">
                      &gt;&gt;
                    </span>
                  </Link>
                </div>
              </div>
              <Image
                src="/images/Vector 3.svg"
                fill
                className="absolute right-0 bottom-0 pointer-events-none object-contain object-bottom -z-10"
                alt="Vector3"
                loading={'lazy'}
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Community;
