"use client";

import {
  FeatureSection,
  Footer,
  Header,
  HeroSection,
  PricingSection,
  RegistrationNowSection,
} from "@/components/LandingPage";
import { AppShell } from "@mantine/core";

export default function Home() {
  return (
    <>
      <AppShell header={{ height: 60 }}>
        <AppShell.Header>
          <Header />
        </AppShell.Header>
        <AppShell.Main
          style={{
            marginBottom: 60,
          }}
        >
          <HeroSection />
          <FeatureSection />
          <PricingSection />
          <RegistrationNowSection />
          <Footer />
        </AppShell.Main>
      </AppShell>
    </>
  );
}
