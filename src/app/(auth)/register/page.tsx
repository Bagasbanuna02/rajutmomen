"use client";

import RegisterSection from "@/components/Authentication/register-section";
import {
    BaseBoxBackground,
    LogoAndBrandFooter,
    LogoAndBrandHeader,
} from "@/components/ShareComponents";
import { Stack } from "@mantine/core";

export default function Register() {
  return (
    <BaseBoxBackground>
      <Stack>
        <LogoAndBrandHeader />
        <RegisterSection />
        <LogoAndBrandFooter />
      </Stack>
    </BaseBoxBackground>
  );
}
