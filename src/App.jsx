import { useMemo, useState } from 'react';

const languageMessages = {
  Hindi: '“Namaste! Aapke liye kaun sa scheme sahi hai, main aapko help kar sakta hoon?”',
  English: '“Hello! I can help you find the right scheme and understand the next steps.”',
  Marathi: '“नमस्कार! कोणती योजना तुमच्यासाठी योग्य आहे हे मला सांगितल्यास मी मदत करतो.”',
  Tamil: '“வணக்கம்! உங்களுக்கான திட்டத்தை கண்டுபிடிப்பதில் நான் உதவ முடியும்.”',
};

const languageOptions = ['Hindi', 'English', 'Marathi', 'Tamil'];

function App() {
  const [selectedLanguage, setSelectedLanguage] = useState('Hindi');
  const [listening, setListening] = useState(false);

  const prompt = useMemo(
    () => languageMessages[selectedLanguage] || languageMessages.Hindi,
    [selectedLanguage]
  );

  return (
    <div className="page-shell">
      <header className="topbar">
        <div className="container nav-wrap">
          <div className="brand" aria-label="Sakhi AI home">
            <div className="brand-mark">S</div>
            <span>Sakhi AI</span>
          </div>

          <nav className="nav" aria-label="Main navigation">
            <a href="#features">Features</a>
            <a href="#how-it-works">How it works</a>
            <a href="#schemes">Schemes</a>
            <a href="#safety">Safety</a>
          </nav>

          <button className="nav-cta">Try Demo</button>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="container hero-grid">
            <div className="hero-copy">
              <span className="eyebrow">Voice-first support for women</span>
              <h1>Find the right government help with a friendly voice guide.</h1>
              <p className="lede">
                Speak in your language and get clear guidance about welfare schemes,
                eligibility, and next steps without confusing forms or jargon.
              </p>

              <div className="language-picker" aria-label="Language selector">
                {languageOptions.map((language) => (
                  <button
                    key={language}
                    type="button"
                    className={`language-btn ${selectedLanguage === language ? 'active' : ''}`}
                    onClick={() => setSelectedLanguage(language)}
                  >
                    {language === 'Hindi'
                      ? 'हिन्दी'
                      : language === 'Marathi'
                        ? 'मराठी'
                        : language === 'Tamil'
                          ? 'தமிழ்'
                          : 'English'}
                  </button>
                ))}
              </div>

              <div className="hero-actions">
                <button type="button" className="primary-btn">Speak with Sakhi</button>
                <button type="button" className="secondary-btn">Explore schemes</button>
              </div>

              <ul className="hero-stats" aria-label="Platform stats">
                <li><strong>20+</strong><span>regional voices</span></li>
                <li><strong>100%</strong><span>voice guided</span></li>
                <li><strong>24/7</strong><span>friendly assistance</span></li>
              </ul>
            </div>

            <div className="hero-visual" aria-label="Sakhi AI assistant panel">
              <div className="assistant-card">
                <div className="assistant-header">
                  <div className="status">
                    <span className="dot"></span>
                    <span>Listening</span>
                  </div>
                  <button type="button" className="mini-action" aria-label="Change language">
                    Language
                  </button>
                </div>

                <div className="assistant-avatar">
                  <div className="ring ring-one"></div>
                  <div className="ring ring-two"></div>
                  <div className="avatar-core">
                    <span>S</span>
                  </div>
                </div>

                <div className="voice-wave" aria-hidden="true">
                  <span></span><span></span><span></span><span></span><span></span><span></span>
                </div>

                <div className="prompt-card">
                  <p className="prompt-label">Sakhi says</p>
                  <p className="prompt-text">{prompt}</p>
                </div>

                <button
                  type="button"
                  className={`listen-btn ${listening ? 'is-active' : ''}`}
                  onClick={() => setListening((state) => !state)}
                  aria-label="Start listening"
                >
                  <span className="mic-icon">🎙️</span>
                  <span>{listening ? 'Listening…' : 'Listen now'}</span>
                </button>
              </div>
            </div>
          </div>
        </section>

        <section className="feature-strip" id="features">
          <div className="container strip-grid">
            <article className="feature-card">
              <div className="icon-wrap rose">🗣️</div>
              <h3>Voice-first guidance</h3>
              <p>Speak naturally and get simple, clear answers in your own language.</p>
            </article>
            <article className="feature-card">
              <div className="icon-wrap gold">🧭</div>
              <h3>Zero-overload steps</h3>
              <p>Know what to do next, and what documents or eligibility rules matter.</p>
            </article>
            <article className="feature-card">
              <div className="icon-wrap teal">🔒</div>
              <h3>Private and secure</h3>
              <p>Discreet support designed to protect privacy while assisting every step.</p>
            </article>
          </div>
        </section>

        <section className="section" id="how-it-works">
          <div className="container">
            <div className="section-heading">
              <span className="eyebrow">How it works</span>
              <h2>Three simple steps to get the help you need.</h2>
            </div>

            <div className="steps-grid">
              <article className="step-card">
                <span className="step-number">01</span>
                <h3>Choose your language</h3>
                <p>Switch between Hindi, Marathi, Tamil, Bengali, and more with one tap.</p>
              </article>

              <article className="step-card">
                <span className="step-number">02</span>
                <h3>Ask by voice or text</h3>
                <p>Say what you need or type a quick question about jobs, health, or education support.</p>
              </article>

              <article className="step-card">
                <span className="step-number">03</span>
                <h3>Review plan and apply</h3>
                <p>See matching schemes, understand the requirements, and save useful options for later.</p>
              </article>
            </div>
          </div>
        </section>

        <section className="section alt" id="schemes">
          <div className="container">
            <div className="section-heading">
              <span className="eyebrow">Popular schemes</span>
              <h2>Explore support built around women’s everyday needs.</h2>
            </div>

            <div className="scheme-grid">
              <article className="scheme-card">
                <span className="tag tag-rose">Women</span>
                <h3>PM Ujjwala Yojana</h3>
                <p>Free LPG connections and support for cleaner cooking in low-income households.</p>
                <ul>
                  <li>Income-based eligibility</li>
                  <li>Document guidance</li>
                  <li>Application support</li>
                </ul>
              </article>

              <article className="scheme-card">
                <span className="tag tag-gold">Health</span>
                <h3>Pradhan Mantri Matru Vandana Yojana</h3>
                <p>Cash support during pregnancy and early motherhood for eligible women.</p>
                <ul>
                  <li>Pregnancy benefits</li>
                  <li>Documentation checklist</li>
                  <li>Follow-up tips</li>
                </ul>
              </article>

              <article className="scheme-card">
                <span className="tag tag-teal">Education</span>
                <h3>Post-Matric Scholarship</h3>
                <p>Financial support for women continuing higher education and skill development.</p>
                <ul>
                  <li>Income and course checks</li>
                  <li>Deadline reminders</li>
                  <li>Application tracker</li>
                </ul>
              </article>
            </div>
          </div>
        </section>

        <section className="section safety-section" id="safety">
          <div className="container safety-grid">
            <div className="safety-copy">
              <span className="eyebrow">Designed for safety</span>
              <h2>Private and discreet help, even in busy public spaces.</h2>
              <p>
                Sakhi AI is built to feel calm and supportive. It keeps the experience simple,
                accessible, and private when users need it most.
              </p>
              <div className="check-list">
                <div><span>✓</span> Voice-first navigation</div>
                <div><span>✓</span> Private speech handling</div>
                <div><span>✓</span> Quick access to saved schemes</div>
              </div>
            </div>

            <div className="discreet-panel" aria-label="Discreet mode preview">
              <div className="mini-topbar">
                <span className="mini-dot"></span>
                <span>Private mode</span>
              </div>
              <div className="calculator-box">
                <div className="calc-screen">8,950</div>
                <div className="keypad">
                  <span>7</span><span>8</span><span>9</span>
                  <span>4</span><span>5</span><span>6</span>
                  <span>1</span><span>2</span><span>3</span>
                  <span>÷</span><span>0</span><span>=</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-wrap">
          <div>
            <div className="brand footer-brand">
              <div className="brand-mark">S</div>
              <span>Sakhi AI</span>
            </div>
            <p>Helping women find welfare support in every language, with confidence and clarity.</p>
          </div>

          <button type="button" className="primary-btn">Get started</button>
        </div>
      </footer>
    </div>
  );
}

export default App;
