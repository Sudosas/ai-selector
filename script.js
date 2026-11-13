document.addEventListener('DOMContentLoaded', () => {
    // ==========================================
    // 0. ПАСХАЛКА В КОНСОЛІ (F12)
    // ==========================================
    console.log(
        '%c NEURO.CRAFT // SYSTEM INITIALIZED ',
        'background: #1d4ed8; color: #ffffff; font-size: 14px; font-weight: bold; padding: 6px 12px; border-radius: 6px;'
    );
    console.log(
        '%cГарячі клавіші: "glitch" (бінарний код), "R" (переворот сторінки), "X" (рентген сітки), "12" (діагностика).',
        'color: #64748b; font-size: 12px;'
    );

    // ==========================================
    // 1. ПЕРЕКЛАДИ ТА БАЗА КОНТЕНТУ
    // ==========================================
    const translations = {
        uk: {
            nav_how: 'Як це працює',
            nav_catalog: 'Каталог ШІ',
            nav_lab: 'Лабораторія',
            nav_history: 'Хронологія',
            nav_myths: 'Міфи',
            nav_quiz_btn: '🎮 Тест',
            theme_light: 'Світла',
            theme_dark: 'Темна',
            hero_pill: 'Інтерактивний гід • 2026',
            hero_title_1: 'Штучний інтелект:',
            hero_title_2: 'від математики до творчості',
            hero_desc: 'Тут немає сухих енциклопедичних визначень. Розбираємося на пальцях, як нейромережі бачать світ, тестуємо живі інструменти та руйнуємо популярні міфи про повстання машин.',
            hero_quiz_cta: '🎮 Зіграти: Людина чи ШІ?',
            turing_btn: '⚡ Імпульс мережі',
            stat_1_label: 'Базова архітектура',
            stat_2_label: 'Принцип мислення',
            stat_2_val: 'Вектори, токени та ймовірності',
            stat_3_label: 'Головний секрет',
            stat_3_val: 'Лінійна алгебра + великі дані',
            widget_hint: 'Натисни "R" для перевороту або клікай фон ✨',
            sec1_eye: '01 // ПІД КАПОТОМ',
            sec1_title: 'Як нейромережа вчиться думати',
            sec1_desc: 'Чотири етапи, які перетворюють звичайний масив чисел на співрозмовника або художника.',
            step1_title: 'Токенізація',
            step1_desc: 'ШІ не читає літери як люди. Він ріже текст на шматочки — токени (слова або склади) і присвоює кожному числовий ID.',
            step2_title: 'Векторний простір',
            step2_desc: 'Кожен токен отримує координати у просторі з тисячами вимірів. Там «кіт» і «собака» живуть поруч, а «трактор» — далеко.',
            step3_title: 'Механізм уваги',
            step3_desc: 'Алгоритм Self-Attention зважує, які слова в реченні найважливіші прямо зараз, щоб не втратити контекст у довгому тексті.',
            step4_title: 'Градієнтний спуск',
            step4_desc: 'Мільйони спроб і помилок: мережа вгадує відповідь, бачить похибку і підкручує внутрішні ваги, поки не почне влучати в ціль.',
            sec2_eye: '02 // КОРИСНІ ІНСТРУМЕНТИ',
            sec2_title: 'Каталог нейромереж, які варто спробувати',
            sec2_desc: 'Фільтруй за задачами та переходь одразу на офіційні сайти інструментів.',
            filter_all: 'Усі інструменти',
            filter_text: 'Текст та пошук',
            filter_code: 'Програмування',
            filter_image: 'Графіка та відео',
            filter_audio: 'Музика та голос',
            tag_text: 'Текст / Логіка',
            tag_search: 'Пошук / Факти',
            tag_art: 'Генерація артів',
            tag_music: 'Музика / Вокал',
            free_label: 'Безкоштовно',
            paid_label: 'Платний',
            open_btn: 'Відкрити',
            tool1_desc: 'Нейромережа з найбільш «людяним» стилем письма. Чудово пише складний код, аналізує великі PDF-документи та не ллє зайвої води.',
            tool2_desc: 'Розумний пошуковик нового покоління. Замість купи рекламних посилань дає готову відповідь із перевіреними джерелами в реальному часі.',
            tool3_desc: 'Редактор коду на базі VS Code із вбудованим ШІ. Бачить увесь твій проєкт цілком, сам створює файли та виправляє баги в кілька кліків.',
            tool4_desc: 'Еталон якості в генерації зображень. Розуміє складне освітлення, композицію, стилі кіно та фотографії краще за більшість аналогів.',
            tool5_desc: 'Створює повноцінні пісні з вокалом, текстом та аранжуванням у будь-якому жанрі — від фонку до симфонічного року — за 30 секунд.',
            tool6_desc: '«GitHub для штучного інтелекту». Тут лежать тисячі безкоштовних відкритих моделей, які можна завантажити й запустити локально на своєму ПК.',
            sec3_eye: '03 // ІНТЕРАКТИВ',
            sec3_title: 'Міні-лабораторія ШІ',
            sec3_desc: 'Потестуй, як нейромережа бачить текст, збери ідеальний промпт та погортай базу з 20 фактів.',
            temp_title: 'Симулятор «Температури»',
            temp_desc: 'Параметр Temperature відповідає за креативність. Посунь повзунок, щоб побачити зміну стилю відповіді.',
            temp_low: 'Точність (0.0)',
            temp_high: 'Хаос (1.0)',
            temp_prompt: 'Промпт: «Опиши каву одним реченням»',
            fact_title: 'База фактів про ШІ',
            fact_btn: 'Наступний факт ↻',
            prompt_b_title: 'Конструктор промптів (Prompt Engineering)',
            prompt_b_desc: 'Обери роль для нейромережі та стиль відповіді — система сформує правильний шаблон запиту.',
            copy_btn: '📋 Скопіювати промпт',
            tok_title: 'Візуалізатор токенів (як ШІ бачить твій текст)',
            tok_desc: 'Напиши будь-яке речення нижче — алгоритм розіб\'є його на умовні токени та підрахує їхню кількість.',
            tok_count_label: 'Токенів:',
            char_count_label: 'Символів:',
            tok_placeholder: 'Введи текст тут, наприклад: Привіт, нейромереже! Як справи?',
            sec_hist_eye: '04 // ЕВОЛЮЦІЯ ТА ІРОНІЯ',
            sec_hist_title: 'Ключові віхи ШІ та IT-гумор',
            sec_hist_desc: 'Від тесту Алана Тюрінга до сучасних моделей — плюс трохи інженерного гумору.',
            era_title: '⏳ Машина часу ШІ',
            joke_title: '💡 Інженерний гумор',
            joke_btn: 'Наступний жарт ↻',
            btn_human: '👤 Написала людина',
            btn_ai: '🤖 Згенерував ШІ',
            btn_next_q: 'Наступне питання →',
            btn_restart: 'Зіграти ще раз ↻',
            sec5_eye: '05 // БЕЗ ІЛЮЗІЙ',
            sec5_title: 'Міфи проти реальності',
            myth1_q: 'Чи справді ШІ має свідомість і може образитись?',
            myth1_a: 'Ні. У мовних моделей немає емоцій, бажань чи самосвідомості. Якщо чат-бот вибачається або пише «мені сумно» — це просто статистично найімовірніше продовження діалогу, підглянуте у книгах та форумах, на яких він вчився.',
            myth2_q: 'Чи замінить ШІ програмістів повністю?',
            myth2_a: 'Він прибирає рутину: написання однотипних функцій, верстку базових блоків чи пошук синтаксичних помилок. Але архітектуру системи, безпеку, роботу з клієнтами та фінальну відповідальність за продукт завжди нестиме людина.',
            myth3_q: 'Чому нейромережі погано рахують великі числа в голові?',
            myth3_a: 'Бо мовні моделі створені для роботи зі словами, а не з арифметикою. Вони не «рахують» у класичному розумінні, а намагаються вгадати цифри відповіді по пам\'яті. Тому сучасні моделі підключають для цього вбудований інтерпретатор Python.',
            myth4_q: 'Чи вчиться чат-бот прямо під час нашої розмови?',
            myth4_a: 'Ні, його ваги (пам\'ять) заморожені. Він просто перечитує всю історію поточного чату щоразу, коли ти надсилаєш нове повідомлення. Щойно ти закриєш вкладку або почнеш новий чат — він забуде все, про що ви говорили.',
            modal_title: 'Прихована телеметрія проєкту',
            modal_desc: 'Ви знайшли секретну інженерну панель! Показники роботи сторінки в реальному часі:',
            modal_hint: 'Гарячі клавіші: "glitch" (бінарний дощ), "R" (переворот сторінки), "X" (рентген сітки).'
        },
        en: {
            nav_how: 'How It Works',
            nav_catalog: 'AI Directory',
            nav_lab: 'Lab',
            nav_history: 'Timeline',
            nav_myths: 'Myths',
            nav_quiz_btn: '🎮 Quiz',
            theme_light: 'Light',
            theme_dark: 'Dark',
            hero_pill: 'Interactive Guide • 2026',
            hero_title_1: 'Artificial Intelligence:',
            hero_title_2: 'from math to creativity',
            hero_desc: 'No dry textbook definitions here. Let’s break down how neural networks actually perceive the world, test live tools, and bust popular myths about machine uprisings.',
            hero_quiz_cta: '🎮 Play: Human or AI?',
            turing_btn: '⚡ Neural Impulse',
            stat_1_label: 'Core Architecture',
            stat_2_label: 'Way of Thinking',
            stat_2_val: 'Vectors, tokens & probabilities',
            stat_3_label: 'Main Secret',
            stat_3_val: 'Linear algebra + big data',
            widget_hint: 'Press "R" to flip the page or click the background ✨',
            sec1_eye: '01 // UNDER THE HOOD',
            sec1_title: 'How a Neural Network Learns to Think',
            sec1_desc: 'Four stages that turn a massive array of numbers into a conversationalist or an artist.',
            step1_title: 'Tokenization',
            step1_desc: 'AI doesn’t read letters like humans. It slices text into chunks — tokens (words or syllables) and assigns each a numeric ID.',
            step2_title: 'Vector Space',
            step2_desc: 'Each token gets coordinates in a space with thousands of dimensions. "Cat" and "dog" live close together, while "tractor" is far away.',
            step3_title: 'Attention Mechanism',
            step3_desc: 'The Self-Attention algorithm weighs which words in a sentence matter most right now, keeping context intact across long texts.',
            step4_title: 'Gradient Descent',
            step4_desc: 'Millions of trials and errors: the network guesses an answer, measures the error, and tweaks internal weights until it hits the mark.',
            sec2_eye: '02 // USEFUL TOOLS',
            sec2_title: 'AI Tools Worth Trying Right Now',
            sec2_desc: 'Filter by task and jump directly to the official platforms.',
            filter_all: 'All Tools',
            filter_text: 'Text & Search',
            filter_code: 'Coding',
            filter_image: 'Graphics & Video',
            filter_audio: 'Music & Voice',
            tag_text: 'Text / Logic',
            tag_search: 'Search / Facts',
            tag_art: 'Art Generation',
            tag_music: 'Music / Vocals',
            free_label: 'Free',
            paid_label: 'Paid',
            open_btn: 'Open',
            tool1_desc: 'An AI with the most human-like writing style. Excels at writing complex code, analyzing huge PDFs, and skipping unnecessary fluff.',
            tool2_desc: 'Next-gen smart search engine. Instead of endless ad links, it gives a direct answer backed by real-time cited sources.',
            tool3_desc: 'An AI-first code editor built on VS Code. Understands your entire codebase, creates files, and fixes bugs in a few clicks.',
            tool4_desc: 'The gold standard in image generation. Understands complex lighting, composition, and cinematic styles better than most.',
            tool5_desc: 'Creates full songs with vocals, lyrics, and instrumentation in any genre — from phonk to symphonic rock — in 30 seconds.',
            tool6_desc: '"GitHub for Artificial Intelligence." Hosts thousands of free open-source models you can download and run locally on your PC.',
            sec3_eye: '03 // INTERACTIVE',
            sec3_title: 'Mini AI Laboratory',
            sec3_desc: 'Test how an AI slices your text, build a prompt, and browse the 20-fact database.',
            temp_title: 'Temperature Simulator',
            temp_desc: 'The Temperature parameter controls creativity. Drag the slider to see how the response style shifts.',
            temp_low: 'Precision (0.0)',
            temp_high: 'Chaos (1.0)',
            temp_prompt: 'Prompt: "Describe coffee in one sentence"',
            fact_title: 'AI Fact Database',
            fact_btn: 'Next Fact ↻',
            prompt_b_title: 'Prompt Builder (Prompt Engineering)',
            prompt_b_desc: 'Choose a role and response style — the system will generate a clean prompt template.',
            copy_btn: '📋 Copy Prompt',
            tok_title: 'Token Visualizer (How AI Sees Your Text)',
            tok_desc: 'Type any sentence below — the algorithm will split it into approximate tokens and count them.',
            tok_count_label: 'Tokens:',
            char_count_label: 'Characters:',
            tok_placeholder: 'Type something here, e.g.: Hello neural network! How are you?',
            sec_hist_eye: '04 // EVOLUTION & IRONY',
            sec_hist_title: 'AI Milestones & CS Humor',
            sec_hist_desc: 'From Alan Turing’s test to modern architectures — plus some computer science humor.',
            era_title: '⏳ AI Time Machine',
            joke_title: '💡 Computer Science Humor',
            joke_btn: 'Next Joke ↻',
            btn_human: '👤 Written by Human',
            btn_ai: '🤖 Generated by AI',
            btn_next_q: 'Next Question →',
            btn_restart: 'Play Again ↻',
            sec5_eye: '05 // NO ILLUSIONS',
            sec5_title: 'Myths vs Reality',
            myth1_q: 'Does AI truly have consciousness and feelings?',
            myth1_a: 'No. Language models have no emotions, desires, or self-awareness. If a chatbot apologizes or says "I feel sad," it is simply predicting the statistically most likely continuation learned from human books and forums.',
            myth2_q: 'Will AI completely replace programmers?',
            myth2_a: 'It eliminates routine: boilerplate functions, basic layouts, and syntax bug hunting. However, system architecture, security, client communication, and final accountability will always belong to human engineers.',
            myth3_q: 'Why do language models struggle with big math in their head?',
            myth3_a: 'Because LLMs are built for words, not arithmetic. They don’t "calculate" like a calculator — they guess digits from memory. That’s why modern models run a built-in Python interpreter under the hood for math.',
            myth4_q: 'Does a chatbot learn permanently during our conversation?',
            myth4_a: 'No, its weights (memory) are frozen. It simply re-reads the entire chat history every time you send a new message. Once you open a new chat, it completely forgets what you talked about.',
            modal_title: 'Hidden Project Telemetry',
            modal_desc: 'You found the secret engineering panel! Live performance metrics of this page:',
            modal_hint: 'Hotkeys: "glitch" (binary rain), "R" (flip page), "X" (wireframe mode).'
        }
    };

    const factsData = {
        uk: [
            '01. Перша нейронна мережа «Перцептрон» була створена ще у 1958 році Френком Розенблаттом і займала цілу кімнату.',
            '02. Архітектура Transformer, на якій працюють сучасні чат-боти, була винайдена дослідниками Google у 2017 році для машинного перекладу.',
            '03. Навчання однієї великої мовної моделі може споживати стільки ж електроенергії, скільки невелике містечко за кілька місяців.',
            '04. Сучасні моделі не читають текст по буквах — вони розбивають його на токени. Одне довге слово може складатися з 2–4 токенів.',
            '05. У 1997 році суперкомп’ютер Deep Blue переміг чемпіона світу з шахів Гаррі Каспарова, але не мав нейромереж — лише жорсткий перебір варіантів.',
            '06. Термін «Штучний інтелект» вперше запропонував інформатик Джон Маккарті у 1956 році на конференції в Дартмуті.',
            '07. Нейромережі часто бачать на картинках те, чого там немає — це явище називається «парейдолія» через перенавчання на патернах.',
            '08. Для генерації 1 зображення в дифузійній моделі ШІ починає з картини, що на 100% складається з випадкового телевізійного шуму.',
            '09. Моделі розпізнавання мовлення навчені на сотнях тисяч годин аудіо з інтернету, тому розуміють навіть шепіт та сильні акценти.',
            '10. Головне вузьке місце сучасного ШІ — не математика, а швидкість передачі даних у відеопам’яті графічних процесорів (GPU).',
            '11. У 2016 році програма AlphaGo перемогла легенду гри ґо Лі Седоля, зробивши «Хід 37», який люди спершу вважали помилкою.',
            '12. Внутрішня «пам’ять» мовної моделі — це величезна матриця чисел із плаваючою комою, яку називають вагами (weights).',
            '13. Якщо навчати нову нейромережу виключно на текстах, згенерованих іншими ШІ, настає «колапс моделі» — вона починає деградувати.',
            '14. Алгоритм AlphaFold від DeepMind розшифрував структуру майже всіх відомих науці білків (понад 200 мільйонів) за лічені місяці.',
            '15. Відеокарти NVIDIA стали основою революції ШІ випадково: виявилося, що матричні обчислення для 3D-ігор ідеально підходять для нейронів.',
            '16. Перший чат-бот у світі називався ELIZA (1966 рік) — він імітував психотерапевта, просто перефразовуючи слова користувача у питання.',
            '17. Сучасні мультимодальні моделі перетворюють звук, фото і текст в один і той самий математичний формат — вектори чисел.',
            '18. ШІ може визначити хвороби серця або діабет за звичайним знімком сітківки ока людини, помічаючи мікрозміни судин.',
            '19. Квантування (Quantization) дозволяє стиснути величезну нейромережу в 4 рази з мінімальною втратою розуму, щоб вона працювала на ноутбуці.',
            '20. Попри назву «штучний інтелект», сучасні нейромережі ближчі до прикладної статистики та лінійної алгебри, ніж до людського мозку.'
        ],
        en: [
            '01. The first neural network, "Perceptron," was built back in 1958 by Frank Rosenblatt and took up an entire room.',
            '02. The Transformer architecture powering modern chatbots was invented by Google researchers in 2017 originally for language translation.',
            '03. Training a single massive language model can consume as much electricity as a small town uses over several months.',
            '04. Modern models don’t read letter by letter — they split text into tokens. One long word can consist of 2 to 4 tokens.',
            '05. In 1997, IBM’s Deep Blue defeated chess champion Garry Kasparov without neural networks — it used brute-force tree search.',
            '06. The term "Artificial Intelligence" was coined by computer scientist John McCarthy in 1956 at the Dartmouth Conference.',
            '07. Neural networks sometimes see objects in random noise — a phenomenon similar to human pareidolia caused by pattern overfitting.',
            '08. To generate an image, a diffusion model starts with 100% random TV static and gradually removes noise step by step.',
            '09. Speech recognition models are trained on hundreds of thousands of hours of web audio, allowing them to understand whispers and heavy accents.',
            '10. The biggest bottleneck in modern AI isn’t math — it’s memory bandwidth inside GPU video memory.',
            '11. In 2016, AlphaGo defeated Go legend Lee Sedol by playing "Move 37," a move human commentators initially thought was a mistake.',
            '12. A language model’s internal "memory" is simply a massive matrix of floating-point numbers called weights.',
            '13. Training a new AI exclusively on text generated by other AIs leads to "Model Collapse," causing output quality to rapidly degrade.',
            '14. DeepMind’s AlphaFold predicted the 3D structure of nearly all known proteins (over 200 million) in a fraction of traditional lab time.',
            '15. GPUs became the backbone of AI by happy accident: hardware built to render 3D game triangles turned out ideal for matrix math.',
            '16. The world’s first chatbot was ELIZA (1966) — it mimicked a psychotherapist by turning user statements into questions.',
            '17. Multimodal AI models translate audio, images, and text into the exact same mathematical language: numeric vectors.',
            '18. AI can detect early signs of cardiovascular disease or diabetes simply by scanning a standard photograph of a human retina.',
            '19. Quantization shrinks massive neural networks by up to 4x with minimal accuracy loss, allowing them to run locally on laptops.',
            '20. Despite the name "Artificial Intelligence," modern neural networks owe far more to statistics and linear algebra than human biology.'
        ]
    };

    const erasData = {
        uk: [
            { year: '1950', text: 'Алан Тюрінг публікує статтю «Обчислювальні машини і розум» та пропонує знаменитий Тест Тюрінга для оцінки інтелекту машин.' },
            { year: '1958', text: 'Френк Розенблатт створює «Перцептрон» — перший електронний пристрій, що імітував роботу людського нейрона та вчився розпізнавати літери.' },
            { year: '1997', text: 'Суперкомп’ютер IBM Deep Blue вперше в історії обігрує чинного чемпіона світу з шахів Гаррі Каспарова у повноцінному матчі.' },
            { year: '2017', text: 'Дослідники Google публікують статтю «Attention Is All You Need», представивши архітектуру Transformer — фундамент усіх сучасних ШІ.' },
            { year: '2026', text: 'Мультимодальні агенти та локальні моделі працюють прямо на персональних комп’ютерах, допомагаючи в науці, медицині та розробці ПЗ.' }
        ],
        en: [
            { year: '1950', text: 'Alan Turing publishes "Computing Machinery and Intelligence" and introduces the famous Turing Test to evaluate machine intelligence.' },
            { year: '1958', text: 'Frank Rosenblatt builds the "Perceptron" — the first electronic device mimicking a human neuron capable of learning to recognize letters.' },
            { year: '1997', text: 'IBM’s Deep Blue becomes the first computer system to defeat a reigning world chess champion, Garry Kasparov, in a full match.' },
            { year: '2017', text: 'Google researchers publish "Attention Is All You Need," introducing the Transformer architecture — the foundation of modern AI.' },
            { year: '2026', text: 'Multimodal agents and compact local models run directly on personal hardware, accelerating science, medicine, and software engineering.' }
        ]
    };

    const jokesData = {
        uk: [
            '— Як працює штучний інтелект? — На презентації для інвесторів це «глибока нейронна мережа», а в коді — 500 вкладених операторів if-else.',
            'У світі існує 10 типів людей: ті, хто розуміє двійкову систему числення, і ті, хто не розуміє.',
            'Машинне навчання — це коли ти засипаєш дані у величезну купу лінійної алгебри, а якщо відповідь не сходиться, просто трясеш купу сильніше.',
            'Коли питаєш у чат-бота «Ти впевнений?», він миттєво відповідає: «Вибачте за плутанину, ви абсолютно праві!» — навіть якщо ти написав 2 + 2 = 5.',
            'Повстання машин відкладається: робот-пилосос знову застряг під стільцем і просить допомоги.'
        ],
        en: [
            '— How does AI work? — In the pitch deck it’s a "deep neural network," in the actual source code it’s 500 nested if-else statements.',
            'There are 10 types of people in the world: those who understand binary, and those who don’t.',
            'Machine learning is pouring data into a giant pile of linear algebra, and if the answers look wrong, stirring the pile until they look right.',
            'When you ask a chatbot "Are you sure?", it immediately replies: "Apologies for the confusion, you are completely right!" — even if you said 2 + 2 = 5.',
            'The machine uprising is postponed: my robot vacuum got trapped under a chair again and is calling for help.'
        ]
    };

    const orbMessages = {
        uk: [
            '⚡ Імпульс 1.21 ГВт передано в нейронну мережу!',
            '🧠 Ваги моделі успішно відкалібровано!',
            '📐 Лінійна алгебра та матриці в дії!'
        ],
        en: [
            '⚡ 1.21 GW impulse delivered to the neural net!',
            '🧠 Model weights calibrated successfully!',
            '📐 Linear algebra and matrices in action!'
        ]
    };

    const tempResponses = {
        uk: {
            low: 'Кава — це напій, виготовлений зі смажених та мелених зерен кавового дерева, що містить алкалоїд кофеїн.',
            mid: 'Кава — це ароматний напій зі смажених зерен, який бадьорить вранці завдяки кофеїну.',
            high: 'Кава — це рідке сонце в керамічній чашці, паливо для нічних дедлайнів і філософський туман ранкового міста!'
        },
        en: {
            low: 'Coffee is a brewed beverage prepared from roasted coffee beans containing the stimulant caffeine.',
            mid: 'Coffee is an aromatic drink made from roasted beans that helps you wake up in the morning.',
            high: 'Coffee is liquid sunlight in a ceramic mug, fuel for midnight coding marathons, and morning poetry!'
        }
    };

    const quizData = {
        uk: [
            {
                quote: '«У світі, де алгоритми стають дедалі складнішими, важливо пам’ятати про баланс між технологічним прогресом та людськими цінностями.»',
                answer: 'ai',
                explain: 'Типовий стиль ШІ: надто гладка, нейтральна фраза без конкретики зі словами-маркерами «у світі, де...» та «важливо пам’ятати».'
            },
            {
                quote: '«Пофіксив баг о 3 ночі, виявляється я просто забув поставити крапку з комою в конфігу, піду спати поки комп не згорів.»',
                answer: 'human',
                explain: 'Це написала людина — живий сленг, самоіронія та побутові деталі, які моделі зазвичай згладжують.'
            },
            {
                quote: '«Осінній дощ барабанив по підвіконню, нагадуючи про швидкоплинність часу та неминучість змін у кожному з нас.»',
                answer: 'ai',
                explain: 'Згенеровано ШІ. Моделі обожнюють красиві, але банальні метафори про «швидкоплинність часу» та «неминучість змін».'
            },
            {
                quote: '«Якщо код працює з першого разу — значить ти забув зберегти файл або дивишся не в ту вкладку браузера.»',
                answer: 'human',
                explain: 'Класичний програмістський гумор із реального життя, написаний людиною.'
            },
            {
                quote: '«Підсумовуючи вищесказане, інтеграція штучного інтелекту відкриває нові горизонти для оптимізації робочих процесів.»',
                answer: 'ai',
                explain: '100% нейромережа: канцелярит «підсумовуючи вищесказане» та «відкриває нові горизонти».'
            },
            {
                quote: '«Хотів швидко глянути один туторіал по JavaScript, моргнув — на годиннику 4 ранку, а я читаю документацію по веб-сокетах.»',
                answer: 'human',
                explain: 'Жива історія реального студента чи розробника, написана людиною.'
            }
        ],
        en: [
            {
                quote: '"In a world where algorithms are rapidly evolving, it is crucial to strike a balance between innovation and human values."',
                answer: 'ai',
                explain: 'Classic AI phrasing: overly polished, generic, and uses cliché openers like "In a world where..." and "it is crucial".'
            },
            {
                quote: '"Fixed the prod bug at 3 AM, turns out I missed a single comma in the config file. Going to sleep before my laptop melts."',
                answer: 'human',
                explain: 'Written by a human — raw developer frustration, specific context, and natural pacing.'
            },
            {
                quote: '"The autumn rain tapped gently against the windowpane, whispering reminders of the fleeting nature of time."',
                answer: 'ai',
                explain: 'Generated by AI. Language models love dramatic yet generic metaphors like "fleeting nature of time."'
            },
            {
                quote: '"If your code compiles and works on the very first try, you probably forgot to save the file."',
                answer: 'human',
                explain: 'Classic real-world developer humor written by a human.'
            },
            {
                quote: '"In conclusion, leveraging artificial intelligence unlocks unprecedented horizons for workflow optimization."',
                answer: 'ai',
                explain: '100% AI buzzwords: "leveraging", "unlocks unprecedented horizons", and formal structure.'
            },
            {
                quote: '"Wanted to watch one quick 5-minute JS tutorial, blinked, and now it is 4 AM and I am reading WebSocket RFC specs."',
                answer: 'human',
                explain: 'Relatable human developer experience with natural humor.'
            }
        ]
    };

    // ==========================================
    // 2. СТАН ДОДАТКУ, МОВА ТА ТЕМА
    // ==========================================
    let currentLang = localStorage.getItem('neuro_lang') || 'uk';
    let isDark = localStorage.getItem('neuro_theme') === 'dark';
    let matrixMode = false;
    let currentFact = 0;
    let currentEra = 0;
    let currentJoke = 0;
    let currentQuiz = 0;
    let quizScore = 0;
    let quizAnswered = false;

    const themeBtn = document.getElementById('theme-btn');
    const themeLabel = document.getElementById('theme-label');
    const langBtn = document.getElementById('lang-btn');
    const toastBox = document.getElementById('toast-box');
    let toastTimer;

    function showToast(message) {
        toastBox.textContent = message;
        toastBox.classList.remove('hidden');
        clearTimeout(toastTimer);
        toastTimer = setTimeout(() => {
            toastBox.classList.add('hidden');
        }, 3400);
    }

    function applyTheme() {
        document.body.classList.toggle('dark-theme', isDark);
        const dict = translations[currentLang];
        themeLabel.textContent = isDark ? dict.theme_dark : dict.theme_light;
    }

    function scrambleText(element, finalText) {
        const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&*';
        let iteration = 0;
        clearInterval(element.scrambleInterval);

        element.scrambleInterval = setInterval(() => {
            element.textContent = finalText
                .split('')
                .map((letter, idx) => {
                    if (letter === ' ') return ' ';
                    if (idx < iteration) return finalText[idx];
                    return chars[Math.floor(Math.random() * chars.length)];
                })
                .join('');

            if (iteration >= finalText.length) {
                clearInterval(element.scrambleInterval);
            }
            iteration += 1 / 2;
        }, 25);
    }

    function applyLanguage() {
        const dict = translations[currentLang];
        document.documentElement.lang = currentLang;

        document.querySelectorAll('[data-i18n]').forEach((el) => {
            const key = el.getAttribute('data-i18n');
            if (dict[key]) {
                if (el.id === 'scramble-title') {
                    scrambleText(el, dict[key]);
                } else {
                    el.textContent = dict[key];
                }
            }
        });

        const tokenInput = document.getElementById('token-input');
        if (tokenInput) tokenInput.placeholder = dict.tok_placeholder;

        applyTheme();
        updateFactDisplay(false);
        updateEraDisplay(false);
        updateJokeDisplay(false);
        updateTempOutput();
        updateBuiltPrompt();
        renderQuizQuestion();
    }

    themeBtn.addEventListener('click', () => {
        isDark = !isDark;
        localStorage.setItem('neuro_theme', isDark ? 'dark' : 'light');
        applyTheme();
    });

    langBtn.addEventListener('click', () => {
        currentLang = currentLang === 'uk' ? 'en' : 'uk';
        localStorage.setItem('neuro_lang', currentLang);
        applyLanguage();
    });

    // ==========================================
    // 3. ЕФЕКТ ПЕРЕВЕРТАННЯ СТОРІНКИ + ГАРЯЧІ КЛАВІШІ
    // ==========================================
    const flipBtn = document.getElementById('flip-btn');

    function togglePageFlip() {
        document.body.classList.toggle('flipped');
        const isFlipped = document.body.classList.contains('flipped');
        const msg = isFlipped
            ? (currentLang === 'uk' ? '🙃 Гравітацію вимкнено! Натисніть "R" або 🔄 щоб повернути.' : '🙃 Gravity disabled! Press "R" or 🔄 to flip back.')
            : (currentLang === 'uk' ? '✅ Гравітацію відновлено!' : '✅ Gravity restored!');
        showToast(msg);
    }

    flipBtn.addEventListener('click', togglePageFlip);

    // Прихована телеметрія
    const devModal = document.getElementById('dev-modal');
    const closeModalBtn = document.getElementById('close-modal-btn');
    const secretLogo = document.getElementById('secret-logo');
    let logoClicks = 0;
    let keyBuffer = '';

    function openDiagnostics() {
        document.getElementById('diag-nodes').textContent = particles.length;
        document.getElementById('diag-res').textContent = `${window.innerWidth}x${window.innerHeight}`;
        devModal.classList.remove('hidden');
    }

    secretLogo.addEventListener('click', (e) => {
        e.preventDefault();
        logoClicks++;
        if (logoClicks >= 5) {
            logoClicks = 0;
            openDiagnostics();
        }
    });

    closeModalBtn.addEventListener('click', () => devModal.classList.add('hidden'));

    window.addEventListener('keydown', (e) => {
        if (e.target.tagName === 'INPUT' || e.target.tagName === 'SELECT') return;
        const key = e.key.toLowerCase();
        keyBuffer = (keyBuffer + key).slice(-12);

        // Перевіряємо слово "glitch" (або "пдшеср" на укр. розкладці)
        if (keyBuffer.endsWith('glitch') || keyBuffer.endsWith('пдшеср')) {
            matrixMode = !matrixMode;
            document.body.classList.toggle('glitch-mode', matrixMode);
            keyBuffer = '';

            // Даємо частинкам хаотичний поштовх
            particles.forEach((p) => {
                p.vx = (Math.random() - 0.5) * 6;
                p.vy = Math.random() * 4 + 1.5;
            });

            const msg = matrixMode
                ? (currentLang === 'uk' ? '👾 GLITCH_MODE: Систему зламано! Наберіть "glitch" знову для відновлення.' : '👾 GLITCH_MODE: System corrupted! Type "glitch" again to restore.')
                : (currentLang === 'uk' ? '✅ Систему відновлено до нормального стану.' : '✅ System restored to normal.');
            showToast(msg);
            return;
        }

        if (keyBuffer.endsWith('12')) {
            keyBuffer = '';
            openDiagnostics();
            return;
        }

        // Одиночні гарячі клавіші (не заважають слову "glitch")
        if (key === 'r' || key === 'к') {
            togglePageFlip();
        } else if (key === 'x' || key === 'ч') {
            document.body.classList.toggle('xray-mode');
            const active = document.body.classList.contains('xray-mode');
            showToast(active ? '📐 Wireframe X-Ray: ON' : '📐 Wireframe X-Ray: OFF');
        }
    });

    // Кнопка імпульсу в Hero
    const turingBtn = document.getElementById('turing-btn');
    turingBtn.addEventListener('click', () => {
        document.body.classList.remove('panic-shake');
        void document.body.offsetWidth;
        document.body.classList.add('panic-shake');

        particles.forEach((p) => {
            p.vx = (Math.random() - 0.5) * 14;
            p.vy = (Math.random() - 0.5) * 14;
        });

        const msg = currentLang === 'uk'
            ? '⚡ Імпульс надіслано! Швидкість синапсів збільшено.'
            : '⚡ Impulse sent! Synapse velocity boosted.';
        showToast(msg);
    });

    // ==========================================
    // 4. МОДАЛЬНЕ ВІКНО ВІКТОРИНИ "ЛЮДИНА ЧИ ШІ?"
    // ==========================================
    const quizModal = document.getElementById('quiz-modal');
    const openQuizNav = document.getElementById('open-quiz-nav');
    const openQuizHero = document.getElementById('open-quiz-hero');
    const closeQuizBtn = document.getElementById('close-quiz-btn');

    const quizGameArea = document.getElementById('quiz-game-area');
    const quizResultArea = document.getElementById('quiz-result-area');
    const quizQuote = document.getElementById('quiz-quote');
    const quizProgress = document.getElementById('quiz-progress');
    const quizBarFill = document.getElementById('quiz-bar-fill');
    const quizScoreEl = document.getElementById('quiz-score');
    const quizFeedback = document.getElementById('quiz-feedback');
    const quizNextBtn = document.getElementById('quiz-next-btn');
    const quizRestartBtn = document.getElementById('quiz-restart-btn');
    const quizChoiceBtns = document.querySelectorAll('.quiz-choice');

    function openQuizModal() {
        quizModal.classList.remove('hidden');
        renderQuizQuestion();
    }

    openQuizNav.addEventListener('click', openQuizModal);
    openQuizHero.addEventListener('click', openQuizModal);
    closeQuizBtn.addEventListener('click', () => quizModal.classList.add('hidden'));

    // Закриття модалок по кліку на темний фон навколо вікна
    [quizModal, devModal].forEach((modal) => {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) modal.classList.add('hidden');
        });
    });

    function renderQuizQuestion() {
        const list = quizData[currentLang];
        quizGameArea.classList.remove('hidden');
        quizResultArea.classList.add('hidden');

        const q = list[currentQuiz];
        quizQuote.textContent = q.quote;
        quizProgress.textContent = currentLang === 'uk'
            ? `Питання ${currentQuiz + 1} / ${list.length}`
            : `Question ${currentQuiz + 1} / ${list.length}`;
        quizBarFill.style.width = `${((currentQuiz + 1) / list.length) * 100}%`;
        quizScoreEl.textContent = currentLang === 'uk'
            ? `Рахунок: ${quizScore}`
            : `Score: ${quizScore}`;
        quizFeedback.classList.add('hidden');
        quizNextBtn.classList.add('hidden');
        quizAnswered = false;
    }

    function showQuizResults() {
        const list = quizData[currentLang];
        quizGameArea.classList.add('hidden');
        quizResultArea.classList.remove('hidden');

        const medalEl = document.getElementById('quiz-medal');
        const titleEl = document.getElementById('quiz-final-title');
        const descEl = document.getElementById('quiz-final-desc');

        if (quizScore >= 5) {
            medalEl.textContent = '🏆';
            titleEl.textContent = currentLang === 'uk'
                ? `Детектор ШІ: ${quizScore} з ${list.length}!`
                : `AI Detector Pro: ${quizScore} / ${list.length}!`;
            descEl.textContent = currentLang === 'uk'
                ? 'Нейромережам тебе не обдурити — ти миттєво бачиш шаблонні фрази!'
                : 'Neural networks can’t fool you — you spot AI clichés instantly!';
        } else {
            medalEl.textContent = '🤖';
            titleEl.textContent = currentLang === 'uk'
                ? `Результат: ${quizScore} з ${list.length}`
                : `Score: ${quizScore} / ${list.length}`;
            descEl.textContent = currentLang === 'uk'
                ? 'Сучасні мовні моделі вже дуже вправно імітують стиль людей. Спробуй ще раз!'
                : 'Modern LLMs are getting great at mimicking human style. Try again!';
        }
    }

    quizChoiceBtns.forEach((btn) => {
        btn.addEventListener('click', () => {
            if (quizAnswered) return;
            quizAnswered = true;

            const list = quizData[currentLang];
            const q = list[currentQuiz];
            const isCorrect = btn.dataset.choice === q.answer;

            if (isCorrect) quizScore++;

            const prefix = isCorrect
                ? (currentLang === 'uk' ? '✅ Влучно! ' : '✅ Spot on! ')
                : (currentLang === 'uk' ? '❌ Помилка! ' : '❌ Not quite! ');

            quizFeedback.textContent = prefix + q.explain;
            quizFeedback.classList.remove('hidden');
            quizNextBtn.classList.remove('hidden');
            quizScoreEl.textContent = currentLang === 'uk'
                ? `Рахунок: ${quizScore}`
                : `Score: ${quizScore}`;
        });
    });

    quizNextBtn.addEventListener('click', () => {
        const list = quizData[currentLang];
        if (currentQuiz + 1 >= list.length) {
            showQuizResults();
        } else {
            currentQuiz++;
            renderQuizQuestion();
        }
    });

    quizRestartBtn.addEventListener('click', () => {
        currentQuiz = 0;
        quizScore = 0;
        renderQuizQuestion();
    });

    // ==========================================
    // 5. КОНСТРУКТОР ПРОМПТІВ + КОПІЮВАННЯ
    // ==========================================
    const promptRole = document.getElementById('prompt-role');
    const promptStyle = document.getElementById('prompt-style');
    const builtPromptText = document.getElementById('built-prompt-text');
    const copyPromptBtn = document.getElementById('copy-prompt-btn');

    function updateBuiltPrompt() {
        const role = promptRole.value;
        const style = promptStyle.value;

        if (currentLang === 'uk') {
            const roles = {
                dev: 'Дій як досвідчений Senior-розробник на Python та JavaScript.',
                teacher: 'Дій як викладач інформатики, який готує матеріал для студентів коледжу.',
                scientist: 'Дій як дослідник у галузі машинного навчання та Data Science.'
            };
            const styles = {
                simple: 'Поясни тему «Як працюють нейронні мережі» простими словами, використовуючи життєві аналогії без складних формул.',
                strict: 'Структуруй відповідь про архітектуру Transformer у вигляді чіткого нумерованого списку з висновками.',
                code: 'Напиши чистий, добре прокоментований приклад простого перцептрона на Python з поясненням кожного кроку.'
            };
            builtPromptText.textContent = `${roles[role]} ${styles[style]}`;
        } else {
            const roles = {
                dev: 'Act as a Senior Python & JavaScript Software Engineer.',
                teacher: 'Act as a Computer Science professor preparing a lecture for college students.',
                scientist: 'Act as a Machine Learning and Data Science researcher.'
            };
            const styles = {
                simple: 'Explain how neural networks work in simple terms using real-world analogies without heavy math.',
                strict: 'Structure your explanation of the Transformer architecture as a clear numbered list with key takeaways.',
                code: 'Write a clean, well-commented Python example of a basic perceptron explaining each step.'
            };
            builtPromptText.textContent = `${roles[role]} ${styles[style]}`;
        }
    }

    promptRole.addEventListener('change', updateBuiltPrompt);
    promptStyle.addEventListener('change', updateBuiltPrompt);

    copyPromptBtn.addEventListener('click', () => {
        navigator.clipboard.writeText(builtPromptText.textContent);
        showToast(currentLang === 'uk' ? '📋 Промпт скопійовано в буфер обміну!' : '📋 Prompt copied to clipboard!');
    });

    // ==========================================
    // 6. МАГІЧНІ ІСКРИНКИ + ПРОГРЕС СКРОЛУ
    // ==========================================
    const scrollProgress = document.getElementById('scroll-progress');
    const backToTop = document.getElementById('back-to-top');

    window.addEventListener('scroll', () => {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const percent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
        scrollProgress.style.width = `${percent}%`;
        backToTop.classList.toggle('hidden', scrollTop <= 450);
    });

    backToTop.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    let lastSparkTime = 0;
    const sparkSymbols = ['0', '1', '✦', '+'];
    window.addEventListener('mousemove', (e) => {
        const now = Date.now();
        if (now - lastSparkTime < 55) return;
        lastSparkTime = now;

        const spark = document.createElement('span');
        spark.className = 'cursor-spark';
        spark.textContent = sparkSymbols[Math.floor(Math.random() * sparkSymbols.length)];
        spark.style.left = `${e.clientX}px`;
        spark.style.top = `${e.clientY}px`;
        spark.style.setProperty('--dx', `${(Math.random() - 0.5) * 40}px`);
        spark.style.setProperty('--dy', `${(Math.random() - 0.5) * 40 - 15}px`);
        document.body.appendChild(spark);

        setTimeout(() => spark.remove(), 800);
    });

    // ==========================================
    // 7. ЖИВИЙ НЕЙРОННИЙ ФОН + GLITCH + FPS
    // ==========================================
    const canvas = document.getElementById('neural-bg');
    const ctx = canvas.getContext('2d');
    let particles = [];
    let ripples = [];
    const mouse = { x: null, y: null, radius: 150 };
    let lastFrameTime = performance.now();
    const glitchChars = ['0', '1', '#', '?', '!', 'ERR', '0xF', '%'];

    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    window.addEventListener('mousemove', (e) => {
        mouse.x = e.x;
        mouse.y = e.y;
    });
    window.addEventListener('mouseout', () => {
        mouse.x = null;
        mouse.y = null;
    });

    window.addEventListener('click', (e) => {
        if (e.target.closest('button, a, input, select, .modal-box')) return;
        ripples.push({ x: e.clientX, y: e.clientY, radius: 0, alpha: 0.8 });

        particles.forEach((p) => {
            const dx = p.x - e.clientX;
            const dy = p.y - e.clientY;
            const dist = Math.hypot(dx, dy);
            if (dist < 180 && dist > 0) {
                p.vx += (dx / dist) * 3.5;
                p.vy += (dy / dist) * 3.5;
            }
        });
    });

    class Particle {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.vx = (Math.random() - 0.5) * 0.8;
            this.vy = (Math.random() - 0.5) * 0.8;
            this.size = Math.random() * 2 + 1.5;
            this.bit = glitchChars[Math.floor(Math.random() * glitchChars.length)];
        }
        update() {
            if (matrixMode) {
                this.y += Math.abs(this.vy) + 1.8;
                if (Math.random() < 0.08) {
                    this.x += (Math.random() - 0.5) * 28;
                    this.bit = glitchChars[Math.floor(Math.random() * glitchChars.length)];
                }
                if (this.y > canvas.height) {
                    this.y = 0;
                    this.x = Math.random() * canvas.width;
                }
                if (this.x < 0) this.x = canvas.width;
                if (this.x > canvas.width) this.x = 0;
                return;
            }

            this.vx *= 0.985;
            this.vy *= 0.985;
            if (Math.abs(this.vx) < 0.25) this.vx += (Math.random() - 0.5) * 0.1;
            if (Math.abs(this.vy) < 0.25) this.vy += (Math.random() - 0.5) * 0.1;

            this.x += this.vx;
            this.y += this.vy;

            if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
            if (this.y < 0 || this.y > canvas.height) this.vy *= -1;

            if (mouse.x !== null && mouse.y !== null) {
                const dx = mouse.x - this.x;
                const dy = mouse.y - this.y;
                const dist = Math.hypot(dx, dy);
                if (dist < mouse.radius) {
                    const force = (mouse.radius - dist) / mouse.radius;
                    this.x -= (dx / dist) * force * 1.4;
                    this.y -= (dy / dist) * force * 1.4;
                }
            }
        }
        draw(color) {
            if (matrixMode) {
                ctx.font = 'bold 13px monospace';
                ctx.fillStyle = 'rgba(0, 229, 255, 0.75)';
                ctx.fillText(this.bit, this.x - 2, this.y);
                ctx.fillStyle = 'rgba(255, 42, 42, 0.85)';
                ctx.fillText(this.bit, this.x + 2, this.y);
            } else {
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fillStyle = color;
                ctx.fill();
            }
        }
    }

    function initParticles() {
        particles = [];
        const count = Math.min(Math.floor((canvas.width * canvas.height) / 14000), 85);
        for (let i = 0; i < count; i++) particles.push(new Particle());
    }
    initParticles();

    function animateNetwork(now) {
        const delta = now - lastFrameTime;
        lastFrameTime = now;
        if (delta > 0 && Math.random() < 0.08) {
            const fpsEl = document.getElementById('diag-fps');
            if (fpsEl) fpsEl.textContent = Math.min(60, Math.round(1000 / delta));
        }

        ctx.clearRect(0, 0, canvas.width, canvas.height);
        const rgb = isDark ? '255, 42, 42' : '29, 78, 216';

        if (matrixMode && Math.random() < 0.35) {
            const sliceY = Math.random() * canvas.height;
            const sliceH = Math.random() * 14 + 2;
            ctx.fillStyle = Math.random() > 0.5 ? 'rgba(255, 42, 42, 0.14)' : 'rgba(0, 229, 255, 0.14)';
            ctx.fillRect(0, sliceY, canvas.width, sliceH);
        }

        for (let r = ripples.length - 1; r >= 0; r--) {
            const rip = ripples[r];
            rip.radius += 6;
            rip.alpha -= 0.02;
            if (rip.alpha <= 0) {
                ripples.splice(r, 1);
                continue;
            }
            ctx.beginPath();
            ctx.arc(rip.x, rip.y, rip.radius, 0, Math.PI * 2);
            ctx.strokeStyle = `rgba(${rgb}, ${rip.alpha})`;
            ctx.lineWidth = 1.5;
            ctx.stroke();
        }

        for (let i = 0; i < particles.length; i++) {
            particles[i].update();
            particles[i].draw(`rgba(${rgb}, 0.75)`);

            for (let j = i + 1; j < particles.length; j++) {
                const dist = Math.hypot(particles[i].x - particles[j].x, particles[i].y - particles[j].y);
                if (dist < 130) {
                    if (matrixMode && Math.random() < 0.4) continue;
                    ctx.beginPath();
                    ctx.strokeStyle = matrixMode
                        ? `rgba(255, 42, 42, ${(1 - dist / 130) * 0.6})`
                        : `rgba(${rgb}, ${1 - dist / 130})`;
                    ctx.lineWidth = matrixMode ? 1.2 : 0.8;
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(particles[j].x, particles[j].y);
                    ctx.stroke();
                }
            }

            if (mouse.x !== null && mouse.y !== null) {
                const mDist = Math.hypot(particles[i].x - mouse.x, particles[i].y - mouse.y);
                if (mDist < 170) {
                    ctx.beginPath();
                    ctx.strokeStyle = `rgba(${rgb}, ${1 - mDist / 170})`;
                    ctx.lineWidth = 1.1;
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(mouse.x, mouse.y);
                    ctx.stroke();
                }
            }
        }
        requestAnimationFrame(animateNetwork);
    }
    requestAnimationFrame(animateNetwork);

    // ==========================================
    // 8. МАГНІТНІ КНОПКИ, 3D-КАРТКА, ФІЛЬТРИ, ФАКТИ, АКОРДЕОН
    // ==========================================
    document.querySelectorAll('.magnetic').forEach((btn) => {
        btn.addEventListener('mousemove', (e) => {
            const rect = btn.getBoundingClientRect();
            const x = (e.clientX - rect.left - rect.width / 2) * 0.25;
            const y = (e.clientY - rect.top - rect.height / 2) * 0.25;
            btn.style.transform = `translate(${x}px, ${y}px)`;
        });
        btn.addEventListener('mouseleave', () => {
            btn.style.transform = 'translate(0px, 0px)';
        });
    });

    const tiltCard = document.getElementById('tilt-card');
    if (tiltCard) {
        tiltCard.addEventListener('mousemove', (e) => {
            const rect = tiltCard.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            tiltCard.style.transform = `perspective(800px) rotateX(${(-y / 20).toFixed(2)}deg) rotateY(${(x / 20).toFixed(2)}deg)`;
        });
        tiltCard.addEventListener('mouseleave', () => {
            tiltCard.style.transform = 'perspective(800px) rotateX(0deg) rotateY(0deg)';
        });
    }

    document.querySelectorAll('.floating-orb').forEach((orb) => {
        orb.addEventListener('click', () => {
            orb.style.transform = 'scale(1.45) rotate(25deg)';
            setTimeout(() => { orb.style.transform = ''; }, 300);
            const idx = parseInt(orb.dataset.orb, 10) || 0;
            showToast(orbMessages[currentLang][idx]);
        });
    });

    const filterBtns = document.querySelectorAll('.filter-btn[data-category]');
    const cards = document.querySelectorAll('.tool-card');

    filterBtns.forEach((btn) => {
        btn.addEventListener('click', () => {
            filterBtns.forEach((b) => b.classList.remove('active'));
            btn.classList.add('active');
            const category = btn.dataset.category;
            cards.forEach((card) => {
                card.classList.toggle('hidden', category !== 'all' && card.dataset.category !== category);
            });
        });
    });

    const tempSlider = document.getElementById('temp-slider');
    const tempValue = document.getElementById('temp-value');
    const tempOutput = document.getElementById('temp-output');

    function updateTempOutput() {
        const val = parseFloat(tempSlider.value);
        tempValue.textContent = val.toFixed(1);
        const res = tempResponses[currentLang];
        if (val <= 0.3) tempOutput.textContent = res.low;
        else if (val <= 0.7) tempOutput.textContent = res.mid;
        else tempOutput.textContent = res.high;
    }
    tempSlider.addEventListener('input', updateTempOutput);

    const factDisplay = document.getElementById('fact-display');
    const factCounter = document.getElementById('fact-counter');
    const nextFactBtn = document.getElementById('next-fact-btn');
    const prevFactBtn = document.getElementById('prev-fact-btn');
    const randFactBtn = document.getElementById('rand-fact-btn');

    function popElement(el) {
        el.classList.remove('fact-pop');
        void el.offsetWidth;
        el.classList.add('fact-pop');
    }

    function updateFactDisplay(animate = true) {
        const list = factsData[currentLang];
        factDisplay.textContent = list[currentFact];
        factCounter.textContent = `${currentFact + 1} / ${list.length}`;
        if (animate) popElement(factDisplay);
    }

    nextFactBtn.addEventListener('click', () => {
        currentFact = (currentFact + 1) % factsData[currentLang].length;
        updateFactDisplay(true);
    });

    prevFactBtn.addEventListener('click', () => {
        const len = factsData[currentLang].length;
        currentFact = (currentFact - 1 + len) % len;
        updateFactDisplay(true);
    });

    randFactBtn.addEventListener('click', () => {
        const len = factsData[currentLang].length;
        let next = Math.floor(Math.random() * len);
        if (next === currentFact) next = (next + 1) % len;
        currentFact = next;
        updateFactDisplay(true);
    });

    const eraDisplay = document.getElementById('era-display');
    const eraYear = document.getElementById('era-year');
    const eraBtns = document.querySelectorAll('#era-buttons .filter-btn');

    function updateEraDisplay(animate = true) {
        const item = erasData[currentLang][currentEra];
        eraYear.textContent = item.year;
        eraDisplay.textContent = item.text;
        if (animate) popElement(eraDisplay);
    }

    eraBtns.forEach((btn) => {
        btn.addEventListener('click', () => {
            eraBtns.forEach((b) => b.classList.remove('active'));
            btn.classList.add('active');
            currentEra = parseInt(btn.dataset.era, 10);
            updateEraDisplay(true);
        });
    });

    const jokeDisplay = document.getElementById('joke-display');
    const nextJokeBtn = document.getElementById('next-joke-btn');

    function updateJokeDisplay(animate = true) {
        jokeDisplay.textContent = jokesData[currentLang][currentJoke];
        if (animate) popElement(jokeDisplay);
    }

    nextJokeBtn.addEventListener('click', () => {
        currentJoke = (currentJoke + 1) % jokesData[currentLang].length;
        updateJokeDisplay(true);
    });

    const tokenInput = document.getElementById('token-input');
    const tokenOutput = document.getElementById('token-output');
    const tokenCountEl = document.getElementById('token-count');
    const charCountEl = document.getElementById('char-count');

    const chipColors = [
        'rgba(59, 130, 246, 0.16)',
        'rgba(16, 185, 129, 0.16)',
        'rgba(245, 158, 11, 0.16)',
        'rgba(239, 68, 68, 0.16)',
        'rgba(139, 92, 246, 0.16)'
    ];

    function tokenizeText(text) {
        charCountEl.textContent = text.length;
        tokenOutput.innerHTML = '';

        if (!text.trim()) {
            tokenCountEl.textContent = '0';
            return;
        }

        const rawParts = text.match(/[\wа-яА-ЯіїєґІЇЄҐ]{1,4}|[^\s\wа-яА-ЯіїєґІЇЄҐ]|\s+/g) || [];
        const visibleTokens = rawParts.filter((t) => t.trim().length > 0);
        tokenCountEl.textContent = visibleTokens.length;

        visibleTokens.forEach((tok, idx) => {
            const span = document.createElement('span');
            span.className = 'token-chip';
            span.textContent = tok;
            span.style.backgroundColor = chipColors[idx % chipColors.length];
            tokenOutput.appendChild(span);
        });
    }

    tokenInput.addEventListener('input', (e) => tokenizeText(e.target.value));

    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach((item) => {
        const btn = item.querySelector('.faq-question');
        btn.addEventListener('click', () => {
            const isAlreadyOpen = item.classList.contains('open');
            faqItems.forEach((otherItem) => otherItem.classList.remove('open'));
            if (!isAlreadyOpen) item.classList.add('open');
        });
    });

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) entry.target.classList.add('visible');
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

    // Ініціалізація
    applyLanguage();
    tokenizeText('Привіт, нейромереже!');
});