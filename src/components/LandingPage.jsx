import "./LandingPage.css";

function LandingPage({ onGetStarted, onSignUp }) {
    return (
        <div className="pw-landing">

            {/* NAVBAR */}
            <nav className="pw-navbar">

                <div className="pw-logo">
                    <div className="pw-logo-icon">✦</div>
                    <span>
                        PulseWorks<span className="pw-ai">.AI</span>
                    </span>
                </div>

                <div className="pw-nav-links">
                    <a href="#home">Home</a>
                    <a href="#features">Features</a>
                    <a href="#about">About</a>
                </div>

                <div className="pw-auth-buttons">
                    <button
                        className="pw-login-btn"
                        onClick={onGetStarted}
                    >
                        Login
                    </button>

                    <button
                        className="pw-signup-btn"
                        onClick={onSignUp}
                    >
                        Sign Up →
                    </button>
                </div>

            </nav>

            {/* HERO SECTION */}
            <section className="pw-hero" id="home">

                <div className="pw-hero-content">

                    <div className="pw-badge">
                        <span>✦</span>
                        SMART WORKSPACE MANAGEMENT
                    </div>

                    <h1>
                        Work Smarter.
                        <br />
                        <span>Achieve More.</span>
                    </h1>

                    <p>
                        Bring your team, tasks and productivity together.
                        PulseWorks-AI helps you organize work, assign
                        responsibilities and track progress effortlessly.
                    </p>

                    <div className="pw-hero-actions">
                        <button
                            className="pw-primary-btn"
                            onClick={onSignUp}
                        >
                            Get Started <span>→</span>
                        </button>

                        <a href="#features" className="pw-explore-btn">
                            Explore Features
                        </a>
                    </div>

                    <div className="pw-trust">
                        <div className="pw-trust-icon">✓</div>
                        <span>Simple workflow management</span>

                        <div className="pw-trust-icon">✓</div>
                        <span>Organized team collaboration</span>
                    </div>

                </div>

                {/* DASHBOARD PREVIEW */}
                <div className="pw-hero-preview">

                    <div className="pw-preview-glow"></div>

                    <div className="pw-dashboard">

                        <div className="pw-dashboard-header">
                            <div>
                                <h3>Workspace Overview</h3>
                                <p>Your productivity at a glance</p>
                            </div>

                            <div className="pw-live">
                                <span></span> Overview
                            </div>
                        </div>

                        {/* STATISTICS */}
                        <div className="pw-stats">

                            <div className="pw-stat">
                                <div className="pw-stat-icon purple">▤</div>
                                <p>Total Tasks</p>
                                <h2>24</h2>
                                <small>All assigned tasks</small>
                            </div>

                            <div className="pw-stat">
                                <div className="pw-stat-icon orange">◷</div>
                                <p>In Progress</p>
                                <h2>08</h2>
                                <small>Currently working</small>
                            </div>

                            <div className="pw-stat">
                                <div className="pw-stat-icon green">✓</div>
                                <p>Completed</p>
                                <h2>16</h2>
                                <small>Successfully finished</small>
                            </div>

                        </div>

                        {/* RECENT TASKS */}
                        <div className="pw-task-section">

                            <div className="pw-task-heading">
                                <h3>Recent Tasks</h3>
                                <span>View all →</span>
                            </div>

                            <div className="pw-task-row">
                                <div className="pw-task-symbol purple-bg">✦</div>

                                <div className="pw-task-info">
                                    <h4>Website Development</h4>
                                    <p>Design and development</p>
                                </div>

                                <span className="pw-task-status progress">
                                    In Progress
                                </span>
                            </div>

                            <div className="pw-task-row">
                                <div className="pw-task-symbol green-bg">✓</div>

                                <div className="pw-task-info">
                                    <h4>UI/UX Design</h4>
                                    <p>Application interface</p>
                                </div>

                                <span className="pw-task-status completed">
                                    Completed
                                </span>
                            </div>

                            <div className="pw-task-row">
                                <div className="pw-task-symbol orange-bg">◷</div>

                                <div className="pw-task-info">
                                    <h4>API Integration</h4>
                                    <p>Backend integration</p>
                                </div>

                                <span className="pw-task-status pending">
                                    Pending
                                </span>
                            </div>

                        </div>

                    </div>
                </div>

            </section>

            {/* FEATURES SECTION */}
            <section className="pw-features" id="features">

                <div className="pw-section-heading">
                    <span>OUR FEATURES</span>

                    <h2>
                        Everything You Need
                        <br />
                        To Manage Work Better
                    </h2>

                    <p>
                        Powerful tools designed to make your daily
                        workflow easier and more productive.
                    </p>
                </div>

                <div className="pw-feature-grid">

                    <div className="pw-feature-card">
                        <div className="pw-feature-icon purple-bg">▤</div>
                        <h3>Task Management</h3>
                        <p>
                            Create, organize and manage your tasks
                            from one centralized workspace.
                        </p>
                    </div>

                    <div className="pw-feature-card">
                        <div className="pw-feature-icon blue-bg">♙</div>
                        <h3>Employee Assignment</h3>
                        <p>
                            Assign responsibilities to employees
                            and manage your team efficiently.
                        </p>
                    </div>

                    <div className="pw-feature-card">
                        <div className="pw-feature-icon orange-bg">⚡</div>
                        <h3>Priority Management</h3>
                        <p>
                            Organize tasks based on Low, Medium
                            and High priority levels.
                        </p>
                    </div>

                    <div className="pw-feature-card">
                        <div className="pw-feature-icon green-bg">◷</div>
                        <h3>Progress Tracking</h3>
                        <p>
                            Monitor Pending, In Progress and
                            Completed tasks with ease.
                        </p>
                    </div>

                </div>

            </section>

            {/* ABOUT SECTION */}
            <section className="pw-about" id="about">

                <div className="pw-about-visual">

                    <div className="pw-about-card">
                        <div className="pw-about-symbol">✦</div>

                        <h3>One Workspace.</h3>

                        <h3 className="pw-about-highlight">
                            Endless Possibilities.
                        </h3>

                        <p>
                            Organize your tasks and achieve your goals.
                        </p>

                        <div className="pw-progress">
                            <div></div>
                        </div>

                        <small>Productivity made simple</small>
                    </div>

                </div>

                <div className="pw-about-content">

                    <span>ABOUT PULSEWORKS-AI</span>

                    <h2>
                        Transform The Way
                        <br />
                        You Manage Work.
                    </h2>

                    <p>
                        PulseWorks-AI provides a simple and organized
                        way to manage tasks and team responsibilities.
                        From creating tasks to tracking deadlines,
                        everything is available in one workspace.
                    </p>

                    <div className="pw-about-points">

                        <div>
                            <span>✓</span>
                            Easy task creation and assignment
                        </div>

                        <div>
                            <span>✓</span>
                            Clear priority and deadline management
                        </div>

                        <div>
                            <span>✓</span>
                            Better visibility of task progress
                        </div>

                    </div>

                    <button
                        className="pw-primary-btn"
                        onClick={onSignUp}
                    >
                        Start Now <span>→</span>
                    </button>

                </div>

            </section>

            {/* CALL TO ACTION */}
            <section className="pw-cta">

                <div className="pw-cta-content">

                    <div className="pw-cta-icon">✦</div>

                    <h2>Ready to Work Smarter?</h2>

                    <p>
                        Bring your tasks and team together with
                        PulseWorks-AI.
                    </p>

                    <button
                        className="pw-cta-btn"
                        onClick={onSignUp}
                    >
                        Create Your Account →
                    </button>

                </div>

            </section>

            {/* FOOTER */}
            <footer className="pw-footer">

                <div className="pw-footer-top">

                    <div className="pw-logo">
                        <div className="pw-logo-icon">✦</div>

                        <span>
                            PulseWorks<span className="pw-ai">.AI</span>
                        </span>
                    </div>

                    <p>
                        Smarter task management. Better productivity.
                    </p>

                </div>

                <div className="pw-footer-bottom">
                    <p>© 2026 PulseWorks-AI. All rights reserved.</p>
                    <p>Designed for productive teams.</p>
                </div>

            </footer>

        </div>
    );
}

export default LandingPage;
