import React from 'react';
import DefaultCodeBlock from '../CodeBlocks/codeblock';
import { Tabs } from 'react-tabs';
import Tab from 'react-tabs/lib/components/Tab';
import TabList from 'react-tabs/lib/components/TabList';
import TabPanel from 'react-tabs/lib/components/TabPanel';
import {
  ArrowCircleRight2,
  Code,
  Global,
  Money2,
  Shuffle,
} from 'iconsax-react';
import Link from 'next/link';

const PriceFeedText = `// SPDX-License-Identifier: MIT

pragma solidity ^0.8.16;

import "./KlayOracleInterface.sol";

contract OracleConsumerSample {
    address public immutable oracleAddress;

    uint256 public klayOutput;

    constructor(address _oracleAddress) {
        require(_oracleAddress != address(0));
        oracleAddress = _oracleAddress;
    }

    function swapEthtoKlay() public returns (bool) {
        KlayOracleInterface oracle = KlayOracleInterface(oracleAddress);

        bool replied = oracle.newOracleRequest(
            this.swap.selector,
            address(this)
        );

        return replied;
    }

    function swap(uint256 _klayOutput) public {
        klayOutput = _klayOutput;
        //Swap eth to klay
    }
}`;

const DevelopersTab = () => {
  return (
    <>
      <Tabs>
        <div className="flex gap-4 flex-col w-full">
          <div className="flex items-center mb-3 flex-row  w-full">
            <TabList className="flex flex-row items-center justify-center flex-wrap inner_tab_header  rounded-md gap-3 w-full ">
              <Tab className=" border-b border-[#303836]">
                <button className="flex items-center justify-start  gap-3 text-lg p-3 px-3 w-full font-light">
                  <span className=" ">
                    <Money2 />
                  </span>
                  Price Feeds
                </button>
              </Tab>
              <Tab className=" border-b border-[#303836]">
                <button className="flex items-center justify-start gap-3 text-lg py-3 px-3  w-full font-light">
                  <span className="">
                    <Shuffle />
                  </span>
                  Verifiable Random Numbers
                </button>
              </Tab>
              <Tab className=" border-b border-[#303836]">
                <button className="flex items-center justify-start gap-3 text-lg py-3 px-3 w-full font-light">
                  <span className="">
                    <Code />
                  </span>
                  Web APIs
                </button>
              </Tab>
            </TabList>
          </div>

          <div className="flex items-center justify-center mt-10 ">
            <TabPanel>
              <div className="fade-in">
                <div className="flex items-center justify-center mx-auto max-w-4xl flex-col gap-6 w-full">
                  {/* <div className="flex flex-col gap-6"> */}
                  <DefaultCodeBlock text={PriceFeedText} />

                  <div className="flex items-center justify-center w-full mt-3">
                    <Link
                      href=""
                      className="btn border border-[#11A97D] w-full md:w-auto px-10 py-3 text-center rounded-md inline-flex gap-4 justify-center items-center"
                    >
                      Integrate with DigiOracle
                      <ArrowCircleRight2 className="arrow" />
                    </Link>
                  </div>
                  {/* </div> */}
                </div>
              </div>
            </TabPanel>
            <TabPanel>
              <div className="fade-in">
                <div className="flex items-center justify-center mx-auto max-w-4xl flex-col gap-6 w-full">
                  {/* <div className="flex flex-col gap-6"> */}
                  <DefaultCodeBlock text={PriceFeedText} />

                  <div className="flex items-center justify-center w-full mt-3">
                    <Link
                      href=""
                      className="btn border border-[#11A97D] w-full md:w-auto px-10 py-3 text-center rounded-md inline-flex gap-4 justify-center items-center"
                    >
                      Integrate with DigiOracle
                      <ArrowCircleRight2 className="arrow" />
                    </Link>
                  </div>
                  {/* </div> */}
                </div>
              </div>
            </TabPanel>
            <TabPanel>
              <div className="fade-in">
                <div className="flex items-center justify-center mx-auto max-w-4xl flex-col gap-6 w-full">
                  {/* <div className="flex flex-col gap-6"> */}
                  <DefaultCodeBlock text={PriceFeedText} />

                  <div className="flex items-center justify-center w-full mt-3">
                    <Link
                      href=""
                      className="btn border border-[#11A97D] w-full md:w-auto px-10 py-3 text-center rounded-md inline-flex gap-4 justify-center items-center"
                    >
                      Integrate with DigiOracle
                      <ArrowCircleRight2 className="arrow" />
                    </Link>
                  </div>
                  {/* </div> */}
                </div>
              </div>
            </TabPanel>
          </div>
        </div>
      </Tabs>
    </>
  );
};

export default DevelopersTab;
