A personal data project designed to track and analyze job applications. This project shows how everyday tools can be combined into a functional data pipeline (ETL) — proving that automation and analytics can be both simple and impactful.  


## 🎯 Goals

- Transform my job-hunting process into a structured, visual dataset  
- Track my job-search performance  
- Identify patterns and recurring skill requirements  
- Use data to guide my job-hunting strategy  


## ⚙️ ETL Workflow

This project follows a lightweight ETL (Extract, Transform, Load) pipeline built entirely with no-code and low-code tools:

| Stage | Description | Tool |
|--------|-------------|------|
| **Extract** | Job application data is collected via a Google Form. | Google Forms |
| **Transform** | A Google Sheets workflow cleans, structures, and enriches the data using formulas and custom logic. | Google Sheets |
| **Load** | A Google Apps Script updates the dataset automatically without overwriting existing records. | Google Apps Script |
| **Visualize** | The clean dataset is connected to a Looker Studio dashboard for interactive analysis. | Looker Studio |


## 🛠️ Tech Stack

- **Google Forms** — data collection  
- **Google Sheets** — data storage and cleaning  
- **Google Apps Script** — automation  
- **Looker Studio** — data visualization  


## 🧩 Data Source & Structure

The dataset was built from real job postings anonymized to remove all personally identifiable or company-specific data. It is organized in the `/data` folder:  
- `sample/` — example CSVs used for testing and prototyping  
- `dictionary/` — metadata and codebooks documenting all variables in the dataset

Updates are automated through a Google Apps Script (`/scripts/update_dataset.gs`), which appends new records instead of overwriting existing ones.


## 📊 Dashboard & Analysis

A [Looker Studio dashboard](https://lookerstudio.google.com/u/0/reporting/615c97a0-c588-4914-9b2e-1f7a24c57422/page/p_oaa3vt8rxd) was developed to visualize and analyze patterns in the data. The dashboard connects directly to the Google Sheets dataset through an automated update pipeline.


## 🪜 Next Steps
- Add AI-based parsing of job descriptions
