// Software & Tools page - translations and page logic
const translations = {
    en: {
        dir: "ltr",
        pageTitle: "Software & Tools | Abdullah Jaffal",
        metaDescription: "Engineering software built by Abdullah Jaffal: AutoCAD and Civil 3D plugins for infrastructure design, quantity take-off, as-built data integrity, and a catalogue of AutoLISP automation tools.",
        skipToContent: "Skip to main content",
        openMenu: "Open navigation menu",
        closeMenu: "Close navigation menu",

        home: "Home",
        projects: "Projects",
        experience: "Experience",
        education: "Education",
        skills: "Skills",
        about: "About",
        contact: "Contact",
        tools: "Software",
        literature: "Literature",
        backToSite: "Back to portfolio",

        heroHeading: "Software & Tools",
        heroP1: "Infrastructure design still involves a lot of repetitive, error-prone manual work \u2014 quantity take-offs, label placement, as-built checks, the same geometric routines on every project. Where the tool I needed didn't exist, I built it.",
        heroP2: "That started as small AutoLISP scripts and grew into a small ecosystem: a plugin suite for the CAD platforms I use daily, and an AI-assisted command hub I now rely on for AutoCAD work generally. What follows is that toolkit.",
        statTools: "Tools Built",
        statCommands: "CAD Commands",
        statPlatforms: "CAD Platforms",

        suiteHeading: "UrbanoSuite",
        suiteBadge: "Plugin Bundle · v2.0.5",
        suiteLead: "A plugin suite for AutoCAD and BricsCAD that extends Urbano 11, the utility-network design platform. It ships as a single installer with a shared licensing core and is in daily production use.",
        suiteChallenge: "The engineering problem",
        suiteChallengeText: "Urbano 11 exposes no public API — its design data is effectively locked inside the application. I reverse-engineered its export pipeline and built a reliable extraction layer on top of it, which is what makes every module in the suite possible. That layer is documented as an internal rulebook so the behaviour stays reproducible as the host application changes.",

        modBoqTitle: "UrbanoBoQ",
        modBoqRole: "Bill of Quantities",
        modBoqText: "Turns a designed utility network into a complete, multi-sheet Excel quantity take-off: pipes, manholes, trenches and excavation volumes. Resolves overlapping trench geometry with polygon boolean operations so shared excavation is never counted twice, and stacks pre-cast manhole rings automatically to the required depth.",
        modBoqMeta: "24 commands",

        modLockTitle: "UrbanoLock",
        modLockRole: "As-Built Integrity",
        modLockText: "Protects as-built survey data once it has been entered. It locks the recorded values into the drawing, validates them continuously, repairs drift on its own, and can push a verified set back into the design platform's own templates. Built for the stage where a single overwritten level quietly invalidates a whole network.",
        modLockMeta: "60 commands",

        modLabelsTitle: "UrbanoLabels",
        modLabelsRole: "Annotation",
        modLabelsText: "Draws configurable information labels for manholes — a template-driven body holding the fields you choose, offset from the object and optionally joined to it by a leader with further data above and below the line. Labels stay linked to their source, so a data refresh updates them in place.",
        modLabelsMeta: "13 commands · licence-free",

        otherHeading: "Other Projects",
        otherLead: "Work outside the Urbano ecosystem — from drafting automation to a full catalogue of AutoLISP tooling.",

        catchTitle: "CatchBasinPlacer",
        catchRole: "Drafting Automation",
        catchText: "Built specifically for the New Tashkent City project, to its own drawing standard \u2014 not intended for reuse elsewhere. It places and orients asymmetric drainage grille blocks at parking pockets across large drawings. The block only fits a pocket one way round, so instead of tangent mathematics it uses a spatial match-and-filter search.",
        catchMeta: "AutoCAD \u00b7 New Tashkent City",

        cmdhubTitle: "CmdHub",
        cmdhubBadge: "Independent Application \u00b7 Released",
        cmdhubLead: "An independent AutoCAD companion I built and use daily. It unifies 1,200+ searchable commands in one place \u2014 Autodesk's native commands, AutoLISP tools curated from the community, and the ones I've written myself (about 20 entirely by hand, 30+ more with AI assistance) \u2014 each with its own explanation, usage notes and source. Search works by description, not just exact name: type what a command should do and it finds the closest matches.",
        cmdhubStatValue: "1,200+",
        cmdhubStatLabel: "Commands Indexed",
        cmdhubAiTitle: "Built-in AI Assistant",
        cmdhubAiText: "A built-in AI mode answers AutoCAD questions on demand and recommends matching commands from the library. It can also draft an entirely new AutoLISP tool from a plain-language description: the AI proposes a plan, generates and lints the code, and lets you test it safely in a quarantined copy of the drawing \u2014 your original file is never touched \u2014 before it's approved and added to the searchable library.",
        cmdhubHandTitle: "A few of the routines I wrote by hand",
        cmdhubAiNote: "+30 more of my own routines were built with AI assistance",
        statAutolisp: "AutoLISP Routines",

        stackHeading: "How It Is Built",
        stackLead: "The engineering problem drives the stack, not the other way round.",
        stackLangs: "Languages",
        stackPlatforms: "Platforms",
        stackUi: "Interface",
        stackDomain: "Domain",
        stackDomainList: "Network topology, polygon geometry, hydraulic calculation, spreadsheet generation",
        stackProcess: "Development Process",
        stackProcessText: "Built with AI-assisted development — I design the engineering logic and architecture; AI accelerates the implementation.",

        aboutMe: "About Me",
        aboutP1: "I am an Infrastructure Design Engineer with over four years of experience specializing in the technical design of complex utility and water management systems. My professional background spans a diverse range of scales, from localized residential developments to massive, city-scale urban expansions.",
        aboutP2: "My core focus includes pressurized water systems for potable water, irrigation, and firefighting, as well as sanitary sewage and multi-purpose surface water management. This involves designing traditional drainage networks alongside artificial canals that serve beyond simple runoff\u2014facilitating site-wide drainage, microclimate regulation, and urban aesthetics. I also specialize in groundwater control and foundation drainage to ensure structural protection and long-term resilience.",
        aboutP3: "My workflow is built on technical precision, utilizing industry-standard tools such as AutoCAD, Urbano 11, and WaterGEMS to deliver functional and reliable infrastructure solutions. To optimize this process, I leverage Design Automation through AutoLISP and Excel VBA. This approach allows me to eliminate repetitive, routine tasks and minimize potential errors, freeing up capacity to focus on the unique engineering challenges and technical nuances of every project.",
        aboutPhotoAlt: "Portrait of Abdullah Jaffal",

        ctaHeading: "Interested in any of this?",
        ctaText: "Happy to talk through how these tools work, or about building something similar for your own workflow.",
        ctaButton: "Get in touch",

        copyright: "© {year} Abdullah Jaffal. All rights reserved.",
        backToTop: "Back to Top"
    },

    ar: {
        dir: "rtl",
        pageTitle: "البرمجيات والأدوات | عبد الله جفَّال",
        metaDescription: "برمجيات هندسية من تطوير عبد الله جفَّال: إضافات لـ AutoCAD و Civil 3D لتصميم البنية التحتية، وحساب الكميات، وحماية بيانات ما بُني فعلاً، وفهرس أدوات أتمتة AutoLISP.",
        skipToContent: "الانتقال إلى المحتوى الرئيسي",
        openMenu: "فتح قائمة التنقل",
        closeMenu: "إغلاق قائمة التنقل",

        home: "الرئيسية",
        projects: "المشاريع",
        experience: "الخبرات",
        education: "التعليم",
        skills: "المهارات",
        about: "نبذة عني",
        contact: "تواصل",
        tools: "البرمجيات",
        literature: "مساحة أدبية",
        backToSite: "العودة إلى الصفحة الرئيسية",

        heroHeading: "البرمجيات والأدوات",
        heroP1: "لا يزال تصميم البنية التحتية يتطلّب كمًّا كبيرًا من العمل اليدوي المتكرر والمعرَّض للخطأ — حساب الكميات، توزيع اللصائق، التحقق من بيانات ما بُني فعلاً، ونفس الروتينات الهندسية في كل مشروع. حين لا تكون الأداة التي أحتاجها موجودة، أبنيها بنفسي.",
        heroP2: "بدأ الأمر بنصوص AutoLISP صغيرة، وتوسّع إلى منظومة متكاملة: حزمة إضافات لمنصات CAD التي أستخدمها يوميًا، ومركز أوامر مدعوم بالذكاء الاصطناعي أعتمد عليه الآن في عملي على AutoCAD عمومًا. وفيما يلي هذه المجموعة.",
        statTools: "أدوات مطوَّرة",
        statCommands: "أوامر داخل CAD",
        statPlatforms: "منصات CAD",

        suiteHeading: "UrbanoSuite",
        suiteBadge: "حزمة إضافات · الإصدار 2.0.5",
        suiteLead: "حزمة إضافات لـ AutoCAD و BricsCAD توسّع Urbano 11، منصة تصميم شبكات الخدمات. تُوزَّع بمثبِّت واحد بنواة ترخيص مشتركة، وهي قيد الاستخدام اليومي الفعلي.",
        suiteChallenge: "المشكلة الهندسية",
        suiteChallengeText: "لا يوفّر Urbano 11 أي واجهة برمجية عامة — أي أن بيانات التصميم محبوسة عملياً داخل البرنامج. قمت بالهندسة العكسية لمسار التصدير فيه وبنيت فوقه طبقة استخراج موثوقة، وهي ما جعل كل وحدات الحزمة ممكنة. ووثّقت تلك الطبقة في مرجع داخلي يضمن ثبات السلوك مع تغيّر البرنامج المضيف.",

        modBoqTitle: "UrbanoBoQ",
        modBoqRole: "جداول الحصر والكميات",
        modBoqText: "يحوّل شبكة الخدمات المصمَّمة إلى جدول كميات متكامل متعدد الأوراق في Excel: البواري والمناهل والخنادق وأحجام الحفر. يحلّ تداخل هندسة الخنادق عبر عمليات منطقية على المضلعات فلا يُحسب الحفر المشترك مرتين، ويكدّس حلقات المناهل مسبقة الصب تلقائياً حتى العمق المطلوب.",
        modBoqMeta: "24 أمراً",

        modLockTitle: "UrbanoLock",
        modLockRole: "حماية بيانات ما بُني فعلاً",
        modLockText: "يحمي بيانات المسح لما بُني فعلاً بعد إدخالها. يثبّت القيم المسجّلة داخل المخطط، ويتحقق منها باستمرار، ويصلح الانحراف ذاتياً، ويستطيع إعادة النسخة الموثَّقة إلى قوالب منصة التصميم نفسها. صُمم للمرحلة التي يكفي فيها منسوب واحد مكتوب فوقه ليُبطل شبكة كاملة بصمت.",
        modLockMeta: "60 أمراً",

        modLabelsTitle: "UrbanoLabels",
        modLabelsRole: "اللصائق والبيانات",
        modLabelsText: "يرسم لصائق معلومات قابلة للتهيئة للمناهل — جسم يعتمد على قالب يحمل الحقول التي تختارها، مُزاح عن المنهل ويمكن وصله به بخط إشارة يحمل بيانات إضافية أعلاه وأسفله. تبقى اللصيقة مرتبطة بمصدرها، فتحديث البيانات يحدّثها في مكانها.",
        modLabelsMeta: "13 أمراً · بلا ترخيص",

        otherHeading: "مشاريع أخرى",
        otherLead: "أعمال خارج منظومة Urbano — من أتمتة الرسم إلى فهرس متكامل لأدوات AutoLISP.",

        catchTitle: "CatchBasinPlacer",
        catchRole: "أتمتة الرسم",
        catchText: "أداة مخصَّصة حصرًا لمشروع مدينة طشقند الجديدة (New Tashkent City)، ومبنية وفق معيار رسمه الخاص — غير مُعدَّة للاستخدام في مشاريع أخرى. توزّع بلوك المصافي غير المتماثل وتوجّهه عند جيوب الوقوف في المخططات الكبيرة. البلوك لا يستقر في الجيب إلا باتجاه واحد، فبدل حساب المماسات تستخدم بحثًا بالمطابقة والترشيح المكاني.",
        catchMeta: "AutoCAD · مدينة طشقند الجديدة",

        cmdhubTitle: "CmdHub",
        cmdhubBadge: "برنامج مستقل · منشور",
        cmdhubLead: "رفيق مستقل لبرنامج AutoCAD صمّمته وأستخدمه يوميًا. يوحّد أكثر من 1,200 أمر قابل للبحث في مكان واحد — أوامر AutoCAD الأساسية، وأدوات AutoLISP مُنتقاة من المجتمع، وتلك التي كتبتها بنفسي (نحو 20 يدويًا بالكامل، و+30 أخرى بمساعدة الذكاء الاصطناعي) — لكل عنصر منها شرحه وملاحظات استخدامه ومصدره. البحث يعمل بالوصف لا بالاسم الدقيق فقط: اكتب ما يُفترض أن يفعله الأمر ليجد أقرب تطابق.",
        cmdhubStatValue: "1,200+",
        cmdhubStatLabel: "أمر مفهرَس",
        cmdhubAiTitle: "مساعد ذكاء اصطناعي مدمج",
        cmdhubAiText: "وضع ذكاء اصطناعي مدمج يجيب عن أسئلة AutoCAD فوريًا ويقترح الأوامر المطابقة من المكتبة. كما يستطيع صياغة أداة AutoLISP جديدة كليًا من وصف بلغة طبيعية: يقترح الذكاء الاصطناعي خطة، يولّد الكود ويدقّقه، ويتيح لك اختباره بأمان في نسخة معزولة من المخطط — دون المساس بملفك الأصلي إطلاقًا — قبل اعتماده وإضافته إلى المكتبة القابلة للبحث.",
        cmdhubHandTitle: "أمثلة مما كتبته يدويًا",
        cmdhubAiNote: "+30 روتينًا آخر من روتيناتي الخاصة بُني بمساعدة الذكاء الاصطناعي",
        statAutolisp: "روتينات AutoLISP",

        stackHeading: "كيف بُنيت",
        stackLead: "المشكلة الهندسية هي ما يفرض الأدوات، لا العكس.",
        stackLangs: "اللغات",
        stackPlatforms: "المنصات",
        stackUi: "الواجهات",
        stackDomain: "المجال",
        stackDomainList: "طوبولوجيا الشبكات، هندسة المضلعات، الحساب الهيدروليكي، توليد جداول البيانات",
        stackProcess: "منهجية التطوير",
        stackProcessText: "أُطوَّر بمساعدة الذكاء الاصطناعي — أصمّم المنطق الهندسي والبنية، والذكاء الاصطناعي يسرّع التنفيذ.",

        aboutMe: "\u0646\u0628\u0630\u0629 \u0639\u0646\u064a",
        aboutP1: "أنا مهندس تصميم بنية تحتية بخبرة تزيد عن أربع سنوات، متخصص في التصميم الفني لأنظمة الخدمات وإدارة المياه المعقدة. تمتد خلفيتي المهنية عبر نطاق متنوع من المشاريع، بدءاً من التطويرات السكنية المحلية إلى التوسعات الحضرية الضخمة على مستوى المدن.",
        aboutP2: "\u064a\u0634\u0645\u0644 \u062a\u0631\u0643\u064a\u0632\u064a \u0627\u0644\u0623\u0633\u0627\u0633\u064a \u0623\u0646\u0638\u0645\u0629 \u0627\u0644\u0645\u064a\u0627\u0647 \u0627\u0644\u0645\u0636\u063a\u0648\u0637\u0629 \u0644\u0645\u064a\u0627\u0647 \u0627\u0644\u0634\u0631\u0628 \u0648\u0627\u0644\u0631\u064a \u0648\u0645\u0643\u0627\u0641\u062d\u0629 \u0627\u0644\u062d\u0631\u0627\u0626\u0642\u060c \u0628\u0627\u0644\u0625\u0636\u0627\u0641\u0629 \u0625\u0644\u0649 \u0627\u0644\u0635\u0631\u0641 \u0627\u0644\u0635\u062d\u064a \u0648\u0625\u062f\u0627\u0631\u0629 \u0627\u0644\u0645\u064a\u0627\u0647 \u0627\u0644\u0633\u0637\u062d\u064a\u0629 \u0645\u062a\u0639\u062f\u062f\u0629 \u0627\u0644\u0623\u063a\u0631\u0627\u0636. \u064a\u062a\u0636\u0645\u0646 \u0630\u0644\u0643 \u062a\u0635\u0645\u064a\u0645 \u0634\u0628\u0643\u0627\u062a \u0627\u0644\u0635\u0631\u0641 \u0627\u0644\u062a\u0642\u0644\u064a\u062f\u064a\u0629 \u0625\u0644\u0649 \u062c\u0627\u0646\u0628 \u0627\u0644\u0642\u0646\u0648\u0627\u062a \u0627\u0644\u0627\u0635\u0637\u0646\u0627\u0639\u064a\u0629 \u0627\u0644\u062a\u064a \u062a\u062a\u062c\u0627\u0648\u0632 \u0645\u062c\u0631\u062f \u062a\u0635\u0631\u064a\u0641 \u0627\u0644\u0645\u064a\u0627\u0647 \u2014 \u0644\u062a\u0634\u0645\u0644 \u062a\u0635\u0631\u064a\u0641 \u0627\u0644\u0645\u0648\u0642\u0639 \u0628\u0627\u0644\u0643\u0627\u0645\u0644\u060c \u0648\u062a\u0646\u0638\u064a\u0645 \u0627\u0644\u0645\u0646\u0627\u062e \u0627\u0644\u0645\u062d\u0644\u064a\u060c \u0648\u0625\u0636\u0641\u0627\u0621 \u062c\u0645\u0627\u0644\u064a\u0629 \u062d\u0636\u0631\u064a\u0629. \u0623\u062a\u062e\u0635\u0635 \u0623\u064a\u0636\u0627\u064b \u0641\u064a \u0627\u0644\u062a\u062d\u0643\u0645 \u0628\u0627\u0644\u0645\u064a\u0627\u0647 \u0627\u0644\u062c\u0648\u0641\u064a\u0629 \u0648\u062a\u0635\u0631\u064a\u0641 \u0627\u0644\u0623\u0633\u0627\u0633\u0627\u062a \u0644\u0636\u0645\u0627\u0646 \u0627\u0644\u062d\u0645\u0627\u064a\u0629 \u0627\u0644\u0625\u0646\u0634\u0627\u0626\u064a\u0629 \u0648\u0627\u0644\u0645\u062a\u0627\u0646\u0629 \u0639\u0644\u0649 \u0627\u0644\u0645\u062f\u0649 \u0627\u0644\u0637\u0648\u064a\u0644.",
        aboutP3: "\u062a\u0639\u062a\u0645\u062f \u0645\u0646\u0647\u062c\u064a\u0629 \u0639\u0645\u0644\u064a \u0639\u0644\u0649 \u0627\u0644\u062f\u0642\u0629 \u0627\u0644\u0641\u0646\u064a\u0629\u060c \u0628\u0627\u0633\u062a\u062e\u062f\u0627\u0645 \u0623\u062f\u0648\u0627\u062a \u0642\u064a\u0627\u0633\u064a\u0629 \u0641\u064a \u0627\u0644\u0635\u0646\u0627\u0639\u0629 \u0645\u062b\u0644 AutoCAD \u0648 Urbano 11 \u0648 WaterGEMS \u0644\u062a\u0642\u062f\u064a\u0645 \u062d\u0644\u0648\u0644 \u0628\u0646\u064a\u0629 \u062a\u062d\u062a\u064a\u0629 \u0648\u0638\u064a\u0641\u064a\u0629 \u0648\u0645\u0648\u062b\u0648\u0642\u0629. \u0648\u0644\u062a\u062d\u0633\u064a\u0646 \u0647\u0630\u0647 \u0627\u0644\u0639\u0645\u0644\u064a\u0629\u060c \u0623\u0633\u062a\u0641\u064a\u062f \u0645\u0646 \u0623\u062a\u0645\u062a\u0629 \u0627\u0644\u062a\u0635\u0645\u064a\u0645 \u0639\u0628\u0631 AutoLISP \u0648 Excel VBA. \u064a\u062a\u064a\u062d \u0644\u064a \u0647\u0630\u0627 \u0627\u0644\u0646\u0647\u062c \u0627\u0644\u062a\u062e\u0644\u0635 \u0645\u0646 \u0627\u0644\u0645\u0647\u0627\u0645 \u0627\u0644\u0631\u0648\u062a\u064a\u0646\u064a\u0629 \u0627\u0644\u0645\u062a\u0643\u0631\u0631\u0629 \u0648\u062a\u0642\u0644\u064a\u0644 \u0627\u0644\u0623\u062e\u0637\u0627\u0621 \u0627\u0644\u0645\u062d\u062a\u0645\u0644\u0629\u060c \u0645\u0645\u0627 \u064a\u0648\u0641\u0631 \u0644\u064a \u0627\u0644\u0645\u0633\u0627\u062d\u0629 \u0644\u0644\u062a\u0631\u0643\u064a\u0632 \u0639\u0644\u0649 \u0627\u0644\u062a\u062d\u062f\u064a\u0627\u062a \u0627\u0644\u0647\u0646\u062f\u0633\u064a\u0629 \u0627\u0644\u0641\u0631\u064a\u062f\u0629 \u0648\u0627\u0644\u062a\u0641\u0627\u0635\u064a\u0644 \u0627\u0644\u0641\u0646\u064a\u0629 \u0644\u0643\u0644 \u0645\u0634\u0631\u0648\u0639.",
        aboutPhotoAlt: "\u0635\u0648\u0631\u0629 \u0634\u062e\u0635\u064a\u0629 \u0644\u0639\u0628\u062f \u0627\u0644\u0644\u0647 \u062c\u0641\u064e\u0651\u0627\u0644",

        ctaHeading: "\u0647\u0644 \u064a\u0647\u0645\u0651\u0643 \u0634\u064a\u0621 \u0645\u0646 \u0647\u0630\u0627\u061f",
        ctaText: "يسعدني أن أشرح كيف تعمل هذه الأدوات، أو أن نتحدث عن بناء شيء مشابه لسير عملك.",
        ctaButton: "تواصل معي",

        copyright: "© {year} عبد الله جفَّال. جميع الحقوق محفوظة.",
        backToTop: "العودة للأعلى"
    },

    tr: {
        dir: "ltr",
        pageTitle: "Yazılım ve Araçlar | Abdullah Jaffal",
        metaDescription: "Abdullah Jaffal tarafından geliştirilen mühendislik yazılımları: altyapı tasarımı, metraj, as-built veri bütünlüğü ve AutoLISP otomasyon araçları kataloğu için AutoCAD ve Civil 3D eklentileri.",
        skipToContent: "Ana içeriğe geç",
        openMenu: "Menüyü aç",
        closeMenu: "Menüyü kapat",

        home: "Ana Sayfa",
        projects: "Projeler",
        experience: "Deneyim",
        education: "Eğitim",
        skills: "Yetenekler",
        about: "Hakkımda",
        contact: "İletişim",
        tools: "Yazılım",
        literature: "Edebiyat",
        backToSite: "Portfolyoya dön",

        heroHeading: "Yaz\u0131l\u0131m ve Ara\u00e7lar",
        heroP1: "Altyap\u0131 tasar\u0131m\u0131 h\u00e2l\u00e2 \u00e7ok say\u0131da tekrarlayan ve hataya a\u00e7\u0131k el i\u015fi i\u00e7eriyor \u2014 metraj, etiket yerle\u015ftirme, as-built kontrolleri, her projede ayn\u0131 geometrik rutinler. \u0130htiyac\u0131m olan ara\u00e7 yoksa, onu kendim yazd\u0131m.",
        heroP2: "Bu, k\u00fc\u00e7\u00fck AutoLISP betikleriyle ba\u015flad\u0131 ve k\u00fc\u00e7\u00fck bir ekosisteme d\u00f6n\u00fc\u015ft\u00fc: her g\u00fcn kulland\u0131\u011f\u0131m CAD platformlar\u0131 i\u00e7in bir eklenti paketi, ve art\u0131k genel AutoCAD i\u015flerimde g\u00fcvendi\u011fim yapay zeka destekli bir komut merkezi. A\u015fa\u011f\u0131da bu ara\u00e7 seti yer al\u0131yor.",
        statTools: "Geliştirilen Araç",
        statCommands: "CAD Komutu",
        statPlatforms: "CAD Platformu",

        suiteHeading: "UrbanoSuite",
        suiteBadge: "Eklenti Paketi · v2.0.5",
        suiteLead: "Altyapı şebekesi tasarım platformu Urbano 11'i genişleten, AutoCAD ve BricsCAD için bir eklenti paketi. Ortak lisans çekirdeğine sahip tek bir kurulum dosyası olarak dağıtılıyor ve günlük üretimde kullanılıyor.",
        suiteChallenge: "Mühendislik problemi",
        suiteChallengeText: "Urbano 11 herhangi bir genel API sunmuyor — tasarım verisi fiilen uygulamanın içinde kilitli kalıyor. Dışa aktarım hattını tersine mühendislikle çözüp üzerine güvenilir bir veri çıkarma katmanı kurdum; paketteki her modülü mümkün kılan şey bu katman. Katman, ana uygulama değiştikçe davranışın tekrarlanabilir kalması için bir iç kural kitabında belgelendi.",

        modBoqTitle: "UrbanoBoQ",
        modBoqRole: "Metraj ve Keşif",
        modBoqText: "Tasarlanmış bir altyapı şebekesini eksiksiz, çok sayfalı bir Excel metrajına dönüştürür: borular, bacalar, hendekler ve kazı hacimleri. Örtüşen hendek geometrisini poligon boole işlemleriyle çözer; böylece ortak kazı iki kez sayılmaz. Prekast baca bileziklerini gereken derinliğe göre otomatik olarak istifler.",
        modBoqMeta: "24 komut",

        modLockTitle: "UrbanoLock",
        modLockRole: "As-Built Veri Bütünlüğü",
        modLockText: "As-built ölçüm verisini girildikten sonra korur. Kaydedilen değerleri çizime kilitler, sürekli doğrular, sapmayı kendi kendine onarır ve doğrulanmış seti tasarım platformunun kendi şablonlarına geri aktarabilir. Üzerine yazılan tek bir kotun koca bir şebekeyi sessizce geçersiz kıldığı aşama için tasarlandı.",
        modLockMeta: "60 komut",

        modLabelsTitle: "UrbanoLabels",
        modLabelsRole: "Etiketleme",
        modLabelsText: "Bacalar için yapılandırılabilir bilgi etiketleri çizer — seçtiğiniz alanları taşıyan şablon tabanlı bir gövde, nesneden ötelenmiş ve isteğe bağlı olarak çizginin altında ve üstünde ek veri taşıyan bir kılavuz çizgisiyle ona bağlı. Etiketler kaynağına bağlı kalır; veri yenilendiğinde yerinde güncellenir.",
        modLabelsMeta: "13 komut · lisanssız",

        otherHeading: "Diğer Projeler",
        otherLead: "Urbano ekosisteminin dışındaki çalışmalar — çizim otomasyonundan eksiksiz bir AutoLISP araç kataloğuna kadar.",

        catchTitle: "CatchBasinPlacer",
        catchRole: "Çizim Otomasyonu",
        catchText: "Yeni Ta\u015fkent \u015eehri (New Tashkent City) projesine \u00f6zel olarak, o projenin kendi \u00e7izim standard\u0131na g\u00f6re geli\u015ftirildi \u2014 ba\u015fka projelerde kullan\u0131lmak \u00fczere tasarlanmad\u0131. B\u00fcy\u00fck \u00e7izimlerde park ceplerine asimetrik \u0131zgara bloklar\u0131n\u0131 yerle\u015ftirir ve y\u00f6nlendirir. Blok cebe yaln\u0131zca tek y\u00f6nde oturdu\u011fu i\u00e7in te\u011fet matemati\u011fi yerine mek\u00e2nsal e\u015fle\u015ftirme ve filtreleme aramas\u0131 kullan\u0131r.",
        catchMeta: "AutoCAD \u00b7 Yeni Ta\u015fkent \u015eehri",

        cmdhubTitle: "CmdHub",
        cmdhubBadge: "Ba\u011f\u0131ms\u0131z Uygulama \u00b7 Yay\u0131nda",
        cmdhubLead: "Kendi geli\u015ftirdi\u011fim ve her g\u00fcn kulland\u0131\u011f\u0131m ba\u011f\u0131ms\u0131z bir AutoCAD yard\u0131mc\u0131s\u0131. 1.200'den fazla aranabilir komutu tek bir yerde birle\u015ftirir \u2014 Autodesk'in yerle\u015fik komutlar\u0131, topluluktan derlenen AutoLISP ara\u00e7lar\u0131 ve kendi yazd\u0131klar\u0131m (yakla\u015f\u0131k 20 tanesi tamamen elle, 30'dan fazlas\u0131 yapay zeka deste\u011fiyle) \u2014 her biri kendi a\u00e7\u0131klamas\u0131, kullan\u0131m notlar\u0131 ve kayna\u011f\u0131yla birlikte. Arama tam isme de\u011fil a\u00e7\u0131klamaya g\u00f6re \u00e7al\u0131\u015f\u0131r: bir komutun ne yapt\u0131\u011f\u0131n\u0131 yaz\u0131n, en yak\u0131n e\u015fle\u015fmeleri bulsun.",
        cmdhubStatValue: "1.200+",
        cmdhubStatLabel: "\u0130ndekslenen Komut",
        cmdhubAiTitle: "Yerle\u015fik Yapay Zeka Asistan\u0131",
        cmdhubAiText: "Yerle\u015fik yapay zeka modu, AutoCAD sorular\u0131n\u0131 an\u0131nda yan\u0131tlar ve k\u00fct\u00fcphaneden e\u015fle\u015fen komutlar\u0131 \u00f6nerir. Ayr\u0131ca sade bir dille yap\u0131lan tarife dayanarak tamamen yeni bir AutoLISP arac\u0131 tasla\u011f\u0131 da \u00e7\u0131karabilir: yapay zeka bir plan \u00f6nerir, kodu \u00fcretir ve denetler, ve orijinal dosyan\u0131za hi\u00e7 dokunmadan \u00e7izimin karantinaya al\u0131nm\u0131\u015f bir kopyas\u0131nda g\u00fcvenle test etmenizi sa\u011flar \u2014 onayland\u0131ktan sonra aranabilir k\u00fct\u00fcphaneye eklenir.",
        cmdhubHandTitle: "Elle yazd\u0131\u011f\u0131m rutinlerden birka\u00e7\u0131",
        cmdhubAiNote: "Kendi yazd\u0131\u011f\u0131m rutinlerden 30'dan fazlas\u0131 yapay zeka deste\u011fiyle \u00fcretildi",
        statAutolisp: "AutoLISP Rutini",

        stackHeading: "Nasıl Geliştirildi",
        stackLead: "Araçları mühendislik problemi belirler, tersi değil.",
        stackLangs: "Diller",
        stackPlatforms: "Platformlar",
        stackUi: "Arayüz",
        stackDomain: "Alan",
        stackDomainList: "Şebeke topolojisi, poligon geometrisi, hidrolik hesap, hesap tablosu üretimi",
        stackProcess: "Geliştirme Süreci",
        stackProcessText: "Yapay zeka destekli geliştirmeyle inşa edildi — mühendislik mantığını ve mimariyi ben tasarlıyorum, yapay zeka uygulamayı hızlandırıyor.",

        aboutMe: "Hakk\u0131mda",
        aboutP1: "Karma\u015f\u0131k altyap\u0131 ve su y\u00f6netim sistemlerinin teknik tasar\u0131m\u0131nda uzmanla\u015fm\u0131\u015f, d\u00f6rt y\u0131l\u0131 a\u015fk\u0131n deneyime sahip bir Altyap\u0131 Tasar\u0131m M\u00fchendisiyim. Profesyonel ge\u00e7mi\u015fim, yerel konut projelerinden b\u00fcy\u00fck \u015fehir \u00f6l\u00e7e\u011findeki kentsel geni\u015flemelere kadar geni\u015f bir yelpazeyi kapsamaktad\u0131r.",
        aboutP2: "Temel odak noktam, i\u00e7me suyu, sulama ve yang\u0131n s\u00f6nd\u00fcrme i\u00e7in bas\u0131n\u00e7l\u0131 su sistemlerinin yan\u0131 s\u0131ra s\u0131hhi kanalizasyon ve \u00e7ok ama\u00e7l\u0131 y\u00fczey suyu y\u00f6netimidir. Bu, basit y\u00fczey ak\u0131\u015f\u0131n\u0131n \u00f6tesine hizmet eden yapay kanallar\u0131n yan\u0131 s\u0131ra geleneksel drenaj a\u011flar\u0131n\u0131n tasarlanmas\u0131n\u0131 i\u00e7erir; b\u00f6ylece alan \u00e7ap\u0131nda drenaj, mikro iklim d\u00fczenlemesi ve kentsel estetik kolayla\u015ft\u0131r\u0131l\u0131r. Ayr\u0131ca yap\u0131sal koruma ve uzun vadeli dayan\u0131kl\u0131l\u0131k sa\u011flamak i\u00e7in yeralt\u0131 suyu kontrol\u00fc ve temel drenaj\u0131 konular\u0131nda uzman\u0131m.",
        aboutP3: "\u0130\u015f ak\u0131\u015f\u0131m, i\u015flevsel ve g\u00fcvenilir altyap\u0131 \u00e7\u00f6z\u00fcmleri sunmak i\u00e7in AutoCAD, Urbano 11 ve WaterGEMS gibi end\u00fcstri standard\u0131 ara\u00e7lar\u0131 kullanan teknik hassasiyete dayanmaktad\u0131r. Bu s\u00fcreci optimize etmek i\u00e7in AutoLISP ve Excel VBA ile Tasar\u0131m Otomasyonundan yararlan\u0131yorum. Bu yakla\u015f\u0131m, tekrarlayan rutin g\u00f6revleri ortadan kald\u0131rmama ve olas\u0131 hatalar\u0131 en aza indirmeme olanak tan\u0131yarak her projenin benzersiz m\u00fchendislik zorluklar\u0131na ve teknik n\u00fcanslar\u0131na odaklanmak i\u00e7in kapasite a\u00e7\u0131yor.",
        aboutPhotoAlt: "Abdullah Jaffal portresi",

        ctaHeading: "\u0130lginizi \u00e7eken bir \u015fey var m\u0131?",
        ctaText: "Bu araçların nasıl çalıştığını konuşmaktan veya kendi iş akışınız için benzer bir şey geliştirmekten memnuniyet duyarım.",
        ctaButton: "İletişime geçin",

        copyright: "© {year} Abdullah Jaffal. Tüm hakları saklıdır.",
        backToTop: "Yukarı Dön"
    }
};

