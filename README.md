⚠️ THIS PROJECT WAS SHUT DOWN BECAUSE I GOT HIRED :) ⚠️

A personal data project designed to track and analyze job applications. This project shows how everyday tools can be combined into a functional data pipeline (ETL) — proving that automation and analytics can be both simple and impactful.  


## Goals

- Transform my job-hunting process into a structured, visual dataset  
- Track my job-search performance  
- Identify patterns and recurring skill requirements  
- Use data to guide my job-hunting strategy  


## Updated ETL Workflow
This project follows a lightweight ETL (Extract, Transform, Load) pipeline built entirely with no-code and low-code tools, now optimized for stability and real-time updates.
Recent update: visualization moved from Looker Studio to a dashboard built directly inside Google Sheets to avoid connector delays and data inconsistencies.

| Stage | Description | Tool |
|--------|-------------|------|
| **Extract** | Job application data is collected via a Google Form. | Google Forms |
| **Transform** | A Google Sheets workflow cleans, structures, and enriches the data using formulas and custom logic. | Google Sheets |
| **Load** | A Google Apps Script updates the dataset automatically without overwriting existing records. | Google Apps Script |
| **Visualize** | A fully interactive dashboard is now built directly inside Google Sheets, ensuring instant updates and greater reliability. | Google Sheets (Charts, Pivot Tables, Slicers) |
| **Deploy** | The interactive dashboard is deployed via GitHub Pages, making it accessible with stable performance. | GitHub Pages |

## Tech Stack

- **Google Forms** — data collection  
- **Google Sheets** — data storage, cleaning, transformation and, dashboard
- **Google Apps Script** — automatated updates
  
## Data Source & Structure

The dataset was built from real job postings anonymized to remove all personally identifiable or company-specific data. It is organized in the `/data` folder:  
- `sample/` — example CSVs used for testing and prototyping  
- `dictionary/` — metadata and codebooks documenting all variables in the dataset

Updates are automated through a Google Apps Script (`/scripts/update_dataset.gs`), which appends new records instead of overwriting existing ones.


## Dashboard & Analysis

The previous Looker Studio dashboard has been replaced by an [in-Sheets dashboard](https://4l4n4f.github.io/mini-pipeline-ApplicationTracker/) published on GitHub Pages, which offers less delay and no connector instability. This change significantly improves reliability and overall workflow performance.


## Next Steps
- Add AI-based parsing of job descriptions
