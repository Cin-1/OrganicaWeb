import React from "react";
import Image from "next/image";
import Link from "next/link";
import LangSelector from "../components/langSelector";
import theme from "../components/ui/theme";
import { makeStyles } from "@material-ui/core/styles";
import { Box } from "@material-ui/core";
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";

export default function Services() {
  const router = useRouter();
  const { t } = useTranslation("global");
  const classes = useStyles();

  return (
    <>
      <Box ml={5} mr={5} mb={7}>
        <Box align="center" mb={5}>
          <LangSelector />

          <h2 className={classes.titleh}> {t("landing.title")}</h2>
        </Box>
        <Box className={classes.columns}>
          <Link href="/servicios/marketing">
            <Box
              align="center"
              flex={0.25}
              mb={3}
              className={classes.pointerBox}
            >
              <Box className={classes.container}>
                <Image
                  src="/images/marketing2.png"
                  alt="organica"
                  width={150}
                  height={150}
                  objectFit="cover"
                  quality={100}
                />
              </Box>
              <Box>
                <h3 className={classes.subTitle}>Marketing / Multimedia</h3>
              </Box>
            </Box>
          </Link>
          <Link href="/servicios/interna">
            <Box
              align="center"
              flex={0.25}
              mb={3}
              className={classes.pointerBox}
            >
              <Box className={classes.container}>
                <Image
                  src="/images/interna2.png"
                  alt="organica"
                  width={150}
                  height={150}
                  objectFit="cover"
                  quality={100}
                />
              </Box>
              <Box>
                <h3 className={classes.subTitle}>{t("landing.two")}</h3>
              </Box>
            </Box>
          </Link>
          <Link href="/servicios/periodismo">
            <Box
              align="center"
              flex={0.25}
              mb={3}
              className={classes.pointerBox}
            >
              <Box className={classes.container}>
                <Image
                  src="/images/periodismo2.png"
                  alt="organica"
                  width={150}
                  height={150}
                  objectFit="cover"
                  quality={100}
                />
              </Box>
              <Box>
                <h3 className={classes.subTitle}>{t("services.three")}</h3>
                <h3 className={classes.subTitle}>al periodismo</h3>
              </Box>
            </Box>
          </Link>
          <Link href="/servicios/empresas">
            <Box
              align="center"
              flex={0.25}
              mb={3}
              className={classes.pointerBox}
            >
              <Box className={classes.container}>
                <Image
                  src="/images/empresas2.png"
                  alt="organica"
                  width={150}
                  height={150}
                  objectFit="cover"
                  quality={100}
                />
              </Box>
              <Box>
                <h3 className={classes.subTitle}>Comunicación entre</h3>
                <h3 className={classes.subTitle}>Empresas / Profesionales</h3>
              </Box>
            </Box>
          </Link>
        </Box>
        <Box className={classes.columns}>
          <Link href="/servicios/financiero">
            <Box
              align="center"
              flex={0.25}
              mb={3}
              className={classes.pointerBox}
            >
              <Box className={classes.container}>
                <Image
                  src="/images/financiero2.png"
                  alt="organica"
                  width={150}
                  height={150}
                  objectFit="cover"
                  quality={100}
                />
              </Box>
              <Box>
                <h3 className={classes.subTitle}>Comunicación</h3>
                <h3 className={classes.subTitle}>Ambito Financiero</h3>
              </Box>
            </Box>
          </Link>
          <Link href="/servicios/comunitarias">
            <Box
              align="center"
              flex={0.25}
              mb={3}
              className={classes.pointerBox}
            >
              <Box className={classes.container}>
                <Image
                  src="/images/comunitarias2.png"
                  alt="organica"
                  width={150}
                  height={150}
                  objectFit="cover"
                  quality={100}
                />
              </Box>
              <Box>
                <h3 className={classes.subTitle}>Relaciones Institucionales</h3>
                <h3 className={classes.subTitle}>y Comunitarias</h3>
              </Box>
            </Box>
          </Link>
          <Link href="/servicios/politica">
            <Box
              align="center"
              flex={0.25}
              mb={3}
              className={classes.pointerBox}
            >
              <Box className={classes.container}>
                <Image
                  src="/images/politica2.png"
                  alt="organica"
                  width={150}
                  height={150}
                  objectFit="cover"
                  quality={100}
                />
              </Box>
              <Box>
                <h3 className={classes.subTitle}>Relaciones Gubernamentales</h3>
                <h3 className={classes.subTitle}>(comunicación política)</h3>
              </Box>
            </Box>
          </Link>
          <Link href="/servicios/disenio">
            <Box
              align="center"
              flex={0.25}
              mb={3}
              className={classes.pointerBox}
            >
              <Box className={classes.container}>
                <Image
                  src="/images/marca2.png"
                  alt="organica"
                  width={150}
                  height={150}
                  objectFit="cover"
                  quality={100}
                />
              </Box>
              <Box>
                <h3 className={classes.subTitle}>Diseño</h3>
              </Box>
            </Box>
          </Link>
        </Box>
      </Box>
    </>
  );
}

const useStyles = makeStyles({
  titleh: {
    color: "rgb(99, 169, 142)",
    fontSize: "1.8rem",
  },
  columns: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",

    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  },
  pointerBox: {
    cursor: "pointer",
  },
  container: {
    "&:hover": {
      transform: "scale(1.1)",
      transition: ".2s",
    },
  },
  subTitle: {
    color: "#186356",
  },
});
