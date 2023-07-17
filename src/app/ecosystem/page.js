import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { resources } from '../utils/data';
import { ArrowCircleRight2, DocumentText } from 'iconsax-react';

const Ecosystem = () => {
  return (
    <div className="font-gtwalsh space-y-6">
      <div>
        <Navbar />
        <section className="hero relative py-20 md:py-40 px-5 h-full w-full">
          <div className="container hero__block max-w-[800px] mx-auto w-full">
            <div className="flex items-center justify-center text-center">
              <div className="">
                <div className="mb-5">
                  <h1 className="font-michroma text-[34px] md:text-[56px] leading-[49px] md:leading-[79px] font-medium text-white">
                    Open, accessible, and modular ecosystem
                  </h1>
                </div>
              </div>
            </div>
          </div>

          <Image
            src="/images/441 1.svg"
            className="w-100 object-contain object-right -z-10"
            fill
            alt="heroimg"
            loading={'lazy'}
          />

          <Image
            src="/images/441 2.svg"
            className="w-100 object-contain object-left -z-10"
            fill
            alt="heroimg"
            loading={'lazy'}
          />
        </section>
      </div>

      <section className="py-[4em] sec_022">
        <div className="container mx-auto px-3 lg:px-6 max-w-7xl w-full">
          <div className="py-5">
            <div className="mb-9">
              <h2 className="text-center font-semibold font-michroma text-[40px] text-white">
                Components of the DigiOracle Ecosystem
              </h2>
            </div>

            <div className="pt-4 ">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-x-12 gap-y-8 px-4 md:px-8">
                <div className="md:px-5 py-6 flex items-start justify-start gap-7">
                  <div className="hidden md:flex items-start justify-start h-14 w-14 mb-4">
                    <span className="rounded-full p-3 border border-[#484747]">
                      <DocumentText />
                    </span>
                  </div>
                  <div className="text-left pb-12">
                    <h4 className="text-xl mb-3 text-[#FFF]">Data Sources</h4>
                    <div className="flex flex-col gap-2">
                      <p className="text-[#DBDBDB] text-base md:h-32">
                        As the name suggests, these are verifiable entities that
                        provide real-world data through APIs, hardware, and
                        other channels. DigiOracle uses various methods to
                        ensure data integrity from these sources.
                      </p>

                      <Link
                        href="/"
                        className="underline text-[#96FADD] text-base"
                      >
                       Learn more about data sources
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="md:px-5 py-6 flex items-start justify-start gap-7">
                  <div className="hidden md:flex items-start justify-start h-14 w-14 mb-4">
                    <span className="rounded-full p-3 border border-[#484747]">
                      <DocumentText />
                    </span>
                  </div>
                  <div className="text-left pb-12">
                    <h4 className="text-xl mb-3 text-[#FFF]">Data Providers</h4>
                    <div className="flex flex-col gap-2">
                      <p className="text-[#DBDBDB] text-base md:h-32">
                      Data providers are responsible for subscribing to data sources and configuring data feeds and Oracle contracts accessible to end users.
                      </p>

                      <Link
                        href="/"
                        className="underline text-[#96FADD] text-base"
                      >
                        Learn more about data providers
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="md:px-5 py-6 flex items-start justify-start gap-7">
                  <div className="hidden md:flex items-start justify-start h-14 w-14 mb-4">
                    <span className="rounded-full p-3 border border-[#484747]">
                      <DocumentText />
                    </span>
                  </div>
                  <div className="text-left pb-12">
                    <h4 className="text-xl mb-3 text-[#FFF]">Nodes</h4>
                    <div className="flex flex-col gap-2">
                      <p className="text-[#DBDBDB] text-base md:h-32">
                      Nodes on DigiOracle are responsible for handling computational tasks on behalf of data providers, including data retrieval, filtering, and aggregation. 
                      </p>

                      <Link
                        href="/"
                        className="underline text-[#96FADD] text-base"
                      >
                        Learn more about nodes
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="md:px-5 py-6 flex items-start justify-start gap-7">
                  <div className="hidden md:flex items-start justify-start h-14 w-14 mb-4">
                    <span className="rounded-full p-3 border border-[#484747]">
                      <DocumentText />
                    </span>
                  </div>
                  <div className="text-left pb-12">
                    <h4 className="text-xl mb-3 text-[#FFF]">Data Consumers</h4>
                    <div className="flex flex-col gap-2">
                      <p className="text-[#DBDBDB] text-base md:h-32">
                      Also known as subscribers, these are end users who make use of external data within their smart contracts and decentralized applications.
                      </p>

                      <Link
                        href="/"
                        className="underline text-[#96FADD] text-base"
                      >
                        Learn more about data consumers
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-[4em] sec_022">
        <div className="container mx-auto px-3 lg:px-6 max-w-7xl w-full">
          <div className="py-5">
            <div className="mb-9">
              <h2 className="text-center font-semibold font-michroma text-[40px] text-white">
                Ecosystem Resources
              </h2>
            </div>

            <div className="pt-4 px-3">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-x-5 gap-y-8">
                {resources?.map((item, i) => (
                  <div
                    className="card border border-[#2C2929] p-5 backdrop-filter backdrop-blur-xs rounded-lg"
                    key={i}
                  >
                    <div className="flex items-start justify-start h-14 w-14 mb-4">
                      <span className="rounded-full p-3 border border-[#484747]">
                        {item?.icon}
                      </span>
                    </div>
                    <div className="text-left mt-4 py-2">
                      <h4 className="text-xl mb-3 text-[#FFF]">
                        {item?.title}
                      </h4>
                      <p className="text-[#DBDBDB] text-base">
                        {item?.subtext}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-[4em] sec_026">
        <div className="container mx-auto px-3 lg:px-6 max-w-7xl w-full">
          <div className="py-5">
            <div className="mb-9 flex flex-col gap-4 pb-4">
              <h2 className="text-center font-semibold font-michroma text-[40px] text-white">
                Quick Start Tutorials
              </h2>
              <p className="text-lg text-white font-light text-center">
                Practical examples to help you integrate DigiOracle within your
                projects.
              </p>
            </div>
            <div className="mt-5">
              <div className="grid grid-cols-1 lg:grid-cols-3 py-3 my-2 gap-5">
                <div className="h-[25rem] card flex-initial rounded-lg">
                  <div className="card-img block relative h-[13rem] w-full overflow-hidden object-cover">
                    <Image
                      src="/images/blue-green-wave-with-grid-lines-lines 1.svg"
                      className="w-100 object-cover rounded-t-lg"
                      fill
                      alt="Frame1"
                      loading={'lazy'}
                    />
                  </div>
                  <div className="card-body pb-8 pt-5 px-5">
                    <h5 className="text-lg">
                      Why you should be a DigiOracle for DataProviders
                    </h5>
                    <div className="mt-3">
                      <Link
                        href="/"
                        className="text-base font-light text-[#96FADD] cta-link"
                      >
                        Read more{' '}
                        <span className="cta-icon_animate transition-all duration-150 ease-in-out">
                          &gt;&gt;
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="h-[25rem] card flex-initial rounded-lg">
                  <div className="card-img relative block h-[13rem] w-full overflow-hidden object-cover">
                    <Image
                      src="/images/blue-green-wave-with-grid-lines-lines 1 (1).svg"
                      className="object-cover rounded-t-lg"
                      fill
                      alt="Frame1"
                      loading={'lazy'}
                    />
                  </div>
                  <div className="card-body pb-8 pt-5 px-5">
                    <h5 className="text-lg">
                      Guide to setup your own node as a Node runner or Data
                      Provider
                    </h5>
                    <div className="mt-3">
                      <Link
                        href="/"
                        className="text-base font-light text-[#96FADD] cta-link"
                      >
                        Read more{' '}
                        <span className="cta-icon_animate transition-all duration-150 ease-in-out">
                          &gt;&gt;
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="h-[25rem] card flex-initial rounded-lg">
                  <div className="card-img relative block h-[13rem] w-full overflow-hidden object-cover">
                    <Image
                      src="/images/blue-green-wave-with-grid-lines-lines 1 (2).svg"
                      className="object-cover rounded-t-lg"
                      fill
                      alt="Frame1"
                      loading={'lazy'}
                    />
                  </div>
                  <div className="card-body pb-8 pt-5 px-5">
                    <h5 className="text-lg">
                      DigiOracle roadmap; Our Plan to mass adoption
                    </h5>
                    <div className="mt-3">
                      <Link
                        href="/"
                        className="text-base font-light text-[#96FADD] cta-link"
                      >
                        Read more{' '}
                        <span className="cta-icon_animate transition-all duration-150 ease-in-out">
                          &gt;&gt;
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="px-4 sec_023 py-[4em]">
        <div className="rounded-3xl bg-[#0D1A1A] container mx-auto max-w-7xl relative h-full w-full block">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-4  py-12 px-5 md:py-14 md:px-20">
            <div className="flex flex-col gap-4 text-center md:text-left">
              <h2 className="font-michroma text-white text-[40px]">
                Become a Data Provider
              </h2>
              <p className="text-lg text-white font-light">
                Join us in becoming a data provider for our ecosystem
              </p>
            </div>

            <div className="flex items-center justify-center md:justify-end w-full z-10">
              <a
                href="mailto:info@klayoracle.com"
                className="hero-button btn bg-[#11A97D] w-full md:w-auto px-10 py-4 text-center rounded-md inline-flex gap-4 justify-center items-center"
              >
                Talk to us
                <ArrowCircleRight2 className="arrow" />

              </a>
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

      <Footer />
    </div>
  );
};

export default Ecosystem;
