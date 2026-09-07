import Image from "next/image";
import { Header } from "@/components/Header";
import { RequestForm } from "@/components/RequestForm";

const features = [
  { number: "01", title: "Admissions", copy: "Collect applications, review documents and move every applicant through a clear admission workflow." },
  { number: "02", title: "Attendance", copy: "Record student and staff attendance and see daily trends without chasing registers." },
  { number: "03", title: "Fees", copy: "Keep fee records, vouchers and payment information connected to each student profile." },
  { number: "04", title: "Academics", copy: "Organize classes, sections, subjects, timetables, exams, marks and published results." },
  { number: "05", title: "Daily learning", copy: "Share diaries, homework, assignments, course materials and online tests from one place." },
  { number: "06", title: "Communication", copy: "Send relevant notices to the right campus, class, section, teacher, student or parent." },
] as const;

const portalRows = [
  ["Administration", "Campuses, admissions, people, fees and reporting"],
  ["Teachers", "Attendance, diary, assignments, tests and marks"],
  ["Students", "Courses, schedules, submissions and results"],
  ["Parents", "Attendance, homework, fees and school updates"],
] as const;

export default function Home() {
  return (
    <div id="top">
      <Header />

      <main>
        <section className="hero shell">
          <div className="hero-copy">
            <p className="eyebrow">School management & learning, connected</p>
            <h1>Your school has enough moving parts.<span>The system should make them simpler.</span></h1>
            <p className="hero-lead">
              Nisaab360 brings administration, classroom work, attendance, results and parent communication into one place your team can understand.
            </p>
            <div className="hero-actions">
              <a className="primary-button" href="#request">Request institution access <span aria-hidden="true">→</span></a>
              <a className="text-link" href="#platform">Explore the platform <span aria-hidden="true">↓</span></a>
            </div>
          </div>

          <div className="hero-visual" aria-label="Nisaab360 institution dashboard preview">
            <div className="visual-label"><span>01 / The platform</span><span>Live institution overview</span></div>
            <div className="dashboard-window">
              <aside className="demo-sidebar">
                <div className="demo-brand"><Image src="/Logo.png" width={31} height={31} alt="" /><b>Nisaab360</b></div>
                {['Overview', 'Students', 'Staff', 'Academics', 'Attendance', 'Results'].map((item, index) => (
                  <span className={index === 0 ? "active" : ""} key={item}><i />{item}</span>
                ))}
                <small>Institution portal</small>
              </aside>
              <div className="demo-content">
                <div className="demo-heading"><div><small>Monday, 07 September</small><h2>Good morning.</h2></div><b>Current session</b></div>
                <div className="metric-grid">
                  <article><span>Total students</span><strong>1,248</strong><small>Active records</small></article>
                  <article><span>Teaching staff</span><strong>86</strong><small>Across 3 campuses</small></article>
                  <article><span>Attendance today</span><strong>94%</strong><small>Updated live</small></article>
                  <article><span>Open admissions</span><strong>32</strong><small>7 need review</small></article>
                </div>
                <div className="demo-bottom">
                  <article className="chart-card">
                    <div><span>Attendance trend</span><small>Last 8 weeks</small></div>
                    <div className="chart-bars" aria-hidden="true">{[54, 70, 62, 78, 73, 89, 82, 94].map((height, index) => <i key={index} style={{ height: `${height}%` }} />)}</div>
                  </article>
                  <article className="today-card">
                    <span>Today</span>
                    <div><i className="green-dot" /><p><b>Morning attendance</b><small>Recorded</small></p></div>
                    <div><i className="orange-dot" /><p><b>Fee reminders</b><small>42 scheduled</small></p></div>
                    <div><i className="dark-dot" /><p><b>Parent notices</b><small>Delivered</small></p></div>
                  </article>
                </div>
              </div>
            </div>
          </div>

          <div className="hero-proof">
            <div><strong>One</strong><span>connected student record</span></div>
            <div><strong>Four</strong><span>role-specific portals</span></div>
            <div><strong>Every day</strong><span>clearer school operations</span></div>
            <p>Designed for the way educational institutions in Pakistan actually work.</p>
          </div>
        </section>

        <section className="statement-section" id="platform">
          <div className="shell statement-grid">
            <div><p className="chapter">02</p><p className="eyebrow">The institution view</p></div>
            <div>
              <h2>Know what is happening before someone has to ask.</h2>
              <p>The morning should not begin with five spreadsheets and a trail of messages. Nisaab360 gives administrators a shared picture of the day.</p>
            </div>
          </div>
          <div className="operations shell">
            <div className="operations-copy">
              <p className="eyebrow">One operational view</p>
              <h3>From the front office to every classroom.</h3>
              <p>Information follows the structure of your institution, from campus and class to the individual student.</p>
              <div className="rule-list">
                <div><span>Campuses</span><strong>One shared system</strong></div>
                <div><span>People</span><strong>Students, staff and parents</strong></div>
                <div><span>Academics</span><strong>Classes, results and history</strong></div>
              </div>
            </div>
            <div className="structure-card" aria-hidden="true">
              <div className="structure-top"><small>Institution structure</small><span>Live</span></div>
              <div className="node root-node"><i />Nisaab360 School System</div>
              <div className="branch-grid">
                <div><span>Campus 01</span><b>Main campus</b><small>742 students</small></div>
                <div><span>Campus 02</span><b>Junior campus</b><small>361 students</small></div>
                <div><span>Campus 03</span><b>North campus</b><small>145 students</small></div>
              </div>
              <div className="mini-record"><span>Student record</span><div><i>HA</i><p><b>Hassan Ahmed</b><small>Grade 8 · Section A</small></p><strong>Active</strong></div></div>
            </div>
          </div>
        </section>

        <section className="features-section shell" id="features">
          <div className="section-intro">
            <div><p className="chapter">03</p><p className="eyebrow">What you can manage</p></div>
            <h2>The work between the bells, in one place.</h2>
          </div>
          <div className="feature-grid">
            {features.map((feature) => (
              <article key={feature.number}>
                <span>{feature.number}</span>
                <h3>{feature.title}</h3>
                <p>{feature.copy}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="portals-section" id="portals">
          <div className="shell portals-grid">
            <div className="portal-copy">
              <p className="chapter">04</p>
              <p className="eyebrow">Built for everyone involved</p>
              <h2>Each person sees the work that matters to them.</h2>
              <p>Dedicated portals keep the experience focused while every update stays connected to the same institution record.</p>
              <div className="portal-list">
                {portalRows.map(([title, copy], index) => (
                  <div key={title}><span>0{index + 1}</span><p><b>{title}</b><small>{copy}</small></p><i>↗</i></div>
                ))}
              </div>
            </div>
            <div className="phone-stage" aria-label="Nisaab360 mobile student portal preview">
              <div className="phone">
                <div className="phone-speaker" />
                <div className="phone-screen">
                  <div className="mobile-brand"><Image src="/Logo.png" width={28} height={28} alt="" /><span><small>Student portal</small><b>Nisaab360</b></span><i>●</i></div>
                  <p className="mobile-greeting">Good morning, Ayesha.</p>
                  <div className="attendance-tile"><span>Attendance this month</span><strong>96%</strong><small>22 of 23 days present</small><i style={{ width: "96%" }} /></div>
                  <div className="mobile-heading"><b>Today</b><span>Monday, 07 Sep</span></div>
                  <div className="mobile-row"><i>09:00</i><p><b>Mathematics</b><small>Room 08 · Mr. Ali</small></p><span>→</span></div>
                  <div className="mobile-row"><i>10:10</i><p><b>English</b><small>Room 12 · Ms. Sara</small></p><span>→</span></div>
                  <div className="mobile-notice"><small>New announcement</small><b>Parent-teacher meeting</b><span>View notice →</span></div>
                  <div className="mobile-nav"><b>⌂</b><span>□</span><span>✓</span><span>○</span></div>
                </div>
              </div>
              <p>One current view, wherever the school day goes.</p>
            </div>
          </div>
        </section>

        <section className="request-section" id="request">
          <div className="shell request-grid">
            <div className="request-copy">
              <p className="chapter">05</p>
              <p className="eyebrow">Request institution access</p>
              <h2>Tell us about your school.</h2>
              <p>Share a few details and the Nisaab360 team will contact you to understand your institution and help you get started.</p>
              <div className="request-note"><span>What happens next</span><ol><li>We review your institution details.</li><li>Our team contacts you directly.</li><li>We help you choose the right setup.</li></ol></div>
            </div>
            <RequestForm />
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="shell footer-grid">
          <div className="footer-brand"><Image src="/Logo.png" width={38} height={38} alt="" /><span><b>Nisaab360</b><small>School management & learning, connected.</small></span></div>
          <a href="#top">Back to top ↑</a>
          <p>© {new Date().getFullYear()} Nisaab360. Built for modern educational institutions.</p>
        </div>
      </footer>
    </div>
  );
}
