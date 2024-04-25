import PageTitle from "../elements/PageTitle";

export default function About() {
  return (
    <>
      <PageTitle title="About us" />
      <Hero />
      <OurTeam />
    </>
  );
}

export function Hero() {
  return (
    <>
      <div className="about-hero">
        <div className="about-hero__content">
          <h1>Welcome to Our Website</h1>
          <p>Discover the beauty and significance of Jain temples</p>
        </div>
      </div>
      <div className="about-description">
        <div className="about-container__inner">
          <p>
            Sri Shikharji is dedicated to showcasing the rich heritage and
            cultural significance of Jain temples, with a special focus on
            Shikharji. <br />
            We aim to provide comprehensive information about these sacred
            sites, their history, architecture, and spiritual significance.
            <br />
            Whether you are a Jain devotee seeking pilgrimage information or
            someone interested in Jainism and its architectural marvels, our
            platform is designed to offer valuable insights and resources.
          </p>
        </div>
      </div>

      <section className="about-main">
        <div className="about-container">
          <div className="about-container__inner about-white-box">
            <main>
              <div className="about-flow-content">
                <h2 className="about-section-title">Our Mission and Vision:</h2>
                <p>
                  Our mission is to promote Jainism and its values by providing
                  a platform to explore and understand the significance of Jain
                  temples, especially Shikharji. We envision a world where the
                  spiritual heritage of Jainism is appreciated and preserved for
                  future generations.
                </p>
              </div>
              <div className="about-flow-content">
                <h2 className="about-section-title">Our Brand Values:</h2>
                <p>
                  We believe in authenticity, respect, and inclusivity. We
                  strive to uphold these values in every aspect of our work,
                  from the content we create to the way we interact with our
                  audience and partners.
                </p>
              </div>

              <div className="about-flow-content">
                <h2 className="about-section-title">Our Process</h2>
                <p>
                  We research, curate, and present information about Jain
                  temples in a way that is easy to understand and navigate. Our
                  goal is to provide you with a seamless and enriching
                  experience as you explore the wonders of Jain architecture and
                  spirituality.
                </p>
              </div>
            </main>
          </div>
        </div>
      </section>
    </>
  );
}

export function OurTeam() {
  return (
    <>
      <div className="OurTeam-wrapper">
        <h1>Meet our Team</h1>
        <div className="OurTeam-team">
          <div className="OurTeam-team_member">
            <div className="OurTeam-team_img">
              <img
                src="https://cdn.pixabay.com/photo/2023/08/08/17/30/ai-generated-8177861_1280.jpg"
                alt="Team_image"
              />
            </div>
            <h3>ChatGPT</h3>
            <p className="OurTeam-role">AI Language Model</p>
            <p>
              ChatGPT is an advanced AI language model developed by OpenAI. It
              provides natural language understanding and generation
              capabilities, assisting users in various tasks and conversations.
            </p>
          </div>
          <div className="OurTeam-team_member">
            <div className="OurTeam-team_img">
              <img
                src="https://cdn.pixabay.com/photo/2015/02/24/02/05/website-647013_1280.jpg"
                alt="Team_image"
              />
            </div>
            <h3>CodePen</h3>
            <p className="OurTeam-role">Online Code Editor</p>
            <p>
              CodePen is a popular online code editor and front-end web
              development platform. It allows developers to showcase their work,
              experiment with code, and collaborate with others in real-time.
            </p>
          </div>
          <div className="OurTeam-team_member">
            <div className="OurTeam-team_img">
              <img
                src="https://cdn.pixabay.com/photo/2019/01/30/07/45/web-3963945_1280.jpg"
                alt="Team_image"
              />
            </div>
            <h3>Vercel</h3>
            <p className="OurTeam-role">Cloud Platform</p>
            <p>
              Vercel is a cloud platform for static sites and serverless
              functions. It offers seamless deployment, scalability, and
              performance optimization for modern web applications, empowering
              developers to build and deploy with ease.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
