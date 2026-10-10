import React, {useEffect, useState} from 'react';
import {createRoot} from 'react-dom/client';
import {ArrowDown, ArrowUpRight, BookOpen, Heart, Mail, Menu, PenLine, Play, X} from 'lucide-react';
import './styles.css';

const experiences = [
  {role:'Content Marketing Specialist', company:'Rubicon Foundation', place:'Pune, Maharashtra (Remote)', date:'09/2026 - Present', points:['Developed content calendars across website, email and social channels.','Wrote and edited audience-focused copy for campaigns, landing pages, newsletters and promotional materials.','Optimized web content using SEO best practices, keywords and metadata.','Coordinated messaging with program and development teams.','Tracked content performance through analytics to refine future campaigns.']},
  {role:'Content Writer', company:'NB Media', place:'Mohali, Punjab (Remote)', date:'09/2023 - 10/2024', points:['Wrote engaging scripts for YouTube audiences using research-led storytelling.','Applied research skills developed through an MA thesis to build well-informed scripts.','Researched topics thoroughly for accurate and relevant content.']}
];
const skills=['Content writing & storytelling','Editing & proofreading','Content marketing','SEO & keyword optimization','Social media content','Content strategy','Content curation','Data-driven insights','Technical writing','Project management','Deadline management','Cloud-based environments'];
const works=[
 {type:'STORYTELLING',title:'Words that stay with you',text:'Stories, scripts and thoughtful pieces built around voice, emotion and a strong narrative thread.',tag:'Creative writing'},
 {type:'CONTENT',title:'Content with a purpose',text:'Audience-focused writing shaped by research, SEO and the bigger communication goal.',tag:'Content marketing'},
 {type:'RESEARCH',title:'Curiosity, carefully written',text:'Research-led pieces that turn complex ideas into clear, engaging narratives.',tag:'Research & writing'}
];
const videos=[
 {id:'PQMLf19YJI8',title:"The Most Disturbing Case You've Ever Heard | True Crime Documentary",tag:'YouTube script'},
 {id:'rEFUoIBWKqw',title:'Case With The Most Insane Twists You Have Ever Heard | True Crime Documentary',tag:'YouTube script'},
 {id:'KoeRpGMhzJI',title:'Case With The Most Insane Twists You Have Ever Heard | Documentary',tag:'YouTube script'}
];

