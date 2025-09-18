import { MantineBreakpoint, Title } from "@mantine/core";

export default function Component_ApplicationTitle({
  title,
  visibleFrom,
  hiddenFrom,
}: {
  title: string;
  visibleFrom?: MantineBreakpoint;
  hiddenFrom?: MantineBreakpoint;
}) {
  return (
    <>
      <Title order={4} visibleFrom={visibleFrom} hiddenFrom={hiddenFrom}>
        {title}
      </Title>
    </>
  );
}
