import React, { useState } from "react";

const NewsletterSignup = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!email) {
      setStatus("Please enter an email address");
      return;
    }

    setLoading(true);
    
    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });
      
      const data = await response.json();
      
      if (response.status === 200) {
        setStatus("Success! You're now signed up.");
        setEmail("");
      } else {
        setStatus(data.error || "Something went wrong. Please try again.");
      }
    } catch (error) {
      setStatus("Something went wrong. Please try again.");
      console.error(error);
    }
    
    setLoading(false);
  };

  return (
    <div className="newsletter-container mt-8 lg:mt-6 border-t-2 border-white pt-6" style={{ background: '#e444ab', padding: '15px', marginTop: '20px'  }}>
      <h3 className="font-secondary text-white text-base xl:text-lg 2xl:text-xl font-bold mb-3">
        Join Our Newsletter
      </h3>
      <p className="font-secondary text-white text-xs 2xl:text-sm opacity-90 mb-4">
        Stay updated with our latest news and announcements
      </p>
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Your email address"
          className="outline-0 ring-0 border-b-2 border-primary bg-transparent px-4 py-2 text-white placeholder-white focus-visible:outline-none flex-grow"
          required
        />
        <button
          type="submit"
          disabled={loading}
          className="uppercase font-primary text-white px-4 bg-pink py-2 flex items-center group  duration-300 ease-in-out"
        >
          {loading ? "Signing Up..." : "Sign Up"}
          <svg
            className="ml-4"
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="10"
            viewBox="0 0 68.993 21.004"
          >
            <path
              id="Rectangle_8"
              className="group-hover:stroke-white duration-300 ease-in-out"
              data-name="Rectangle 8"
              d="M1687.772,949.784l9.8,9.795-9.8,9.795"
              transform="translate(-1629.99 -949.077)"
              fill="#fff"
              stroke="#fff"
              strokeWidth="2"
            />
            <line
              id="Shape_11"
              className="group-hover:stroke-white duration-300 ease-in-out"
              data-name="Shape 11"
              x1="40"
              transform="translate(0 10.233)"
              fill="none"
              stroke="#fff"
              strokeWidth="2"
            />
          </svg>
        </button>
      </form>
      {status && (
        <p className={`mt-2 text-sm ${status.includes("Success") ? "text-primary" : "text-red-400"}`}>
          {status}
        </p>
      )}
    </div>
  );
};

export default NewsletterSignup;