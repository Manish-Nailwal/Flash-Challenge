import { Briefcase } from "lucide-react";
function Career() {
  return (
    <>
      <div className="space-y-8 bg-black py-10">
        <div className="text-center">
          <Briefcase className="mx-auto h-12 w-12 text-indigo-600" />
          <h1 className="mt-4 text-3xl font-bold text-white">Join Our Team</h1>
          <p className="mt-2 text-lg text-gray-500 ">
            Contribute to Simon Says on GitHub
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className=" shadow-md rounded-lg overflow-hidden">
            <div className="p-6 border-b border-gray-200">
              <h2 className="text-2xl font-semibold text-white mb-4">
                Become a Contributor
              </h2>
              <p className="text-gray-500 mb-4">
                We welcome contributions from developers of all skill levels.
                Whether you're fixing bugs, adding features, or improving
                documentation, your help makes Simon Says better for everyone.
              </p>
              <a
                href="https://github.com/Manish-Nailwal/Flash-Challenge"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-gray-800 text-white px-6 py-2 rounded-md hover:bg-indigo-500 transition-colors"
              >
                View GitHub Repository
              </a>
            </div>

            <div className="p-6">
              <h2 className="text-2xl font-semibold text-white mb-4">
                How to Contribute
              </h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-8 w-8 rounded-full bg-gray-800 text-white">
                      1
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-white">
                      Fork the Repository
                    </h3>
                    <p className="mt-1 text-gray-500">
                      Create your own copy of the project to work on
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-8 w-8 rounded-full bg-gray-800 text-white">
                      2
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-white">
                      Create a Branch
                    </h3>
                    <p className="mt-1 text-gray-500">
                      Make your changes in a new git branch
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-8 w-8 rounded-full bg-gray-800 text-white">
                      3
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-white">
                      Submit a Pull Request
                    </h3>
                    <p className="mt-1 text-gray-500">
                      Open a PR with your improvements
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-5 rounded-lg p-6 pb-8">
            <h2 className="text-xl font-semibold text-white mb-4">
              Contribution Guidelines
            </h2>
            <ul className="list-disc list-inside space-y-2 text-gray-500">
              <li>Follow our coding standards</li>
              <li>Write meaningful commit messages</li>
              <li>Include tests for new features</li>
              <li>Update documentation as needed</li>
              <li>Be respectful and collaborative</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Career;
