import { useState } from 'react';
import {
  AppShell,
  Navbar,
  Header,
  Footer,
  Aside,
  Text,
  MediaQuery,
  Burger,
  useMantineTheme,
  Button,
} from '@mantine/core';
import MainNavbar from './Structure/MainNavbar';
import MainSideBar from './Structure/MainSideBar';
import MainFooter from './Structure/MainFooter';
import MainHeader from './Structure/MainHeader';

export default function Structure({setMainTheme, mainTheme}) {
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);
  return (
    <AppShell
      styles={{
        main: {
          background: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
        },
      }}
      navbarOffsetBreakpoint="sm"
      asideOffsetBreakpoint="sm"
      navbar={
        <MainNavbar opened={opened} />
      }
      aside={
        <MainSideBar />
      }
      footer={
        <MainFooter />
      }
      header={
        <MainHeader opened={opened} setOpened={setOpened} theme={theme} setMainTheme={setMainTheme} mainTheme={mainTheme} />
      }
    >
      <Text>Resize app to see responsive navbar in action</Text>
    </AppShell>
  );
}