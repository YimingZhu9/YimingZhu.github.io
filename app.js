// Personal and academic information supplied in the owner's CV.
const profile = {
  name: 'Yiming Zhu',
  initials: 'YZ',
  position: 'Postdoctoral Researcher',
  university: 'University of Science and Technology of China',
  email: 'zhuyiming@ustc.edu.cn',
  scholarUrl: 'https://scholar.google.com/citations?user=m6FSNDcAAAAJ&hl=en',
  bio: 'I am a postdoctoral researcher at the University of Science and Technology of China, working with Mao Sheng. I received my Ph.D. in Mathematics from Southern University of Science and Technology in July 2025, under the supervision of Zhan Li.',
  research: 'My research is in higher-dimensional algebraic geometry and birational geometry. I am currently interested in the structure of Calabi–Yau varieties and pairs, especially their Albanese and quasi-Albanese morphisms.',
  interests: ['Birational geometry', 'Calabi–Yau varieties and pairs', 'Albanese morphisms']
};

const content = {
  experience: [
    { date: 'Aug 2025 – present', title: 'Postdoctoral Researcher', institution: 'University of Science and Technology of China', note: 'Mentor: Mao Sheng' }
  ],
  education: [
    { date: 'Sep 2021 – Jul 2025', title: 'Ph.D. in Mathematics', institution: 'Southern University of Science and Technology', detail: 'Department of Mathematics', note: 'Advisor: Zhan Li' },
    { date: 'Sep 2017 – Jul 2021', title: "Master’s Degree", institution: 'University of Chinese Academy of Sciences', detail: 'School of Physical Sciences', note: 'Advisor: Fuzhong Yang' },
    { date: 'Sep 2013 – Jul 2017', title: "Bachelor’s Degree", institution: 'Hefei University of Technology', detail: 'Department of Mechanics' }
  ],
  papers: [
    { id: 'quasi-albanese-ii', kind: 'preprint', title: 'On quasi-Albanese morphisms for log canonical Calabi-Yau pairs II', year: 2026, venue: 'arXiv:2610.32782, 2026', links: [{ label: 'arXiv', url: 'https://arxiv.org/abs/2610.32782' }] },
    { id: 'quasi-albanese', kind: 'preprint', title: 'On quasi-Albanese morphisms for log canonical Calabi-Yau pairs', year: 2025, venue: 'arXiv:2511.14580, 2025', links: [{ label: 'arXiv', url: 'https://arxiv.org/abs/2511.14580' }] },
    { id: 'effective-nonvanishing', kind: 'preprint', title: 'On the effective nonvanishing of varieties of Kodaira dimension zero', year: 2024, venue: 'arXiv:2407.16490, 2024', links: [{ label: 'arXiv', url: 'https://arxiv.org/abs/2407.16490' }] },
    { id: 'parabolic-fibrations', kind: 'published', title: 'On singular fibers of parabolic fibrations', year: 2027, venue: 'Proceedings of the American Mathematical Society 155 (2027), 45–56', links: [{ label: 'Journal', url: 'https://doi.org/10.1090/proc/17853' }, { label: 'arXiv', url: 'https://arxiv.org/abs/2505.09962' }] },
    { id: 'equisingular-compactifications', kind: 'published', title: 'Equisingular compactifications of log canonical quasi-projective pairs', year: 2026, venue: 'Communications in Algebra 54 (3) (2026), 1082–1089', links: [{ label: 'Journal', url: 'https://doi.org/10.1080/00927872.2025.2547704' }] },
    { id: 'calabi-yau-nonvanishing', kind: 'published', title: 'A remark on the effective nonvanishing of Calabi-Yau varieties', year: 2025, venue: 'Comptes Rendus Mathématique 363 (2025), 1059–1063', links: [{ label: 'Journal', url: 'https://doi.org/10.5802/crmath.735' }] }
  ],
  courses: [
    { term: 'Fall 2022', title: 'Advanced Mathematics', role: 'Teaching Assistant', institution: 'Southern University of Science and Technology' },
    { term: 'Spring 2022', title: 'Complex Analysis', role: 'Teaching Assistant', institution: 'Southern University of Science and Technology' },
    { term: 'Fall 2021', title: 'Linear Algebra', role: 'Teaching Assistant', institution: 'Southern University of Science and Technology' }
  ]
};

