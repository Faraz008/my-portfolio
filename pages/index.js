import Layout from '../components/Layout';
import ProfileImage from '../components/ProfileImage';
import Link from 'next/link';

export default function Home() {
  return (
    <Layout title="Home - Personal Portfolio">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-gray-800 mb-6">
            Welcome to My Portfolio
          </h1>
          
          <div className="mb-8">
            <h2 className="text-2xl text-gray-600 mb-4">
              Hi, My name is <span className="text-blue-600 font-semibold">Faraz</span>
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed">
              I specialize in modern web technologies and
              enjoy turning ideas into reality through code.
            </p>
          </div>

          <div className="flex justify-center space-x-4">
          <Link
           href="/about"
           className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
          Learn More About Me
          </Link>

          <Link
           href="/projects"
           className="border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-600 hover:text-white transition-colors"
          >
          View My Work
          </Link>
          </div>
        </div>

        {/* Hero Image or Icon */}
        <div className="mt-16 text-center">
          <div className="inline-block p-8 bg-blue-100 rounded-full">
            <ProfileImage src="/images/sample-pic.jpg" alt="faraz" size={200} />
          </div>
        </div>
      </div>
    </Layout>
  );
}