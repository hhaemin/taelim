import { border, keyframes, styled } from "@mui/system";

export const NavigationBarContainer = styled("div")({
  width: "1300px",
  backgroundColor: "#fff",
  borderBottom: "1px solid #ddd",
  display: "flex",
  margin: "0 auto",
});

export const MainMenu = styled("div")({
  width: "1300px",
  display: "flex",
  justifyContent: "space-around",
  padding: "10px 20px",
  position: "relative",
  gap: "20px",
});

export const MenuItem = styled("div")(({ isOpen }) => ({
  padding: "10px 20px",
  cursor: "pointer",
  display: "block",
  backgroundColor: isOpen ? "#f0f0f0" : "#fff",
  borderRadius: "4px",
  position: "relative",
  "&:hover": {
    color: "red",
  },
}));

const dropdownAnimation = keyframes`
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const SubMenuContainer = styled("div")({
  display: "flex",
  flexWrap: "wrap",
  backgroundColor: "white",
  width: "100%",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  top: "100%",
  position: "absolute",
  animation: `${dropdownAnimation} 0.8s ease forwards`,
  zIndex: "10",
});

export const SubMenuItem = styled("div")({
  padding: "10px 20px",
  cursor: "pointer",
  // display: "flex",
  display: "inline-flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "10px",
  position: "relative",
  zIndex: "10",
  "&:hover": {
    color: "red",
    border: "1px solid red",
  },
  "& .image": {
    width: "200px",
    height: "120px",
    borderRadius: "4px",
    objectFit: "scale-down",
  },
  "& .sub-image": {
    width: "100px",
    height: "70px",
    borderRadius: "4px",
    objectFit: "scale-down",
  },
});

export const SubBelowMenu = styled("div")(({ isVisible }) => ({
  display: isVisible ? "block" : "none",
  flexWrap: "wrap",
  borderTop: "1px solid #ddd",
  width: "100%",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  position: "relative",
  zIndex: "10",
  // top: "100%",
  // left: 0,
  // position: "absolute",
  animation: `${dropdownAnimation} 0.8s ease forwards`,
}));
