document.getElementById('year').textContent = new Date().getFullYear();

const shopSections = ['categories', 'earrings', 'triangle'];

function hideShop() {
  shopSections.forEach((id) => {
    const section = document.getElementById(id);
    if (section) {
      section.classList.add('hidden');
    }
  });
}

function showCategories() {
  hideShop();
  const section = document.getElementById('categories');
  if (section) {
    section.classList.remove('hidden');
  }
}

function showEarrings() {
  hideShop();
  const section = document.getElementById('earrings');
  if (section) {
    section.classList.remove('hidden');
  }

  const shop = document.getElementById('shop');
  if (shop) {
    shop.scrollIntoView();
  }
}

function showTriangleTwist() {
  hideShop();
  const section = document.getElementById('triangle');
  if (section) {
    section.classList.remove('hidden');
  }

  const shop = document.getElementById('shop');
  if (shop) {
    shop.scrollIntoView();
  }
}

function sendMail(e) {
  e.preventDefault();

  const form = e.target;
  const name = encodeURIComponent(form.querySelector('input[placeholder="Naam"]').value);
  const email = encodeURIComponent(form.querySelector('input[type="email"]').value);
  const message = encodeURIComponent(form.querySelector('textarea').value);

  window.location.href = `mailto:beadem26@gmail.com?subject=Bericht via Bead em website van ${name}&body=Naam: ${name}%0AEmail: ${email}%0A%0A${message}`;

  const msg = document.getElementById('msg');
  if (msg) {
    msg.textContent = 'Je e-mailprogramma wordt geopend.';
  }
}
