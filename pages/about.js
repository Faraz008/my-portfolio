import Layout from '../components/Layout';

export default function About() {
  return (
    <Layout title="About - Personal Portfolio">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">
          About Me
        </h1>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* About Text */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">
              Hello!
            </h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              I am passionate about creating digital experiences that make a difference. 
              With a background in computer science and a love for clean, efficient code, 
              I enjoy building applications that solve real-world problems.
            </p>
            <p className="text-gray-600 mb-4 leading-relaxed">
              My journey in web development started during college, and Ive been 
              continuously learning and growing ever since. I believe in writing 
              maintainable code and staying up-to-date with the latest technologies.
            </p>
            <p className="text-gray-600 leading-relaxed">
              When Im not coding, you can find me exploring new technologies, gaming or at the gym.
            </p>
          </div>

          {/* Skills/Interests */}
          <div>
            <h3 className="text-xl font-semibold text-gray-700 mb-4">
              Skills & Technologies
            </h3>
            <div className="flex flex-wrap gap-2 mb-6">
              {['JavaScript', 'React', 'Next.js', 'Node.js', 'Python', 'Git', 'HTML/CSS', 'MongoDB'].map((skill) => (
                <span key={skill} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                  {skill}
                </span>
              ))}
            </div>

            <h3 className="text-xl font-semibold text-gray-700 mb-4">
              Hobbies & Interests
            </h3>
            <ul className="space-y-2 text-gray-600">
              <li>📚 Reading tech blogs and staying updated with industry trends</li>
              <li>🎮 Gaming and exploring interactive experiences</li>
              <li>🌱 Learning new programming languages and frameworks</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-700 mb-4 mt-6">
              Career Goals
            </h3>
            <p className="text-gray-600">
              I aim to become a full-stack developer who can contribute to 
              meaningful projects that have a positive impact on peoples lives. 
              Im particularly interested in sustainable technology and 
              accessibility in web development.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}