This document describes the fields included in the sample dataset. All data has been anonymized from real job postings collected during the project.

| Field | Type | Example | Description |
|--------|------|----------|-------------|
| Timestamp | datetime | 2025-10-18 | Date and time when the form was submitted |
| empresa | string | Google | Company name |
| local_empresa | string | Porto Alegre | City (and optionally state) where the company is located |
| cargo | string | Analista de Dados | Job title applied for |
| senioridade | categorical | Junior | Job level or seniority mentioned in the job posting |
| plataforma | categorical | Gupy | Recruitment platform |
| contrato | categorical | CLT | Type of employment contract |
| remuneracao_reais | numeric or string | 5000 | Reported or estimated salary in BRL |
| descricao | text | "Estamos à procura de uma pessoa para..." | Short job description or summary |
| skills | list | SQL, Power BI, Python | Key skills or technologies required |
| data_post | date | 2025-10-10 | Date when the job was posted |
| observacoes | text | "Contacted recruiter on LinkedIn" | Personal notes or additional observations |
| application | date | 2025-10-13 | Date of application submission |
| responsabilidades | text | "Responsável por coleta e modelagem de dados..." | Responsibilities listed in the job description |
| qualificacoes | text | "Superior completo em Ciência de Dados..." | Qualifications or educational requirements |
| inglês | categorical | avancado | English level required or mentioned |
| diferenciais | text | "Conhecimento em Spark/PySpark..." | Optional or preferred qualifications |
| status | categorical | pendente | Application status (e.g. applied, interview, rejected) |
