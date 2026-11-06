# 📚 Central de Documentação & Skills

Este diretório contém guias práticos, playbooks de aplicação para vagas de alto nível (FAANG / Big Tech / Global Tech) e instruções de uso das ferramentas de IA integradas ao projeto.

---

## 🗂️ Documentos Disponíveis

- **[Roadmap de Aplicação & Carreira (`roadmap.md`)](roadmap.md)**:  
  O fluxo passo a passo em 5 fases (Fundação, Customização, Outreach, Entrevistas e Negociação Salarial) desenhado para maximizar a conversão de vagas sênior.

- **[Guia de Uso das Skills (`how-to-use-skills.md`)](how-to-use-skills.md)**:  
  Manual detalhado com exemplos de prompts, entradas necessárias e casos de uso reais para cada uma das **12 skills de IA** instaladas na pasta [`.agent/skills/`](../.agent/skills/).

---

## ⚡ Como o Ecossistema Funciona

```
resume-updater/
├── .agent/skills/              # 12 AI Skills prontas para uso no chat
├── .github/workflows/          # Automação de compilação de PDFs via GitHub Actions
├── curriculum/
│   ├── resume_en-us.md         # Currículo Master em Inglês (FAANG-ready)
│   ├── resume_pt-br.md         # Currículo Master em Português
│   ├── resume_en-us.pdf        # PDF compilado automaticamente
│   └── resume_pt-br.pdf        # PDF compilado automaticamente
├── docs/                       # Este diretório de documentação
│   ├── README.md               # Índice da documentação
│   ├── roadmap.md              # Roadmap de carreira e aplicação
│   └── how-to-use-skills.md    # Manual de prompts e workflows das skills
├── scripts/
│   └── generate-pdf.mjs        # Script Node/Puppeteer de geração de PDFs
└── README.md                   # Perfil público do GitHub
```

---

## 🚀 Próximos Passos Recomendados

1. Leia o **[Roadmap](roadmap.md)** para entender a ordem ideal de preparação.
2. Utilize o **[Guia de Uso das Skills](how-to-use-skills.md)** como referência rápida durante as conversas com o assistente de IA.
