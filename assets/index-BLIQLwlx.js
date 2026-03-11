(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))t(a);new MutationObserver(a=>{for(const r of a)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&t(l)}).observe(document,{childList:!0,subtree:!0});function e(a){const r={};return a.integrity&&(r.integrity=a.integrity),a.referrerPolicy&&(r.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?r.credentials="include":a.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function t(a){if(a.ep)return;a.ep=!0;const r=e(a);fetch(a.href,r)}})();const n=[{id:1,slug:"desenvolvimento-web-full-stack",title:"Desenvolvimento Web Full Stack",category:"Programação",level:"Iniciante ao Avançado",hours:"120h",image:"https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500&h=300&fit=crop",description:"Aprenda a criar aplicações completas do zero com HTML, CSS, JS, React e Node.js.",instructor:"Carlos Web Dev",modules:["HTML e CSS Moderno","JavaScript Profundo","Front-end com React","Back-end com Node.js e Express","Banco de Dados SQL e NoSQL"],price:"R$ 497,00"},{id:2,slug:"ux-ui-design-moderno",title:"UX/UI Design Moderno",category:"Design",level:"Intermediário",hours:"60h",image:"https://images.unsplash.com/photo-1561070791-2526d30994b5?w=500&h=300&fit=crop",description:"Transforme ideias em interfaces incríveis usando Figma, Adobe XD e metodologias ágeis.",instructor:"Ana UX/UI",modules:["Fundamentos de Design","Pesquisa UX (User Research)","Prototipagem no Figma","Design Systems","Acessibilidade"],price:"R$ 347,00"},{id:3,slug:"engenharia-de-software-e-arquitetura",title:"Engenharia de Software e Arquitetura",category:"Engenharia",level:"Avançado",hours:"80h",image:"https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=500&h=300&fit=crop",description:"Crie sistemas escaláveis, aplicando Design Patterns e Arquitetura de Microsserviços.",instructor:"Roberto Tech Lead",modules:["Clean Code & Solid","Design Patterns Reais","Arquitetura Hexagonal","Microsserviços com Docker/Kubernetes","Testes Automatizados"],price:"R$ 597,00"},{id:4,slug:"inteligencia-artificial-e-machine-learning",title:"Inteligência Artificial & Machine Learning",category:"Dados",level:"Intermediário",hours:"90h",image:"https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=500&h=300&fit=crop",description:"Domine a análise de dados e construa modelos preditivos utilizando Python.",instructor:"Data Alice",modules:["Python para Dados","Estatística Aplicada","Machine Learning Clássico","Redes Neurais / Deep Learning","Deploy de Modelos IA"],price:"R$ 697,00"}];function p(s){return n.find(o=>o.slug===s)}function g(){const s=[{q:"Os cursos possuem certificado aprovado?",a:"Sim, todos os cursos contam com certificado de conclusão com a carga horária embutida. Você pode anexar em seu currículo e perfil do LinkedIn, sendo validado nacionalmente como cursos livres curriculares."},{q:"Qual o formato das aulas?",a:"Nossas aulas são 100% online, gravadas em altíssima qualidade (4K). Você pode assistir a qualquer momento, de qualquer dispositivo, no seu próprio ritmo."},{q:"Terei suporte em caso de dúvidas?",a:"Com certeza! Você terá acesso a uma comunidade exclusiva no Discord de alunos e mentores para tirar dúvidas de código e debater projetos de forma colaborativa."},{q:"Por quanto tempo tenho acesso ao curso?",a:"O acesso para a maioria dos nossos cursos é vitalício. Você pode revisar o material sempre que precisar no futuro e as atualizações farão parte sem nenhum custo extra."},{q:"Quais as formas de pagamento?",a:"Aceitamos cartão de crédito (parcelado em até 12x), Pix e boleto bancário (à vista)."}];return window.toggleFAQ=function(e){const t=document.getElementById("faq-answer-"+e),a=document.getElementById("faq-icon-"+e);t.classList.contains("hidden")?(t.classList.remove("hidden"),a.style.transform="rotate(180deg)"):(t.classList.add("hidden"),a.style.transform="rotate(0deg)")},`
    <section class="container mx-auto px-6 py-20 lg:py-28 max-w-4xl relative">
      <!-- Glow Decorator -->
      <div class="absolute top-0 right-0 w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-[128px] opacity-30"></div>
      
      <div class="text-center mb-16 relative z-10">
        <span class="text-blue-400 font-bold uppercase tracking-widest mb-4 inline-block">SupportCenter</span>
        <h1 class="text-5xl font-extrabold mb-6">Perguntas <span class="text-gradient">Frequentes</span></h1>
        <p class="text-xl text-gray-400">
          Tire suas dúvidas e veja como ajudamos você a acelerar a sua carreira na tecnologia.
        </p>
      </div>

      <div class="relative z-10">
        ${s.map((e,t)=>`
    <div class="glass-card rounded-xl border border-gray-700/50 mb-4 overflow-hidden">
      <button onclick="toggleFAQ(${t})" class="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-white/5 transition-colors">
        <span class="text-xl font-bold font-sans">${e.q}</span>
        <svg id="faq-icon-${t}" class="w-6 h-6 text-blue-400 transition-transform duration-300 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
      </button>
      <div id="faq-answer-${t}" class="px-6 pb-5 hidden">
        <div class="h-px w-full bg-gray-700/50 mb-4"></div>
        <p class="text-gray-300 leading-relaxed">${e.a}</p>
      </div>
    </div>
  `).join("")}
      </div>

      <div class="mt-16 text-center glass p-8 rounded-2xl border border-blue-500/20">
         <h3 class="text-2xl font-bold mb-3">Ainda tem alguma dúvida?</h3>
         <p class="text-gray-400 mb-6 max-w-xl mx-auto">Nossa equipe está pronta para ajudar você com qualquer problema ou questão. Fale com a gente através da nossa página de Contato.</p>
         <button onclick="navigate('/contato')" class="bg-blue-600 hover:bg-blue-500 text-white px-8 py-3 rounded-full font-bold transition-all inline-flex items-center gap-2">
            Fale Conosco
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path></svg>
         </button>
      </div>
    </section>
  `}function v(){return`
    <!-- Hero Section -->
    <section class="container mx-auto px-6 py-20 lg:py-32 flex flex-col lg:flex-row items-center gap-12 relative">
      <!-- Decorator Circles -->
      <div class="absolute top-1/4 -left-20 w-72 h-72 bg-blue-600 rounded-full mix-blend-multiply filter blur-[128px] opacity-60 animate-blob"></div>
      <div class="absolute top-1/3 -right-20 w-72 h-72 bg-purple-600 rounded-full mix-blend-multiply filter blur-[128px] opacity-60 animate-blob animation-delay-2000"></div>
      
      <div class="lg:w-1/2 flex flex-col items-start z-10 text-center lg:text-left">
        <span class="text-blue-400 font-bold uppercase tracking-widest mb-4">#ImpulsioneSeuFuturo</span>
        <h1 class="text-5xl lg:text-7xl font-extrabold mb-6 leading-tight">
          Sua Carreira <br />
          <span class="text-gradient">Pronta Para Decolar!</span>
        </h1>
        <p class="text-xl text-gray-300 mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed">
          Cursos de alta demanda em tecnologia, design e dados, com professores especialistas de grandes big techs.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center lg:justify-start">
          <button onclick="navigate('/cursos')" class="bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 px-10 rounded-full shadow-[0_0_20px_rgba(37,99,235,0.4)] hover:shadow-[0_0_40px_rgba(37,99,235,0.8)] transition-all transform hover:-translate-y-1 text-lg">
            Explorar Cursos
          </button>
          <button onclick="navigate('/faq')" class="glass hover:bg-white/10 text-white font-semibold py-4 px-10 rounded-full transition-all text-lg border border-gray-600">
            Como Funciona?
          </button>
        </div>
        
        <div class="mt-12 flex items-center justify-center lg:justify-start gap-6 border-t border-gray-700/50 pt-8 w-full">
          <div>
            <div class="text-3xl font-black text-white">+5Mil</div>
            <div class="text-gray-400 text-sm">Alunos Formados</div>
          </div>
          <div class="w-px h-10 bg-gray-700/50"></div>
          <div>
            <div class="text-3xl font-black text-white">4.9/5</div>
            <div class="text-gray-400 text-sm">Avaliação Média</div>
          </div>
        </div>
      </div>
      
      <div class="lg:w-1/2 w-full z-10 relative mt-10 lg:mt-0 perspective">
        <div class="relative w-full aspect-square max-w-[500px] mx-auto xl:mr-0">
          <div class="absolute inset-0 bg-gradient-to-tr from-blue-600 to-purple-600 rounded-[3rem] rotate-3 opacity-20"></div>
          <div class="absolute inset-4 glass rounded-[2.5rem] overflow-hidden flex items-center justify-center border-white/10 border-2">
            <img class="w-full h-full object-cover opacity-90 mix-blend-screen" src="https://images.unsplash.com/photo-1573164713988-8665fc963095?w=800&q=80" alt="Aluna programando satisfeito" />
            <div class="absolute bottom-6 left-6 right-6 glass p-4 rounded-xl flex items-center gap-4">
              <div class="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center text-green-400">
                 <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
              </div>
              <div>
                <div class="text-white font-bold">Certificado Garantido</div>
                <div class="text-gray-300 text-sm">Ao concluir todas as aulas</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    
    <!-- Features -->
    <section class="py-20 bg-gray-900 border-b border-gray-800">
      <div class="container mx-auto px-6">
        <div class="text-center mb-16">
          <span class="text-blue-400 font-bold uppercase tracking-widest mb-4 inline-block">Nossos Diferenciais</span>
          <h2 class="text-4xl font-extrabold mb-4">Por que escolher a <span class="text-gradient">Decola?</span></h2>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div class="glass-card p-10 rounded-3xl border border-gray-700 hover:border-blue-500/50 transition-colors">
            <div class="w-16 h-16 bg-blue-600/20 text-blue-400 rounded-2xl flex items-center justify-center mb-6">
              <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg>
            </div>
            <h3 class="text-xl font-bold mb-3">100% Prático</h3>
            <p class="text-gray-400">Chega de teoria maçante. Nossos projetos são baseados em problemas reais das empresas, preparando você para o mercado desde a primeira aula.</p>
          </div>
          <div class="glass-card p-10 rounded-3xl border border-gray-700 hover:border-purple-500/50 transition-colors">
            <div class="w-16 h-16 bg-purple-600/20 text-purple-400 rounded-2xl flex items-center justify-center mb-6">
              <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
            </div>
            <h3 class="text-xl font-bold mb-3">Comunidade Ativa</h3>
            <p class="text-gray-400">Networking é chave. Aprenda junto com milhares de alunos e tire dúvidas diretamente com nossos mentores especialistas via Discord.</p>
          </div>
          <div class="glass-card p-10 rounded-3xl border border-gray-700 hover:border-green-500/50 transition-colors">
            <div class="w-16 h-16 bg-green-500/20 text-green-400 rounded-2xl flex items-center justify-center mb-6">
              <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
            </div>
            <h3 class="text-xl font-bold mb-3">Empregabilidade</h3>
            <p class="text-gray-400">Conectamos os melhores alunos com nosso pool de empresas parceiras. Seu currículo ganha um peso extra para entrevistas difíceis.</p>
          </div>
        </div>
      </div>
    </section>
  

    <!-- Trending Courses Section -->
    <section class="py-20 bg-gray-900/50 border-y border-gray-800 relative">
      <div class="container mx-auto px-6 z-10 relative">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-extrabold mb-4">Cursos em <span class="text-blue-400">Destaque</span></h2>
          <p class="text-gray-400 max-w-2xl mx-auto">Os treinamentos mais populares do momento. Dê o primeiro passo para o próximo nível.</p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          ${n.slice(0,3).map(t=>`
    <div class="glass-card rounded-2xl overflow-hidden hover:scale-105 transition-all duration-300 group cursor-pointer" onclick="navigate('/${t.slug}')">
      <div class="relative h-48 overflow-hidden">
        <img src="${t.image}" alt="${t.title}" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
        <div class="absolute top-4 left-4 bg-brand-primary text-xs font-bold px-3 py-1 rounded-full text-white uppercase tracking-wide">
          ${t.category}
        </div>
      </div>
      <div class="p-6">
        <h3 class="text-xl font-bold mb-2 group-hover:text-blue-400 transition-colors">${t.title}</h3>
        <p class="text-gray-400 text-sm mb-4 line-clamp-2">${t.description}</p>
        <div class="flex items-center justify-between text-sm">
          <span class="flex items-center gap-1 text-gray-300"><svg class="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg> 4.9</span>
          <span class="text-blue-400 font-bold">${t.price}</span>
        </div>
      </div>
    </div>
  `).join("")}
        </div>
        
        <div class="text-center mt-12">
          <button onclick="navigate('/cursos')" class="glass hover:bg-blue-600/20 text-white font-semibold py-3 px-8 rounded-full transition-all inline-flex items-center gap-2 border border-blue-500/50">
            Ver Todos os Cursos
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
          </button>
        </div>
      </div>
    </section>

    
    <!-- Testimonials -->
    <section class="py-20 relative bg-gray-900/50 border-y border-gray-800">
      <div class="container mx-auto px-6">
        <h2 class="text-4xl font-extrabold mb-12 text-center">O que nossos alunos <span class="text-blue-400">dizem</span></h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div class="glass p-8 rounded-2xl border border-gray-700 relative hover:-translate-y-2 transition-transform duration-300">
            <svg class="w-12 h-12 text-gray-700/50 absolute top-4 left-4" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"></path></svg>
            <p class="text-gray-300 italic mb-6 relative z-10 font-light text-lg">"A plataforma é incrível! Em menos de 6 meses estudando Front-End, consegui minha primeira vaga como Desenvolvedora Júnior. Os projetos práticos são exatamente o diferencial que eu precisava para brilhar."</p>
            <div class="flex items-center gap-4">
              <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop" class="w-12 h-12 rounded-full border-2 border-blue-500" alt="Avatar"/>
              <div>
                <h4 class="font-bold text-white">Juliana Moraes</h4>
                <p class="text-gray-500 text-sm">Desenvolvedora Front-End</p>
              </div>
            </div>
          </div>
          <div class="glass p-8 rounded-2xl border border-gray-700 relative hover:-translate-y-2 transition-transform duration-300">
            <svg class="w-12 h-12 text-gray-700/50 absolute top-4 left-4" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"></path></svg>
            <p class="text-gray-300 italic mb-6 relative z-10 font-light text-lg">"O curso de UI/UX abriu a minha mente para criar interfaces que as pessoas realmente gostam de usar. Todo o conteúdo sobre Design System mudou a minha rotina profissional por completo."</p>
            <div class="flex items-center gap-4">
              <img src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=100&h=100&fit=crop" class="w-12 h-12 rounded-full border-2 border-blue-500" alt="Avatar"/>
              <div>
                <h4 class="font-bold text-white">Fernando Costa</h4>
                <p class="text-gray-500 text-sm">UI/UX Designer Pleno</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  

    ${g()}
  `}function h(){return`
    <section class="container mx-auto px-6 py-12 lg:py-20 relative">
      <!-- Title Area -->
      <div class="text-center mb-16 relative z-10">
        <h1 class="text-5xl lg:text-6xl font-extrabold mb-6">Explore o nosso <br/><span class="text-gradient">Catálogo de Cursos</span></h1>
        <p class="text-xl text-gray-400 max-w-2xl mx-auto">
          Cursos práticos, direto ao ponto e atualizados com as exigências do mercado para você dominar sua profissão.
        </p>
      </div>

      <!-- Filters Base (Visual Only for Demo) -->
      <div class="flex flex-wrap justify-center gap-4 mb-12">
         <button class="bg-blue-600 text-white px-6 py-2 rounded-full font-semibold">Todos</button>
         <button class="glass hover:bg-white/10 text-gray-300 px-6 py-2 rounded-full font-semibold transition-colors">Programação</button>
         <button class="glass hover:bg-white/10 text-gray-300 px-6 py-2 rounded-full font-semibold transition-colors">Design</button>
         <button class="glass hover:bg-white/10 text-gray-300 px-6 py-2 rounded-full font-semibold transition-colors">Dados</button>
      </div>
      
      <!-- Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        ${n.map(o=>`
    <div class="glass-card rounded-2xl overflow-hidden hover:scale-[1.02] transition-all duration-300 group flex flex-col h-full border border-gray-700 hover:border-blue-500/50">
      <div class="relative h-56 overflow-hidden">
        <img src="${o.image}" alt="${o.title}" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" loading="lazy" />
        <div class="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-80"></div>
        <div class="absolute top-4 right-4 bg-gray-900/80 backdrop-blur-sm text-xs font-bold px-3 py-1 rounded border border-gray-700 text-gray-300 flex items-center gap-1">
          <svg class="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
          ${o.hours}
        </div>
        <div class="absolute bottom-4 left-4">
          <span class="bg-blue-600 text-xs font-bold px-3 py-1 rounded-full text-white uppercase tracking-wide">
            ${o.category}
          </span>
        </div>
      </div>
      
      <div class="p-6 flex-1 flex flex-col">
        <h3 class="text-2xl font-bold mb-3 group-hover:text-blue-400 transition-colors">${o.title}</h3>
        <p class="text-gray-400 text-sm mb-6 flex-1">${o.description}</p>
        
        <div class="flex items-center justify-between mt-auto pt-4 border-t border-gray-800">
          <div class="flex flex-col">
             <span class="text-xs text-gray-500 uppercase font-semibold">Investimento</span>
             <span class="text-blue-400 font-extrabold text-xl">${o.price}</span>
          </div>
          <button onclick="navigate('/${o.slug}')" class="bg-blue-600/10 hover:bg-blue-600 text-blue-400 hover:text-white font-bold py-2 px-6 rounded-lg transition-colors border border-blue-600/30">
            Detalhes
          </button>
        </div>
      </div>
    </div>
  `).join("")}
      </div>
    </section>
  `}function f(s){const o=s.get("slug"),e=p(o);if(!e)return`
      <section class="container mx-auto px-6 py-24 text-center">
        <h2 class="text-4xl font-bold mb-4">Curso não encontrado</h2>
        <p class="text-gray-400 mb-8">O curso que você procura não existe ou foi removido.</p>
        <button onclick="navigate('/cursos')" class="bg-blue-600 px-6 py-3 rounded-full text-white font-bold">Voltar aos Cursos</button>
      </section>
    `;const t=e.modules.map((a,r)=>`
    <div class="glass p-5 mb-4 rounded-xl flex items-center gap-4 hover:bg-gray-800/50 transition-colors">
       <div class="w-10 h-10 rounded-full bg-blue-600/20 text-blue-400 flex items-center justify-center font-bold border border-blue-500/30">
          ${r+1}
       </div>
       <div class="flex-1">
          <h4 class="text-lg font-bold text-gray-200">${a}</h4>
       </div>
       <svg class="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>
    </div>
  `).join("");return`
    <!-- Top Hero Image -->
    <div class="relative w-full h-[40vh] min-h-[400px]">
       <img src="${e.image}" alt="${e.title}" class="w-full h-full object-cover" />
       <div class="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/80 to-transparent"></div>
       <div class="absolute bottom-0 w-full left-0 p-6 lg:p-12 pb-16 z-10">
          <div class="container mx-auto">
             <div class="flex items-center gap-3 mb-4">
                <span class="bg-blue-600 text-xs font-bold px-3 py-1 rounded-full uppercase text-white">${e.category}</span>
                <span class="bg-gray-800/80 backdrop-blur border border-gray-600 text-xs font-bold px-3 py-1 rounded-full uppercase text-gray-300 flex items-center gap-1">
                  <svg class="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                  ${e.hours}
                </span>
             </div>
             <h1 class="text-4xl lg:text-6xl font-extrabold text-white mb-4 line-clamp-2">${e.title}</h1>
             <p class="text-xl text-gray-300 max-w-2xl">${e.description}</p>
          </div>
       </div>
    </div>

    <section class="container mx-auto px-6 py-12 relative -mt-10 lg:-mt-24 z-20">
       <div class="flex flex-col lg:flex-row gap-8">
          
          <!-- Content Left -->
          <div class="lg:w-2/3">
             <div class="glass-card rounded-2xl p-8 mb-8 backdrop-blur-xl border border-gray-700">
                <h3 class="text-2xl font-bold mb-6 flex items-center gap-2">
                   <svg class="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 10h16M4 14h16M4 18h16"></path></svg>
                   Grade Curricular
                </h3>
                <div class="space-y-2">
                   ${t}
                </div>
             </div>

             <div class="glass-card rounded-2xl p-8 backdrop-blur-xl border border-gray-700">
                <h3 class="text-2xl font-bold mb-6 flex items-center gap-2">
                   <svg class="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
                   Seu Instrutor
                </h3>
                <div class="flex items-center gap-6">
                   <div class="w-20 h-20 rounded-full bg-gradient-to-tr from-blue-500 to-purple-500 p-1">
                      <div class="w-full h-full bg-gray-900 rounded-full flex items-center justify-center font-bold text-2xl">${e.instructor.charAt(0)}</div>
                   </div>
                   <div>
                      <h4 class="text-xl font-bold text-white">${e.instructor}</h4>
                      <p class="text-gray-400">Especialista Sênior na Indústria</p>
                   </div>
                </div>
             </div>
          </div>

          <!-- Sidebar Right -->
          <div class="lg:w-1/3">
             <div class="glass-card rounded-2xl sticky top-32 p-8 border hover:border-blue-500/30 transition-colors bg-gray-900/90 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.5)]">
                <div class="text-center mb-6">
                   <p class="text-sm text-gray-400 uppercase font-semibold mb-2">Investimento</p>
                   <div class="text-5xl font-extrabold text-blue-400 mb-4">${e.price}</div>
                   <p class="text-gray-400 text-sm flex items-center justify-center gap-2">
                     <svg class="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd"></path></svg>
                     Pagamento 100% Seguro
                   </p>
                </div>
                
                <hr class="border-gray-700/50 mb-6" />
                
                <ul class="space-y-4 mb-8">
                   <li class="flex items-center gap-3 text-gray-300">
                      <svg class="w-5 h-5 text-blue-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                      Acesso vitalício
                   </li>
                   <li class="flex items-center gap-3 text-gray-300">
                      <svg class="w-5 h-5 text-blue-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                      Certificado de Conclusão (${e.hours})
                   </li>
                   <li class="flex items-center gap-3 text-gray-300">
                      <svg class="w-5 h-5 text-blue-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                      Suporte via Comunidade
                   </li>
                   <li class="flex items-center gap-3 text-gray-300">
                      <svg class="w-5 h-5 text-blue-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                      Projetos Práticos REAIS
                   </li>
                </ul>
                
                <button onclick="navigate('/checkout?slug=${e.slug}')" class="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 px-6 rounded-xl shadow-lg transition-all transform hover:-translate-y-1 hover:shadow-blue-500/30 text-lg uppercase tracking-wider mb-3">
                   Matricule-se Agora
                </button>
                <div class="text-center text-xs text-gray-500">
                   Garantia de satisfação de 7 dias. Se não gostar, devolvemos seu dinheiro.
                </div>
             </div>
          </div>
       </div>
    </section>
  `}function y(){return window.submitContato=function(s){s.preventDefault();const o=s.target,e=o.querySelector('button[type="submit"]'),t=e.innerHTML;e.innerHTML='<svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white inline-block" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg> Enviando...',setTimeout(()=>{e.classList.add("bg-green-600"),e.classList.remove("bg-blue-600","hover:bg-blue-500"),e.innerHTML='<svg class="w-5 h-5 inline-block mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg> Mensagem Enviada!',o.reset(),setTimeout(()=>{e.classList.remove("bg-green-600"),e.classList.add("bg-blue-600","hover:bg-blue-500"),e.innerHTML=t},3e3)},1500)},`
    <section class="container mx-auto px-6 py-20 lg:py-28 relative">
      <!-- Decorators -->
      <div class="absolute top-20 left-10 w-64 h-64 bg-purple-600 rounded-full mix-blend-multiply filter blur-[128px] opacity-40"></div>
      
      <div class="flex flex-col lg:flex-row gap-12 lg:items-center">
         
         <div class="lg:w-1/2 z-10">
            <h1 class="text-5xl font-extrabold mb-6 leading-tight">Vamos <span class="text-gradient">Conversar!</span></h1>
            <p class="text-xl text-gray-400 mb-10 max-w-lg">
               Sugerir novos cursos, relatar um problema ou apenas mandar um alô. Estamos super abertos pra te ouvir.
            </p>
            
            <div class="space-y-8">
               <div class="flex items-start gap-4">
                  <div class="w-12 h-12 glass rounded-full flex items-center justify-center text-blue-400 border border-blue-500/20 shrink-0">
                     <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                  </div>
                  <div>
                     <h4 class="text-lg font-bold">Email</h4>
                     <p class="text-gray-400">contato@decolacursos.com.br</p>
                     <p class="text-gray-400">decolacursos@hotmail.com</p>
                  </div>
               </div>
               
               <div class="flex items-start gap-4">
                  <div class="w-12 h-12 glass rounded-full flex items-center justify-center text-blue-400 border border-blue-500/20 shrink-0">
                     <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                  </div>
                  <div>
                     <h4 class="text-lg font-bold">Localização</h4>
                     <p class="text-gray-400">São Paulo, SP - Brasil<br/>Avenida Paulista, 1000</p>
                  </div>
               </div>
               
               <div class="flex items-start gap-4">
                  <div class="w-12 h-12 glass rounded-full flex items-center justify-center text-blue-400 border border-blue-500/20 shrink-0">
                     <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                  </div>
                  <div>
                     <h4 class="text-lg font-bold">Social</h4>
                     <div class="flex gap-4 mt-2">
                        <a href="#" class="text-gray-400 hover:text-blue-500 transition-colors">Instagram</a>
                        <a href="#" class="text-gray-400 hover:text-blue-500 transition-colors">Twitter X</a>
                        <a href="#" class="text-gray-400 hover:text-blue-500 transition-colors">LinkedIn</a>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         
         <div class="lg:w-1/2 z-10 w-full perspective">
            <div class="glass-card rounded-2xl p-8 lg:p-10 border hover:border-blue-500/30 transition-all duration-500 relative bg-gray-900/40 backdrop-blur-2xl">
               <!-- Abstract small glowing dot -->
               <div class="absolute top-2 right-2 w-1.5 h-1.5 bg-blue-500 rounded-full shadow-[0_0_10px_2px_rgba(59,130,246,0.8)] animate-pulse"></div>
               
               <h3 class="text-2xl font-bold mb-6 border-b border-gray-700/50 pb-4">Mande uma mensagem</h3>
               <form onsubmit="submitContato(event)" class="space-y-5">
                  <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
                     <div>
                        <label class="block text-sm font-semibold text-gray-300 mb-2">Seu Nome</label>
                        <input type="text" required class="w-full bg-gray-800/50 border border-gray-700 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all" placeholder="Nome completo" />
                     </div>
                     <div>
                        <label class="block text-sm font-semibold text-gray-300 mb-2">Seu E-mail</label>
                        <input type="email" required class="w-full bg-gray-800/50 border border-gray-700 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all" placeholder="email@exemplo.com" />
                     </div>
                  </div>
                  <div>
                     <label class="block text-sm font-semibold text-gray-300 mb-2">Assunto</label>
                     <select class="w-full bg-gray-800/50 border border-gray-700 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all appearance-none">
                        <option>Dúvida sobre Curso</option>
                        <option>Problemas de acesso</option>
                        <option>Sugestão</option>
                        <option>Outros</option>
                     </select>
                  </div>
                  <div>
                     <label class="block text-sm font-semibold text-gray-300 mb-2">Mensagem</label>
                     <textarea required rows="4" class="w-full bg-gray-800/50 border border-gray-700 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all resize-none" placeholder="Como podemos te ajudar?"></textarea>
                  </div>
                  <button type="submit" class="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 px-6 rounded-xl shadow-lg transition-all transform hover:-translate-y-1 mt-4 text-lg">
                     Enviar Mensagem
                  </button>
               </form>
            </div>
         </div>
      </div>
    </section>
  `}function w(s){const o=s.get("slug"),e=p(o);return e?(window.processCheckout=function(t){t.preventDefault();const r=t.target.querySelector('button[type="submit"]');r.innerHTML,r.innerHTML='<svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white inline-block" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg> Processando Pagamento...',setTimeout(()=>{app.innerHTML=`
                <div class="container mx-auto px-6 py-32 text-center max-w-2xl">
                    <div class="w-24 h-24 bg-green-500/20 text-green-400 rounded-full flex items-center justify-center mx-auto mb-8 border-4 border-green-500/50">
                        <svg class="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"></path></svg>
                    </div>
                    <h1 class="text-4xl font-extrabold mb-4">Pagamento Aprovado!</h1>
                    <p class="text-xl text-gray-400 mb-8">Sua matrícula foi confirmada com sucesso. Os dados de acesso já foram enviados para o seu e-mail.</p>
                    <button onclick="navigate('/')" class="bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 px-8 rounded-full transition-all">
                        Ir para a Plataforma de Aulas
                    </button>
                </div>
            `},2e3)},window.switchPaymentMethod=function(t){const a=document.getElementById("checkout-cc"),r=document.getElementById("checkout-pix"),l=document.getElementById("tab-cc"),i=document.getElementById("tab-pix");t==="cc"?(a.classList.remove("hidden"),r.classList.add("hidden"),l.classList.add("bg-blue-600","text-white","border-blue-500"),l.classList.remove("glass","text-gray-400","border-transparent"),i.classList.add("glass","text-gray-400","border-transparent"),i.classList.remove("bg-blue-600","text-white","border-blue-500")):(r.classList.remove("hidden"),a.classList.add("hidden"),i.classList.add("bg-blue-600","text-white","border-blue-500"),i.classList.remove("glass","text-gray-400","border-transparent"),l.classList.add("glass","text-gray-400","border-transparent"),l.classList.remove("bg-blue-600","text-white","border-blue-500"))},`
    <section class="container mx-auto px-6 py-12 lg:py-20 relative">
        <button onclick="window.history.back()" class="text-gray-400 hover:text-white mb-8 flex items-center gap-2 transition-colors">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
            Voltar
        </button>

        <div class="flex flex-col lg:flex-row gap-12 max-w-6xl mx-auto">
            
            <!-- Payment Area Left -->
            <div class="lg:w-2/3">
                <div class="mb-10">
                    <h1 class="text-4xl font-extrabold mb-2">Checkout Seguro</h1>
                    <p class="text-gray-400">Complete seus dados para finalizar a matrícula e acessar o curso imediatamente.</p>
                </div>

                <form onsubmit="processCheckout(event)" class="space-y-8">
                    <!-- Personal Info -->
                    <div class="glass-card rounded-2xl p-8 border border-gray-700">
                        <h3 class="text-xl font-bold mb-6 flex items-center gap-2 border-b border-gray-700 pb-4">
                            <span class="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-sm">1</span>
                            Dados Pessoais
                        </h3>
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
                            <div class="md:col-span-2">
                                <label class="block text-sm font-semibold text-gray-300 mb-2">Nome Completo</label>
                                <input type="text" required class="w-full bg-gray-900 border border-gray-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all" />
                            </div>
                            <div>
                                <label class="block text-sm font-semibold text-gray-300 mb-2">E-mail</label>
                                <input type="email" required class="w-full bg-gray-900 border border-gray-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all" />
                            </div>
                            <div>
                                <label class="block text-sm font-semibold text-gray-300 mb-2">CPF/CNPJ</label>
                                <input type="text" required class="w-full bg-gray-900 border border-gray-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all" />
                            </div>
                        </div>
                    </div>

                    <!-- Payment Method -->
                    <div class="glass-card rounded-2xl p-8 border border-gray-700">
                        <h3 class="text-xl font-bold mb-6 flex items-center gap-2 border-b border-gray-700 pb-4">
                            <span class="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-sm">2</span>
                            Forma de Pagamento
                        </h3>

                        <!-- Tabs -->
                        <div class="flex grid-cols-2 gap-4 mb-8">
                            <button type="button" id="tab-cc" onclick="switchPaymentMethod('cc')" class="flex-1 bg-blue-600 text-white border border-blue-500 rounded-xl py-4 font-bold flex flex-col items-center justify-center gap-2 transition-all">
                                <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"></path></svg>
                                Cartão de Crédito
                            </button>
                            <button type="button" id="tab-pix" onclick="switchPaymentMethod('pix')" class="flex-1 glass text-gray-400 border border-transparent rounded-xl py-4 font-bold flex flex-col items-center justify-center gap-2 hover:bg-white/5 transition-all">
                                <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path></svg>
                                PIX
                            </button>
                        </div>

                         <!-- Credit Card Form -->
                        <div id="checkout-cc" class="space-y-5 animate-fade-in">
                            <div class="md:col-span-2">
                                <label class="block text-sm font-semibold text-gray-300 mb-2">Número do Cartão</label>
                                <input type="text" placeholder="0000 0000 0000 0000" class="w-full bg-gray-900 border border-gray-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all font-mono" />
                            </div>
                            <div class="md:col-span-2">
                                <label class="block text-sm font-semibold text-gray-300 mb-2">Nome Impresso no Cartão</label>
                                <input type="text" class="w-full bg-gray-900 border border-gray-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all uppercase" />
                            </div>
                            <div class="grid grid-cols-2 gap-5">
                                <div>
                                    <label class="block text-sm font-semibold text-gray-300 mb-2">Validade</label>
                                    <input type="text" placeholder="MM/AA" class="w-full bg-gray-900 border border-gray-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all font-mono" />
                                </div>
                                <div>
                                    <label class="block text-sm font-semibold text-gray-300 mb-2">CVV</label>
                                    <input type="text" placeholder="123" class="w-full bg-gray-900 border border-gray-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all font-mono" />
                                </div>
                            </div>
                            <div>
                                <label class="block text-sm font-semibold text-gray-300 mb-2">Parcelas</label>
                                <select class="w-full bg-gray-900 border border-gray-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all appearance-none cursor-pointer">
                                    <option>1x (Sem juros)</option>
                                    <option>2x (Sem juros)</option>
                                    <option>3x (Sem juros)</option>
                                    <option>4x (Sem juros)</option>
                                    <option>5x (Sem juros)</option>
                                    <option>6x (Sem juros)</option>
                                    <option>7x (Sem juros)</option>
                                    <option>8x (Sem juros)</option>
                                    <option>9x (Sem juros)</option>
                                    <option>10x (Sem juros)</option>
                                    <option>11x (Sem juros)</option>
                                    <option>12x (Sem juros)</option>
                                </select>
                            </div>
                        </div>

                         <!-- PIX Form (Hidden by default) -->
                         <div id="checkout-pix" class="hidden animate-fade-in text-center py-6">
                            <div class="w-16 h-16 bg-green-500/20 text-green-400 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                            </div>
                            <h4 class="text-xl font-bold mb-2 text-white">Pagamento via PIX Selecionado</h4>
                            <p class="text-gray-400 mb-6 text-sm">Aprovação imediata. O QR Code e a chave Copy/Paste serão gerados logo após clicar em "Finalizar Compra".</p>
                            
                            <div class="bg-gray-900 border border-gray-700 rounded-xl flex items-center p-3 mt-4 text-left">
                               <svg class="w-5 h-5 text-gray-500 mr-3 shrink-0" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"></path></svg>
                               <span class="text-xs text-gray-400">Você tem até 30 minutos para pagar o PIX após gerado. A liberação do curso é automática.</span>
                            </div>
                         </div>
                    </div>

                    <button type="submit" class="w-full bg-green-600 hover:bg-green-500 text-white font-extrabold py-5 px-6 rounded-2xl shadow-[0_0_20px_rgba(22,163,74,0.3)] hover:shadow-[0_0_30px_rgba(22,163,74,0.5)] transition-all transform hover:-translate-y-1 text-xl flex items-center justify-center gap-2">
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>
                        Finalizar Compra Agora
                    </button>
                    <div class="text-center mt-4 text-gray-500 text-sm flex items-center justify-center gap-1">
                       <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd"></path></svg>
                       Ambiente 100% criptografado de ponta-a-ponta
                    </div>
                </form>
            </div>

            <!-- Order Summary Right -->
            <div class="lg:w-1/3">
                <div class="glass-card rounded-2xl p-6 border border-gray-700 sticky top-32 bg-gray-900/80">
                    <h3 class="text-lg font-bold mb-4 border-b border-gray-800 pb-3">Resumo do Pedido</h3>
                    
                    <div class="flex gap-4 mb-6">
                        <div class="w-20 h-20 bg-gray-800 rounded-lg overflow-hidden shrink-0">
                            <img src="${e.image}" class="w-full h-full object-cover" alt="Capa do curso">
                        </div>
                        <div>
                            <h4 class="font-bold text-sm text-gray-200 line-clamp-2">${e.title}</h4>
                            <p class="text-xs text-gray-500 mt-1">Plano vitalício + Certificado (${e.hours})</p>
                        </div>
                    </div>

                    <div class="space-y-3 text-sm border-b border-gray-800 pb-4 mb-4">
                        <div class="flex justify-between text-gray-400">
                            <span>Preço original</span>
                            <span class="line-through">R$ ${(parseFloat(e.price.replace("R$ ","").replace(",","."))*1.5).toLocaleString("pt-BR",{minimumFractionDigits:2,maximumFractionDigits:2})}</span>
                        </div>
                        <div class="flex justify-between text-green-400 font-semibold">
                            <span>Desconto de aluno</span>
                            <span>- R$ ${(parseFloat(e.price.replace("R$ ","").replace(",","."))*.5).toLocaleString("pt-BR",{minimumFractionDigits:2,maximumFractionDigits:2})}</span>
                        </div>
                    </div>

                    <div class="flex justify-between items-center mb-6">
                        <span class="font-bold">Total a Pagar</span>
                        <span class="text-2xl font-extrabold text-blue-400">${e.price}</span>
                    </div>

                    <div class="bg-gray-800/50 rounded-lg p-4 text-xs text-gray-400 border border-gray-800">
                        <span class="font-bold text-gray-300 block mb-1">Garantia Incondicional</span>
                        Se em até 7 dias você achar que o curso não é para você, basta pedir o reembolso enviando um e-mail. Devolvemos 100% do seu dinheiro.
                    </div>
                </div>
            </div>

        </div>
    </section>
    `):`
       <section class="container mx-auto px-6 py-24 text-center">
         <h2 class="text-4xl font-bold mb-4">Carrinho Vazio</h2>
         <p class="text-gray-400 mb-8">Nenhum curso foi selecionado para compra.</p>
         <button onclick="navigate('/cursos')" class="bg-blue-600 px-6 py-3 rounded-full text-white font-bold">Voltar aos Cursos</button>
       </section>
     `}const b=document.getElementById("app"),m={"/":v,"/cursos":h,"/curso-detalhes":f,"/checkout":w,"/faq":g,"/contato":y};let c="";function d(){let s=window.location.pathname;s.length>1&&s.endsWith("/")&&(s=s.slice(0,-1)),s.endsWith("index.html")&&(s=s.replace("/index.html",""),s===""&&(s="/"));let[o]=s.split("?");const e=new URLSearchParams(window.location.search),t=o.split("/").filter(Boolean);t.length>0&&t[0]==="decola"&&t.shift();let a="/";t.length>0&&(a="/"+t[0],m[a]||(a="/curso-detalhes",e.set("slug",t[0])));const r=window.location.pathname+window.location.search;if(c===r)return;c=r;const l=document.querySelector(".page");l?(l.classList.remove("active-visible"),setTimeout(()=>{b.innerHTML="",u(a,e)},300)):u(a,e)}function u(s,o){const e=document.createElement("div");e.className="page flex-1 flex flex-col w-full";const t=m[s](o);e.innerHTML=t,b.appendChild(e),e.offsetWidth,e.classList.add("active","active-visible"),window.scrollTo({top:0,behavior:"instant"})}window.addEventListener("popstate",d);window.addEventListener("load",d);document.addEventListener("click",s=>{const o=s.target.closest("a.router-link");if(o){s.preventDefault();const e=o.getAttribute("href");navigate(e)}});const k=document.getElementById("mobile-menu-btn"),x=document.getElementById("mobile-menu");k.addEventListener("click",()=>{x.classList.toggle("hidden")});document.querySelectorAll(".router-link, #mobile-menu a").forEach(s=>{s.addEventListener("click",()=>{x.classList.add("hidden")})});window.navigate=function(s){let o=s;const e=window.location.hostname==="localhost"||window.location.hostname==="127.0.0.1";if(o.startsWith("/")){const t=window.location.pathname;!e&&t.includes("/decola")&&(o="/decola"+o)}else o="/"+o;window.history.pushState({},"",o),d()};
