import { COLOR } from "@/constants/color-palet";
import { Box, MantineStyleProp } from "@mantine/core";

export default function BaseBoxBackground({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Box style={style}>{children}</Box>;
}

const style: MantineStyleProp = {
  minHeight: "100vh",
  background: `linear-gradient(135deg, ${COLOR.pink} 0%, ${COLOR.pinkSoft} 100%)`,
  display: "flex",
  //   flex: 1,
  //   margin: "0px",
  padding: "40px 20px ",
  alignItems: "center",
  justifyContent: "center",
};
