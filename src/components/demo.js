import React, { useState } from "react";
import { AppBar, Toolbar, Button, Box } from "@mui/material";
import { styled } from "@mui/system";
import ProductMenuItems from "./ProductMenuItems";

const NavigationBar = () => {
  const [productMenuOpen, setProductMenuOpen] = useState(false);
  const [supportMenuOpen, setSupportMenuOpen] = useState(false);
  const [subMenuOpen, setSubMenuOpen] = useState(null);
  const [subMenuVisible, setSubMenuVisible] = useState(false);

  const handleMouseEnter = (menu) => {
    if (menu === "product") {
      setProductMenuOpen(true);
    } else if (menu === "company") {
      setSupportMenuOpen(true);
    }
  };

  const handleMouseLeave = (menu) => {
    if (menu === "product") {
      setProductMenuOpen(false);
    } else if (menu === "company") {
      setSupportMenuOpen(false);
    }
  };

  const handleSubMenuMouseEnter = (index) => {
    setSubMenuOpen(index);
    setSubMenuVisible(true);
  };

  const handleSubMenuMouseLeave = () => {
    setSubMenuOpen(null);
    setSubMenuVisible(false);
  };

  return (
    <CustomAppBar position="static">
      <CustomToolbar>
        {/* 로고 */}
        <img src="/logo_taelim.png" alt="logo" className="logo" />

        {/* 메뉴 버튼 */}

        {/* 드롭다운 메뉴 - 회사 소개 */}
        <div
          onMouseEnter={() => handleMouseEnter("company")}
          onMouseLeave={() => handleMouseLeave("company")}
          style={{ position: "relative" }}
        >
          <CustomButton>회사 소개</CustomButton>
          {supportMenuOpen && (
            <DropdownContainer>
              <DropdownItem>CEO 인사</DropdownItem>
              <DropdownItem>연혁</DropdownItem>
              <DropdownItem>특허 등 산업재산권</DropdownItem>
              <DropdownItem>납품실적</DropdownItem>
              <DropdownItem>오시는길</DropdownItem>
            </DropdownContainer>
          )}
        </div>

        {/* 드롭다운 메뉴 - 제품 소개 */}
        <div
          onMouseEnter={() => handleMouseEnter("product")}
          onMouseLeave={() => handleMouseLeave("product")}
          style={{ position: "relative" }}
        >
          <CustomButton>제품 소개</CustomButton>

          {productMenuOpen && (
            <DropdownContainer>
              <DropdownItem onMouseEnter={() => handleSubMenuMouseEnter(0)} onMouseLeave={handleSubMenuMouseLeave}>
                <img src="/assets/SFD.jpg" alt="SFD" className="image" />
                <span>연기감지 방화댐퍼(S.F.D)</span>

                {subMenuOpen === 0 && (
                  <SubDropdownContainer visible={subMenuOpen === 0}>
                    <SubDropdownItem>
                      <img src="/assets/SFD.jpg" alt="SFD" className="sub-image" />
                      <span>연기감지 방화댐퍼(S.F.D)</span>
                    </SubDropdownItem>
                    <SubDropdownItem>
                      <img src="/assets/Damper Motor.png" alt="damper motor" className="sub-image" />
                      <span>Damper Motor</span>
                    </SubDropdownItem>
                  </SubDropdownContainer>
                )}
              </DropdownItem>

              {/* <div>
                {productMenuOpen &&
                  ProductMenuItems.map((item) => (
                    <DropdownContainer key={item.index}>
                      <DropdownItem
                        index={item.index}
                        imageSrc={item.imageSrc}
                        title={item.title}
                        onMouseEnter={() => handleSubMenuMouseEnter(item.index)}
                        onMouseLeave={handleSubMenuMouseLeave}
                      />
                      {subMenuOpen === item.index && (
                        <SubDropdownContainer>
                          {item.subMenuItems.map((subItem, idx) => (
                            <SubDropdownItem key={idx}>
                              <img src={subItem.image} className="sub-image" />
                              <span>{subItem.title}</span>
                            </SubDropdownItem>
                          ))}
                        </SubDropdownContainer>
                      )}
                    </DropdownContainer>
                  ))}
              </div> */}

              <DropdownItem onMouseEnter={() => handleSubMenuMouseEnter(1)} onMouseLeave={handleSubMenuMouseLeave}>
                <img src="/assets/Diffusers/Accel Flow Diffuser.png" alt="Diffuser" className="image" />
                <span>Diffusers</span>
                {subMenuOpen === 1 && (
                  <SubDropdownContainer visible={subMenuVisible ? "visible" : ""}>
                    <SubDropdownItem>
                      <img src="/assets/Diffusers/Accel Flow Diffuser.png" alt="AFDiffuser" className="sub-image" />
                      <span>Accel Flow Diffuser</span>
                    </SubDropdownItem>
                    <SubDropdownItem>
                      <img src="/assets/Diffusers/Square Diffuser.png" alt="SDiffuser" className="sub-image" />
                      <span>Square Diffuser</span>
                    </SubDropdownItem>
                    <SubDropdownItem>
                      <img src="/assets/Diffusers/Square Ceiling Diffuser.png" alt="SCDiffuser" className="sub-image" />
                      <span>Sqaure Ceiling Diffuser</span>
                    </SubDropdownItem>
                    <SubDropdownItem>
                      <img src="/assets/Diffusers/Square Round Diffuser.png" alt="SRDiffuser" className="sub-image" />
                      <span>Square Round Diffuser</span>
                    </SubDropdownItem>
                    <SubDropdownItem>
                      <img src="/assets/Diffusers/Square Pan Diffuser.png" alt="SPDiffuser" className="sub-image" />
                      <span>Square Pan Diffuser</span>
                    </SubDropdownItem>
                    <SubDropdownItem>
                      <img
                        src="/assets/Diffusers/Square & Round Pan Diffuser.png"
                        alt="SRPDiffuser"
                        className="sub-image"
                      />
                      <span>Square & Round Pan Diffuser</span>
                    </SubDropdownItem>
                    <SubDropdownItem>
                      <img src="/assets/Diffusers/Round Diffuser.png" alt="RDiffuser" className="sub-image" />
                      <span>Round Diffuser</span>
                    </SubDropdownItem>
                    <SubDropdownItem>
                      <img src="/assets/Diffusers/Round Pan Diffuser.png" alt="RPDiffuser" className="sub-image" />
                      <span>Round Pan Diffuser</span>
                    </SubDropdownItem>
                    <SubDropdownItem>
                      <img src="/assets/Diffusers/Variable Auto Diffuser.png" alt="VADiffuser" className="sub-image" />
                      <span>Variable Auto Diffuser</span>
                    </SubDropdownItem>
                    <SubDropdownItem>
                      <img src="/assets/Diffusers/Perforated.png" alt="perforated" className="sub-image" />
                      <span>Perforated</span>
                    </SubDropdownItem>
                  </SubDropdownContainer>
                )}
              </DropdownItem>

              <DropdownItem onMouseEnter={() => handleSubMenuMouseEnter(2)} onMouseLeave={handleSubMenuMouseLeave}>
                <img src="/assets/NozzleDiffusers/DN.png" alt="DN" className="image" />
                <span>Nozzle Diffusers</span>
                {subMenuOpen === 2 && (
                  <SubDropdownContainer visible={subMenuVisible ? "visible" : ""}>
                    <SubDropdownItem>
                      <img src="assets/NozzleDiffusers/DN.png" alt="DN" className="sub-image" />
                      <span>Nozzle Diffuser DN</span>
                    </SubDropdownItem>
                    <SubDropdownItem>
                      <img src="assets/NozzleDiffusers/DUK.png" alt="DUK" className="sub-image" />
                      <span>Jet Nozzle Diffuser Type DUK</span>
                    </SubDropdownItem>
                    <SubDropdownItem>
                      <img src="assets/NozzleDiffusers/PK.png" alt="PK" className="sub-image" />
                      <span>Nozzle Diffuser PK</span>
                    </SubDropdownItem>
                    <SubDropdownItem>
                      <img src="assets/NozzleDiffusers/DLND.png" alt="DLND" className="sub-image" />
                      <span>Drum Louver Nozzle Diffuser</span>
                    </SubDropdownItem>
                  </SubDropdownContainer>
                )}
              </DropdownItem>

              <DropdownItem onMouseEnter={() => handleSubMenuMouseEnter(3)} onMouseLeave={handleSubMenuMouseLeave}>
                <img src="/assets/LinearDiffuser/Tline.png" alt="T" className="image" />
                <span>Linear Diffusers</span>
                {subMenuOpen === 3 && (
                  <SubDropdownContainer visible={subMenuVisible ? "visible" : ""}>
                    <SubDropdownItem>
                      <img src="/assets/LinearDiffuser/Tline.png" alt="T" className="sub-image" />
                      <span>T Line Diffuser</span>
                    </SubDropdownItem>
                    <SubDropdownItem>
                      <img src="/assets/LinearDiffuser/Bline.png" alt="B" className="sub-image" />
                      <span>Brezze Line Diffuser</span>
                    </SubDropdownItem>
                    <SubDropdownItem>
                      <img src="/assets/LinearDiffuser/Cline.png" alt="C" className="sub-image" />
                      <span>Calm Line Diffuser</span>
                    </SubDropdownItem>
                  </SubDropdownContainer>
                )}
              </DropdownItem>

              <DropdownItem onMouseEnter={() => handleSubMenuMouseEnter(4)} onMouseLeave={handleSubMenuMouseLeave}>
                <img src="/assets/Airbar/Airbar.png" alt="airbar" className="image" />
                <span>Air bar & Chamber</span>
                {subMenuOpen === 4 && (
                  <SubDropdownContainer visible={subMenuVisible ? "visible" : ""}>
                    <SubDropdownItem>
                      <img src="/assets/Airbar/Airbar.png" alt="airbar" className="sub-image" />
                      <span>Air bar</span>
                    </SubDropdownItem>
                    <SubDropdownItem>
                      <img src="/assets/Airbar/Chamber.png" alt="chamber" className="sub-image" />
                      <span>Chamber</span>
                    </SubDropdownItem>
                  </SubDropdownContainer>
                )}
              </DropdownItem>

              <DropdownItem onMouseEnter={() => handleSubMenuMouseEnter(5)} onMouseLeave={handleSubMenuMouseLeave}>
                <img src="/assets/SoundAttenuators/Duct silencer.png" alt="duct" className="image" />
                <span>Sound Attenuators</span>
                {subMenuOpen === 5 && (
                  <SubDropdownContainer visible={subMenuVisible ? "visible" : ""}>
                    <SubDropdownItem>
                      <img src="/assets/SoundAttenuators/Duct silencer.png" alt="duct" className="sub-image" />
                      <span>Duct Silencer</span>
                    </SubDropdownItem>
                    <SubDropdownItem>
                      <img src="/assets/SoundAttenuators/Sound Elbow.png" alt="soundElbow" className="sub-image" />
                      <span>Sound Elbow</span>
                    </SubDropdownItem>
                    <SubDropdownItem>
                      <img src="/assets/SoundAttenuators/Sound Chamber.png" alt="soundChamber" className="sub-image" />
                      <span>Sound Chamber</span>
                    </SubDropdownItem>
                    <SubDropdownItem>
                      <img src="/assets/SoundAttenuators/Plenum Box.png" alt="plenumBox" className="sub-image" />
                      <span>Plenum Box</span>
                    </SubDropdownItem>
                    <SubDropdownItem>
                      <img src="/assets/SoundAttenuators/Fan Coil Unit.png" alt="fanCoil" className="sub-image" />
                      <span>Fan Coil Unit Sound Chamber</span>
                    </SubDropdownItem>
                  </SubDropdownContainer>
                )}
              </DropdownItem>

              <DropdownItem onMouseEnter={() => handleSubMenuMouseEnter(6)} onMouseLeave={handleSubMenuMouseLeave}>
                <img src="/assets/Grille&Louver/Grille.png" alt="grille" className="image" />
                <span>Grille & Louver</span>
                {subMenuOpen === 6 && (
                  <SubDropdownContainer visible={subMenuVisible ? "visible" : ""}>
                    <SubDropdownItem>
                      <img src="/assets/Grille&Louver/Grille.png" alt="grille" className="sub-image" />
                      <span>Grille</span>
                    </SubDropdownItem>
                    <SubDropdownItem>
                      <img src="/assets/Grille&Louver/Register.png" alt="register" className="sub-image" />
                      <span>Register</span>
                    </SubDropdownItem>
                    <SubDropdownItem>
                      <img src="/assets/Grille&Louver/Lover.png" alt="lover" className="sub-image" />
                      <span>Louver</span>
                    </SubDropdownItem>
                  </SubDropdownContainer>
                )}
              </DropdownItem>

              <DropdownItem onMouseEnter={() => handleSubMenuMouseEnter(7)} onMouseLeave={handleSubMenuMouseLeave}>
                <img src="/assets/DamperAcc/AirTight1.png" alt="airTight1" className="image" />
                <span>Damper & Accessories</span>
                {subMenuOpen === 7 && (
                  <SubDropdownContainer visible={subMenuVisible ? "visible" : ""}>
                    <SubDropdownItem>
                      <img src="/assets/DamperAcc/AirTight1.png" alt="airTight1" className="sub-image" />
                      <span>Air Tight Damper-01</span>
                    </SubDropdownItem>
                    <SubDropdownItem>
                      <img src="/assets/DamperAcc/AirTightFP.png" alt="airTightFP" className="sub-image" />
                      <span>Air Tight Damper-FP</span>
                    </SubDropdownItem>
                    <SubDropdownItem>
                      <img src="/assets/DamperAcc/BackDraftDamper.png" alt="backDraftDamper" className="sub-image" />
                      <span>Back Draft Damper</span>
                    </SubDropdownItem>
                    <SubDropdownItem>
                      <img src="/assets/DamperAcc/VolumeControl.png" alt="volumeControl" className="sub-image" />
                      <span>Volume Control Damper</span>
                    </SubDropdownItem>
                    <SubDropdownItem>
                      <img src="/assets/DamperAcc/FireDamper.png" alt="FireDamper" className="sub-image" />
                      <span>FireDamper</span>
                    </SubDropdownItem>
                    <SubDropdownItem>
                      <img
                        src="/assets/DamperAcc/RoundVolumeDamper.png"
                        alt="roundVolumeDamper"
                        className="sub-image"
                      />
                      <span>Round Volume Damper</span>
                    </SubDropdownItem>
                    <SubDropdownItem>
                      <img src="/assets/DamperAcc/FireVolumeDamper.png" alt="fireVolumeDamper" className="sub-image" />
                      <span>Fire Volume Damper</span>
                    </SubDropdownItem>
                    <SubDropdownItem>
                      <img src="/assets/DamperAcc/PistonDamper.png" alt="pistonDamper" className="sub-image" />
                      <span>Piston Releasor Damper</span>
                    </SubDropdownItem>
                    <SubDropdownItem>
                      <img src="/assets/DamperAcc/CurtainFireDamper.png" alt="curtainDamper" className="sub-image" />
                      <span>Curtain Fire Damper</span>
                    </SubDropdownItem>
                    <SubDropdownItem>
                      <img src="/assets/DamperAcc/SplitterDamper.png" alt="splitterDamper" className="sub-image" />
                      <span>Splitter Damper</span>
                    </SubDropdownItem>
                    <SubDropdownItem>
                      <img src="/assets/DamperAcc/TurningVanes.png" alt="turningVanes" className="sub-image" />
                      <span>Turning Vanes</span>
                    </SubDropdownItem>
                  </SubDropdownContainer>
                )}
              </DropdownItem>

              <DropdownItem onMouseEnter={() => handleSubMenuMouseEnter(8)} onMouseLeave={handleSubMenuMouseLeave}>
                <img src="/assets/SpecialDiffusers/StaircaseSwirl.png" alt="staircaseSwirl" className="image" />
                <span>특수 Diffusers</span>
                {subMenuOpen === 8 && (
                  <SubDropdownContainer visible={subMenuVisible ? "visible" : ""}>
                    <SubDropdownItem>
                      <img src="/assets/SpecialDiffusers/JetSlotDiffuser.png" alt="jetSlot" className="sub-image" />
                      <span>Jet Slot Nozzle Diffuser</span>
                    </SubDropdownItem>
                    <SubDropdownItem>
                      <img src="/assets/SpecialDiffusers/AutoLineDiffuser.png" alt="autoline" className="sub-image" />
                      <span>Auto Line Nozzle Diffuser</span>
                    </SubDropdownItem>
                    <SubDropdownItem>
                      <img src="/assets/SpecialDiffusers/AdjustableSwirl.png" alt="adjustable" className="sub-image" />
                      <span>Adjustable Swirl Diffuser</span>
                      <span>가변선회 취출구</span>
                    </SubDropdownItem>
                    <SubDropdownItem>
                      <img
                        src="/assets/SpecialDiffusers/AutoNozzleDiffuser.png"
                        alt="autoNozzle"
                        className="sub-image"
                      />
                      <span>Auto Nozzle Diffuser</span>
                      <span>수평형 / 수직형</span>
                    </SubDropdownItem>
                    <SubDropdownItem>
                      <img
                        src="/assets/SpecialDiffusers/FloortecAirTerminals.png"
                        alt="airterminals"
                        className="sub-image"
                      />
                      <span>Floortec Supply Air Terminals</span>
                      <span>저속치환 압출형취출구 /산업용</span>
                    </SubDropdownItem>
                    <SubDropdownItem>
                      <img src="/assets/SpecialDiffusers/SwirlDiffuser.png" alt="swirl" className="sub-image" />
                      <span>Swirl Diffuser(Type TLF)</span>
                      <span>선회취출구</span>
                    </SubDropdownItem>
                    <SubDropdownItem>
                      <img
                        src="/assets/SpecialDiffusers/StaircaseSwirl.png"
                        alt="staircaseSwirl"
                        className="sub-image"
                      />
                      <span>Staircase Swirl Diffusers</span>
                      <span>계단선회디퓨저(SD타입)</span>
                    </SubDropdownItem>
                    <SubDropdownItem>
                      <img src="/assets/SpecialDiffusers/FloortecSwirl.png" alt="FloortecSwirl" className="sub-image" />
                      <span>Floortec Swirl Diffuser</span>
                      <span>바닥선회취출구</span>
                    </SubDropdownItem>
                    <SubDropdownItem>
                      <img src="/assets/SpecialDiffusers/grille.png" alt="grille" className="sub-image" />
                      <span>알루미늄 그릴/ 알루미늄 선형그릴</span>
                    </SubDropdownItem>
                    <SubDropdownItem>
                      <img src="/assets/SpecialDiffusers/PressureSafety.png" alt="pressure" className="sub-image" />
                      <span>Pressure Safety Damper</span>
                      <span>피압구</span>
                    </SubDropdownItem>
                  </SubDropdownContainer>
                )}
              </DropdownItem>
            </DropdownContainer>
          )}
        </div>

        {/* 고객 지원 버튼 */}
        <CustomButton>고객 지원</CustomButton>
      </CustomToolbar>
    </CustomAppBar>
  );
};

