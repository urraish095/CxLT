import { useState } from 'react';

export default function ContactForm() {
    const [loading, setLoading] = useState(false);
    const [successMessage, setSuccessMessage] = useState("");

    async function handleSubmit(event) {
        event.preventDefault();
        setLoading(true);
        setSuccessMessage("");

        const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;
        const formData = new FormData(event.target);

        formData.append("access_key", accessKey);

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json"
                },
                body: json
            });
            const result = await response.json();

            if (result.success) {
                event.target.reset();
                setSuccessMessage("Your message has been sent successfully!");
            }
        } catch (error) {
            console.error("Error submitting form", error);
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="mx-auto mt-3  rounded-xl shadow-lg space-y-6" style={{ maxWidth: '100%' , width: '100%', overflowX: 'scroll' }}>
            <h2 className="text-2xl font-bold  text-white">Contact Us</h2>

            {successMessage && <p className="text-green-600">{successMessage}</p>}

            <form onSubmit={handleSubmit}>
                {/* First Name */}
                <div className='grid lg:flex mt-0 xl:mt-2 mb-4' style={{ gap: '10px' }}>
                    <div className='' style={{ flexBasis: '50%' }}>
                        <label className="block text-sm font-medium text-white mb-2 font-secondary">First Name</label>
                        <input
                            type="text"
                            name="first_name"
                            required
                            placeholder="First Name"
                            className="mt-1 block w-full p-2 border border-gray-300 rounded-md font-secondary shadow-sm focus:ring-blue-500 focus:border-blue-500"
                            style={{ background: 'transparent', color: '#fff'  }}
                        />
                    </div>

                    {/* Last Name */}
                    <div  style={{ flexBasis: '50%' }}>
                        <label className="block text-sm font-medium text-white mb-2 font-secondary">Last Name</label>
                        <input
                            type="text"
                            name="last_name"
                            required
                            placeholder="Last Name"
                            className="mt-1 block w-full p-2 border border-gray-300 font-secondary rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                            style={{ background: 'transparent', color: '#fff' }}
                        />
                    </div>
                </div>
                <div className='grid lg:flex mt-0 xl:mt-2 mb-4' style={{ gap: '10px' }}>
                    {/* Phone Number */}
                    <div style={{ flexBasis: '50%' }}>
                        <label className="block text-sm font-medium text-white mb-2 font-secondary">Phone Number</label>
                        <input
                            type="tel"
                            name="phone"
                            required
                            placeholder="Phone Number"
                            className="mt-1 block w-full p-2 border border-gray-300 font-secondary rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                            style={{ background: 'transparent', color: '#fff'  }}
                        />
                    </div>

                    {/* Email */}
                    <div style={{ flexBasis: '50%' }}>
                        <label className="block text-sm font-medium text-white mb-2 font-secondary">Email</label>
                        <input
                            type="email"
                            name="email"
                            required
                            placeholder="Your Email"
                            className="mt-1 block w-full p-2 border border-gray-300 font-secondary rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                            style={{ background: 'transparent', color: '#fff'  }}
                        />
                    </div>
                </div>

                

                {/* Type a Question */}
                <div className='my-4 '>
                    <label className="block text-sm font-medium text-white mb-2 font-secondary">Type a Question</label>
                    <textarea
                        name="question"
                        required
                        placeholder="Your Question"
                        rows="2"
                        className="mt-1 block w-full p-2 border border-gray-300 font-secondary rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                        style={{ background: 'transparent', color: '#fff'  }}
                    ></textarea>
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    className="w-full bg-pink py-2 px-4 text-white font-semibold rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    disabled={loading}
                >
                    {loading ? "Submitting..." : "Submit Form"}
                </button>
            </form>
        </div>
    );
}