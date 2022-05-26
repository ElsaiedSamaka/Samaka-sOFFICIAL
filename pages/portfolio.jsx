import Head from "next/head";
import Layout from "../components/Layout";
import Navbar from "../components/Navbar";

function Portfolio() {
  return (
    <>
      <Head>
        <title>Portfolio</title>
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      </Head>
      <Layout>
        <Navbar />

        <section className='hero'>
          <div className='container'>
            <div className='text-wrapper w-full'>
              <h1 className='title'>Portfolio</h1>
              <p className='description'>
                Incididunt in cillum magna occaecat nisi qui in.
              </p>

              <div className='portfolio-wrapper'>
                <div className='portfolio-item'>
                  <img src='/chitchat.png' className='portfolio-image' />

                  <h4 className='portfolio-name'>Chat App Exploration</h4>
                  <div className='portfolio-category'>Mobile Dev</div>
                </div>
                <div className='portfolio-item'>
                  <img src='/kajian.jpg' className='portfolio-image' />

                  <h4 className='portfolio-name'>kajian App</h4>
                  <div className='portfolio-category'>Mobile Dev</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}

export default Portfolio;
