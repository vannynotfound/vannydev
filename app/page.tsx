/* eslint-disable @next/next/no-img-element -- The portfolio's lightbox mutates image URLs directly. */
import Script from "next/script";

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Jovanny E. De Leon",
  alternateName: "Vanny",
  url: "https://vanny-portfolio.vercel.app/",
  image: "https://vanny-portfolio.vercel.app/assets/images/og-image.jpg",
  jobTitle: "Full-stack Web & Bot Developer",
  email: "mailto:jovannydeleon2906@gmail.com",
  address: { "@type": "PostalAddress", addressRegion: "Camarines Sur", addressCountry: "PH" },
  alumniOf: { "@type": "CollegeOrUniversity", name: "Naga College Foundation, Inc." },
  knowsLanguage: ["Bikol", "Filipino", "English", "Indonesian"],
  knowsAbout: ["Web Development", "React", "Node.js", "MongoDB", "MySQL", "Python", "TypeScript"],
  sameAs: [
    "https://github.com/Vanny-Dev",
    "https://www.linkedin.com/in/jovanny-de-leon-a48a492b0/",
    "https://www.instagram.com/vanny.dev",
    "https://www.tiktok.com/@vanny_.dev",
  ],
  award: ["Master of EdTech Innovation \u2014 CCS One Up Hackathon 2026"],
};

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }} />
    {" "}
    <a href="#main" className="skip-link">
      {"Skip to content"}
    </a>
    {" "}
    <div className="scroll-progress" id="scroll-progress" aria-hidden="true"></div>
    {" "}
    {" "}
    <header className="header" id="header">
      <div className="header__inner">
        {" "}
        <a href="#home" className="logo" aria-label="VannyDev — home">
          <img src="/assets/logo/myLogo.webp" alt="VannyDev logo" width="44" height="44" />
        </a>
        {" "}
        <nav className="nav" id="nav" aria-label="Main navigation">
          <p className="nav__label" aria-hidden="true">
            {"Navigation"}
          </p>
          {" "}
          <a href="#home">
            {" "}
            <span className="nav__icon" aria-hidden="true">
              <i className="fa-solid fa-house"></i>
            </span>
            {" "}
            <span className="nav__text">
              {"Home"}
            </span>
            {" "}
            <span className="nav__num" aria-hidden="true">
              {"01"}
            </span>
            {" "}
          </a>
          {" "}
          <a href="#about">
            {" "}
            <span className="nav__icon" aria-hidden="true">
              <i className="fa-solid fa-user"></i>
            </span>
            {" "}
            <span className="nav__text">
              {"About"}
            </span>
            {" "}
            <span className="nav__num" aria-hidden="true">
              {"02"}
            </span>
            {" "}
          </a>
          {" "}
          <a href="#work">
            {" "}
            <span className="nav__icon" aria-hidden="true">
              <i className="fa-solid fa-layer-group"></i>
            </span>
            {" "}
            <span className="nav__text">
              {"Work"}
            </span>
            {" "}
            <span className="nav__num" aria-hidden="true">
              {"03"}
            </span>
            {" "}
          </a>
          {" "}
          <a href="#competitions">
            {" "}
            <span className="nav__icon" aria-hidden="true">
              <i className="fa-solid fa-trophy"></i>
            </span>
            {" "}
            <span className="nav__text">
              {"Competitions"}
            </span>
            {" "}
            <span className="nav__num" aria-hidden="true">
              {"04"}
            </span>
            {" "}
          </a>
          {" "}
          <a href="#gallery">
            {" "}
            <span className="nav__icon" aria-hidden="true">
              <i className="fa-solid fa-images"></i>
            </span>
            {" "}
            <span className="nav__text">
              {"Gallery"}
            </span>
            {" "}
            <span className="nav__num" aria-hidden="true">
              {"05"}
            </span>
            {" "}
          </a>
          {" "}
          <a href="#contact">
            {" "}
            <span className="nav__icon" aria-hidden="true">
              <i className="fa-solid fa-paper-plane"></i>
            </span>
            {" "}
            <span className="nav__text">
              {"Contact"}
            </span>
            {" "}
            <span className="nav__num" aria-hidden="true">
              {"06"}
            </span>
            {" "}
          </a>
          {" "}
          <div className="nav__footer">
            <p className="nav__status">
              <span className="nav__status-dot" aria-hidden="true"></span>
              {" Open to work"}
            </p>
            {" "}
            <a className="nav__email" href="mailto:jovannydeleon2906@gmail.com">
              {"jovannydeleon2906@gmail.com"}
            </a>
            {" "}
            <div className="nav__socials">
              {" "}
              <a href="https://github.com/Vanny-Dev" target="_blank" rel="noopener" aria-label="GitHub">
                <i className="fa-brands fa-github" aria-hidden="true"></i>
              </a>
              {" "}
              <a href="https://www.linkedin.com/in/jovanny-de-leon-a48a492b0/" target="_blank" rel="noopener" aria-label="LinkedIn">
                <i className="fa-brands fa-linkedin-in" aria-hidden="true"></i>
              </a>
              {" "}
              <a href="https://www.instagram.com/vanny.dev" target="_blank" rel="noopener" aria-label="Instagram">
                <i className="fa-brands fa-instagram" aria-hidden="true"></i>
              </a>
              {" "}
              <a href="https://www.tiktok.com/@vanny_.dev" target="_blank" rel="noopener" aria-label="TikTok">
                <i className="fa-brands fa-tiktok" aria-hidden="true"></i>
              </a>
              {" "}
            </div>
          </div>
        </nav>
        {" "}
        <button className="hamburger" id="hamburger" aria-label="Toggle menu" aria-expanded="false" aria-controls="nav">
          {" "}
          <span></span>
          <span></span>
          <span></span>
          {" "}
        </button>
        {" "}
      </div>
    </header>
    {" "}
    <div className="nav-overlay" id="nav-overlay" aria-hidden="true"></div>
    {" "}
    <main id="main">
      <section className="hero" id="home">
        <div className="hero__bg" aria-hidden="true">
          <div className="grid-lines" data-px="0.16" data-depth="-10"></div>
          <canvas id="particles-canvas" data-px="0.08" data-depth="-6"></canvas>
          <div className="hero__spotlight"></div>
        </div>
        <div className="hero__wrapper container">
          <div className="hero__content" data-px="0.05" data-px-max="60">
            <p className="hero__eyebrow">
              {"Hello, I'm"}
            </p>
            <h1 className="hero__name">
              {"Vanny"}
              <span>
                {"Dev"}
              </span>
            </h1>
            <p className="hero__tagline">
              {" "}
              <span className="hero__role" data-roles="[&quot;Full-stack Web Developer&quot;,&quot;Bot Developer&quot;,&quot;UI/UX Tinkerer&quot;,&quot;Problem Solver&quot;]">
                {"Full-stack Web Developer"}
              </span>
              {" "}
            </p>
            <p className="hero__sub">
              {"I craft digital experiences that are fast, accessible, and genuinely delightful to use."}
            </p>
            <div className="hero__cta">
              {" "}
              <a href="#work" className="btn btn--primary" data-magnetic="">
                {"View My Work"}
              </a>
              {" "}
              <a href="#contact" className="btn btn--ghost" data-magnetic="">
                {"Contact Me"}
              </a>
              {" "}
            </div>
            <div className="hero__stats">
              <div className="hero__stat">
                {" "}
                <span className="hero__stat-num" data-count="2" data-suffix="+">
                  {"2+"}
                </span>
                {" "}
                <span className="hero__stat-label">
                  {"Years Building"}
                </span>
                {" "}
              </div>
              <div className="hero__stat">
                {" "}
                <span className="hero__stat-num" data-count="4">
                  {"4"}
                </span>
                {" "}
                <span className="hero__stat-label">
                  {"Selected Projects"}
                </span>
                {" "}
              </div>
              <div className="hero__stat">
                {" "}
                <span className="hero__stat-num" data-count="5">
                  {"5"}
                </span>
                {" "}
                <span className="hero__stat-label">
                  {"Competitions"}
                </span>
                {" "}
              </div>
              <div className="hero__stat">
                {" "}
                <span className="hero__stat-num" data-count="1">
                  {"1"}
                </span>
                {" "}
                <span className="hero__stat-label">
                  {"Award Won"}
                </span>
                {" "}
              </div>
            </div>
          </div>
          <div className="hero__photo-col" data-px="-0.07" data-px-max="55" data-depth="14">
            <div className="hero__photo-frame">
              <img src="/assets/images/myProfile.webp" alt="Portrait of Jovanny De Leon" className="hero__photo" width="760" height="760" fetchPriority="high" decoding="async" />
              <div className="hero__photo-placeholder">
                <svg viewBox="0 0 120 140" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <circle cx="60" cy="48" r="32" fill="rgba(0,210,255,0.15)" stroke="rgba(0,210,255,0.3)" strokeWidth="1.5"></circle>
                  <ellipse cx="60" cy="125" rx="50" ry="28" fill="rgba(0,210,255,0.1)" stroke="rgba(0,210,255,0.2)" strokeWidth="1.5"></ellipse>
                  <circle cx="60" cy="48" r="18" fill="rgba(0,210,255,0.2)"></circle>
                </svg>
                <p>
                  {"Your Photo Here"}
                </p>
              </div>
              <div className="hero__photo-ring hero__photo-ring--1" aria-hidden="true"></div>
              <div className="hero__photo-ring hero__photo-ring--2" aria-hidden="true"></div>
              <div className="hero__photo-badge">
                <span aria-hidden="true">
                  {"✦"}
                </span>
                {" Open to Work"}
              </div>
            </div>
          </div>
        </div>
        <div className="hero__scroll-hint" aria-hidden="true">
          {" "}
          <span>
            {"Scroll"}
          </span>
          {" "}
          <div className="scroll-line"></div>
        </div>
      </section>
      <section className="about section" id="about">
        <div className="section-glow" data-px="0.22" data-px-max="90" aria-hidden="true"></div>
        <div className="container">
          <div className="about__grid">
            <div className="about__image-wrap" data-reveal="left">
              <div className="about__image">
                <div className="image-placeholder">
                  <img src="/assets/images/aboutMe.webp" alt="Jovanny De Leon at work" loading="lazy" data-px="0.08" data-px-max="22" />
                </div>
                <div className="about__badge" data-px="-0.09" data-px-max="24">
                  {" "}
                  <span className="badge-num">
                    {"2+"}
                  </span>
                  {" "}
                  <span className="badge-label">
                    {"Years Exp."}
                  </span>
                  {" "}
                </div>
              </div>
            </div>
            <div className="about__text" data-reveal="right">
              <p className="section-label">
                {"About Me"}
              </p>
              <h2 className="section-title" data-px="-0.04" data-px-max="26">
                {"Turning ideas into"}
                <br />
                <em>
                  {"pixel-perfect"}
                </em>
                {" products"}
              </h2>
              <p className="about__body">
                {"I'm a Camarines Sur–based designer & developer who has acquired the skills and knowledge necessary to make your project a success. I enjoy every step while working."}
              </p>
              <p className="about__body">
                {"When I'm not in Figma or VS Code, you'll find me talking to foreign people using their native languages."}
              </p>
              <p className="section-label" style={{"marginTop": "2rem"}}>
                {"Skills & Tools"}
              </p>
              <div className="skills-grid">
                <div className="skill-card" title="HTML5">
                  <img src="/assets/logo/html.webp" alt="HTML5" loading="lazy" width="22" height="22" />
                  {" "}
                  <span className="skill-name">
                    {"HTML"}
                  </span>
                  {" "}
                </div>
                <div className="skill-card" title="CSS3">
                  <img src="/assets/logo/css.webp" alt="CSS3" loading="lazy" width="22" height="22" />
                  {" "}
                  <span className="skill-name">
                    {"CSS"}
                  </span>
                  {" "}
                </div>
                <div className="skill-card" title="JavaScript">
                  <img src="/assets/logo/javascript.webp" alt="JavaScript" loading="lazy" width="22" height="22" />
                  {" "}
                  <span className="skill-name">
                    {"JavaScript"}
                  </span>
                  {" "}
                </div>
                <div className="skill-card" title="TypeScript">
                  <img src="/assets/logo/typescript.webp" alt="TypeScript" loading="lazy" width="22" height="22" />
                  {" "}
                  <span className="skill-name">
                    {"TypeScript"}
                  </span>
                  {" "}
                </div>
                <div className="skill-card" title="C">
                  <img src="/assets/logo/c.webp" alt="C" loading="lazy" width="22" height="22" />
                  {" "}
                  <span className="skill-name">
                    {"C"}
                  </span>
                  {" "}
                </div>
                <div className="skill-card" title="C++">
                  <img src="/assets/logo/c++.webp" alt="C++" loading="lazy" width="22" height="22" />
                  {" "}
                  <span className="skill-name">
                    {"C++"}
                  </span>
                  {" "}
                </div>
                <div className="skill-card" title="Python">
                  <img src="/assets/logo/python.webp" alt="Python" loading="lazy" width="22" height="22" />
                  {" "}
                  <span className="skill-name">
                    {"Python"}
                  </span>
                  {" "}
                </div>
                <div className="skill-card" title="PHP">
                  <img src="/assets/logo/php.webp" alt="PHP" loading="lazy" width="22" height="22" />
                  {" "}
                  <span className="skill-name">
                    {"PHP"}
                  </span>
                  {" "}
                </div>
                <div className="skill-card" title="Java">
                  <img src="/assets/logo/java.webp" alt="Java" loading="lazy" width="22" height="22" />
                  {" "}
                  <span className="skill-name">
                    {"Java"}
                  </span>
                  {" "}
                </div>
                <div className="skill-card" title="Node.js">
                  <img src="/assets/logo/nodejs.webp" alt="Node.js" loading="lazy" width="22" height="22" />
                  {" "}
                  <span className="skill-name">
                    {"Node.js"}
                  </span>
                  {" "}
                </div>
                <div className="skill-card" title="React">
                  <img src="/assets/logo/reactjs.webp" alt="React" loading="lazy" width="22" height="22" />
                  {" "}
                  <span className="skill-name">
                    {"React"}
                  </span>
                  {" "}
                </div>
                <div className="skill-card" title="Vite">
                  <img src="/assets/logo/vite.webp" alt="Vite" loading="lazy" width="22" height="22" />
                  {" "}
                  <span className="skill-name">
                    {"Vite"}
                  </span>
                  {" "}
                </div>
                <div className="skill-card" title="Bootstrap">
                  <img src="/assets/logo/bootstrap.webp" alt="Bootstrap" loading="lazy" width="22" height="22" />
                  {" "}
                  <span className="skill-name">
                    {"Bootstrap"}
                  </span>
                  {" "}
                </div>
                <div className="skill-card" title="Tailwind CSS">
                  <img src="/assets/logo/tailwind.webp" alt="Tailwind CSS" loading="lazy" width="22" height="22" />
                  {" "}
                  <span className="skill-name">
                    {"Tailwind"}
                  </span>
                  {" "}
                </div>
                <div className="skill-card" title="MongoDB">
                  <img src="/assets/logo/mongodb.webp" alt="MongoDB" loading="lazy" width="22" height="22" />
                  {" "}
                  <span className="skill-name">
                    {"MongoDB"}
                  </span>
                  {" "}
                </div>
                <div className="skill-card" title="MySQL">
                  <img src="/assets/logo/mysql.webp" alt="MySQL" loading="lazy" width="22" height="22" />
                  {" "}
                  <span className="skill-name">
                    {"MySQL"}
                  </span>
                  {" "}
                </div>
                <div className="skill-card" title="Git">
                  <img src="/assets/logo/git.webp" alt="Git" loading="lazy" width="22" height="22" />
                  {" "}
                  <span className="skill-name">
                    {"Git"}
                  </span>
                  {" "}
                </div>
                <div className="skill-card" title="npm">
                  <img src="/assets/logo/npm.webp" alt="npm" loading="lazy" width="22" height="22" />
                  {" "}
                  <span className="skill-name">
                    {"npm"}
                  </span>
                  {" "}
                </div>
                <div className="skill-card" title="Visual Studio Code">
                  <img src="/assets/logo/vscode.png" alt="Visual Studio Code" loading="lazy" width="22" height="22" />
                  {" "}
                  <span className="skill-name">
                    {"VS Code"}
                  </span>
                  {" "}
                </div>
                <div className="skill-card" title="Android Studio">
                  <img src="/assets/logo/androidStudio.webp" alt="Android Studio" loading="lazy" width="22" height="22" />
                  {" "}
                  <span className="skill-name">
                    {"Android Studio"}
                  </span>
                  {" "}
                </div>
                <div className="skill-card" title="Figma">
                  <img src="/assets/logo/figma.webp" alt="Figma" loading="lazy" width="22" height="22" />
                  {" "}
                  <span className="skill-name">
                    {"Figma"}
                  </span>
                  {" "}
                </div>
              </div>
              {" "}
              <a href="#contact" className="btn btn--primary" style={{"marginTop": "2rem"}} data-magnetic="">
                {"Let's Work Together"}
              </a>
              {" "}
            </div>
            <div className="github-contrib" data-reveal="">
              <p className="github-contrib__label">
                {"GitHub Activity"}
              </p>
              <div className="github-contrib__wrapper">
                <img src="https://github-readme-stats-fast.vercel.app/api/streak?username=Vanny-Dev&amp;theme=github_dark&amp;hide_border=true" alt="GitHub contribution streak for Vanny-Dev" loading="lazy" />
              </div>
              <div className="github-contrib__wrapper">
                <img src="https://github-readme-stats-fast.vercel.app/api/top-langs/?username=Vanny-Dev&amp;layout=compact&amp;theme=github_dark&amp;hide_border=true" alt="Most used languages for Vanny-Dev" loading="lazy" />
              </div>
              {" "}
              <a href="https://github.com/Vanny-Dev" target="_blank" rel="noopener" className="github-contrib__link">
                {"View on GitHub →"}
              </a>
              {" "}
            </div>
          </div>
          <div className="education" data-reveal="">
            <p className="section-label">
              {"Education"}
            </p>
            <ol className="timeline">
              <li className="timeline__item timeline__item--current">
                {" "}
                <span className="timeline__dot" aria-hidden="true"></span>
                {" "}
                <p className="timeline__period">
                  {"2025 –"}
                </p>
                <h3 className="timeline__title">
                  {"Naga College Foundation"}
                </h3>
                <p className="timeline__meta">
                  {"Bachelor of Science in Computer Science"}
                </p>
                <p className="timeline__desc">
                  {"Currently taking up my degree while building and shipping the projects above on the side."}
                </p>
                <ul className="timeline__tags">
                  <li>
                    {"Web Development"}
                  </li>
                  <li>
                    {"Databases"}
                  </li>
                  <li>
                    {"Software Engineering"}
                  </li>
                </ul>
              </li>
              <li className="timeline__item">
                {" "}
                <span className="timeline__dot" aria-hidden="true"></span>
                {" "}
                <p className="timeline__period">
                  {"2018 – 2024"}
                </p>
                <h3 className="timeline__title">
                  {"San Fernando National High School"}
                </h3>
                <p className="timeline__meta">
                  {"Senior High School · ICT-CSS"}
                </p>
                <p className="timeline__desc">
                  {"Where I first started writing code and decided this was what I wanted to do."}
                </p>
              </li>
            </ol>
          </div>
          <div className="contrib-graph" id="contrib-graph" data-reveal="">
            <div className="contrib-graph__head">
              <p className="section-label">
                {"GitHub Contribution Graph"}
              </p>
              {" "}
              <a className="contrib-graph__user" href="https://github.com/Vanny-Dev" target="_blank" rel="noopener">
                {"@Vanny-Dev →"}
              </a>
              {" "}
            </div>
            <div className="contrib-graph__scroll">
              <img src="https://ghchart.rshah.org/00d2ff/Vanny-Dev" alt="Vanny-Dev GitHub contribution graph for the past year" loading="lazy" />
            </div>
            <div className="contrib-graph__fallback">
              {" "}
              <span>
                {"Contribution graph couldn't load right now —"}
              </span>
              {" "}
              <a className="link-arrow" href="https://github.com/Vanny-Dev" target="_blank" rel="noopener">
                {"see it on GitHub →"}
              </a>
              {" "}
            </div>
            <p className="contrib-graph__hint">
              {"Swipe to see the full year →"}
            </p>
          </div>
        </div>
      </section>
      <section className="work section" id="work">
        <div className="section-glow" data-px="0.22" data-px-max="90" aria-hidden="true"></div>
        <div className="container">
          <div className="section-header" data-reveal="">
            <p className="section-label">
              {"Selected Work"}
            </p>
            <h2 className="section-title" data-px="-0.04" data-px-max="26">
              {"Projects I'm"}
              <br />
              <em>
                {"proud of"}
              </em>
            </h2>
          </div>
          <div className="projects-grid">
            <article className="project" data-reveal="scale" data-tilt="">
              <div className="project__media">
                <img src="/assets/thumnails/qampus.webp" alt="Qampus queueing system interface" loading="lazy" data-px="0.10" data-px-max="26" />
              </div>
              <div className="project__glare" aria-hidden="true"></div>
              <div className="project__info">
                {" "}
                <span className="project__tag">
                  {"Web App + Mobile App"}
                </span>
                {" "}
                <h3 className="project__title">
                  {"Qampus"}
                </h3>
                <p className="project__desc">
                  {"A forward-looking web and mobile application built to improve the flexibility and speed of the queuing process in school offices, especially the cashier's office."}
                </p>
                <ul className="project__stack">
                  <li>
                    {"React"}
                  </li>
                </ul>
                <div className="project__links">
                  {" "}
                  <a href="https://qampus-production.up.railway.app/" target="_blank" rel="noopener" className="link-arrow" data-demo="" data-demo-title="Qampus">
                    {"Live Demo →"}
                  </a>
                  {" "}
                </div>
              </div>
            </article>
            <article className="project" data-reveal="scale" data-tilt="">
              <div className="project__media">
                <img src="/assets/thumnails/talktovanny.webp" alt="TalkToVanny messaging platform interface" loading="lazy" data-px="0.10" data-px-max="26" />
              </div>
              <div className="project__glare" aria-hidden="true"></div>
              <div className="project__info">
                {" "}
                <span className="project__tag">
                  {"Web App"}
                </span>
                {" "}
                <h3 className="project__title">
                  {"TalkToVanny"}
                </h3>
                <p className="project__desc">
                  {"A self-built messaging platform focused on delivering a personalized and engaging communication experience."}
                </p>
                <div className="project__links">
                  {" "}
                  <a href="https://talktovanny.vercel.app/user/vanny/" target="_blank" rel="noopener" className="link-arrow" data-demo="" data-demo-title="TalkToVanny">
                    {"Live Demo →"}
                  </a>
                  {" "}
                </div>
              </div>
            </article>
            <article className="project" data-reveal="scale" data-tilt="">
              <div className="project__media">
                <img src="/assets/thumnails/mathpad.webp" alt="MathPad learning platform interface" loading="lazy" data-px="0.10" data-px-max="26" />
              </div>
              <div className="project__glare" aria-hidden="true"></div>
              <div className="project__info">
                {" "}
                <span className="project__tag">
                  {"Web App + Mobile App"}
                </span>
                {" "}
                <h3 className="project__title">
                  {"MathPad"}
                </h3>
                <p className="project__desc">
                  {"An interactive learning platform designed to help students master math through theory, quizzes, and real-time progress tracking."}
                </p>
                <div className="project__links">
                  {" "}
                  <span className="link-arrow" aria-disabled="true">
                    {"Coming Soon"}
                  </span>
                  {" "}
                </div>
              </div>
            </article>
            <article className="project" data-reveal="scale" data-tilt="">
              <div className="project__media">
                <img src="/assets/thumnails/socialLinks.webp" alt="SocialLinks profile page" loading="lazy" data-px="0.10" data-px-max="26" />
              </div>
              <div className="project__glare" aria-hidden="true"></div>
              <div className="project__info">
                {" "}
                <span className="project__tag">
                  {"Web App"}
                </span>
                {" "}
                <h3 className="project__title">
                  {"SocialLinks"}
                </h3>
                <p className="project__desc">
                  {"Centralize, customize, and share all of your social profiles through a single sleek page."}
                </p>
                <div className="project__links">
                  {" "}
                  <a href="https://know-about-vanny.vercel.app/" target="_blank" rel="noopener" className="link-arrow" data-demo="" data-demo-title="SocialLinks">
                    {"Live Demo →"}
                  </a>
                  {" "}
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>
      <section className="competitions section" id="competitions">
        <div className="section-glow" data-px="0.22" data-px-max="90" aria-hidden="true"></div>
        <div className="container">
          <div className="section-header" data-reveal="">
            <p className="section-label">
              {"Tech Competitions"}
            </p>
            <h2 className="section-title" data-px="-0.04" data-px-max="26">
              {"Where I've"}
              <br />
              <em>
                {"competed"}
              </em>
            </h2>
            <p className="about__body" style={{"marginTop": "1rem"}}>
              {"Click an entry to view its certificate or photo."}
            </p>
          </div>
          <ol className="timeline">
            <li className="timeline__item timeline__item--open">
              {" "}
              <span className="timeline__dot" aria-hidden="true"></span>
              {" "}
              <p className="timeline__period">
                {"Aug 2026"}
              </p>
              <h3 className="timeline__title">
                {" "}
                <button className="comp-open" type="button" data-lightbox="/assets/thumnails/idea2startup-team.webp" data-caption="Idea2Startup Bootcamp 2026: NEXUS Multiverse — Team All CEO at Naga College Foundation, 25–26 August 2026" aria-label="Idea2Startup Bootcamp 2026 — view team photo">
                  {" Idea2Startup Bootcamp 2026 "}
                  <span className="comp-open__icon" aria-hidden="true">
                    {"⤢"}
                  </span>
                  {" "}
                </button>
                {" "}
              </h3>
              <p className="timeline__meta">
                {"NCF TIGRE Technology Business Incubator · Naga College Foundation"}
              </p>
              <p className="timeline__desc">
                {"Pitched as "}
                <strong>
                  {"Team All CEO"}
                </strong>
                {" in the "}
                <strong>
                  {"NEXUS Multiverse"}
                </strong>
                {" bootcamp hackathon — one of 12 teams formed across 5 departments — developing startup ideas with mentors and showcasing proposed solutions on the spot."}
              </p>
              <ul className="timeline__tags">
                <li>
                  {"Team All CEO"}
                </li>
                <li>
                  {"NEXUS Multiverse"}
                </li>
                <li>
                  {"Startup Pitching"}
                </li>
                <li>
                  {"2 Days"}
                </li>
                <li>
                  {"12 Teams · 5 Departments"}
                </li>
              </ul>
              <p className="timeline__note">
                {"Showcase format — no certificate issued, so this one opens the team photo."}
              </p>
              {" "}
              <a className="link-arrow timeline__extlink" href="https://www.facebook.com/share/p/1DLounw7wT/" target="_blank" rel="noopener">
                {"See the event post →"}
              </a>
              {" "}
            </li>
            <li className="timeline__item timeline__item--open">
              {" "}
              <span className="timeline__dot" aria-hidden="true"></span>
              {" "}
              <p className="timeline__period">
                {"Jun 2026"}
              </p>
              <h3 className="timeline__title">
                {" "}
                <button className="comp-open" type="button" data-gallery="[{&quot;src&quot;:&quot;/assets/thumnails/aseanai-full.webp&quot;,&quot;caption&quot;:&quot;ASEAN AI Hackathon 2026 — Certificate of Participation, Team Unauthorized 404&quot;},{&quot;src&quot;:&quot;/assets/thumnails/aseanai-workshop1-full.webp&quot;,&quot;caption&quot;:&quot;Workshop 1 — “Human-Centric AI and Regional Problem Solving”, Mapúa MCL Global Classroom, 23 April 2026&quot;}]" aria-label="ASEAN AI Hackathon 2026 — view 2 certificates">
                  {" ASEAN AI Hackathon 2026 "}
                  <span className="comp-open__icon" aria-hidden="true">
                    {"⤢"}
                  </span>
                  {" "}
                  <span className="comp-open__badge" aria-hidden="true">
                    {"2"}
                  </span>
                  {" "}
                </button>
                {" "}
              </h3>
              <p className="timeline__meta">
                {"Passage to ASEAN & ASEAN AI Council · Representing Naga College Foundation"}
              </p>
              <p className="timeline__desc">
                {"Competed as "}
                <strong>
                  {"Team Unauthorized 404"}
                </strong>
                {" in the region-wide AI hackathon, run under the theme “AI for a Resilient ASEAN” — innovation, sustainability and humanity. Included Workshop 1 on human-centric AI at Mapúa MCL."}
              </p>
              <ul className="timeline__tags">
                <li>
                  {"Team Unauthorized 404"}
                </li>
                <li>
                  {"ASEAN Regional"}
                </li>
                <li>
                  {"AI / Machine Learning"}
                </li>
              </ul>
            </li>
            <li className="timeline__item timeline__item--open">
              {" "}
              <span className="timeline__dot" aria-hidden="true"></span>
              {" "}
              <p className="timeline__period">
                {"May 2026"}
              </p>
              <p className="timeline__award">
                {"Master of EdTech Innovation"}
              </p>
              <h3 className="timeline__title">
                {" "}
                <button className="comp-open" type="button" data-gallery="[{&quot;src&quot;: &quot;/assets/thumnails/ccsoneup-recognition-full.webp&quot;, &quot;caption&quot;: &quot;Certificate of Recognition — Master of EdTech Innovation, Team ChatgipiTech, CCS One Up Hackathon&quot;}, {&quot;src&quot;: &quot;/assets/thumnails/ccsoneup-participation-full.webp&quot;, &quot;caption&quot;: &quot;Certificate of Participation — CCS One Up Hackathon, MTV Hall, 13 May 2026&quot;}]" aria-label="CCS One Up Hackathon — view 2 certificates">
                  {" CCS One Up Hackathon "}
                  <span className="comp-open__icon" aria-hidden="true">
                    {"⤢"}
                  </span>
                  {" "}
                  <span className="comp-open__badge" aria-hidden="true">
                    {"2"}
                  </span>
                  {" "}
                </button>
                {" "}
              </h3>
              <p className="timeline__meta">
                {"Naga College Foundation CCS · NCF TIGRE TBI & Startup Founders Association"}
              </p>
              <p className="timeline__desc">
                {"Competed as "}
                <strong>
                  {"Team ChatgipiTech"}
                </strong>
                {" at MTV Hall under the theme “A Better Tomorrow Bit by Bit”, and took the "}
                <strong>
                  {"Master of EdTech Innovation"}
                </strong>
                {" award for a solution that transforms learning through accessible technology."}
              </p>
              <ul className="timeline__tags">
                <li>
                  {"Team ChatgipiTech"}
                </li>
                <li>
                  {"EdTech"}
                </li>
                <li>
                  {"Hackathon"}
                </li>
              </ul>
            </li>
            <li className="timeline__item timeline__item--open">
              {" "}
              <span className="timeline__dot" aria-hidden="true"></span>
              {" "}
              <p className="timeline__period">
                {"Feb 2026"}
              </p>
              <h3 className="timeline__title">
                {" "}
                <button className="comp-open" type="button" data-lightbox="/assets/thumnails/softwarefestival-full.webp" data-caption="Software Festival 2026 — Certificate of Participation, Team STATUS 404" aria-label="Software Festival 2026 — view certificate">
                  {" Software Festival 2026 "}
                  <span className="comp-open__icon" aria-hidden="true">
                    {"⤢"}
                  </span>
                  {" "}
                </button>
                {" "}
              </h3>
              <p className="timeline__meta">
                {"Naga College Foundation · 79th Foundation Anniversary"}
              </p>
              <p className="timeline__desc">
                {"Competed as "}
                <strong>
                  {"Team STATUS 404"}
                </strong>
                {" in NCF’s software development festival, showcasing innovation and creativity in software development and technology. Held at the Student Pavilion, Naga City."}
              </p>
              <ul className="timeline__tags">
                <li>
                  {"Team STATUS 404"}
                </li>
                <li>
                  {"Software Development"}
                </li>
                <li>
                  {"Participant"}
                </li>
              </ul>
            </li>
            <li className="timeline__item timeline__item--open">
              {" "}
              <span className="timeline__dot" aria-hidden="true"></span>
              {" "}
              <p className="timeline__period">
                {"Oct 2025"}
              </p>
              <h3 className="timeline__title">
                {" "}
                <button className="comp-open" type="button" data-lightbox="/assets/thumnails/hackathon-full.webp" data-caption="SparkLAB Hackathon 2025 — Ateneo Arts and Algorithm Festival, Team ExtraRizz" aria-label="SparkLAB Hackathon 2025 — view certificate">
                  {" SparkLAB Hackathon 2025 "}
                  <span className="comp-open__icon" aria-hidden="true">
                    {"⤢"}
                  </span>
                  {" "}
                </button>
                {" "}
              </h3>
              <p className="timeline__meta">
                {"Ateneo Arts & Algorithm Festival · Ateneo de Naga University"}
              </p>
              <p className="timeline__desc">
                {"Competed as "}
                <strong>
                  {"Team ExtraRizz"}
                </strong>
                {" in a two-day hackathon at the Alingal Multipurpose Hall, hosted by the College of Computer Studies with TACTICS and ADNU MAGIS TBI."}
              </p>
              <ul className="timeline__tags">
                <li>
                  {"Team ExtraRizz"}
                </li>
                <li>
                  {"Hackathon"}
                </li>
                <li>
                  {"2 Days"}
                </li>
              </ul>
            </li>
          </ol>
        </div>
      </section>
      <section className="gallery section" id="gallery">
        <div className="section-glow" data-px="0.22" data-px-max="90" aria-hidden="true"></div>
        <div className="container">
          <div className="section-header" data-reveal="">
            <p className="section-label">
              {"A Little About Me"}
            </p>
            <h2 className="section-title" data-px="-0.04" data-px-max="26">
              {"Beyond the"}
              <br />
              <em>
                {"code"}
              </em>
            </h2>
          </div>
          <div className="gallery-group" data-reveal="">
            <h3 className="gallery-group__title">
              {"Skills"}
            </h3>
            <div className="gallery-grid">
              <article className="gallery-card gallery-card--row" data-reveal="scale" data-tilt="">
                <div className="gallery-card__media" data-lightbox="/assets/thumnails/linguist-full.webp" data-caption="Bikol, Filipino, English and Bahasa Indonesia" aria-label="Open languages image">
                  <img src="/assets/thumnails/linguist.webp" alt="Languages Vanny speaks" className="gallery-card__img" loading="lazy" data-px="0.10" data-px-max="26" />
                  {" "}
                  <span className="gallery-card__zoom" aria-hidden="true">
                    {"⤢"}
                  </span>
                  {" "}
                </div>
                <div className="project__glare" aria-hidden="true"></div>
                <div className="gallery-card__info">
                  {" "}
                  <span className="gallery-card__tag">
                    {"Languages"}
                  </span>
                  {" "}
                  <h3 className="gallery-card__title">
                    {"Linguist"}
                  </h3>
                  <p className="gallery-card__desc">
                    {"Bikol(dialect), Filipino, English, Bahasa Indonesia — picked up mostly by talking to people in their own language."}
                  </p>
                  <div className="gallery-card__links">
                    {" "}
                    <a href="/assets/thumnails/linguist-full.webp" className="link-arrow" data-lightbox="/assets/thumnails/linguist-full.webp" data-caption="Languages Vanny speaks">
                      {"View Image →"}
                    </a>
                    {" "}
                  </div>
                </div>
              </article>
            </div>
          </div>
          <div className="gallery-group" data-reveal="">
            <h3 className="gallery-group__title">
              {"Hobbies"}
            </h3>
            <div className="gallery-grid">
              <article className="gallery-card gallery-card--row" data-reveal="scale" data-tilt="">
                <div className="gallery-card__media" data-lightbox="/assets/thumnails/sepakTakraw-full.webp" data-caption="Sepak Takraw — competing since 2016" aria-label="Open Sepak Takraw image">
                  <img src="/assets/thumnails/sepakTakraw.webp" alt="Vanny playing Sepak Takraw" className="gallery-card__img" loading="lazy" data-px="0.10" data-px-max="26" />
                  {" "}
                  <span className="gallery-card__zoom" aria-hidden="true">
                    {"⤢"}
                  </span>
                  {" "}
                </div>
                <div className="project__glare" aria-hidden="true"></div>
                <div className="gallery-card__info">
                  {" "}
                  <span className="gallery-card__tag">
                    {"Sport"}
                  </span>
                  {" "}
                  <h3 className="gallery-card__title">
                    {"Sepak Takraw Athlete"}
                  </h3>
                  <p className="gallery-card__desc">
                    {"Competing consistently since 2016 — the sport that taught me how to keep showing up and practising something until it clicks."}
                  </p>
                  <div className="gallery-card__links">
                    {" "}
                    <a href="/assets/thumnails/sepakTakraw-full.webp" className="link-arrow" data-lightbox="/assets/thumnails/sepakTakraw-full.webp" data-caption="Sepak Takraw since 2016">
                      {"View Image →"}
                    </a>
                    {" "}
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>
    </main>
    {" "}
    {" "}
    <footer className="footer" id="contact">
      <div className="footer__inner container">
        <div className="footer__top">
          <div className="footer__cta-block">
            <p className="section-label">
              {"Contact"}
            </p>
            <h2 className="footer__heading">
              {"Got a project?"}
              <br />
              <em>
                {"Contact me."}
              </em>
            </h2>
            <div className="footer__contact-row">
              {" "}
              <a className="footer__email" href="mailto:jovannydeleon2906@gmail.com">
                {"jovannydeleon2906@gmail.com"}
              </a>
              {" "}
              <button className="copy-btn" id="copy-email" type="button" data-email="jovannydeleon2906@gmail.com" aria-label="Copy email address">
                {" "}
                <i className="fa-regular fa-copy" aria-hidden="true"></i>
                {" "}
                <span className="copy-btn__label">
                  {"Copy"}
                </span>
                {" "}
              </button>
              {" "}
            </div>
            <form className="contact-form" id="contact-form" action="https://api.web3forms.com/submit" method="POST">
              <input type="hidden" name="access_key" value="90ec3b82-6184-4ba8-b42b-ff852efab3b1" />
              <input type="hidden" name="subject" value="New message from your portfolio" />
              <input type="hidden" name="from_name" value="VannyDev Portfolio" />
              <div className="field">
                {" "}
                <label htmlFor="cf-name">
                  {"Your name"}
                </label>
                {" "}
                <input type="text" id="cf-name" name="name" required minLength={2} maxLength={80} autoComplete="name" placeholder="Juan Dela Cruz" />
                {" "}
                <span className="field__error">
                  {"Please enter your name."}
                </span>
                {" "}
              </div>
              <div className="field">
                {" "}
                <label htmlFor="cf-email">
                  {"Your email"}
                </label>
                {" "}
                <input type="email" id="cf-email" name="email" required autoComplete="email" placeholder="you@example.com" />
                {" "}
                <span className="field__error">
                  {"Please enter a valid email address."}
                </span>
                {" "}
              </div>
              <div className="field">
                {" "}
                <label htmlFor="cf-message">
                  {"Message"}
                </label>
                {" "}
                <textarea id="cf-message" name="message" required minLength={10} maxLength={2000} placeholder="Tell me about your project…"></textarea>
                {" "}
                <span className="field__error">
                  {"Please write at least 10 characters."}
                </span>
                {" "}
              </div>
              <div className="hp" aria-hidden="true">
                {" "}
                <label htmlFor="cf-botcheck">
                  {"Leave this empty"}
                </label>
                {" "}
                <input type="checkbox" id="cf-botcheck" name="botcheck" tabIndex={-1} autoComplete="off" />
              </div>
              {" "}
              <button type="submit" className="btn btn--primary contact-form__submit">
                {"Send Message"}
              </button>
              {" "}
              <p className="form-status" id="form-status" role="status" aria-live="polite"></p>
            </form>
            <div className="footer__socials">
              {" "}
              <a className="footer__social" href="https://github.com/Vanny-Dev" target="_blank" rel="noopener" aria-label="GitHub">
                <i className="fa-brands fa-github" aria-hidden="true"></i>
              </a>
              {" "}
              <a className="footer__social" href="https://www.linkedin.com/in/jovanny-de-leon-a48a492b0/" target="_blank" rel="noopener" aria-label="LinkedIn">
                <i className="fa-brands fa-linkedin-in" aria-hidden="true"></i>
              </a>
              {" "}
              <a className="footer__social" href="https://www.instagram.com/vanny.dev" target="_blank" rel="noopener" aria-label="Instagram">
                <i className="fa-brands fa-instagram" aria-hidden="true"></i>
              </a>
              {" "}
              <a className="footer__social" href="https://www.tiktok.com/@vanny_.dev" target="_blank" rel="noopener" aria-label="TikTok">
                <i className="fa-brands fa-tiktok" aria-hidden="true"></i>
              </a>
              {" "}
            </div>
          </div>
          <div className="footer__links">
            <div className="footer__col">
              <p className="footer__col-title">
                {"Navigation"}
              </p>
              {" "}
              <a href="#home">
                {"Home"}
              </a>
              {" "}
              <a href="#about">
                {"About"}
              </a>
              {" "}
              <a href="#work">
                {"Work"}
              </a>
              {" "}
              <a href="#competitions">
                {"Competitions"}
              </a>
              {" "}
              <a href="#gallery">
                {"Gallery"}
              </a>
              {" "}
            </div>
            <div className="footer__col">
              <p className="footer__col-title">
                {"Connect"}
              </p>
              {" "}
              <a href="https://github.com/Vanny-Dev" target="_blank" rel="noopener">
                {"GitHub"}
              </a>
              {" "}
              <a href="https://www.linkedin.com/in/jovanny-de-leon-a48a492b0/" target="_blank" rel="noopener">
                {"LinkedIn"}
              </a>
              {" "}
              <a href="https://www.instagram.com/vanny.dev" target="_blank" rel="noopener">
                {"Instagram"}
              </a>
              {" "}
              <a href="https://www.tiktok.com/@vanny_.dev" target="_blank" rel="noopener">
                {"TikTok"}
              </a>
              {" "}
            </div>
          </div>
        </div>
        <div className="footer__bottom">
          {" "}
          <a href="#home" className="logo" aria-label="Back to top">
            <img src="/assets/logo/myLogo.webp" alt="VannyDev logo" width="44" height="44" loading="lazy" />
          </a>
          {" "}
          <p className="footer__copy">
            {"© "}
            <span id="year">
              {"2026"}
            </span>
            {" Jovanny De Leon — built with care."}
          </p>
        </div>
      </div>
    </footer>
    {" "}
    {" "}
    <button className="to-top" id="to-top" type="button" aria-label="Back to top">
      {" "}
      <i className="fa-solid fa-arrow-up" aria-hidden="true"></i>
      {" "}
    </button>
    {" "}
    {" "}
    <div className="demo-modal" id="demo-modal" role="dialog" aria-modal="true" aria-labelledby="demo-modal-title" aria-hidden="true">
      <div className="demo-modal__panel">
        <header className="demo-modal__bar">
          <div className="demo-modal__dots" aria-hidden="true">
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className="demo-modal__meta">
            <p className="demo-modal__title" id="demo-modal-title">
              {"Live demo"}
            </p>
            <p className="demo-modal__url"></p>
          </div>
          <div className="demo-modal__actions">
            {" "}
            <a className="demo-modal__open" href="#" target="_blank" rel="noopener" data-demo-open="">
              {" "}
              <i className="fa-solid fa-arrow-up-right-from-square" aria-hidden="true"></i>
              <span>
                {"New tab"}
              </span>
              {" "}
            </a>
            {" "}
            <button className="demo-modal__close" type="button" aria-label="Close demo">
              {" "}
              <i className="fa-solid fa-xmark" aria-hidden="true"></i>
              {" "}
            </button>
            {" "}
          </div>
        </header>
        <div className="demo-modal__stage">
          <iframe className="demo-modal__frame" title="Live project demo" src="" referrerPolicy="no-referrer-when-downgrade"></iframe>
          <div className="demo-modal__loader">
            {" "}
            <span className="demo-modal__spinner" aria-hidden="true"></span>
            {" "}
            <p>
              {"Loading demo…"}
            </p>
          </div>
          <div className="demo-modal__fallback">
            <p>
              <strong>
                {"This demo can't be embedded here."}
              </strong>
              {"Some sites block being shown inside another page."}
            </p>
            {" "}
            <a className="btn btn--primary" href="#" target="_blank" rel="noopener" data-demo-open="">
              {"Open in a new tab"}
            </a>
            {" "}
          </div>
        </div>
      </div>
    </div>
    {" "}
    {" "}
    <div className="lightbox" id="lightbox" role="dialog" aria-modal="true" aria-label="Image viewer" aria-hidden="true">
      {" "}
      <button className="lightbox__close" type="button" aria-label="Close image viewer">
        {" "}
        <i className="fa-solid fa-xmark" aria-hidden="true"></i>
        {" "}
      </button>
      {" "}
      <button className="lightbox__nav lightbox__prev" type="button" aria-label="Previous image">
        {" "}
        <i className="fa-solid fa-chevron-left" aria-hidden="true"></i>
        {" "}
      </button>
      {" "}
      <button className="lightbox__nav lightbox__next" type="button" aria-label="Next image">
        {" "}
        <i className="fa-solid fa-chevron-right" aria-hidden="true"></i>
        {" "}
      </button>
      {" "}
      <figure className="lightbox__figure">
        <img className="lightbox__img" src="" alt="" />
        <figcaption className="lightbox__caption"></figcaption>
        <p className="lightbox__count" aria-live="polite"></p>
      </figure>
    </div>
    {" "}
    {" "}
    {" "}
      <Script src="/scripts/main.js" strategy="afterInteractive" />
    </>
  );
}
