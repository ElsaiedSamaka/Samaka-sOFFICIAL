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
                SOME OF MY WORK.
              </p>

              <div className='portfolio-wrapper'>
                <div className='portfolio-item'>
                  <img src='/SamakaStore.png' className='portfolio-image' />
<a href="https://samaka-st-ore.vercel.app/" target="_blank">
                    <h4 className='portfolio-name'>SamakaSTore</h4>
                    </a>
                  <div className='portfolio-category'>a fully feldged nextjs ecommerce wep app</div>
                </div>
                <div className='portfolio-item'>
                  <img src='/notesapp.png' className='portfolio-image' />
<a href="https://react-tailwind-notes.netlify.app/" target="_blank">

                  <h4 className='portfolio-name'>Notes App</h4></a>
                  <div className='portfolio-category'>CRUD project ( React + tailwind + browser localstorage )</div>
                </div>
                 <div className='portfolio-item'>
                  <img src='/vpnland.png' className='portfolio-image' />
<a href="https://next-vpn-land.netlify.app/" target="_blank">

                  <h4 className='portfolio-name'>VPN Landingpage</h4></a>
                  <div className='portfolio-category'>Next VPN open source landing page template</div>
                </div>
                
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}
// 
export default Portfolio;
