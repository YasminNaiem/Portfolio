export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  image: string;
  businessProblem: string;
  methodology: string;
  impact: string;
  githubUrl?: string;
  liveUrl?: string;
}

export const projects: Project[] = [
  {
    id: "cookies-sales-analytics",
    title: "Global Cookies Sales & Product Performance Analytics",
    description: "A comprehensive Business Intelligence dashboard analyzing 700+ transactions to drive product distribution and profit optimization.",
    technologies: ["POWER BI", "POWER QUERY", "DAX", "DATA MODELING", "EXCEL"],
    image: "/images/cookies.jpg", 
    businessProblem: "The business needed to evaluate the performance of its cookie product lines across different geographies, identify seasonal sales trends, and isolate low-margin products to optimize total profitability.",
    methodology: "1. ETL Pipeline: Connected and transformed transaction data using Power Query, restructuring messy order records. 2. Geospatial & Product Analysis: Engineered advanced DAX metrics to track Total Sales ($1.97M), Total Revenue ($4.69M), and Profit Margins across cities like Green Bay and states like WI. 3. Visualization: Built intuitive Pareto-style product breakdowns and monthly trend lines to capture peak Q4 performance.",
    impact: "Analyzed $4.69M in total revenue across 700 orders, uncovering that Chocolate Chip drives the highest profitability ($1.0M+ profit) while Fortune Cookies lag behind, enabling data-driven inventory adjustments that secured a 57.93% overall profit margin.",
    githubUrl: "https://github.com/YasminNaiem/Cookies-Analysis",
  },
  {
  id: "social-media-metrics-dashboard",
  title: "OmniChannel Analytics: Social Media Performance & Growth Dashboard",
  description: "A high-visibility dynamic tracking dashboard built to unify multi-platform cross-channel metrics, visualize continuous audience growth, and analyze engagement rates across major social networks.",
  technologies: ["EXCEL", "DATA ARCHITECTURE", "ADVANCED FORMULAS", "DYNAMIC CHARTS", "CROSS-CHANNEL ANALYTICS"],
  image: "/images/social media.jpeg", 
  businessProblem: "Brands struggle to synthesize fragmented performance data across diverse platforms like Facebook, Instagram, LinkedIn, and X, leaving marketing teams without a cohesive view of total organic reach and channel efficiency.",
  methodology: "1. Unified Data Aggregation: Structured raw weekly/monthly marketing metrics across four discrete platform schemas into a centralized data layer. 2. KPI Architecture & Formula Engineering: Formulated robust logic to dynamically aggregate impressions (surpassing 2.3M total impressions), calculate precise growth trajectories, and cross-reference engagement benchmarks. 3. Dashboard UI Design: Engineered a clean dashboard interface mapping standalone platform panels, growth trend lines, and clear visibility color indicators for executive reporting.",
  impact: "Consolidated isolated platform streams into a single high-visibility analytical command center. Enabled stakeholders to isolate absolute engagement leaders (such as X at 737K+ impressions) and cross-compare audience response variations at a single glance.",
  githubUrl: "https://github.com/YasminNaiem/social-Media",
},
  {
    id: "telco-churn",
    title: "Telco Customer Churn & Revenue Optimization Analytics",
    description: "An end-to-end data analytics solution that isolates critical churn drivers across 7,043 subscribers...",
    technologies: ["SQL SERVER", "PYTHON", "POWER BI", "POWER QUERY", "DAX", "EXCEL"],
    image: "/images/telco.jpg",
    businessProblem: "The telecom company was losing revenue due to high customer turnover (churn). The objective was to identify why customers leave, which segments are most at risk, and provide actionable retention strategies.",
    methodology: "1. Data Cleaning: Used Python (Pandas) and Power Query to handle missing values and format data types. 2. Modeling: Built a Star Schema data model in Power BI with optimized relationships. 3. DAX: Created advanced measures to calculate Churn Rate, ARPU (Average Revenue Per User), and Revenue at Risk.",
    impact: "Isolated critical churn drivers across 7,043 subscribers, protecting $139K in monthly recurring revenue by mapping out a targeted customer retention framework.",
    githubUrl: "https://github.com/YasminNaiem/Telco-Customer-Churn-Analysis",
  },
  {
    id: "smart-object-counter-analyzer",
    title: "Smart Shape-Based Object Counter & Analyzer",
    description: "A real-time Computer Vision system that detects, classifies, and counts vehicles using YOLOv8 detection combined with Hough Transform shape analysis.",
    technologies: ["PYTHON", "OPENCV", "YOLOV8", "STREAMLIT", "COMPUTER VISION"],
    image: "/images/object counter.jpg", 
    businessProblem: "Traffic monitoring systems need to not only detect vehicles but understand their structural shape to classify them accurately (cars vs. bicycles vs. motorcycles) while avoiding duplicate counts across video frames.",
    methodology: "1. Object Detection: Implemented YOLOv8 to detect multiple objects simultaneously in real-time video streams. 2. Shape Analysis Pipeline: Applied Grayscale conversion, Gaussian Blur, and Canny Edge Detection inside each detected object's ROI. 3. Hough Transform: Used Hough Circles to identify wheels and Hough Lines to identify vehicle body structure. 4. Object Classification: Built logic combining circle count, line count, aspect ratio, and area to classify objects as Cars, Bicycles, or Motorcycles. 5. Duplicate-Free Counting: Engineered a centroid-based ObjectTracker to ensure each object is counted exactly once as it moves across frames. 6. Interactive Controls: Added real-time trackbars for tuning Canny thresholds and Hough parameters directly from the UI.",
    impact: "Successfully processes live video streams with accurate multi-class vehicle counting (cars, bicycles, motorcycles, people, buses, traffic lights), exportable to CSV reports, deployed through an interactive Streamlit web interface.",
    githubUrl: "https://github.com/YasminNaiem/Smart-Shape-Based-Object-Counter-Analyzer",
  },
  {
    id: "marketing-campaign-analytics",
    title: "Multi-Channel Marketing Campaign Performance & ROI Optimization",
    description: "An advanced Marketing Analytics dashboard evaluating $30.59M in ad spend across 8,000+ orders to isolate high-performing acquisition channels.",
    technologies: ["POWER BI", "POWER QUERY", "DAX", "MARKETING ANALYTICS", "EXCEL"],
    image: "/images/marketing.jpg", // اتأكدي من إضافة اسم الصورة الصح هنا جوه فولدر public/images
    businessProblem: "The marketing department needed to evaluate campaign efficiency across multiple channels (Social, Influencers, Search, Media), identify which campaigns yield the highest ROI, and optimize a $30.59M marketing budget.",
    methodology: "1. Data Consolidation: Cleaned and combined cross-channel marketing metrics (Leads, Impressions, Spend, and Revenue) using Power Query. 2. KPI Engineering: Developed advanced DAX formulas to calculate Return on Investment (40.2% ROI), Click-Through Rate (19.01% CTR), Conversion Rate (26.8%), and Cost Per Lead ($466.47)[cite: 2]. 3. Behavioral Analysis: Modeled weekday performance trends to uncover that Friday and Saturday generate peak order volumes, while Thursday dominates ad impressions[cite: 2].",
    impact: "Successfully analyzed $43M in total revenue generated from 66K leads[cite: 2]. Uncovered that the 'Influencer' category drives the absolute highest revenue (over $20M) despite 'Social' consuming the highest budget share (45.11% / $13.8M)[cite: 2]. Identified 'youtube_blogger' as the top overall campaign with an exceptional 40.2% ROI, allowing for data-driven budget reallocation away from underperforming channels[cite: 2].",
    githubUrl: "https://github.com/YasminNaiem/Marketing",
  },
  {
    id: "adidas-sales-analytics",
    title: "Adidas Omnichannel Retail Sales & Profitability Analytics",
    description: "An interactive retail analytics framework analyzing over 2.47 million units sold to optimize pricing, sales methods, and regional product distribution.",
    technologies: ["EXCEL", "POWER QUERY", "DATA ANALYSIS", "PIVOT TABLES", "DASHBOARD DESIGN"],
    image: "/images/Addidas.jpg", // اتأكدي من إضافة اسم الصورة الصح هنا جوه فولدر public/images
    businessProblem: "Adidas required a centralized analytics solution to monitor sales performance across multiple retailers (like West Gear and Foot Locker) and methods (In-store, Online, Outlet) to discover hidden regional variations and optimize operating margins.",
    methodology: "1. Data Auditing & Restructuring: Cleaned and structured raw transactional records spanning thousands of rows, ensuring exact precision across units and invoice dates. 2. Cross-Dimensional Analytics: Grouped and sliced performance by Region, Retailer, and Product Categories using advanced lookup formulas and pivot structures. 3. Omnichannel Profiling: Segmented performance by sales methods to evaluate efficiency, contrasting traditional In-store distribution against high-margin Online and Outlet growth.",
    impact: "Evaluated a massive dataset of $899.9M in Total Sales and $332.1M in Operating Profit, maintaining a strong average margin of 42.3%. Isolated 'Men's Street Footwear' as the dominant product line driving $208.8M in revenue, and identified 'In-store' as the top revenue channel ($356.6M) while highlighting 'Online' sales ($247.6M) as a crucial margin optimizer.",
    githubUrl: "https://github.com/YasminNaiem/Addidas-Analysis",
  },
  {
  id: "movie-ratings-eda",
  title: "Cinematic Data Intelligence: Movie Ratings Exploratory Data Analysis",
  description: "An exploratory data analysis framework designed to uncover audience sentiment trends, rating distributions, and content patterns across extensive media datasets.",
  technologies: ["PYTHON", "PANDAS", "SEABORN", "MATPLOTLIB", "DATA VISUALIZATION"],
  image: "/images/movie recommendation.png", // تأكد من إضافة اسم الصورة الصح هنا جوه فولدر public/images
  businessProblem: "Streaming platforms and production studios often struggle to identify overarching audience sentiment trends and dataset imbalances, requiring a clean, visual diagnostic approach to evaluate how content is distributed across various rating classifications.",
  methodology: "1. Data Pipeline & Diagnostics: Processed structured media datasets using Pandas to handle categorical structures and ensure seamless column parsing. 2. Statistical Distribution Profiling: Built custom frequency counting mechanisms to group and slice data points by individual rating categories. 3. Visual Storytelling Optimization: Engineered high-clarity Count Plots (sns.countplot) with custom axis formatting, distinct labels, and structured layouts to transform raw tabular data into intuitive, scannable insights.",
  impact: "Successfully transformed raw categorical text columns into actionable visual intelligence, isolating dominant rating frequencies and highlighting data skewness at a single glance. Established a clear baseline for production strategy by instantly revealing which content ratings command the largest presence in the dataset.",
  githubUrl: "https://github.com/YasminNaiem/Movie-Recommendation-System",
},
{
  id: "student-success-predictor",
  title: "Academic Intelligence: Student Success & Dropout Predictive System",
  description: "An end-to-end predictive framework and interactive diagnostic dashboard designed to identify at-risk students, analyze academic performance metrics, and pinpoint financial risk factors.",
  technologies: ["PYTHON", "SCIKIT-LEARN", "RANDOM FOREST", "DATA VISUALIZATION", "STREAMLIT"],
  image: "/images/student performance.png", // تأكد من إضافة اسم الصورة الصح هنا جوه فولدر public/images
  businessProblem: "Educational institutions struggle to proactively detect students at risk of dropping out due to complex intersections of academic performance, financial constraints, and demographic factors, requiring an automated, high-accuracy diagnostic tool.",
  methodology: "1. Data Engineering & Feature Selection: Screened low-variance attributes (removing features with >90% zeros) while preserving high-impact structural variables like tuition status and credit completions. 2. Predictive Modeling & Validation: Trained a Random Forest classifier achieving a 94% model accuracy and a 0.92 Cross-Validation score across 36 core features. 3. Interactive Interface Engineering: Developed a clean, high-visibility dashboard UI that maps student profiles, academic performance sliders, and financial statuses into real-time probability distributions and risk alerts.",
  impact: "Successfully transformed raw academic and financial datasets into actionable risk intelligence, enabling advisors to isolate dominant dropout indicators (such as outstanding debt) at a single glance. Established a 94% accurate predictive baseline to support proactive institutional retention strategies.",
  githubUrl: "https://github.com/YasminNaiem/student-Attitude-Behavior",
},
];