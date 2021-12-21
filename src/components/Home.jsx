import React from "react";
import styled from "styled-components";
import BackgroundImg from "../assets/img/background.jpg";
import { Product } from "./Product";

import LenovoImg from "../assets/img/lenovo.jpg";
import HpImg from "../assets/img/hp.jpg";
import AcerImg from "../assets/img/acer.jpg";
import RogImg from "../assets/img/rog.jpg";
import MiniImg from "../assets/img/minic.jpg";
import ExpertImg from "../assets/img/expertc.jpg";
import VivoImg from "../assets/img/vivobook.jpg";
import RazerImg from "../assets/img/razer.jpg";
import MouseOneImg from "../assets/img/mouse-one.jpg";
import IpadImg from "../assets/img/ipad.jpg";
import StandTapImg from "../assets/img/standtap.jpg";
import StandImg from "../assets/img/stand.jpg";
import ScreenImg from "../assets/img/screen.jpg";
import DellImg from "../assets/img/dell.jpg";
import NitroImg from "../assets/img/nitro.jpg";

export const Home = () => {
  return (
    <React.Fragment>
      <HomeContainerC>
        <HomeCoverC>
          <HomeImg src={BackgroundImg} alt="home-img" />
          <HomecoverProudactC>
            <Product
              id={1}
              title="Lenovo IdeaPad Gaming 3 15 15.6 Laptop, 15.6 FHD (1920 x 1080) Display, AMD Ryzen 5 5600H Processor, NVIDIA GeForce GTX 1650, 8GB DDR4 RAM,"
              imgProduct={LenovoImg}
              rating={5}
              price={667.63}
            />
            <Product
              id={2}
              title="HP 14 Laptop, AMD Ryzen 5 5500U, AMD Radeon Graphics, 8 GB RAM, 256 GB SSD, Windows 11 Home (14-fq1025nr, Natural Silver)"
              imgProduct={HpImg}
              rating={3}
              price={505.0}
            />
            <Product
              id={3}
              title="Acer Swift 3 Intel Evo Thin & Light Laptop, 14 Full HD, Intel Core i7-1165G7, Intel Iris Xe Graphics, 8GB LPDDR4X, 256GB NVMe SSD, Wi-Fi 6, Fingerprint Reader, Back-lit KB, SF314-59-75QC"
              imgProduct={AcerImg}
              rating={4}
              price={649.99}
            />

            <Product
              id={4}
              title="ROG Strix GA15DK Gaming Desktop PC, AMD Ryzen 7 5800X, GeForce RTX 3070, 16GB DDR4 RAM, 512GB SSD + 1TB HDD, Wi-Fi 5, Windows 10 Home, GA15DK-AS776"
              imgProduct={RogImg}
              rating={5}
              price={1949.0}
            />

            <Product
              id={5}
              title="Baieyu Mini Computers Core i7-9700F, GeForce GTX 1650, 64GB RAM/512GB SSD/1TB HDD, Mini PC Gaming Windows 10 Pro, 2xHDMI/DP/DVI/WiFi 6/BT 5/LAN, Support 8K Display"
              imgProduct={MiniImg}
              rating={5}
              price={1642.4}
            />

            <Product
              id={6}
              title="ASUS ExpertCenter D500SC Small Form Factor Desktop PC, Intel Core i5-11400, 16GB DDR4 RAM, 256GB PCIe SSD + 1TB HDD, TPM, Windows 10 Home, Black, D500SC-AB504"
              imgProduct={ExpertImg}
              rating={5}
              price={649.91}
            />

            <Product
              id={7}
              title="ASUS VivoBook 15.6'' Touchscreen Thin and Light Laptop | Intel Core i5-1135G7 (Beats i7-1065G7) / i3-1135G4 , Full HD, Fingerprint, with HDMI Cable, Windows 10, Gray (8GB|128GB SSD, i3-1115G4)"
              imgProduct={VivoImg}
              rating={5}
              price={510.99}
            />

            <Product
              id={8}
              title="Razer Kraken Ultimate RGB USB Gaming Headset: THX 7.1 Spatial Surround Sound - Chroma RGB Lighting - Retractable Active Noise Cancelling Mic - Aluminum & Steel Frame - for PC - Classic Black"
              imgProduct={RazerImg}
              rating={5}
              price={64.99}
            />
            <Product
              id={9}
              title="iPad Pro USB C Hub, Baseus 6-in-1 MacBook Air Adapter, USB C Docking Station with 4K@60Hz HDMI, 100W PD Charging, TF/SD Card Reader, USB 3.0 & 3.5mm Headphone Jack, USB C Adapter for Laptop and More"
              imgProduct={IpadImg}
              rating={4}
              price={46.99}
            />

            <Product
              id={10}
              title="Magfit Magnetic Tablet Hub Stand for iPad Pro M1,10-in-1USB C Hub Docking Station with HDMI, 2xUSB 3.1,100W PD Charging,3.5mm Audio Jack, Strong Magnetic Suction,Foldable, 360° Rotatable,for MacBook"
              imgProduct={StandTapImg}
              rating={5}
              price={199.0}
            />

            <Product
              id={11}
              title="UGREEN Tablet Stand Holder Adjustable Compatible for iPad 10.2 2019 iPad Pro 11 Inch 2020 iPad 9.7 2018 iPad Mini 5 4 3 2 iPad Air Nintendo Switch iPhone 13 12 Pro Max 11 XS XR X 8 Plus 7 6 Black"
              imgProduct={StandImg}
              rating={5}
              price={11.99}
            />

            <Product
              id={12}
              title="HP 27-inch Monitor with Height Adjust (27f 4K, Natural Silver and Black)"
              imgProduct={ScreenImg}
              rating={5}
              price={259.99}
            />

            <Product
              id={13}
              title="Dell Inspiron 7700 AIO Desktop, 27-inch FHD Infinity Touchscreen All in One - Intel Core i7-1165G7, 12GB 2666MHz DDR4 RAM, 1TB HDD + 256GB SSD, Iris XE Graphics, Windows 10 Home- Silver (Latest Model)"
              imgProduct={DellImg}
              rating={5}
              price={1184.99}
            />

            <Product
              id={14}
              title="Acer Nitro 50 N50-620-UA91 Gaming Desktop | 11th Gen Intel Core i5-11400F 6-Core Processor | NVIDIA GeForce GTX 1650 | 8GB DDR4 | 512GB NVMe M.2 SSD | Intel Wi-Fi 6 AX201 | Keyboard and Mouse"
              imgProduct={NitroImg}
              rating={5}
              price={822.34}
            />

            <Product
              id={15}
              title="Razer DeathAdder V2 Gaming Mouse: 20K DPI Optical Sensor - Fastest Gaming Mouse Switch - Chroma RGB Lighting - 8 Programmable Buttons - Rubberized Side Grips - Classic Black"
              imgProduct={MouseOneImg}
              rating={5}
              price={34.99}
            />
          </HomecoverProudactC>
        </HomeCoverC>
      </HomeContainerC>
    </React.Fragment>
  );
};

const HomeContainerC = styled.div`
  display: flex;
  justify-content: center;
  margin: 0px auto 10vh;
  max-width: 1300px;
  height: 100%;
`;
const HomeCoverC = styled.div`
  width: 100%;
`;
const HomeImg = styled.img`
  width: 100%;
  object-fit: contain;
  z-index: -1;
  margin-bottom: -150px;

  @media (max-width: 575px) {
    margin-bottom: -50px;
  }
  @media (min-width: 576px) and (max-width: 992px) {
    margin-bottom: -90px;
  }
`;

const HomecoverProudactC = styled.div`
  display: flex;
  flex-wrap: wrap;
  z-index: 1;
  > div {
    width: calc(93% / 3);
    margin: 10px auto;

    @media (max-width: 575px) {
      width: 97%;
      margin: 3px auto;
    }
    @media (min-width: 576px) and (max-width: 992px) {
      width: calc(93% / 2);
    }
  }
`;