// 💡 1. AppBar 스타일 수정
const CustomAppBar = styled(AppBar)({
  backgroundColor: "white",
  width: "100%",
  boxShadow: "none",
  display: "flex",
  justifyContent: "center",
  position: "relative",
});

// 💡 2. Toolbar 스타일 수정
const CustomToolbar = styled(Toolbar)({
  width: "100%",
  height: "90px",
  maxWidth: "1200px",
  margin: "0 auto",
  display: "flex",
  gap: "2rem",
  position: "relative",
});

// 💡 3. 버튼 스타일 수정
const CustomButton = styled(Button)({
  fontSize: "18px",
  color: "black",
  textTransform: "none",
  "&:hover": {
    color: "red", // 호버 시 색상 변경 (선택 사항)
  },
});

// 💡 4. 드롭다운 컨테이너
const DropdownContainer = styled(Box)({
  position: "absolute",
  top: "100%", // 버튼 아래에 드롭다운 위치
  left: "300%",
  transform: "translateX(-50%)",
  width: "1300px",
  backgroundColor: "white",
  border: "1px solid #e0e0e0",
  boxShadow: "0px 8px 16px rgba(0,0,0,0.1)",
  borderRadius: "4px",
  zIndex: 10,
  display: "flex",
  gap: "1rem",
  flexWrap: "wrap",
  boxSizing: "border-box",
  // position: "relative",
  overflow: "visible",
});

