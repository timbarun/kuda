// DEMO DATA: fictional local events and users for the clickable product prototype only.
let demoEvents = [
  {id:1,type:'выставка',title:'Свет внутри',date:'Сегодня, 19:00',place:'ГЭС-2',price:0,priceLabel:'Бесплатно',tags:['сегодня','выставка','бесплатно','пушкинская карта'],art:'art-purple',word:'СВЕТ\nВНУТРИ',description:'Мультимедийная выставка о том, как город звучит, когда на него смотришь иначе.',why:'Тебе нравятся современные выставки и события, куда можно заглянуть после работы.',popular:98},
  {id:2,type:'кино',title:'Кино под звёздами',date:'Сб, 21:30',place:'Сад «Эрмитаж»',price:700,priceLabel:'700 ₽',tags:['выходные','кино','вечером','до 1000'],art:'art-orange',word:'КИНО\nНАД ГОРОДОМ',description:'Фильмы, пледы и тёплый воздух. В программе — культовая классика и новые короткометражки.',why:'Тёплый вариант для вечера: недорого, красиво и можно прийти одному.',popular:94},
  {id:3,type:'музыка',title:'Новые голоса',date:'Вс, 18:00',place:'Кластер «Арма»',price:900,priceLabel:'900 ₽',tags:['выходные','музыка','до 1000','пушкинская карта'],art:'art-blue',word:'НОВЫЕ\nГОЛОСА',description:'Три молодых артиста и один вечер, чтобы услышать музыку, которой ещё нет в чартах.',why:'Совпадает с твоим интересом к живой музыке и новым именам.',popular:96},
  {id:4,type:'театр',title:'Театр на ощупь',date:'Сегодня, 20:00',place:'Театр «Практика»',price:1200,priceLabel:'1 200 ₽',tags:['сегодня','театр','вечером'],art:'art-pink',word:'ТЕАТР\nНА ОЩУПЬ',description:'Иммерсивный спектакль, где зритель становится частью истории и выбирает, куда она повернёт.',why:'Необычный формат вместо обычного спектакля — как раз для нового опыта.',popular:88},
  {id:5,type:'лекция',title:'Как смотреть на искусство',date:'Сб, 14:00',place:'Музей Москвы',price:500,priceLabel:'500 ₽',tags:['выходные','лекция','до 1000','пушкинская карта'],art:'art-green',word:'СМОТРИ\nШИРЕ',description:'Лёгкий разговор о современном искусстве без сложных слов и скучных терминов.',why:'Можно узнать что-то новое, потратить немного и воспользоваться картой.',popular:91},
  {id:6,type:'стендап',title:'Смешно и неловко',date:'Пт, 20:30',place:'Бар «Дюна»',price:800,priceLabel:'800 ₽',tags:['пятница','стендап','вечером','до 1000'],art:'art-dark',word:'СМЕШНО\nИ НЕЛОВКО',description:'Вечер честного стендапа о взрослении, друзьях и странных переписках.',why:'Лёгкий план на пятничный вечер без долгих обязательств.',popular:84},
  {id:7,type:'танцы',title:'Танцуй, как умеешь',date:'Вс, 16:00',place:'Дом культуры ГЭС-1',price:300,priceLabel:'300 ₽',tags:['выходные','танцы','до 1000'],art:'art-purple',word:'ТАНЦУЙ\nСВОБОДНО',description:'Открытый класс для любого уровня. Музыка включается — тело само разберётся.',why:'Самый доступный способ попробовать новое и познакомиться с людьми.',popular:86},
  {id:8,type:'фестиваль',title:'Маркет локальных',date:'Сб, 12:00',place:'Хлебозавод №9',price:0,priceLabel:'Бесплатно',tags:['выходные','фестиваль','бесплатно'],art:'art-orange',word:'ЛОКАЛЬНЫЕ\nГЕРОИ',description:'Дизайн, музыка, кофе и вещи, которые хочется унести домой.',why:'Много разных впечатлений в одном месте — удобно для спонтанного дня.',popular:90},
  {id:9,type:'экскурсия',title:'Ночной маршрут',date:'Сб, 22:00',place:'Старт: м. Китай-город',price:600,priceLabel:'600 ₽',tags:['выходные','вечером','до 1000','необычное'],art:'art-blue',word:'НОЧНОЙ\nМАРШРУТ',description:'Прогулка по городу с историями, которые не рассказывают днём.',why:'Алексей советует его тебе за любовь к необычным местам.',popular:87},
  {id:10,type:'мастерская',title:'Керамика руками',date:'Вс, 13:00',place:'Студия «Форма»',price:950,priceLabel:'950 ₽',tags:['выходные','мастер-класс','до 1000','необычное'],art:'art-pink',word:'СДЕЛАЙ\nСАМ',description:'Две чашки, немного глины и три часа спокойного творчества.',why:'Медленный формат, после которого остаётся вещь, сделанная своими руками.',popular:79},
  {id:11,type:'опера',title:'Опера за час',date:'Сегодня, 18:30',place:'Новая опера',price:1000,priceLabel:'1 000 ₽',tags:['сегодня','опера','пушкинская карта'],art:'art-green',word:'ОПЕРА\nЗА ЧАС',description:'Самые яркие арии и сюжеты в компактном формате для первого знакомства.',why:'Короткий способ познакомиться с новым жанром и использовать карту.',popular:82},
  {id:12,type:'джаз',title:'Джазовый вечер',date:'Пт, 21:00',place:'Клуб «Ритм»',price:1100,priceLabel:'1 100 ₽',tags:['пятница','музыка','джаз','вечером'],art:'art-dark',word:'JAZZ\nNIGHT',description:'Тёплый камерный концерт с виниловым звуком и любимыми стандартами.',why:'Камерная музыка для вечера, когда хочется просто слушать.',popular:89}
];

