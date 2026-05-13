"use client";

import { FormEvent, useEffect, useState } from "react";

const carouselSlides = [
  {
    src: "/assets/pet-salon-carousel-1.png",
    alt: "高端宠物洗护店主洗护空间",
    title: "通透洗护区",
    description: "玻璃分区、温润木饰面与石材台面，让护理过程干净而有秩序。"
  },
  {
    src: "/assets/pet-salon-carousel-2.png",
    alt: "高端宠物洗护店 VIP 洗护套间",
    title: "VIP 洗护套间",
    description: "独立套间降低环境刺激，适合胆小、老年或需要精细护理的宠物。"
  },
  {
    src: "/assets/pet-salon-carousel-3.png",
    alt: "高端宠物洗护店精品等候区",
    title: "精品等候区",
    description: "等候、选品与预约接待自然连接，保留轻松的东方待客感。"
  }
];

const services = [
  {
    title: "清爽基础洗",
    description: "适合日常清洁和轻度异味，使用低刺激宠物专用浴液。",
    price: "¥88",
    chips: ["45-70 分钟", "短毛友好"]
  },
  {
    title: "蓬松养护洗",
    description: "针对换毛季、毛发打结和干燥毛质，增加开结与保湿护理。",
    price: "¥138",
    chips: ["深层梳理", "毛量管理"]
  },
  {
    title: "精致造型修剪",
    description: "按品种和主人喜好做脸型、身体线条、尾巴和四肢修剪。",
    price: "¥198",
    chips: ["造型沟通", "拍照返图"]
  }
];

const steps = [
  {
    number: "01",
    title: "进店评估",
    description: "确认毛结、皮肤、耳道和情绪状态，提前沟通护理重点。"
  },
  {
    number: "02",
    title: "温和清洁",
    description: "分区湿洗和按摩起泡，水温、风力、香波浓度按宠物状态调整。"
  },
  {
    number: "03",
    title: "梳理造型",
    description: "彻底吹干后梳通底毛，按套餐进行局部修整或全身造型。"
  }
];

const reviews = [
  {
    text: "我家狗子很怕吹风，美容师会分段安抚，洗完不炸毛也不紧张。",
    author: "可乐主人"
  },
  {
    text: "猫咪洗澡前会先看皮肤和耳朵，护理记录发得很细，放心很多。",
    author: "团团主人"
  },
  {
    text: "约造型前沟通了照片参考，修出来很自然，脚底毛也处理得干净。",
    author: "豆包主人"
  }
];

