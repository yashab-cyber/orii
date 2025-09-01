const Terms = () => {
  return (
    <div className="min-h-screen">
      <section className="section">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <h1 className="section-title">Terms of Service</h1>
            <p className="section-subtitle">Last updated: September 1, 2025</p>
          </div>

          <div className="space-y-6">
            <div className="card p-6">
              <h2 className="text-xl font-semibold mb-3">Acceptance of Terms</h2>
              <p className="text-gray-600 dark:text-gray-300">
                By using the ORII website and services, you agree to these Terms. If you do not agree,
                please discontinue use.
              </p>
            </div>

            <div className="card p-6">
              <h2 className="text-xl font-semibold mb-3">Use of Content</h2>
              <p className="text-gray-600 dark:text-gray-300">
                Unless otherwise noted, research outputs are shared under open licenses. You are
                responsible for complying with the applicable license terms.
              </p>
            </div>

            <div className="card p-6">
              <h2 className="text-xl font-semibold mb-3">Accounts & Conduct</h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-600 dark:text-gray-300">
                <li>Provide accurate information when applying or collaborating.</li>
                <li>Do not misuse services, infringe rights, or violate laws.</li>
                <li>Respect open, ethical, and inclusive research practices.</li>
              </ul>
            </div>

            <div className="card p-6">
              <h2 className="text-xl font-semibold mb-3">Disclaimer</h2>
              <p className="text-gray-600 dark:text-gray-300">
                Services are provided “as is” without warranties. ORII is not liable for indirect or
                consequential damages to the extent permitted by law.
              </p>
            </div>

            <div className="card p-6">
              <h2 className="text-xl font-semibold mb-3">Changes to Terms</h2>
              <p className="text-gray-600 dark:text-gray-300">
                We may update these Terms from time to time. Continued use constitutes acceptance of
                the updated Terms.
              </p>
            </div>

            <div className="card p-6">
              <h2 className="text-xl font-semibold mb-3">Contact</h2>
              <p className="text-gray-600 dark:text-gray-300">
                Questions about these Terms? Email <a className="text-primary-600 dark:text-primary-400 hover:underline" href="mailto:legal@orii.in">legal@orii.in</a>.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Terms;
