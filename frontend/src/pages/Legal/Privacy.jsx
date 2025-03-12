import { Lock } from "lucide-react";

function Privacy() {
  return (
    <>
      <div className="space-y-8 bg-black py-10">
        <div className="text-center">
          <Lock className="mx-auto h-12 w-12 text-indigo-600" />
          <h1 className="mt-4 text-3xl font-bold text-white">
            Privacy Policy
          </h1>
          <p className="mt-2 text-lg text-gray-500">Last updated: March 2025</p>
        </div>

        <div className="prose max-w-7xl mx-auto">
          <div className=" shadow-md rounded-lg p-8">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
              <p className="text-gray-500">
                This Privacy Policy explains how Flash Challenge collects, uses, and
                protects your personal information when you use our game and
                services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">
                Information We Collect
              </h2>
              <ul className="list-disc pl-5 text-gray-500">
                <li>Account information (email, username)</li>
                <li>Game progress and statistics</li>
                <li>Device information</li>
                <li>Usage data</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">
                How We Use Your Information
              </h2>
              <ul className="list-disc pl-5 text-gray-500">
                <li>To provide and improve our services</li>
                <li>To personalize your gaming experience</li>
                <li>To communicate with you about updates and changes</li>
                <li>To ensure fair gameplay and prevent cheating</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Your Rights</h2>
              <p className="text-gray-500">You have the right to:</p>
              <ul className="list-disc pl-5 text-gray-500">
                <li>Access your personal data</li>
                <li>Correct inaccurate data</li>
                <li>Request deletion of your data</li>
                <li>Object to data processing</li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}

export default Privacy;
