export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-white mt-auto">
      <div className="max-w-6xl mx-auto px-4 py-6">
        <div className="text-center">
          <p className="text-sm">
            © {currentYear} Faraz. All rights reserved.
          </p>
          <p className="text-xs text-gray-400 mt-1">
            Built with Next.js & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}