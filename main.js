const projects = [
  {
    title: 'intro-component-with-signup-form-master',
    repo: 'https://github.com/lauriejefferson/frontend-mentor-solutions/tree/main/intro-component-with-signup-form-master',
  },
  {
    title: 'interactive-rating-component-main',
    repo: 'https://github.com/lauriejefferson/frontend-mentor-solutions/tree/main/interactive-rating-component-main',
  },
  {
    title: 'results-summary-component-main',
    repo: 'https://github.com/lauriejefferson/frontend-mentor-solutions/tree/main/results-summary-component-main',
  },
];
const list = document.getElementById('list');
console.log(projects);
projects.forEach(({ title, repo }, i) => {
  const listItem = document.createElement('li');
  listItem.innerHTML = `
  <a href="/${title}/index.html" alt="${title}">
    <img src="/${title}/design/desktop-design.jpg" alt="${title}" />
    <h3>${formatTitle(title)}</h3>
  </a>
   <div class="link-container">
    <a href="/${title}/index.html">
     <i class="fa-solid fa-arrow-up-right-from-square"></i>
    </a>
    <a href="/${repo}/index.html">
     <i class="fa-brands fa-github"></i>
    </a>
   </div>
  `;

  list.append(listItem);
});

function formatTitle(title) {
  return title
    .split('-')
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(' ');
}
