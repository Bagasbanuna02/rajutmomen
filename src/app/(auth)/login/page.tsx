"use client";

import LoginSection from "@/components/Authentication/login-section";
import {
    BaseBoxBackground,
    LogoAndBrandFooter,
    LogoAndBrandHeader,
} from "@/components/ShareComponents";
import { Stack } from "@mantine/core";
import { useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter();

  return (
    <BaseBoxBackground>
      <Stack>
        <LogoAndBrandHeader />
        <LoginSection router={router} />
        <LogoAndBrandFooter />
      </Stack>
    </BaseBoxBackground>
  );
}