// The 12 most representative AutoLISP routines written entirely by hand
// (no AI assistance), distributed through CmdHub alongside 30+ others
// built with AI-assisted development. Command names are technical and
// stay the same across languages; only the description is translated.
const cmdhubRoutines = {
    en: [
        { cmd: 'PIPELABELLEN', desc: "Labels a pipe polyline with its diameter above and calculated length below, in one pass." },
        { cmd: 'BLOCKFIX', desc: "Resolves overlapping labels automatically \u2014 true block corners, spiral search for empty space." },
        { cmd: 'SPOTINCIRCLES', desc: "Marks the center of each selected circle with a point, without deleting the circle." },
        { cmd: 'BLOCKINCIRCLE', desc: "Places a chosen block at the center of every selected circle \u2014 manholes, wells, symbols." },
        { cmd: 'CHAXIS', desc: "Draws a centerline axis between two boundary lines, direction-aware so it never crosses." },
        { cmd: 'IZGMET', desc: "Extracts drainage-grille quantities from dynamic block properties, grouped by width." },
        { cmd: 'ADDVERTEXATPLINTERSECTION', desc: "Adds a vertex at every polyline intersection and end-touch point, for clean topology." },
        { cmd: 'DUPLAYOUTS / CENTERVP', desc: "Duplicates a layout sheet per drawing frame, then auto-centers and scales its viewport." },
        { cmd: 'PLHEADBLOCK', desc: "Places a direction block at each polyline's start, rotated to match its heading." },
        { cmd: 'CIRCLESONPOLYLINE', desc: "Places circles at a fixed interval and radius along a polyline \u2014 piles, boreholes." },
        { cmd: 'CIRCLEATVERTS', desc: "Adds a circle at every vertex of selected polylines, on a chosen or new layer." },
        { cmd: 'PNTFROMTXT', desc: "Converts elevation-labeled text into a real 3D point, using the number as the Z value." }
    ],
    ar: [
        { cmd: 'PIPELABELLEN', desc: "\u064a\u0643\u062a\u0628 \u0642\u0637\u0631 \u0627\u0644\u0628\u0648\u0631\u064a \u0641\u0648\u0642 \u0627\u0644\u062e\u0637 \u0648\u0637\u0648\u0644\u0647 \u0627\u0644\u0645\u062d\u0633\u0648\u0628 \u062a\u062d\u062a\u0647\u060c \u0628\u0636\u063a\u0637\u0629 \u0648\u0627\u062d\u062f\u0629." },
        { cmd: 'BLOCKFIX', desc: "\u064a\u062d\u0644 \u062a\u062f\u0627\u062e\u0644 \u0628\u0644\u0648\u0643\u0627\u062a \u0627\u0644\u0644\u0635\u0627\u0626\u0642 \u062a\u0644\u0642\u0627\u0626\u064a\u064b\u0627 \u2014 \u0628\u062d\u0633\u0627\u0628 \u0627\u0644\u0632\u0648\u0627\u064a\u0627 \u0627\u0644\u062d\u0642\u064a\u0642\u064a\u0629 \u0648\u0628\u062d\u062b \u062d\u0644\u0632\u0648\u0646\u064a \u0639\u0646 \u0623\u0642\u0631\u0628 \u0641\u0631\u0627\u063a." },
        { cmd: 'SPOTINCIRCLES', desc: "\u064a\u0636\u0639 \u0646\u0642\u0637\u0629 \u0641\u064a \u0645\u0631\u0643\u0632 \u0643\u0644 \u062f\u0627\u0626\u0631\u0629 \u0645\u062e\u062a\u0627\u0631\u0629 \u062f\u0648\u0646 \u062d\u0630\u0641\u0647\u0627." },
        { cmd: 'BLOCKINCIRCLE', desc: "\u064a\u0636\u0639 \u0628\u0644\u0648\u0643\u064b\u0627 \u0645\u062e\u062a\u0627\u0631\u064b\u0627 \u0641\u064a \u0645\u0631\u0643\u0632 \u0643\u0644 \u062f\u0627\u0626\u0631\u0629 \u2014 \u0644\u0644\u0645\u0646\u0627\u0647\u0644 \u0648\u0627\u0644\u0622\u0628\u0627\u0631 \u0648\u0627\u0644\u0631\u0645\u0648\u0632." },
        { cmd: 'CHAXIS', desc: "\u064a\u0631\u0633\u0645 \u0645\u062d\u0648\u0631\u064b\u0627 \u0648\u0633\u0637\u064a\u064b\u0627 \u0628\u064a\u0646 \u062e\u0637\u064a \u062d\u062f\u060c \u0628\u062a\u062d\u0643\u0645 \u0627\u062a\u062c\u0627\u0647\u064a \u064a\u0645\u0646\u0639 \u062a\u0642\u0627\u0637\u0639\u0647." },
        { cmd: 'IZGMET', desc: "\u064a\u0633\u062a\u062e\u0631\u062c \u0643\u0645\u064a\u0627\u062a \u0645\u0635\u0627\u0641\u064a \u0627\u0644\u062a\u0635\u0631\u064a\u0641 \u0645\u0646 \u062e\u0635\u0627\u0626\u0635 \u0627\u0644\u0628\u0644\u0648\u0643\u0627\u062a \u0627\u0644\u062f\u064a\u0646\u0627\u0645\u064a\u0643\u064a\u0629\u060c \u0645\u062c\u0645\u0651\u0639\u0629 \u062d\u0633\u0628 \u0627\u0644\u0639\u0631\u0636." },
        { cmd: 'ADDVERTEXATPLINTERSECTION', desc: "\u064a\u0636\u064a\u0641 \u0639\u0642\u062f\u0629 \u0639\u0646\u062f \u0643\u0644 \u062a\u0642\u0627\u0637\u0639 \u0628\u064a\u0646 \u0627\u0644\u062e\u0637\u0648\u0637 \u0627\u0644\u0645\u062a\u0639\u062f\u062f\u0629\u060c \u0644\u062a\u0646\u0638\u064a\u0641 \u0627\u0644\u0637\u0648\u0628\u0648\u0644\u0648\u062c\u064a\u0627." },
        { cmd: 'DUPLAYOUTS / CENTERVP', desc: "\u064a\u0643\u0631\u0651\u0631 \u0635\u0641\u062d\u0629 \u062a\u062e\u0637\u064a\u0637 \u0644\u0643\u0644 \u0625\u0637\u0627\u0631 \u0641\u064a \u0627\u0644\u0645\u062e\u0637\u0637\u060c \u062b\u0645 \u064a\u0648\u0633\u0651\u0637 \u0645\u0646\u0641\u0630 \u0627\u0644\u0639\u0631\u0636 \u0648\u064a\u0642\u064a\u0633\u0647 \u062a\u0644\u0642\u0627\u0626\u064a\u064b\u0627." },
        { cmd: 'PLHEADBLOCK', desc: "\u064a\u0636\u0639 \u0628\u0644\u0648\u0643 \u0627\u062a\u062c\u0627\u0647 \u0639\u0646\u062f \u0628\u062f\u0627\u064a\u0629 \u0643\u0644 \u062e\u0637\u060c \u0645\u064f\u062f\u0627\u0631\u064b\u0627 \u0644\u064a\u0637\u0627\u0628\u0642 \u0627\u062a\u062c\u0627\u0647\u0647." },
        { cmd: 'CIRCLESONPOLYLINE', desc: "\u064a\u0636\u0639 \u062f\u0648\u0627\u0626\u0631 \u0628\u0641\u0627\u0635\u0644 \u0648\u0646\u0635\u0641 \u0642\u0637\u0631 \u062b\u0627\u0628\u062a\u064a\u0646 \u0639\u0644\u0649 \u0637\u0648\u0644 \u0627\u0644\u062e\u0637 \u2014 \u0644\u0644\u0631\u0643\u0627\u0626\u0632 \u0648\u0622\u0628\u0627\u0631 \u0627\u0644\u0633\u0628\u0631." },
        { cmd: 'CIRCLEATVERTS', desc: "\u064a\u0636\u064a\u0641 \u062f\u0627\u0626\u0631\u0629 \u0639\u0646\u062f \u0643\u0644 \u0639\u0642\u062f\u0629 \u0645\u0646 \u0627\u0644\u062e\u0637 \u0627\u0644\u0645\u062a\u0639\u062f\u062f\u060c \u0639\u0644\u0649 \u0637\u0628\u0642\u0629 \u0645\u062e\u062a\u0627\u0631\u0629 \u0623\u0648 \u062c\u062f\u064a\u062f\u0629." },
        { cmd: 'PNTFROMTXT', desc: "\u064a\u062d\u0648\u0651\u0644 \u0646\u0635\u064b\u0627 \u064a\u062d\u0645\u0644 \u0642\u064a\u0645\u0629 \u0645\u0646\u0633\u0648\u0628 \u0625\u0644\u0649 \u0646\u0642\u0637\u0629 \u062b\u0644\u0627\u062b\u064a\u0629 \u0627\u0644\u0623\u0628\u0639\u0627\u062f \u0641\u0639\u0644\u064a\u0629\u060c \u0628\u0627\u0633\u062a\u062e\u062f\u0627\u0645 \u0627\u0644\u0631\u0642\u0645 \u0625\u062d\u062f\u0627\u062b\u064a\u064b\u0627 Z." }
    ],
    tr: [
        { cmd: 'PIPELABELLEN', desc: "Boru hatt\u0131na tek seferde \u00fcstte \u00e7ap, altta hesaplanan uzunluk yaz\u0131s\u0131 ekler." },
        { cmd: 'BLOCKFIX', desc: "\u00c7ak\u0131\u015fan etiketleri otomatik \u00e7\u00f6zer \u2014 ger\u00e7ek blok k\u00f6\u015feleri, bo\u015f alan i\u00e7in spiral arama." },
        { cmd: 'SPOTINCIRCLES', desc: "Se\u00e7ilen dairelerin merkezine, daireyi silmeden bir nokta yerle\u015ftirir." },
        { cmd: 'BLOCKINCIRCLE', desc: "Se\u00e7ilen dairelerin merkezine ayn\u0131 blo\u011fu yerle\u015ftirir \u2014 baca, kuyu, sembol i\u00e7in." },
        { cmd: 'CHAXIS', desc: "\u0130ki s\u0131n\u0131r \u00e7izgisi aras\u0131nda y\u00f6n kontroll\u00fc, \u00e7apraz olmayan bir eksen \u00e7izgisi olu\u015fturur." },
        { cmd: 'IZGMET', desc: "Dinamik blok \u00f6zelliklerinden \u0131zgara metraj\u0131n\u0131 geni\u015fli\u011fe g\u00f6re grupland\u0131rarak \u00e7\u0131kar\u0131r." },
        { cmd: 'ADDVERTEXATPLINTERSECTION', desc: "Her polyline kesi\u015fim ve u\u00e7 temas noktas\u0131na vertex ekleyerek topolojiyi temizler." },
        { cmd: 'DUPLAYOUTS / CENTERVP', desc: "Her \u00e7er\u00e7eve i\u00e7in layout sayfas\u0131 \u00e7o\u011falt\u0131r, viewport'u otomatik ortalar ve \u00f6l\u00e7ekler." },
        { cmd: 'PLHEADBLOCK', desc: "Polyline ba\u015flang\u0131c\u0131na, y\u00f6n\u00fcne hizal\u0131 bir blok otomatik olarak yerle\u015ftirir." },
        { cmd: 'CIRCLESONPOLYLINE', desc: "Polyline boyunca sabit aral\u0131k ve yar\u0131\u00e7apta daireler yerle\u015ftirir \u2014 kaz\u0131k, sondaj." },
        { cmd: 'CIRCLEATVERTS', desc: "Se\u00e7ilen polyline'lar\u0131n her k\u00f6\u015fesine, istenen katmanda daire ekler." },
        { cmd: 'PNTFROMTXT', desc: "Kotlu yaz\u0131y\u0131, say\u0131y\u0131 Z de\u011feri olarak kullanan ger\u00e7ek bir 3D noktaya d\u00f6n\u00fc\u015ft\u00fcr\u00fcr." }
    ]
};

