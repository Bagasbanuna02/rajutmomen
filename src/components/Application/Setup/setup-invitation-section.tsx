/* eslint-disable @typescript-eslint/no-unused-vars */
import { BoxNested } from "@/components/ShareComponents";
import { COLOR } from "@/constants/color-palet";
import {
  Paper,
  Box,
  Stack,
  TextInput,
  SimpleGrid,
  Group,
  Alert,
  Button,
  Anchor,
  Text,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { IconCheck, IconX, IconInfoCircle } from "@tabler/icons-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SetupInvitationSection() {
  const router = useRouter();
  const [linkStatus, setLinkStatus] = useState<
    "available" | "unavailable" | "checking" | null
  >(null);

  const form = useForm({
    initialValues: {
      title: "",
      slug: "",
      language: "id",
    },
    // validate: {
    //   title: (value) => (value.length < 3 ? "Judul minimal 3 karakter" : null),
    //   slug: (value) => {
    //     if (value.length < 3) return "Link minimal 3 karakter";
    //     if (!/^[a-z0-9-]+$/.test(value))
    //       return "Hanya boleh huruf kecil, angka, dan tanda hubung";
    //     return null;
    //   },
    // },
  });

  const checkLinkAvailability = (slug: string) => {
    if (slug.length < 3) {
      setLinkStatus(null);
      return;
    }

    setLinkStatus("checking");

    // Simulate API call
    setTimeout(() => {
      // For demo purposes, make some slugs unavailable
      const unavailableLinks = ["bagas-nita", "ahmad-siti", "wedding", "nikah"];
      if (unavailableLinks.includes(slug.toLowerCase())) {
        setLinkStatus("unavailable");
      } else {
        setLinkStatus("available");
      }
    }, 1000);
  };

  const handleSlugChange = (value: string) => {
    const cleanSlug = value.toLowerCase().replace(/[^a-z0-9-]/g, "");
    form.setFieldValue("slug", cleanSlug);
    checkLinkAvailability(cleanSlug);
  };

  const handleSubmit = (values: typeof form.values) => {
    // if (linkStatus !== "available") {
    //   return;
    // }

    console.log("Setup invitation:", values);
    // Handle invitation setup
    router.push("/panel/dashboard");
  };

  const handleLogout = () => {
    router.push("/login");
  };

  return (
    <>
      <BoxNested>
        <Box mb={30}>
          <Text size="lg" fw={600} c={COLOR.black} mb={5}>
            Hi, Bagas Nusantara Nabillah
          </Text>
          <Text size="sm" c={COLOR.black}>
            Buat undanganmu sekarang dengan mudah. Lengkapi data berikut !
          </Text>
        </Box>

        <form onSubmit={form.onSubmit(handleSubmit)}>
          <Stack gap="lg">
            <TextInput
              label="Judul Undangan"
              placeholder="Bagas & Nita"
              // required
              {...form.getInputProps("title")}
              styles={{
                label: { color: COLOR.black, fontWeight: 500 },
              }}
            />

            <Box>
              <Text size="sm" fw={500} c={COLOR.black} mb={5}>
                Link Undangan{" "}
                <Text span c="red">
                  *
                </Text>
              </Text>
              <Text size="xs" c="red" mb={8}>
                Link bersifat permanen & tidak bisa diganti. Jangan asal mengisi
                data!
              </Text>

              <SimpleGrid
                cols={{ base: 1, sm: 2 }}
                spacing={0}
                style={{
                  backgroundColor: COLOR.textInputBackground,
                  border: `1px solid ${COLOR.textInputBorder}`,
                  borderRadius: "4px",
                  // padding: "5px 12px",
                  fontSize: "14px",
                }}
              >
                <Box
                  style={{
                    backgroundColor: "#ced4da",
                    fontWeight: "bold",
                    alignContent: "center",
                    textAlign: "center",
                    padding: "8px",
                    color: "#6c757d",
                  }}
                >
                  https://rajutmomen.com/
                </Box>
                <TextInput
                  styles={{
                    input: {
                      background: "transparent",
                      border: "none",
                      outline: "none",
                    },
                  }}
                  placeholder="bagas-nita"
                  // required
                  {...form.getInputProps("slug")}
                />
              </SimpleGrid>

              {linkStatus === "checking" && (
                <Text size="xs" c="blue" mt={5}>
                  Mengecek ketersediaan link...
                </Text>
              )}

              {linkStatus === "available" && (
                <Group gap={4} mt={5}>
                  <IconCheck size={14} color="green" />
                  <Text size="xs" c="green">
                    Link tersedia!
                  </Text>
                </Group>
              )}

              {linkStatus === "unavailable" && (
                <Group gap={4} mt={5}>
                  <IconX size={14} color="red" />
                  <Text size="xs" c="red">
                    Tidak tersedia atau sudah digunakan!
                  </Text>
                </Group>
              )}
            </Box>

            {/* <Select
                label="Bahasa dalam Undangan"
                // required
                data={[
                  { value: "id", label: "Bahasa Indonesia" },
                  { value: "en", label: "English" },
                  { value: "jv", label: "Bahasa Jawa" },
                  { value: "sd", label: "Bahasa Sunda" },
                ]}
                {...form.getInputProps("language")}
                styles={{
                  label: { color: COLOR.black, fontWeight: 500 },
                }}
              /> */}

            <Alert
              icon={<IconInfoCircle size={16} />}
              color="blue"
              variant="light"
              mt="md"
            >
              <Text size="sm">
                Pastikan semua data sudah benar sebelum melanjutkan. Link
                undangan tidak dapat diubah setelah disimpan.
              </Text>
            </Alert>

            <Button
              type="submit"
              fullWidth
              mt="xl"
              radius="md"
              style={{ backgroundColor: COLOR.pink }}
              size="md"
              // disabled={
              //   linkStatus !== "available" ||
              //   !form.values.title ||
              //   !form.values.slug
              // }
            >
              Simpan & Lanjutkan
            </Button>

            <Box ta="center">
              <Anchor
                size="sm"
                c="red"
                onClick={handleLogout}
                style={{ cursor: "pointer" }}
              >
                Logout
              </Anchor>
            </Box>
          </Stack>
        </form>
      </BoxNested>
    </>
  );
}
