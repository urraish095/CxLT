import React from "react";
import Link from 'next/link';

const ThankYouPage = () => {
  return (
    <>

      {/* <Header /> */}
      <main>
        <Link href="/">
          <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors">
            Go to Main Site
          </button>
        </Link>
        <div class="container mx-auto px-4 py-8">
            <h1>Thank you!</h1>
        </div>
      </main>
    </>
  );
};

export default ThankYouPage;