function renderCmdhubRoutines(lang) {
    const container = document.getElementById('cmdhub-routines');
    if (!container) return;
    const list = cmdhubRoutines[lang] || cmdhubRoutines.en;
    container.innerHTML = '';
    list.forEach(r => {
        const span = document.createElement('span');
        span.className = 'skill-tag-sm';
        span.title = r.desc;
        span.textContent = r.cmd;
        container.appendChild(span);
    });
}

const bodyElement = document.body;
const langButtons = document.querySelectorAll('.lang-btn');
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

let currentLang = localStorage.getItem('selectedLang') || 'en';

function applyLanguage(lang) {
    const langConfig = translations[lang] || translations['en'];
    const dir = langConfig.dir || 'ltr';

    // <html> carries lang/dir too - search engines, screen readers and browser
    // translation read them from the root element, not from <body>.
    document.documentElement.lang = lang;
    document.documentElement.dir = dir;
    bodyElement.dir = dir;
    bodyElement.lang = lang;
    bodyElement.style.fontFamily = lang === 'ar'
        ? "'IBM Plex Sans Arabic', sans-serif"
        : "'Inter', sans-serif";

    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (langConfig[key]) el.textContent = langConfig[key];
    });

    document.querySelectorAll('[data-i18n-aria]').forEach(el => {
        const key = el.getAttribute('data-i18n-aria');
        if (langConfig[key]) el.setAttribute('aria-label', langConfig[key]);
    });

    if (langConfig.pageTitle) document.title = langConfig.pageTitle;
    const meta = document.querySelector('meta[name="description"]');
    if (meta && langConfig.metaDescription) {
        meta.setAttribute('content', langConfig.metaDescription);
    }

    const copyrightEl = document.getElementById('copyright');
    if (copyrightEl && langConfig.copyright) {
        copyrightEl.textContent = langConfig.copyright.replace('{year}', new Date().getFullYear());
    }

    langButtons.forEach(btn => {
        const isActive = btn.getAttribute('data-lang') === lang;
        btn.classList.toggle('active', isActive);
        btn.setAttribute('aria-pressed', isActive ? 'true' : 'false');
    });

    renderCmdhubRoutines(lang);

    localStorage.setItem('selectedLang', lang);
    currentLang = lang;
}

