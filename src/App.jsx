import React, { useState } from 'react';
import { Home, ChevronDown, ChevronUp, Send, Loader2, Download } from 'lucide-react';

const reformData = {
  brazil: {
    id: 'brazil',
    name: 'Brazil',
    flag: '🇧🇷',
    tagline: 'Building a national curriculum for 21st century skills',
    authors: 'Claudia Costin & Teresa Pontual',
    available: true,
    color: 'from-green-400 to-yellow-400',
    
    situation: `Brazil faced significant educational challenges despite constitutional guarantees of universal education and high spending. In 2015, Brazil ranked 64th in mathematics, 62nd in science, and 61st in reading among 69 countries in PISA. Despite being the world's ninth largest economy and spending 6.2% of GDP on education (more than the OECD average of 5.2%), student outcomes were poor. Only 43% of students learned what they should in Math and 55% in Portuguese by end of fifth grade (2015). These percentages worsened at higher grades: 18% in Math and 34% in Portuguese in ninth grade, and only 7% in Math and 28% in Portuguese at the last year of high school. Only 59.2% of 19-year-olds had graduated high school in 2017. The education system was highly decentralized, with 5,570 municipalities, 26 states, and a federal district all managing different aspects of education for 48.5 million children (81% in public schools).`,
    
    indicators: [
      { label: 'PISA Math Score', value: '377 (64th/69)', icon: '📊' },
      { label: 'PISA Reading', value: '61st/69', icon: '📖' },
      { label: 'PISA Science', value: '62nd/69', icon: '🔬' },
      { label: 'Education Spending', value: '6.2% GDP', icon: '💰' },
      { label: '5th Grade Math', value: '43% proficient', icon: '📐' },
      { label: 'HS Graduation', value: '59.2%', icon: '🎓' },
      { label: 'Students', value: '48.5M', icon: '👥' },
      { label: 'Public Schools', value: '81%', icon: '🏫' }
    ],
    
    challenges: [
      'Low student achievement in international assessments despite high spending',
      'Severe inequality in educational outcomes across regions and socioeconomic groups',
      'Lack of a coherent national curriculum to guide education policies',
      'Insufficient teacher preparation and ongoing professional development',
      'Extreme decentralization with 5,570 municipalities managing education',
      'High repetition rates and grade-age distortion',
      'Making education relevant for 21st century while struggling with 20th century challenges',
      'Getting students to enroll in and graduate from high school'
    ],
    
    context: `The reform began in 2013 during President Dilma Rousseff's administration with a civil society movement. However, political turmoil followed: Rousseff was impeached in May 2016, and vice-president Michel Temer took office. The reform survived multiple government changes, with the fourth Minister of Education approving the BNCC in 2017 and the sixth minister in office by early 2019 under President Bolsonaro. Despite this instability and ministers from opposing political parties (Worker's Party PT, Social Democratic Party PSDB, Democratic Party DEM, Brazilian Democratic Movement MDB), the reform maintained continuity due to strong civil society support. The Movimento pela Base successfully built consensus across the political spectrum, which proved crucial for the reform's survival through political transitions.`,
    
    minister: `Multiple ministers led the reform through different phases: Renato Janine Ribeiro (philosopher, began first version in 2015), Mendonça Filho from the Democratic Party (2016-2018, oversaw approval), with Maria Helena Guimarães de Castro (former São Paulo Secretary of Education, member of Movimento pela Base) as second-in-command. Key civil society actors included the Movimento pela Base (led by education NGOs), the Lemann Foundation (financed by billionaire Jorge Paulo Lemann), CONSED (National Council of State Secretaries), UNDIME (National Union of Municipal Education Secretaries), Todos pela Educação, and the Center for Excellence and Innovation in Education Policies (CEIPE) at Fundação Getulio Vargas.`,
    
    goals: [
      'Create a national common curriculum (Base Nacional Comum Curricular - BNCC) covering all of basic education',
      'Define learning objectives, skills, and competencies all students must achieve at each grade level',
      'Establish ten general competencies aligned with 21st century skills',
      'Promote competencies including lifelong learning, critical thinking, communication, digital literacy, entrepreneurship, empathy, and citizenship',
      'Reduce educational inequality by providing common standards for all students',
      'Align all education policies (curricula, materials, training, evaluations) to these standards',
      'Move literacy expectations from end of third grade to end of second grade',
      'Include clear learning objectives for early childhood education'
    ],
    
    strategies: [
      'Multi-stakeholder consultation with three BNCC versions developed from 2015-2018',
      'First version (Sept 2015): 12 million contributions from 45,000 schools and 207,000 teachers',
      'Second version (May 2016): State seminars in all 26 states with 9,000 participants',
      'Third version (Dec 2017): Public hearings with 1,707 participants across five regions',
      'ProBNCC program: Federal government financing and technical support for curriculum development',
      'Promote collaboration between states and municipalities',
      'Align National Textbook Program (PNLD) to distribute BNCC-aligned textbooks',
      'Mandate BNCC incorporation into teacher training curricula within 2 years',
      'Update national evaluation system (SAEB) to assess BNCC competencies',
      'Partnership with third sector for supporting materials and online courses',
      'International benchmarking from US Common Core, Australia, Chile, and British Columbia'
    ],
    
    results: `By end of 2019, several milestones were achieved:

**BNCC Approval and Adoption:**
• BNCC for early childhood through lower secondary approved December 2017
• Complete BNCC including upper secondary approved December 2018
• All 26 states and Federal District approved BNCC-aligned curricula by October 2019
• Reform survived four changes in Minister of Education and three political transitions

**Implementation Progress:**
• BNCC-aligned textbooks began arriving: 2019 (primary), 2020 (lower secondary), 2021 (upper secondary)
• National evaluation system (SAEB) updated to align with BNCC starting 2019
• ProBNCC successfully supported states in developing curricula
• Extensive support materials created (online courses, implementation guides, videos)
• Project-based learning textbooks focused on ten core competencies introduced

**Factors Affecting Results:**
• University resistance: Many scholars opposed BNCC as infringing on pedagogical autonomy
• Teacher training gap: Limited enforcement of BNCC integration in training programs
• Textbook limitations: National program bypassed local curricula, reducing alignment
• Publishing lobby: Resistance to decentralizing textbook decisions
• Evaluation pressure: Schools focused on Math and Portuguese over broader competencies
• Measurement challenge: Difficulty assessing ten core 21st century competencies
• Long timeline: First full 12-year BNCC cohort won't graduate until 2032
• Political uncertainty: Conservative influences under new administration

**Success Factors:**
• Civil society movement maintained continuity across political transitions
• Broad coalition from left to right supported reform
• Extensive consultation built legitimacy (12+ million contributions)
• Federal, state, and municipal partnership
• Strong third sector support with implementation materials`
  },
  finland: {
    id: 'finland',
    name: 'Finland',
    flag: '🇫🇮',
    tagline: 'Sustaining excellence through teacher autonomy',
    authors: 'Jari Lavonen',
    available: true,
    color: 'from-blue-400 to-white',
    
    situation: `Finland had an internationally recognized high-performing education system that successfully combined high quality with widespread equity and social cohesion. International interest began in 2002 when PISA results showed Finnish 15-year-olds ranked high in reading, science, and mathematics. Finnish students achieved high scores among OECD countries in 2000, 2003, 2006, and 2009, with both high scores and low variation in performance. Finland was ranked second in the world for the impact a nation's education system has on stabilizing its economy and developing its social environment. Success was explained by collaborative education policy implementation, a decentralized system with high teacher autonomy, and professional teachers educated in 5-year university master's programs (required for 45+ years). However, PISA 2012 and 2015 showed declining learning outcomes, and TALIS 2013 demonstrated weaknesses in school operations and teacher activities. Policymakers argued the system was no longer adequately promoting 21st century competences or preparing students for the future.`,
    
    indicators: [
      { label: 'PISA Performance', value: 'High (2000-2009)', icon: '📊' },
      { label: 'Global Education Rank', value: '2nd worldwide', icon: '🌍' },
      { label: 'Performance Variation', value: 'Low (high equity)', icon: '⚖️' },
      { label: 'Teacher Education', value: '5-year Master\'s', icon: '🎓' },
      { label: 'PISA Trend', value: 'Declining (2012-15)', icon: '📉' },
      { label: 'System Type', value: 'Decentralized', icon: '🏛️' },
      { label: 'Teacher Autonomy', value: 'Very High', icon: '✨' },
      { label: 'Equity Level', value: 'High', icon: '🤝' }
    ],
    
    challenges: [
      'Decrease in learning outcomes, wellbeing, and engagement in learning (PISA 2012, 2015)',
      'Lack of interest in STEM careers among students',
      'Challenges integrating formative and summative assessment to support learning',
      'Difficulties guiding students in active and collaborative learning processes',
      'Teaching and learning in heterogeneous and multicultural classrooms',
      'Supporting students to learn 21st century competencies according to new curriculum',
      'Designing and using versatile learning environments including technology',
      'Increase in variation between schools in learning outcomes',
      'Lack of effective teacher collaboration within and across schools',
      'Insufficient pedagogical leadership support for teachers\' professional learning',
      'Challenges in teachers\' pedagogical competences and innovative orientation',
      'Lack of willingness and competencies for personal professional development',
      'Young people dropping out of school or from labor market and increasing inequality',
      'Influence of digitalization (AI, automation) on education sector',
      'Need for continuous adult training to reflect changes in working life'
    ],
    
    context: `The reform started at the political level when the government emphasized that 21st century competences should be better integrated into schools (Change in Basic Education Act 642/2010). This was part of Prime Minister Sipilä's government programs (2015-2019). Several national forums, committees, and projects were launched since 2013, including Future Upper Secondary School, Future Primary and Secondary Education Group, and the Finnish Teacher Education Forum. The reform occurred in Finland's decentralized education system where teachers, schools, municipalities, and universities have high autonomy. Professional teachers are responsible for local curriculum design, learning environment design, and student assessment. The reforms were designed collaboratively with broad stakeholder participation, reflecting Finland's tradition of collaborative reform and strategy development to overcome challenges.`,
    
    minister: `The Ministry of Education and Culture was responsible for overall planning and legislation. The Finnish National Board of Education (a national development agency) prepared the national core curriculum and supported implementation. The Finnish Teacher Education Forum was created in 2016 to prepare the teacher education development program. Key stakeholders included: teachers and teacher educators from universities and applied universities; representatives from the Association of Finnish Local and Regional Authorities; the Teacher's Union, Student's Unions, and Principal Association; municipalities (providers of education); the Finnish Education Evaluation Centre; educational scientists and researchers from various subject areas; and panels of experts including pre-primary classroom teachers, subject teachers, and principals. The collaborative design process involved approximately 70 experts from these various organizations working together.`,
    
    goals: [
      'Implement 21st century competences aligned with DeSeCo framework into teaching and learning',
      'Develop seven transversal competences across all subjects: (1) taking care of oneself and managing daily life, (2) multiliteracy, (3) digital competence, (4) working life competence and entrepreneurship, (5) participation and building sustainable future, (6) thinking and learning to learn, (7) cultural competence, interaction, and expression',
      'Increase collaborative classroom practices through multidisciplinary, phenomenon- and project-based studies',
      'Provide at least one study period per year focused on phenomena/topics of student interest with student participation in planning',
      'For teacher education: develop broad and solid knowledge base (subject matter, pedagogy, diversity, collaboration, digital and research skills)',
      'For teacher education: build competence in generating novel ideas and educational innovation',
      'For teacher education: develop competences for teachers\' own expertise development and school improvement',
      'Support teachers and schools in implementing transversal competences through local curriculum autonomy'
    ],
    
    strategies: [
      'National core curriculum designed collaboratively 2013-2014 with large expert panels',
      'Transparent process using social media, open discussion forums, and local meetings across Finland',
      'First draft uploaded to Finnish National Board of Education website for public comments from all stakeholders',
      'Multiple rounds of feedback and revision based on content analysis of comments',
      'Two-level curriculum structure: national core curriculum plus local school/municipal curricula',
      'Transversal competences integrated into aims of various school subjects (not separate)',
      'Majakka-network established by National Board of Education to support schools',
      '100 million euro allocated in 2017 for 2000 tutor teacher positions in municipalities to support implementation',
      'Teacher Education Forum organized 2016-2018 with literature review on teacher knowledge and education',
      '12 nationwide meetings and 7 local meetings for teacher education stakeholders',
      'National web-based brainstorming process to generate and rank ideas for teacher education priorities',
      'Development program published October 2016 with three strategic competence goals and six action guidelines',
      '31 pilot projects selected and financed with 30 million euro from state budget',
      'Pilot projects presented and received feedback at forum meetings 2017-2018',
      'Piloting, seminars, conferences, support systems, local collaborations, and networking for implementation'
    ],
    
    results: `By 2018-2019 (when chapter was written), significant progress was made:

**What Actually Happened:**

Curriculum Reform Implementation:
• National core curriculum for basic education approved 2014
• Local curricula developed by all municipalities and schools based on national framework
• 2018 evaluation by Finnish Education Evaluation Centre found national and local steering systems successfully supported implementation and classroom teaching
• Transversal competences integrated with school subject aims at school level
• Teachers aware of this integration and the seven transversal competence areas
• Schools providing multidisciplinary phenomenon-based study periods as required

Teacher Education Reform Progress:
• Teacher Education Development Program published October 2016
• 31 pilot projects initiated at end of 2016 across Finnish universities
• Projects focused on three strategic competence goals and six action guidelines
• 2018 evaluation found strong emphasis on community building and collaboration in pilot projects
• Networking successfully brought together different experts and stakeholders
• All three strategic competence goals being addressed through pilot projects

Factors Affecting Results - Ongoing Challenges:
• **Integration into practice**: Challenges persist in integrating transversal competences into actual classroom teaching and learning despite awareness
• **Teacher education clarity**: Need for clearer plan to support achievement of strategic competence goals
• **Long-term evaluation needed**: Effectiveness of pilot projects requires monitoring and evaluation during and after completion (expected 2023-2024)
• **Too early for full assessment**: Too early to evaluate level of impact curriculum and development program have had on education practices
• **Systemic implementation**: Unclear how well curriculum and program have helped overcome identified challenges in education

Success Factors:
• Collaborative design involving all stakeholders built ownership and commitment
• Decentralization and autonomy allowed local adaptation to contexts
• Multiple rounds of public consultation built legitimacy
• Substantial resource allocation (130 million euro total for tutor teachers and pilot projects)
• Transparent process using various communication channels
• Respect for teacher professionalism and status in Finnish society
• Tradition of collaborative reform and strategy development
• Holistic approach developing curriculum and teacher education simultaneously
• Good timing with adequate time for design and implementation
• Strong partnership with teacher unions and employer organizations
• Consensus-building approach throughout design and implementation

The reforms demonstrated how Finland leveraged its decentralized system and teacher autonomy while providing coordinated national support, though full impact on classroom practice remained to be evaluated.`
  },
  japan: {
    id: 'japan',
    name: 'Japan',
    flag: '🇯🇵',
    tagline: 'Cultivating competencies for a changing society',
    authors: 'Shinichi Yamanaka & Kan Hiroshi Suzuki',
    available: true,
    color: 'from-red-400 to-white',
    
    situation: `In the 1980s, Japan's education system faced serious problems: children's bullying, school violence, truancy, psychological and physical pressure from excessively competitive entrance examinations, and schools' inaction regarding problematic teachers. Japan had achieved dramatic economic growth after WWII, reaching the world's 2nd highest GNP by 1968 through mass production and consumption. However, by the 1980s, society suffered side effects of wealth including environmental problems, disintegration of family units and communities due to urbanization, and weakened traditional values. The education system was characterized by standardized "cramming-style" rote learning focused on university entrance examinations, which created fierce competition starting in early teens. School record-oriented employment favored alumni of elite universities, making entrance exam competition extremely intense. The system successfully taught Western science and technology but stifled creativity, individuality, and independent thinking needed for 21st century. Japan transitioned from following Western models to setting its own goals without a model, requiring fundamental changes in education approach.`,
    
    indicators: [
      { label: 'High School Enrollment', value: '94%', icon: '🎓' },
      { label: 'College Enrollment', value: '37% (1980s)', icon: '📚' },
      { label: 'GDP Rank (1980s)', value: '2nd worldwide', icon: '💰' },
      { label: 'PISA 2000 Math', value: '1st place', icon: '🥇' },
      { label: 'PISA 2006 Math', value: '6th (decline)', icon: '📉' },
      { label: 'PISA 2012 Total', value: '1st in OECD', icon: '🏆' },
      { label: 'PISA 2015 Total', value: '1st in OECD', icon: '🏆' },
      { label: 'Public Schools', value: '96% (K-9)', icon: '🏫' }
    ],
    
    challenges: [
      'Excessively competitive university and high school entrance examinations causing psychological and physical stress',
      '"Cramming-style" rote learning focused on memorization rather than application and creativity',
      'Inflexible, standardized educational approaches that stifled individuality',
      'Non-transparent culture where schools concealed problems (bullying, teacher misconduct)',
      'Problematic student behaviors: bullying, school violence, truancy',
      'Inaction by schools and boards of education in addressing problems',
      'Lack of responsibility, mission, autonomy, and initiative at boards of education',
      'Deep-rooted mindset that education was granted by national government (passive approach)',
      'Exclusive nature of schools keeping problems hidden under "educational considerations"',
      'Teachers and schools waiting for upper echelons to make decisions',
      'Transition from twentieth century standardized skills to twenty-first century creativity',
      'Need to shift from following Western models to setting Japan\'s own creative goals',
      'Declining student motivation to learn and low self-esteem despite improved test scores',
      'PISA score decline (2003, 2006) causing public criticism of reforms ("PISA shock")',
      'University entrance exams still focused on quantity of knowledge rather than competencies',
      'Risk of superficial implementation of reforms without meaningful change in classroom practice'
    ],
    
    context: `The reform started as part of Japan's larger societal transition from 20th to 21st century industry and society. After becoming the world's 2nd largest economy (1968), Japan had to shift from catching up with Western countries to setting its own goals for prosperity. The Ad Hoc Council on Education was established in 1984 by the Prime Minister as an advisory panel to support reforms beneficial to society as a whole, not just educators. This signaled that education reform was a national priority involving nationwide debate with industry, unions, mass media, politicians, and educators. The reform occurred during Japan's economic maturation, internationalization requiring global contributions beyond self-interest, and advances in information technology and AI. Japan experienced "lost two decades" after the 1990s bubble economy collapse, and in 2010 China's GDP surpassed Japan's (Japan fell to 3rd). Public concern about losing global competitiveness led to criticism of reforms as "Yutori (relaxed) Education" weakening Japan's strength. Despite political and public pressure, Japan maintained the reform direction towards 21st century education while making adjustments.`,
    
    minister: `The Ad Hoc Council on Education (1984-1987) was established by the Prime Minister, issuing four reports that set reform direction emphasizing respect for individuality and independent thinking. The Ministry of Education, Culture, Sports, Science and Technology (MEXT) is responsible for the educational system from childhood to higher education. The Central Council for Education (CCE) within MEXT makes concrete recommendations based on Cabinet Office councils' proposals. The Education Rebuilding Council (2006) and Council for Implementation of Education Rebuilding (2013) were established in the Cabinet Office to make recommendations. The National Board of Education prepares National Curriculum Standards. Municipal boards of education are responsible for elementary and junior high schools, while prefectural boards of education oversee senior high schools. School principals have autonomy for curriculum planning and daily activities. The National Center for University Entrance Examinations (established 1979) administers university entrance tests. Multiple stakeholders participated including teachers, parents, local communities, business leaders, labor unions, and education researchers in an unusually broad collaborative process.`,
    
    goals: [
      'Transform education from twentieth century standardized rote learning to twenty-first century learning',
      'Shift focus from cramming to helping students acquire ability to learn and think independently',
      'Develop students\' qualities and abilities to think, judge, and take responsibility for their actions',
      'Help children develop creativity, flexible mindsets, and ability to express themselves',
      'Foster "zest for life" encompassing knowledge/skills, thinking/judgment/expression ability, and motivation to learn',
      'Cultivate competencies to think, make judgements, express and act independently through cross-curricular learning',
      'Develop students who can apply knowledge to real-life issues rather than merely acquire knowledge',
      'Prepare students for rapid social changes, globalization, and advances in AI and technology',
      'Nurture intellectual, productive, creative and emotionally-healthy individuals with individuality',
      'Foster self-discipline, ability to cooperate, empathy, and emotional health',
      'Implement "independent and interactive in-depth learning" and active learning across all subjects',
      'Create education system where students, schools, and educators think, judge, and act autonomously',
      'Establish framework for responsibility in school management and coordination with society',
      'Reform university entrance examinations to evaluate broader competencies beyond academic knowledge'
    ],
    
    strategies: [
      'Ad Hoc Council on Education (1984-1987) established direction with four comprehensive reports',
      'National Curriculum Standards revised approximately every 10 years (1990s, 2000s, 2010s, 2020s)',
      '1990s reforms: "New perspective on academic performance" emphasizing independent learning, hands-on learning, and problem-based learning; introduced "life environment studies" subject',
      '2000s reforms: Introduced "Period of Integrated Study" for cross-curricular project-based learning; reduced teaching content by 30% to allow time for independent thinking; implemented five-day school week',
      '2010s reforms: Increased instructional hours by 10% to strengthen learning foundations while maintaining knowledge application focus; slightly reduced but maintained "Period of Integrated Study"',
      '2020s reforms: New standards specify "what students will be able to do and how they learn" (not just what teachers teach); incorporate active learning across all subjects; introduce new subjects (scientific exploration, general exploration, public comprehensive history, comprehensive geography)',
      'National Assessment of Academic Ability introduced in 2007 covering all public elementary and junior high schools nationwide to measure progress and identify weaknesses',
      'Assessment includes Section A (knowledge acquisition) and Section B (knowledge application); added science (2015) and English (2019)',
      'Reform of university entrance examinations: National Center Test (1990) to assess National Curriculum Standards compliance; new "Standardized Test for University Admissions" (2021) to include short-answer questions and assess thinking/judgment abilities',
      'Teacher training reforms: induction training system, teacher license renewal system, improved training programs for working teachers',
      'School Management Council System (Community Schools, 2004) incorporating local communities into school management; made legally obligatory in 2017',
      'School evaluation system (2002, legal 2006) requiring self-evaluation and third-party evaluation by guardians and community',
      'Decentralization: transfer authority from national to prefectural to municipal to school level while maintaining national standards',
      'National and municipal projects provided workshops, pedagogical documents, and model schools for research',
      'Teaching certificate reform to employ non-teaching career professionals as teachers',
      'Coordination between schools and society through various partnerships'
    ],
    
    results: `By 2018-2019 (when chapter was written), significant achievements were made over 40 years of continuous reform:

**What Actually Happened:**

Academic Performance Recovery and Excellence:
• After PISA 2003 and 2006 decline (reading 14th/15th, math 6th/4th), Japan recovered strongly
• PISA 2009: 8th reading, 9th math, 5th science
• PISA 2012: 4th reading, 4th math, 4th science (1st overall among OECD)
• PISA 2015: 8th reading, 5th math, 2nd science (1st overall among OECD)
• 2018 OECD report: "Japan's education system is one of the top performers among both youth and adult population"
• National Assessment of Academic Ability showed narrowing gap between underachieving prefectures and national average nationwide

Curriculum and Pedagogy Evolution:
• Successfully maintained reform direction through public criticism and "PISA shock"
• National Curriculum Standards revised four times (1990s, 2000s, 2010s, 2020s) with progressive refinement
• "Period of Integrated Study" maintained despite criticism as "Yutori Education"
• 2020s standards successfully incorporated active learning across all subjects
• Specific model schools featured internationally (Hiroshima Nagisa High School, Kosen School, N High School)
• Andreas Schleicher praised Japanese schools as models of 21st century education

System Reforms Implemented:
• National Assessment covers all public K-9 schools measuring both knowledge acquisition and application
• School Management Council System became legal obligation (2017) in all schools
• School evaluation system legally established (2006) with self-evaluation and third-party review
• 527 universities (90% of all universities) adopted National Center Test by 2015
• 560,000 applicants (80% of university applicants) taking standardized national test
• Standardized Test for University Admissions scheduled for 2021 implementation
• PDCA cycle successfully implemented for continuous improvement
• Decentralization proceeded with transfer of authority to local level

Factors Affecting Results - Ongoing Challenges:
• **Persistent university exam influence**: Despite reforms, entrance examinations still focused too heavily on memorized knowledge rather than competencies
• **Motivation and self-esteem**: While academic performance improved, issues with low motivation to learn and low self-esteem remained
• **Implementation depth**: OECD warned "magnitude of reform should not be minimized" and risks that "proactive, interactive and authentic learning may be adapted only as superficial change"
• **Teacher and school capacity**: Need for schools and teachers to truly become autonomous actors who think, judge, and implement 21st century education independently
• **Systemic alignment**: Ongoing need to maintain alignment across "interdependent components" including curriculum, teaching, assessments, and teacher training
• **School-community partnerships**: Need to preserve and enhance partnerships with local communities
• **Teacher workload**: Need for management practices to alleviate excessive teacher workload
• **Cultural resistance**: Deep-rooted mindset of passive adherence to national policy persisted in some areas
• **Long timeline**: Full transformation required 40+ years of continuous effort and still ongoing

Success Factors:
• Comprehensive approach covering all aspects (curriculum, assessment, teacher training, administration, community)
• Sustained political commitment across multiple governments and decades
• Nationwide debate involving all stakeholders beyond education sector
• Maintained direction despite severe public criticism and "PISA shock"
• Evidence-based approach using National Assessment and PISA data to guide improvements
• Introduction of additional measures (more teachers, morning reading sessions) from 2009 to address specific weaknesses
• Recognition as part of larger societal transition, not just education sector reform
• OECD recognition in 2018 of excellent results linked to learning environment, teacher quality, family support, and well-rounded holistic education

OECD 2018 Recommendations for Continued Progress:
• Prioritize curriculum reform with sustained alignment across components
• Adapt assessments to reflect new curriculum
• Invest in teacher training and initial teacher education
• Review school leadership roles and training
• Enhance school-community partnerships
• Focus on management practices to support new curriculum introduction

Japan's 40-year reform demonstrated that transforming from 20th to 21st century education requires comprehensive, sustained effort across all system components with broad societal engagement.`
  },
  mexico: {
    id: 'mexico',
    name: 'Mexico',
    flag: '🇲🇽',
    tagline: 'Comprehensive curriculum reform',
    authors: 'Elisa Bonilla-Rius',
    available: true,
    color: 'from-green-400 to-red-400',
    
    situation: `Mexico's education system in 2012 was the world's 9th largest with 36.4 million students, 2 million teachers, and 260,000 schools, but performed poorly despite its scale. On PISA 2012, Mexico ranked 53rd out of 65 countries. On national tests (PLANEA 2017), 64% of 9th graders scored at the lowest level in Mathematics and 34% in Spanish, meaning most left school unable to comprehend complex texts or apply algebraic skills. The system was highly vertical and centralized despite 1992 decentralization to 32 states. Over decades, the powerful National Teachers' Union (SNTE, 1.6M members) had effectively established shared governance with the state, leading to severe corruption: teaching positions were sold ($5,000-$30,000), rented, or inherited rather than allocated by merit. A 2012 census revealed 298,000 "phantom teachers" (13% of payroll) not showing up for work but being paid. The union controlled hiring and promotions through cronyism rather than competence. Major inequalities existed: rural students scored 55 points below urban students in Spanish; children of illiterate parents scored 161 points below those with university-educated parents. The system was characterized by dated practices, lack of transparency, chronic teacher absenteeism, overloaded curriculum with superficial coverage, and predominant lecturing with little student interaction.`,
    
    indicators: [
      { label: 'Students', value: '36.4 million', icon: '👥' },
      { label: 'Teachers', value: '2 million', icon: '👨‍🏫' },
      { label: 'Schools', value: '260,000', icon: '🏫' },
      { label: 'PISA 2012 Rank', value: '53rd/65', icon: '📉' },
      { label: '9th Grade Math (Low)', value: '64%', icon: '📊' },
      { label: '9th Grade Spanish (Low)', value: '34%', icon: '📖' },
      { label: 'Teacher Absenteeism', value: '13% (298k)', icon: '❌' },
      { label: 'Teaching Position Price', value: '$5k-$30k', icon: '💰' }
    ],
    
    challenges: [
      'Powerful teachers\' union (SNTE) had established de facto shared governance with state',
      'Massive corruption: teaching positions sold ($5k-$30k), rented, or inherited rather than merit-based',
      '298,000 "phantom teachers" (13% of payroll) not showing up but being paid',
      'Union controlled hiring and promotions through cronyism and political compliance',
      'Very poor learning outcomes: PISA 53rd/65 countries; PLANEA 64% lowest level in Math',
      'Severe inequalities: rural vs urban (55 points), by parental education (161 points)',
      'System lacked reliable statistical information about actual schools, teachers, students',
      'Chronic teacher absenteeism and lack of accountability',
      'Overloaded curriculum with superficial coverage, no depth for higher-order thinking',
      'Predominant lecturing teaching method with little student interaction or critical thinking',
      'Weak teacher preparation: 62% didn\'t complete teacher education program; 24% felt unprepared',
      'Limited principal autonomy: only 16% could hire teachers vs 39% TALIS average',
      'Highly vertical and bureaucratic despite 1992 decentralization',
      'Schools focused on bureaucratic demands rather than student learning',
      'Lack of induction (72% no access) and mentoring (60% no access) for new teachers',
      'Violent opposition from radical union faction (CNTE) in 4 states disrupting implementation',
      'Top-down reform approach left many teachers feeling excluded from decision-making'
    ],
    
    context: `The reform launched December 2012 at the start of President Enrique Peña-Nieto's federal administration (2012-2018) as part of the historic "Pact for Mexico" - a political agreement among the three largest parties (PRI, PAN, PRD) plus 31 governors. This pact proposed 11 structural reforms to promote growth, create jobs, and reduce poverty after decades of political gridlock. Education was one of the most substantial reforms. The reform was performance-based (focused on quality and outcomes) rather than service-expansion based. It marked a turning point requiring the state to regain full control of the education system from SNTE, whose corruption and political interference had accumulated over decades. The reform faced major political opposition from CNTE (radical union faction controlling 4 states: Oaxaca, Chiapas, Guerrero, Michoacán) who violently resisted, captured media attention, and promoted a smear campaign. The 2018 presidential election brought a new party (MORENA) to power whose candidate campaigned against the reform and allied with CNTE. In May 2019, constitutional reforms were introduced to roll back the 2012-2018 policies, leaving the reform's future uncertain.`,
    
    minister: `Three Ministers of Education during reform: Emilio Chuayffet (Dec 2012-Aug 2015), Aurelio Nuño (Aug 2015-Dec 2017), Otto Granados (Dec 2017-Nov 2018). The Ministry of Education (SEP) leads the system and defines national curriculum. The National Institute for Educational Evaluation (INEE) was given autonomy in 2013 to conduct evaluations (later dismantled by 2019 government). Key actors included: 32 state governors and education secretaries participating through National Board of Directors; SNTE (National Teachers' Union, 1.6M members) whose power needed to be curtailed; CNTE (radical union faction) who violently opposed reform; two massive public consultations (2014: 28,000 people, 15,000 written submissions; 2016: 81,800 entries, 298,200 comments); over 100 specialists (national and international) who designed curriculum; academic validation by Mexican Academy of History, Mexican Academy of Language, Mexican Academy of Sciences; National Congress which passed constitutional amendment and three education acts (2013); civil society organizations and NGOs; OECD and World Bank providing technical guidance; Cambridge English Language Assessment supervising English curriculum; and over 1 million teachers who voluntarily enrolled in online training courses.`,
    
    goals: [
      'Transform large complex system to prepare students for 21st century challenges',
      'Provide quality education with equity as guiding principles to make Mexico prosperous, fair and free',
      'Develop 11 competences: (1) language & communication, (2) mathematical thinking, (3) understanding natural/social worlds, (4) critical thinking & problem solving, (5) socioemotional abilities & life project, (6) teamwork & collaboration, (7) citizenship & social life, (8) creativity & artistic appreciation, (9) health care, (10) environmental care, (11) digital abilities',
      'Educate the whole child through comprehensive curriculum addressing cognitive, interpersonal, and intrapersonal skills',
      'State regain full control of education system from union\'s patrimonial power',
      'Eliminate corruption: selling, renting, inheriting teaching positions',
      'Base teacher career (hiring, certification, promotion) on merit through appraisals, not cronyism',
      'Place schools at center of system (serve students, not bureaucracy)',
      'Grant curricular autonomy to schools to meet individual student needs and interests',
      'Introduce socioemotional learning (SEL) from PreK through 9th grade',
      'Shift from overloaded curriculum to depth and key learnings for higher-order thinking',
      'Transform teaching from lecturing to interactive, student-centered, problem-based approaches',
      'Reduce severe inequalities in outcomes by region, socioeconomic status, indigenous status',
      'Extend compulsory education to include high school (age 18)'
    ],
    
    strategies: [
      'Pact for Mexico (Dec 2012): Historic political agreement among three parties, 31 governors for 11 structural reforms',
      'Constitutional amendment (2013) recognizing right to quality education',
      'Three new education acts (2013): amended Education Act, Educational Evaluation Act, Teachers\' Professional Development Act',
      '2012 Census to accurately count schools, teachers, students (revealed 298k phantom teachers)',
      'New Educational Model (NME) with five dimensions: (1) new curriculum, (2) schools at center, (3) teacher professionalization, (4) equity/inclusion, (5) new governance',
      'Professional Teaching Service (SPD) created for merit-based hiring/promotion through appraisals',
      'Teacher appraisals: 2014-2018 over 317,000 teachers offered jobs through competitive process (numbers increased yearly)',
      'Recovered 44,076 irregular teaching positions from union control',
      'New curriculum with three components: Academic Knowledge (cognitive), Social & Personal Development (SEL, Arts, PE), Curricular Autonomy (school-designed clubs)',
      'Introduced SEL PreK-9: 5 dimensions (self-awareness, self-management, autonomy, empathy, collaboration) with 25 specific skills',
      'Curriculum structured with graduated-contents-tables showing progression K-9',
      '14 pedagogical principles emphasizing student-centered, interactive, situated learning',
      'Two massive public consultations (2014, 2016) with tens of thousands of participants',
      'Technical Assistance Service for Schools (SATE) created',
      'Trained 18,000 supervisors over 18 months in technical-pedagogical support',
      'Over 1 million teachers voluntarily enrolled in online training courses (2017-2018)',
      'National Board of Directors established (2016) with federal and 32 state education officials',
      'Published 200 million copies of 1,492 new titles distributed to all schools (2018)',
      'Curricular Autonomy pilot (Phase 0) in 1,027 schools before national rollout',
      'Expanded Full-Time Schools program from 6,700 (2012) to 25,132 (2018) with 6-8 hour days',
      '$2.5 billion investment renovating 33,000 schools\' infrastructure',
      'Expanded scholarships from minimal to 7.7 million students ($1B over 6 years)',
      'School Management Council System for community involvement in governance',
      'School evaluation system requiring self-evaluation and third-party review',
      'STEM awareness strategy for girls using women scientists as mentors',
      'Implementation route published (2017) with specific policies, goals, timelines, responsible officials'
    ],
    
    results: `By 2018 (when chapter written), extensive achievements but also major challenges and uncertain future:

**What Actually Happened:**

Breaking Union Control - Major Success:
• State successfully regained control of education system from SNTE
• 44,076 irregular teaching positions recovered
• 298,000 "phantom teachers" identified and addressed
• Selling/inheriting positions ended (positions cost $5k-$30k in black market before reform)
• Union forced to pay salaries of teachers working for them (previously paid by state)
• Constitutional and legal framework established for merit-based system

Teacher Professionalization - Significant Progress:
• Professional Teaching Service (SPD) successfully implemented
• 2014-2018: 317,000+ teachers offered jobs through competitive appraisals (69,490 first year, increasing to 88,864 fourth year)
• Study showed teachers hired from 2014 onward significantly better qualified than general population
• 18,000 supervisors completed intensive 18-month training
• Over 1 million teachers voluntarily completed online training for new curriculum (2017-2018)
• Teachers reported appraisals useful: 80%+ received feedback on teaching through student test score analysis and classroom observation

Curriculum Development and Dissemination:
• Goals for 21st Century Education published, widely distributed in millions
• New curriculum (PreK-9, grades 10-12, ages 0-3) completed and published 2017
• 200+ million copies of 1,492 new educational titles distributed to all schools (2018)
• Comprehensive website and multimedia materials for teachers
• Curricular Autonomy pilot (Phase 0) in 1,027 schools (2017-2018) showed: increased student interest and engagement, decreased bullying, better student interaction across grades, strengthened sense of belonging, improved attitudes/values, more interdisciplinary teaching teams, increased collaborative work
• Full implementation began August 2018 (6 grades Academic Knowledge, all grades SEL and Autonomy)

System-Level Infrastructure Changes:
• All 32 states participated through National Board of Directors
• INEE gained autonomy as independent evaluation body
• School evaluation system legally established
• 33,000 schools renovated ($2.5B investment)
• Full-Time Schools expanded from 6,700 to 25,132 (2012-2018)
• 1.5 million students receive daily meal at full-time schools
• Scholarships expanded to 7.7 million students ($1B over 6 years)
• Illiteracy reduced from 6.4% to 4% (lowest ever)
• High school enrollment increased 19 percentage points to 85%

Academic Performance - Mixed and State-Dependent:
• **National level**: PLANEA 2015 and 2017 results remained similar - still very low overall
• **State variation critical**: 11 states improved significantly in Spanish, 18 in Math
• **Dramatic success case - Sonora**: Improved 29 points Spanish, 27 points Math in 2 years (from 27th place to above national mean) through committed state plan with 122 low-performing schools receiving intensive support, diagnostic testing, teacher training, follow-up visits, parent engagement
• **Consistent excellence - Puebla**: Despite 59.5% poverty and 1/3 of Nuevo Leon's GDP, maintained 1st place by placing student learning at center, providing technical assistance, mentoring from supervisors
• **Declines**: Some states worsened (Tamaulipas -28 points both subjects; Zacatecas -23 Spanish)
• **4 CNTE states**: Didn't participate in PLANEA, likely minimal implementation
• **Full-Time Schools impact**: World Bank evaluation showed strong positive effects on learning, especially for vulnerable students; effects maintained over time; greater impact in poorest areas

**Factors Affecting Results - Critical Challenges:**

Political Reversal and Discontinuity - Existential Threat:
• **New government hostile**: President elected July 2018 (took office Dec 2018) campaigned against reform, allied with CNTE
• **May 2019 counter-reform**: Constitutional reform introduced to roll back 2013 policies
• **Teacher appraisals eliminated** from Constitution
• **INEE dismantled**, replaced with new organization emphasizing teacher training over evaluation
• **Three 2013 education acts being revised** - fate of individual policies uncertain as of chapter writing
• **Union power restoration?**: Unclear how much power will revert to SNTE
• **Opportunism and demagogy**: Narrative ignored facts, advances, data, and high public approval (polls consistently supported reform 2012-2018)

Implementation Challenges - Insufficient Time and Depth:
• **Timeline too short**: Core documents only published 2017 (5 years into 6-year term); full implementation started August 2018 (15 weeks left in administration)
• **Teaching transformation incomplete**: Despite training 1M+ teachers, biggest challenge remains transforming actual classroom practices, especially in economically deprived areas
• **Theory-practice gap**: Pedagogical principles understood conceptually but not yet embedded in daily practice
• **Superficial adoption risk**: OECD warned of risk that "proactive, interactive and authentic learning may be adapted only as superficial change"
• **Teacher training gaps**: Initial and in-service training need much further improvement
• **Technical assistance**: More developed at regulatory than practical level; not fully implemented despite training all supervisors
• **Support needs**: Curricular Autonomy survey revealed teachers need more support, advice, timely follow-up by supervisors for diagnosis, planning, curriculum design

Structural and Systemic Issues:
• **Governance incomplete**: New governance structure not fully developed despite being stated goal - major pending issue
• **Accountability weak**: Failed to assign clear responsibilities for academic outcomes to specific stakeholders at state/school level
• **State variation extreme**: Wide disparities in state commitment to improving outcomes; some states dramatically improved, others declined
• **Infrastructure inadequate**: Traditional classrooms not suited for new curriculum demands (Curricular Autonomy clubs, collaborative work)
• **Top-down approach limitations**: Teachers felt left out of decision-making, didn't fully embrace objectives, didn't see themselves represented
• **CNTE strongholds**: 4 states (Oaxaca, Michoacán, Guerrero, Chiapas) with violent opposition, minimal/no implementation
• **Inequality persists**: Despite efforts, huge gaps remain between rural/urban, socioeconomic groups, indigenous/non-indigenous students

Timing and Sustainability Issues:
• **Long cycles needed**: Real transformation requires time to permeate system and be widely accepted
• **Continuity broken**: Education in Mexico is governmental policy (changes each administration) not State policy (continuous)
• **Too early to evaluate**: Reform 6 years, full implementation 1 year - systemic changes need much longer
• **Political timing vs technical effectiveness**: Political concertation took most of administration's time, leaving insufficient time for bottom-up approach

**Success Factors:**
• Historic political pact (Pact for Mexico) across partisan lines
• Clear legal framework through constitutional amendment
• Evidence-based using TALIS, PISA, PLANEA data
• Two massive public consultations with broad participation
• Over 100 specialists (national/international) in curriculum design
• Comprehensive approach addressing all system dimensions
• Built on successful programs (Full-Time Schools)
• Strong state examples (Sonora, Puebla) showed local implementation power
• OECD 2018 affirmed "moving in right direction"
• High public approval maintained throughout 2012-2018

**OECD 2018 Assessment and Recommendations:**
Affirmed: "Mexico has taken important steps... moving from input-driven to quality-focused system, more focused on student learning"
Warned: "All merits require careful support with inclusive and resourceful implementation... time to mature and flexibility to adjust"
Four priorities: (1) equity with quality, (2) 21st century learning for all, (3) supporting teachers and schools, (4) focusing evaluation on learning
Critical: Couple top-down approach with bottom-up strategies, promote stakeholder engagement, secure resources, take context into consideration

Mexico's reform demonstrated that breaking corruption and union control is possible but insufficient without sustained political commitment across administrations. The case shows how ambitious technical reforms can be undermined by political discontinuity, and how state-level variation can mask both dramatic successes and failures at national level.`
  },
  peru: {
    id: 'peru',
    name: 'Peru',
    flag: '🇵🇪',
    tagline: 'A wholesale reform fueled by obsession with learning and equity',
    authors: 'Jaime Saavedra & Marcela Gutierrez',
    available: true,
    color: 'from-red-400 to-white',

    situation: `After decades of expansion, Peru's education system had relatively high enrollment levels but suffered from extremely low and heterogeneous quality. By 2013, Peru faced a profound learning crisis: the country ranked last (65th out of 65) in PISA 2012 results. Despite being a growing middle-income country with net enrollment rates close to 100% at primary level and 80% at secondary level, student learning outcomes were dismal. Peru had implemented first-generation economic reforms since the 1990s that fostered economic growth, but these did not include structural reforms promoting equality of opportunity. Educational opportunities had expanded massively since the 1970s, but quality was low and highly heterogeneous across regions, socioeconomic groups, and ethnicities. Since 2003, Peru had a national standardized exam for all 2nd grade classrooms showing learning rates were consistently low and relatively flat. The PISA 2012 results showing Peru in last place created a national "PISA shock" - education appeared on the front page of newspapers (which never happened). The government chose to "own the problem" and use the results to declare "We're not in trouble. We're in deep trouble." This shock catalyzed a comprehensive reform focused obsessively on improving learning and equity. School infrastructure was in very poor condition, textbooks were insufficient and arrived late, there were supply shortages, and almost all current expenditures went to teacher salaries. The public perceived teachers as uncommitted unionized public servants who cared only about job security, not student learning, though many teachers had intrinsic motivation despite low salaries and poor conditions.`,

    indicators: [
      { label: 'PISA 2012 Rank', value: '65th/65 (Last)', icon: '📉' },
      { label: 'Primary Enrollment', value: '~100%', icon: '🎓' },
      { label: 'Secondary Enrollment', value: '80%', icon: '📚' },
      { label: 'Total Students', value: '7 million', icon: '👥' },
      { label: 'Public Schools', value: '52,000', icon: '🏫' },
      { label: 'Teachers', value: '380,000 public', icon: '👨‍🏫' },
      { label: 'Indigenous Languages', value: '47 languages', icon: '🗣️' },
      { label: 'Economic Status', value: 'Middle-income', icon: '💰' }
    ],

    challenges: [
      'Last place (65th/65) in PISA 2012 - the "PISA shock" moment',
      'Extremely low and heterogeneous learning quality despite high enrollment',
      'Severe inequality: learning outcomes determined by parental background, location, ethnicity',
      'Massive rural-urban gap and indigenous-non-indigenous student gap',
      'Poor school infrastructure with no budget for maintenance',
      'Insufficient textbooks and supplies arriving late or not at all',
      'Teacher salaries fell to 1/3 of 1960s level in real terms - lowest paid professionals',
      '42% wage gap: professionals with similar characteristics earned 42% more than teachers',
      'Teaching profession lost social recognition and prestige over decades',
      'Low public perception: 30% believed teachers did low-quality work; 64% wouldn\'t want children to become teachers',
      'Teachers themselves had poor perception: 63% felt society minimizes their profession; 53% wouldn\'t want children to become teachers',
      'Aging teacher workforce: teachers under 35 fell from 51% (1999) to 21% (2012); over 44 increased from 15% to 47%',
      'Best secondary school graduates did not see teaching as preferred career path',
      'Proliferation of low-quality teacher training institutions with lowered standards',
      'No teacher incentives related to performance or student learning',
      'Ethnolinguistic diversity: 55 native communities speaking 47 different languages requiring bilingual education',
      'Only 50% of students needing native language instruction had trained bilingual teachers',
      'Only 25% of children with special needs received required services',
      'Rigid school management structure: principals spent time on administrative tasks, not pedagogical leadership',
      'Less than 1 administrative staff person per school (32k staff for 50k schools)',
      'Weak higher education regulation: chaotic expansion of private universities with extreme quality variation',
      'Poor access of disadvantaged students to quality higher education',
      'Long-standing perception that public education quality was inevitably mediocre'
    ],

    context: `The reform launched in 2013 at the start of a new government administration, following Peru's "PISA shock" in November 2013 when PISA 2012 results showed Peru ranked dead last (65th out of 65 countries). The government chose to "own the problem" rather than downplay results, using them to declare a national education crisis. This created unprecedented public attention - education appeared on newspaper front pages for the first time. The reform built on previous efforts including the National Plans developed through consultation (Plan Nacional de Educación para Todos 2005-2015) but required changing public perception that public education mediocrity was inevitable. At the 2012 Annual Conference of Business Executives (CADE), business leaders discussed using private sector as education provider because public sector reform seemed impossible. The reform had to be well-communicated and demonstrably implementable to show the public that change in the public sector was possible. Peru is a highly unequal country where parental socioeconomic background, location, and ethnicity determined education quality and access. The reform explicitly focused on improving the public system and providing more opportunities for the poor. The government enjoyed relative political support but faced resistance from entrenched interests (e.g., low-quality university owners). Strong public opinion support, especially from student organizations, was critical for passing controversial reforms. The reform occurred during a period of steady economic growth (20 years) but insufficient human capital investment - a classic quantity-quality tradeoff where enrollment expanded but per-pupil expenditures fell.`,

    minister: `Minister: Jaime Saavedra (World Bank economist, served as Minister of Education 2013-2016 during the reform). The Ministry of Education (MINEDU) had 3,500 staff managing the system. The system included 25 Regional Directorates of Education (DRE) with ~4,000 officials, and 220 Local Education Management Units (UGEL). Key institutional actors created: National Superintendence of Higher University Education (SUNEDU, 2015) to license universities based on quality standards and oversee public resource use. National Program of Scholarships and Educational Credit (PRONABEC, 2012) delivering almost 100,000 scholarships 2012-2016 with $280M annual budget - one of Latin America's largest fellowship programs. Stakeholders: 380,000 public school teachers and principals; 100,000 private sector teachers/principals; 52,000 public schools serving 7M students; teacher unions (complex but generally positive relationship - participated massively in evaluations despite concerns); student organizations from public and private universities (vocally supported reforms via social media and demonstrations); business community (initially skeptical about public sector reform capacity); National Council of Education; civil society; national and international curriculum experts; polling firm IPSOS (2015 survey on teaching profession perception); British Council and Pearson (English teacher training); international partners (agreements with US and UK for teacher scholarships); International Baccalaureate organization (certified High-Performance Schools); World Bank, CAF (impact evaluations). Legislative: Congress passed Teacher Reform Law (Ley de Reforma Magisterial, 2012), University Law (Ley Universitaria, July 2014) by slim margin despite political opposition and multiple legal challenges.`,

    goals: [
      'Address the profound learning crisis: move from last place (65th/65) in PISA to substantial improvement',
      'Shift national focus from enrollment expansion to obsession with learning outcomes',
      'Close massive inequality gaps: by parental background, urban-rural location, ethnicity, indigenous status',
      'Revalorize teaching career: increase social value, attract best candidates, make selection and promotion meritocratic',
      'Raise teacher salaries and link incentives to performance and student learning (not just tenure)',
      'Transform teacher workforce: reverse aging trend, attract talented youth, professionalize through development',
      'Improve quality of learning for all through modern curriculum aligned with 21st century competencies',
      'Define 11 learning outcomes students must reach: self-recognition, rights/duties, healthy lifestyle, artistic appreciation, multilingual communication, scientific inquiry, mathematical thinking, entrepreneurship, technology use, autonomous learning, spiritual/religious understanding',
      'Implement 7 cross-cutting approaches: rights-based, inclusive/diversity, intercultural, gender equality, environmental, common good, pursuit of excellence',
      'Expand early childhood education (ages 3-5): eliminate urban-rural access gap',
      'Provide each student with differentiated services according to their needs: bilingual intercultural education for 47 indigenous languages, special education for disabilities, high-performance schools for talented students',
      'Establish effective school and system management: increase autonomy, introduce meritocracy in principal selection, create evidence-based decision-making culture',
      'Close infrastructure gap: renovate schools, provide textbooks/materials on time, ensure basic conditions',
      'Reform chaotic higher education system: establish quality standards, license universities, regulate private sector',
      'Increase poor students\' access to quality higher education through large-scale national scholarship program',
      'Demonstrate to skeptical public that public sector education reform is possible and change can happen'
    ],

    strategies: [
      'Teacher Reform Law (Ley de Reforma Magisterial, 2012): new meritocratic career pathway based on performance, not tenure',
      'Teacher Vocation Scholarship (Beca Vocacion de Maestro, 2014): 500 annual merit-based scholarships for top students to study pedagogy in best universities',
      'First transparent teacher recruitment (2015): 202,000 applicants for 19,632 jobs; only 8,137 selected (4% entry rate - more selective than most prestigious universities); written test + peer-observed teaching demonstration; $6,000 bonus to top third performers; 54% went to rural schools',
      'First teacher promotion contests in 20+ years (2014): 180,000+ teachers took exams simultaneously in 60+ cities; ~1/3 promoted with average 32% salary increase (vs 8% over previous 5 years); transparent, objective, corruption-free; 11 evaluation processes held over 3 years',
      'School Bonus (Bono Escuela, 2014-2015): performance pay to all teachers/principals in top third of schools (ranked by learning gains, enrollment, retention); 30,000 teachers in 8,000+ schools; rigorous evaluation showed positive impact on learning and teacher attendance',
      'Direct communication with teachers: personalized text messages from minister to 180,000 teachers ("Maria, you are critical for education in Peru..."); national contests for teachers to share innovations and good practices; greater emphasis on teacher health and welfare',
      'Teacher Induction Program (2016): 6-month mentoring by experienced teachers for those with <2 years experience; 1,694 new teachers in 1,559 schools (2018); online materials and remote guidance',
      'School-based continuous professional development: permanent coaching program for early childhood and multi-grade primary teachers; school visits with immediate feedback after classroom observation, micro-workshops, courses; evaluated impact 0.25-0.38 SD on learning',
      'Curriculum update (2010-2016): nationwide consultation with public institutions, National Council of Education, civil society, teachers, national/international experts; review of curricula from multiple countries; approved June 2016',
      'New curriculum structure: competency-oriented and practical; learning process maps and standards per cycle; focus on progression and continuity; emphasis on in-class assessment; 11 exit profile outcomes; 7 cross-cutting approaches including gender equality (politically controversial - accused of "gender ideology" by conservatives)',
      'Pedagogical Support to Primary Schools (Soporte Pedagogico): sample lesson plans (controversial but highly demanded), training workshops, mentors/coaches in classrooms, peer-learning groups, virtual counseling, personalized math/language tutoring for grades 1-3, educational resource delivery, parental involvement activities; reached 1.1M students (43% of primary) in 18 regions by 2016',
      'Full-Day Secondary School model (Jornada Escolar Completa, JEC, 2015): extended schedule from 35 to 45 hours/week (matching private schools); more hours for math, communication, English, sciences, physical education, job training; added psychologists, social workers, tutors, pedagogical coordinators; better equipment/infrastructure; 1,000 schools (345k students) in 2015 → 2,001 schools by 2017; long-term goal: all 8,000 public secondary schools; evaluated impact 0.14-0.23 SD in math (among highest worldwide)',
      'English expansion: 2h/week → 5h/week in full-day schools; blended learning with software + face-to-face; 3,000 teachers trained 2015-2016 (800 by British Council/Pearson); 600 teachers awarded scholarships to US/UK',
      'Physical Education return: extended to 5h/week with teacher training and sports equipment; 5,076 PE teacher slots created nationwide; 500k children ages 7-17 in adequate conditions (2016); first time in curriculum since late 1980s',
      'Bilingual Intercultural Education: 500+ titles (workbooks, libraries, guides) in 19 native languages; 9,000 teachers strengthened through coaching (evaluated impact 0.28-0.29 SD); still only ~50% of students needing native language instruction had trained bilingual teacher',
      'Special Basic Education: strengthened centers + inclusive education in regular classrooms; 56 regular schools (1,500 teachers) trained; technological equipment for disabilities; Peruvian Sign Language interpreters in 7 regions; 26 Resource Centers created 2015-2016; budget tripled 2013-2016 (but still only 25% of children with special needs served)',
      'High-Performance Schools network (COAR): public boarding schools for talented youth; International Baccalaureate certified; 100 students/grade for last 3 grades of secondary; meritocratic selection by academic/athletic/artistic excellence; free IB education (previously only in elite private schools); 1 COAR per region by 2016 (4,350 students); more IB students in public than private system',
      'Early childhood expansion: net attendance ages 3-5 increased 73% (2011) → 86% (2016); 4,150+ rural villages received services first time; urban-rural access gap completely eliminated; 3,000+ teachers trained; rigorous evaluation: +8.7 points reading, +2.5 points math in 2nd grade',
      'University Law (Ley Universitaria, July 2014): defined university system mission, established quality assurance with 4 pillars (management/information, quality improvement, accreditation, licensing)',
      '"Ponte en Carrera" portal (July 2015): detailed labor market outcomes by career and institution; social value high given only 62% of university-career combinations have positive economic return',
      'SUNEDU created (2015): licensing based on Basic Quality Conditions (Nov 2015); infractions/sanctions regulation (Dec 2015); licensing process began 2016; politically contentious (low-quality private university owners had political representation); passed by slim margin with public opinion support; contested in courts multiple times, cleared in all instances; strong student organization support via social media and demonstrations',
      'National scholarship program (PRONABEC, 2012): 100,000 scholarships 2012-2016; $280M annual budget; Beca 18 (50k undergrad scholarships for low-income high achievers from 94% of districts; evaluated: +33pp university access, +40pp institute access, access better universities, higher perceived discrimination, lower class approval rates); Beca Presidente (1,500 Masters/PhD scholarships in top 400 global universities); Beca Docente Universitario (11,742 public university teachers for Masters/specialization); Beca Doble Oportunidad (finish 5th grade + technical certification); Credito 18 (educational loans using future income as guarantee, 50/50 with state, only high-employability programs)',
      'Meritocratic principal selection: competitive exams for school leadership positions; focus on pedagogical leadership not just administration',
      'Evidence-based management: use of learning assessment data (national standardized 2nd grade exams since 2003, PISA) for school planning and policy decisions',
      'Increased school autonomy: schools received direct support including lesson plans and school grants',
      'Infrastructure investment: targeted renovations to close infrastructure gap; budget for maintenance included for first time',
      'Direct resource provision: textbooks and supplies delivered on time to all schools; hardware, software, digital facilities for full-day schools; laptops and licenses for English, communication, math, science; tablets to primary schools in 15 regions'
    ],

    results: `By 2016-2018 (reform period 2013-2016, with some data extending to 2018), Peru achieved dramatic improvements:

**What Actually Happened:**

PISA Performance - Dramatic Improvement from Last Place:
• PISA 2012: 65th/65 countries (last place) - the shock that catalyzed reform
• Significant improvements in subsequent PISA cycles (specific scores not provided in chapter but noted as "impressive improvements")
• Peru improved more than any other country between PISA cycles (government chose not to emphasize this during shock moment, but it was true)

Teacher Professionalization - Major Success:
• Teacher Reform Law (2012) successfully implemented with new meritocratic career pathway
• 2015 first recruitment: 202,000 applicants for 19,632 jobs; only 8,137 selected (4% entry rate - more selective than elite universities)
• Process perceived as fair, transparent, corruption-free by public and teachers - critical for reform acceptance
• 54% of newly hired teachers went to rural schools
• First promotion contests in 20+ years (2014): 180,000+ participants; ~1/3 promoted with average 32% salary increase (vs 8% in previous 5 years)
• 11 evaluation processes held over 3 years providing multiple advancement opportunities
• No hint of corruption or clientelism in any process - major change from past
• School Bonus (2014-2015) reached 30,000 teachers/principals in 8,000+ schools
• León (2016) evaluation: statistically significant positive impact on student learning AND on teacher/principal attendance
• Teacher Vocation Scholarship: 500 scholarships/year attracted good students into career (important signal despite small numbers)
• $6,000 bonus to top third of new teacher recruits successfully attracted best candidates
• Induction Program (2016): 1,694 new teachers in 1,559 schools received mentoring
• School-based coaching reached 9,000 bilingual teachers; Majerowicz and Montero (2018): 0.25-0.38 SD impact on learning, benefits persist 1 year after training, cost-effective (0.72-1.12 SD per $100), benefits both high and low performers equally

Curriculum and Learning Quality:
• New National Curriculum approved June 2016 after 6-year development (2010-2016)
• Nationwide consultation involved National Council of Education, public institutions, civil society, teachers, national/international experts
• 11 exit profile learning outcomes defined; 7 cross-cutting approaches established
• Progressive implementation: 2017 in urban public/private primary schools → all modalities by 2019
• Gender equality approach politically controversial but maintained (minor language modifications March 2017 under conservative pressure)
• Pedagogical Support reached 1.1M students (43% of primary) in 18 regions by 2016
• Full-Day Secondary Schools: 1,000 schools (345k students) in 2015 → 1,601 (500k+ students) in 2016 → 2,001 in 2017
• Agüero (2016) evaluation of JEC: 0.14-0.23 SD improvement in math in first year; among highest effects worldwide; higher effects in poorest districts; positive communication effects less robust
• English: 3,000 teachers trained 2015-2016; 600 teachers received US/UK scholarships
• Physical Education: 5,076 PE teacher slots created; 500,000 children ages 7-17 in adequate conditions

Equity Interventions - Mixed Progress:
• Bilingual Intercultural Education: 500+ titles produced in 19 native languages; 9,000 teachers coached
• Majerowicz (2016a) evaluation: intercultural pedagogical support increased learning by 28pp in math (0.28 SD), 21pp in reading (0.29 SD)
• **Gap remains**: Only ~50% of students needing native language instruction had trained bilingual teacher by 2017
• Special Basic Education budget tripled 2013-2016; 56 regular schools trained; 26 Resource Centers created 2015-2016
• **Gap remains**: Still only 25% of children with special needs received required services
• High-Performance Schools (COAR): 1 per region by 2016 (4,350 students); IB-certified; more IB students in public than private system now
• CAF and Ministry evaluation underway at time of chapter writing

Early Childhood Education - Eliminated Access Gap:
• Net attendance ages 3-5: 73% (2011) → 86% (2016)
• 4,150+ rural villages received services for first time
• **Urban-rural access gap completely eliminated**
• 3,000+ teachers trained in initial education
• Majerowicz (2016b) evaluation: +8.7 points reading comprehension, +2.5 points math in 2nd grade for ECE participants

Higher Education Reform - Successful Despite Political Opposition:
• University Law passed July 2014 by slim margin despite fierce political opposition from low-quality private university owners
• Contested in court multiple times; cleared in all instances by Constitutional Tribunal
• Strong student organization support (public/private universities) via social media and demonstrations was critical
• SUNEDU established (2015); Basic Quality Conditions approved (Nov 2015); Infractions/Sanctions Regulation (Dec 2015); licensing began 2016
• "Ponte en Carrera" portal launched July 2015 with labor market outcomes by career/institution
• Yamada et al. (2016): high social value - if only 1% of recent graduates avoided negative-return careers due to information, lifetime earnings gain would be 4.5M soles ($1.3M)
• **5 years post-law**: ~60 universities obtained licenses, several under supervision, 4 universities under closure process
• Vast majority of private universities adapted statutes; most public universities renewed authorities with universal voting
• Only 62% of university-career combinations have positive economic return (information now public)

National Scholarships - Large Scale Success:
• PRONABEC delivered 100,000 scholarships 2012-2016 ($280M annual budget - among Latin America's largest)
• Beca 18: 50,000 undergraduate scholarships for low-income high achievers from 94% of districts
• MEF (2019) evaluation: +33pp university access, +40pp institute access, access better institutions, start studying earlier, BUT higher perceived discrimination and lower class approval rates (possibly due to accessing higher-quality institutions)
• Beca Presidente: 1,500 Masters/PhD scholarships in top 400 global universities
• Beca Docente Universitario: 11,742 public university teachers funded for advanced degrees
• Credito 18 launched 2015: educational loans using future income as guarantee

Management and System Reforms:
• Meritocratic principal selection implemented through competitive exams
• Evidence-based decision making using national assessment data (2nd grade exams since 2003) and PISA
• Increased school autonomy with direct support (lesson plans, grants)
• Infrastructure investments included maintenance budget for first time

Public Perception - Fundamental Shift:
• Reform demonstrated to skeptical public that public sector education improvement was possible
• 2012 CADE business conference discussed private sector as only solution; by 2016 public sector seen as capable of reform
• Teachers participated massively in evaluations despite union concerns - positive relationship overall
• Teachers saw themselves as "part of the solution" and "partners in reform"
• Direct communication innovations (personalized minister messages to 180,000 teachers, national contests for sharing innovations)
• Perception shift from inevitable mediocrity to belief that change is possible

**Factors Affecting Results - Ongoing Challenges:**

Teacher Issues:
• **Lesson plans controversy**: Some educators argued prescriptive plans reduced autonomy/creativity; ministry position was optional use, but teachers who complained most were those NOT receiving plans (demanded expansion)
• **Relationship with union**: Complex but generally positive; union could have boycotted evaluations but didn't; teachers including union leaders participated massively
• **Aging workforce**: Still need to reverse long-term trend (under 35: 51% in 1999 → 21% in 2012)
• **Salary gap**: 42% wage gap with similar professionals remains (Peru is 2nd in Latin America for teacher wage gap)
• **Social perception**: Despite improvements, long-term prestige recovery needed

Equity and Access Gaps:
• **Bilingual education**: Only 50% coverage of students needing native language instruction with trained teachers
• **Special needs**: Only 25% of children with disabilities receive required services despite budget tripling
• **Ethnolinguistic diversity**: 55 native communities speaking 47 different languages creates massive implementation challenges

Curriculum Implementation:
• **Gender equality controversy**: Political pressure from social conservatives led to minor language modifications March 2017
• **Accusations of "gender ideology"**: Reform accused of destroying family principles (The Economist 2017) due to tolerance teaching for sexual orientation and sex education
• **Context**: High teenage pregnancy and gender-based violence made this teaching critical but politically difficult
• **Progressive implementation needed**: Change in teaching practices requires time; phased rollout through 2019

Higher Education:
• **Political battles**: University Law passed by slim margin; fierce opposition from low-quality private university owners with political representation
• **Legal challenges**: Multiple court contests and Constitutional Tribunal action (all cleared)
• **Implementation ongoing**: At chapter writing, licensing process just beginning (2016); 5 years later ~60 licenses, 4 closures
• **Quality variation**: Only 62% of university-career combinations have positive return - massive heterogeneity

Systemic Challenges:
• **Management capacity**: Public sector managing 7M students in 52k schools with 3,500 ministry staff, 4,000 regional officials, 220 local units
• **Administrative support**: <1 administrative staff per school (32k staff for 50k schools); principals spent too much time on administrative vs pedagogical tasks
• **Regional variation**: 25 Regional Directorates and 220 Local Education Management Units create coordination challenges
• **Infrastructure**: Despite investments, maintenance historically neglected; first-time inclusion in budget
• **Textbook delivery**: Historical problems with insufficient books arriving late (being addressed)
• **Scale**: World's 9th largest system requires complex logistics
• **Timeline**: Real transformation requires sustained effort over many years

**Success Factors:**

Political and Strategic:
• **"PISA shock" moment**: Government chose to "own the problem" rather than downplay last-place ranking - created unprecedented public urgency
• **Front-page education**: Education became front-page news for first time - national priority signal
• **Clear narrative**: "We're not in trouble. We're in deep trouble" - honest assessment that galvanized action
• **Built on previous work**: Reform leveraged existing National Plans (Plan Nacional de Educación para Todos 2005-2015) developed through consultation
• **Implementable plan**: Focus on demonstrating that public sector reform was actually possible (countering inevitable mediocrity perception)
• **Public opinion support**: Strong public backing, especially from students, enabled controversial reforms (e.g., University Law)

Teacher-Centered Approach:
• **Teachers as partners**: Constant message that teachers were "part of the solution" not the problem
• **Fair processes**: Transparent, objective, corruption-free evaluations critical for teacher buy-in
• **Multiple opportunities**: 11 evaluation processes over 3 years gave teachers many chances to advance
• **Non-monetary incentives**: Direct communication, national contests, health/welfare emphasis
• **Union engagement**: Complex but positive relationship; union participated rather than boycotted
• **Merit + support**: Combined meritocratic selection with intensive professional development

Evidence-Based Approach:
• **Rigorous evaluations**: Multiple impact evaluations (León 2016, Majerowicz 2016a/b, Majerowicz and Montero 2018, Agüero 2016, MEF 2019)
• **Data-driven**: Use of national assessment data (since 2003) and PISA for planning
• **International benchmarking**: Curriculum review from multiple countries
• **Cost-effectiveness**: Coaching program highly cost-effective (0.72-1.12 SD per $100)

Comprehensive Approach - Four Simultaneous Pillars:
• **Pillar 1: Revalorize teachers** (meritocracy, salaries, development)
• **Pillar 2: Quality learning for all** (curriculum, early childhood, full-day schools, equity)
• **Pillar 3: Effective management** (autonomy, meritocracy, evidence-based)
• **Pillar 4: Close infrastructure gap**
• Addressed all dimensions simultaneously rather than sequentially

Equity Focus:
• **Obsession with learning AND equity**: Both quality and equality of opportunity as explicit twin goals
• **Differentiated services**: Recognition that equality requires different services for different needs
• **Progressive targeting**: Higher effects in poorest districts (JEC evaluation)
• **Indigenous rights**: Legal commitment to bilingual education in 47 languages
• **Rural focus**: 54% of new teachers went to rural schools
• **Scholarship priority**: 50,000 low-income students from 94% of districts accessed higher education

Peru's reform demonstrates how a profound national crisis (PISA shock) combined with political courage to "own the problem," comprehensive four-pillar strategy, teacher partnership approach, and obsessive focus on both learning and equity can produce dramatic improvements in a large, complex, highly unequal system within 3-4 years. The magic formula: evidence + political will + treating teachers as partners + equity obsession + demonstrating the possible.`
  },
  poland: {
    id: 'poland',
    name: 'Poland',
    flag: '🇵🇱',
    tagline: 'Post-communist transformation and the reversal of evidence-based reform',
    authors: 'Jerzy Wiśniewski & Marta Zahorska',
    available: true,
    color: 'from-red-400 to-white',

    situation: `Poland underwent a dramatic post-communist transformation beginning in 1989 with the Solidarity movement and Round Table negotiations that ended communist rule. Ten years after this political breakthrough, Poland launched an ambitious education reform in 1999 that fundamentally restructured the school system. The reform reduced primary school from 8 to 6 years, created a new 3-year lower secondary school (gimnazjum), and extended general education by 1 year before students were tracked into vocational or general tracks. This postponement of tracking was designed to provide more equal opportunities and better prepare students for a knowledge economy. The reform was implemented rapidly - designed in 1998, legislated in 1999, and implemented September 1999. Initial years were marked by significant anxiety among teachers and local authorities about capacity to implement the changes. However, the reform produced remarkable results: Poland's PISA scores improved dramatically from 2000 to 2012 (Reading: 479→518, Math: 490→518, Science: 498→526), making Poland one of the top-performing education systems in the world. Despite this evidence-based success, the reform became politically contested. In 2015, a new government was elected on a platform of nostalgia, promising to restore the pre-1999 system and eliminate lower secondary schools. This led to a 2017 "counter-reform" that reversed the successful structural changes despite all evidence showing they worked. The reversal created chaos in schools, culminated in a massive 2019 teachers' strike with 80% school participation, and vindicated the original reform when PISA 2018 results (collected before reversal implementation) showed continued improvement.`,

    indicators: [
      { label: 'PISA 2000 Reading', value: '479 → 518 (2012)', icon: '📖' },
      { label: 'PISA Math', value: '490 → 518 (2012)', icon: '📊' },
      { label: 'PISA Science', value: '498 → 526 (2012)', icon: '🔬' },
      { label: 'Reform Launch', value: '1999', icon: '🚀' },
      { label: 'PISA 2018 Reading', value: '512', icon: '📚' },
      { label: 'Lower Secondary', value: 'Created 1999, Eliminated 2017', icon: '🏫' },
      { label: '2019 Strike', value: '80% schools', icon: '✊' },
      { label: 'Political Shift', value: '2015 election', icon: '🗳️' }
    ],

    challenges: [
      'Implementing rapid structural reform in 1999 with limited preparation time (designed 1998, implemented Sept 1999)',
      'Teacher anxiety about capacity to teach in new lower secondary schools',
      'Local authority concerns about building/adapting facilities for new school structure',
      'Political contestation: reform became symbol in broader political conflicts',
      'Nostalgia-based opposition: calls to return to pre-1999 "better times" despite evidence',
      'Evidence resistance: 2015 opposition dismissed PISA results and objective data',
      '2017 counter-reform chaos: curricula and textbooks written in haste',
      'Teacher professional crisis: elimination of schools where they built careers',
      'Massive 2019 teachers\' strike: 80% of schools participated, over 500,000 teachers',
      'Low teacher salaries despite reform success',
      'Poor working conditions in schools',
      'Citizens\' movement organized 150+ grassroots debates (NOoE) during strike',
      'Political reversal of evidence-based policy',
      'Curriculum overload in 2017 counter-reform',
      'Hasty implementation of counter-reform mirroring 1999 rushed implementation',
      'Loss of institutional memory and successful practices',
      'Ideological opposition to comprehensive schools',
      'Urban-rural divide in educational opportunities persisting',
      'Reconciling political cycles with long-term educational improvement',
      'Building sustainable consensus across political transitions'
    ],

    context: `Poland's reform must be understood in the context of the 1989 breakthrough when the Solidarity movement negotiated the Round Table agreement ending communist rule. This democratic transition created space for fundamental reforms across all sectors. The 1999 education reform came exactly 10 years after this political transformation, during a period when Poland was preparing for EU accession and needed to modernize all institutions. The reform was designed and implemented by a center-right government but enjoyed broad initial support. The political context shifted dramatically in 2015 when the Law and Justice party (PiS) won elections on a platform mixing nationalism, social conservatism, and nostalgia for pre-transition Poland. This government viewed the 1999 reform as a symbol of the post-1989 order they opposed. Despite overwhelming evidence of the reform's success (PISA improvements, OECD praise, international recognition), the new government prioritized ideological goals over evidence-based policy. The 2017 counter-reform was rushed through despite protests from educators, experts, and civil society. The 2019 teachers' strike became one of the largest labor actions in post-communist Poland, with teachers protesting not only low pay and poor conditions but also the destruction of successful educational structures. The strike was accompanied by a grassroots citizens' movement (Narada Obywatelska o Edukacji - NOoE) that organized over 150 debates across Poland about education's future. Ironically, PISA 2018 results released during this period vindicated the original reform, showing that the eliminated lower secondary schools had continued to produce strong results.`,

    minister: `The 1999 reform was designed and implemented by Minister of National Education Mirosław Handke under Prime Minister Jerzy Buzek's center-right government. The reform enjoyed support from education experts including Jerzy Wiśniewski (chapter co-author and education policy expert). The 2017 counter-reform was led by Minister of National Education Anna Zalewska under Prime Minister Beata Szydło's Law and Justice government. Key actors in resistance included teacher unions (which had mixed positions - some supported original reform, others opposed both reforms), education experts who publicly opposed the reversal, civil society organizations, and the NOoE (Citizens' Debate on Education) grassroots movement led by educators, parents, and concerned citizens. International organizations including OECD and education researchers worldwide criticized the evidence-free reversal. Local authorities (gminas and powiats) responsible for managing schools faced implementation chaos in both 1999 and 2017, though 1999 challenges were met with capacity-building while 2017 created demoralization.`,

    goals: [
      'Modernize education structure to prepare students for knowledge economy (1999 reform)',
      'Postpone tracking from age 14 to age 16 to provide more equal opportunities',
      'Extend general education by one year before vocational/academic split',
      'Create comprehensive lower secondary schools (gimnazjum) covering grades 7-9',
      'Reduce primary school from 8 years to 6 years to align with European norms',
      'Improve student learning outcomes and international competitiveness',
      'Increase equity by reducing impact of family background on educational outcomes',
      'Align Polish education system with EU standards for accession',
      'Build teacher capacity for new pedagogical approaches',
      'Create external examination system to ensure quality standards',
      'Establish curriculum framework emphasizing critical thinking and competencies',
      '2017 counter-reform goals: Restore pre-1999 structure (8-year primary)',
      'Eliminate lower secondary schools despite evidence of success',
      'Return to earlier tracking at age 14',
      'Fulfill electoral promise to nostalgic voters'
    ],

    strategies: [
      '1999 Reform Implementation Strategies:',
      'Rapid legislative process: designed 1998, passed 1999, implemented September 1999',
      'Structural reorganization: 6-year primary + 3-year lower secondary + secondary',
      'Created new school type (gimnazjum) requiring building/adapting facilities',
      'Teacher retraining programs for educators moving to new lower secondary level',
      'Developed new curricula for 3-year lower secondary schools',
      'Established external examination after grade 6 and grade 9',
      'Local authority coordination: gminas managed primary, powiats managed lower secondary',
      'International benchmarking and expert consultation',
      'Phased implementation beginning with youngest cohorts',
      '',
      '2017 Counter-Reform Implementation Strategies:',
      'Legislative reversal: passed 2016/17, implemented starting 2017/18',
      'Rapid elimination of lower secondary schools over 2-3 years',
      'Return to 8-year primary school structure',
      'Hasty development of new curricula and textbooks',
      'Curriculum overload: trying to cover more content in less time',
      'Limited teacher consultation or professional development',
      'Top-down implementation despite expert opposition',
      'Ideological framing: presented as restoring "traditional Polish values"',
      'Dismissal of evidence from PISA and international assessments',
      '',
      'Resistance Strategies:',
      'NOoE grassroots movement organized 150+ public debates',
      '2019 teachers\' strike: 80% of schools participated',
      'Expert testimony and public letters opposing reversal',
      'International education community criticism',
      'Documentation of implementation chaos and negative impacts'
    ],

    results: `**1999 Reform Results (2000-2015):**

**Dramatic PISA Improvements:**
• Reading: 479 (2000) → 518 (2012) - 39 point gain, equivalent to one full year of learning
• Mathematics: 490 (2000) → 518 (2012) - 28 point gain
• Science: 498 (2000) → 526 (2012) - 28 point gain
• Poland moved from below OECD average to significantly above average in all subjects
• PISA 2012: Poland ranked 14th in reading, 14th in mathematics, 9th in science among all countries
• Became one of highest-performing education systems in Europe

**Equity Improvements:**
• Reduced impact of socioeconomic background on student performance
• Variance between schools decreased (more equal school quality)
• Rural-urban gap narrowed though not eliminated
• Students from disadvantaged backgrounds showed particular gains
• Lower secondary comprehensive schools reduced early stratification effects

**International Recognition:**
• OECD highlighted Poland as major success story in multiple reports
• Studied internationally as model of successful structural reform
• Andreas Schleicher (OECD PISA director) praised reform in international forums
• Academic publications documented reform as evidence-based policy success

**System-Level Changes:**
• External examinations established quality standards
• Teacher professionalization increased in lower secondary level
• Curriculum modernization emphasized competencies over rote learning
• School infrastructure improved to accommodate new structures
• Three-tier system (primary-lower secondary-upper secondary) became normalized

---

**2017 Counter-Reform Results (2017-2019):**

**Implementation Chaos:**
• Curricula written in extreme haste without adequate expert consultation
• Textbooks rushed to production, arriving late or incomplete
• Curriculum overload: attempting to cover 8 years of content previously taught over 9 years
• Schools forced to reorganize physical spaces and grade configurations
• Teachers uncertain about grade assignments and subject responsibilities
• Some schools combined grades due to space/staffing constraints

**Professional Demoralization:**
• Teachers who spent careers in lower secondary schools faced elimination of their workplaces
• Hasty changes undermined teacher professionalism and autonomy
• Expertise in teaching early adolescents (grades 7-9) lost or dispersed
• Contributing factor to massive 2019 strike

**2019 Teachers' Strike - One of Largest Labor Actions in Post-Communist Poland:**
• Over 80% of schools participated
• Estimated 500,000+ teachers involved
• Duration: Several weeks during April 2019
• Demands: Higher salaries, better working conditions, AND opposition to counter-reform chaos
• Student support: Many students joined protests or expressed solidarity
• Timing: Occurred during national exams, creating additional pressure
• Government largely unmoved: Strike ended without major concessions

**NOoE (Narada Obywatelska o Edukacji) - Citizens' Debate on Education:**
• Grassroots movement emerged during 2019 strike
• Organized 150+ public debates across Poland
• Brought together teachers, parents, students, education experts, concerned citizens
• Debated future of Polish education outside government structures
• Created alternative vision emphasizing evidence-based policy
• Documented chaos and failures of counter-reform
• Demonstrated civil society capacity to organize around education issues

**PISA 2018 Results - Vindication of Original Reform:**
• Results released during counter-reform implementation (data collected 2018 before full implementation)
• Reading: 512 (slight decrease from 2012 peak of 518, but still strong)
• Mathematics: 516 (maintained 2012 level of 518)
• Science: 511 (slight decrease from 2015 peak)
• Poland remained significantly above OECD average in all subjects
• Results showed students educated in the "eliminated" lower secondary schools continued performing well
• Provided evidence that counter-reform eliminated successful structures
• International observers noted irony: government dismantled system shown to work

---

**Long-Term Implications:**

**Lessons About Evidence-Based Policy:**
• Demonstrated that political ideology can override strong evidence
• Showed fragility of education reforms across political transitions
• Illustrated challenge of maintaining successful policies when they become political symbols
• Raised questions about how to insulate evidence-based reforms from political cycles

**Impact on Teacher Profession:**
• Dual shocks of rushed implementation (1999 and 2017) created recurring anxiety
• 2019 strike largest teacher mobilization in post-communist period
• Teacher salaries remained low despite system performance improvements
• Professional demoralization from policy instability

**Civil Society Response:**
• NOoE demonstrated capacity for grassroots education organizing
• Citizens increasingly aware that education policy matters and can be contested
• Created infrastructure for ongoing civic engagement in education
• Alternative to both government policy and traditional union structures

**Structural Legacy:**
• As of chapter writing (2019/2020), counter-reform proceeding despite opposition
• Lower secondary schools being eliminated despite evidence they worked
• Return to 8-year primary + secondary structure
• Unclear whether future government might reverse the reversal
• Loss of institutional knowledge and successful practices

**International Significance:**
• Poland's case study of both successful reform (1999) and its reversal (2017) unique in education policy
• Demonstrates that PISA improvements can be achieved through structural reform
• Also demonstrates that evidence alone insufficient to sustain reforms politically
• Cautionary tale about political discontinuity in education policy

**Success Factors (1999 Reform):**
• Clear structural design postponing tracking
• Rapid implementation that became "fait accompli"
• Strong PISA results providing objective evidence
• International support and recognition
• Alignment with EU accession modernization agenda
• Initial cross-party consensus (though later eroded)

**Failure Factors (Unable to Sustain Reform):**
• Reform became symbol in broader political conflicts (post-1989 order vs. nostalgia)
• Insufficient attention to building permanent cross-party consensus
• Teacher salary and working conditions not adequately addressed despite system success
• Evidence-based arguments unable to overcome ideological opposition
• Underestimated power of nostalgia in political messaging
• Failed to make reform benefits visible to broader public beyond test scores

Poland's education reform story is both inspiring and cautionary: inspiring because it shows dramatic improvement is possible through evidence-based structural reform; cautionary because it demonstrates that strong evidence and international success do not guarantee political sustainability. The 2019 teachers' strike and NOoE movement represent ongoing struggle over whether Polish education will be governed by evidence or ideology.`
  },
  portugal: {
    id: 'portugal',
    name: 'Portugal',
    flag: '🇵🇹',
    tagline: 'From last place to above OECD average through curriculum quality and assessment',
    authors: 'Nuno Crato',
    available: true,
    color: 'from-green-400 to-red-400',

    situation: `Portugal arrived late to the twentieth century, struggling with illiteracy, poverty, isolation, and a very limited school system. Only in 1956 was compulsory schooling extended from 3 to 4 years (boys only; girls in 1960). By 1970, four years before the democratic revolution, 18% of the population was still illiterate, 66% of 15-year-olds hadn't completed any level of formal education, and only 0.9% had higher education degrees. Following the 1974 democratic revolution, European Community entrance, and arrival of structural funds, schooling expanded dramatically. By 2001, illiteracy dropped to 9%, the percentage without formal education fell to 9.2%, and those with higher education rose to 8.4%. These quantitative successes (democratization, expansion, increased compulsory schooling) apparently failed to bring students to reasonable literacy and general education levels. A bitter debate divided the country between educationalists defending the system and intellectuals accusing politicians of degrading education and lowering standards. Shocking news came with TIMSS 1995 showing Portuguese 4th graders at the bottom (only Iran and Iceland behind) and PISA 2000 showing Portugal below OECD average in all three areas. These results created a national crisis moment. From 2001-2015, despite many different ministers from different parties, a common thread emerged: increased attention to results. This culminated in the 2011-2015 period with explicit, intentional reforms focused on clear curriculum, increased school autonomy, regular student assessment, vocational paths, and flexibility. By PISA 2015, Portugal achieved above OECD average performance, and TIMSS showed 4th graders scoring higher in Mathematics than Finland and other high-performing countries.`,

    indicators: [
      { label: 'PISA 2000 Reading', value: 'Below OECD avg', icon: '📉' },
      { label: 'PISA 2015 Reading', value: 'Above OECD avg', icon: '📈' },
      { label: 'TIMSS 2015 Math', value: 'Higher than Finland', icon: '🏆' },
      { label: '1970 Illiteracy', value: '18% → 9% (2001)', icon: '📚' },
      { label: 'Dropout Rate 2000', value: '43.6% → 13.7% (2015)', icon: '🎓' },
      { label: 'Compulsory School', value: '9th → 12th grade (2012)', icon: '🏫' },
      { label: 'Low Achievers', value: 'Reduced in all subjects', icon: '✅' },
      { label: 'Top Performers', value: 'Increased simultaneously', icon: '⭐' }
    ],

    challenges: [
      'Historical legacy: arrived late to 20th century with massive illiteracy and poverty',
      'TIMSS 1995: 4th grade Math near bottom (only Iran and Iceland below)',
      'PISA 2000: Below OECD average in all three areas (Reading, Math, Science)',
      'Polarized debate: educationalists vs. intellectuals on education quality',
      'Quantitative success but qualitative failure: expanded access without quality',
      '1970: 18% illiteracy, 66% of 15-year-olds with no formal education',
      'Balance democratization with maintaining/raising standards',
      'Highly centralized system resistant to change',
      'Teacher unions opposing reforms (exams, autonomy, accountability)',
      'Resistance to school rankings and data transparency',
      'Financial crisis 2011: IMF/EC bailout with drastic spending cuts',
      'Expanding compulsory schooling (9th to 12th grade) during budget crisis',
      'Resistance to external evaluation and standardized testing',
      'Teacher training institutions with lowered standards',
      'Aging teacher workforce: 7.6:1 ratio (50+ to under 35) in elementary',
      'Even worse in secondary: 14.6:1 ratio of older to younger teachers',
      'Textbook quality issues before 2006 reforms',
      'Exam difficulty fluctuations (50% swings) due to political tampering',
      'Vocational system unequal and often serving political/business interests',
      'Calculator abuse since first grade, avoidance of basic skills training',
      'Poorly structured curriculum with vague learning outcomes',
      'School autonomy strongly opposed by unions, principals, and parent associations'
    ],

    context: `Portugal's reform must be understood against its unique twentieth-century trajectory. The country "arrived late" to modernity, with compulsory schooling reaching only 4 years for boys in 1956 (girls in 1960), extending to 6 years in 1964, to 9th grade only in 1986, and to 12th grade in 2012. The 1974 democratic revolution, European Community entrance, and European structural funds catalyzed rapid educational expansion, but emphasized quantity over quality. The critical turning point came in 2001 when the Minister released school-level exam results for the first time after years of resistance and legal threats. This transparency revealed that socioeconomic status didn't determine everything—some wealthy-area schools underperformed while some disadvantaged-area schools excelled. PISA 2000 results (November 2001) showed Portugal below OECD average in all areas, triggering outcry. From 2001-2010, pragmatic reforms focused on results: 9th grade exams, mathematics action plan, national reading plan, first learning standards (2010-2011). The 2011 financial crisis paradoxically enabled deeper reforms. Portugal was "financially broke," requiring IMF/EC bailout with drastic cuts. Against this backdrop, the 2011-2015 government (PM Pedro Passos Coelho, Education Minister Nuno Crato as independent) expanded compulsory schooling while implementing quality-focused reforms. Despite budget and salary cuts, teachers and schools expanded enrollment, offered diverse curriculum, and improved quality. By PISA 2015, Portugal was internationally recognized: OECD noted Portugal and Macao as only systems that "moved everyone up" simultaneously—increasing top performers while reducing low achievers. European Commission identified Portugal and Sweden as only EU countries reducing low achievers in all three PISA domains simultaneously.`,

    minister: `The reform period saw multiple ministers across parties demonstrating unusual cross-party continuity. 2001-2002: Minister released school exam results despite opposition, established task forces. 2002-2004: New government (rival party) maintained 9th grade exams, showing bipartisan support. 2004-2009: Minister instituted Mathematics Action Plan and supported National Reading Plan. 2009-2011: Minister introduced first learning standards. 2011-2015: Nuno Crato (chapter author) served as independent Minister of Education and Science under PM Pedro Passos Coelho during financial crisis, implementing comprehensive reforms despite IMF/EC constraints. Created IAVE (independent assessment institute) with governance preventing political tampering. Assembled expert groups: (i) expert teachers, (ii) university researchers, (iii) cognitive psychologists—contrasting with previous groups dominated by teacher associations. Key insight: Although ministers from different ideologies made different reforms, common thread was increased attention to results. This pragmatic focus, backed by experienced teachers, proved essential. Reforms opposed by teacher unions, some associations, education college professors. Support came from university professors, intellectuals (left and right), scientific societies (especially Portuguese Mathematical Society), parents, opinion makers demanding transparency and quality.`,

    goals: [
      'Raise achievement from below OECD average to above in international assessments',
      'Provide high-quality education for all, especially disadvantaged students',
      'Reduce dropout rates from 43.6% (2000) to below 15%',
      'Establish clear, demanding, well-structured curriculum with defined learning goals',
      'Prioritize basic knowledge: reading fluency, mathematics, sciences, history, geography',
      'Create valid, reliable assessment instruments allowing year-to-year comparison',
      'Establish independent evaluation preventing political tampering with exam difficulty',
      'Promote equal opportunities through demanding education (not lowered standards)',
      'Reduce low achievers while simultaneously increasing top performers',
      'Improve textbook quality through independent evaluation and certification',
      'Increase school autonomy while maintaining external accountability',
      'Develop modern vocational system tied to industry and labor market needs',
      'Expand compulsory schooling to 12th grade without quality decrease',
      'Apply cognitive psychology research to curriculum and assessment design',
      'Improve teacher training: regulate access, extend requirements, add subject content',
      'Knowledge comes first: substantive knowledge as base for skills and competencies'
    ],

    strategies: [
      '2001-2010 Pragmatic Reforms:',
      'Released school-level exam results publicly (2001) despite resistance',
      'Established 9th grade exams for Math and Portuguese (first 2004/2005)',
      'Created Mathematics Action Plan for elementary and middle school',
      'Supported National Reading Plan (non-curricular, library-based)',
      'Introduced first learning standards (2010-2011)',
      'Maintained cross-party continuity on core reforms',
      '',
      '2011-2015 Comprehensive Reforms:',
      'Curriculum: Created demanding, well-structured curriculum',
      'Expert groups: teachers + university researchers + psychologists',
      'New standards ("metas curriculares") clarifying basic topics and attainment levels',
      'Prioritized Math and Reading with increased elementary time',
      'Organized topics in structured, progressive, scaffolded layers',
      'Made standards clear to all: teachers, parents, textbook authors, exam designers',
      'Incremental changes in same direction vs. complete overhaul',
      '',
      'Assessment: Created independent, reliable evaluation (IAVE 2013)',
      'Independent General Council preventing ministerial interference',
      'Designed tests with validity, reliability for year-to-year comparison',
      'Cited cognitive psychology: evaluation reinforces knowledge retrieval',
      'Ended exam difficulty fluctuations (previous 50% swings)',
      '',
      'Textbook Quality: Built on 2006 independent certification law',
      'Aligned textbooks with standards (2012, reorganized 2014)',
      'Systematic evaluation, correction, certification procedure',
      '',
      'School Success: Student-study help, temporary grouping, cross-grade support',
      '',
      'School Autonomy: Increased teacher credits based on improvement',
      'Credits for raising results, reducing retention/dropout',
      'Penalized grade inflation (internal > external)',
      'Freedom in processes, external evaluation of outcomes',
      '',
      'Vocational: Two streams (regular technical + struggling students)',
      'Industry partnership: ~5,000 firms year 1, ~12,000 year 2',
      '',
      'Teacher Training: Required math test for college entry',
      'Extended masters to 4 semesters with more subject-matter',
      'National screening exam for prospective teachers',
      '',
      'Applied cognitive psychology: retrieval, interleaving, structured scaffolding'
    ],

    results: `**PISA Transformation:**
• PISA 2000: Below OECD average in all three areas
• Reading 2000: Only 4 countries lower (Russia, Latvia, Mexico, Brazil)
• Mathematics 2000: Only 4 lower (Greece, Luxembourg, Mexico, Brazil)
• Science 2000: Only 3 lower (Luxembourg, Mexico, Brazil)
• PISA 2009: Important improvement in all areas
• PISA 2015: Above OECD average - "quantum leap"
• Portugal became international model: "example to follow"

**TIMSS Results:**
• TIMSS 1995: 4th grade Math at bottom (only Iran, Iceland below)
• TIMSS 2015: 4th graders scored higher than Finland and other high-performers

**OECD Recognition - "Moving Everyone Up":**
• OECD: "Macao and Portugal able to 'move everyone up' in science, math, reading by increasing top performers while reducing students not achieving baseline"
• "Education systems can nurture top performers and assist struggling students simultaneously"
• Section titled: "Countries do not have to choose between excellence and reducing underperformance"

**European Union Achievement:**
• EU target 2020: reduce PISA low achievers to 15%
• Most EU countries NOT approaching target; averages worsening
• **Only two EU countries reduced low achievers in all three domains: Sweden and Portugal**
• European Commission recognition of unique achievement

**Dropout Rate Transformation:**
• 2000: Early leavers 43.6%
• 2010: 28.3%
• 2015: 13.7%
• Decrease of 14.6 percentage points in 5 years (2010-2015)
• Almost 3 percentage points per year reduction
• Dropout decrease paralleled youth unemployment decrease after 2012
• Achieved while expanding compulsory schooling to 12th grade

**Equity and Quality:**
• Raised bottom performers while increasing top performers
• Proved demanding education helps disadvantaged students
• Schools in disadvantaged areas can excel; wealthy-area schools can underperform
• SES not insurmountable obstacle
• "A challenging education is the only instrument for poor people to progress"

**System Alignment:**
• Clear curriculum → textbooks → teaching → assessment alignment achieved
• Teachers understood student attainment goals
• Parents able to help and track progress
• Exam designers knew what to test
• Incremental same-direction changes more effective than overhaul

**Assessment Quality:**
• IAVE independence prevented political tampering
• Ended 50% exam difficulty fluctuations
• Valid, reliable year-to-year comparison
• Regulatory role promoting equity across regions

**Financial Context:**
• Dramatic improvements despite IMF/EC bailout
• Expanded compulsory schooling during budget cuts
• Teachers answered call despite salary cuts
• Budget constraints don't prevent quality improvement

**Teacher Screening Results:**
• 34.1% failed general test (reading, writing, logic)
• Subject failures: 42.3% Biology/Geology, 63.2% Physics/Chemistry, 60.4% Portuguese, 41.6% Elementary Math
• Revealed urgent teacher preparation needs
• Unfortunately abolished by next government under pressure

**Vocational Success:**
• Industry partnership: 12,000 firms by year 2
• Businesses contributed personnel, tools, machinery, transportation, meals
• Aligned with labor market needs
• Two-stream division unfortunately abolished 2016

**Success Factors:**
• Cross-party continuity on core principles
• Evidence-based approach (TIMSS, PISA, cognitive psychology)
• Experienced teacher foundation despite adversity
• Comprehensive, coherent strategy with alignment
• Focus on quality AND equity simultaneously
• Independence and transparency (IAVE, public results)
• Cognitive science application
• Industry partnership in vocational training

Portugal's transformation from PISA 2000 (below average, near bottom) to PISA 2015 (above OECD average, model for others) demonstrates dramatic improvement through evidence-based policy, clear curriculum, reliable assessment, teacher partnership, focus on excellence and equity, and sustained attention to quality. Proved demanding education promotes rather than harms disadvantaged students, and political will with professional commitment can overcome severe financial constraints.`
  },
  russia: { id: 'russia', name: 'Russia', flag: '🇷🇺', tagline: 'Modernizing the system', available: false, color: 'from-blue-400 to-red-400' }
};

