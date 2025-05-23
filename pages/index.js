import React from "react";
import Head from "next/head";
import Script from 'next/script'

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
        <meta name="description" content="CxLT" />
        <link rel="icon" href="/favicon.ico" />
        
      </Head>
      <Script id="gtm-head">
        {`
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-MJ9GZMX4');
      `}
      </Script>
      <Script async src="https://www.facebook.com/tr?id=1303973084161841&ev=PageView&noscript=1"></Script>
      <Script id="meta">
        {`
        !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '1303973084161841');
              fbq('track', 'PageView');
              fbq('track', 'ViewContent');
        `}
      </Script>
      <Script id="linkedin-tag">
        {`
          window._linkedin_partner_id = "7009842";
          window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
          window._linkedin_data_partner_ids.push(window._linkedin_partner_id);

          (function(l) {
            if (!l){window.lintrk = function(a,b){window.lintrk.q.push([a,b])};
            window.lintrk.q=[]}
            var s = document.getElementsByTagName("script")[0];
            var b = document.createElement("script");
            b.type = "text/javascript";
            b.async = true;
            b.src = "https://snap.licdn.com/li.lms-analytics/insight.min.js";
            s.parentNode.insertBefore(b, s);
          })(window.lintrk);

          window.lintrk('track', { conversion_id: 20452266 });
        `}
      </Script>

      {/* LinkedIn noscript fallback */}
      <noscript>
        <img height="1" width="1" style={{ display: 'none' }} alt="" src="https://px.ads.linkedin.com/collect/?pid=7009842&fmt=gif" />
      </noscript>
      <noscript>
        <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-MJ9GZMX4"
          height="0" width="0" style={{ display: 'none', visibility: 'hidden' }} />
      </noscript>
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