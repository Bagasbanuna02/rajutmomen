"use client";

import {
  BaseBoxBackground,
  LogoAndBrandHeader,
  LogoAndBrandFooter,
} from "@/components/ShareComponents";
import { COLOR } from "@/constants/color-palet";
import { Button, Stack } from "@mantine/core";
import Link from "next/link";

export default function ResetPassword() {
  return (
    <BaseBoxBackground>
      <Stack>
        <LogoAndBrandHeader />
        <div>
          <h1>Reset Password</h1>
          <h1>Cooming Soon !</h1>
        </div>

        <Button bg={COLOR.pink} component={Link} href="/login">
          Kembali
        </Button>

        <LogoAndBrandFooter />
      </Stack>
    </BaseBoxBackground>
  );
}