export default function EducationReformDashboard() {
  const [currentView, setCurrentView] = useState('dashboard');
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [expandedSections, setExpandedSections] = useState({});
  const [advice, setAdvice] = useState('');
  const [counterfactual, setCounterfactual] = useState('');
  const [generating, setGenerating] = useState(false);
  const [compareCountries, setCompareCountries] = useState([null, null]);
  const [showCompareSelector, setShowCompareSelector] = useState(false);
  const [socraticQuestions, setSocraticQuestions] = useState([]);
  const [generatingQuestions, setGeneratingQuestions] = useState(false);

  const startComparison = () => {
    setShowCompareSelector(true);
    setCompareCountries([null, null]);
  };

  const selectCompareCountry = (index, countryId) => {
    const newCompare = [...compareCountries];
    newCompare[index] = countryId;
    setCompareCountries(newCompare);
  };

  const executeComparison = () => {
    if (compareCountries[0] && compareCountries[1]) {
      setCurrentView('compare');
      setShowCompareSelector(false);
    }
  };

  const toggleSection = (section) => {
    setExpandedSections(prev => ({...prev, [section]: !prev[section]}));
  };

  const viewCountry = (countryId) => {
    const country = reformData[countryId];
    if (!country.available) return;
    setSelectedCountry(country);
    setCurrentView('country');
    setExpandedSections({});
    setAdvice('');
    setCounterfactual('');
  };

  const generateSocraticQuestions = async () => {
    setGeneratingQuestions(true);
    setSocraticQuestions([]);
    
    try {
      const response = await fetch("https://api.anthropic.com/v1/messages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          model: "claude-sonnet-4-20250514",
          max_tokens: 1000,
          messages: [{
            role: "user",
            content: `You are helping students think critically about Brazil's education reform (BNCC).

Context: ${selectedCountry.situation}

Challenges: ${selectedCountry.challenges.join('; ')}

What actually happened: ${selectedCountry.results}

Generate 5 thought-provoking Socratic questions that will help students develop advice for the minister. These questions should:
- Encourage critical thinking about what could have been done differently
- Explore trade-offs and priorities
- Consider sequencing and timing of reforms
- Think about stakeholder engagement
- Question assumptions

Format as a JSON array of strings with no other text:
["Question 1?", "Question 2?", "Question 3?", "Question 4?", "Question 5?"]`
          }]
        })
      });

      const result = await response.json();
      const text = result.content
        .filter(item => item.type === "text")
        .map(item => item.text)
        .join("\n");
      
      const cleaned = text.replace(/```json|```/g, '').trim();
      const questions = JSON.parse(cleaned);
      setSocraticQuestions(questions);
    } catch (err) {
      setSocraticQuestions(["What were the biggest challenges facing the reform?", "How might prioritizing differently have changed outcomes?"]);
    }
    setGeneratingQuestions(false);
  };

  const generateCounterfactual = async () => {
    if (!advice.trim()) return;
    
    setGenerating(true);
    try {
      const response = await fetch("https://api.anthropic.com/v1/messages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          model: "claude-sonnet-4-20250514",
          max_tokens: 1000,
          messages: [{
            role: "user",
            content: `You are analyzing Brazil's education reform (BNCC - Base Nacional Comum Curricular) from 2013-2019. 

Context: ${selectedCountry.situation}

What actually happened: ${selectedCountry.results}

A student suggests this advice to the Minister: "${advice}"

Generate a short counterfactual narrative (200-300 words) exploring what might have happened if this advice had been followed. Consider:
- How would outcomes differ?
- What challenges might emerge or be avoided?
- How might public reception change?
- What would be the trade-offs?

Be realistic and nuanced - not overly optimistic or pessimistic.`
          }]
        })
      });

      const result = await response.json();
      const text = result.content
        .filter(item => item.type === "text")
        .map(item => item.text)
        .join("\n");
      
      setCounterfactual(text);
    } catch (err) {
      setCounterfactual("Error generating counterfactual. Please try again.");
    }
    setGenerating(false);
  };

  if (currentView === 'dashboard') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 p-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-gray-900 mb-4">
              Audacious Education Purposes Study Companion
            </h1>
            <p className="text-xl text-gray-600 mb-2">
              How Governments Transform the Goals of Education Systems
            </p>
            <p className="text-lg text-gray-500">Fernando Reimers (2020)</p>
          </div>

          {/* Compare Button */}
          <div className="text-center mb-8">
            <button
              onClick={startComparison}
              className="bg-indigo-600 text-white px-8 py-3 rounded-lg hover:bg-indigo-700 transition font-medium shadow-lg text-lg flex items-center gap-2 mx-auto"
            >
              <span>⚖️</span>
              Compare Two Countries
            </button>
          </div>

          {/* Country Selector for Comparison */}
          {showCompareSelector && (
            <div className="bg-white rounded-lg shadow-lg p-8 mb-8 border-2 border-indigo-300">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                Select Two Countries to Compare
              </h2>
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    First Country
                  </label>
                  <select
                    value={compareCountries[0] || ''}
                    onChange={(e) => selectCompareCountry(0, e.target.value)}
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-indigo-500"
                  >
                    <option value="">Select a country...</option>
                    {Object.values(reformData).filter(c => c.available).map(country => (
                      <option key={country.id} value={country.id} disabled={country.id === compareCountries[1]}>
                        {country.flag} {country.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Second Country
                  </label>
                  <select
                    value={compareCountries[1] || ''}
                    onChange={(e) => selectCompareCountry(1, e.target.value)}
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-indigo-500"
                  >
                    <option value="">Select a country...</option>
                    {Object.values(reformData).filter(c => c.available).map(country => (
                      <option key={country.id} value={country.id} disabled={country.id === compareCountries[0]}>
                        {country.flag} {country.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="flex gap-4 justify-center">
                <button
                  onClick={executeComparison}
                  disabled={!compareCountries[0] || !compareCountries[1]}
                  className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 disabled:bg-gray-400 transition font-medium"
                >
                  Compare Now
                </button>
                <button
                  onClick={() => setShowCompareSelector(false)}
                  className="bg-gray-600 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition font-medium"
                >
                  Cancel
                </button>
              </div>
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {Object.values(reformData).map(country => (
              <button
                key={country.id}
                onClick={() => viewCountry(country.id)}
                disabled={!country.available}
                className={`group relative overflow-hidden rounded-xl shadow-lg transition-all duration-300 ${
                  country.available 
                    ? 'hover:shadow-2xl hover:scale-105 cursor-pointer' 
                    : 'opacity-60 cursor-not-allowed'
                }`}
              >
                <div className={`bg-gradient-to-br ${country.color} p-8 h-64 flex flex-col items-center justify-center text-center`}>
                  <div className="text-7xl mb-4 transform group-hover:scale-110 transition-transform">
                    {country.flag}
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">
                    {country.name}
                  </h2>
                  <p className="text-sm text-gray-700 italic px-2">
                    {country.tagline}
                  </p>
                  {!country.available && (
                    <div className="mt-4 bg-gray-800 bg-opacity-50 text-white px-4 py-1 rounded-full text-xs">
                      Coming Soon
                    </div>
                  )}
                </div>
              </button>
            ))}
          </div>

          <div className="mt-12 bg-white rounded-lg shadow p-6 text-center">
            <p className="text-gray-600">
              <span className="font-semibold text-green-600">Brazil</span>, <span className="font-semibold text-blue-600">Finland</span>, <span className="font-semibold text-red-600">Japan</span>, <span className="font-semibold text-orange-600">Mexico</span>, and <span className="font-semibold text-red-600">Peru</span> are ready to explore.
              Poland, Portugal, and Russia will be added as their chapter data is provided.
            </p>
          </div>
        </div>
      </div>
    );
  }

  if (currentView === 'compare') {
    const country1 = reformData[compareCountries[0]];
    const country2 = reformData[compareCountries[1]];

    return (
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 shadow-lg">
          <div className="max-w-7xl mx-auto px-8 py-6">
            <button
              onClick={() => setCurrentView('dashboard')}
              className="flex items-center gap-2 text-white hover:text-gray-200 mb-4 transition"
            >
              <Home size={20} />
              <span>Back to Dashboard</span>
            </button>
            <h1 className="text-4xl font-bold text-white mb-2">Country Comparison</h1>
            <p className="text-white text-lg">
              {country1.flag} {country1.name} vs {country2.flag} {country2.name}
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-8 py-8">
          {/* Country Headers */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className={`bg-gradient-to-br ${country1.color} rounded-lg shadow-lg p-6 text-center`}>
              <div className="text-6xl mb-3">{country1.flag}</div>
              <h2 className="text-3xl font-bold text-gray-900">{country1.name}</h2>
              <p className="text-gray-700 italic mt-2">{country1.tagline}</p>
              <p className="text-sm text-gray-600 mt-2">{country1.authors}</p>
            </div>
            <div className={`bg-gradient-to-br ${country2.color} rounded-lg shadow-lg p-6 text-center`}>
              <div className="text-6xl mb-3">{country2.flag}</div>
              <h2 className="text-3xl font-bold text-gray-900">{country2.name}</h2>
              <p className="text-gray-700 italic mt-2">{country2.tagline}</p>
              <p className="text-sm text-gray-600 mt-2">{country2.authors}</p>
            </div>
          </div>

          {/* Comparison Sections */}
          <div className="space-y-6">
            {/* Situation */}
            <CompareSection title="Situation at Time of Reform" icon="🌍">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-4 rounded border-l-4 border-blue-500">
                  <h4 className="font-bold text-gray-800 mb-2">{country1.name}</h4>
                  <p className="text-gray-700 text-sm">{country1.situation}</p>
                </div>
                <div className="bg-white p-4 rounded border-l-4 border-purple-500">
                  <h4 className="font-bold text-gray-800 mb-2">{country2.name}</h4>
                  <p className="text-gray-700 text-sm">{country2.situation}</p>
                </div>
              </div>
            </CompareSection>

            {/* Key Indicators */}
            <CompareSection title="Key Indicators" icon="📊">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-bold text-gray-800 mb-3">{country1.name}</h4>
                  <div className="grid grid-cols-2 gap-3">
                    {country1.indicators.map((ind, i) => (
                      <div key={i} className="bg-blue-50 p-3 rounded border border-blue-200">
                        <div className="text-2xl mb-1">{ind.icon}</div>
                        <div className="text-xs text-gray-600">{ind.label}</div>
                        <div className="text-sm font-bold text-gray-900">{ind.value}</div>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 mb-3">{country2.name}</h4>
                  <div className="grid grid-cols-2 gap-3">
                    {country2.indicators.map((ind, i) => (
                      <div key={i} className="bg-purple-50 p-3 rounded border border-purple-200">
                        <div className="text-2xl mb-1">{ind.icon}</div>
                        <div className="text-xs text-gray-600">{ind.label}</div>
                        <div className="text-sm font-bold text-gray-900">{ind.value}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </CompareSection>

            {/* Challenges */}
            <CompareSection title="Main Challenges" icon="⚠️">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-bold text-gray-800 mb-3">{country1.name}</h4>
                  <ul className="space-y-1">
                    {country1.challenges.slice(0, 8).map((c, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm">
                        <span className="text-red-500 mt-1">▪</span>
                        <span className="text-gray-700">{c}</span>
                      </li>
                    ))}
                  </ul>
                  {country1.challenges.length > 8 && (
                    <p className="text-xs text-gray-500 mt-2">+ {country1.challenges.length - 8} more challenges</p>
                  )}
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 mb-3">{country2.name}</h4>
                  <ul className="space-y-1">
                    {country2.challenges.slice(0, 8).map((c, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm">
                        <span className="text-red-500 mt-1">▪</span>
                        <span className="text-gray-700">{c}</span>
                      </li>
                    ))}
                  </ul>
                  {country2.challenges.length > 8 && (
                    <p className="text-xs text-gray-500 mt-2">+ {country2.challenges.length - 8} more challenges</p>
                  )}
                </div>
              </div>
            </CompareSection>

            {/* Goals */}
            <CompareSection title="Reform Goals" icon="🎯">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-bold text-gray-800 mb-3">{country1.name}</h4>
                  <ul className="space-y-1">
                    {country1.goals.slice(0, 6).map((g, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm">
                        <span className="text-green-500 mt-1">✓</span>
                        <span className="text-gray-700">{g}</span>
                      </li>
                    ))}
                  </ul>
                  {country1.goals.length > 6 && (
                    <p className="text-xs text-gray-500 mt-2">+ {country1.goals.length - 6} more goals</p>
                  )}
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 mb-3">{country2.name}</h4>
                  <ul className="space-y-1">
                    {country2.goals.slice(0, 6).map((g, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm">
                        <span className="text-green-500 mt-1">✓</span>
                        <span className="text-gray-700">{g}</span>
                      </li>
                    ))}
                  </ul>
                  {country2.goals.length > 6 && (
                    <p className="text-xs text-gray-500 mt-2">+ {country2.goals.length - 6} more goals</p>
                  )}
                </div>
              </div>
            </CompareSection>

            {/* Results Summary */}
            <CompareSection title="Results & Impact (Summary)" icon="📈">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-yellow-50 p-4 rounded border-l-4 border-yellow-500">
                  <h4 className="font-bold text-gray-800 mb-2">{country1.name}</h4>
                  <p className="text-gray-700 text-sm line-clamp-6">{country1.results.substring(0, 400)}...</p>
                  <button
                    onClick={() => {
                      setSelectedCountry(country1);
                      setCurrentView('country');
                    }}
                    className="text-blue-600 hover:text-blue-700 text-sm font-medium mt-2"
                  >
                    Read full results →
                  </button>
                </div>
                <div className="bg-yellow-50 p-4 rounded border-l-4 border-yellow-500">
                  <h4 className="font-bold text-gray-800 mb-2">{country2.name}</h4>
                  <p className="text-gray-700 text-sm line-clamp-6">{country2.results.substring(0, 400)}...</p>
                  <button
                    onClick={() => {
                      setSelectedCountry(country2);
                      setCurrentView('country');
                    }}
                    className="text-blue-600 hover:text-blue-700 text-sm font-medium mt-2"
                  >
                    Read full results →
                  </button>
                </div>
              </div>
            </CompareSection>
          </div>

          {/* Action Buttons */}
          <div className="mt-8 flex gap-4 justify-center">
            <button
              onClick={() => {
                setSelectedCountry(country1);
                setCurrentView('country');
              }}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
            >
              View {country1.name} Full Profile
            </button>
            <button
              onClick={() => {
                setSelectedCountry(country2);
                setCurrentView('country');
              }}
              className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition"
            >
              View {country2.name} Full Profile
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (currentView === 'country') {
    return (
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <div className={`bg-gradient-to-r ${selectedCountry.color} shadow-lg`}>
          <div className="max-w-5xl mx-auto px-8 py-6">
            <button
              onClick={() => setCurrentView('dashboard')}
              className="flex items-center gap-2 text-gray-800 hover:text-gray-900 mb-4 transition"
            >
              <Home size={20} />
              <span>Back to Dashboard</span>
            </button>
            <div className="flex items-center gap-6">
              <span className="text-8xl">{selectedCountry.flag}</span>
              <div>
                <h1 className="text-4xl font-bold text-gray-900">{selectedCountry.name}</h1>
                <p className="text-xl text-gray-800 italic mt-2">{selectedCountry.tagline}</p>
                <p className="text-sm text-gray-700 mt-1">Authors: {selectedCountry.authors}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-5xl mx-auto px-8 py-8 space-y-6">
          {/* Situation */}
          <Section 
            title="Situation at Time of Reform" 
            icon="🌍"
            expanded={expandedSections.situation}
            onToggle={() => toggleSection('situation')}
          >
            <p className="text-gray-700 leading-relaxed">{selectedCountry.situation}</p>
          </Section>

          {/* Key Indicators */}
          <Section 
            title="Key Indicators" 
            icon="📊"
            expanded={expandedSections.indicators}
            onToggle={() => toggleSection('indicators')}
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {selectedCountry.indicators.map((ind, i) => (
                <div key={i} className="bg-gradient-to-br from-blue-50 to-indigo-50 p-4 rounded-lg border border-blue-200">
                  <div className="text-3xl mb-2">{ind.icon}</div>
                  <div className="text-xs text-gray-600 mb-1">{ind.label}</div>
                  <div className="text-sm font-bold text-gray-900">{ind.value}</div>
                </div>
              ))}
            </div>
          </Section>

          {/* Challenges */}
          <Section 
            title="Main Challenges Driving Reform" 
            icon="⚠️"
            expanded={expandedSections.challenges}
            onToggle={() => toggleSection('challenges')}
          >
            <ul className="space-y-2">
              {selectedCountry.challenges.map((c, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-red-500 mt-1">▪</span>
                  <span className="text-gray-700">{c}</span>
                </li>
              ))}
            </ul>
          </Section>

          {/* Political Context */}
          <Section 
            title="Political and Social Context" 
            icon="🏛️"
            expanded={expandedSections.context}
            onToggle={() => toggleSection('context')}
          >
            <p className="text-gray-700 leading-relaxed">{selectedCountry.context}</p>
          </Section>

          {/* Minister & Key Actors */}
          <Section 
            title="Minister & Key Actors" 
            icon="👥"
            expanded={expandedSections.minister}
            onToggle={() => toggleSection('minister')}
          >
            <p className="text-gray-700 leading-relaxed">{selectedCountry.minister}</p>
          </Section>

          {/* Reform Description */}
          <Section 
            title="Description of the Reform" 
            icon="📋"
            expanded={expandedSections.reform}
            onToggle={() => toggleSection('reform')}
          >
            <div className="space-y-6">
              <div>
                <h4 className="font-bold text-gray-800 mb-3">Goals</h4>
                <ul className="space-y-2">
                  {selectedCountry.goals.map((g, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="text-green-500 mt-1">✓</span>
                      <span className="text-gray-700">{g}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-gray-800 mb-3">Main Strategies</h4>
                <ul className="space-y-2">
                  {selectedCountry.strategies.map((s, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="text-blue-500 mt-1">→</span>
                      <span className="text-gray-700">{s}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Section>

          {/* Results */}
          <Section 
            title="Results & Impact" 
            icon="📈"
            expanded={expandedSections.results}
            onToggle={() => toggleSection('results')}
          >
            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 mb-4">
              <p className="font-bold text-yellow-900">THIS is what actually happened:</p>
            </div>
            <div className="text-gray-700 leading-relaxed whitespace-pre-line">
              {selectedCountry.results}
            </div>
          </Section>

          {/* Advice to Minister */}
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl shadow-lg p-8 border-2 border-purple-200">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-4xl">💡</span>
              <h2 className="text-3xl font-bold text-gray-900">Advice to the Minister</h2>
            </div>
            
            <p className="text-gray-700 mb-6">
              If you could go back in time and advise the minister before implementing this reform, 
              what would you say? Our AI will generate a counterfactual narrative exploring what might 
              have happened if your advice had been followed.
            </p>

            {/* Need Help Button */}
            <div className="mb-6">
              <button
                onClick={generateSocraticQuestions}
                disabled={generatingQuestions}
                className="flex items-center gap-2 bg-indigo-600 text-white px-5 py-2 rounded-lg hover:bg-indigo-700 disabled:bg-gray-400 transition text-sm font-medium"
              >
                {generatingQuestions ? (
                  <>
                    <Loader2 className="animate-spin" size={18} />
                    Generating questions...
                  </>
                ) : (
                  <>
                    <span>🤔</span>
                    Need Help? Get Guiding Questions
                  </>
                )}
              </button>
            </div>

            {/* Socratic Questions */}
            {socraticQuestions.length > 0 && (
              <div className="mb-6 bg-indigo-50 border-l-4 border-indigo-500 rounded-lg p-5">
                <h3 className="font-bold text-indigo-900 mb-3 flex items-center gap-2">
                  <span>💭</span>
                  Questions to Guide Your Thinking
                </h3>
                <ul className="space-y-3">
                  {socraticQuestions.map((q, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="text-indigo-600 font-bold mt-1">{i + 1}.</span>
                      <span className="text-gray-800">{q}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-sm text-indigo-700 mt-4 italic">
                  Reflect on these questions, then write your advice below.
                </p>
              </div>
            )}

            <textarea
              value={advice}
              onChange={(e) => setAdvice(e.target.value)}
              placeholder="If I could go back, I'd advise the minister to..."
              className="w-full h-32 p-4 border border-purple-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 resize-none"
            />

            <button
              onClick={generateCounterfactual}
              disabled={!advice.trim() || generating}
              className="mt-4 bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 disabled:bg-gray-400 flex items-center gap-2 transition font-medium"
            >
              {generating ? (
                <>
                  <Loader2 className="animate-spin" size={20} />
                  Generating...
                </>
              ) : (
                <>
                  <Send size={20} />
                  Generate Counterfactual
                </>
              )}
            </button>

            {counterfactual && (
              <div className="mt-6 bg-white rounded-lg p-6 border-2 border-purple-300">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <span>🔮</span>
                  Alternative Timeline
                </h3>
                <div className="text-gray-700 leading-relaxed whitespace-pre-line">
                  {counterfactual}
                </div>
              </div>
            )}
          </div>

          {/* Download Button */}
          <div className="flex justify-center pt-8">
            <button
              onClick={() => {
                const content = `${selectedCountry.name} Education Reform Profile\n\n` +
                  `Situation: ${selectedCountry.situation}\n\n` +
                  `Results: ${selectedCountry.results}`;
                const blob = new Blob([content], { type: 'text/plain' });
                const url = URL.createObjectURL(blob);
                const a = document.createElement('a');
                a.href = url;
                a.download = `${selectedCountry.name}-reform-summary.txt`;
                a.click();
              }}
              className="flex items-center gap-2 bg-gray-700 text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition"
            >
              <Download size={20} />
              Download Summary
            </button>
          </div>
        </div>
      </div>
    );
  }
}

function Section({ title, icon, expanded, onToggle, children }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between p-6 hover:bg-gray-50 transition"
      >
        <div className="flex items-center gap-3">
          <span className="text-3xl">{icon}</span>
          <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
        </div>
        {expanded ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
      </button>
      {expanded && (
        <div className="p-6 pt-0 border-t">
          {children}
        </div>
      )}
    </div>
  );
}

function CompareSection({ title, icon, children }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex items-center gap-3 mb-4">
        <span className="text-3xl">{icon}</span>
        <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
      </div>
      {children}
    </div>
  );
}