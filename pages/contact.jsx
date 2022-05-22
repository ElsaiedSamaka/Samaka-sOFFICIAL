import Head from "next/head";
import { useRouter } from "next/router";
import Layout from "../components/Layout";
import Navbar from "../components/Navbar";
import useTranslation from "../hooks/useTranslation";

function Contact() {
  const { locale } = useRouter();
  const { t } = useTranslation(locale);
  return (
    <>
      <Head>
        <title>{t("contact.title")}</title>
      </Head>
      <Layout>
        <Navbar />

        <section className='hero'>
          <div className='container'>
            <div className='text-wrapper w-full'>
              <h1 className='title'>{t("contact.title")}</h1>
              <p className='description'>{t("contact.description")}</p>
              <ul className='contact-links'>
                <li className='contact-item'>
                  {t("contact.description.1")}:{" "}
                  <a href='mailto:loremiipsum99@gmail.com'>Said Samaka</a>{" "}
                </li>

                <li className='contact-item'>
                  {t("contact.description.2")}: +01150567130
                </li>
                <li className='contact-item'>
                  {t("contact.description.3")}:{" "}
                  <a href='https://www.linkedin.com/in/elsaied-samaka-513a0518b/'>
                    Saied Samka
                  </a>
                </li>
                <li className='contact-item'>
                  {t("contact.description.4")}:{" "}
                  <a href='https://github.com/ElsaiedSamaka'>THeRealSamaka</a>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}

export default Contact;
