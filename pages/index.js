import React from "react";
import Head from "next/head";

// Components
import Layout from "../components/layout/Layout";
import Hero from "../components/sections/Hero";
import Slogan from "../components/sections/Slogan";
import Service from "../components/sections/Service";
import Brand from "../components/sections/Brand";
import Creation from "../components/sections/Creation";
import Marketing from "../components/sections/Marketing";
import Studies from "../components/sections/Studies";
import Contact from "../components/sections/Contact";

const index = () => {
  return (
    <>
      <Head>
        <title>CxLT Agency</title>
        <meta name="description" content="Adeo Tech FZCO" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout preloaderDelay={2.5} preloader={true} pageTransition={false} bullets={true}>
        {/* Section 1 - Hero */}
        <section id="panel-1" className="scroll-panel">
          <Hero />
        </section>

        {/* Section 2 - Slogan */}
        <section id="panel-2" className="scroll-panel" data-pin="true">
          <Slogan />
        </section>

        {/* Section 3 - Service */}
        <section id="panel-3" className="scroll-panel" data-pin="true">
          <Service />
        </section>

        {/* Section 4 - Brand */}
        <section id="panel-4" className="scroll-panel" data-pin="true">
          <Brand />
        </section>

        {/* Section 5 - Creation */}
        <section id="panel-5" className="scroll-panel" data-pin="true">
          <Creation />
        </section>

        {/* Section 6 - Marketing */}
        <section id="panel-6" className="scroll-panel" data-pin="true">
          <Marketing />
        </section>

        {/* Section 7 - Case Studies */}
        <section id="panel-7" className="scroll-panel" data-pin="true">
          <Studies />
        </section>

        {/* Section 8 - Contact */}
        <section id="panel-8" className="scroll-panel" data-pin="true">
          <Contact />
        </section>
      </Layout>
    </>
  );
};

export default index;