const routes = [
  { id: 'home', label: 'Yiming Zhu' },
  { id: 'cv', label: 'Curriculum Vitae' },
  { id: 'publications', label: 'Publications and Preprints' },
  { id: 'teaching', label: 'Teaching' }
];
const escapeHTML = value => String(value ?? '').replace(/[&<>"']/g, char => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[char]));
const $ = id => document.getElementById(id);
const externalLink = (url, label) => `<a href="${escapeHTML(url)}" target="_blank" rel="noopener noreferrer">${escapeHTML(label)}</a>`;
let lastRoute = '';

function homePage() {
  return `<h1 class="page-title home-title">${escapeHTML(profile.name)}</h1>
    <div class="home-affiliation">
      <p>${escapeHTML(profile.position)}</p>
      <p>${escapeHTML(profile.university)}</p>
      <p>Email: <a href="mailto:${escapeHTML(profile.email)}">${escapeHTML(profile.email)}</a></p>
    </div>
    <div class="home-introduction">
      <p>I work in higher-dimensional algebraic geometry and birational geometry. I am interested in the structure of Calabi–Yau varieties and pairs, especially their Albanese and quasi-Albanese morphisms.</p>
      <p>My <a href="#cv">CV</a>, <a href="#publications">Publications and Preprints</a>, <a href="#teaching">Teaching</a>, ${externalLink(profile.scholarUrl, 'Google Scholar')}.</p>
    </div>`;
}
function years(date) {
  const values = date.match(/\d{4}/g) || [];
  return date.includes('present') ? `${values[0]} – present` : values.join(' – ');
}
function cvEntry(item) {
  const detail = item.detail && !item.title.includes('Mathematics') ? `${escapeHTML(item.detail)}, ` : '';
  return `<div class="cv-entry"><div class="cv-date">${escapeHTML(years(item.date))}</div><div><p>${escapeHTML(item.title)}, ${detail}${escapeHTML(item.institution)}.</p>${item.note ? `<p class="cv-note">${escapeHTML(item.note)}</p>` : ''}</div></div>`;
}
function cvPage() {
  return `<h1 class="page-title">Curriculum Vitae</h1>
    <section class="cv-section"><h2>Employment:</h2>${content.experience.map(cvEntry).join('')}</section>
    <section class="cv-section"><h2>Education:</h2>${content.education.map(cvEntry).join('')}</section>`;
}
function papersPage() {
  return `<h1 class="page-title">Publications and Preprints</h1>
    <ol class="paper-list">${content.papers.map(paper => `<li><p>${escapeHTML(paper.title)}.</p><p>${externalLink(paper.links[0].url, paper.venue)}.${paper.links.length > 1 ? ` [${externalLink(paper.links[1].url, paper.links[1].label)}]` : ''}</p></li>`).join('')}</ol>`;
}
function teachingPage() {
  return `<h1 class="page-title">Teaching</h1>
    <p>Southern University of Science and Technology</p>
    <h2 class="teaching-label">Teaching Assistant:</h2>
    <ul class="teaching-list">${content.courses.map(course => `<li>${escapeHTML(course.title)}, ${escapeHTML(course.term)}.</li>`).join('')}</ul>`;
}
function closeMenu() {
  $('sidebar').classList.remove('is-open');
  $('sidebar-shade').classList.remove('is-open');
  $('menu-toggle').setAttribute('aria-expanded', 'false');
  document.body.style.overflow = '';
}
function render() {
  const route = routes.find(item => item.id === location.hash.slice(1)) || routes[0];
  const changed = lastRoute !== route.id;
  document.title = route.id === 'home' ? profile.name : `${profile.name} - ${route.label}`;
  $('navigation').innerHTML = routes.map(item => `<a href="#${item.id}" ${item.id === route.id ? 'aria-current="page"' : ''}>${escapeHTML(item.label)}</a>`).join('');
  $('page').innerHTML = { home: homePage, cv: cvPage, publications: papersPage, teaching: teachingPage }[route.id]();
  closeMenu();
  if (changed) {
    window.scrollTo({ top: 0, behavior: 'instant' });
    if (lastRoute) $('main').focus({ preventScroll: true });
  }
  lastRoute = route.id;
}

document.addEventListener('click', event => {
  if (event.target.closest('.skip-link')) { event.preventDefault(); $('main').focus(); return; }
  if (event.target.closest('#menu-toggle')) {
    const open = $('menu-toggle').getAttribute('aria-expanded') !== 'true';
    $('sidebar').classList.toggle('is-open', open);
    $('sidebar-shade').classList.toggle('is-open', open);
    $('menu-toggle').setAttribute('aria-expanded', String(open));
    document.body.style.overflow = open ? 'hidden' : '';
    if (open) $('navigation').querySelector('a').focus();
    return;
  }
  if (event.target.closest('#sidebar-shade')) { closeMenu(); $('menu-toggle').focus(); return; }
  if (event.target.closest('.sidebar a')) closeMenu();
});
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && $('sidebar').classList.contains('is-open')) { closeMenu(); $('menu-toggle').focus(); }
});
window.addEventListener('hashchange', render);
render();
