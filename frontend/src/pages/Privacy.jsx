const Privacy = () => {
  return (
    <div className="min-h-screen">
      <section className="section">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <h1 className="section-title">Privacy Policy</h1>
            <p className="section-subtitle">Last updated: September 1, 2025</p>
          </div>

          <div className="space-y-6">
            <div className="card p-6">
              <h2 className="text-xl font-semibold mb-3">Overview</h2>
              <p className="text-gray-600 dark:text-gray-300">
                Open Research Institute of India (ORII) is committed to protecting your privacy. This
                policy explains what information we collect, how we use it, and your choices.
              </p>
            </div>

            <div className="card p-6">
              <h2 className="text-xl font-semibold mb-3">Information We Collect</h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-600 dark:text-gray-300">
                <li>Contact details (name, email) when you reach out or apply to join.</li>
                <li>Optional profile links (GitHub, LinkedIn) for research collaboration.</li>
                <li>Usage data for improving our website’s performance and accessibility.</li>
              </ul>
            </div>

            <div className="card p-6">
              <h2 className="text-xl font-semibold mb-3">How We Use Information</h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-600 dark:text-gray-300">
                <li>Respond to inquiries and manage research/community participation.</li>
                <li>Operate, maintain, and improve our website and services.</li>
                <li>Share public, non-personal research stats and outcomes.</li>
              </ul>
            </div>

            <div className="card p-6">
              <h2 className="text-xl font-semibold mb-3">Data Sharing</h2>
              <p className="text-gray-600 dark:text-gray-300">
                We do not sell personal data. We may share limited information with service providers
                (e.g., hosting, analytics) under confidentiality obligations or when required by law.
              </p>
            </div>

            <div className="card p-6">
              <h2 className="text-xl font-semibold mb-3">Your Choices</h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-600 dark:text-gray-300">
                <li>Request access, correction, or deletion of your personal information.</li>
                <li>Opt out of non-essential communications at any time.</li>
              </ul>
            </div>

            <div className="card p-6">
              <h2 className="text-xl font-semibold mb-3">Contact</h2>
              <p className="text-gray-600 dark:text-gray-300">
                Questions about this policy? Email <a className="text-primary-600 dark:text-primary-400 hover:underline" href="mailto:privacy@orii.in">privacy@orii.in</a>.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Privacy;
