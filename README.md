# Audacious Education Purposes Study Companion

An interactive dashboard summarizing education reforms featured in Fernando Reimers' book *Audacious Education Purposes: How Governments Transform the Goals of Education Systems* (2020).

## Features

- **8 Country Profiles**: Brazil, Finland, Japan, Mexico, Peru, Poland, Portugal, and Russia (all available)
- **Comprehensive Reform Data**: Each country includes situation, indicators, challenges, political context, ministers, reform goals, strategies, and results
- **Country Comparison**: Compare any two countries side-by-side
- **AI-Powered "Advice to the Minister"**:
  - Generate counterfactual narratives exploring alternative reform approaches
  - Socratic questioning feature to help students develop critical thinking
- **Clean Academic Design**: Modern, minimal interface with collapsible sections
- **Download Summaries**: Export country profiles as text files

## Currently Available Countries

✅ **Brazil** - Building a national curriculum for 21st century skills
✅ **Finland** - Sustaining excellence through teacher autonomy
✅ **Japan** - Cultivating competencies for a changing society
✅ **Mexico** - Comprehensive curriculum reform
✅ **Peru** - A wholesale reform fueled by obsession with learning and equity
✅ **Poland** - Post-communist transformation and the reversal of evidence-based reform
✅ **Portugal** - From last place to above OECD average through curriculum quality and assessment
✅ **Russia** - From Soviet "best-in-the-world" to globally competitive through competency-based standards

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to the URL shown in the terminal (typically `http://localhost:5173`)

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` folder.

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
A801 Automation/
├── src/
│   ├── App.jsx          # Main application component with all country data
│   ├── main.jsx         # React entry point
│   └── index.css        # Global styles with Tailwind
├── index.html           # HTML template
├── package.json         # Dependencies and scripts
├── vite.config.js       # Vite configuration
├── tailwind.config.js   # Tailwind CSS configuration
└── README.md            # This file
```

## How to Use the Dashboard

### Dashboard View
- Click on any available country tile to view its detailed reform profile
- Click "Compare Two Countries" to select and compare two countries side-by-side

### Country Profile View
- Each section (Situation, Indicators, Challenges, etc.) can be expanded/collapsed
- Scroll through the comprehensive reform data
- View key indicators in visual cards
- Read the detailed results with the "THIS is what actually happened" divider

### Advice to the Minister Feature
1. Click "Need Help? Get Guiding Questions" to receive Socratic-style questions
2. Reflect on the questions to develop your thinking
3. Enter your advice in the text box
4. Click "Generate Counterfactual" to see an AI-generated narrative exploring what might have happened if your advice had been followed

### Comparison View
- See side-by-side comparisons of situation, indicators, challenges, goals, and results
- Click "View Full Profile" buttons to dive deeper into either country

## Data Structure

All country data is stored in the `reformData` object in [src/App.jsx](src/App.jsx). Each country follows a consistent structure with fields for:
- Basic info (id, name, flag, tagline, authors, color)
- Situation overview
- 8 key indicators
- Reform challenges
- Political context
- Ministers and key actors
- Reform goals
- Strategies implemented
- Results achieved

## AI Integration

The "Advice to the Minister" feature uses the Anthropic Claude API. Note: You'll need to provide your own API key to use this feature in production. The current implementation includes API calls but may need authentication setup.

## Technologies Used

- **React** - UI framework
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Styling
- **Lucide React** - Icons
- **Anthropic Claude API** - AI-powered counterfactual generation

## Data Source

All content is derived from *Audacious Education Purposes: How Governments Transform the Goals of Education Systems* by Fernando Reimers (2020), specifically the eight country chapters authored by:

- Brazil: Claudia Costin & Teresa Pontual
- Finland: Jari Lavonen
- Japan: Shinichi Yamanaka & Kan Hiroshi Suzuki
- Mexico: Elisa Bonilla-Rius
- Peru: Jaime Saavedra & Marcela Gutierrez
- Poland: Jerzy Wiśniewski
- Portugal: Nuno Crato
- Russia: Isak Froumin & Igor Remorenko

## License

This is an educational project based on published academic work.

## Contributing

To add more countries or improve features, please ensure the data accurately reflects the content from the book chapters.
