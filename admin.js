const customKey = 'kuda-demo-custom-events-v1';
const hiddenKey = 'kuda-demo-hidden-events-v1';
const read = key => JSON.parse(localStorage.getItem(key) || '[]');
const write = (key, value) => localStorage.setItem(key, JSON.stringify(value));
const list = document.querySelector('#custom-list');
const form = document.querySelector('#event-form');

function renderList() {
  const events = read(customKey);
  list.innerHTML = events.length ? events.map(event => `<div class="admin-event"><div><strong>${event.title}</strong><small>${event.date} · ${event.place}</small></div><button class="danger" data-remove="${event.id}" type="button">Удалить</button></div>`).join('') : '<p class="admin-empty">Пока ничего не добавлено. Добавь первое событие слева.</p>';
  list.querySelectorAll('[data-remove]').forEach(button => button.addEventListener('click', () => { write(customKey, read(customKey).filter(event => String(event.id) !== button.dataset.remove)); renderList(); }));
}

form.addEventListener('submit', event => {
  event.preventDefault();
  const title = document.querySelector('#title').value.trim();
  const type = document.querySelector('#type').value;
  const date = document.querySelector('#date').value.trim();
  const place = document.querySelector('#place').value.trim();
  const priceLabel = document.querySelector('#price').value.trim() || 'Бесплатно';
  const description = document.querySelector('#description').value.trim();
  const sourceUrl = document.querySelector('#sourceUrl').value.trim();
  const pushkin = document.querySelector('#pushkin').checked;
  const eventItem = {id:`custom-${Date.now()}`,type,title,date,place,price:parseInt(priceLabel,10) || 0,priceLabel,tags:[type, ...(pushkin ? ['пушкинская карта'] : [])],art:'art-purple',word:title.toUpperCase().slice(0,26),description,why:'Добавлено через demo-админку.',popular:75,sourceName:sourceUrl ? 'организатор' : 'demo-админка',sourceUrl,ageLimit:'12+'};
  write(customKey, [...read(customKey), eventItem]); form.reset(); renderList();
  alert('Событие добавлено в demo. Открой приложение заново, чтобы увидеть его в подборках.');
});

document.querySelector('#reset-button').addEventListener('click', () => { localStorage.removeItem(customKey); localStorage.removeItem(hiddenKey); renderList(); });
renderList();
