/* ============================================================
   Cherry LIU 个人网站 — 交互脚本
   功能：导航滚动变化 / 移动端菜单 / 滚动进入动画 / 导航高亮 / 年份 / FAQ 平滑交互
   ============================================================ */

document.addEventListener("DOMContentLoaded", () => {
  const nav = document.getElementById("nav");
  const navToggle = document.getElementById("navToggle");
  const navLinks = document.getElementById("navLinks");
  const links = navLinks ? Array.from(navLinks.querySelectorAll("a")) : [];

  // 1. 导航栏滚动变化
  const onScroll = () => {
    if (window.scrollY > 40) nav.classList.add("scrolled");
    else nav.classList.remove("scrolled");
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  // 2. 移动端菜单开合
  const closeMenu = () => navLinks.classList.remove("open");
  if (navToggle) {
    navToggle.addEventListener("click", () => navLinks.classList.toggle("open"));
  }
  links.forEach((l) => l.addEventListener("click", closeMenu));
  // 点击菜单外部关闭
  document.addEventListener("click", (e) => {
    if (navLinks && navLinks.classList.contains("open") &&
        !navLinks.contains(e.target) && !navToggle.contains(e.target)) {
      closeMenu();
    }
  });

  // 3. 滚动进入动画 (IntersectionObserver)
  const reveals = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -36px 0px" }
    );
    reveals.forEach((el) => io.observe(el));
  } else {
    reveals.forEach((el) => el.classList.add("in"));
  }

  // 4. 导航链接高亮当前区块
  const sections = ["home", "about", "experience", "projects", "skills", "faq", "contact"]
    .map((id) => document.getElementById(id))
    .filter(Boolean);

  if ("IntersectionObserver" in window) {
    const spy = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            links.forEach((l) => l.classList.remove("active"));
            const active = links.find(
              (l) => l.getAttribute("href") === "#" + e.target.id || l.getAttribute("href") === "#" + e.target.id + "-en"
            );
            if (active) active.classList.add("active");
          }
        });
      },
      { threshold: 0.45 }
    );
    sections.forEach((s) => spy.observe(s));
  }

  // 5. 页脚年份
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // 6. FAQ 平滑展开 —— 点击其他已打开的项时自动收起
  const faqItems = document.querySelectorAll(".faq-item");
  faqItems.forEach((item) => {
    item.addEventListener("toggle", () => {
      if (item.open) {
        faqItems.forEach((other) => {
          if (other !== item && other.open) other.removeAttribute("open");
        });
      }
    });
  });

  // 7. 头像轮播（自动 + 手动切换）
  initAvatarCarousel();
});

/* ---- 头像轮播模块 ---- */
function initAvatarCarousel() {
  const carousel = document.getElementById("avatarCarousel");
  if (!carousel) return;
  const slides = carousel.querySelectorAll(".carousel__slide");
  const dots = carousel.querySelectorAll(".carousel__dots .dot");
  if (!slides.length || slides.length < 2) return;

  let current = 0;
  let timer = null;
  const interval = 4000; // 4 秒切换

  function goTo(index) {
    slides[current].classList.remove("active");
    dots[current]?.classList.remove("active");
    current = index % slides.length;
    slides[current].classList.add("active");
    dots[current]?.classList.add("active");
  }

  function next() { goTo(current + 1); }

  function start() { stop(); timer = setInterval(next, interval); }
  function stop() { if (timer) clearInterval(timer); }

  // 点击圆点手动切换
  dots.forEach((dot, i) => {
    dot.addEventListener("click", () => { goTo(i); start(); });
  });

  // 鼠标悬停暂停
  carousel.addEventListener("mouseenter", stop);
  carousel.addEventListener("mouseleave", start);

  goTo(0);
  start();
}
