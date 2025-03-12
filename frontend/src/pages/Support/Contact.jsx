import { MessageCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function Contact() {
    const navigate = useNavigate();
  return (
    <>
      <div className="space-y-8">
        <div className="text-center">
          <MessageCircle className="mx-auto h-12 w-12 text-indigo-600" />
          <h1 className="mt-4 text-3xl font-bold text-White">Contact Us</h1>
          <p className="mt-2 text-lg text-gray-500">We're here to help</p>
        </div>

        <div className="max-w-3xl mx-auto text-black">
          <div className=" shadow-md rounded-lg p-8">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                if (localStorage.getItem("token")) {
                  toast.success("Request Submitted");
                }else{
                    toast.error("You must log in first to submit a request.")
                    navigate('/login')
                }
              }}
              className="space-y-6"
            >
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-500"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Your Name"
                  required
                  className="mt-1 block w-full rounded-md  shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-2"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-500"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  placeholder="Your Mail"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-2"
                />
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-500"
                >
                  Subject
                </label>
                <select
                  id="subject"
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-2"
                >
                  <option>General Inquiry</option>
                  <option>Technical Support</option>
                  <option>Report Bug</option>
                  <option>Feature Request</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-500"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  placeholder="Your Message"
                  required
                  rows={4}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-2"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full  bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 p-2"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
