"use strict";

const fs = require("fs");
const path = require("path");
const PDFDocument = require("pdfkit");

const ROOT = path.resolve(__dirname, "..");
const IMG_DIR = path.join(ROOT, "assets", "projects");
const OUT_DIR = path.join(ROOT, "downloads");
const OUT_FILE = path.join(OUT_DIR, "Yunlu-Ding-Portfolio.pdf");
const FONT = "C:/Windows/Fonts/simhei.ttf";

const C = {
  ink: "#22333B",
  soft: "#556A73",
  cream: "#FFFAF3",
  white: "#FFFFFF",
  coral: "#FF6B6B",
  coralSoft: "#FFE3E0",
  mint: "#38C9A6",
  mintSoft: "#DCF7EF",
  sun: "#FFCF56",
  sunSoft: "#FFF3CF",
  lav: "#8B8CF0",
  lavSoft: "#E9E8FF",
  sky: "#6BB8FF",
  skySoft: "#E2F0FF",
  line: "#E9E4DD"
};

const PROJECTS = [
  {
    title: "CFA 智能备考知识库",
    en: "CFA Study Knowledge Base",
    subtitle: "RAG 知识库与检索问答台",
    tags: ["RAG 检索", "结构感知切分", "答案引用", "拒答机制"],
    desc: "面向 CFA 备考场景的 RAG 知识库：支持 PDF / DOCX / MD / TXT 上传与异步解析，默认采用结构感知切分，可在切片管理中查看切片数与残句率；检索侧结合向量路与关键词路，问答会给出结论、可核对的引用原文和明确的拒答阈值。",
    accent: C.mint,
    accentSoft: C.mintSoft,
    mode: "landscape",
    images: [
      { file: "rag-overview.png", label: "工作台总览" },
      { file: "rag-upload.png", label: "上传入库" },
      { file: "rag-chunk.png", label: "切片管理" },
      { file: "rag-qa.png", label: "问答与引用" }
    ]
  },
  {
    title: "随行管家",
    en: "Journey Butler",
    subtitle: "酒店住客全旅程智能服务台",
    tags: ["住客 + 员工双端", "智能工单", "身份鉴权", "SLA 升级"],
    desc: "面向酒店住客全旅程的服务台：住客通过与智能管家对话提出需求，系统先用房间号 + 姓氏完成身份确认，再自动生成工单并按类别、优先级和承接部门派发；员工端支持接单、回执、按时闭环与超时升级。",
    accent: C.coral,
    accentSoft: C.coralSoft,
    mode: "landscape",
    images: [
      { file: "butler-guest-chat.png", label: "住客对话与身份确认" },
      { file: "butler-staff-orders.png", label: "员工接单与工单流转" }
    ]
  },
  {
    title: "SpeakMate",
    en: "AI Speaking Companion",
    subtitle: "AI 口语陪聊搭子 · 微信小程序",
    tags: ["微信小程序", "DeepSeek API", "场景对话", "隐性纠错"],
    desc: "从碎片化练口语缺少自然对话场景的痛点出发，以拟人化 AI 角色、场景化对话和隐性纠错机制，让英语练习像和朋友聊天一样自然。",
    accent: C.sky,
    accentSoft: C.skySoft,
    mode: "portrait",
    images: [
      { file: "speakmate-home.png", label: "首页" },
      { file: "speakmate-practice.png", label: "场景练习" },
      { file: "speakmate-chat.png", label: "对话页 · 隐性纠错" },
      { file: "speakmate-history.png", label: "聊天记录" }
    ]
  },
  {
    title: "CivicPrep",
    en: "Current-affairs Calendar",
    subtitle: "时政日历备考产品 · 微信小程序",
    tags: ["内容产品", "自动出题", "错题本", "0→1"],
    desc: "以日历形式日更时政内容并自动生成练习题，搭配错题本与知识点归类，帮助用户高效备考时政模块，覆盖内容型产品从 0 到 1 的完整闭环。",
    accent: C.sun,
    accentSoft: C.sunSoft,
    mode: "portrait",
    images: [
      { file: "civicprep-home.png", label: "首页 · 日历" },
      { file: "civicprep-news.png", label: "新闻页" },
      { file: "civicprep-quiz.png", label: "练习页" }
    ]
  },
  {
    title: "请你大声说出来",
    en: "Speak It Out Loud",
    subtitle: "主动回忆背诵工具 · 微信小程序",
    tags: ["主动回忆", "学习工具", "长文背诵", "已上线"],
    desc: "针对长文背诵效率低的痛点，设计“大声朗读 + 手绘圈计数 + 看圈主动回忆 + 听自己录音”的完整方法，并完成从竞品分析、PRD、技术探针到 v1 的闭环。",
    accent: C.lav,
    accentSoft: C.lavSoft,
    mode: "portrait",
    images: [
      { file: "speakout-home.png", label: "首页 · 导入内容" },
      { file: "speakout-read.png", label: "朗读页" },
      { file: "speakout-recite.png", label: "背诵页" }
    ]
  }
];