function initMobileMenu() {
    if (!mobileMenuBtn || !mobileMenu) return;

    function setMenu(open) {
        mobileMenu.classList.toggle('hidden', !open);
        mobileMenuBtn.setAttribute('aria-expanded', open ? 'true' : 'false');

        const icon = mobileMenuBtn.querySelector('i');
        icon.classList.toggle('fa-times', open);
        icon.classList.toggle('fa-bars', !open);

        const t = translations[currentLang] || translations['en'];
        const label = open ? t.closeMenu : t.openMenu;
        if (label) mobileMenuBtn.setAttribute('aria-label', label);
    }

    mobileMenuBtn.addEventListener('click', () => {
        setMenu(mobileMenu.classList.contains('hidden'));
    });

    document.addEventListener('click', e => {
        if (!mobileMenu.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
            setMenu(false);
        }
    });

    document.addEventListener('keydown', e => {
        if (e.key === 'Escape' && !mobileMenu.classList.contains('hidden')) {
            setMenu(false);
            mobileMenuBtn.focus();
        }
    });
}

function initReveal() {
    const items = document.querySelectorAll('.reveal');
    const showAll = () => items.forEach(el => el.classList.add('is-visible'));

    // The head script only sets this when revealing is actually possible.
    if (!document.documentElement.classList.contains('reveal-ready')) return;
    if (!items.length) return;

    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                obs.unobserve(entry.target);
            }
        });
    }, { rootMargin: '0px 0px -10% 0px', threshold: 0.05 });

    items.forEach(el => observer.observe(el));

    // Safety net: if the observer has not reported anything shortly after load
    // (background tab, no compositing, odd viewport), reveal everything rather
    // than leave the page blank.
    window.setTimeout(() => {
        if (!document.querySelector('.reveal.is-visible')) showAll();
    }, 1200);
}

document.addEventListener('DOMContentLoaded', () => {
    applyLanguage(currentLang);

    langButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const lang = btn.getAttribute('data-lang');
            if (lang !== currentLang) applyLanguage(lang);
        });
    });

    initMobileMenu();
    initReveal();
});
