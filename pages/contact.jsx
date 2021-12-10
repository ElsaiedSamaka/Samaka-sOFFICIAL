import Head from "next/head";
import Navbar from "../components/Navbar";

function Contact() {
  return (
    <>
      <Head>
        <title>Contact</title>
      </Head>

      <Navbar />

      <section className='hero'>
        <div className='container'>
          <div className='text-wrapper w-full'>
            <h1 className='title'>Contact</h1>
            <p className='description'>
              U can call - mail - text me when ever u need and i will respond to
              you as near as i can! don't be shy to talk ;).
            </p>
            <ul className='contact-links'>
              <li className='contact-item'>
                Email: <a href='mailto:loremiipsum99@gmail.com'>Said Samaka</a>{" "}
              </li>

              <li className='contact-item'>Phone: +01150567130</li>
              <li className='contact-item'>
                linkedin:{" "}
                <a href='https://www.linkedin.com/in/elsaied-samaka-513a0518b/'>
                  Saied Samka
                </a>
              </li>
              <li className='contact-item'>
                GitHub:{" "}
                <a href='https://github.com/ElsaiedSamaka'>
                  THeRealSamaka
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
