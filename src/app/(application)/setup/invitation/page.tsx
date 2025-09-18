"use client"

import SetupInvitationSection from "@/components/Application/Setup/setup-invitation-section";
import { BaseBoxBackground, LogoAndBrandFooter, LogoAndBrandHeader } from "@/components/ShareComponents";
import { Stack } from "@mantine/core";

export default function InvitationSetup() {
    return <>
      <BaseBoxBackground>
          <Stack>
            <LogoAndBrandHeader />
            <SetupInvitationSection/>
            <LogoAndBrandFooter />
          </Stack>
        </BaseBoxBackground>
    
    </>
}