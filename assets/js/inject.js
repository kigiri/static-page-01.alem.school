// handle translation
var lang = localStorage.lang = String(location).split(/[&?]lang=(ru|kz|en)/)[1] || localStorage.lang || 'ru'
function translate(id, text) {
  var elem = document.getElementById(id)
  elem && text[lang] && (elem.textContent = text[lang])
}

translate("welcome", {
  "ru": "Добро пожаловать в 01 !",
  "kz": "01-ге қош келдіңіз!"
})
translate("zone-01", {
  "ru": "01 - это образовательная платформа для изучения программирования.",
  "kz": "01 - бағдарламалауға арналған білім беру алаңы."
})
translate("instruction-1", {
  "ru": "Создай и зайди через Git аккаунт.",
  "kz": "Git аккаунтты жасап кіріңіз."
})
translate("instruction-2", {
  "ru": "Пройди онлайн-тест",
  "kz": "Онлайн-тест тапсырыңыз"
})
translate("instruction-3", {
  "ru": "Жди результатов",
  "kz": "Нәтижелерді күтіңіз"
})
translate("account", {
  "ru": "Аккаунт будет использован на протяжении всего обучения в 01.",
  "kz": "Аккаунт 01 мектебіндегі бүкіл оқу мерзімі кезінде пайдаланылатын болады."
})
translate("about-us", {
  "ru": "Хочешь узнать о нас больше?",
  "kz": "Біз туралы көбірек білгіңіз келе ме?"
})
translate("contact", {
  "ru": "Контакты",
  "kz": "Байланыс"
})
translate("sign-in", {
  "ru": "Войти через Git",
  "kz": "Git арқылы кіру"
})
translate("or", {
  "ru": "или",
  "kz": "әлде"
})
translate("join", {
  "ru": "Создать аккаунт в Git",
  "kz": "Git аккаунт жасау"
})

// inject css
var style = document.createElement('style')
style.innerHTML = 'body div.logo {width:60px;height:60px}'

// inject yandex metrics (ym)
function ym() { ym.a.push(arguments) }
ym.a = []
ym.l = 1*new Date()
var yms = document.createElement('script')
yms.async = 1
yms.src = 'https://mc.yandex.ru/metrika/tag.js'

// add in the dom
var root = document.getElementsByTagName('script')[0]
root.parentNode.insertBefore(style, root)
root.parentNode.insertBefore(yms, root)

ym(54535057, 'init', {
  clickmap: true,
  trackLinks: true,
  accurateTrackBounce: true,
  webvisor: true,
})