export default function Home() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  const showSlide = (index: number) => {
    setActiveSlide((index + carouselSlides.length) % carouselSlides.length);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
    window.setTimeout(() => setSubmitted(false), 2600);
  };

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % carouselSlides.length);
    }, 5200);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <>
      <header className="topbar">
        <a className="brand" href="#top" aria-label="爪爪云洗护首页">
          <span className="brand-mark">爪</span>
          <span>爪爪云洗护</span>
        </a>
        <nav className="nav" aria-label="主导航">
          <a href="#services">服务</a>
          <a href="#space">环境</a>
          <a href="#process">流程</a>
          <a href="#reviews">口碑</a>
          <a href="#booking">预约</a>
        </nav>
        <a className="nav-cta" href="#booking">立即预约</a>
      </header>

      <main id="top">
        <section className="hero">
          <div className="hero-inner">
            <div className="hero-copy">
              <span className="eyebrow">温和洗护 · 透明护理 · 到店可视</span>
              <h1>给毛孩子一次安心又蓬松的洗护体验</h1>
              <p>从基础洁净、造型修剪到皮毛护理，专业美容师按品种、毛量和敏感程度定制流程，让每一次洗澡都更轻松。</p>
              <div className="hero-actions">
                <a className="hero-cta" href="#booking">预约洗护</a>
                <a className="ghost-link" href="#services">查看套餐</a>
              </div>
            </div>

            <aside className="booking-panel" id="booking" aria-label="预约表单">
              <h2>快速预约</h2>
              <p>提交后 10 分钟内联系确认到店时间。</p>
              <form className="form" onSubmit={handleSubmit}>
                <div className="field">
                  <label htmlFor="pet">宠物类型</label>
                  <select id="pet" name="pet" defaultValue="小型犬">
                    <option>小型犬</option>
                    <option>中大型犬</option>
                    <option>猫咪</option>
                    <option>其他宠物</option>
                  </select>
                </div>
                <div className="form-grid">
                  <div className="field">
                    <label htmlFor="date">到店日期</label>
                    <input id="date" name="date" type="date" />
                  </div>
                  <div className="field">
                    <label htmlFor="time">时间段</label>
                    <select id="time" name="time" defaultValue="10:00 - 12:00">
                      <option>10:00 - 12:00</option>
                      <option>13:00 - 15:00</option>
                      <option>15:00 - 17:00</option>
                      <option>17:00 - 19:00</option>
                    </select>
                  </div>
                </div>
                <div className="field">
                  <label htmlFor="phone">联系方式</label>
                  <input id="phone" name="phone" type="tel" placeholder="请输入手机号" />
                </div>
                <div className="field">
                  <label htmlFor="note">护理需求</label>
                  <textarea id="note" name="note" rows={3} placeholder="例如：掉毛严重、皮肤敏感、需要修脚底毛" />
                </div>
                <button type="submit" className={submitted ? "is-submitted" : ""}>
                  {submitted ? "已收到预约" : "提交预约"}
                </button>
              </form>
            </aside>
          </div>
        </section>

        <section className="section" id="services">
          <div className="wrap">
            <div className="section-head">
              <h2>按毛孩子状态选择洗护方案</h2>
              <p>所有套餐均包含耳道清洁、指甲修剪、脚底毛修整、肛门腺护理和吹干梳理，进店先做基础健康观察。</p>
            </div>
            <div className="services">
              {services.map((service) => (
                <article className="card" key={service.title}>
                  <strong>{service.title}</strong>
                  <p>{service.description}</p>
                  <div className="price">{service.price}<span>起</span></div>
                  <div className="chips">
                    {service.chips.map((chip) => (
                      <span className="chip" key={chip}>{chip}</span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="space">
          <div className="wrap">
            <div className="section-head">
              <h2>高端店内环境，安静看得见</h2>
              <p>以中国当代审美做空间基底，洗护、等候、精品零售分区清晰，让宠物和主人都能放松下来。</p>
            </div>
            <div className="space-carousel" aria-label="高端宠物洗护店内环境轮播图">
              <div className="carousel-track" style={{ transform: `translateX(-${activeSlide * 100}%)` }}>
                {carouselSlides.map((slide) => (
                  <figure className="carousel-slide" key={slide.src}>
                    <img src={slide.src} alt={slide.alt} />
                    <figcaption className="slide-caption">
                      <strong>{slide.title}</strong>
                      <span>{slide.description}</span>
                    </figcaption>
                  </figure>
                ))}
              </div>
              <div className="carousel-controls" aria-label="轮播控制">
                <button className="carousel-button" type="button" onClick={() => showSlide(activeSlide - 1)} aria-label="上一张">‹</button>
                <button className="carousel-button" type="button" onClick={() => showSlide(activeSlide + 1)} aria-label="下一张">›</button>
              </div>
              <div className="carousel-dots" aria-label="轮播分页">
                {carouselSlides.map((slide, index) => (
                  <button
                    className={`carousel-dot${index === activeSlide ? " is-active" : ""}`}
                    type="button"
                    onClick={() => showSlide(index)}
                    aria-label={`第 ${index + 1} 张`}
                    key={slide.src}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="process">
          <div className="wrap care-grid">
            <div className="photo-strip" aria-label="宠物洗护实景图" />
            <div>
              <div className="section-head single-head">
                <h2>洗护过程清楚可见</h2>
                <p>每一步都围绕宠物舒适度展开，胆小、老年、敏感皮肤都会单独标注护理方式。</p>
              </div>
              <div className="steps">
                {steps.map((step) => (
                  <article className="step" key={step.number}>
                    <span className="step-number">{step.number}</span>
                    <div>
                      <h3>{step.title}</h3>
                      <p>{step.description}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="reviews">
          <div className="wrap">
            <div className="trust">
              <div className="stat"><b>6 年</b><span>门店洗护经验</span></div>
              <div className="stat"><b>18k+</b><span>累计服务宠物</span></div>
              <div className="stat"><b>4.9</b><span>用户平均评分</span></div>
              <div className="stat"><b>1 对 1</b><span>美容师护理档案</span></div>
            </div>
            <div className="reviews">
              {reviews.map((review) => (
                <article className="review" key={review.author}>
                  <p>{review.text}</p>
                  <b>{review.author}</b>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="wrap footer-cta">
            <div>
              <h2>今天就把洗护这件小事交给专业的人</h2>
              <p>门店每日消毒、工具一宠一清洁，支持护理前后照片反馈和会员档案记录。</p>
            </div>
            <a className="hero-cta" href="#booking">预约到店</a>
          </div>
        </section>
      </main>

      <footer>
        <div className="wrap">
          <span>爪爪云洗护 · 宠物洗护与造型</span>
          <span>营业时间 10:00 - 20:00 · 电话 400-888-2026</span>
        </div>
      </footer>
    </>
  );
}
