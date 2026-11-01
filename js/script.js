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

const contactForm = document.getElementById('contactForm');
const msg = document.getElementById('msg');

if (contactForm) {
  contactForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    if (!msg) return;

    msg.textContent = 'Versturen...';

    const formData = new FormData(contactForm);

    try {
      const response = await fetch(contactForm.action, {
        method: 'POST',
        body: formData,
        headers: {
          Accept: 'application/json',
        },
      });

      if (response.ok) {
        contactForm.reset();
        msg.textContent = 'Je bericht is verzonden! Ik neem zo snel mogelijk contact met je op.';
      } else {
        throw new Error('Formspree submission failed');
      }
    } catch (error) {
      msg.textContent = 'Er ging iets mis. Probeer het later opnieuw of neem contact op via WhatsApp.';
    }
  });
}

document.getElementById('year').textContent = new Date().getFullYear();
