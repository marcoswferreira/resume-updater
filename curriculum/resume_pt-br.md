# Marcos W. Ferreira

**Engenheiro de Software Backend | Sistemas Distribuídos em Ambientes Regulados**  
Tremembé, São Paulo, Brasil • <marcosfw7@outlook.com> • +55 (12) 99183-6842  
[LinkedIn](https://www.linkedin.com/in/marcoswferreira) • [GitHub](https://github.com/marcoswferreira)

---

## Resumo Profissional

Engenheiro de Software Backend com mais de 4 anos de experiência no desenvolvimento, arquitetura e sustentação de sistemas distribuídos e plataformas financeiras de alto rendimento em ambientes regulados de missão crítica. Ampla atuação em ecossistemas de pagamentos corporativos (Pix, Pix QR Code Dinâmico/Estático, motores de PayIn/Payout e integração com core banking Matera), garantindo consistência transacional sob concorrência estrita através de idempotência, distributed locks, mensageria orientada a eventos e políticas de retry resilientes. Experiência comprovada em empresas multinacionais e órgãos públicos (Western Union, GFT Technologies e Tribunal de Justiça do Rio de Janeiro via Basis), reduzindo latências críticas de banco de dados de 8s para 600ms e tempos de atendimento operacional em até 73%. Especialista em C# (.NET 3.1+ / ASP.NET Core), Java (Spring Boot), arquiteturas cloud-native em Azure e esteiras de testes automatizados (TDD, testes de integração e E2E).

---

## Competências Técnicas

- **Linguagens:** C# (.NET Core / .NET 8+), Java (11 / 17 / 21), TypeScript, JavaScript, SQL *(Familiar: Go, Rust, Python)*
- **Frameworks & Runtimes:** ASP.NET Core, Spring Boot 3, Node.js, Angular, React, Electron
- **Sistemas Distribuídos & Pagamentos:** Pix, Pix QR Code Dinâmico/Estático, PayIn/Payout, Integração com Core Banking (Matera), Padrões de Idempotência, Distributed Locks, Tolerância a Falhas, Arquitetura Orientada a Eventos
- **Mensageria & Cache:** Azure Service Bus / RabbitMQ, Redis (Cache Distribuído)
- **Arquitetura & Engenharia:** Microsserviços, Domain-Driven Design (DDD), CQRS, Clean / Hexagonal Architecture, SOLID, TDD, Design Patterns
- **Bancos de Dados:** Oracle, Microsoft SQL Server, PostgreSQL, MongoDB
- **Cloud & DevOps:** Microsoft Azure, Docker, Azure DevOps, Jenkins, CloudBees, SonarQube, Bitbucket, Linux
- **Testes & Qualidade:** xUnit, JUnit, Jasmine/Karma, Cypress, Selenium, Quality Gates Automatizados

---

## Experiência Profissional

### **Basis Tecnologia da Informação S.A.** | *Software Engineer II*

**Abril de 2025 – Presente | Rio de Janeiro, Brasil (Remoto)**

- Atuação na arquitetura e sustentação de sistemas corporativos de missão crítica para o **Tribunal de Justiça do Estado do Rio de Janeiro (TJRJ)**, abrangendo a governança de Juízes de Paz e gestão de estagiários com Angular, C# ASP.NET Core e Oracle.
- Projeto e implementação de engines de regras de negócio específicas de domínio, traduzindo normativas jurídicas complexas em fluxos automatizados de validação funcional e temporal, eliminando verificações manuais e garantindo conformidade com auditorias.
- Desenvolvimento de relatórios gerenciais e pipelines de extração de dados de alta confiabilidade para a área de Gestão de Pessoas, assegurando a entrega pontual da prestação de contas mensal para órgãos de controle.
- Estabelecimento e execução de estratégia de testes automatizados em múltiplas camadas (**xUnit, Jasmine/Karma e Cypress**), mantendo **~80% de cobertura de código** e prevenindo regressões em serviços judiciais críticos.
- Cumprimento rigoroso de requisitos contratuais de engenharia de software e padrões arquiteturais, aplicando análise estática contínua via **SonarQube** e quality gates automatizados no pipeline CI/CD.

### **Western Union** | *Software Engineer II*

**Setembro de 2024 – Abril de 2025 | São Paulo, Brasil**

- Desenvolvimento e sustentação de microsserviços backend resilientes em C#/.NET para fluxos de processamento financeiro: **Pix, Pix QR Code, PayIn e Payout**, incluindo integração direta com o core bancário **Matera**, operando com milhares de transações diárias e **picos de tráfego de ~40 req/s** com garantia de perda zero.
- Garantia de consistência transacional estrita sob alta concorrência aplicando **chaves de idempotência, filas assíncronas de mensagens e estratégias de retry** com backoff exponencial.
- Construção de APIs RESTful de baixa latência e workers assíncronos para sincronização bidirecional e integração resiliente com serviços de terceiros, processando milhares de eventos diários.
- Modernização e automação de pipelines de implantação com **Jenkins e CloudBees**, **reduzindo o tempo de rollback em produção de ~30 para ~5 minutos** (recuperação 83% mais rápida).
- Desenvolvimento de ferramentas desktop de automação operacional com **React e Electron**, **reduzindo o tempo médio de atendimento do suporte ao cliente de ~15 para ~4 minutos** (ganho operacional de 73%).
- Padronização de práticas de engenharia e CI/CD entre squads: validações automatizadas de pull requests, code reviews rigorosos e governança de releases.

### **GFT Technologies** | *Backend Developer (L1 / L2 / Trainee)*

**Março de 2022 – Agosto de 2024 | Barueri, São Paulo, Brasil**

- **Back End Developer L2 – Alocado na Western Union** *(Abril 2024 – Agosto 2024)*:
  - Desenvolvimento de serviços backend em C# ASP.NET Core para sustentação e expansão de fluxos de **Pix e Pix QR Code Dinâmico**, integrando serviços bancários via **Matera**.
  - Engenharia de salvaguardas de concorrência contra race conditions e duplicidade de débitos utilizando distributed locks e consumidores confiáveis de mensageria.

- **Backend Developer L1 – Alocado na Western Union** *(Maio 2023 – Abril 2024)*:
  - Desenvolvimento de microsserviços backend em C# ASP.NET Core conectando APIs parceiras e bancos de dados relacionais em ambiente financeiro estritamente regulado.
  - Implementação dos fluxos centrais de liquidação de **PayIn e Payout** suportando rajadas de tráfego de **~40 req/s**.
  - **Otimização de consultas SQL críticas, planos de execução e índices em ambiente de produção sob carga, reduzindo a latência de consultas de ~8 segundos para ~600 ms** (ganho de mais de 92% de performance).
  - Manutenção de qualidade contínua com suítes de testes unitários, análise estática via SonarQube e revisões de código via Bitbucket; obtenção de **3 certificações Microsoft Azure** (AZ-900, DP-900, SC-900).

- **Internship Trainee** *(Março 2022 – Abril 2023)*:
  - Desenvolvimento de 2 microsserviços em Java 11 / Spring Boot para plataforma corporativa de seguros (cotação e emissão de apólices), aplicando **Specification Pattern** e JPA para montagem dinâmica de regras de elegibilidade sem duplicação de código.
  - Criação de templates de WebAPI baseados em **DDD, SOLID e Clean Architecture**, adotados oficialmente como arquitetura base por 3 squads de entrega.
  - Conclusão com destaque do bootcamp intensivo focado em TDD, REST APIs e arquitetura de microsserviços com projeto final em produção.

---

## Formação Acadêmica

- **FIAP** — *Pós-graduação em Software Architecture* | 2026 – 2027
- **Estácio** — *Bacharelado em Sistemas de Informação* | 2020 – 2024
- **EF English Live** — *Programa de Imersão em Língua Inglesa* | 2022 – 2023

---

## Certificações

- **Microsoft Certified: Azure Fundamentals (AZ-900)** — Microsoft
- **Microsoft Certified: Azure Data Fundamentals (DP-900)** — Microsoft
- **Microsoft Certified: Security, Compliance, and Identity Fundamentals (SC-900)** — Microsoft
- **Cloud Lakehouse Data Management Foundation Series**
- **Claude Code in Action**

---

## Idiomas

- **Português:** Nativo
- **Inglês:** Intermediário / Profissional (Limited working proficiency)
