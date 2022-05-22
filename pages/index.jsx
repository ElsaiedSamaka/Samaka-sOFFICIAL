import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import Layout from "../components/Layout";
import Navbar from "../components/Navbar";
import useTranslation from "../hooks/useTranslation";

function Home() {
  const { locale } = useRouter();
  const { t } = useTranslation(locale);
  return (
    <>
      <Head>
        <title>{t("home.title")}</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Layout>
        <Navbar />

        <section className='hero'>
          <div className='container'>
            <div className='text-wrapper'>
              <h1 className='title'>{t("home.subtitle")}</h1>
              <p className='description'>{t("home.description")}</p>

              <Link href='/contact'>
                <a className='cta'>{t("home.contact")}</a>
              </Link>
            </div>
            <div className='image-wrapper'>
              <img src='/vector.png' />
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}

export default Home;
