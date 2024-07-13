"use client";
import Link from "next/link";
import { useState } from "react";

export default function Component() {
  const items: any = {
    hat: [
      { num: 0, style: { display: 'none' } },
      { num: 1 },
      { num: 2, style: { width: '202px', height: '187px', top: '-11px', left: '100px' } },
      { num: 3, style: { width: '158px', height: '93px', top: '-31px', left: '118px' } },
      { num: 4, style: { width: '167px', height: '140px', top: '-46px', left: '115px' } },
      { num: 5, style: { width: '178px', height: '87px', top: '-19px', left: '88px' } },
      { num: 6, style: { width: '167px', height: '87px', top: '-19px', left: '112px' } },
      { num: 7, style: { width: '211px', height: '125px', top: '-18px', left: '87px' } },
      { num: 8, style: { width: '197px', height: '120px', top: '-49px', left: '87px' } },
      { num: 9, style: { width: '216px', height: '132px', top: '-42px', left: '93px' } },
      { num: 10, style: { width: '256px', height: '177px', top: '1px', left: '72px' } },
      { num: 11, style: { width: '176px', height: '207px', top: '-41px', left: '106px' } },
      { num: 12, style: { width: '176px', height: '105px', top: '-46px', left: '106px' } },
      { num: 13, style: { width: '176px', height: '105px', top: '-9px', left: '106px' } },
      { num: 14, style: { width: '228px', height: '160px', top: '-46px', left: '84px' } },
    ],
    accessories: [
      { num: 0, style: { display: 'none' } },
      { num: 1 },
      { num: 2, style: { width: '131px', height: '94px', top: '157px', left: '131px' } },
      { num: 3, style: { width: '131px', height: '94px', top: '157px', left: '131px' } },
      { num: 4, style: { width: '145px', height: '76px', top: '160px', left: '121px' } },
      { num: 5, style: { width: '116px', height: '117px', top: '160px', left: '132px' } },
      { num: 6, style: { width: '116px', height: '117px', top: '160px', left: '132px' } },
      { num: 7, style: { width: '116px', height: '117px', top: '160px', left: '132px' } },
    ],
    body: [
      { num: 1, style: { color: '#FFD700' } },
      { num: 2, style: { color: '#CD853F' } },
      { num: 3, style: { color: '#7CFC00' } },
      { num: 4, style: { color: '#FF0000' } },
      { num: 5, style: { color: '#000000' } },
      { num: 6, style: { color: '#FF69B4' } },
      { num: 7, style: { color: '#FF00FF' } },
      { num: 8, style: { color: '#F5F5F5' } },
    ],
    shirt: [
      { num: 0, style: { display: 'none' } },
      { num: 1, style: { width: '314px', height: '200px', top: '147px', left: '39px' } },
      { num: 2, style: { width: '312px', height: '199px', top: '147px', left: '38px' } },
      { num: 3, style: { width: '312px', height: '199px', top: '147px', left: '38px' } },
      { num: 4, style: { width: '328px', height: '191px', top: '156px', left: '30px' } },
      { num: 5, style: { width: '319px', height: '199px', top: '147px', left: '38px' } },
      { num: 6, style: { width: '310px', height: '199px', top: '147px', left: '42px' } },
      { num: 7, style: { width: '319px', height: '193px', top: '155px', left: '34px' } },
      { num: 8, style: { width: '332px', height: '199px', top: '147px', left: '23px' } },
      { num: 9, style: { width: '334px', height: '199px', top: '147px', left: '26px' } },
      { num: 10, style: { width: '316px', height: '199px', top: '147px', left: '34px' } },
      { num: 11, style: { width: '196px', height: '190px', top: '158px', left: '100px' } },
    ],
    eyes: [
      { num: 1 },
      { num: 2 },
      { num: 3 },
      { num: 4 },
      { num: 5 },
      { num: 6, style: { width: '149px', height: '68px', top: '45px', left: '111px' } },
      { num: 7, style: { width: '141px', height: '63px', top: '43px', left: '128px' } },
      { num: 8, style: { width: '127px', height: '101px', top: '8px', left: '119px' } },
      { num: 9, style: { width: '108px', height: '88px', top: '48px', left: '128px' } },
      { num: 10, style: { width: '112px', height: '37px', top: '66px', left: '126px' } },
      { num: 11, style: { width: '112px', height: '37px', top: '66px', left: '126px' } },
      { num: 12, style: { width: '134px', height: '43px', top: '62px', left: '114px' } },
      { num: 13, style: { width: '154px', height: '49px', top: '54px', left: '116px' } },
      { num: 14, style: { width: '150px', height: '41px', top: '60px', left: '121px' } },
      { num: 15, style: { width: '119px', height: '33px', top: '66px', left: '123px' } },
      { num: 16, style: { width: '130px', height: '79px', top: '30px', left: '118px' } },
      { num: 17, style: { width: '92px', height: '30px', top: '69px', left: '138px' } },
      { num: 18, style: { width: '120px', height: '41px', top: '57px', left: '125px' } },
    ],
  };

  const initialItems = {
    hat: { num: 1 },
    accessories: { num: 1 },
    body: { num: 1, style: { color: '#FFD700' } },
    shirt: { num: 1 },
    eyes: { num: 1 },
    bgColor: '#FFD700',
  };

  const [choosenItems, setChoosenItems] = useState<any>(initialItems);
  const [startIndex, setStartIndex] = useState<{ [key: string]: number }>({
    body: 0,
    eyes: 0,
    accessories: 0,
    hat: 0,
    shirt: 0,
  });

  const bodyColors = ['#FFD700', '#CD853F', '#7CFC00', '#FF0000', '#000000', '#FF69B4', '#FF00FF', '#F5F5F5'];
  const bgColors = ['#FFD700', '#CD853F', '#7CFC00', '#FF0000', '#000000', '#FF69B4', '#FF00FF', '#F5F5F5'];

  const randomize = () => {
    const randomBody = items.body[Math.floor(Math.random() * items.body.length)];
    const randomEyes = items.eyes[Math.floor(Math.random() * items.eyes.length)];
    const randomAccessories = items.accessories[Math.floor(Math.random() * items.accessories.length)];
    const randomHat = items.hat[Math.floor(Math.random() * items.hat.length)];
    const randomShirt = items.shirt[Math.floor(Math.random() * items.shirt.length)];
    const randomBgColor = bgColors[Math.floor(Math.random() * bgColors.length)];

    setChoosenItems({
      body: randomBody,
      eyes: randomEyes,
      accessories: randomAccessories,
      hat: randomHat,
      shirt: randomShirt,
      bgColor: randomBgColor,
    });
  };

  const changeItem = (item: any, type: string) => {
    setChoosenItems({ ...choosenItems, [type]: item });
  };

  const changeBgColor = (color: string) => {
    setChoosenItems({ ...choosenItems, bgColor: color });
  };

  const changeBodyColor = (color: string) => {
    setChoosenItems({ ...choosenItems, body: {num: bodyColors.indexOf(color)  + 1}});
  };

  const renderItems = (type: string) => {
    const visibleItems = items[type].slice(startIndex[type], startIndex[type] + 7);
    const hasNext = startIndex[type] + 7 < items[type].length;
    const hasPrev = startIndex[type] > 0;

    return (
      <div className="m-0 lab">
        <h2 className="text-2xl font-bold relative">
          Choose {type}
          {hasPrev && (
            <button
              onClick={() => setStartIndex({ ...startIndex, [type]: startIndex[type] - 1 })}
              className="absolute left-[-36px] top-[45px]"
            >
              <img src="/img/forward2.png" className="forward__choose forward__choose__back" />
            </button>
          )}
        </h2>
        <div className="flex space-x-4 mt-4">
          {visibleItems.map((item: any) => (
            <button
              key={item.num}
              onClick={() => changeItem(item, type)}
              className={"bg-[#ffffff] rounded-lg p-2 border-4 border-solid hover:bg-[#fff]/50 transition-colors " + (choosenItems[type].num === item.num ? 'choosen' : '')}
            >
              <img
                src={`/img/pimp/${type}/${item.num}.png`}
                alt={`${type} ${item.num}`}
                className="lab__img"
              />
            </button>
          ))}
          {hasNext && (
            <button onClick={() => setStartIndex({ ...startIndex, [type]: startIndex[type] + 1 })}>
              <img src="/img/forward2.png" className="forward__choose" />
            </button>
          )}
        </div>
      </div>
    );
  };

  const renderColors = (type: string, colors: string[], changeFunction: any) => {
    return (
      <div className="m-0 lab" style={{ paddingBottom: type === 'background color' ? '30px' : '0'}}>
        <h2 className="text-2xl font-bold relative">
          Choose {type} 
        </h2>
        <div className="flex space-x-4 mt-4 w-[600px]">
          {colors.map((color: string, index: number) => (
            <div
              key={index}
              onClick={() => changeFunction(color)}
              className={"rounded-lg p-2 border-4 cursor-pointer hover:opacity-70 border-solid  transition-colors " + (choosenItems[type] === color ? 'choosen' : '')}
              style={{ backgroundColor: color, width: '70px', height: '70px',  }}
            />
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="flex flex-col md:flex-row items-stretch gap-8 bg-[#ff8800] text-white h-screen overflow-y-auto">
      <div className="space-y-8 flex-1 render">
        {renderColors("body", bodyColors, changeBodyColor)}
        {renderItems("eyes")}
        {renderItems("accessories")}
        {renderItems("hat")}
        {renderItems("shirt")}
        {renderColors("background color", bgColors, changeBgColor)}
      </div>
      <div className="flex flex-col items-center justify-center flex-1">
        <div className="rounded-lg border-4 border-black border-solid relative w-96 h-[410px]" style={{ backgroundColor: choosenItems.bgColor }}>
          <div className="images relative">
            <img
              src={`/img/pimp/body/${choosenItems.body.num}.png`}
              alt="body"
              className="absolute lab__body"  
            />
            <img
              src={`/img/pimp/accessories/${choosenItems.accessories.num}.png`}
              alt="accessories"
              className="absolute lab__accessories"
              style={choosenItems.accessories.style}
            />
            <img
              src={`/img/pimp/hat/${choosenItems.hat.num}.png`}
              alt="hat"
              className="absolute lab__hat"
              style={choosenItems.hat.style}
            />
            <img
              src={`/img/pimp/shirt/${choosenItems.shirt.num}.png`}
              alt="shirt"
              className="absolute lab__shirt"
              style={choosenItems.shirt.style}
            />
            <img
              src={`/img/pimp/eyes/${choosenItems.eyes.num}.png`}
              alt="eyes"
              className="absolute lab__eyes"
              style={choosenItems.eyes.style}
            />
          </div>
        </div>
        <div className="flex gap-6">
          <button onClick={randomize} className="mt-6 border-white button-74 flex w-fit hover:text-white">
            <img src="img/dice.png" alt="random" className="h-6" /> Random
          </button>
          <button className="mt-6 border-white button-74 flex w-fit hover:text-white hidden">
            <img src="img/save.png" alt="save" className="h-5" /> Save
          </button>
        </div>
      </div>
      <Link href="/">
        <button className="absolute right-10 top-4 button-87 flex w-fit">
          <img src="img/back.png" alt="save" className="h-5" /> Back
        </button>
      </Link>
    </div>
  );
}
