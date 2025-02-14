import React from "react";
import Head from "next/head";

// Components
import Layout from "../../components/layout/Layout";

const Edenmill = () => {
  return (
    <>
      <Head>
        <title>Edenmill Ecommerce Case Study - Adeo Tech FZCO</title>
        <meta name="description" content="Adeo Tech FZCO" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout preloader={false} pageTransition={true} bullets={false}>
        {/* Section 1 - Summary */}
        <section id="panel-1" className="scroll-panel" data-pin="true">
          <div className="lg:h-screen lg:w-screen bg-secondary grid lg:grid-cols-8 gap-20 px-8 lg:px-10 xl:px-20 pt-32 pb-20 lg:py-36 relative">
            <div className="lg:col-span-5">
              <h1 className="font-primary text-2xl text-white">
                Eden Mill Ecommerce
              </h1>
              <p className="text-primary font-light text-sm mt-1 ml-0.5">
                Case Study
              </p>
              <h3 className="mt-12 font-primary text-4xl text-white">
                Summary
              </h3>
              <p className="mt-4 text-white/70 font-secondary font-thin leading-8 text-justify">
                Eden Mill is a unique distillery and brewery based on a single
                site just a couple of miles west of the famous home of golf at
                St Andrews, their culture is deep-rooted in a glorious
                distilling and brewing history. They revived distilling at this
                iconic location from where the Haig family made spirits and beer
                during the 19th century.
                <br />
                <br />
                For their discerning customers and those just interested in how
                they do what they do, they offer a genuine choice of exciting
                new whisky expressions from new make spirit. They make just
                100,000 litres per year, ensuring 100% focus goes onto every
                single drop. The Eden Mill story continues with the recently
                launched Art of the Blend whisky range. This comes after
                patiently waiting for new spirit to mature in specially selected
                casks. Launched on St Andrews day 2016, the first bottles became
                ready for sale in January 2017.
              </p>
            </div>
            <div className="lg:col-span-3">
              <div className="p-10 bg-primary orange-scale !w-full">
                <h3 className="font-secondary text-2xl text-white">
                  Our Roles
                </h3>
                <ul className="list-disc text-white ml-5 mt-5 text-sm space-y-3">
                  <li>Web Design</li>
                  <li>Web & Mobile Development</li>
                  <li>Video Content</li>
                </ul>
              </div>
              <img src="/img/adeo-web-awards.jpg" className="mt-5" alt="" />
            </div>
          </div>
        </section>

        {/* Section 2 - Challange */}
        <section id="panel-2" className="scroll-panel">
          <div
            className="lg:h-screen lg:w-screen bg-cover bg-bottom bg-no-repeat grid place-content-center lg:px-10 px-8 xl:px-20 py-20 lg:py-36 relative"
            style={{ backgroundImage: 'url("/img/edenmill-bg.jpeg")' }}
          >
            <div className="absolute top-0 left-0 bg-secondary/80 h-full w-full"></div>
            <div className="lg:w-8/12 mx-auto text-center z-10">
              <h3 className="font-primary text-5xl text-white">
                The Challenge
              </h3>
              <p className="mt-8 text-white font-secondary font-light leading-8 text-justify text-lg">
                We had to find a balance for visitors to not only discover the
                brand, but take them on a journey through the history of the
                products and to finally purchase. The next steps were focused
                around the customer experience and delivering an all immersive
                product journey with detailed information around the products
                and images that tantalised the taste buds.
                <br />
                Working with a craft distillery really gave us focus to show the
                amount of effort they put into producing their product range and
                we really wanted to show that off through a visual journey for
                customers on the website.
                <br />
                <br />
                Working with the management team and following brand guidelines
                we had to not only tick the boxes from this element, but also to
                technically deliver this in a way that works for ecommerce and
                web.
                <br />
                <br />
                From the many meetings, it became apparent that the words to
                describe them were about passion, high quality, striving for
                excellence and being the best they could be.
                <br />
                <br />
                We had to make sure the website met all of the above.
              </p>
            </div>
          </div>
        </section>

        {/* Section 3 - Insights */}
        <section id="panel-3" className="scroll-panel">
          <div className="lg:h-screen lg:w-screen bg-secondary grid lg:grid-cols-2 lg:px-10 px-8 xl:px-20 py-20 lg:py-36 relative">
            <div className="lg:w-8/12 mx-auto text-left grid content-center mb-10 lg:mb-0">
              <h3 className="font-primary text-4xl text-white">Insights</h3>
              <p className="mt-4 text-white/90 font-secondary font-light leading-8 text-justify">
                Looking at the typical customer base was crucial for the
                designs. They have a diverse range of customer needs from the
                discovery of the brand, tours of the distillery to the actual
                product ranges they sell.
                <br />
                <br />
                The brand founding may have come from the quality of the
                products they were producing, but customer loyalty is gained
                through their values. Humans engage with the story behind the
                brand and that&apos;s what people embrace.
              </p>
            </div>
            <img src="/img/insights-edenmill.png" alt="" />
          </div>
        </section>

        {/* Section 4 - Solutions */}
        <section id="panel-4" className="scroll-panel">
          <div className="lg:h-screen lg:w-screen bg-secondary grid lg:grid-cols-8">
            <div
              className="lg:col-span-3 h-80 lg:h-full w-full bg-cover bg-center relative"
              style={{ backgroundImage: "url(/img/eden_banner.jpg)" }}
            >
              <div className="absolute h-full w-full bg-black/50"></div>
            </div>
            <div className="lg:col-span-5 px-8 lg:px-10 xl:px-20 py-20 lg:py-36">
              <h3 className="font-primary text-4xl text-white">
                Our Solutions
              </h3>
              <p className="mt-4 text-white/70 font-secondary font-thin leading-8 text-justify">
                The investigation stage played a big part in choosing the right
                solution, working with the management team we really worked out
                the personas of the visitors and feedback from customers, then
                looked at what they might be looking for, looking at a whole
                load of competitor brands and how they were positioning
                themselves, then working through all that information with the
                management team to start the wire frames and move on to the
                designs.
                <br />
                <br />
                Landing pages were going to be key to generate sales, but tours
                featured heavily and looking at the customer journey for this
                while maintaining their values presented some challenges which
                we embraced.
                <br />
                <br />
                We had some time critical parts as they were sponsoring events
                through summer and more importantly the had a number of seasonal
                products that they were launching. On top of this one of the
                busiest times of year was approaching and we needed a good run
                in before Christmas sales started as with any new launch we like
                to asses the website and optimise it to gain maximum conversions
                for their highest seasonal purchase times of the year.
                <br />
                <br />
                In this day and age and with all the issues of ransomware and
                security problems, using our bespoke Redback solution has
                allowed them to have a flexible, secure platform over other open
                source CMS systems on the market. Unlike many open source
                solutions available there are no plugins to update or security
                loophole to patch.
              </p>
            </div>
          </div>
        </section>

        {/* Section 5 - Feedback */}
        <section id="panel-5" className="scroll-panel">
          <div className="lg:h-screen lg:w-screen bg-secondary grid lg:grid-cols-8">
            <div className="lg:col-span-3 bg-primary orange-scale !w-full py-20 lg:py-36">
              <div className="px-16 text-white">
                <h3 className="font-secondary text-2xl font-bold">Results</h3>
                <p className="text-sm mt-2">
                  Some key stats since its launch in June until September
                  compared to June- Sept 2016
                </p>
                <ul className="list-disc ml-3 mt-8 text-sm space-y-4">
                  <li>GOAL COMPLETIONS ARE UP 410%</li>
                  <li>REVENUE UP OVER 235%</li>
                  <li>AVERAGE ORDER UP OVER 6.57%</li>
                  <li>ECOMMERCE CONVERSION RATES ARE UP OVER 39%</li>
                  <li>BOUNCE RATE DOWN BY 46.78%</li>
                  <li>SESSIONS UP BY 125%</li>
                  <li>TOUR BOOKINGS ARE UP OVER 138%</li>
                </ul>
              </div>
              <div className="grid grid-cols-3 gap-8 mt-20 px-16">
                <div className="overflow-hidden grid place-content-center text-white text-center">
                  <img
                    src="/img/increase.png"
                    className="w-16 mb-5 mx-auto"
                    alt=""
                  />
                  <h6 className="font-primary text-2xl">138%</h6>
                  <p className="font-light text-sm">
                    Increase in Tour Bookings
                  </p>
                </div>
                <div className="overflow-hidden grid place-content-center text-white text-center">
                  <img
                    src="/img/money.png"
                    className="w-16 mb-5 mx-auto"
                    alt=""
                  />
                  <h6 className="font-primary text-2xl">235%</h6>
                  <p className="font-light text-sm">Increase in revenue</p>
                </div>
                <div className="overflow-hidden grid place-content-center text-white text-center">
                  <img
                    src="/img/visits.png"
                    className="w-16 mb-5 mx-auto"
                    alt=""
                  />
                  <h6 className="font-primary text-2xl">46.78%</h6>
                  <p className="font-light text-sm">Reduction in bounce rate</p>
                </div>
              </div>
            </div>
            <div className="lg:col-span-5 px-8 lg:px-10 xl:px-20 py-20 lg:py-36">
              <h3 className="font-primary text-4xl text-white">
                What Our Client Says
              </h3>
              <p className="mt-4 text-white/70 font-secondary font-thin leading-8 text-justify">
                Eden Mill has experienced rapid growth in the last 5 years
                within the UK gin, beer and whisky market. With such rapid
                growth, comes many obstacles that we face on a daily basis in
                order to keep up with our customer&apos;s demands, needs, and
                wants. After a very successful 2016, we realised the potential
                of our online store, and the financial impact it could have on
                our business. The website we had at that time was not fit for
                purpose, and what we needed was a fully functioning e-commerce
                site, that was web and mobile optimised.
                <br />
                <br />
                We had contacted ADEO with a brief of what we needed and
                outlined our key objectives for our new website. After several
                meetings and skype calls we agreed on the wireframes and
                development that suited our needs. ADEO really understood our
                brand and the importance of balance between an e-commerce site
                and a website that could educate our customers about our company
                and our many products. They also know a thing or two about
                designing and developing a great site which is easy for
                customers to shop.
                <br />
                <br />
                Since the launch of our site, we have seen our trustpilot score
                increase from great to excellent, with the majority commenting
                on how easy the site is to use. We have also seen an increase in
                our ecom conversion rate, and increase in sales. I would
                definitely recommend Adeo for a high quality and professional
                service, and for those looking to really take their website to
                the next level.
                <br />
                <br />
                Conor Graham - Ecommerce Manager
              </p>
            </div>
          </div>
        </section>

        {/* Section 6 - Contact */}
        <section id="panel-5" className="scroll-panel">
          <div className="lg:h-screen lg:w-screen bg-secondary grid lg:grid-cols-8">
            <div className="lg:col-span-3 hidden lg:flex justify-end items-end pt-36">
              <img src="/img/eden-mobile.png" className="h-full" alt="" />
            </div>
            <div className="lg:col-span-5 grid place-content-center px-8 lg:px-10 xl:px-20 py-20 lg:py-36">
              <h3 className="font-primary text-4xl text-white text-center lg:text-left">
                See For Yourself...
              </h3>
              <p className="mt-4 mb-10 text-white/70 font-secondary font-thin leading-8 text-center lg:text-justify">
                Visit the Eden Mill Ecommerce website by clicking the button
                below, <br className="hidden xl:block" /> or get in touch to find out how we can help you.
              </p>
              <div className="flex gap-5 mx-auto lg:ml-0">
                <a
                  href="https://www.edenmill.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="uppercase font-primary btn-scale text-white border-2 border-white px-6 py-2.5 hover:border-primary hover:text-primary ease-in-out duration-300"
                >
                  Visit Website
                </a>
                <a
                  href="https://forms.monday.com/forms/b89b03b27dcf972100dcc9d6252bb371?r=use1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="uppercase font-primary btn-scale text-white border-2 bg-primary px-6 py-2.5 border-transparent hover:bg-white hover:text-primary ease-in-out duration-300"
                >
                  Get In Touch
                </a>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Edenmill;
