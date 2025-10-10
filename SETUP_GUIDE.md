# Portfolio Setup Guide

## 📋 Обзор проекта

Современный интерактивный портфолио Unity Developer с анимациями, интеграцией GitHub API, и адаптивным дизайном.

### ✨ Основные функции

- **🎨 Кастомный анимированный курсор** - Плавно следует за мышью с эффектами кликов
- **⌨️ Анимация печати** - Динамическое отображение специализаций в хедере
- **📊 Технические навыки** - Детализированная секция с прогресс-барами
- **📈 GitHub Activity** - Интеграция с GitHub API для отображения активности
- **🎯 Фильтрация проектов** - "Топ проекты" по умолчанию + категории
- **🌌 Параллакс фон** - Анимированные частицы и звезды
- **📱 Адаптивный дизайн** - Оптимизация для всех устройств
- **🌐 Мультиязычность** - Русский и английский языки

## 🚀 Запуск проекта

### Вариант 1: Через GitHub Pages

1. **Fork репозиторий** на свой аккаунт GitHub
2. **Перейти в Settings** → Pages
3. **Выбрать Source**: Deploy from a branch
4. **Выбрать Branch**: main / root
5. **Сохранить настройки**

Ваш сайт будет доступен по адресу: `https://yourusername.github.io/Portfolio-Modern-Style/`

### Вариант 2: Локальный запуск

```bash
# Клонировать репозиторий
git clone https://github.com/Leks2000/Portfolio-Modern-Style.git

# Перейти в папку проекта
cd Portfolio-Modern-Style

# Запустить локальный сервер (выберите один из вариантов)

# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000

# Node.js (если установлен serve)
npx serve .

# Live Server (VS Code Extension)
# Открыть index.html и нажать "Go Live"
```

Сайт будет доступен по адресу: `http://localhost:8000`

### Вариант 3: Через Netlify

