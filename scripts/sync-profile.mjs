import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

const resumePath = path.join(rootDir, 'curriculum', 'resume_en-us.md');

if (!fs.existsSync(resumePath)) {
  console.error(`Error: resume file not found at ${resumePath}`);
  process.exit(1);
}

const resumeContent = fs.readFileSync(resumePath, 'utf-8');

// Parse Headline
const headlineMatch = resumeContent.match(/\*\*(Backend Software Engineer[^*]+)\*\*/i);
const headline = headlineMatch
  ? headlineMatch[1].trim()
  : 'Backend Software Engineer | Distributed Systems & Regulated Payments';

// Parse Professional Summary
const summaryMatch = resumeContent.match(/## Professional Summary\s+([\s\S]+?)(?=\n---|\n##)/i);
const summaryText = summaryMatch ? summaryMatch[1].trim() : '';

// Parse Certifications for Badge
const certs = [];
if (resumeContent.includes('AZ-900')) certs.push('AZ--900');
if (resumeContent.includes('DP-900')) certs.push('DP--900');
if (resumeContent.includes('SC-900')) certs.push('SC--900');
const certsBadgeParam = certs.length > 0 ? certs.join('_%7C_') : 'AZ--900_%7C_DP--900_%7C_SC--900';

// Build Dynamic Content Sections
const headerContent = `
<div align="center">
  <h1>Marcos W. Ferreira</h1>
  <h3>${headline}</h3>

  <p>
    <a href="https://www.linkedin.com/in/marcoswferreira"><img src="https://img.shields.io/badge/LinkedIn-0A66C2?style=flat&logo=linkedin&logoColor=white" alt="LinkedIn" /></a>
    <a href="https://github.com/marcoswferreira/resume-updater/blob/main/curriculum/resume_en-us.md"><img src="https://img.shields.io/badge/Resume-English-007ACC?style=flat&logo=markdown&logoColor=white" alt="Resume English" /></a>
    <a href="https://raw.githubusercontent.com/marcoswferreira/resume-updater/main/curriculum/resume_en-us.pdf"><img src="https://img.shields.io/badge/Resume-PDF-E53935?style=flat&logo=adobeacrobatreader&logoColor=white" alt="Resume PDF" /></a>
    <a href="https://github.com/marcoswferreira/resume-updater/blob/main/curriculum/resume_pt-br.md"><img src="https://img.shields.io/badge/Curr%C3%ADculo-Portugu%C3%AAs-2ea44f?style=flat&logo=markdown&logoColor=white" alt="Currículo Português" /></a>
    <a href="https://raw.githubusercontent.com/marcoswferreira/resume-updater/main/curriculum/resume_pt-br.pdf"><img src="https://img.shields.io/badge/Curr%C3%ADculo-PDF-E53935?style=flat&logo=adobeacrobatreader&logoColor=white" alt="Currículo PDF" /></a>
    <a href="mailto:marcosfw7@outlook.com"><img src="https://img.shields.io/badge/Email-marcosfw7%40outlook.com-0078D4?style=flat&logo=microsoftoutlook&logoColor=white" alt="Email" /></a>
  </p>

  <p>
    <img src="https://img.shields.io/badge/%F0%9F%93%8D_Location-S%C3%A3o_Paulo%2C_Brazil-blue?style=flat" alt="Location" />
    <img src="https://img.shields.io/badge/Azure_Certified-${certsBadgeParam}-0089D6?style=flat&logo=microsoftazure&logoColor=white" alt="Azure Certified" />
  </p>

  <p><em>Specialized in High-Concurrency Financial Systems, Core Banking Integrations & Scalable Cloud Microservices<br/>
  (C# .NET • Java Spring Boot • Microsoft Azure • Resilient Architecture)</em></p>
</div>
`.trim();

const aboutContent = `
## 💁 About Me

${summaryText}

- 🏛️ **Fintech & Regulated Platforms:** Extensive expertise in payment rails (Pix, Pix QR Code, PayIn, and Payout) and direct core banking integration (Matera). Proven track record preventing race conditions and ensuring transactional integrity using idempotency keys, distributed locks, message queues, and exponential backoff retry strategies.
- ⚡ **Scale & Real-World Impact:** Built and maintained backend microservices and asynchronous workers at Western Union supporting thousands of daily transactions and traffic peaks of ~40 req/s. Currently building mission-critical public sector systems for the Rio de Janeiro State Court of Justice (TJRJ) via Basis.
- 🚀 **Performance Optimization:** Proven experience tuning production database workloads, including optimizing critical SQL queries from ~8s down to ~600ms (>92% improvement), automating deployment rollbacks from ~30m to ~5m, and building internal operational tooling (React + Electron) that reduced customer service handling time from ~15m to ~4m.
- 🧪 **Testing & Quality Gates:** Quality-first mindset with multi-layered testing (xUnit, JUnit, Jasmine/Karma, Cypress, and Selenium) sustaining ~80% code coverage and enforcing strict automated SonarQube quality gates.
- 🎓 **Education & Certifications:** Postgraduate studies in Software Architecture at FIAP, Bachelor's in Information Systems, and 3x Microsoft Azure Certified (AZ-900, DP-900, SC-900).
`.trim();

const fullProfileReadme = `<!-- PROFILE_HEADER:START -->
${headerContent}
<!-- PROFILE_HEADER:END -->

---

<!-- PROFILE_ABOUT:START -->
${aboutContent}
<!-- PROFILE_ABOUT:END -->
`;

// Determine destination file path
let targetPath = process.argv[2];

if (!targetPath) {
  const profileRepoDir = path.join(rootDir, 'profile-repo');
  if (fs.existsSync(profileRepoDir)) {
    targetPath = path.join(profileRepoDir, 'README.md');
  } else {
    // Staging / local preview directory
    const previewDir = path.join(rootDir, 'profile');
    if (!fs.existsSync(previewDir)) {
      fs.mkdirSync(previewDir, { recursive: true });
    }
    targetPath = path.join(previewDir, 'README.md');
  }
}

// Write or inject into target README
if (fs.existsSync(targetPath)) {
  const existingContent = fs.readFileSync(targetPath, 'utf-8');
  const hasHeaderMarkers = existingContent.includes('<!-- PROFILE_HEADER:START -->') && existingContent.includes('<!-- PROFILE_HEADER:END -->');
  const hasAboutMarkers = existingContent.includes('<!-- PROFILE_ABOUT:START -->') && existingContent.includes('<!-- PROFILE_ABOUT:END -->');

  if (hasHeaderMarkers && hasAboutMarkers) {
    let updated = existingContent.replace(
      /<!-- PROFILE_HEADER:START -->[\s\S]*?<!-- PROFILE_HEADER:END -->/,
      `<!-- PROFILE_HEADER:START -->\n${headerContent}\n<!-- PROFILE_HEADER:END -->`
    );
    updated = updated.replace(
      /<!-- PROFILE_ABOUT:START -->[\s\S]*?<!-- PROFILE_ABOUT:END -->/,
      `<!-- PROFILE_ABOUT:START -->\n${aboutContent}\n<!-- PROFILE_ABOUT:END -->`
    );
    fs.writeFileSync(targetPath, updated, 'utf-8');
    console.log(`Successfully updated existing profile README via markers at: ${targetPath}`);
  } else {
    // If existing file doesn't have markers yet, replace or initialize with markers
    fs.writeFileSync(targetPath, fullProfileReadme, 'utf-8');
    console.log(`Initialized profile README with markers at: ${targetPath}`);
  }
} else {
  const targetDir = path.dirname(targetPath);
  if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
  }
  fs.writeFileSync(targetPath, fullProfileReadme, 'utf-8');
  console.log(`Generated new profile README at: ${targetPath}`);
}
