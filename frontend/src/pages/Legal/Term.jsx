import { BookOpen } from "lucide-react";

function Term() {
  return (
    <>
      <div className="space-y-8 bg-black py-5">
        <div className="text-center">
          <BookOpen className="mx-auto h-12 w-12 text-indigo-600" />
          <h1 className="mt-4 text-3xl font-bold text-white">
            Terms of Service
          </h1>
          <p className="mt-2 text-lg text-gray-500">Last updated: March 2025</p>
        </div>

        <div className="prose max-w-6xl mx-auto">
          <div className="shadow-md rounded-lg p-8">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">
                1. Acceptance of Terms
              </h2>
              <p className="text-gray-500">
                By accessing or using Flash Challenge, you agree to be bound by these
                Terms of Service and all applicable laws and regulations.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">2. User Accounts</h2>
              <ul className="list-disc pl-5 text-gray-500">
                <li>You are responsible for maintaining account security</li>
                <li>You agree to provide accurate information</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">3. Game Rules</h2>
              <ul className="list-disc pl-5 text-gray-500">
                <li>Fair play is required</li>
                <li>No cheating or exploitation of bugs</li>
                <li>No harassment of other players</li>
                <li>Respect intellectual property rights</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">4. Termination</h2>
              <p className="text-gray-500">
                We reserve the right to terminate or suspend access to our
                services for violations of these terms or any other reason we
                deem appropriate.
              </p>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}

export default Term;
