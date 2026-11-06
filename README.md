# 📄 Resume Updater & Career AI Toolkit

Repositório de gerenciamento, otimização e compilação automatizada de currículos (Inglês e Português) de **Marcos W. Ferreira**, integrado com **12 AI Agent Skills** voltadas para processos seletivos de alta exigência (Big Tech, FAANG e empresas globais).

[![Resume (EN - Markdown)](https://img.shields.io/badge/Resume_(EN)-Markdown-007ACC?style=flat-square&logo=markdown&logoColor=white)](curriculum/resume.md)
[![Resume (EN - PDF)](https://img.shields.io/badge/Resume_(EN)-PDF-E53935?style=flat-square&logo=adobeacrobatreader&logoColor=white)](curriculum/resume.pdf)
[![Currículo (PT - Markdown)](https://img.shields.io/badge/Curr%C3%ADculo_(PT)-Markdown-2ea44f?style=flat-square&logo=markdown&logoColor=white)](curriculum/curriculo_pt.md)
[![Currículo (PT - PDF)](https://img.shields.io/badge/Curr%C3%ADculo_(PT)-PDF-E53935?style=flat-square&logo=adobeacrobatreader&logoColor=white)](curriculum/curriculo_pt.pdf)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Marcos_W._Ferreira-0A66C2?style=flat-square&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/marcoswferreira)

---

## ✨ Visão Geral

Este projeto combina **Currículo como Código (Resume-as-Code)** com um ecossistema de **Skills de Inteligência Artificial** para cobrir todas as etapas de evolução de carreira:

1. **Fonte Única da Verdade em Markdown:** Currículos mantidos em Markdown limpo e versionado via Git ([`curriculum/resume.md`](curriculum/resume.md) e [`curriculum/curriculo_pt.md`](curriculum/curriculo_pt.md)).
2. **Geração Automatizada de PDF (Local & CI/CD):** Conversão de Markdown para PDF formato A4 com tipografia executiva e compatível com sistemas ATS via **Marked** + **Puppeteer** ([`scripts/generate-pdf.mjs`](scripts/generate-pdf.mjs)) e **GitHub Actions** ([`.github/workflows/generate-pdf.yml`](.github/workflows/generate-pdf.yml)).
3. **12 Skills de IA Integradas:** Conjunto de skills em [`.agent/skills/`](.agent/skills/) para auditoria ATS, reescrita de bullets (fórmula X-Y-Z), adaptação cirúrgica por vaga, preparação de entrevistas (STAR / System Design), otimização de LinkedIn e negociação salarial.

---

## 🗂️ Estrutura do Projeto

```text
resume-updater/
├── .agent/
│   └── skills/                     # 12 AI Agent Skills para carreira e currículo
│       ├── cold-email-writer/
│       ├── cover-letter-generator/
│       ├── interview-prep-generator/
│       ├── job-description-analyzer/
│       ├── linkedin-profile-optimizer/
│       ├── resume-ats-optimizer/
│       ├── resume-bullet-writer/
│       ├── resume-quantifier/
│       ├── resume-tailor/
│       ├── resume-version-manager/
│       ├── salary-negotiation-prep/
│       └── tech-resume-optimizer/
├── .github/
│   └── workflows/
│       └── generate-pdf.yml        # Pipeline CI/CD para gerar e commitar os PDFs
├── curriculum/
│   ├── resume.md                   # Currículo Master em Inglês
│   ├── resume.pdf                  # PDF gerado automaticamente (EN)
│   ├── curriculo_pt.md             # Currículo Master em Português
│   └── curriculo_pt.pdf            # PDF gerado automaticamente (PT-BR)
├── docs/
│   ├── README.md                   # Central de documentação
│   ├── roadmap.md                  # Roadmap de aplicação em 5 fases (FAANG / Global Tech)
│   └── how-to-use-skills.md        # Guia prático de prompts e uso das 12 skills
├── scripts/
│   └── generate-pdf.mjs            # Script Node.js + Puppeteer para renderização dos PDFs
└── package.json
```

---

## 🚀 Como Usar

### Pré-requisitos

- **Node.js** `v20+`
- **npm**

### 1. Instalar dependências

```bash
npm install
```

### 2. Gerar os PDFs localmente

Sempre que atualizar [`curriculum/resume.md`](curriculum/resume.md) ou [`curriculum/curriculo_pt.md`](curriculum/curriculo_pt.md), execute:

```bash
npm run build:pdf
```

O script [scripts/generate-pdf.mjs](scripts/generate-pdf.mjs) irá:
- Remover blocos visuais exclusivos do GitHub (como o seletor de idiomas em HTML);
- Converter o Markdown para HTML estilizado com CSS otimizado para impressão A4;
- Renderizar via **Puppeteer** os arquivos [`curriculum/resume.pdf`](curriculum/resume.pdf) e [`curriculum/curriculo_pt.pdf`](curriculum/curriculo_pt.pdf).

### 3. Automação via GitHub Actions

Ao fazer push na branch `main` alterando arquivos em `curriculum/**.md` ou `scripts/**`, o workflow [`.github/workflows/generate-pdf.yml`](.github/workflows/generate-pdf.yml) compila automaticamente os novos PDFs, faz o commit de volta no repositório e publica os artefatos da execução.

---

## 🤖 AI Skills Disponíveis

As skills ficam em [`.agent/skills/`](.agent/skills/) e são carregadas automaticamente pelo assistente de IA no workspace:

| Skill | Objetivo Principal |
| :--- | :--- |
| **`tech-resume-optimizer`** | Otimização de currículos para Engenharia de Software, Arquitetura e Sistemas Distribuídos |
| **`resume-ats-optimizer`** | Auditoria de compatibilidade com robôs de triagem (Greenhouse, Lever, Workday) |
| **`resume-bullet-writer`** | Transformação de tarefas em conquistas de alto impacto usando a fórmula X-Y-Z |
| **`resume-quantifier`** | Descoberta e estimativa estruturada de métricas de engenharia e negócio |
| **`resume-tailor`** | Customização cirúrgica do currículo para uma vaga específica mantendo fidelidade |
| **`job-description-analyzer`** | Análise de requisitos, cálculo de Match Score (%) e identificação de gaps |
| **`linkedin-profile-optimizer`** | Otimização de Headline, About e experiências para SEO do LinkedIn Recruiter |
| **`interview-prep-generator`** | Criação de histórias no formato STAR e perguntas técnicas / System Design |
| **`salary-negotiation-prep`** | Estratégia de negociação salarial, cálculo de Total Compensation e scripts de contraproposta |
| **`cold-email-writer`** | Redação de mensagens diretas e personalizadas para Hiring Managers e Tech Leads |
| **`cover-letter-generator`** | Criação de cartas de apresentação conectando experiência técnica aos desafios da vaga |
| **`resume-version-manager`** | Organização e governança do currículo master e suas versões customizadas |

---

## 📚 Documentação Complementar

- 📖 **[Central de Documentação (`docs/README.md`)](docs/README.md)** — Visão geral do ecossistema de documentação.
- 🗺️ **[Roadmap de Carreira & Aplicação (`docs/roadmap.md`)](docs/roadmap.md)** — Estratégia passo a passo em 5 fases (Fundação, Customização, Outreach, Entrevistas e Negociação).
- 🛠️ **[Guia de Uso das Skills (`docs/how-to-use-skills.md`)](docs/how-to-use-skills.md)** — Exemplos práticos de prompts, entradas e entregáveis de cada skill.
