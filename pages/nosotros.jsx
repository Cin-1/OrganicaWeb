import React from "react";
import Navbar from "../components/ui/navbar";
import Footer from "../components/footer";

import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import LangSelector from "../components/langSelector";
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";

import { ThemeProvider } from "@material-ui/core/styles";
import { Box } from "@material-ui/core";
import theme from "../components/ui/theme";

const Nosotros = () => {

  const router = useRouter();
  const { t } = useTranslation("global");

  return (
    <ThemeProvider theme={theme}>
      <Box>
        <Navbar />
      </Box>
      <Box ml={5} mr={5}>
        <Box pt={10}>
          <Box>
            <p>{t("nosotros.title")}</p>
            <p>
              {t("nosotros.quote-text2")}
            </p>
            <p>{t("nosotros.quote")}</p>
          </Box>
        </Box>
        <Box>
          <p>
            “Somos una consultora de comunicación enfocada en orientar a las
            pequeñas, medianas y grandes organizaciones a gestionar un
            crecimiento planificado y responsable, adaptándonos a los recursos y
            necesidades que presente cada cliente. Nuestra metodología de
            trabajo implica crear intencionalmente algo valioso para la
            organización, los distintos públicos y la sociedad.
          </p>
          <p>
            Enfocados en el proceso creativo, elaboramos estrategias
            comunicacionales transdisciplinarias al tomar elementos de otras
            áreas tales como: Diseño Multimedia, Marketing, Relaciones Públicas
            y Empresariales, Oratoria y más, con la convicción de ofrecer
            soluciones orgánicas e integrales. “
          </p>
          <p>
            El desarrollo comunicacional en el mundo atraviesa todos los
            aspectos de la vida. Muchas veces nos quedamos en la mera ejecución
            por subirnos a la OLA comunicacional y en ese sentido se pierden los
            verdaderos aspectos esenciales a los que responde o pretende
            responder cualquier organización. Su esencia, sus conceptos, sus
            valores quedan desplazados por la necesidad de ejecutar acciones.
            Orgánica plantea en su transdisciplina la posibilidad de cubrir
            procesos de la realidad actual como así también las subjetividades y
            lo coyuntural de manera orgánica.{" "}
          </p>
        </Box>
      </Box>
      <Footer />
    </ThemeProvider>
  );
};

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["global"])),
  },
});

export default Nosotros;
