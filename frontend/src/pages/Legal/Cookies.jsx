import { Cookie } from "lucide-react";

function Cookies() {
  return (
    <>
      <div className="space-y-8 bg-black py-5">
        <div className="text-center">
          <Cookie className="mx-auto h-12 w-12 text-indigo-600" />
          <h1 className="mt-4 text-3xl font-bold text-white">
            Cookie Policy
          </h1>
          <p className="mt-2 text-lg text-gray-500">Last updated: March 2025</p>
        </div>

        <div className="prose max-w-6xl mx-auto">
          <div className=" shadow-md rounded-lg p-8">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">What Are Cookies?</h2>
              <p className="text-gray-500">
                Cookies are small text files that are placed on your device when
                you visit our website. They help us provide you with a better
                experience by remembering your preferences and game progress.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">
                Types of Cookies We Use
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-medium text-gray-300">
                    Essential Cookies
                  </h3>
                  <p className="text-gray-500">
                    Required for the game to function properly, including
                    authentication and session management.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-medium text-gray-300">
                    Performance Cookies
                  </h3>
                  <p className="text-gray-500">
                    Help us understand how players use our game to improve the
                    experience.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-medium text-gray-300">
                    Functionality Cookies
                  </h3>
                  <p className="text-gray-500">
                    Remember your preferences and settings for a better gaming
                    experience.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Managing Cookies</h2>
              <p className="text-gray-500">
                You can control and/or delete cookies as you wish. You can
                delete all cookies that are already on your computer and you can
                set most browsers to prevent them from being placed.
              </p>
              <div className="mt-4 p-4 bg-gray-100 rounded-md">
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  Cookie Preferences
                </h3>
                <div className="space-y-2">
                  <label className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      checked
                      disabled
                      className="rounded text-indigo-600"
                    />
                    <span className="text-gray-700">
                      Essential Cookies (Required)
                    </span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      className="rounded text-indigo-600"
                    />
                    <span className="text-gray-700">Performance Cookies</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      className="rounded text-indigo-600"
                    />
                    <span className="text-gray-700">Functionality Cookies</span>
                  </label>
                </div>
                <button className="mt-4 px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-indigo-500">
                  Save Preferences
                </button>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cookies;