fs.mkdirSync(OUT_DIR, { recursive: true });

const doc = new PDFDocument({
  autoFirstPage: false,
  size: "A4",
  margin: 0,
  compress: true,
  info: {
    Title: "丁云璐 · 作品集",
    Author: "丁云璐 / Yunlu Ding",
    Subject: "Product Portfolio",
    Keywords: "Product, RAG, Agent, Search, Portfolio"
  }
});
doc.registerFont("cn", FONT);
doc.registerFont("cn-bold", FONT);

const stream = fs.createWriteStream(OUT_FILE);
doc.pipe(stream);

let pageNo = 0;

function addPage(layout) {
  doc.addPage({ size: "A4", layout });
  pageNo += 1;
  return { w: doc.page.width, h: doc.page.height };
}

function footer(page, note) {
  doc.font("cn").fontSize(8.5).fillColor("#9AA7AD");
  doc.text(String(pageNo), 0, page.h - 26, { align: "center", width: page.w });
  if (note) {
    doc.fontSize(8.5).fillColor("#B4BEC4").text(note, 40, page.h - 26, { width: 260 });
  }
}

function cover() {
  const p = addPage("landscape");
  doc.rect(0, 0, p.w, p.h).fill(C.cream);

  doc.save();
  doc.fillOpacity(0.65).fillColor(C.sun).circle(p.w - 90, 20, 180).fill();
  doc.fillOpacity(0.55).fillColor(C.mint).circle(p.w - 250, p.h + 40, 200).fill();
  doc.fillOpacity(0.4).fillColor(C.lav).circle(30, p.h - 30, 150).fill();
  doc.restore();

  doc.font("cn").fillColor(C.coral).fontSize(13);
  doc.text("PRODUCT PORTFOLIO · 2026", 60, 62, { characterSpacing: 2 });

  doc.fillColor(C.ink).fontSize(52);
  doc.text("丁云璐 · 作品集", 58, 96, { width: 620 });

  doc.fontSize(18).fillColor(C.soft);
  doc.text("Yunlu Ding — Product Portfolio", 60, 170);

  doc.fontSize(13).fillColor(C.soft);
  doc.text("搜索产品 / 风控产品 / 智能 Agent 产品", 60, 202);
  doc.text("从发现问题到把产品做出来，每一页都是 0→1 的过程。", 60, 226);

  doc.fontSize(11).fillColor(C.ink);
  doc.text("18800118923@163.com", 60, 286);
  doc.text("18800118923", 60, 306);
  doc.text("https://yunlu-ding.github.io/personal-page/", 60, 326);

  const chipY = p.h - 150;
  const chipW = 132;
  const gap = 16;
  PROJECTS.forEach((proj, i) => {
    const x = 60 + i * (chipW + gap);
    doc.roundedRect(x, chipY, chipW, 66, 14).fill(proj.accent);
    doc.fillColor(proj.accent === C.sun ? C.ink : C.white).fontSize(12);
    doc.text(proj.title, x + 12, chipY + 14, { width: chipW - 24 });
    doc.fontSize(8.5);
    doc.text(proj.en, x + 12, chipY + 40, { width: chipW - 24 });
  });

  doc.fontSize(10).fillColor(C.soft);
  doc.text("5 个作品 · 16 张界面截图", 60, p.h - 66);
  footer(p);
}

function contents() {
  const p = addPage("landscape");
  doc.rect(0, 0, p.w, p.h).fill(C.white);

  doc.font("cn").fillColor(C.coral).fontSize(12);
  doc.text("CONTENTS", 58, 56, { characterSpacing: 2 });
  doc.fillColor(C.ink).fontSize(34);
  doc.text("目录", 56, 80);

  let running = 3;
  PROJECTS.forEach((proj, i) => {
    const y = 166 + i * 66;
    const start = running;
    const end = running + proj.images.length;
    running = end + 1;

    doc.roundedRect(58, y - 6, 44, 44, 12).fill(proj.accent);
    doc.fillColor(proj.accent === C.sun ? C.ink : C.white).fontSize(16);
    doc.text(String(i + 1).padStart(2, "0"), 58, y + 6, { width: 44, align: "center" });

    doc.fillColor(C.ink).fontSize(17);
    doc.text(proj.title, 120, y, { width: 420 });
    doc.fillColor(C.soft).fontSize(10.5);
    doc.text(proj.en + " · " + proj.subtitle, 120, y + 24, { width: 480 });

    doc.fillColor(C.soft).fontSize(11);
    doc.text("P" + start + " - P" + end, p.w - 190, y + 8, { width: 130, align: "right" });
  });
  footer(p);
}

