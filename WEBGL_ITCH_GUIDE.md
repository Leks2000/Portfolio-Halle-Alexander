# 🎮 Подробное руководство: WebGL проекты и Itch.io

## Содержание
1. [Unity WebGL: от проекта до сайта](#unity-webgl-от-проекта-до-сайта)
2. [Детальная настройка Itch.io](#детальная-настройка-itchio)
3. [Оптимизация WebGL игр](#оптимизация-webgl-игр)
4. [Продвижение и маркетинг](#продвижение-и-маркетинг)
5. [Частые проблемы и решения](#частые-проблемы-и-решения)

---

## Unity WebGL: от проекта до сайта

### Подготовка проекта Unity

#### 1. Оптимизация графики
```csharp
// Используйте эффективные материалы
// Избегайте прозрачности где это возможно
// Ограничьте количество источников света

// Пример оптимизированного материала для WebGL:
Shader "Custom/WebGLOptimized" 
{
    Properties 
    {
        _MainTex ("Texture", 2D) = "white" {}
        _Color ("Color", Color) = (1,1,1,1)
    }
    SubShader 
    {
        Tags { "RenderType"="Opaque" }
        LOD 200
        
        Pass 
        {
            CGPROGRAM
            #pragma vertex vert
            #pragma fragment frag
            
            sampler2D _MainTex;
            fixed4 _Color;
            
            struct appdata 
            {
                float4 vertex : POSITION;
                float2 uv : TEXCOORD0;
            };
            
            struct v2f 
            {
                float2 uv : TEXCOORD0;
                float4 vertex : SV_POSITION;
            };
            
            v2f vert (appdata v) 
            {
                v2f o;
                o.vertex = UnityObjectToClipPos(v.vertex);
                o.uv = v.uv;
                return o;
            }
            
            fixed4 frag (v2f i) : SV_Target 
            {
                fixed4 col = tex2D(_MainTex, i.uv) * _Color;
                return col;
            }
            ENDCG
        }
    }
}
```

#### 2. Настройка Player Settings для WebGL
```
File → Build Settings → Player Settings → WebGL Settings:

🔧 Publishing Settings:
- Memory Size: 256MB (минимум для простых игр)
- Exception Handling: Explicitly Thrown Exceptions Only
- Compression Format: Gzip (лучшее сжатие)
- Name Files As Hashes: ✓ (кеширование)
- Data caching: ✓
- Debug Symbols: ✗ (только для релиза)

🎨 Resolution and Presentation:
- Default Canvas Width: 960
- Default Canvas Height: 600
- Run In Background: ✓
- Default Screen Width/Height: 960x600

🔍 Optimization:
- Scripting Backend: IL2CPP
- Api Compatibility Level: .NET Standard 2.1
- Managed Stripping Level: Medium
```

#### 3. Код для оптимизации WebGL
```csharp
// WebGLOptimizer.cs - Утилиты для оптимизации
using UnityEngine;

public class WebGLOptimizer : MonoBehaviour
{
    [Header("Performance Settings")]
    public bool limitFrameRate = true;
    public int targetFrameRate = 30;
    
    [Header("Quality Settings")]
    public bool autoAdjustQuality = true;
    public float performanceThreshold = 16.6f; // 60 FPS
    
    private float deltaTime = 0.0f;
    
    void Start()
    {
        // Оптимизация для WebGL
        if (Application.platform == RuntimePlatform.WebGLPlayer)
        {
            OptimizeForWebGL();
        }
    }
    
    void OptimizeForWebGL()
    {
        // Ограничение FPS
        if (limitFrameRate)
        {
            Application.targetFrameRate = targetFrameRate;
        }
        
        // Настройка качества
        QualitySettings.vSyncCount = 0;
        QualitySettings.antiAliasing = 0;
        QualitySettings.anisotropicFiltering = AnisotropicFiltering.Disable;
        
        // Отключение ненужных систем
        Screen.sleepTimeout = SleepTimeout.NeverSleep;
        
        // Очистка кеша
        Resources.UnloadUnusedAssets();
    }
    
    void Update()
    {
        if (autoAdjustQuality && Application.platform == RuntimePlatform.WebGLPlayer)
        {
            MonitorPerformance();
        }
    }
    
    void MonitorPerformance()
    {
        deltaTime += (Time.unscaledDeltaTime - deltaTime) * 0.1f;
        float fps = 1.0f / deltaTime;
        
        if (fps < performanceThreshold)
        {
            AdjustQualityDown();
        }
    }
    
    void AdjustQualityDown()
    {
        if (QualitySettings.GetQualityLevel() > 0)
        {
            QualitySettings.DecreaseLevel();
        }
    }
}
```

### Структура WebGL билда

После сборки Unity WebGL создает следующую структуру:
```
Build/
├── index.html                  # Основная страница
├── Build/
│   ├── [BuildName].data       # Игровые ассеты
│   ├── [BuildName].framework.js # Unity framework
│   ├── [BuildName].loader.js   # Загрузчик
│   └── [BuildName].wasm       # Компилированный код
├── StreamingAssets/           # Дополнительные ресурсы
└── TemplateData/
    ├── favicon.ico
    ├── fullscreen-button.png
    ├── progress-bar-*.png
    ├── unity-logo-*.png
    └── webgl-logo.png
```

### Кастомизация WebGL шаблона

Создайте свой шаблон в `Assets/WebGLTemplates/MyTemplate/index.html`:

```html
<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">
    <title>{{{ PRODUCT_NAME }}}</title>
    <style>
        body {
            font-family: 'Arial', sans-serif;
            background: linear-gradient(135deg, #0a0a0a, #1a1a2e);
            margin: 0;
            padding: 0;
            color: white;
        }
        
        .container {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            min-height: 100vh;
            padding: 20px;
        }
        
        .game-title {
            font-size: 2.5em;
            margin-bottom: 10px;
            background: linear-gradient(45deg, #00d4ff, #6c5ce7);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            text-align: center;
        }
        
        .game-canvas {
            background: #222;
            border-radius: 10px;
            box-shadow: 0 0 30px rgba(0, 212, 255, 0.3);
        }
        
        .loading-bar {
            width: 200px;
            height: 20px;
            background: rgba(255, 255, 255, 0.2);
            border-radius: 10px;
            overflow: hidden;
            margin: 20px 0;
        }
        
        .loading-progress {
            height: 100%;
            background: linear-gradient(90deg, #00d4ff, #6c5ce7);
            width: 0%;
            transition: width 0.3s ease;
        }
        
        .controls {
            margin-top: 20px;
            text-align: center;
            background: rgba(42, 42, 42, 0.8);
            padding: 15px;
            border-radius: 10px;
            max-width: 400px;
        }
        
        .fullscreen-btn {
            background: linear-gradient(45deg, #667eea, #764ba2);
            border: none;
            color: white;
            padding: 10px 20px;
            border-radius: 5px;
            cursor: pointer;
            margin: 10px;
        }
        
        .fullscreen-btn:hover {
            transform: translateY(-2px);
            box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4);
        }
    </style>
</head>
<body>
    <div class="container">
        <h1 class="game-title">{{{ PRODUCT_NAME }}}</h1>
        
        <div id="unity-container">
            <canvas id="unity-canvas" class="game-canvas"></canvas>
            <div class="loading-bar" id="unity-loading-bar">
                <div class="loading-progress" id="unity-progress-bar-full"></div>
            </div>
        </div>
        
        <div class="controls">
            <p><strong>Управление:</strong> WASD - движение, Пробел - прыжок</p>
            <button class="fullscreen-btn" onclick="unityInstance.SetFullscreen(1)">
                🖥️ Полный экран
            </button>
        </div>
    </div>

    <script>
        var container = document.querySelector("#unity-container");
        var canvas = document.querySelector("#unity-canvas");
        var loadingBar = document.querySelector("#unity-loading-bar");
        var progressBarFull = document.querySelector("#unity-progress-bar-full");

        var buildUrl = "Build";
        var loaderUrl = buildUrl + "/{{{ LOADER_FILENAME }}}";
        var config = {
            dataUrl: buildUrl + "/{{{ DATA_FILENAME }}}",
            frameworkUrl: buildUrl + "/{{{ FRAMEWORK_FILENAME }}}",
            codeUrl: buildUrl + "/{{{ CODE_FILENAME }}}",
#if MEMORY_FILENAME
            memoryUrl: buildUrl + "/{{{ MEMORY_FILENAME }}}",
#endif
#if SYMBOLS_FILENAME
            symbolsUrl: buildUrl + "/{{{ SYMBOLS_FILENAME }}}",
#endif
            streamingAssetsUrl: "StreamingAssets",
            companyName: "{{{ COMPANY_NAME }}}",
            productName: "{{{ PRODUCT_NAME }}}",
            productVersion: "{{{ PRODUCT_VERSION }}}",
        };

        if (/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)) {
            container.className = "unity-mobile";
            config.devicePixelRatio = 1;
        } else {
            canvas.style.width = "960px";
            canvas.style.height = "600px";
        }
        
        loadingBar.style.display = "block";

        var script = document.createElement("script");
        script.src = loaderUrl;
        script.onload = () => {
            createUnityInstance(canvas, config, (progress) => {
                progressBarFull.style.width = 100 * progress + "%";
            }).then((unityInstance) => {
                window.unityInstance = unityInstance;
                loadingBar.style.display = "none";
            }).catch((message) => {
                alert(message);
            });
        };
        document.body.appendChild(script);
    </script>
</body>
</html>
```

---

## Детальная настройка Itch.io

### Создание привлекательной страницы игры

#### 1. Оформление профиля
```
🎨 Настройка профиля:
- Avatar: Логотип или ваше фото (128x128px)
- Cover: Баннер с вашими играми (960x540px)
- Bio: Краткое описание как разработчика
- Links: Ссылка на портфолио, GitHub, соцсети
```

#### 2. Создание обложки игры
Рекомендуемые размеры и стили:
```css
/* Стиль для обложки игры */
Размер: 630x500px
Формат: PNG или JPEG
Стиль: Темный фон с ярким логотипом/названием
Шрифт: Читаемый на мобильных устройствах
Элементы: Скриншот геймплея + название + жанр
```

#### 3. Скриншоты и GIF
```
📸 Контент для страницы:
- 4-6 скриншотов ключевых моментов игры
- 1-2 анимированных GIF с геймплеем
- Размер скриншотов: 1920x1080 или 1280x720
- GIF: до 3MB, длительность 10-30 секунд
```

#### 4. Описание игры (шаблон)
```markdown
# 🎮 [Название игры]

## Описание
[2-3 предложения о том, что это за игра]

## ✨ Особенности
- 🎯 [Ключевая механика 1]
- 🚀 [Ключевая механика 2] 
- 🎨 [Графический стиль]
- 🎵 [Звук/музыка]
- 📱 [Поддержка платформ]

## 🕹️ Управление
- **WASD** - движение
- **Пробел** - прыжок
- **Мышь** - взаимодействие
- **ESC** - пауза

## 🛠️ Технологии
Создано на Unity с использованием C#

## 👨‍💻 Об авторе
Unity разработчик из Санкт-Петербурга. Специализируюсь на инди-играх и прототипировании.

📧 Связаться: alex.halle06@list.ru
🔗 Портфолио: [ваша ссылка]
💻 GitHub: github.com/Leks2000

---
*Спасибо за игру! Оставьте отзыв и поделитесь с друзьями! ⭐*
```

### Настройка монетизации

#### 1. Модель Pay What You Want (PWYW)
```
💰 Настройки цены:
- Minimum price: $0 (бесплатная игра)
- Suggested price: $1-3 (рекомендуемое пожертвование)
- Allow buyer to pay more: ✓
```

#### 2. Сбор донатов
```html
<!-- Кнопка доната на странице игры -->
<div style="text-align: center; margin: 20px;">
    <p>Понравилась игра? Поддержите разработчика! ☕</p>
    <a href="https://buymeacoffee.com/yourusername" target="_blank">
        <img src="https://img.buymeacoffee.com/button-api/?text=Buy me a coffee&emoji=☕&slug=yourusername&button_colour=FF6B35&font_colour=ffffff&font_family=Arial&outline_colour=000000&coffee_colour=FFDD00">
    </a>
</div>
```

### Теги и SEO

#### Эффективные теги для Unity игр:
```
🏷️ Основные теги:
- unity
- webgl
- indie
- singleplayer
- casual
- arcade
- puzzle
- platformer
- adventure
- experimental

🏷️ По жанрам:
- action
- puzzle-platformer
- roguelike
- shoot-em-up
- survival
- horror
- comedy
- retro
- minimalist
- atmospheric

🏷️ По техническим особенностям:
- browser
- html5
- javascript
- mobile-friendly
- gamepad-support
- keyboard
- mouse-only
```

#### SEO оптимизация описания:
```markdown
# Пример SEO-оптимизированного описания

🎮 **Название игры** - увлекательный [жанр] платформер, созданный на Unity

🌟 **Играйте прямо в браузере!** Не требует скачивания или установки.

## Что вас ждет:
✨ [Уникальная механика] с элементами [дополнительный жанр]
🎨 Стильная [стиль графики] графика
🎵 Атмосферный саундтрек
⚡ Плавный геймплей 60 FPS
📱 Поддержка мобильных устройств

## Для кого эта игра:
- Любители [жанр] игр
- Фанаты инди-разработки
- Игроки всех возрастов (от 7+)
- Ценители качественного геймдизайна

#unity #webgl #indie #[жанр] #browser #free
```

---

## Оптимизация WebGL игр

### Производительность

#### 1. Профилирование в Unity
```csharp
// ProfilerMarkers для отслеживания производительности
using Unity.Profiling;

public class GameManager : MonoBehaviour
{
    static readonly ProfilerMarker s_UpdateMarker = new ProfilerMarker("GameManager.Update");
    static readonly ProfilerMarker s_RenderMarker = new ProfilerMarker("GameManager.Render");
    
    void Update()
    {
        using (s_UpdateMarker.Auto())
        {
            // Ваша логика обновления
            UpdateGame();
        }
    }
    
    void UpdateGame()
    {
        // Оптимизированная логика игры
    }
}
```

#### 2. Управление памятью
```csharp
public class MemoryManager : MonoBehaviour
{
    [Header("Memory Management")]
    public float garbageCollectionInterval = 30f;
    public bool autoUnloadUnusedAssets = true;
    
    private float lastGCTime;
    
    void Start()
    {
        // Настройка для WebGL
        if (Application.platform == RuntimePlatform.WebGLPlayer)
        {
            // Отключаем автоматический GC
            System.GC.TryStartNoGCRegion(1024 * 1024 * 10); // 10MB
        }
    }
    
    void Update()
    {
        if (autoUnloadUnusedAssets && Time.time - lastGCTime > garbageCollectionInterval)
        {
            StartCoroutine(CleanupMemory());
            lastGCTime = Time.time;
        }
    }
    
    IEnumerator CleanupMemory()
    {
        yield return new WaitForEndOfFrame();
        
        Resources.UnloadUnusedAssets();
        System.GC.Collect();
        
        Debug.Log($"Memory cleaned up. Used: {System.GC.GetTotalMemory(false) / 1024 / 1024}MB");
    }
}
```

#### 3. Оптимизация ассетов
```csharp
// Автоматическая настройка текстур для WebGL
[MenuItem("Tools/Optimize Assets for WebGL")]
static void OptimizeForWebGL()
{
    string[] guids = AssetDatabase.FindAssets("t:Texture2D");
    
    foreach (string guid in guids)
    {
        string path = AssetDatabase.GUIDToAssetPath(guid);
        TextureImporter importer = AssetImporter.GetAtPath(path) as TextureImporter;
        
        if (importer != null)
        {
            // Настройки для WebGL
            TextureImporterPlatformSettings webglSettings = new TextureImporterPlatformSettings
            {
                name = "WebGL",
                overridden = true,
                maxTextureSize = 1024,
                format = TextureImporterFormat.ASTC_6x6,
                compressionQuality = 50,
                crunchedCompression = true
            };
            
            importer.SetPlatformTextureSettings(webglSettings);
            AssetDatabase.ImportAsset(path, ImportAssetOptions.ForceUpdate);
        }
    }
    
    AssetDatabase.Refresh();
    Debug.Log("WebGL optimization complete!");
}
```

### Размер сборки

#### Уменьшение размера билда:
```csharp
// Скрипт для анализа размера ассетов
[MenuItem("Tools/Analyze Build Size")]
static void AnalyzeBuildSize()
{
    var report = BuildPipeline.BuildPlayer(new BuildPlayerOptions
    {
        scenes = EditorBuildSettings.scenes.Select(s => s.path).ToArray(),
        locationPathName = "Builds/WebGL",
        target = BuildTarget.WebGL,
        options = BuildOptions.DetailedBuildReport
    });
    
    if (report.summary.result == BuildResult.Succeeded)
    {
        foreach (var step in report.steps)
        {
            Debug.Log($"Step: {step.name}, Size: {step.size} bytes");
        }
    }
}
```

---

## Продвижение и маркетинг

### Стратегия продвижения на Itch.io

#### 1. Время релиза
```
📅 Оптимальное время публикации:
- Вторник-четверг, 14:00-18:00 UTC
- Избегайте понедельников и пятниц
- Учитывайте часовые пояса вашей аудитории
```

#### 2. Участие в джемах
```
🎯 Game Jams для продвижения:
- Ludum Dare (каждые 4 месяца)
- Global Game Jam (январь)
- Brackeys Game Jam (раз в 2 месяца)
- GMTK Game Jam (июль)
- 7DRL Challenge (март)
```

#### 3. Социальные сети
```markdown
📱 Twitter стратегия:
- Ежедневные #screenshotsaturday
- Хештеги: #gamedev #unity #indiedev #webgl
- Гифки с геймплеем
- Behind-the-scenes контент
- Ретвиты других инди-разработчиков

📺 TikTok/Instagram Reels:
- Короткие ролики геймплея (15-30 сек)
- Time-lapse разработки
- Секреты и пасхалки в игре
- Челленджи и реакции игроков
```

### Аналитика и отслеживание

#### Google Analytics для игр:
```html
<!-- Добавьте в index.html WebGL билда -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
  
  // Отслеживание игровых событий
  function trackGameEvent(action, label) {
    gtag('event', action, {
      'event_category': 'Game',
      'event_label': label
    });
  }
  
  // Примеры использования в Unity:
  // trackGameEvent('level_complete', 'level_1');
  // trackGameEvent('game_start', 'new_player');
  // trackGameEvent('achievement_unlock', 'first_jump');
</script>
```

---

## Частые проблемы и решения

### Проблемы WebGL

#### 1. Медленная загрузка
```javascript
// Прелоадер с прогрессом
function createProgressiveLoader() {
    const canvas = document.querySelector('#unity-canvas');
    const loadingScreen = document.createElement('div');
    loadingScreen.innerHTML = `
        <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100vh; background: #0a0a0a;">
            <div style="color: #00d4ff; font-size: 24px; margin-bottom: 20px;">Загрузка игры...</div>
            <div style="width: 300px; height: 20px; background: rgba(255,255,255,0.2); border-radius: 10px; overflow: hidden;">
                <div id="progress-bar" style="height: 100%; background: linear-gradient(90deg, #00d4ff, #6c5ce7); width: 0%; transition: width 0.3s;"></div>
            </div>
            <div id="progress-text" style="color: #666; margin-top: 10px;">0%</div>
        </div>
    `;
    
    canvas.parentNode.insertBefore(loadingScreen, canvas);
    
    return {
        updateProgress: (progress) => {
            const progressBar = document.getElementById('progress-bar');
            const progressText = document.getElementById('progress-text');
            progressBar.style.width = (progress * 100) + '%';
            progressText.textContent = Math.round(progress * 100) + '%';
        },
        hide: () => {
            loadingScreen.remove();
        }
    };
}
```

#### 2. Ошибки CORS
```javascript
// Решение проблем с CORS
function fixCORSIssues() {
    // Добавьте в .htaccess файл:
    /*
    Header add Access-Control-Allow-Origin "*"
    Header add Access-Control-Allow-Methods "GET,POST,OPTIONS,DELETE,PUT"
    Header add Access-Control-Allow-Headers "Content-Type"
    */
    
    // Или используйте service worker
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('/sw.js').then(registration => {
            console.log('SW registered');
        });
    }
}
```

### Проблемы Itch.io

#### 1. Игра не загружается в iframe
```html
<!-- Правильная настройка для Itch.io -->
<script>
    // Убедитесь что canvas правильно инициализирован
    var canvas = document.querySelector("#unity-canvas");
    
    // Настройки для iframe Itch.io
    if (window.parent !== window) {
        // Мы в iframe Itch.io
        canvas.style.width = "100%";
        canvas.style.height = "100%";
        
        // Отправляем сообщение родительскому окну о готовности
        window.parent.postMessage('game_loaded', '*');
    }
</script>
```

#### 2. Проблемы с полноэкранным режимом
```javascript
// Полноэкранный режим для Itch.io
function requestFullscreen() {
    if (window.parent !== window) {
        // В iframe Itch.io используем их API
        window.parent.postMessage({
            type: 'resize',
            width: screen.width,
            height: screen.height
        }, '*');
    } else {
        // Обычный полноэкранный режим
        if (unityInstance) {
            unityInstance.SetFullscreen(1);
        }
    }
}
```

### Отладка и тестирование

#### Консольные команды для отладки Unity WebGL:
```javascript
// Откройте консоль браузера (F12) и выполните:

// 1. Проверка памяти
console.log('Unity Heap Size:', Module.HEAPU8.length / 1024 / 1024 + 'MB');

// 2. Информация о WebGL контексте
const gl = document.querySelector('#unity-canvas').getContext('webgl');
console.log('WebGL Renderer:', gl.getParameter(gl.RENDERER));
console.log('WebGL Vendor:', gl.getParameter(gl.VENDOR));

// 3. Проверка производительности
const startTime = performance.now();
// ... какие-то операции ...
console.log('Execution time:', performance.now() - startTime + 'ms');

// 4. Отправка сообщения в Unity
unityInstance.SendMessage('GameManager', 'DebugMessage', 'Hello from browser!');
```

---

## 🎯 Чек-лист для релиза

### Перед публикацией WebGL:
- [ ] Оптимизированы текстуры (ASTC формат)
- [ ] Убраны все Debug.Log() из продакшн кода
- [ ] Настроен правильный размер памяти
- [ ] Проверена работа на мобильных устройствах
- [ ] Добавлены инструкции по управлению
- [ ] Протестирована загрузка на медленном интернете

### Перед публикацией на Itch.io:
- [ ] Создана привлекательная обложка
- [ ] Написано подробное описание
- [ ] Добавлены скриншоты и GIF
- [ ] Настроены теги и категории
- [ ] Проверена работа в iframe Itch.io
- [ ] Добавлены ссылки на социальные сети
- [ ] Настроена аналитика (если нужна)

### После публикации:
- [ ] Поделились в социальных сетях
- [ ] Добавили в портфолио
- [ ] Отправили друзьям на тестирование
- [ ] Собрали первые отзывы
- [ ] Запланировали обновления

---

**Готово! Теперь у вас есть полное руководство по созданию и публикации WebGL игр! 🚀🎮**