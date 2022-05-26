import Head from "next/head";
import { useRouter } from "next/router";
import Layout from "../components/Layout";
import Navbar from "../components/Navbar";
import useTranslation from "../hooks/useTranslation";

function About() {
  const { locale } = useRouter();
  const { t } = useTranslation(locale);

  return (
    <>
      <Head>
        <title>{t("about.title")}</title>
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      </Head>
      <Layout>
        <Navbar />

        <section className='hero'>
          <div className='container'>
            <div className='text-wrapper w-full'>
              <h1 className='title'>{t("about.title")}</h1>
              <p className='description'>{t("about.description")}</p>
              <hr></hr>
              <h1 className='title'>{t("about.experience")}</h1>
              <p>{t("about.experience.description")}</p>
              <hr />
              <h1 className='title'>{t("about.education")}</h1>
              <ul className='contact-links'>
                <li>
                  {" "}
                  <p>{t("about.education.description.1")}</p>
                </li>
                <li>
                  <p>{t("about.education.description.2")}</p>
                </li>
                <li>{t("about.education.description.3")}</li>
              </ul>
              <hr />
              <h1 className='title'>{t("about.Languages")}</h1>
              <ul>
                <li>{t("about.Languages.1")}</li>
                <li>{t("about.Languages.2")}</li>
                <li>{t("about.Languages.3")}</li>
              </ul>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}

export default About;
