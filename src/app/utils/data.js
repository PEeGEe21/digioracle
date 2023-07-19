import Feed from '../components/Icons/Feeds';
import Github from '../components/Icons/Github';
import {
  DocumentText,
  Headphone,
  MessageQuestion,
  TableDocument,
} from 'iconsax-react';

export const resources = [
  {
    icon: <DocumentText />,
    title: 'Documentation',
    subtext: 'Dive into the docs',
  },
  {
    icon: <MessageQuestion />,
    title: 'Developer FAQs',
    subtext: 'Frequently asked questions',
  },
  {
    icon: <Headphone />,
    title: 'Developer Support',
    subtext: 'For questions, issues and help',
  },
  {
    icon: <Feed />,
    title: 'Data Feed Explorer',
    subtext: 'Explore the current status of the network',
  },
  {
    icon: <Github />,
    title: 'GitHub Repo',
    subtext: 'Explore the codebase',
  },
  {
    icon: <TableDocument />,
    title: 'The DigiOracle Manifesto',
    subtext: 'Learn more about how DigiOracle works',
  }
];

export const community = [
  {
    icon: <DocumentText />,
    title: 'Documentation',
    subtext: 'Dive into the docs',
    links: [
      {
        text: 'Documentation',
        link: '',
      },
      {
        text: 'Youtube',
        link: '',
      },
      {
        text: 'Manifesto',
        link: '',
      },
    ],
  },
  {
    icon: <DocumentText />,
    title: 'Join the discussion',
    subtext: 'Help us shape the future of DigiOracle',
    links: [
      {
        text: 'Discord',
        link: '',
      },
      {
        text: 'Telegram',
        link: '',
      },
    ],
  },
  {
    icon: <DocumentText />,
    title: 'Documentation',
    subtext: 'Dive into the docs',
    links: [
      {
        text: 'Documentation',
        link: '',
      },
      {
        text: 'Youtube',
        link: '',
      },
      {
        text: 'Manifesto',
        link: '',
      },
    ],
  },
  {
    icon: <DocumentText />,
    title: 'Follow the project',
    subtext: 'Keep up with the latest updates on Twitter and Medium',
    links: [
      {
        text: 'Twitter',
        link: '',
      },
      {
        text: 'Youtube',
        link: '',
      },
      {
        text: 'Medium',
        link: '',
      },
    ],
  },
  {
    icon: <DocumentText />,
    title: 'Become an ambassador',
    subtext: 'Help onboard newcomers into the ecosystem',
    links: [
      {
        text: 'Current openings',
        link: '',
      },
      {
        text: 'YouTube',
        link: '',
      },
      {
        text: 'Manifesto',
        link: '',
      },
    ],
  },
  {
    icon: <DocumentText />,
    title: 'DigiOracle DAO',
    subtext:
      'Have your say in the development and growth of the DigiOracle ecosystem',
    links: [],
  },
];

export const SupportedChainsLogos = [
  {
    name: 'klaytn',
    src: '/images/Logos/klaytn.png',
    is_available: true,
  },
  {
    name: 'celo',
    src: '/images/Logos/celo.png',
    is_available: false,
  },
  {
    name: 'binance',
    src: '/images/Logos/binance.png',
    is_available: false,
  },
  {
    name: 'polygon',
    src: '/images/Logos/polygon.png',
    is_available: false,
  },
  {
    name: 'tron',
    src: '/images/Logos/tron.png',
    is_available: false,
  },
  {
    name: 'optimism',
    src: '/images/Logos/optimism.png',
    is_available: false,
  },
  {
    name: 'arb',
    src: '/images/Logos/arb.png',
    is_available: false,
  },
  {
    name: 'vechain',
    src: '/images/Logos/vechain.png',
    is_available: false,
  },
  {
    name: 'mantle',
    src: '/images/Logos/mantle.svg',
    is_available: false,
  },
];

export const PartnersLogos = [
  {
    name: 'klaytn',
    src: '/images/Logos/klaytn.png',
  },
  {
    name: 'dorahacks',
    src: '/images/Logos/dorahacks.png',
  },
];

export const DataProvidersLogos = [
  {
    name: 'coinmarketcap',
    src: '/images/Logos/CM.png',
  },
  {
    name: 'coinbase',
    src: '/images/Logos/CB.png',
  },
  {
    name: 'cryptocompare',
    src: '/images/Logos/CC.svg',
  },
  {
    name: 'binance',
    src: '/images/Logos/binance.png',
  },
  {
    name: 'huobi',
    src: '/images/Logos/HU.svg',
  },
  {
    name: 'bitmart',
    src: '/images/Logos/BM.png',
  },
  {
    name: 'uniswap',
    src: '/images/Logos/uniswap.svg',
  },
  {
    name: 'sushiswap',
    src: '/images/Logos/Sushiswap-white-logo 1.svg',
  },
  {
    name: 'polygon',
    src: '/images/Logos/polygon.png',
  },
  {
    name: 'coinapi',
    src: '/images/Logos/coinapi.png',
  },
];

export const PriceFeedText = `// SPDX-License-Identifier: MIT

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