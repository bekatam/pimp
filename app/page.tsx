"use client"

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Home() {

  const [copy, setCopy] = useState(false);
  const [openIndex, setOpenIndex] = useState(null);
  const faqs = [
    {
      question: "What is PIMP?",
      answer: "PIMP stands for Positively Innovative Meme Project. It is a unique and luxurious meme coin built on the Solana blockchain, aiming to bring a touch of extravagance and creativity to the cryptocurrency world."
    },
    {
      question: "Why Choose PIMP?",
      answer: `PIMP offers unique branding, an engaged community, innovative tokenomics, governance opportunities, and rewards for active members and token owners.`
    },
    {
      question: "How can I buy PIMP tokens?",
      answer: "You can buy PIMP tokens during our presale event or on decentralized exchanges (DEX) after the official launch. Detailed instructions will be provided on our website and social media channels."
    },
    {
      question: "What are the benefits of holding PIMP tokens?",
      answer: "Holding PIMP tokens gives you access to various benefits, including staking rewards, participation in community governance, and exclusive access to NFT drops and other events."
    },
    {
      question: "How can I contribute to the PIMP community?",
      answer: "You can contribute by actively participating in our social media channels, joining discussions, providing feedback, and spreading the word about PIMP. We also encourage you to participate in our governance and decision-making processes."
    },
    {
      question: "How can I stay updated on PIMP’s progress?",
      answer: "You can stay updated by following our official social media channels, subscribing to our newsletter, and regularly visiting our website for the latest news and updates."
    },
    {
      question: "Who is behind the PIMP project?",
      answer: "The PIMP project is developed by a team of experienced professionals in blockchain, marketing, and finance."
    }
  ];

  const toggleFAQ = (index: any) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleClick = () => {
    setCopy(true);
    navigator.clipboard.writeText('GhBoKyprtD9j1gU6zp9Qfibev3KwcoSbkXPf6HtQEH2C')
      .then(() => {
        setTimeout(() => {
          setCopy(false);
        }, 3000);
      })
      .catch(err => {
        console.error('Failed to copy text: ', err);
      });
  };

  return (
    <>
      <div className="main main__first">
        <Link href={"/lab"}>
          <button className="btn">
            <Image
              height={25}
              src={require("../public/img/wardrobe.png")}
              alt="wardrobe"
            />
            <span>PIMP WARDROBE</span>
          </button>
        </Link>
        <div className="text__wrapper">
          <div className="text text_big">WELCOME TO THE PIMP ZONE!</div>
          <div className="text">
            WHERE LUXURY MEETS CRYPTO, AND STYLE KNOWS NO BOUNDS. <br />
            BUCKLE UP, BECAUSE YOU’RE ABOUT TO RIDE THE WAVE OF OPULENCE AND
            INNOVATION. <br />
            GET READY TO LIVE THE PIMP LIFE!
          </div>
          <Link href={'https://t.me/+9Od-FxiqnxtkNWMy'} target="_blank">
            <button className="button duration-1000">JOIN COMMUNITY</button>
          </Link>
        </div>
      </div>
      <div className="main main__second">
        <img src="/img/pimpwithmoney.png" alt="pimpwithmoney" className="main__second__pimp" />
        <img src="/img/money.png" alt="moneyrain" className="main__second__money "/>
        <div className="main__second__tv">
          <div className="main__second__text">
            <div className="main__second__header">ABOUT PIMP</div>
            <div className="tv__text">
              Pimpanzee(PIMP) is premier meme coin for those who appreciate a touch of extravagance and luxury in the world of cryptocurrencies. PIMP stands for Positively Innovative Meme Project. PIMP is not just another meme coin - it's a statement. Inspired by the flamboyant lifestyle and bold attitude of a pimp, our token brings a fresh perspective to the crypto world. With its eye-catching branding and unique approach, PIMP aims to captivate the imagination of investors and enthusiasts alike. At PIMP, our mission is simple: to inject flair and sophistication into the meme coin landscape. We believe in pushing the boundaries of creativity and innovation, while also fostering a supportive and inclusive community. 
            </div>
          </div>
        </div>
        <div className="text__wrapper"></div>
      </div>
      <div className="main main__fourth">
        <div className="text__wrapper text__wrapper_second">
        <div className="socials flex gap-24 mt-10">
            <Link href={'https://t.me/+9Od-FxiqnxtkNWMy'} target="_blank">
              <img 
                src="/img/telegram.png"
                className="h-24 duration-500 hover:opacity-40"
              />
            </Link>
            <Link target="_blank" href={'https://solscan.io/token/GhBoKyprtD9j1gU6zp9Qfibev3KwcoSbkXPf6HtQEH2C'}>
              <img 
                src="/img/solscan.png"
                className="h-24 duration-500 hover:opacity-40"
              />
            </Link>
            <Link target="_blank" href={'#'}>
              <img 
                src="/img/coingecko.png"
                className="h-24 duration-500 hover:opacity-40"
              />
            </Link>
            <Link target="_blank" href={'https://www.dextools.io/app/en/solana/pair-explorer/34EdU7gsbAHACTHCedPnvgAoaeF6fgYKeg4bifPBZhdj?t=1720730476541 '}>
              <img 
                src="/img/dextool.png"
                className="h-24 duration-500 hover:opacity-40"
              />
            </Link>
            <Link target="_blank" href={'#'}>
              <img 
                src="/img/coinmarket.png"
                className="h-24 duration-500 hover:opacity-40"
              />
            </Link>
            <Link target="_blank" href={'https://dexscreener.com/solana/34edu7gsbahacthcedpnvgaoaef6fgykeg4bifpbzhdj'}>
              <img 
                src="/img/screener.png"
                className="h-24 duration-500 hover:opacity-40"
              />
            </Link>
            <Link target="_blank" href={'https://x.com/PIMPANZEETOKEN'}>
              <img 
                src="/img/twitter.png"
                className="h-24 duration-500 hover:opacity-40"
              />
            </Link>
          </div>
        </div>
      </div>
      <div className="main main__tokenomics">
        <img src="/img/fourth.jpg" alt="handsdown" className="main__fifth__img"/>
        <div className="tokenomics">PIMP TOKENOMICS</div>
        <div className="token__wrapper">
          <div className="token">GhBoKyprtD9j1gU6zp9Qfibev3KwcoSbkXPf6HtQEH2C</div>
          <div className="copy__wrapper" onClick={handleClick}>
            {copy ? <img src="/img/done.png" alt="done" /> : <img src="/img/copy.png" alt="copy" /> }
          </div>
        </div>
        <div className="cards__wrapper">
          <img src="/img/card1.png" alt="card"/>
          <img src="/img/card2.png" alt="card"/>
          <img src="/img/card3.png" alt="card"/>
          <img src="/img/card4.png" alt="card"/>
        </div>
        <div className="text__wrapper text__wrapper__roadmap">
          <div className="text__wrapper__cards">
            PIMP ROADMAP
          </div>
        </div>
      </div>
      <div className="main main__sixth">
        <div className="text__wrapper"></div>
      </div>
      <div className="main main__seventh">
        <img src="/img/wardrobe.svg" alt="wardrobe-text"/>
        <div className="wardrobe__text">
          DO YOU LIKE PIMP? SHOW IT TO EVERYONE WORLDWIDE! NOW YOU CAN GENERATE YOUR OWN RANDOM AVATAR, SOON THEY WILL BE USED TO CREAETE NFT COLLECTION.
        </div>
        <Link href={"/lab"}>
          <button className="btn btn__wardrobe">
            <Image
              height={50}
              src={require("../public/img/wardrobe.png")}
              alt="wardrobe"
            />
            <span>PIMP WARDROBE</span>
          </button>
        </Link>
        <img src="/img/clothes.jpg" alt="clothes" className="w-dvw"/>
        <div className="text__wrapper text__wrapper__seventh"></div>
      </div>
      <div className="main main__eight">
        <div className="faqHeader">ANY QUESTIONS LEFT?</div>
        <div className="faqContainer">
          {faqs.map((faq, index) => (
            <div onClick={() => toggleFAQ(index)} className="faqItem" key={index}>
              <h3 className="faqQuestion">
                {faq.question}
              </h3>
              <p className={'faqAnswer ' + (openIndex !== index ? 'none' : 'faqShown')}>{faq.answer}</p>
              {openIndex !== index ? <img src="/img/plus.png" alt="plus" /> : <img src="/img/close.png" alt="close" />}
            </div>
          ))}
        </div>
      </div>
      <footer className="footer">
          <div className="footer__left">
          © 2024 PIMP. PIMPANZEE.
          </div>
          <div className="footer__center">
            DISCLAIMER <br />
            $PIMP WAS MADE FOR FUN AND HAS NO VALUE. DONT RISK MONEY YOU ARE AFRAID OF LOSING. THE PRICE MAY GO UP OR IT MAY GO DOWN. WE ARE NOT RESPONSIBLE FOR THE PRICE OF TOKEN
          </div>
          <div className="footer__right">
            $PIMP ON SOLANA.
          </div>
      </footer>
    </>
  );
}
