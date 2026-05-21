# PortGen — Gerador de Portfólio Profissional

> Ferramenta gratuita, 100% no navegador, sem código e sem cadastro.

**PortGen** é uma aplicação web que guia o usuário por um wizard de 11 etapas para preencher suas informações profissionais e, ao final, gera automaticamente um site de portfólio completo (HTML/CSS/JS) pronto para ser publicado — além de um currículo otimizado para ATS em arquivo separado.

---

## ✨ Funcionalidades

- **Wizard multi-etapas** com 11 passos e barra de progresso interativa
- **Dois layouts de portfólio**: Landing Page (âncoras) ou Multi-página (navegação por seções)
- **Temas claro, escuro ou ambos** (com toggle no portfólio gerado)
- **Portfólio multilíngue**: Português, Inglês, Espanhol e Francês em um único arquivo HTML
- **Paleta de cores personalizada** com seletor de matiz HSL e 6 harmonias cromáticas (análoga, complementar, tríade, quadrada, dividida e monocromática)
- **Currículo ATS incluso**: gerado junto com o portfólio, otimizado para sistemas de rastreamento de candidatos, com botão de impressão para PDF
- **Upload de foto de perfil** com suporte a drag & drop
- **Autocomplete de localização** via API Nominatim (OpenStreetMap)
- **Dropdown DDI automático** para código de país do telefone
- **Tag chips com autocomplete** para habilidades técnicas, soft skills, idiomas e tecnologias de projetos
- **Reordenação por drag & drop** nos cards de formação, experiência, projetos e certificados
- **Interface do wizard em 4 idiomas** (PT, EN, ES, FR) com troca em tempo real
- **Tema claro/escuro** na própria ferramenta, com persistência via `localStorage`
- **Scroll reveal** com `IntersectionObserver` na landing page
- **Privacidade total**: nenhum dado sai do dispositivo do usuário

---

## 🗂️ Estrutura do Projeto

```
portgen/
├── index.html   # Estrutura da página: header, landing page e wizard com 11 steps
├── style.css    # Estilos da ferramenta: design system com CSS variables, temas, animações
├── app.js       # Toda a lógica: i18n, wizard, geração do portfólio HTML e currículo
└── README.md
```

---

## 🛠️ Tecnologias Utilizadas

### Linguagens
| Tecnologia | Uso |
|---|---|
| HTML5 | Estrutura semântica da ferramenta |
| CSS3 | Estilização com CSS Custom Properties, Flexbox, Grid, animações e media queries |
| JavaScript (ES2020+) | Toda a lógica da aplicação, sem frameworks |

### APIs e Serviços Externos
| Serviço | Finalidade |
|---|---|
| [Google Fonts](https://fonts.google.com) | Tipografia — `Bricolage Grotesque` (títulos) e `Plus Jakarta Sans` (corpo) |
| [Nominatim / OpenStreetMap](https://nominatim.org) | Autocomplete de localização geográfica |

### APIs nativas do navegador
| API | Uso |
|---|---|
| `FileReader` | Leitura da foto de perfil em base64 |
| `IntersectionObserver` | Scroll reveal na landing page e detecção de seção ativa |
| `Blob` + `URL.createObjectURL` | Geração e abertura do portfólio HTML em nova aba |
| `localStorage` | Persistência do tema escolhido pelo usuário |
| `fetch` | Requisições à API Nominatim para autocomplete de cidades |
| Drag & Drop (Mouse/Touch Events) | Reordenação dos cards no wizard |

---

## 🎨 Design System (CSS)

O arquivo `style.css` utiliza CSS Custom Properties para suportar temas claro e escuro de forma consistente:

```css
/* Tema escuro */
[data-theme="dark"] {
  --bg: #0b0f1a;
  --surface: #1a2030;
  --text: #e8edf5;
  --accent: #2563a8;
}

/* Tema claro */
[data-theme="light"] {
  --bg: #f0f4f9;
  --surface: #e4ecf5;
  --text: #0d1520;
}
```

---

## ⚙️ Como Usar

Por ser uma aplicação puramente client-side (HTML + CSS + JS estático), não há dependências ou instalação necessária.

**Localmente:**
1. Clone ou baixe os arquivos do repositório
2. Abra o `index.html` diretamente no navegador

**Online (publicação recomendada):**
- [GitHub Pages](https://pages.github.com): faça push para um repositório e ative o GitHub Pages no branch `main`
- [Vercel](https://vercel.com): importe o repositório e faça deploy com um clique
- [Netlify](https://netlify.com): arraste a pasta do projeto na interface do Netlify

---

## 📄 O que o PortGen Gera

Ao concluir o wizard, dois arquivos são abertos:

### 1. Portfólio (`index.html` do usuário)
- Design responsivo com as cores personalizadas pelo usuário
- Seções: Hero, Sobre, Formação, Experiência, Projetos, Habilidades, Certificados e Contato
- Suporte a múltiplos idiomas com botão de troca dinâmica
- Toggle de tema claro/escuro (se configurado)
- Layout Landing Page ou Multi-página conforme escolha

### 2. Currículo (ATS-Optimized)
- Documento HTML clean e minimalista, otimizado para leitura por sistemas ATS
- Inclui: dados de contato, resumo profissional, habilidades, experiência, formação, projetos, certificados e idiomas
- Botão de impressão para gerar PDF diretamente pelo navegador

---

## 🌐 Internacionalização (i18n)

Tanto a interface da ferramenta quanto o portfólio gerado suportam 4 idiomas:

| Idioma | Código | Cobertura |
|---|---|---|
| Português | `pt` | Interface + portfólio (padrão) |
| English | `en` | Interface + portfólio |
| Español | `es` | Interface + portfólio |
| Français | `fr` | Interface + portfólio |

A troca de idioma na ferramenta é feita via dropdown no header e atualiza todos os labels, placeholders, títulos e botões em tempo real, sem recarregar a página.

---

## 👤 Autor

**Thony Barreto** — CESAR School · Turma 2026.1 - B
