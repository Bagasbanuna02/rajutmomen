/* eslint-disable @typescript-eslint/no-unused-vars */
import { COLOR } from "@/constants/color-palet";
import { Anchor, Box, Button, Divider, Group, Modal, PasswordInput, Stack, Text, TextInput, Title } from "@mantine/core";
import { useForm } from "@mantine/form";
import { useDisclosure } from "@mantine/hooks";
import { IconKey } from "@tabler/icons-react";
import Link from "next/link";
import { BoxNested } from "../ShareComponents";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

interface LoginSectionProps {
    router: AppRouterInstance;
}
export default function LoginSection({ router }: LoginSectionProps) {
  const [opened, { open, close }] = useDisclosure(false);
  const form = useForm({
    initialValues: {
      email: "",
      password: "",
    },
    // validate: {
    //   email: (value) => (/^\S+@\S+$/.test(value) ? null : "Email tidak valid"),
    //   password: (value) =>
    //     value.length < 6 ? "Password minimal 6 karakter" : null,
    // },
  });

  const nextPage = () => router.push("/setup/invitation");

  const handleSubmit = async (values: typeof form.values) => {
    // Handle login logic here
    // const response = await fetch("/api/auth/login", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(values),
    // });
    // const data = await response.json();
    // if (!response.ok) {
    //   notifications.show({
    //     // title: "Default notification",
    //     message: `${data.message}`,
    //     color: "red",
    //     position: "top-center",
    //   });
    //   return;
    // }
    // notifications.show({
    //   // title: "Default notification",
    //   message: `${data.message}`,
    //   color: "green",
    //   position: "top-center",
    // });
    nextPage();
  };

  const handleLoginWithCode = () => {
    console.log("Login with code");
    nextPage();
  };
  return (
    <>
      <BoxNested>
        <Title order={2} ta="center" mb={5}>
          Login
        </Title>

        <form onSubmit={form.onSubmit(handleSubmit)}>
          <Stack>
            <TextInput
              label="Email"
              // required
              {...form.getInputProps("email")}
            />

            <Box>
              <Group justify="space-between" mb={5}>
                <Text component="label" size="sm" fw={500}>
                  Password
                </Text>
                <Anchor component={Link} href="/reset-password" size="sm">
                  Lupa Password ?
                </Anchor>
              </Group>
              <PasswordInput
                // required
                {...form.getInputProps("password")}
              />
            </Box>

            <Button
              type="submit"
              fullWidth
              mt="md"
              radius="md"
              style={{ backgroundColor: COLOR.pink }}
              c={COLOR.white}
              size="md"
            >
              Sign In
            </Button>
          </Stack>
        </form>

        <Divider
          label="ATAU"
          labelPosition="center"
          my="lg"
          color={COLOR.black}
          styles={{ label: { color: COLOR.black } }}
        />

        <Stack>
          <Button
            variant="filled"
            color="dark"
            fullWidth
            leftSection={<IconKey size={16} />}
            radius="md"
            onClick={open}
          >
            Masuk dengan kode
          </Button>

          {/* <Button
              variant="default"
              fullWidth
              leftSection={<IconBrandGoogle size={16} />}
              radius="md"
              onClick={() => console.log("Login with Google")}
            >
              Masuk dengan Google
            </Button>

            <Button
              variant="default"
              fullWidth
              leftSection={<IconBrandApple size={16} />}
              radius="md"
              onClick={() => console.log("Login with Apple")}
            >
              Masuk dengan Apple
            </Button> */}

          <Button
            variant="subtle"
            fullWidth
            component={Link}
            href="/register"
            radius="md"
            c={COLOR.pink}
            mt="md"
          >
            Buat Akun Baru
          </Button>
        </Stack>
      </BoxNested>

      <Modal
        opened={opened}
        onClose={close}
        centered
        // title={"Login dengan kode akses"}
        // styles={{
        //   title: {
        //     fontWeight: "bold",

        //   },
        //   header: {
        //     borderBottom: "1px solid #ccc",
        //   }
        // }}
      >
        <Stack>
          <TextInput
            label={"Masukan Kode Akses"}
            styles={{
              label: {
                textAlign: "center",
                fontWeight: "bold",
                width: "100%",
              },
            }}
          />

          <Button
            type="submit"
            fullWidth
            mt="md"
            radius="md"
            style={{ backgroundColor: COLOR.pink }}
            c={COLOR.white}
            size="md"
            onClick={handleLoginWithCode}
          >
            Sign In
          </Button>
        </Stack>
      </Modal>
    </>
  );
}