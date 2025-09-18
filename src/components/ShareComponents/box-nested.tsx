import { MantineStyleProp, Paper } from "@mantine/core";

export default function BoxNested({ children }: { children: React.ReactNode }) {
  return (
    <Paper
      w={{ base: "300px", xs: "380px", sm: "420px", md: "500px" }}
      shadow="xl"
      style={style}
    >
      {children}
    </Paper>
  );
}

const style: MantineStyleProp = {
  radius: "md",
  withBorder: true,
  backgroundColor: "#fff",
  transition: "all 0.5s ease",
  padding: "20px",
};
