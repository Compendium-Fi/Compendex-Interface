import MainHeader from "@/components/Header";
import MainLayout from "@/components/MainLayout";
import SEO from "@/components/SEO";
import NextNProgress from "nextjs-progressbar";
import { GlobalStyle } from "@/components/global_style";
import "@/styles/App.less";
import "@/styles/globals.css";
import { SSRProvider } from "@react-aria/ssr";
import type { AppProps } from "next/app";
import Head from "next/head";
import React, { useEffect, useState } from "react";
import {
  Button,
  Group,
  Modal,
  useMantineTheme,
  Text,
  Checkbox,
  ScrollArea,
  Center,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { getCookie, setCookie } from "cookies-next";
if (!process.browser) React.useLayoutEffect = React.useEffect;
export default function App({ Component, pageProps }: AppProps) {
  const { name, description, image } = pageProps;
  const [opened, { open, close }] = useDisclosure(false);
  const [checked, setChecked] = useState<boolean>(false);
  const theme = useMantineTheme();
  useEffect(() => {
    const acceptedTerms = getCookie("accepted");
    if (typeof window !== undefined && !acceptedTerms) {
      open();
    }
  }, []);
  const handleAcceptTerms = () => {
    if (checked) {
      setCookie("accepted", true);
      close();
    }
  };
  return (
    <SSRProvider>
      <SEO name={name} description={description} image={image} />
      <NextNProgress
        color="#29D"
        startPosition={0.3}
        stopDelayMs={200}
        height={3}
        showOnShallow={true}
      />
      <MainLayout>
        <Modal
          opened={opened}
          onClose={close}
          withOverlay
          withCloseButton={false}
          closeOnClickOutside={false}
          closeOnEscape={false}
          title="Disclaimer"
          yOffset="10vh"
          overlayProps={{
            color: theme.colors.dark[9],
            opacity: 0.55,
            blur: 3,
          }}
          styles={{
            root: {
              background: "#080f19 !important",
            },
            header: {
              background: "#080f19 !important",
            },
            body: { padding: 20 },

            content: {
              background: "#080f19 !important",
              border: "1px solid #132235 !important",
              borderRadius: "5px !important",
              width: "calc(100%-20px)",
              gap: 10,

              minWidth: "500px",

              minHeight: "700px",
            },
          }}
        >
          <ScrollArea
            h={500}
            style={{
              backgroundColor: "rgba(19,34,53,.5)",
              padding: 20,
              marginTop: 15,
              marginBottom: 15,
              borderRadius: 10,
            }}
          // styles={{
          //   viewport: {

          //   },
          //   corner: {
          //     backgroundColor: 'green'
          //   }
          // }}
          >
            <Text fz="md" my={5}>
              This website-hosted user interface (this "Interface") is an open
              source frontend software portal that interacts with several
              blockchain-enabled smart contracts and tools created by reputable
              third-parties and the Compendex community. This interface is made
              available by the Compendium Foundation and maintained through
              community contributions and the Compendium DAO. However, all
              transactions conducted are run by related permissionless smart
              contracts. As this interface is open-sourced and all smart
              contracts are accessible by any user, entity, or third-party,
              there may be a number of different applications or interfaces that
              interact or allow for interaction with the same third-party
              contracts or protocols specifically developed as the "Compendex
              Protocol".
            </Text>
            <Text fz={"md"} my={5}>
              This interface and related integrations are provided "AS IS", at
              your own risk, and without warranties of any kind. The Compendium
              Foundation does not provide, own, or control any of the
              blockchain-enabled smart contract integrations or transactions
              conducted through protocols or related smart contracts. By using
              or accessing this interface or related protocols and smart
              contracts, you agree that no developer or entity involved in
              creating, deploying, or maintaining this interface or related
              protocols will be liable for any claims or damages whatsoever
              associated with your use, inability to use, or your interaction
              with other users of, this interface or related protocols,
              including any direct, indirect, incidental, special, exemplary,
              punitive, or consequential damages, or loss of profits, digital
              assets, tokens, NFTs, or anything else that may be considered of
              value. This deployment of Compendex is not available to residents
              of Belarus, The Central African Republic, The Democratic Republic
              of Congo, The Democratic People's Republic of Korea, The Crimea,
              Donetsk People's Republic, and Luhansk People's Republic regions
              of Ukraine, Cuba, Iran, Libya, Somalia, Sudan, South Sudan, Syria,
              USA, Yemen, Zimbabwe, and any other jurisdiction in which
              accessing or using integrated protocols is or may be prohibited.
            </Text>
            <Text fz={"md"} my={5}>
              By using or accessing this Interface, you represent that you are
              not located in, incorporated, or established in, or a citizen or
              resident of the Prohibited Jurisdictions. You also represent that
              you are not subject to sanctions or otherwise designated on any
              list of prohibited or restricted parties or excluded or denied
              persons, including but not limited to the lists maintained by the
              United States' Department of Treasury's Office of Foreign Assets
              Control, the United Nations Security Council, the European Union
              or its Member States, or any other government authority.
            </Text>
          </ScrollArea>
          <Checkbox
            checked={checked}
            onChange={(event) => setChecked(event.currentTarget.checked)}
            label="I have read, understand, and accept these terms"
            styles={{ input: { border: "solid 1px #132235 !important" } }}
          />
          <Center>
            <Button
              w={"60%"}
              my={"md"}
              h={50}
              variant="gradient"
              gradient={{ from: "#7791e0", to: "#32cd99" }}
              styles={{
                label: { fontSize: 18, fontWeight: 400, fontFamily: "Poppins" },
              }}
              onClick={handleAcceptTerms}
            >
              Accept And Continue
            </Button>
          </Center>
        </Modal>

        <Head>
          <script src="/static/datafeeds/udf/dist/bundle.js" />
          <link rel="shortcut icon" href="/static/imgs/favicon.ico" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Montserrat&family=Poppins:wght@500&display=swap"
            rel="stylesheet"
          ></link>
        </Head>

        <GlobalStyle />
        <MainHeader />
        <Component {...pageProps} />
      </MainLayout>
    </SSRProvider>
  );
}
