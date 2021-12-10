import Head from "next/head";
import Link from "next/link";
import Navbar from "../components/Navbar";

function Home() {
  return (
    <>
      <Head>
        <title>SAIED SAMAKA | Home</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Navbar />

      <section className='hero'>
        <div className='container'>
          <div className='text-wrapper'>
            <h1 className='title'>Hi, This is Saied Smka</h1>
            <p className='description'>
              a passionate Software Engineer, specialised in front-end
              development using React & node.js As an advocate for web
              performance and accessibility and an evangelist for the Jamstack,
              I create amazing web applications to make the internet a better
              place:)
            </p>

            <Link href='/contact'>
              <a className='cta'>Contact me!</a>
            </Link>
          </div>

          <div className='image-wrapper'>
            <img src='vector.png' />
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
