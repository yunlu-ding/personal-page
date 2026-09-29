// All site copy lives here. Add or edit content in one place for both languages.
const I18N = {
  zh: {
    metaTitle: "丁云璐 · Yunlu Ding",
    nav: [
      { href: "#about", label: "关于" },
      { href: "#metrics", label: "数据成果" },
      { href: "#journey", label: "经历" },
      { href: "#education", label: "教育" },
      { href: "#focus", label: "能力" },
      { href: "#projects", label: "作品" },
      { href: "#contact", label: "联系" }
    ],
    hero: {
      kicker: "你好，我是",
      name: "丁云璐",
      alias: "Yunlu Ding",
      roles: ["产品经理", "搜索产品", "风控产品", "数据驱动的问题解决者"],
      intro: "腾讯 / 美团等头部大厂 4 段产品与数据实习，横跨酒店搜索、社交生态风控与无人车配送。相信好产品从清晰的指标与真实的数据开始——能拆解复杂问题、验证假设，也能把策略一路推到上线。",
      ctaPrimary: "看看我的经历",
      ctaSecondary: "下载简历",
      scroll: "向下滚动，开始探索"
    },
    metrics: {
      eyebrow: "Quick Stats",
      title: "用数据说话",
      subtitle: "每一段经历都留下了可以被验证的结果。",
      items: [
        { value: 40, suffix: "%", label: "CitySUG 搜索无结果率降幅", prefix: "−" },
        { value: 0.65, suffix: "pp", label: "搜索点击率提升", prefix: "+", decimals: 2 },
        { value: 0.07, suffix: "pp", label: "访购转化率提升", prefix: "+", decimals: 2 },
        { value: 1.25, suffix: "", label: "无人车 ETA 倍数监控目标", prefix: "≤", decimals: 2 },
        { value: 20000, suffix: "+", label: "腾讯风控报告体量（字）", prefix: "" },
        { value: 6, suffix: " 个季度", label: "广告客诉数据分析跨度", prefix: "" }
      ]
    },
    journey: {
      eyebrow: "My Journey",
      title: "三段实习，一条主线",
      subtitle: "搜索引导、生态风控、无人车配送——共同点是：先定义指标，再找出问题，最后推动闭环。",
      showMore: "展开这段经历",
      showLess: "收起",
      items: [
        {
          id: "tencent",
          period: "2026.03 – 2026.05",
          company: "腾讯 · PCG 风控中心",
          role: "社交产品风控（手机 QQ 生态产品调研）",
          type: "产品向",
          accent: "coral",
          summary: "以产品视角重建 QQ 生态健康度评估，并用 6 个季度客诉数据定位治理优先级。",
          tags: ["生态建模", "风险评估", "客诉标签", "产品化治理"],
          problem: "QQ 功能复杂、风险分散在各业务线，缺少统一的健康度口径和“先管谁”的判断依据。",
          action: "从用户视角全流程体验并划分基础通讯 / 内容 / 表达 / 商业化等 4+ 功能社区；原创“环境—参与者—能量流动”三层生态模型，用“用户体验 + 竞品对标 + Badcase 归因”评估群聊 / 频道与付费链路风险；拉取 6 个季度约数万条广告客诉，搭建多维度客诉标签体系。",
          result: "输出 2 万字+ 系统性报告；定位“彩蛋类客诉激增、红点类客诉长期高位”两类问题，为广告形态上线评估与体验治理提供数据依据。",
          highlight: "2万字报告 · 6 季度客诉 · 定位 2 类高危广告问题"
        },
        {
          id: "autonomous",
          period: "2025.09 – 2025.12",
          company: "美团 · 无人车事业部",
          role: "产品运营 / 数据分析",
          type: "数据支撑",
          accent: "mint",
          summary: "为深圳试点路测阶段建立以 ETA 倍数（≤1.25）为核心的分层指标监控与异动归因机制。",
          tags: ["分层指标体系", "异动归因", "Badcase 分析", "地图问题归因"],
          problem: "无人车配送业务处于深圳试点路测阶段，核心指标 ETA 倍数（实际 ATA / 高德 ETA，目标 ≤1.25）需要日级监控与异动归因。",
          action: "围绕 ETA 倍数拆解分层指标体系——一级覆盖 ETA 倍数、接管率、故障类型数、订单完成率，二级细化到实际在途时长、绕路、故障与地图问题等维度；指标异动时按区域 / 路线 / 车辆 / 时段 / 天气下钻定位主要贡献源，结合 Badcase 还原问题并量化影响；识别地图数据问题为最大 Badcase 来源，将路口 / 道路标识错误沉淀为可量化、可提需的问题清单。",
          result: "形成可复用的日级监控与异动归因方法，把地图问题从数据异动收敛为可执行的治理清单。",
          highlight: "ETA ≤1.25 · 分层指标体系 · 地图 Badcase 归因清单"
        },
        {
          id: "hotel",
          period: "2025.06 – 2025.09",
          company: "美团 · 酒店用户产品部",
          role: "搜索产品经理（SUG 词 / 底纹词）",
          type: "产品向",
          accent: "sun",
          summary: "从词表治理到后缀召回再到 AB 实验，把酒店搜索引导做成全链路产品闭环。",
          tags: ["词表治理", "后缀召回", "AB 实验", "跨端上线"],
          problem: "联想词库“缺、脏、乱”，模糊长尾 query 容易无结果；默认词曝光大但转化极低。",
          action: "补齐省级 / 星级 / 品牌词并用正则清洗脏数据，设计“省份下挂 6 个热门城市”交互；新增后缀召回把“看夜景”接到“鸟巢看夜景”等长尾词；联动算法 / API / 客户端完成 CitySUG 改造与全量上线，并负责 7 日 AB 实验追踪。",
          result: "AB 实验实现搜索无结果率 ↓40%、点击率 ↑0.65pp、访购转化率 ↑0.07pp，CitySUG 与玩法词召回全量上线。",
          highlight: "无结果率 −40% · CTR +0.65pp · 全量上线"
        },
      ]
    },
    education: {
      eyebrow: "Education",
      title: "教育背景",
      subtitle: "金融本科 + 商业分析硕士，习惯用数据理解业务，也用业务验证数据。",
      items: [
        {
          school: "香港中文大学（深圳）",
          degree: "信息管理与商业分析 · 硕士",
          period: "2024.09 – 2026.11",
          desc: "主修数据分析、机器学习、收入管理、商务智能编程、数据库基础、Python 程序设计",
          icon: "🎓"
        },
        {
          school: "北京交通大学",
          degree: "金融学 · 本科",
          period: "2019.09 – 2023.06",
          desc: "金融学与量化思维训练，形成用商业视角理解数据问题的起点",
          icon: "🏛️"
        }
      ]
    },
    focus: {
      eyebrow: "What I Do",
      title: "产品为先，数据为翼",
      subtitle: "我不把“产品”和“数据”分成两件事——数据用来减少拍脑袋，产品用来把结论变成改变。",
      product: {
        title: "产品能力",
        desc: "能把模糊的业务问题定义清楚，并推动跨团队落地。",
        points: [
          "用户视角拆解功能与生态，竞品对标找差异",
          "搜索引导：SUG / 底纹词、词表治理、长尾召回",
          "风控产品：风险地图、健康度指标、客诉标签体系",
          "拉通算法 / 后端 / 客户端，从实验走到全量上线"
        ]
      },
      data: {
        title: "数据能力",
        desc: "让每个判断都有口径、有证据、可复盘。",
        points: [
          "指标体系设计与口径定义（如 ETA 倍数 ≤1.25）",
          "异动归因与 Badcase 根因分析",
          "AB 实验设计、效果追踪与显著性判断",
          "SQL + Python（机器学习）处理真实业务数据"
        ]
      }
    },
    projects: {
      eyebrow: "Side Projects",
      title: "亲手做的产品",
      subtitle: "从发现问题到把产品做出来，都是我独立完成的 0→1。",
      items: [
        {
          emoji: "🧠",
          title: "金融监管法规知识库",
          subtitle: "合规 RAG 知识库与检索问答台",
          desc: "面向金融监管与合规场景的 RAG 知识库：收录期货和衍生品法、证券法、证券公司监督管理条例、证监会令等法规文件，支持 PDF / DOCX / MD / TXT 上传与异步解析；默认使用法律语义切分并观测切片质量，检索侧结合向量、关键词、融合与重排，答案给出引用原文和明确的拒答阈值，追问会先改写成可独立检索的问题。",
          tags: ["法规 RAG", "法律语义切分", "引用原文", "拒答机制"],
          images: [
            { src: "assets/projects/rag-overview.png", label: "工作台总览" },
            { src: "assets/projects/rag-upload.png", label: "上传入库" },
            { src: "assets/projects/rag-chunk.png", label: "切片管理" },
            { src: "assets/projects/rag-qa.png", label: "问答与引用" }
          ],
          frame: "browser",
          status: "个人作品",
          link: "https://github.com/yunlu-ding/rag-law-practice"
        },
        {
          emoji: "🏨",
          title: "随行管家",
          subtitle: "酒店住客全旅程智能服务台",
          desc: "面向酒店住客全旅程的服务台：住客通过与智能管家对话提出需求，系统先用房间号 + 姓氏完成身份确认，再自动生成工单并按类别、优先级和承接部门派发；员工端支持接单、回执、按时闭环与超时升级，对话与工单统一落在本地 PostgreSQL。",
          tags: ["住客端 + 管理台", "智能工单", "身份鉴权", "SLA 升级"],
          images: [
            { src: "assets/projects/butler-guest-chat.png", label: "住客对话与身份确认" },
            { src: "assets/projects/butler-staff-orders.png", label: "员工接单与工单流转" }
          ],
          frame: "browser",
          status: "个人作品",
          link: "https://github.com/yunlu-ding/hotel-agent"
        },
        {
          emoji: "🗣️",
          title: "SpeakMate",
          subtitle: "AI 口语陪聊搭子",
          desc: "源于碎片化练口语缺乏自然对话的痛点，用拟人化角色 + 场景化对话 + 隐性纠错，让英语练习像和朋友聊天一样自然。",
          tags: ["微信小程序", "DeepSeek API", "产品 0→1"],
          images: [
            { src: "assets/projects/speakmate-home.png", label: "首页" },
            { src: "assets/projects/speakmate-practice.png", label: "场景练习" },
            { src: "assets/projects/speakmate-chat.png", label: "对话页 · 隐性纠错" },
            { src: "assets/projects/speakmate-history.png", label: "聊天记录" }
          ],
          status: "体验版",
          link: null
        },
        {
          emoji: "📅",
          title: "CivicPrep",
          subtitle: "时政日历备考产品",
          desc: "以日历形式日更时政内容并自动生成练习题，搭配错题本与知识点归类，覆盖内容型备考产品从 0 到 1 的完整闭环。",
          tags: ["内容产品", "自动出题", "错题本"],
          images: [
            { src: "assets/projects/civicprep-home.png", label: "首页（日历）" },
            { src: "assets/projects/civicprep-news.png", label: "新闻页" },
            { src: "assets/projects/civicprep-quiz.png", label: "练习页" }
          ],
          status: "体验版",
          link: null
        },
        {
          emoji: "📣",
          title: "请你大声说出来",
          subtitle: "主动回忆背诵工具",
          desc: "针对“长文背诵效率低”的痛点，设计大声朗读 + 手绘圈计数 + 看圈主动回忆 + 听录音的完整方法，并完成 PRD、技术探针到 v1。",
          tags: ["主动回忆", "学习工具", "已上线"],
          images: [
            { src: "assets/projects/speakout-home.png", label: "首页（导入内容）" },
            { src: "assets/projects/speakout-read.png", label: "朗读页" },
            { src: "assets/projects/speakout-recite.png", label: "背诵页" }
          ],
          status: "已上线",
          link: null
        }
      ]
    },
    skills: {
      eyebrow: "Toolkit",
      title: "工具箱",
      groups: [
        {
          name: "产品",
          items: ["指标体系搭建", "AB 实验分析", "竞品调研", "需求分析 / PRD", "跨团队推进"]
        },
        {
          name: "数据",
          items: ["Python", "SQL", "机器学习", "数据建模", "可视化"]
        },
        {
          name: "语言",
          items: ["中文（母语）", "英语 IELTS 7.0", "可作为工作语言"]
        }
      ]
    },
    contact: {
      eyebrow: "Say Hello",
      title: "期待一次对话",
      subtitle: "如果你在找懂搜索 / 风控 / 无人车业务的产品同学，或者想聊聊数据驱动的产品方法，欢迎联系我。",
      email: "18800118923@163.com",
      phone: "微信 / 电话：18800118923",
      site: "个人主页：https://yunlu-ding.github.io/personal-page/",
      resumeDocx: "下载简历（PDF）",
      downloadHint: "想换更早的版本？发邮件给我即可。",
      footer: "用 HTML / CSS / JavaScript 手写 · 明亮一点，生活已经够复杂了"
    }
  },

  en: {
    metaTitle: "Yunlu Ding · 丁云璐",
    nav: [
      { href: "#about", label: "About" },
      { href: "#metrics", label: "Results" },
      { href: "#journey", label: "Journey" },
      { href: "#education", label: "Education" },
      { href: "#focus", label: "Strengths" },
      { href: "#projects", label: "Projects" },
      { href: "#contact", label: "Contact" }
    ],
    hero: {
      kicker: "Hi, I'm",
      name: "Yunlu Ding",
      alias: "丁云璐",
      roles: ["Product Manager", "Search Product", "Risk Control Product", "Data-driven Problem Solver"],
      intro: "Four product & data internships at Tencent and Meituan across hotel search, social-ecosystem risk control and autonomous delivery. I believe great products begin with clear metrics and honest data — define the problem, validate the hypothesis, and ship.",
      ctaPrimary: "Explore my journey",
      ctaSecondary: "Download CV",
      scroll: "Scroll to explore"
    },
    metrics: {
      eyebrow: "Quick Stats",
      title: "Results that speak",
      subtitle: "Every role left behind measurable, verifiable outcomes.",
      items: [
        { value: 40, suffix: "%", label: "Zero-result rate reduction (CitySUG)", prefix: "−" },
        { value: 0.65, suffix: "pp", label: "Search CTR lift", prefix: "+", decimals: 2 },
        { value: 0.07, suffix: "pp", label: "Visit-to-order conversion lift", prefix: "+", decimals: 2 },
        { value: 1.25, suffix: "", label: "Autonomous delivery ETA ratio target", prefix: "≤", decimals: 2 },
        { value: 20000, suffix: "+", label: "Words of risk-control report at Tencent", prefix: "" },
        { value: 6, suffix: " quarters", label: "Ad complaint data analyzed", prefix: "" }
      ]
    },
    journey: {
      eyebrow: "My Journey",
      title: "Three internships, one thread",
      subtitle: "Search guidance, ecosystem risk control and autonomous delivery — the common thread: define metrics first, find the real problem, close the loop.",
      showMore: "Expand this story",
      showLess: "Collapse",
      items: [
        {
          id: "tencent",
          period: "Mar – May 2026",
          company: "Tencent · PCG Risk Control Center",
          role: "Social Product Risk Control (QQ Ecosystem Research)",
          type: "Product",
          accent: "coral",
          summary: "Rebuilt QQ ecosystem health evaluation from a product view, then used 6 quarters of complaints to prioritize governance.",
          tags: ["Ecosystem modeling", "Risk assessment", "Complaint taxonomy", "Product governance"],
          problem: "QQ is complex and risks were scattered across business lines, with no shared definition of health or a clear answer to “what to fix first.”",
          action: "Walked through every QQ function as a user and mapped it into 4+ functional communities (messaging / content / expression / monetization); created an original “Environment — Participants — Energy Flow” three-layer model; assessed groups, channels and paid-game-community journeys with UX + competitor benchmarks + badcase attribution; analyzed ~tens of thousands of ad complaints over 6 quarters and built a multi-dimension complaint taxonomy.",
          result: "Delivered a 20,000+ word systematic report; pinpointed two governance targets — a surge in easter-egg style ad complaints and persistently high red-dot ad complaints — giving the ad system data-backed inputs for launch evaluation and UX governance.",
          highlight: "20k-word report · 6 quarters of complaints · 2 priority targets"
        },
        {
          id: "autonomous",
          period: "Sep – Dec 2025",
          company: "Meituan · Autonomous Delivery",
          role: "Product Operations / Data Analysis",
          type: "Data-driven",
          accent: "mint",
          summary: "Built a layered metric system and anomaly attribution mechanism around the ETA ratio (≤1.25) for the Shenzhen road-test pilot.",
          tags: ["Layered metrics", "Anomaly attribution", "Badcase analysis", "Map issue attribution"],
          problem: "The autonomous delivery pilot in Shenzhen needed daily monitoring and attribution for its core metric — the ETA ratio (actual ATA / Amap ETA, target ≤1.25).",
          action: "Decomposed the ETA ratio into a layered metric system — level-1 covering ETA ratio, takeover rate, fault categories and completion rate, level-2 going down to actual travel time, detours, faults and map issues; drilled anomalies down by area / route / vehicle / time / weather, reconstructed badcases and quantified impact; identified map data problems as the largest badcase source and turned specific intersection / road-sign errors into a quantified, actionable list.",
          result: "Established a reusable daily monitoring and anomaly attribution method, converting map issues from metric anomalies into actionable governance items.",
          highlight: "ETA ≤1.25 · Layered metrics · Map badcase attribution"
        },
        {
          id: "hotel",
          period: "Jun – Sep 2025",
          company: "Meituan · Hotel Search",
          role: "Search Product Manager (SUG / Search Box Words)",
          type: "Product",
          accent: "sun",
          summary: "From suggestion-data cleanup to suffix recall and A/B tests, improved the hotel search guidance funnel end to end.",
          tags: ["Data cleanup", "Suffix recall", "A/B testing", "Cross-team launch"],
          problem: "The suggestion vocabulary was incomplete and noisy; fuzzy long-tail queries often ended with zero results, while the default search-box word had huge exposure but almost no conversion.",
          action: "Added province / star / brand suggestion data and wrote regex filters to remove duplicates and noise; designed a “province + 6 hot cities” interaction; introduced suffix recall so a query like “night view” could match the long-tail phrase “Bird's Nest night view”; coordinated algorithm, API and client teams to ship CitySUG and tracked a 7-day A/B test.",
          result: "The A/B test cut zero-result rate by 40%, lifted CTR by +0.65pp and visit-to-order conversion by +0.07pp; CitySUG and play-words recall went fully live.",
          highlight: "Zero-result −40% · CTR +0.65pp · Fully live"
        },
      ]
    },
    education: {
      eyebrow: "Education",
      title: "Education",
      subtitle: "A finance bachelor plus a business-analytics master — I use data to understand business and business to validate data.",
      items: [
        {
          school: "CUHK (Shenzhen)",
          degree: "MSc Information Management & Business Analytics",
          period: "2024 – 2026",
          desc: "Data analytics, machine learning, revenue management, business intelligence programming, databases, Python",
          icon: "🎓"
        },
        {
          school: "Beijing Jiaotong University",
          degree: "B.A. Finance",
          period: "2019 – 2023",
          desc: "Finance fundamentals and quantitative thinking — the starting point for seeing business problems through data",
          icon: "🏛️"
        }
      ]
    },
    focus: {
      eyebrow: "What I Do",
      title: "Product first, data as wings",
      subtitle: "I don't treat product and data as separate jobs — data removes guesswork, product turns conclusions into shipped change.",
      product: {
        title: "Product Strength",
        desc: "Define fuzzy problems clearly, then rally teams to ship.",
        points: [
          "Map products & ecosystems from the user view; benchmark competitors",
          "Search guidance: SUG / search-box words, vocabulary governance, long-tail recall",
          "Risk products: risk maps, health metrics, complaint taxonomies",
          "Align algorithm / backend / client teams from experiment to full launch"
        ]
      },
      data: {
        title: "Data Strength",
        desc: "Every decision has a definition, evidence and a review loop.",
        points: [
          "Metric system design with rigorous definitions (e.g. ETA ratio ≤1.25)",
          "Anomaly attribution and badcase root-cause analysis",
          "A/B experiment design, tracking and significance judgement",
          "SQL + Python (ML) on real business data"
        ]
      }
    },
    projects: {
      eyebrow: "Side Projects",
      title: "Products I built myself",
      subtitle: "From spotting the problem to building the product — each is a personal 0-to-1 loop.",
      items: [
        {
          emoji: "🧠",
          title: "Financial Regulatory Knowledge Base",
          subtitle: "Compliance RAG knowledge base & Q&A console",
          desc: "A RAG knowledge base for financial regulation and compliance: it ingests laws and regulatory documents such as the Futures and Derivatives Law, Securities Law, securities-company supervision regulations and CSRC orders, with async PDF / DOCX / MD / TXT parsing; it uses legal-semantic chunking by default, combines vector, keyword, fusion and rerank retrieval, and answers with source citations plus an explicit refusal threshold; follow-up questions are rewritten into standalone retrievable queries.",
          tags: ["Regulatory RAG", "Legal-semantic chunking", "Source citations", "Refusal guardrail"],
          images: [
            { src: "assets/projects/rag-overview.png", label: "Workspace overview" },
            { src: "assets/projects/rag-upload.png", label: "Upload & ingestion" },
            { src: "assets/projects/rag-chunk.png", label: "Chunk management" },
            { src: "assets/projects/rag-qa.png", label: "Q&A with citations" }
          ],
          frame: "browser",
          status: "Personal project",
          link: "https://github.com/yunlu-ding/rag-law-practice"
        },
        {
          emoji: "🏨",
          title: "Journey Butler",
          subtitle: "End-to-end guest service console for hotels",
          desc: "An in-stay service console for hotels: guests talk to an AI butler, pass room-number + surname identity verification, and requests become tickets routed by category, priority and responsible department; the staff console supports claiming, acknowledgement, on-time closure and overdue escalation, with conversations and tickets stored in local PostgreSQL.",
          tags: ["Guest app + staff console", "Smart ticketing", "Identity guard", "SLA escalation"],
          images: [
            { src: "assets/projects/butler-guest-chat.png", label: "Guest chat & identity check" },
            { src: "assets/projects/butler-staff-orders.png", label: "Staff ticket console" }
          ],
          frame: "browser",
          status: "Personal project",
          link: "https://github.com/yunlu-ding/hotel-agent"
        },
        {
          emoji: "🗣️",
          title: "SpeakMate",
          subtitle: "AI speaking companion",
          desc: "Born from the pain of fragmented speaking practice, this WeChat mini-program uses personified AI, scenario dialogues and implicit correction so English practice feels like chatting with a friend.",
          tags: ["WeChat Mini Program", "DeepSeek API", "0→1"],
          images: [
            { src: "assets/projects/speakmate-home.png", label: "Home" },
            { src: "assets/projects/speakmate-practice.png", label: "Scenario practice" },
            { src: "assets/projects/speakmate-chat.png", label: "Chat · implicit correction" },
            { src: "assets/projects/speakmate-history.png", label: "Chat history" }
          ],
          status: "Beta",
          link: null
        },
        {
          emoji: "📅",
          title: "CivicPrep",
          subtitle: "Current-affairs calendar & exam prep",
          desc: "A calendar-based study tool that refreshes daily news and auto-generates quiz questions, with a mistake notebook organized by knowledge points.",
          tags: ["Content product", "Auto quiz", "Mistake notebook"],
          images: [
            { src: "assets/projects/civicprep-home.png", label: "Home (calendar)" },
            { src: "assets/projects/civicprep-news.png", label: "Daily news" },
            { src: "assets/projects/civicprep-quiz.png", label: "Quiz" }
          ],
          status: "Beta",
          link: null
        },
        {
          emoji: "📣",
          title: "Speak It Out Loud",
          subtitle: "Active-recall memorization tool",
          desc: "For learners who struggle to memorize long passages: read aloud, count circles by hand, recall from circles, listen to yourself — a complete active-recall loop from PRD to v1.",
          tags: ["Active recall", "Learning tool", "Live"],
          images: [
            { src: "assets/projects/speakout-home.png", label: "Home (import content)" },
            { src: "assets/projects/speakout-read.png", label: "Read aloud" },
            { src: "assets/projects/speakout-recite.png", label: "Recite" }
          ],
          status: "Live",
          link: null
        }
      ]
    },
    skills: {
      eyebrow: "Toolkit",
      title: "Toolkit",
      groups: [
        {
          name: "Product",
          items: ["Metric systems", "A/B testing", "Competitive research", "Requirements & PRD", "Cross-team delivery"]
        },
        {
          name: "Data",
          items: ["Python", "SQL", "Machine learning", "Data modeling", "Visualization"]
        },
        {
          name: "Language",
          items: ["Chinese (native)", "English IELTS 7.0", "Work-ready English"]
        }
      ]
    },
    contact: {
      eyebrow: "Say Hello",
      title: "Let's have a conversation",
      subtitle: "Looking for a product person who understands search, risk control or autonomous delivery — or want to talk data-driven product methods? Let's talk.",
      email: "18800118923@163.com",
      phone: "WeChat / Phone: 18800118923",
      site: "Homepage: https://yunlu-ding.github.io/personal-page/",
      resumeDocx: "Download CV (PDF)",
      downloadHint: "Need an earlier version? Just email me.",
      footer: "Hand-built with HTML / CSS / JavaScript · Keep it bright — life is complicated enough"
    }
  }
};
