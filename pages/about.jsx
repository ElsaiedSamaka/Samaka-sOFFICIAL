import Layout from "../components/Layout";
import Head from "next/head";
import { useRouter } from "next/router";
import Navbar from "../components/Navbar";
import useTranslation from "../hooks/useTranslation";

function About() {
  const { locale } = useRouter();
  const { t } = useTranslation(locale);

  return (
    <>
      <Head>
        <title>{t("About")}</title>
      </Head>
      <Layout>
        <Navbar />

        <section className='hero'>
          <div className='container'>
            <div className='text-wrapper w-full'>
              <h1 className='title'>{t("About")}</h1>
              <p className='description'>
                Born in [1997,march] and raised in Sammnoud - Egypt;
                <br></br> Saied is a senior graduated Cs student who's so
                passionate about programming in general, JAVASCRIPT in specific!
                along my journey on learning how to code js was the best thing
                that happend to me , I use it along with
                <strong>
                  {" "}
                  <em>
                    (React, Next.js, Redux, CSS, Styled-Components, Sass, HTML,
                    GraphQL, REST API, Docker, MongoDB, Postgress Sql, node.js,
                    npm, Express, VS Code, Git, GitHub, GitLab, CI/CD, TDD, BDD,
                    Agile)
                  </em>{" "}
                </strong>
                to get stuff done.
              </p>
              <hr></hr>
              <h1 className='title'>Experience</h1>
              <p>
                I haven't work in a professional environment till now for many
                reasons some of them is because of me
                <em> being lazy to apply for jobs </em>
                and that thing i intend to change{" "}
                <strong>my time is NOW!</strong>
                <br />
                THAT BEING SAID i have done some work that i'm proud of on both
                web and mobile development industry.
              </p>
              <hr />
              <h1 className='title'>Education</h1>
              <ul className='contact-links'>
                <li>
                  {" "}
                  <p>
                    [2016-2020] Mansoura University Faculty of computer science
                    i've graduted with Good (2.7)degree
                  </p>
                </li>
                <li>
                  <p>
                    CS50 — HarvardX (online education programme of Harvard
                    University) C, Python, SQL, Algorithms, Data Structure
                  </p>
                </li>
                <li>
                  Other relevant course work — various online education
                  programmes 2014 - present Intermediate Next.js (2020), GraphQL
                  Essentials (2020), node advanced concepts (2019), Advanced
                  React (2018), Advanced JavaScript (2018) Intermediate .Net
                  (2015), Front End Web Development (2014)
                </li>
              </ul>
              <hr />
              <h1 className='title'>Languages</h1>
              <ul>
                <li>Arabic: Native</li>
                <li>English: Fluent</li>
                <li>Frensh: Conversational</li>
              </ul>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}

export default About;
