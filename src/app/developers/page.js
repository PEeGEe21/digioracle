'use client';

import React from 'react';

import Image from 'next/image';
import Link from 'next/link';
import { Tabs } from 'react-tabs';
import Tab from 'react-tabs/lib/components/Tab';
import TabList from 'react-tabs/lib/components/TabList';
import TabPanel from 'react-tabs/lib/components/TabPanel';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

import { resources } from '../utils/data';
import { ArrowCircleRight2 } from 'iconsax-react';
import DevelopersTab from '../components/Tabs/developersTab';

const Developers = () => {
  return (
    <div className="font-gtwalsh space-y-6">
      <div>
        <Navbar />
        <section className="hero relative py-20 md:py-40 px-5">
          <div className="container hero__block max-w-[800px] mx-auto w-full">
            <div className="flex items-center justify-center text-center">
              <div className="">
                <div className="mb-5">
                  <h1 className="font-michroma text-[34px] md:text-[56px] leading-[49px] md:leading-[79px] font-medium text-white">
                    Developer-friendly Oracle network
                  </h1>
                </div>

                <div>
                  <p className="mb-10 hero-subtext text-[19px] leading-[30px] text-white">
                    DigiOracle is built with the simplicity of integration as a
                    core principle. Embed price feeds and other real-world data
                    into your decentralized applications today.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <Image
            src="/images/blue-green-wave-with-grid-lines-lines 1.png"
            className="w-100 object-contain object-left -z-10"
            fill
            alt="heroimg"
            loading={'lazy'}
          />

          <Image
            src="/images/blue-green-wave-with-grid-lines-lines 2.png"
            className="w-100 object-contain object-right -z-10"
            fill
            alt="heroimg"
            loading={'lazy'}
          />
        </section>
      </div>

      <section className="py-[4em]sec_026 dev_tab">
        <div className="container mx-auto px-3 lg:px-6 max-w-7xl w-full">
          <div className="py-5">
            <div className="mb-9 flex flex-col gap-4 pb-4 max-w-4xl mx-auto">
              <h2 className="text-center font-semibold font-michroma text-[40px] text-white">
                Connect your smart contracts
              </h2>
              <p className="text-lg text-white font-light text-center">
                With DigiOracle&apos;s intuitive APIs and developer-friendly
                documentation, integrating our oracle into your projects is
                straightforward and hassle-free.
              </p>
            </div>
            <div className="mt-5">
              <DevelopersTab />
            </div>
          </div>
        </div>
      </section>

      <section className="py-[4em] sec_022">
        <div className="container mx-auto px-3 lg:px-6 max-w-7xl w-full">
          <div className="py-5">
            <div className="mb-9">
              <h2 className="text-center font-semibold font-michroma text-[40px] text-white">
                The Next Level of Oracle Solutions
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

      <section className="py-[4em]sec_026">
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
                Need more support?
              </h2>
              <p className="text-lg text-white font-light">
                Tell us about your custom use cases & integration needs
              </p>
            </div>

            <div className="flex items-center justify-center md:justify-end w-full z-10">
              <Link
                href=""
                className="btn bg-[#11A97D] w-full md:w-auto px-10 py-4 text-center rounded-md inline-flex gap-4 justify-center items-center"
              >
                Talk to us
                <ArrowCircleRight2 className="arrow" />
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

      <Footer />
    </div>
  );
};

export default Developers;