1. **Перейти на** [netlify.com](https://netlify.com)
2. **Drag & drop** папку проекта на dashboard
3. **Или подключить** GitHub репозиторий
4. **Настроить** автоматические деплои

### Вариант 4: Через Vercel

1. **Установить Vercel CLI**: `npm i -g vercel`
2. **Запустить в папке проекта**: `vercel`
3. **Следовать инструкциям** в терминале

## ⚙️ Настройка и кастомизация

### 📝 Персональные данные

Отредактируйте файл `index.html`:

```html
<!-- Имя и информация -->
<h1 class="hero-title">
    <span class="glitch" data-text="Ваше Имя">Ваше Имя</span>
</h1>

<!-- Контактные данные -->
<a href="mailto:your.email@example.com">your.email@example.com</a>
<a href="tel:+1234567890">+1 (234) 567-89-00</a>
<a href="https://t.me/yourusername" target="_blank">@yourusername</a>
<a href="https://github.com/yourusername" target="_blank">github.com/yourusername</a>
```

### 🔧 GitHub Integration

Отредактируйте файл `script.js` для изменения GitHub username:

```javascript
// Найти и заменить 'Leks2000' на свой username
const userResponse = await fetch('https://api.github.com/users/YOUR_USERNAME');
const eventsResponse = await fetch('https://api.github.com/users/YOUR_USERNAME/events?per_page=100');
```

### 🎨 Цветовая схема

Изменить цвета в файле `style.css`:

```css
:root {
    --unity-blue: #00d4ff;     /* Основной голубой */
    --unity-orange: #ff6b35;   /* Акцентный оранжевый */
    --unity-green: #4CAF50;    /* Зеленый для успеха */
    --bg-primary: #0a0a0a;     /* Основной фон */
    --bg-secondary: #1a1a1a;   /* Вторичный фон */
    --text-primary: #ffffff;   /* Основной текст */
}
```

### 📱 Проекты

Добавить/изменить проекты в `index.html`:

```html
<div class="project-card" data-category="games" data-top="true">
    <div class="project-status">
        <div class="status-ring" data-status="released">
            <svg class="progress-ring" width="60" height="60">
                <circle class="progress-ring__circle" stroke="var(--unity-blue)" 
                        stroke-width="3" fill="transparent" r="27" cx="30" cy="30" 
                        stroke-dasharray="169.65" stroke-dashoffset="0"/>
            </svg>
            <div class="status-text">🟢 Релиз</div>
        </div>
    </div>
    <div class="project-content">
        <h3>Название проекта</h3>
        <p>Описание проекта</p>
        <div class="project-tags">
            <span class="tag">Unity</span>
            <span class="tag">C#</span>
        </div>
        <div class="project-buttons">
            <a href="https://github.com/username/repo" class="btn btn-code" target="_blank">
                <i class="fab fa-github"></i> Код
            </a>
        </div>
    </div>
</div>
```

## 🔑 Атрибуты проектов

- `data-category`: `"games"`, `"mobile"`, `"web"`, `"extensions"`, `"bots"`
- `data-top="true"`: Отображать в разделе "Топ проекты"
- `data-status`: `"released"`, `"development"`, `"concept"`

## 🛠️ Структура файлов

```
Portfolio-Modern-Style/
├── index.html              # Основная страница
├── style.css               # Стили и анимации
├── script.js               # JavaScript функционал
├── SETUP_GUIDE.md          # Руководство по настройке
├── PROJECT_SUMMARY.md      # Описание проекта
├── DEPLOYMENT_GUIDE.md     # Руководство по деплою
└── webgl-games/            # WebGL игры (опционально)
```

## 🌐 Внешние зависимости

- **Font Awesome 6.0.0** - Иконки
- **Google Fonts** (Orbitron, Roboto) - Шрифты
- **GSAP 3.12.2** - Анимации
- **GitHub API** - Статистика активности

## 📱 Поддерживаемые устройства

- **Desktop**: 1200px+ (полный функционал)
- **Tablet**: 768px-1199px (адаптивная сетка)
- **Mobile**: 320px-767px (упрощенный интерфейс, отключен кастомный курсор)

## 🔧 Возможные проблемы и решения

### CORS ошибки с GitHub API
```javascript
// Если возникают CORS ошибки, используйте fallback данные
catch (error) {
    console.log('GitHub API error:', error);
    document.getElementById('repo-count').textContent = '20+';
    document.getElementById('total-commits').textContent = '500+';
}
```

### Медленная загрузка шрифтов
```html
<!-- Добавьте preload для ускорения -->
<link rel="preload" href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&display=swap" as="style">
```

### Проблемы с GSAP на мобильных
```javascript
// GSAP автоматически отключается на слабых устройствах
if (window.innerWidth <= 768) {
    // Упрощенные анимации для мобильных
}
```

## 📈 SEO Оптимизация

1. **Обновить мета-теги** в `<head>`
2. **Добавить Open Graph** теги
3. **Создать sitemap.xml**
4. **Добавить robots.txt**

```html
<!-- Пример мета-тегов -->
<meta name="description" content="Unity Developer Portfolio - Alexander Halle">
<meta name="keywords" content="Unity, C#, Game Developer, Portfolio">
<meta property="og:title" content="Alexander Halle - Unity Developer">
<meta property="og:description" content="Professional Unity Developer Portfolio">
<meta property="og:image" content="./preview.jpg">
```

## 🚀 Производительность

- **Lazy Loading** для изображений
- **Минификация** CSS/JS для продакшена
- **Сжатие изображений** (WebP формат)
- **CDN** для статических ресурсов

## 📞 Поддержка

Если у вас есть вопросы или проблемы:

1. **Проверьте** этот гайд
2. **Откройте Issue** в GitHub репозитории
3. **Свяжитесь** через контакты в портфолио

---

**Автор**: Alexander Halle  
**GitHub**: [@Leks2000](https://github.com/Leks2000)  
**Версия**: 2.0.0