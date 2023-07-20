import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { ArrowCircleRight2, ArrowRight, DocumentText } from 'iconsax-react';

const Company = () => {
  return (
    <div className="font-gtwalsh">
      {/* <div> */}
      <Navbar />
      <section className="hero relative  pb-20  pt-24 md:pb-40 md:pt-48 px-5 h-full w-full">
        <div className="container hero__block max-w-[800px] mx-auto w-full">
          <div className="flex items-center justify-center text-center">
            <div className="">
              <div className="mb-5">
                <h1 className="font-michroma text-[34px] md:text-[56px] leading-[49px] md:leading-[79px] font-medium text-white">
                  The Company
                </h1>
              </div>
            </div>
          </div>
        </div>

        <Image
          src="/images/rm373-506 1.png"
          className="w-full object-cover object-center -z-10"
          fill
          alt="heroimg"
          loading={'lazy'}
        />
      </section>
      {/* </div> */}

      <div className="px-4 sec_053 py-[5rem]">
        <div className="rounded-3xl bg container mx-auto max-w-4xl relative h-full w-full block">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-4  py-12 px-5 md:py-20 md:px-20">
            <div className="flex flex-col gap-4 text-center md:text-left z-10">
              <h2 className="font-michroma text-white text-[40px]">
                The Mission
              </h2>
              <p className="text-lg text-white font-light">
                At DigiOracle, our mission is to enable the adoption of
                real-world use cases in the Web3 ecosystem by providing a highly
                modular blockchain oracle that securely connects decentralized
                applications with real-world events, data, and assets.
              </p>
            </div>
          </div>
          <Image
            src="/images/Waimakariri.png"
            fill
            className="rounded-3xl absolute right-0 top-0 pointer-events-none object-contain object-right"
            alt="Waiau"
            loading={'lazy'}
          />
        </div>
      </div>

      <section className="py-[5rem] sec_022">
        <div className="container mx-auto px-3 lg:px-6 max-w-7xl w-full">
          <div className="py-5">
            <div className="mb-9">
              <h2 className="text-center font-semibold font-michroma text-[40px] text-white">
                Our Products
              </h2>
            </div>

            <div className="pt-4 px-3">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-x-5 gap-y-8">
                <Link
                  href="https://klayoracle.com"
                  className="card border border-[#2C2929] p-5 backdrop-filter backdrop-blur-xs rounded-lg relative"
                >
                  <div className="text-left mt-4 py-2">
                    <h4 className="text-xl mb-3 text-[#FFF]">Klay Oracle</h4>

                    <p className="text-[#DBDBDB] text-base">
                      Integrate real-world events, data and assets into Klaytn
                      smart contracts.
                    </p>

                    {/* <div className="mt-4 py-2">
                      <Link
                        href="/"
                        className="btn px-6 py-3 text-white bg-[#11A97D] rounded-md inline-flex gap-4 justify-center items-center"
                      >
                        Coming soon
                        <ArrowCircleRight2 className="arrow" />
                      </Link>
                    </div> */}
                  </div>
                  <div className="flex items-center justify-center md:justify-start mb-3 absolute top-3 right-3">
                    <span className="text-[#0C0F0E] text-xs font-light rounded-3xl bg-[#BAFBE8] px-3 py-1 ">
                      Live
                    </span>
                  </div>
                </Link>
                <Link
                  href="#"
                  className="card border border-[#2C2929] p-5 backdrop-filter backdrop-blur-xs rounded-lg relative"
                >
                  <div className="text-left mt-4 py-2">
                    <h4 className="text-xl mb-3 text-[#FFF]">Celo Oracle</h4>

                    <p className="text-[#DBDBDB] text-base">
                      Integrate real-world events, data and assets into Celo
                      smart contracts.
                    </p>

                    <div className="flex items-center justify-center md:justify-start mb-3 absolute top-3 right-3">
                      <span className="text-[#0C0F0E] text-xs font-light rounded-3xl bg-[#BAFBE8] px-3 py-1 ">
                        coming soon
                      </span>
                    </div>

                    {/* <div className="mt-4 py-2">
                      <Link
                        href="/"
                        className="btn px-6 py-3 text-white bg-[#11A97D] rounded-md inline-flex gap-4 justify-center items-center"
                      >
                        Coming soon
                        <ArrowCircleRight2 className="arrow" />
                      </Link>
                    </div> */}
                  </div>
                </Link>
                <Link
                  href="#"
                  className="card border border-[#2C2929] p-5 backdrop-filter backdrop-blur-xs rounded-lg relative"
                >
                  <div className="text-left mt-4 py-2">
                    <h4 className="text-xl mb-3 text-[#FFF]">Venom Oracle</h4>

                    <p className="text-[#DBDBDB] text-base">
                      Integrate real-world events, data and assets into Venom
                      smart contracts.
                    </p>

                    {/* <div className="mt-4 py-2">
                      <Link
                        href="/"
                        className="btn px-6 py-3 text-white bg-[#11A97D] rounded-md inline-flex gap-4 justify-center items-center"
                      >
                        Coming soon
                        <ArrowCircleRight2 className="arrow" />
                      </Link>
                    </div> */}
                  </div>
                  <div className="flex items-center justify-center md:justify-start mb-3 absolute top-3 right-3">
                    <span className="text-[#0C0F0E] text-xs font-light rounded-3xl bg-[#BAFBE8] px-3 py-1 ">
                      coming soon
                    </span>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-[5rem] sec_022">
        <div className="container mx-auto px-3 lg:px-6 max-w-7xl w-full">
          <div className="py-5">
            <div className="mb-12">
              <h2 className="text-center font-semibold font-michroma text-[40px] text-white">
                Meet the Team
              </h2>
            </div>
            <div className="pt-4 px-3 ">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-5 gap-y-8">
                <div className="team_card h-[20rem] card border border-[#2C2929]  rounded-2xl relative">
                  <Image
                    src="/images/Waimakariri.png"
                    fill
                    className="rounded-2xl object-cover"
                    alt="Oluwafemi Alofe"
                    loading={'lazy'}
                  />
                  <div className=" team_attribute absolute bottom-0 left-0 backdrop-filter backdrop-blur-xs w-full py-5 px-4">
                    <div className="flex items-center justify-between gap-2 text-white">
                      <h4 className="text-[22px]">Oluwafemi Alofe</h4>
                      <ArrowRight className="text-sm h-3 w-3 -rotate-[30deg] arrow hidden md:block" />
                    </div>

                    <h6 className="text-base text-white">Founder</h6>
                  </div>
                </div>
                <div className="team_card h-[20rem] card border border-[#2C2929]  rounded-2xl relative">
                  <Image
                    src="/images/Waimakariri.png"
                    fill
                    className="rounded-2xl object-cover"
                    alt="Paul Oladimeji"
                    loading={'lazy'}
                  />
                  <div className=" team_attribute absolute bottom-0 left-0 backdrop-filter backdrop-blur-xs w-full py-5 px-4">
                    <div className="flex items-center justify-between gap-2 text-white">
                      <h4 className="text-[22px]">Paul Oladimeji</h4>
                      <ArrowRight className="text-sm h-3 w-3 -rotate-[30deg] arrow hidden md:block" />
                    </div>

                    <h6 className="text-base text-white">Co-founder</h6>
                  </div>
                </div>
                <div className="team_card h-[20rem] card border border-[#2C2929]  rounded-2xl relative">
                  <Image
                    src="/images/Waimakariri.png"
                    fill
                    className="rounded-2xl object-cover"
                    alt="Waiau"
                    loading={'lazy'}
                  />
                  <div className=" team_attribute absolute bottom-0 left-0 backdrop-filter backdrop-blur-xs w-full py-5 px-4">
                    <div className="flex items-center justify-between gap-2 text-white">
                      <h4 className="text-[22px]">Abosede Mayungbe</h4>
                      <ArrowRight className="text-sm h-3 w-3 -rotate-[30deg] arrow hidden md:block" />
                    </div>

                    <h6 className="text-base text-white">Product Designer</h6>
                  </div>
                </div>
                <div className="team_card h-[20rem] card border border-[#2C2929]  rounded-2xl relative">
                  <Image
                    src="/images/Waimakariri.png"
                    fill
                    className="rounded-2xl object-cover"
                    alt="Waiau"
                    loading={'lazy'}
                  />
                  <div className=" team_attribute absolute bottom-0 left-0 backdrop-filter backdrop-blur-xs w-full py-5 px-4">
                    <div className="flex items-center justify-between gap-2 text-white">
                      <h4 className="text-[22px]">PraiseGod Udeh</h4>
                      <ArrowRight className="text-sm h-3 w-3 -rotate-[30deg] arrow hidden md:block" />
                    </div>

                    <h6 className="text-base text-white">Frontend Developer</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="px-4 sec_023 py-[5rem]">
        <div className="rounded-3xl bg-[#0D1A1A] container mx-auto max-w-7xl relative h-full w-full block">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-4  py-12 px-5 md:py-14 md:px-20">
            <div className="flex flex-col gap-4 text-center md:text-left">
              <h2 className="font-michroma text-white text-[40px]">Join us</h2>
              <p className="text-lg text-white font-light">
                Engineer, technical writer, or community manager? We are always
                looking for talent at DigiOracle.
              </p>
            </div>

            <div className="flex items-center justify-center md:justify-end w-full z-10">
              <Link
                href=""
                className=" btn bg-[#11A97D] w-full md:w-auto px-10 py-4 text-center rounded-md inline-flex gap-4 justify-center items-center"
              >
                View open roles
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

      <section className="py-[5rem] bg-[#131414]">
        <div className="container mx-auto max-w-7xl py-12 px-5 md:py-12 md:px-20 ">
          <div className="">
            <div className="mb-9">
              <h2 className="text-center font-michroma text-white text-[40px] font-normal">
                Our Investors & Partners
              </h2>
            </div>

            <div className="flex items-center justify-center gap-8 flex-wrap">
              <Image
                src={'/images/Logos/klaytn.png'}
                height={100}
                width={120}
                className="object-cover"
                alt="klaytn"
                loading={'lazy'}
              />

              <Image
                src={'/images/Logos/dorahacks.png'}
                height={100}
                width={120}
                className="object-cover"
                alt="klaytn"
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

export default Company;
