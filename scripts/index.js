

// ✅ Dynamic Copyright Year
document.getElementById('year').textContent = new Date().getFullYear();

// ✅ Dynamic Last Modified Date
document.getElementById('lastModified').textContent =
  'Last Modified: ' + document.lastModified;

// ✅ Course List Array
const courses = [
  { code: 'WDD 130', name: 'Web Fundamentals', credits: 3, completed: true },
  { code: 'WDD 131', name: 'Dynamic Web Fundamentals', credits: 3, completed: true },
  { code: 'WDD 230', name: 'Web Frontend Development I', credits: 3, completed: false },
  { code: 'WDD 330', name: 'Web Frontend Development II', credits: 3, completed: false },
  { code: 'WDD 331', name: 'Web Backend Development I', credits: 3, completed: false },
  { code: 'CSE 110', name: 'Programming Building Blocks', credits: 2, completed: true },
  { code: 'CSE 111', name: 'Programming with Functions', credits: 2, completed: true },
  { code: 'CSE 210', name: 'Programming with Classes', credits: 4, completed: false },
  { code: 'CSE 222', name: 'Data Structures', credits: 3, completed: false },
  { code: 'CSE 341', name: 'Web Backend Development II', credits: 3, completed: false }
];

// ✅ DOM Elements
const courseContainer = document.getElementById('courseContainer');
const creditTotal = document.getElementById('creditTotal');
const filterButtons = document.querySelectorAll('.filter-btn');

// ✅ Render Courses
function renderCourses(courseList) {
  courseContainer.innerHTML = '';
  let totalCredits = courseList.reduce((sum, course) => sum + course.credits, 0);
  creditTotal.textContent = `Total Credits: ${totalCredits}`;

  courseList.forEach(course => {
    const card = document.createElement('div');
    card.classList.add('course-card');
    card.classList.add(course.completed ? 'completed' : 'incomplete');

    card.innerHTML = `
      <h3>${course.code}</h3>
      <p>${course.name}</p>
      <p>Credits: ${course.credits}</p>
      <p>Status: ${course.completed ? '✅ Completed' : '⏳ In Progress'}</p>
    `;

    courseContainer.appendChild(card);
  });
}

// ✅ Filter Logic
filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    const type = button.dataset.type;
    let filtered;

    if (type === 'all') {
      filtered = courses;
    } else {
      filtered = courses.filter(course => course.code.startsWith(type.toUpperCase()));
    }

    renderCourses(filtered);
  });
});

// ✅ Initial Render
renderCourses(courses);