function sectionDivider(proj, index) {
  const p = addPage(proj.mode);
  doc.rect(0, 0, p.w, p.h).fill(proj.accentSoft);

  doc.save();
  doc.fillOpacity(0.75).fillColor(proj.accent).circle(p.w - 60, -30, 190).fill();
  doc.fillOpacity(0.32).fillColor(C.white).circle(p.w - 210, p.h + 60, 210).fill();
  doc.restore();

  doc.font("cn").fillColor(C.ink).fontSize(12);
  doc.text("PROJECT " + String(index + 1).padStart(2, "0"), 56, 62, { characterSpacing: 2 });

  doc.fillColor(C.ink).fontSize(38);
  doc.text(proj.title, 54, 96, { width: p.w - 200 });

  doc.fillColor(C.soft).fontSize(15);
  doc.text(proj.en, 56, 160, { width: p.w - 160 });
  doc.fillColor(C.ink).fontSize(13);
  doc.text(proj.subtitle, 56, 188, { width: p.w - 160 });

  const descWidth = Math.min(p.w - 260, 560);
  doc.fillColor(C.soft).fontSize(11.5);
  doc.text(proj.desc, 56, 232, { width: descWidth, lineGap: 6 });

  const descHeight = doc.heightOfString(proj.desc, { width: descWidth, lineGap: 6 });
  let tagX = 56;
  const tagY = 232 + descHeight + 28;
  proj.tags.forEach((tag) => {
    doc.fontSize(10.5);
    const tw = doc.widthOfString(tag) + 22;
    doc.roundedRect(tagX, tagY, tw, 28, 14).fill(C.white);
    doc.fillColor(C.ink).fontSize(10.5);
    doc.text(tag, tagX + 11, tagY + 8, { width: tw - 22 });
    tagX += tw + 10;
  });

  doc.fillColor(C.soft).fontSize(10.5);
  doc.text("包含 " + proj.images.length + " 张界面截图", 56, p.h - 70);
  footer(p, proj.title);
}

function imagePage(proj, image, index) {
  const p = addPage(proj.mode);
  doc.rect(0, 0, p.w, p.h).fill(C.white);

  doc.rect(0, 0, p.w, 58).fill(proj.accent);
  const headerColor = proj.accent === C.sun ? C.ink : C.white;
  doc.fillColor(headerColor).fontSize(13);
  doc.text(proj.title, 34, 20, { width: p.w - 220 });
  doc.fontSize(10.5);
  doc.text(image.label + "  ·  " + String(index + 1).padStart(2, "0") + "/" + String(proj.images.length).padStart(2, "0"), p.w - 220, 22, { width: 186, align: "right" });

  const top = 92;
  const bottom = p.h - 70;
  const availW = p.w - 92;
  const availH = bottom - top;
  const imgPath = path.join(IMG_DIR, image.file);
  const opened = doc.openImage(imgPath);
  const scale = Math.min(availW / opened.width, availH / opened.height);
  const w = opened.width * scale;
  const h = opened.height * scale;
  const x = (p.w - w) / 2;
  const y = top + (availH - h) / 2;

  doc.roundedRect(x + 7, y + 7, w, h, 8).fill(C.line);
  doc.image(imgPath, x, y, { width: w, height: h });
  doc.roundedRect(x, y, w, h, 8).lineWidth(1).strokeColor("#D8D1C8").stroke();

  if (y + h + 34 < p.h - 30) {
    doc.fillColor(C.soft).fontSize(10.5);
    doc.text(image.label, 0, y + h + 14, { align: "center", width: p.w });
  }
  footer(p, proj.title + " · " + image.label);
}

cover();
doc.outline.addItem("封面");
contents();
doc.outline.addItem("目录");

PROJECTS.forEach((proj, i) => {
  sectionDivider(proj, i);
  const sectionOutline = doc.outline.addItem(proj.title);
  proj.images.forEach((image, j) => {
    imagePage(proj, image, j);
    sectionOutline.addItem(image.label);
  });
});

doc.end();
stream.on("finish", () => {
  const size = fs.statSync(OUT_FILE).size;
  console.log("PDF generated:", OUT_FILE);
  console.log("pages:", pageNo, "size:", (size / 1024 / 1024).toFixed(2), "MB");
});
