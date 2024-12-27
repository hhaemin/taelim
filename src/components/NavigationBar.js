import React, { useState } from "react";
import { NavigationBarContainer, MainMenu, MenuItem } from "./NavbarStyles";
import SubMenu from "./SubMenu";
import { Link } from "react-router-dom";

const Navigationbar = () => {
  const [openMenu, setOpenMenu] = useState(null);
  const [openSubMenu, setOpenSubMenu] = useState(null);

  const handleMenuClick = (menu) => {
    setOpenMenu((prevMenu) => (prevMenu === menu ? null : menu));
    setOpenSubMenu(null);
  };

  const handleSubMenuClick = (subMenu) => {
    setOpenSubMenu((prevSubMenu) => (prevSubMenu === subMenu ? null : subMenu));
  };

  return (
    <NavigationBarContainer>
      <MainMenu>
        <Link to="/">
          <img src="/logo_taelim.png" />
        </Link>
        <MenuItem isOpen={openMenu === "product"} onClick={() => handleMenuClick("product")}>
          Products
        </MenuItem>

        <SubMenu
          isVisible={openMenu === "product"}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          subMenus={[
            {
              id: "product-1",
              title: "연기감지 방화댐퍼(S.F.D)",
              image: "/assets/SFD.jpg",
              items: [
                { title: "연기감지 방화댐퍼(S.F.D)", image: "/assets/SFD.jpg" },
                { title: "Damper Motor", image: "/assets/Damper Motor.png" },
              ],
            },
            {
              id: "product-2",
              title: "Diffusers",
              image: "/assets/Diffusers/Accel Flow Diffuser.png",
              items: [
                { title: "Accel Flow Diffuser", image: "/assets/Diffusers/Accel Flow Diffuser.png" },
                { title: "Square Diffuser", image: "/assets/Diffusers/Square Diffuser.png" },
                { title: "Sqaure Ceiling Diffuser", image: "/assets/Diffusers/Square Ceiling Diffuser.png" },
                { title: "Square Round Diffuser", image: "/assets/Diffusers/Square Round Diffuser.png" },
                { title: "Square Pan Diffuser", image: "/assets/Diffusers/Square Pan Diffuser.png" },
                { title: "Square & Round Pan Diffuser", image: "/assets/Diffusers/Square & Round Pan Diffuser.png" },
                { title: "Round Diffuser", image: "/assets/Diffusers/Round Diffuser.png" },
                { title: "Round Pan Diffuser", image: "/assets/Diffusers/Round Pan Diffuser.png" },
                { title: "Variable Auto Diffuser", image: "/assets/Diffusers/Variable Auto Diffuser.png" },
                { title: "Perforated", image: "/assets/Diffusers/Perforated.png" },
              ],
            },
            {
              id: "product-3",
              title: "Nozzle Diffusers",
              image: "/assets/NozzleDiffusers/DN.png",
              items: [
                { title: "Nozzle Diffuser DN", image: "assets/NozzleDiffusers/DN.png" },
                { title: "Jet Nozzle Diffuser Type DUK", image: "assets/NozzleDiffusers/DUK.png" },
                { title: "Nozzle Diffuser PK", image: "assets/NozzleDiffusers/PK.png" },
                { title: "Drum Louver Nozzle Diffuser", image: "assets/NozzleDiffusers/DLND.png" },
              ],
            },
            {
              id: "product-4",
              title: "Linear Diffusers",
              image: "/assets/LinearDiffuser/Tline.png",
              items: [
                { title: "T Line Diffuser", image: "/assets/LinearDiffuser/Tline.png" },
                { title: "Brezze Line Diffuser", image: "/assets/LinearDiffuser/Bline.png" },
                { title: "Calm Line Diffuser", image: "/assets/LinearDiffuser/Cline.png" },
              ],
            },
            {
              id: "product-5",
              title: "Air bar & Chamber",
              image: "/assets/Airbar/Airbar.png",
              items: [
                { title: "Air bar", image: "/assets/Airbar/Airbar.png" },
                { title: "Chamber", image: "/assets/Airbar/Chamber.png" },
              ],
            },
            {
              id: "product-6",
              title: "Sound Attenuators",
              image: "/assets/SoundAttenuators/Duct silencer.png",
              items: [
                { title: "Duct Silencer", image: "/assets/SoundAttenuators/Duct silencer.png" },
                { title: "Sound Elbow", image: "/assets/SoundAttenuators/Sound Elbow.png" },
                { title: "Sound Chamber", image: "/assets/SoundAttenuators/Sound Chamber.png" },
                { title: "Plenum Box", image: "/assets/SoundAttenuators/Plenum Box.png" },
                { title: "Fan Coil Unit Sound Chamber", image: "/assets/SoundAttenuators/Fan Coil Unit.png" },
              ],
            },
            {
              id: "product-7",
              title: "Grille & Louver",
              image: "/assets/Grille&Louver/Grille.png",
              items: [
                { title: "Grille", image: "/assets/Grille&Louver/Grille.png" },
                { title: "Register", image: "/assets/Grille&Louver/Register.png" },
                { title: "Louver", image: "/assets/Grille&Louver/Lover.png" },
              ],
            },
            {
              id: "product-8",
              title: "Damper & Accessories",
              image: "/assets/DamperAcc/AirTight1.png",
              items: [
                { title: "Air Tight Damper-01", image: "/assets/DamperAcc/AirTight1.png" },
                { title: "Air Tight Damper-FP", image: "/assets/DamperAcc/AirTightFP.png" },
                { title: "Back Draft Damper", image: "/assets/DamperAcc/BackDraftDamper.png" },
                { title: "Volume Control Damper", image: "/assets/DamperAcc/VolumeControl.png" },
                { title: "FireDamper", image: "/assets/DamperAcc/FireDamper.png" },
                { title: "Round Volume Damper", image: "/assets/DamperAcc/RoundVolumeDamper.png" },
                { title: "Fire Volume Damper", image: "/assets/DamperAcc/FireVolumeDamper.png" },
                { title: "Piston Releasor Damper", image: "/assets/DamperAcc/PistonDamper.png" },
                { title: "Curtain Fire Damper", image: "/assets/DamperAcc/CurtainFireDamper.png" },
                { title: "Splitter Damper", image: "/assets/DamperAcc/SplitterDamper.png" },
                { title: "Turning Vanes", image: "/assets/DamperAcc/TurningVanes.png" },
              ],
            },
            {
              id: "product-9",
              title: "특수 Diffusers",
              image: "/assets/SpecialDiffusers/StaircaseSwirl.png",
              items: [
                { title: "Jet Slot Nozzle Diffuser", image: "/assets/SpecialDiffusers/JetSlotDiffuser.png" },
                { title: "Auto Line Nozzle Diffuser", image: "/assets/SpecialDiffusers/AutoLineDiffuser.png" },
                {
                  title: "Adjustable Swirl Diffuser",
                  subtitle: "가변선회 취출구",
                  image: "/assets/SpecialDiffusers/AdjustableSwirl.png",
                },
                {
                  title: "Auto Nozzle Diffuser",
                  subtitle: "수평형 / 수직형",
                  image: "/assets/SpecialDiffusers/AutoNozzleDiffuser.png",
                },
                {
                  title: "Floortec Supply Air Terminals",
                  subtitle: "저속치환 압출형취출구 /산업용",
                  image: "/assets/SpecialDiffusers/FloortecAirTerminals.png",
                },
                {
                  title: "Swirl Diffuser(Type TLF)",
                  subtitle: "선회취출구",
                  image: "/assets/SpecialDiffusers/SwirlDiffuser.png",
                },
                {
                  title: "Staircase Swirl Diffusers",
                  subtitle: "계단선회디퓨저(SD타입)",
                  image: "/assets/SpecialDiffusers/StaircaseSwirl.png",
                },
                {
                  title: "Floortec Swirl Diffuser",
                  subtitle: "바닥선회취출구",
                  image: "/assets/SpecialDiffusers/FloortecSwirl.png",
                },
                { title: "알루미늄 그릴/ 알루미늄 선형그릴", image: "/assets/SpecialDiffusers/grille.png" },
                {
                  title: "Pressure Safety Damper",
                  subtitle: "피압구",
                  image: "/assets/SpecialDiffusers/PressureSafety.png",
                },
              ],
            },
          ]}
          onSubMenuClick={handleSubMenuClick}
          openSubMenu={openSubMenu}
        />

        <MenuItem isOpen={openMenu === "company"} onClick={() => handleMenuClick("company")}>
          회사 소개
        </MenuItem>
        <SubMenu
          isVisible={openMenu === "company"}
          subMenus={[
            { id: "company-1", title: "CEO 인사" },
            { id: "company-2", title: "연혁" },
            { id: "company-3", title: "특허 등 산업재산권" },
            { id: "company-4", title: "납품실적" },
            { id: "company-5", title: "오시는길" },
          ]}
        />

        <MenuItem isOpen={openMenu === "contact"} onClick={() => handleMenuClick("contact")}>
          고객 지원
        </MenuItem>
      </MainMenu>
    </NavigationBarContainer>
  );
};

export default Navigationbar;
