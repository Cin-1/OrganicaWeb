import Head from "next/head";
import Navbar from "../components/ui/navbar";
import Header from "../components/header"
import Services from "../components/services";
import Contact from "../components/contact";
import Footer from "../components/footer";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useRouter } from "next/router";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "../components/ui/theme";

function Home() {
  const router = useRouter();
  const { t } = useTranslation("global");
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>Orgánica</title>
        <link rel="icon" href="/images/logo.png" />
      </Head>
      <Navbar />
      <Header />
      <Services />
      <Contact />
      <Footer />
      {/*<p>
          <Link href="/ejemplo" locale={router.locale}>
            Ir a ejemplo
          </Link>
        </p> */}
    </ThemeProvider>
  );
}
export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["global"])),
  },
});

export default Home;
