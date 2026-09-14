(function () {
  "use strict";

  const state = { lang: "zh" };
  const app = document.getElementById("app");
  const footer = document.getElementById("footer");
  const navEl = document.getElementById("nav");
  const langBtn = document.getElementById("lang-toggle");

  const t = () => I18N[state.lang];

  function make(tag, cls, text) {
    const node = document.createElement(tag);
    if (cls) node.className = cls;
    if (text !== undefined && text !== null) node.textContent = text;
    return node;
  }

  function heading(eyebrow, title, subtitle) {
    const wrap = make("div", "section-head");
    wrap.appendChild(make("span", "eyebrow", eyebrow));
    wrap.appendChild(make("h2", "section-title", title));
    if (subtitle) wrap.appendChild(make("p", "section-sub", subtitle));
    return wrap;
  }

  /* ---------- sections ---------- */

  function heroSection() {
    const c = t().hero;
    const section = make("section", "hero section");
    section.id = "about";

    const container = make("div", "container hero-grid");
    const copy = make("div", "hero-copy reveal");

    copy.appendChild(make("p", "kicker", c.kicker));
    copy.appendChild(make("h1", "hero-name", c.name));
    copy.appendChild(make("p", "hero-alias", c.alias));

    const typedLine = make("p", "typed-line");
    const typedSpan = make("span");
    typedSpan.id = "typed-role";
    typedLine.appendChild(typedSpan);
    typedLine.appendChild(make("span", "typed-caret"));
    copy.appendChild(typedLine);

    copy.appendChild(make("p", "hero-intro", c.intro));

    const actions = make("div", "hero-actions");
    const primary = make("a", "btn btn-primary", c.ctaPrimary);
    primary.href = "#journey";
    const download = make("a", "btn", c.ctaSecondary);
    download.href = "downloads/Yunlu-Ding-Resume.pdf";
    download.setAttribute("download", "Yunlu-Ding-Resume.pdf");
    actions.appendChild(primary);
    actions.appendChild(download);
    copy.appendChild(actions);

    const sticker = make("div", "hero-sticker reveal");
    const card = make("div", "sticker-card");
    card.appendChild(make("div", "sticker-emoji", "🧭"));
    card.appendChild(make("h2", "sticker-title", state.lang === "zh" ? "产品为先 · 数据为翼" : "Product first · Data as wings"));
    const tags = make("div", "sticker-tags");
    const tagList = state.lang === "zh"
      ? ["搜索 / SUG", "风控 / 生态", "无人车 / ETA", "AB 实验", "SQL · Python"]
      : ["Search / SUG", "Risk / Ecosystem", "Autonomous / ETA", "A/B testing", "SQL · Python"];
    tagList.forEach((label) => tags.appendChild(make("span", "mini-pill", label)));
    card.appendChild(tags);

    const chipA = make("span", "floating-chip chip-a", "🚀 PM");
    const chipB = make("span", "floating-chip chip-b", "📊 Data");
    sticker.appendChild(card);
    sticker.appendChild(chipA);
    sticker.appendChild(chipB);

    container.appendChild(copy);
    container.appendChild(sticker);
    section.appendChild(container);
    section.appendChild(make("p", "scroll-cue", c.scroll));
    return section;
  }

  function metricsSection() {
    const c = t().metrics;
    const section = make("section", "section section-alt");
    section.id = "metrics";
    const container = make("div", "container");
    container.appendChild(heading(c.eyebrow, c.title, c.subtitle));

    const grid = make("div", "metric-grid");
    c.items.forEach((item) => {
      const card = make("div", "metric-card reveal");
      const valueEl = make("span", "metric-value", "0");
      valueEl.dataset.countTarget = String(item.value);
      valueEl.dataset.countPrefix = item.prefix || "";
      valueEl.dataset.countSuffix = item.suffix || "";
      valueEl.dataset.countDecimals = String(item.decimals || 0);
      card.appendChild(valueEl);
      card.appendChild(make("span", "metric-label", item.label));
      grid.appendChild(card);
    });
    container.appendChild(grid);
    section.appendChild(container);
    return section;
  }

  function journeySection() {
    const c = t().journey;
    const section = make("section", "section");
    section.id = "journey";
    const container = make("div", "container");
    container.appendChild(heading(c.eyebrow, c.title, c.subtitle));

    const timeline = make("div", "timeline");
    c.items.forEach((item) => {
      const itemWrap = make("div", "timeline-item reveal");
      itemWrap.dataset.storyId = item.id;

      const node = make("span", "timeline-node " + item.accent);
      itemWrap.appendChild(node);

      const panel = make("article", "timeline-panel");

      const head = make("div", "timeline-head");
      const meta = make("div", "timeline-meta");
      meta.appendChild(make("span", "timeline-period", item.period));
      meta.appendChild(make("h3", "timeline-company", item.company));
      meta.appendChild(make("p", "timeline-role", item.role));
      head.appendChild(meta);
      const badge = make("span", "timeline-type" + (item.type === "数据支撑" || item.type === "Data-driven" ? " data" : ""), item.type);
      head.appendChild(badge);
      panel.appendChild(head);

      panel.appendChild(make("p", "timeline-summary", item.summary));

      const tags = make("div", "tags");
      item.tags.forEach((tagText) => tags.appendChild(make("span", "tag", tagText)));
      panel.appendChild(tags);

      const story = make("div", "story");
      const labels = state.lang === "zh"
        ? { problem: "当时的问题", action: "我做了什么", result: "带来的结果" }
        : { problem: "The problem", action: "What I did", result: "The result" };

      const blocks = [
        ["problem", "⚠️", item.problem],
        ["action", "🛠️", item.action],
        ["result", "✨", item.result]
      ];

      blocks.forEach(([kind, icon, text]) => {
        const block = make("div", "story-block");
        const label = make("span", "story-label " + kind, icon + " " + labels[kind]);
        block.appendChild(label);
        block.appendChild(make("p", null, text));
        story.appendChild(block);
      });

      if (item.highlight) story.appendChild(make("div", "story-highlight", "🏆 " + item.highlight));
      panel.appendChild(story);

      const toggle = make("button", "timeline-toggle", c.showMore);
      toggle.type = "button";
      toggle.addEventListener("click", (ev) => {
        const open = itemWrap.classList.toggle("open");
        toggle.textContent = open ? c.showLess : c.showMore;
        if (open) {
          const rect = toggle.getBoundingClientRect();
          burstConfetti(rect.left + rect.width / 2, rect.top, 36);
        }
      });
      panel.appendChild(toggle);

      itemWrap.appendChild(panel);
      timeline.appendChild(itemWrap);
    });

    container.appendChild(timeline);
    section.appendChild(container);
    return section;
  }

  function educationSection() {
    const c = t().education;
    const section = make("section", "section");
    section.id = "education";
    const container = make("div", "container");
    container.appendChild(heading(c.eyebrow, c.title, c.subtitle));

    const grid = make("div", "edu-grid");
    c.items.forEach((item) => {
      const card = make("div", "edu-card reveal");
      const icon = make("span", "edu-icon", item.icon);
      card.appendChild(icon);
      const body = make("div", "edu-body");
      body.appendChild(make("h3", "edu-school", item.school));
      body.appendChild(make("p", "edu-degree", item.degree));
      body.appendChild(make("p", "edu-desc", item.desc));
      card.appendChild(body);
      card.appendChild(make("span", "edu-period", item.period));
      grid.appendChild(card);
    });

    container.appendChild(grid);
    section.appendChild(container);
    return section;
  }

  function focusSection() {
    const c = t().focus;
    const section = make("section", "section section-alt");
    section.id = "focus";
    const container = make("div", "container");
    container.appendChild(heading(c.eyebrow, c.title, c.subtitle));

    const grid = make("div", "focus-grid");

    const product = make("div", "focus-card product reveal");
    product.appendChild(make("div", "focus-icon", "🎯"));
    product.appendChild(make("h3", null, c.product.title));
    product.appendChild(make("p", "focus-desc", c.product.desc));
    const productList = make("ul");
    c.product.points.forEach((point) => productList.appendChild(make("li", null, point)));
    product.appendChild(productList);

    const data = make("div", "focus-card data reveal");
    data.appendChild(make("div", "focus-icon", "📊"));
    data.appendChild(make("h3", null, c.data.title));
    data.appendChild(make("p", "focus-desc", c.data.desc));
    const dataList = make("ul");
    c.data.points.forEach((point) => dataList.appendChild(make("li", null, point)));
    data.appendChild(dataList);

    grid.appendChild(product);
    grid.appendChild(data);
    container.appendChild(grid);
    section.appendChild(container);
    return section;
  }

  function projectsSection() {
    const c = t().projects;
    const section = make("section", "section");
    section.id = "projects";
    const container = make("div", "container");
    container.appendChild(heading(c.eyebrow, c.title, c.subtitle));

    const list = make("div", "project-list");
    const hint = state.lang === "zh"
      ? "点击缩略图切换主图，点击主图可放大"
      : "Click a thumbnail to switch; click the main screenshot to enlarge";

    c.items.forEach((project) => {
      const show = make("article", "project-show reveal");
      const info = make("div", "project-info");

      const head = make("div", "project-head");
      head.appendChild(make("span", "project-emoji", project.emoji));
      head.appendChild(make("span", "project-status", project.status));
      info.appendChild(head);

      info.appendChild(make("h3", "project-title", project.title));
      info.appendChild(make("p", "project-sub", project.subtitle));
      info.appendChild(make("p", "project-desc", project.desc));

      const tags = make("div", "project-tags");
      project.tags.forEach((tagText) => tags.appendChild(make("span", "tag", tagText)));
      info.appendChild(tags);

      const galleryHint = make("p", "project-hint", hint);
      info.appendChild(galleryHint);

      const gallery = make("div", project.frame === "browser" ? "project-gallery browser" : "project-gallery");
      const stage = make("div", "phone-stage");
      const frame = make("div", project.frame === "browser" ? "browser-frame" : "phone-frame");

      const mainImg = document.createElement("img");
      mainImg.className = "phone-main";
      mainImg.src = project.images[0].src;
      mainImg.alt = project.title + " — " + project.images[0].label;
      mainImg.loading = "lazy";
      frame.appendChild(mainImg);

      const counter = make("span", "screen-counter", "1 / " + project.images.length);
      const caption = make("span", "screen-caption", project.images[0].label);
      stage.appendChild(frame);
      stage.appendChild(counter);
      stage.appendChild(caption);

      const thumbs = make("div", "screenshot-thumbs");
      let current = 0;

      const setMain = (index) => {
        current = index;
        const image = project.images[index];
        mainImg.src = image.src;
        mainImg.alt = project.title + " — " + image.label;
        caption.textContent = image.label;
        counter.textContent = (index + 1) + " / " + project.images.length;
        Array.prototype.forEach.call(thumbs.children, (thumbBtn, i) => {
          thumbBtn.classList.toggle("active", i === index);
        });
      };

      mainImg.addEventListener("click", () => {
        openLightbox(project.images, project.title, current);
      });

      project.images.forEach((image, index) => {
        const btn = document.createElement("button");
        btn.type = "button";
        btn.className = "thumb-btn";
        btn.title = image.label;
        if (index === 0) btn.classList.add("active");

        const thumbImg = document.createElement("img");
        thumbImg.src = image.src;
        thumbImg.alt = "";
        thumbImg.loading = "lazy";
        btn.appendChild(thumbImg);
        btn.addEventListener("click", () => setMain(index));
        thumbs.appendChild(btn);
      });

      gallery.appendChild(stage);
      gallery.appendChild(thumbs);
      show.appendChild(info);
      show.appendChild(gallery);
      list.appendChild(show);
    });

    container.appendChild(list);
    section.appendChild(container);
    return section;
  }

  function skillsSection() {
    const c = t().skills;
    const section = make("section", "section section-alt");
    section.id = "skills";
    const container = make("div", "container");
    container.appendChild(heading(c.eyebrow, c.title));

    const grid = make("div", "skills-grid");
    c.groups.forEach((group) => {
      const groupEl = make("div", "skill-group reveal");
      const title = make("h3", null);
      title.appendChild(make("span", null, group.name));
      groupEl.appendChild(title);
      const pills = make("div", "skill-pills");
      group.items.forEach((skill) => pills.appendChild(make("span", "skill-pill", skill)));
      groupEl.appendChild(pills);
      grid.appendChild(groupEl);
    });

    container.appendChild(grid);
    section.appendChild(container);
    return section;
  }

  function contactSection() {
    const c = t().contact;
    const section = make("section", "section");
    section.id = "contact";
    const container = make("div", "container");
    const card = make("div", "contact-card reveal");
    card.appendChild(make("span", "eyebrow", c.eyebrow));
    card.appendChild(make("h2", null, c.title));
    card.appendChild(make("p", "section-sub", c.subtitle));

    const links = make("div", "contact-links");
    const mail = make("a", null, c.email);
    mail.href = "mailto:" + c.email;
    const phone = make("p", null, c.phone);
    const site = make("p", null, c.site);
    links.appendChild(mail);
    links.appendChild(phone);
    links.appendChild(site);
    card.appendChild(links);

    const downloadBtn = make("a", "btn btn-primary", c.resumeDocx);
    downloadBtn.href = "downloads/Yunlu-Ding-Resume.pdf";
    downloadBtn.setAttribute("download", "Yunlu-Ding-Resume.pdf");
    card.appendChild(downloadBtn);
    card.appendChild(make("p", "download-hint", c.downloadHint));

    container.appendChild(card);
    section.appendChild(container);
    return section;
  }

  function footerSection() {
    const c = t().contact;
    footer.textContent = "✦ " + c.footer;
  }

  function renderNav() {
    navEl.innerHTML = "";
    t().nav.forEach((item) => {
      const link = make("a", null, item.label);
      link.href = item.href;
      navEl.appendChild(link);
    });
    langBtn.textContent = state.lang === "zh" ? "EN" : "中文";
  }

  function render() {
    const y = window.scrollY;
    document.documentElement.lang = state.lang;
    document.body.classList.toggle("lang-en", state.lang === "en");
    document.title = t().metaTitle;

    renderNav();

    app.innerHTML = "";
    app.appendChild(heroSection());
    app.appendChild(metricsSection());
    app.appendChild(journeySection());
    app.appendChild(educationSection());
    app.appendChild(focusSection());
    app.appendChild(projectsSection());
    app.appendChild(skillsSection());
    app.appendChild(contactSection());
    footerSection();

    window.scrollTo(0, y);
    startTyped();
    observeReveal();
    observeCounters();
  }

  /* ---------- interactions ---------- */

  let typeTimer = null;

  function startTyped() {
    if (typeTimer) clearTimeout(typeTimer);
    const target = document.getElementById("typed-role");
    if (!target) return;
    const roles = t().hero.roles;
    let roleIndex = 0;
    let charIndex = 0;
    let deleting = false;

    const tick = () => {
      const word = roles[roleIndex];
      if (!deleting) {
        charIndex += 1;
        target.textContent = word.slice(0, charIndex);
        if (charIndex === word.length) {
          deleting = true;
          typeTimer = setTimeout(tick, 1600);
          return;
        }
      } else {
        charIndex -= 1;
        target.textContent = word.slice(0, charIndex);
        if (charIndex === 0) {
          deleting = false;
          roleIndex = (roleIndex + 1) % roles.length;
        }
      }
      typeTimer = setTimeout(tick, deleting ? 34 : 72);
    };

    tick();
  }

  let revealObserver = null;

  function observeReveal() {
    if (revealObserver) revealObserver.disconnect();
    revealObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in");
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -30px 0px" });

    document.querySelectorAll(".reveal").forEach((node) => revealObserver.observe(node));
  }

  let counterObserver = null;

  function observeCounters() {
    if (counterObserver) counterObserver.disconnect();
    counterObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          counterObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.55 });

    document.querySelectorAll("[data-count-target]").forEach((node) => counterObserver.observe(node));
  }

  function animateCounter(node) {
    const target = parseFloat(node.dataset.countTarget);
    const decimals = parseInt(node.dataset.countDecimals, 10) || 0;
    const prefix = node.dataset.countPrefix || "";
    const suffix = node.dataset.countSuffix || "";
    const duration = 1300;
    const start = performance.now();

    function frame(now) {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const value = target * eased;
      node.textContent = prefix + value.toFixed(decimals) + suffix;
      if (progress < 1) requestAnimationFrame(frame);
    }

    requestAnimationFrame(frame);
  }

  /* ---------- tiny confetti ---------- */

  const canvas = document.getElementById("confetti-canvas");
  const ctx = canvas.getContext("2d");
  let particles = [];
  let confettiRunning = false;

  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  window.addEventListener("resize", resizeCanvas);
  resizeCanvas();

  function burstConfetti(x, y, amount) {
    const count = amount || 70;
    const colors = ["#ff6b6b", "#ffcf56", "#38c9a6", "#8b8cf0", "#6bb8ff"];
    for (let i = 0; i < count; i += 1) {
      const angle = Math.random() * Math.PI * 2;
      const speed = 3 + Math.random() * 6;
      particles.push({
        x: x,
        y: y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed - 2.5,
        size: 5 + Math.random() * 6,
        color: colors[Math.floor(Math.random() * colors.length)],
        rotation: Math.random() * Math.PI,
        spin: (Math.random() - 0.5) * 0.25,
        life: 1
      });
    }
    if (!confettiRunning) drawConfetti();
  }

  function drawConfetti() {
    confettiRunning = true;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach((p) => {
      p.x += p.vx;
      p.y += p.vy;
      p.vy += 0.12;
      p.rotation += p.spin;
      p.life -= 0.016;
    });
    particles = particles.filter((p) => p.life > 0);

    particles.forEach((p) => {
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate(p.rotation);
      ctx.globalAlpha = Math.max(p.life, 0);
      ctx.fillStyle = p.color;
      ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 0.6);
      ctx.restore();
    });

    if (particles.length > 0) {
      requestAnimationFrame(drawConfetti);
    } else {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      confettiRunning = false;
    }
  }

  /* ---------- lightbox ---------- */

  let lightboxImages = [];
  let lightboxIndex = 0;
  let lightboxTitle = "";
  let lightboxEl = null;

  function ensureLightbox() {
    if (lightboxEl) return;

    lightboxEl = make("div", "lightbox");
    lightboxEl.setAttribute("role", "dialog");
    lightboxEl.setAttribute("aria-modal", "true");
    lightboxEl.hidden = true;

    const closeBtn = make("button", "lightbox-btn lightbox-close", "×");
    closeBtn.type = "button";
    closeBtn.setAttribute("aria-label", "Close");

    const prevBtn = make("button", "lightbox-btn lightbox-prev", "‹");
    prevBtn.type = "button";
    prevBtn.setAttribute("aria-label", "Previous");

    const nextBtn = make("button", "lightbox-btn lightbox-next", "›");
    nextBtn.type = "button";
    nextBtn.setAttribute("aria-label", "Next");

    const figure = make("figure", "lightbox-figure");
    const image = document.createElement("img");
    image.className = "lightbox-img";
    image.alt = "";
    const caption = make("figcaption", "lightbox-caption");
    figure.appendChild(image);
    figure.appendChild(caption);

    lightboxEl.appendChild(closeBtn);
    lightboxEl.appendChild(prevBtn);
    lightboxEl.appendChild(figure);
    lightboxEl.appendChild(nextBtn);
    document.body.appendChild(lightboxEl);

    closeBtn.addEventListener("click", closeLightbox);
    prevBtn.addEventListener("click", () => stepLightbox(-1));
    nextBtn.addEventListener("click", () => stepLightbox(1));

    lightboxEl.addEventListener("click", (event) => {
      if (event.target === lightboxEl) closeLightbox();
    });

    document.addEventListener("keydown", (event) => {
      if (!lightboxEl || lightboxEl.hidden) return;
      if (event.key === "Escape") closeLightbox();
      if (event.key === "ArrowLeft") stepLightbox(-1);
      if (event.key === "ArrowRight") stepLightbox(1);
    });

    let pointerStartX = null;
    lightboxEl.addEventListener("pointerdown", (event) => {
      pointerStartX = event.clientX;
    });
    lightboxEl.addEventListener("pointerup", (event) => {
      if (pointerStartX === null) return;
      const deltaX = event.clientX - pointerStartX;
      if (Math.abs(deltaX) > 45) stepLightbox(deltaX < 0 ? 1 : -1);
      pointerStartX = null;
    });
  }

  function updateLightbox() {
    const image = lightboxImages[lightboxIndex];
    const img = lightboxEl.querySelector(".lightbox-img");
    const caption = lightboxEl.querySelector(".lightbox-caption");
    img.src = image.src;
    img.alt = lightboxTitle + " — " + image.label;
    caption.textContent = lightboxTitle + " · " + image.label + "  (" + (lightboxIndex + 1) + " / " + lightboxImages.length + ")";
  }

  function stepLightbox(delta) {
    if (!lightboxImages.length) return;
    lightboxIndex = (lightboxIndex + delta + lightboxImages.length) % lightboxImages.length;
    updateLightbox();
  }

  function openLightbox(images, title, index) {
    ensureLightbox();
    lightboxImages = images;
    lightboxTitle = title;
    lightboxIndex = index;
    updateLightbox();
    lightboxEl.hidden = false;
    document.body.style.overflow = "hidden";
  }

  function closeLightbox() {
    if (!lightboxEl) return;
    lightboxEl.hidden = true;
    document.body.style.overflow = "";
  }

  /* ---------- boot ---------- */

  langBtn.addEventListener("click", () => {
    state.lang = state.lang === "zh" ? "en" : "zh";
    render();
  });

  document.addEventListener("click", (event) => {
    if (event.target.closest && event.target.closest(".metric-card")) {
      const rect = event.target.closest(".metric-card").getBoundingClientRect();
      burstConfetti(rect.left + rect.width / 2, rect.top + rect.height / 2, 45);
    }
  });

  render();
})();