const storageKey = 'kuda-demo-state-v1';
const eventsStorageKey = 'kuda-demo-custom-events-v1';
const hiddenStorageKey = 'kuda-demo-hidden-events-v1';
const storedState = JSON.parse(localStorage.getItem(storageKey) || '{}');
const state = {saved:new Set(storedState.saved || [2,5,9]), visited:new Set(storedState.visited || [1,2,3]), currentEvent:null};
const customEvents = JSON.parse(localStorage.getItem(eventsStorageKey) || '[]');
const hiddenEvents = new Set(JSON.parse(localStorage.getItem(hiddenStorageKey) || '[]'));
demoEvents = [...demoEvents.filter(event => !hiddenEvents.has(event.id)), ...customEvents];
const $ = selector => document.querySelector(selector);
const $$ = selector => [...document.querySelectorAll(selector)];
const normalize = value => value.toLowerCase().replaceAll('ё','е');
const persistState = () => localStorage.setItem(storageKey, JSON.stringify({saved:[...state.saved], visited:[...state.visited]}));

function renderEvents(events, target, options = {}) {
  const container = typeof target === 'string' ? $(target) : target;
  container.innerHTML = events.map(event => `<article class="event-card" data-id="${event.id}" tabindex="0" role="button" aria-label="Открыть событие: ${event.title}">
    <div class="event-art ${event.art}"><span class="art-word">${event.word.replace('\n','<br>')}</span>${options.rank ? `<span class="rank-badge">#${event.rank || ''}</span>` : ''}</div>
    <div class="event-info"><div class="event-card-top"><span class="event-type">${event.type}</span>${event.tags.includes('пушкинская карта') ? '<span class="card-tag">ПК</span>' : ''}</div><h3>${event.title}</h3><p class="event-description">${event.description}</p><div class="event-bottom"><span>${event.date}</span><span class="event-price">${event.priceLabel}</span></div>${options.why ? `<div class="why-line">✦ ${event.why}</div>` : ''}</div>
  </article>`).join('');
  container.querySelectorAll('.event-card').forEach(card => { card.addEventListener('click', () => openEvent(card.dataset.id)); card.addEventListener('keydown', e => { if(e.key === 'Enter' || e.key === ' ') openEvent(card.dataset.id); }); });
}

function findEvents(query) {
  const q = normalize(query.trim());
  if (!q) return demoEvents;
  const words = q.split(/\s+/).filter(word => word.length > 2 && !['хочу','куда','что','нибудь','чтобы'].includes(word));
  return demoEvents.map(event => { const haystack = normalize(`${event.title} ${event.type} ${event.place} ${event.tags.join(' ')}`); let score = words.reduce((sum, word) => sum + (haystack.includes(word) ? (event.tags.some(tag => normalize(tag).includes(word)) ? 3 : 1) : 0), 0); if ((q.includes('1000') || q.includes('недорог')) && event.price <= 1000) score += 4; if (q.includes('пушкин') && event.tags.includes('пушкинская карта')) score += 5; if (q.includes('сегодня') && event.tags.includes('сегодня')) score += 5; if ((q.includes('выходн') || q.includes('суббот') || q.includes('воскрес')) && event.tags.includes('выходные')) score += 5; if (q.includes('необыч') && event.tags.includes('необычное')) score += 6; return {...event, score}; }).filter(event => event.score > 0).sort((a,b) => b.score - a.score || a.id - b.id);
}

function goTo(screen) { $$('.screen').forEach(section => section.classList.toggle('active', section.id === `screen-${screen}`)); $$('.top-nav button, .mobile-nav button').forEach(button => button.classList.toggle('active', button.dataset.screen === screen)); window.scrollTo({top:0, behavior:'smooth'}); if(screen === 'profile') renderProfile(); }
function doSearch(query) { $('#explore-query').value = query; const results = findEvents(query); renderEvents(results, '#events-grid', {why:true}); $('#result-count').textContent = `${results.length} ${results.length === 1 ? 'событие' : 'событий'}`; $('#result-kicker').textContent = query.trim() ? `подборка по запросу «${query.trim()}»` : 'для тебя сегодня'; $('#empty-state').hidden = results.length !== 0; $('#events-grid').hidden = results.length === 0; goTo('explore'); }
function openEvent(id) { const event = demoEvents.find(item => String(item.id) === String(id)); if(!event) return; const resolvedId = event.id; state.currentEvent = resolvedId; $('#dialog-art').className = `dialog-art ${event.art}`; $('#dialog-type').textContent = event.type; $('#dialog-title').textContent = event.title; $('#dialog-description').textContent = event.description; $('#dialog-why').textContent = event.why || 'Подобрано по твоим интересам и ограничениям.'; $('#dialog-meta').innerHTML = `<span class="meta-pill">◷ ${event.date}</span><span class="meta-pill">⌖ ${event.place}</span><span class="meta-pill">₽ ${event.priceLabel}</span><span class="meta-pill">${event.tags.includes('пушкинская карта') ? '✦ Пушкинская карта' : (event.ageLimit || '14+')}</span>`; $('#dialog-source').innerHTML = event.sourceUrl ? `Источник: <a href="${event.sourceUrl}" target="_blank" rel="noreferrer">${event.sourceName || 'организатор'}</a>` : `Источник: ${event.sourceName || 'demo-данные'}`; $('#save-button').innerHTML = state.saved.has(resolvedId) ? 'Сохранено <span>♥</span>' : 'Сохранить <span>♡</span>'; $('#save-button').classList.toggle('is-saved', state.saved.has(resolvedId)); $('#visit-button').textContent = state.visited.has(resolvedId) ? 'Посещено ✓' : 'Отметить посещённым'; const related = demoEvents.filter(item => String(item.id) !== String(resolvedId) && item.type === event.type).slice(0,2); renderEvents(related.length ? related : demoEvents.filter(item => String(item.id) !== String(resolvedId)).slice(0,2), '#related-events'); $('#event-dialog').showModal(); }
function showToast(message) { const toast = $('#toast'); toast.textContent = message; toast.classList.add('show'); setTimeout(() => toast.classList.remove('show'), 2200); }
function renderProfile() { $('#saved-count').textContent = state.saved.size; }

$$('[data-screen]').forEach(button => button.addEventListener('click', () => goTo(button.dataset.screen)));
$('#home-search-form').addEventListener('submit', event => { event.preventDefault(); doSearch($('#home-query').value); });
$('#explore-search-form').addEventListener('submit', event => { event.preventDefault(); doSearch($('#explore-query').value); });
$$('.chip').forEach(chip => chip.addEventListener('click', () => { const query = chip.dataset.query; $('#home-query').value = query; doSearch(query); }));
$('#save-button').addEventListener('click', () => { const id = state.currentEvent; state.saved.has(id) ? state.saved.delete(id) : state.saved.add(id); persistState(); openEvent(id); renderProfile(); showToast(state.saved.has(id) ? 'Событие сохранено в планы' : 'Событие убрано из планов'); });
$('#visit-button').addEventListener('click', () => { state.visited.add(state.currentEvent); persistState(); $('#visit-button').textContent = 'Посещено ✓'; renderProfile(); showToast('Добавили в историю посещений'); });
$('.dialog-close').addEventListener('click', () => $('#event-dialog').close());
$('#event-dialog').addEventListener('click', event => { if(event.target === $('#event-dialog')) $('#event-dialog').close(); });
$$('[data-event-id]').forEach(button => button.addEventListener('click', () => openEvent(Number(button.dataset.eventId))));
$$('[data-person]').forEach(button => button.addEventListener('click', () => showToast(`${button.dataset.person === 'alexey' ? 'Алексей' : button.dataset.person === 'liza' ? 'Лиза' : 'Ира'} добавлен(а) в твой культурный круг`)));

const popular = [...demoEvents].sort((a,b) => b.popular - a.popular).map((event,index) => ({...event,rank:index+1}));
renderEvents(demoEvents.slice(0,3), '#home-events', {why:true});
renderEvents(popular.slice(0,3), '#home-popular', {rank:true});
renderEvents(demoEvents, '#events-grid', {why:true});
renderProfile();
