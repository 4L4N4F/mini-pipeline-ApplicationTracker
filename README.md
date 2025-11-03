A personal data project designed to track and analyze job applications. The goal is to transform my job-hunting process into a structured, visual dataset that helps me identify trends — such as most requested skills, application frequency, and success patterns over time.

⚙️ ETL workflow

This project follows a lightweight ETL (Extract, Transform, Load) pipeline built entirely with no-code and low-code tools.

| Stage | Description | Tool |
|--------|--------------|------|
| **Extract** | Job application data is collected via a **Google Form**. | Google Forms |
| **Transform** | A **Google Sheets** workflow cleans, structures, and enriches the data using formulas and custom logic. | Google Sheets |
| **Load** | A **Google Apps Script** updates the dataset automatically without overwriting existing records. | Google Apps Script |
| **Visualize** | The clean dataset is connected to a **Looker Studio dashboard** for interactive analysis. | Looker Studio |

