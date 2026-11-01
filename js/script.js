const categories = document.getElementById('categories');
const earrings = document.getElementById('earrings');
const triangle = document.getElementById('triangle');

function setShopSections({ showCategoriesSection, showEarringsSection, showTriangleSection }) {
  categories.classList.toggle('hidden', !showCategoriesSection);
  earrings.classList.toggle('hidden', !showEarringsSection);
  triangle.classList.toggle('hidden', !showTriangleSection);

  document.getElementById('shop').scrollIntoView();
}

function showCategories() {
  setShopSections({
    showCategoriesSection: true,
    showEarringsSection: false,
    showTriangleSection: false,
  });
}

function showEarrings() {
  setShopSections({
    showCategoriesSection: false,
    showEarringsSection: true,
    showTriangleSection: false,
  });
}

function showTriangleTwist() {
  setShopSections({
    showCategoriesSection: false,
    showEarringsSection: false,
    showTriangleSection: true,
  });
}

function sendMail(event) {
  event.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  if (!name || !email || !message) {
    return;
  }

  const subject = encodeURIComponent('Vraag via website');
  const body = encodeURIComponent(
    `Naam: ${name}\nE-mail: ${email}\n\nBericht:\n${message}`
  );

  location.href = `mailto:beadem26@gmail.com?subject=${subject}&body=${body}`;
}

document.getElementById('year').textContent = new Date().getFullYear();
