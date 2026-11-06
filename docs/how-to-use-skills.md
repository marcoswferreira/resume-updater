# 📖 Guia de Uso das Skills (`How-to-Use`)

Este guia detalha como acionar e extrair o máximo valor de cada uma das **12 skills** instaladas na pasta [`.agent/skills/`](.agent/skills).

Como as skills estão nativamente registradas no seu workspace, basta conversar com o agente no chat usando os comandos ou intenções descritas abaixo.

---

## 📑 Índice Rápido

1. [tech-resume-optimizer](#1-tech-resume-optimizer)
2. [resume-ats-optimizer](#2-resume-ats-optimizer)
3. [resume-bullet-writer](#3-resume-bullet-writer)
4. [resume-quantifier](#4-resume-quantifier)
5. [resume-tailor](#5-resume-tailor)
6. [job-description-analyzer](#6-job-description-analyzer)
7. [linkedin-profile-optimizer](#7-linkedin-profile-optimizer)
8. [interview-prep-generator](#8-interview-prep-generator)
9. [salary-negotiation-prep](#9-salary-negotiation-prep)
10. [cold-email-writer](#10-cold-email-writer)
11. [cover-letter-generator](#11-cover-letter-generator)
12. [resume-version-manager](#12-resume-version-manager)

---

### 1. `tech-resume-optimizer`

*Otimização técnica para Software Engineers (Backend, Arquitetura e Sistemas Distribuídos).*

- **Quando usar:** Quando quiser avaliar o equilíbrio do currículo entre decisões técnicas profundas e impacto para o negócio.
- **Como acionar (Exemplos de Prompts):**
  - *"Avalie meu resume_en-us.md com a skill tech-resume-optimizer e aponte se minha stack e senioridade estão evidentes para um Hiring Manager."*
  - *"Como posso destacar melhor minhas decisões de System Design e resiliência no currículo?"*
- **Entrada necessária:** O arquivo [curriculum/resume_en-us.md](curriculum/resume_en-us.md) (ou a versão em português [curriculum/resume_pt-br.md](curriculum/resume_pt-br.md)).
- **O que a skill entrega:** Diagnóstico de profundidade técnica, estrutura de seções recomendada para tech recruiters e sugestões de links técnicos.

---

### 2. `resume-ats-optimizer`

*Auditoria de compatibilidade com Applicant Tracking Systems (Greenhouse, Lever, Workday).*

- **Quando usar:** Antes de enviar o currículo para grandes empresas que utilizam triagem automatizada.
- **Como acionar:**
  - *"Execute uma auditoria de ATS no meu curriculum/resume_en-us.md usando a skill resume-ats-optimizer."*
  - *"Verifique se há alguma formatação ou cabeçalho no meu currículo que quebra em robôs de ATS."*
- **Entrada necessária:** O currículo em Markdown.
- **O que a skill entrega:** Checklist de compatibilidade de ATS, análise de densidade de palavras-chave e verificação de layout.

---

### 3. `resume-bullet-writer`

*Transformação de bullets comuns na Fórmula X-Y-Z do Google.*

- **Quando usar:** Quando um ponto do seu currículo estiver parecendo uma "lista de deveres/tarefas" em vez de uma conquista mensurável.
- **Como acionar:**
  - *"Reescreva os bullets da minha experiência na Basis usando a fórmula X-Y-Z com a skill resume-bullet-writer."*
  - *"Transforme este bullet em uma afirmação de alto impacto: 'Fiz a integração do Pix com o banco Matera'."*
- **Entrada necessária:** Bullets atuais ou novas realizações que você quer adicionar.
- **O que a skill entrega:** Versões reformuladas com verbos de ação fortes, contexto do problema, solução técnica e resultado de negócio.

---

### 4. `resume-quantifier`

*Identificação e estimativa de métricas mesmo quando você não tem o número exato.*

- **Quando usar:** Quando você sabe que gerou impacto técnico (performance, escalabilidade, segurança), mas não tem a métrica em mãos.
- **Como acionar:**
  - *"Use o resume-quantifier para encontrar métricas ocultas na minha experiência com otimização de banco de dados e mensageria."*
  - *"Não tenho o número exato de usuários do TJRJ. Me ajude a estimar e formular uma métrica crível."*
- **Entrada necessária:** Contexto qualitativo da sua atuação.
- **O que a skill entrega:** Dimensões de quantificação (latência, concorrência, volume diário, porcentagem de ganho de tempo, redução de incidentes).

---

### 5. `resume-tailor`

*Adaptação cirúrgica do currículo para uma vaga específica sem desonestidade.*

- **Quando usar:** Sempre que for aplicar para uma vaga prioritária (ex: Stripe, Nubank, Amazon, Mercado Livre).
- **Como acionar:**
  - *"Adapte meu curriculum/resume_en-us.md para esta vaga de Senior Backend na Stripe usando a skill resume-tailor: [colar texto da vaga]."*
  - *"Crie uma versão do meu currículo dando ênfase total em C# e Azure para a vaga X."*
- **Entrada necessária:** O currículo base e a descrição completa da vaga.
- **O que a skill entrega:** Reorganização estratégica de tópicos, resumo profissional alinhado aos desafios da empresa e destaque das keywords exigidas.

---

### 6. `job-description-analyzer`

*Desconstrução estratégica de anúncios de emprego antes de aplicar.*

- **Quando usar:** Para decidir se vale a pena gastar tempo aplicando e entender o que a empresa realmente procura.
- **Como acionar:**
  - *"Analise esta vaga com a skill job-description-analyzer e calcule meu Match Score: [colar anúncio]."*
  - *"Quais são os 5 principais requisitos must-have desta vaga e quais gaps eu preciso cobrir?"*
- **Entrada necessária:** Texto ou link da vaga.
- **O que a skill entrega:** Match Score (0 a 100%), lista de requisitos obrigatórios vs. diferenciais, detecção de red flags e recomendações de abordagem.

---

### 7. `linkedin-profile-optimizer`

*Alinhamento estratégico do seu perfil no LinkedIn com o seu currículo.*

- **Quando usar:** Periodicamente para atrair recrutadores internacionais de forma passiva.
- **Como acionar:**
  - *"Use a skill linkedin-profile-optimizer para sugerir uma Headline e um Sobre para o meu LinkedIn com base no meu resume_en-us.md."*
  - *"Como posso otimizar a seção de experiências do meu LinkedIn para ser encontrado em buscas por 'Senior Backend C# .NET Java'?"*
- **Entrada necessária:** Seções atuais do seu perfil ou o próprio currículo.
- **O que a skill entrega:** Headlines focadas em palavras de busca de tech recruiters, resumo conversacional em primeira pessoa e estrutura de tópicos para o LinkedIn.

---

### 8. `interview-prep-generator`

*Geração de perguntas de entrevista técnica e histórias no método STAR.*

- **Quando usar:** Assim que conseguir uma entrevista com o recrutador ou com a equipe de engenharia.
- **Como acionar:**
  - *"Use a skill interview-prep-generator para criar 3 histórias STAR baseadas nas minhas experiências com concorrência e falhas na Western Union."*
  - *"Gere perguntas difíceis de System Design que um Tech Lead da AWS me faria olhando para o meu currículo."*
- **Entrada necessária:** Os bullets do seu currículo e a empresa alvo.
- **O que a skill entrega:** Histórias no formato STAR (Situação, Tarefa, Ação, Resultado), respostas para perguntas comportamentais clássicas e argumentos de defesa de arquitetura.

---

### 9. `salary-negotiation-prep`

*Roteiros e estratégias de negociação para maximizar seu pacote de compensação.*

- **Quando usar:** Quando a empresa sinalizar que fará uma oferta ou quando perguntarem sua pretensão salarial.
- **Como acionar:**
  - *"Recebi uma oferta de $Xk para Senior Software Engineer. Use a skill salary-negotiation-prep para montar minha estratégia de contraproposta."*
  - *"Como responder à pergunta 'Qual é a sua pretensão salarial atual?' sem me desvalorizar?"*
- **Entrada necessária:** Detalhes da vaga, localização (remoto BR ou internacional) e proposta recebida.
- **O que a skill entrega:** Roteiro de negociação (base, bônus, equity), scripts de resposta educados e firmes, e cálculo de Total Compensation.

---

### 10. `cold-email-writer`

*Redação de abordagens diretas e humanas para Hiring Managers.*

- **Quando usar:** Para contatar o Tech Lead, Engineering Manager ou recrutador no LinkedIn ou e-mail sem parecer spam.
- **Como acionar:**
  - *"Escreva um cold message no LinkedIn para o Engineering Manager da equipe de pagamentos da empresa X usando a skill cold-email-writer."*
  - *"Crie uma mensagem curta de conexão para um Tech Recruiter mencionando que me interessei pela vaga Y."*
- **Entrada necessária:** Nome da empresa, papel desejado e um detalhe real que chamou sua atenção.
- **O que a skill entrega:** Mensagens de 3 a 5 parágrafos curtos, focadas em valor e sem jargões genéricos.

---

### 11. `cover-letter-generator`

*Cartas de apresentação que conectam sua história às dores da empresa.*

- **Quando usar:** Em aplicações internacionais (EUA/Europa) que solicitam uma Cover Letter opcional ou obrigatória.
- **Como acionar:**
  - *"Crie uma cover letter concisa para a vaga [anúncio] usando meu resume_en-us.md com a skill cover-letter-generator."*
- **Entrada necessária:** Job description e currículo.
- **O que a skill entrega:** Carta personalizada de 300-400 palavras que explica o "Por que você?", "Por que esta empresa?" e "Por que agora?".

---

### 12. `resume-version-manager`

*Organização e manutenção do seu currículo master e variantes.*

- **Quando usar:** Ao manter variações especializadas do currículo para não criar inconsistências.
- **Como acionar:**
  - *"Ajude-me a organizar minhas variantes de currículo usando a skill resume-version-manager."*
- **Entrada necessária:** Vagas e nichos de mercado em que você está aplicando.
- **O que a skill entrega:** Estrutura de pastas, convenção de nomes e fonte única da verdade para seus dados profissionais.