function App(){
 const [open,setOpen]=useState(false);
 const scrollTo=id=>{
  const reduce=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  document.getElementById(id)?.scrollIntoView({behavior:reduce?'auto':'smooth'});
  setOpen(false);
 };
 useEffect(()=>{
  if(!open)return;
  const onPointerDown=e=>{if(!e.target.closest?.('.nav'))setOpen(false)};
  const onKeyDown=e=>{if(e.key==='Escape')setOpen(false)};
  document.addEventListener('pointerdown',onPointerDown);
  document.addEventListener('keydown',onKeyDown);
  return ()=>{document.removeEventListener('pointerdown',onPointerDown);document.removeEventListener('keydown',onKeyDown)};
 },[open]);
 return <div className="site">
  <div className="paper-noise" aria-hidden="true"/>
  <nav className="nav"><a className="brand" href="#home" onClick={e=>{e.preventDefault();scrollTo('home')}}><span>KS</span><em>writer's corner</em></a>
   <div id="nav-links" className={`links ${open?'show':''}`}><button onClick={()=>scrollTo('about')}>About</button><button onClick={()=>scrollTo('work')}>Writing</button><button onClick={()=>scrollTo('experience')}>Journey</button><button onClick={()=>scrollTo('contact')}>Contact</button></div>
   <button className="menu" onClick={()=>setOpen(!open)} aria-label="Toggle navigation menu" aria-expanded={open} aria-controls="nav-links">{open?<X/>:<Menu/>}</button>
  </nav>

  <main>
   <section id="home" className="hero section-pad">
    <div className="hero-copy"><div className="eyebrow">a little corner for words</div>
      <h1>Hi, I'm<br/><span>Kaustava.</span></h1>
      <p className="lead">A writer, storyteller and content creator who likes turning thoughts, research and ideas into words people want to keep reading.</p>
      <div className="hero-actions"><button className="primary" onClick={()=>scrollTo('work')}>Read my work <ArrowDown size={17}/></button><button className="text-btn" onClick={()=>scrollTo('about')}>A little about me <ArrowUpRight size={16}/></button></div>
    </div>
    <div className="desk-card"><div className="tape"/><div className="card-top"><span>NOTE 01</span></div><PenLine className="feather" size={46}/><p className="quote">"Words have a strange way of turning thoughts into places."</p><div className="scribble">write, research, tell stories</div><div className="mini-stamp">KS<br/><small>WORDS</small></div></div>
   </section>

   <section id="about" className="about section-pad">
    <div className="section-label">01 / ABOUT ME</div><div className="about-grid"><div><h2>Words first.<br/><i>Always.</i></h2></div><div className="about-text"><p>Creative, communication-driven writer with a strong foundation in storytelling, SEO, research and writing techniques. My work spans digital storytelling, copywriting and social media marketing, with a focus on building brand awareness through compelling content.</p><p className="small-note"><Heart size={15}/> I like writing that feels human.</p></div></div>
   </section>

   <section id="work" className="work section-pad"><div className="section-label">02 / THE WRITING DESK</div><div className="section-heading"><h2>Things I <i>love</i> to write.</h2><span>selected directions</span></div><div className="work-grid">{works.map((w,i)=><article className={`work-card c${i}`} key={w.title}><div className="card-number">0{i+1}</div><div className="work-icon"><BookOpen size={20}/></div><div className="work-type">{w.type}</div><h3>{w.title}</h3><p>{w.text}</p><span className="pill">{w.tag}</span></article>)}</div></section>

   <section id="experience" className="journey section-pad"><div className="section-label">03 / THE JOURNEY</div><div className="timeline">{experiences.map((e,i)=><article className="job" key={e.company}><div className="job-date">{e.date}</div><div className="dot">{experiences.length - i}</div><div className="job-body"><div className="job-company">{e.company}</div><h3>{e.role}</h3><div className="job-place">{e.place}</div><ul>{e.points.map(p=><li key={p}>{p}</li>)}</ul></div></article>)}</div></section>

   <section className="skills section-pad"><div className="section-label">04 / MY TOOLBOX</div><h2>A few things I<br/><i>know my way around.</i></h2><div className="skill-cloud">{skills.map((s,i)=><span key={s} className={i%4===0?'accent':''}>{s}</span>)}</div></section>

   <section className="education section-pad"><div className="section-label">05 / THE LEARNING</div><div className="edu-grid"><div><h2>Learning is<br/><i>part of the craft.</i></h2></div><div className="edu-list"><div><span>2026</span><h3>MA in English</h3><p>Assam Royal Global University, 81.8%</p><small>Independent research thesis completed.</small></div><div><span>2023</span><h3>BA in English Honors</h3><p>Gauhati University, 82.6%</p></div><div><span>2019</span><h3>Class 12</h3><p>75%</p></div><div><span>2017</span><h3>Class 10</h3><p>90%</p></div></div></div></section>

   <section id="videos" className="videos section-pad"><div className="section-label">06 / MY PREVIOUS WORKS</div><div className="section-heading"><h2>Scripts that <i>went live.</i></h2><span>YouTube, selected work</span></div><div className="video-grid">{videos.map(v=><a className="video-card" key={v.id} href={`https://youtu.be/${v.id}`} target="_blank" rel="noopener noreferrer" aria-label={`Watch on YouTube: ${v.title}`}><img className="video-thumb" src={`https://i.ytimg.com/vi/${v.id}/maxresdefault.jpg`} alt={v.title} loading="lazy" onError={e=>{e.currentTarget.onerror=null;e.currentTarget.src=`https://i.ytimg.com/vi/${v.id}/hqdefault.jpg`}}/><span className="video-overlay" aria-hidden="true"/><span className="video-play" aria-hidden="true"><Play size={22} fill="currentColor"/></span><span className="video-meta"><span className="video-tag">{v.tag}</span><span className="video-title">{v.title}</span></span></a>)}</div></section>

   <section className="highlights section-pad"><div className="highlight-note"><div><div className="section-label">07 / LITTLE HIGHLIGHTS</div><h2>Published words.<br/><i>Real conversations.</i></h2><p>Writing published in newspapers, alongside speaking engagements including G20 and academic seminars.</p></div></div></section>

   <section id="contact" className="contact section-pad"><div className="contact-paper"><div className="section-label">08 / SAY HELLO</div><h2>Have a story<br/>in mind?</h2><p>Let's turn that idea into something worth reading.</p><a className="email" href="mailto:kaustavasarma211@gmail.com"><Mail size={18}/> kaustavasarma211@gmail.com <ArrowUpRight size={17}/></a><div className="contact-details">Guwahati, Assam, India | +91 9101506154</div></div></section>
  </main>
  <footer><span>© {new Date().getFullYear()} Kaustava Sarma</span></footer>
 </div>
}
const rootEl=document.getElementById('root');
if(rootEl)createRoot(rootEl).render(<App/>);