// 💡 5. 드롭다운 아이템 스타일
const DropdownItem = styled(Box)({
  position: "relative",
  padding: "10px 20px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  textAlign: "center",
  gap: "1rem",
  color: "black",
  fontSize: "14px",
  fontWeight: "600",
  cursor: "pointer",
  "&:hover": {
    backgroundColor: "#f0f0f0",
  },
  "& .image": {
    width: "200px",
    height: "120px",
    borderRadius: "4px",
    objectFit: "scale-down",
  },
});

// 💡 하위 드롭다운 스타일
const SubDropdownContainer = styled(Box)(({ visible }) => ({
  position: "absolute",
  top: "100%",
  left: "0",
  width: "1300px",
  backgroundColor: "white",
  border: "1px solid #e0e0e0",
  boxShadow: "0px 8px 16px rgba(0,0,0,0.1)",
  borderRadius: "4px",
  zIndex: 100,
  display: visible ? "flex" : "none",
  gap: "1rem",
  flexWrap: "wrap",
  boxSizing: "border-box",
  visibility: visible ? "visible" : "hidden",
  opacity: visible ? "1" : "0",
  transition: "opacity 0.3s ease",
  margin: "0 auto",
}));

const SubDropdownItem = styled(Box)({
  padding: "10px 20px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  textAlign: "center",
  gap: "1rem",
  color: "black",
  fontSize: "14px",
  fontWeight: "600",
  cursor: "pointer",
  "&:hover": {
    color: "red",
  },
  "& .sub-image": {
    width: "100px",
    height: "70px",
    borderRadius: "4px",
    objectFit: "scale-down",
  },
});

export default NavigationBar;
