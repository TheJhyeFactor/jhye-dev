export type ApplicationStage = 'Applied' | 'Employer site' | 'Interview' | 'Offer' | 'Unlikely to progress' | 'Rejected' | 'Withdrawn'

export type JobApplication = {
  id: string
  title: string
  company: string
  location: string
  stage: ApplicationStage
  date: string
  salary?: string
  strongInterest?: boolean
  sourceStatus?: string
  sourceStatusDate?: string
  note?: string
  stageRevision?: string
}

const applied = (id: string, title: string, company: string, location = 'Sydney NSW', salary?: string): JobApplication => ({ id, title, company, location, stage: 'Applied', date: '2026-10-02', salary })
const site = (id: string, title: string, company: string, location = 'Sydney NSW', salary?: string): JobApplication => ({ id, title, company, location, stage: 'Employer site', date: '2026-10-02', salary })
const strong = (job: JobApplication): JobApplication => ({ ...job, strongInterest: true })

export const seedApplications: JobApplication[] = [
  site('1', 'Binance Accelerator Program - Backend Engineer, Pay & Card', 'Binance'),
  applied('2', 'Junior Technical Helpdesk Support', 'Partech, Inc.', 'Newington, Sydney NSW', '$60k–$65k + super'),
  applied('3', 'Software Support Consultant', 'Meshed Group', 'Alexandria, Sydney NSW'),
  applied('4', 'AI & Platform Engineer', 'Motion Recruitment', 'North Sydney, Sydney NSW'),
  applied('5', 'Project Grace: Software Development Graduate Program', 'FDM Group Australia Pty Ltd.', 'Sydney NSW', '$60k–$75k'),
  applied('6', 'Junior Forward Deployed Engineer', 'Lyra Technologies Pty Ltd', 'Millers Point, Sydney NSW', '$79,499 + super'),
  site('7', 'Developer Programmer', 'GoTech Solutions Pty Ltd'),
  { ...site('8', 'Presales Customer Engineer', 'Cloudflare'), stage: 'Rejected', stageRevision: 'cloudflare-rejection-2026-10-04', note: 'Application confirmed by Cloudflare email. Not progressing to interview; rejection received 4 Oct 2026.' },
  applied('9', 'Become a Simpro Implementation Expert', 'Exelect Recruitment'),
  applied('10', 'Backend Developer', 'Humello', 'Sydney NSW', '$70k'),
  { ...applied('11', 'Graduate AI & Technology Developer', 'Private Advertiser', 'North Lakes, Brisbane QLD'), sourceStatus: 'Viewed by employer', sourceStatusDate: '2026-10-03' },
  applied('12', 'Early-Career Software Developer', 'Semaphore Consulting', 'Forest Hill, Melbourne VIC'),
  applied('13', 'Graduate / Junior Embedded Software Engineer', 'The Onset', 'Sydney NSW', '$90k–$130k'),
  applied('14', 'Graduate Level Full Stack Developer', 'Red Dirt Equities Pty Ltd', 'Sydney NSW', '$9k–$10k/month'),
  applied('15', 'Graduate Software Developer, AI & Automation', 'Optura', 'Carnegie, Melbourne VIC'),
  applied('16', 'Junior Software Developer - Integration', 'Austcorp Executive', 'Melbourne Airport, Melbourne VIC', 'Up to $95k + super'),
  applied('17', 'AI Agent / Automation Engineer', 'Upstate Group', 'Dee Why, Sydney NSW'),
  applied('18', 'IT Support Officer', 'Adaptas Solutions Pty Ltd', 'Clyde, Sydney NSW', '$80k–$85k'),
  applied('19', 'Technical Support Analyst', 'xceltium', 'Liverpool, Sydney NSW', '$105k base + super'),
  applied('20', 'INGRITY 2027 Graduate Program – Digital, Data & AI', 'INGRITY Pty Ltd.'),
  applied('21', 'Junior Full Stack Developer - Windows & Desktop Applications', 'Northbridge Recruitment', 'North Shore & Northern Beaches, Sydney NSW'),
  applied('22', 'Helpdesk/IT Support Consultant', 'Danet Technology', 'Sydney NSW', '$65k–$85k'),
  applied('23', 'Technical Support Analyst', 'Windcave Limited'),
  applied('24', 'Junior Software Developer', 'DingGo', 'Rhodes, Sydney NSW', '$75k–$85k'),
  site('25', 'Junior System Analyst', 'Harris Farm Markets', 'Homebush, Sydney NSW'),
  applied('26', 'Junior Software Support Consultant', 'Meshed Group', 'Alexandria, Sydney NSW', '$80k–$90k'),
  applied('27', 'Technical Support Engineer (SharePoint)', 'Microsoft'),
  site('28', 'Staff Platform Engineer', 'Commonwealth Bank', 'Eveleigh, Sydney NSW'),
  { ...applied('29', 'Help Desk & IT Support', 'Direct Couriers Pty Ltd', 'Banksmeadow, Sydney NSW'), stage: 'Unlikely to progress', stageRevision: 'direct-couriers-feedback-2026-10-04', note: 'SEEK update received 4 Oct 2026: application unlikely to progress. Expected annual base salary answer did not match employer preferences; salary range and whether the answer was above or below it were not supplied.' },
  applied('30', 'Product Engineer', 'eQ8', 'Pyrmont, Sydney NSW'),
  site('31', 'ITS Service Centre Consultant', 'Deloitte'),
  applied('32', 'Information Technology Support Analyst', 'Jamesons Strata Management', 'Surry Hills, Sydney NSW'),
  applied('33', 'Manager, AI & Business Enablement Manager', 'SustainRecruit'),
  site('34', 'Product Services Analyst - Technology', 'ABC', 'Sydney NSW', '$83k–$92k + 15.4% super'),
  site('35', 'Data Engineer', 'Teachers Mutual Bank'),
  applied('36', 'Technology Support Officer', 'Legacy Club Services', 'Sydney NSW', '$71,570–$73,823'),
  strong({ ...applied('37', 'Software Engineer', 'Wildlife Information Rescue and Education Service Ltd', 'Brookvale, Sydney NSW'), stage: 'Interview' }),
  strong(site('38', 'Graduate/Junior Software Engineer', 'oOh!', 'North Sydney, Sydney NSW')),
  applied('39', 'AI Solutions Engineer - MSP - MS Azure/Copilot/Fabric/Foundry!', 'Saul Recruitment', 'Sydney NSW', 'Up to $140k + super'),
  applied('40', 'Data & AI Engineer/Analyst', 'Sense Recruitment', 'Perth WA'),
  applied('41', 'Fullstack Python Engineer', 'Nuage Technology Group'),
  strong(site('42', 'AI Content Analyst (Remote | Flexible Hours)', 'AD Recruit')),
  applied('43', 'AI Platform Engineer', '4wd Supacentre', 'Sydney Olympic Park, Sydney NSW'),
  applied('44', 'Junior (Graduate) Back-End Developer', 'Lynxx'),
  site('45', 'Graduate Software Engineer', 'SEEK Limited', 'Melbourne VIC', '$82k + super + bonus'),
  applied('46', 'AI & Automation Analyst – Graduate', 'Australian Financial Planning Group'),
  applied('47', 'AI Engineer', 'SustainRecruit'),
  applied('48', 'AI Engineer (Sydney)', 'Talent Connect Australia'),
  applied('49', 'Business Analyst - AI Specialist (Sydney | Melbourne | Brisbane)', 'Automic Group'),
  applied('50', 'AI Delivery and Transformation Lead', 'Preacta Recruitment'),
  site('51', 'Technical Officer Level 2, Antarctica and Sub-Antarctica', 'Bureau Of Meteorology', 'Sydney NSW', '$70,477–$80,276 + 15.4% super'),
  site('52', 'IT Support Assistant (Casual)', 'ZipMoney Payments Pty Ltd'),
  site('53', 'Student Software Engineer', 'Resmed'),
  site('54', 'Software Engineer, Truyu', 'Commonwealth Bank', 'Eveleigh, Sydney NSW'),
  site('55', 'Application/Product Security Engineer Graduate (Security BP) - 2027 Start', 'TikTok'),
  applied('56', "Software Engineer", "McKkr's Training & Internships", 'North Sydney, Sydney NSW'),
  site('57', 'IT Intern - Universal Operations and Technology', 'NBC Universal'),
  site('58', '2027 Apple Internship - Information Systems and Technology (AUS)', 'Apple'),
  applied('59', 'Technical Consultant', 'Sensei', 'Perth WA'),
  applied('60', 'Workflow Automation Specialist', 'Flash Co', 'Brisbane QLD'),
  {"id": "61", "title": "Cyber Security Engineer", "company": "AC3 Pty Limited", "location": "Sydney NSW", "stage": "Applied", "date": "2026-10-03", "sourceStatus": "Applied on SEEK"},
  {"id": "62", "title": "Junior Service Desk Analyst (Casual)", "company": "Camden Council", "location": "Oran Park, Sydney NSW", "stage": "Employer site", "date": "2026-10-03", "sourceStatus": "Visited employer’s application site", "salary": "$44.02 - $50.43 p.h. + casual loading + super"},
  {"id": "63", "title": "System Cybersecurity Administrator", "company": "James Hardie", "location": "Sydney NSW", "stage": "Applied", "date": "2026-10-03", "sourceStatus": "Applied on SEEK"},
  {"id": "64", "title": "Application Consultant | Power Platform | Junior-Mid Level", "company": "Precision Sourcing", "location": "Sydney NSW", "stage": "Applied", "date": "2026-10-03", "sourceStatus": "Applied on SEEK", "salary": "including super"},
  {"id": "65", "title": "Web-app Developer & Automation Officer", "company": "Ironbark Sustainability", "location": "Collingwood, Melbourne VIC", "stage": "Applied", "date": "2026-10-03", "sourceStatus": "Applied on SEEK"},
  {"id": "66", "title": "Software Engineer - AWS, Java, Golang", "company": "Profusion PAC Pty Ltd", "location": "Melbourne VIC", "stage": "Employer site", "date": "2026-10-03", "sourceStatus": "Visited employer’s application site", "salary": "Daily Rate on Offer, 6 mths + Extns"},
  {"id": "67", "title": "Developer Vulnerability Specialist", "company": "Techforce Recruitment", "location": "Brisbane QLD", "stage": "Applied", "date": "2026-10-03", "sourceStatus": "Applied on SEEK"},
  {"id": "68", "title": "Cyber Security Engineer", "company": "Myer Group", "location": "Docklands, Melbourne VIC", "stage": "Employer site", "date": "2026-10-03", "sourceStatus": "Visited employer’s application site"},
  {"id": "69", "title": "Information Security Analyst", "company": "Excite Cyber Pty Ltd", "location": "North Sydney, Sydney NSW", "stage": "Applied", "date": "2026-10-03", "sourceStatus": "Applied on SEEK"},
  {"id": "70", "title": "Software Engineer", "company": "Encompass Technologies", "location": "Melbourne VIC", "stage": "Applied", "date": "2026-10-03", "sourceStatus": "Applied on SEEK", "salary": "$110,000 – $130,000 per year + annual bonus"},
  {"id": "71", "title": "Developer/Support", "company": "Emanate Technology Pty Ltd", "location": "Brisbane QLD", "stage": "Applied", "date": "2026-10-03", "sourceStatus": "Applied on SEEK", "salary": "AUD 95200 per annum"},
  {"id": "72", "title": "Software Developer", "company": "Harcourts", "location": "Brisbane QLD", "stage": "Employer site", "date": "2026-10-03", "sourceStatus": "Visited employer’s application site"},
  {"id": "73", "title": "Full Stack Engineer - (Spring / Kotlin / React)", "company": "The Onset", "location": "Sydney NSW", "stage": "Applied", "date": "2026-10-03", "sourceStatus": "Applied on SEEK", "salary": "AUD 1000 - 1100 per day"},
  {"id": "74", "title": "Application Support Engineer- SQL- Growing Fintech", "company": "Bluefin Resources Pty Limited", "location": "Sydney NSW", "stage": "Applied", "date": "2026-10-03", "sourceStatus": "Applied on SEEK", "salary": "AUD 110000 per annum, + super+ 5% bonus"},
  {"id": "75", "title": "Junior Frontend Developer: Ecommerce & AI Automation (Part-time)", "company": "Zoe Kratzmann", "location": "Kunda Park, Sunshine Coast QLD", "stage": "Applied", "date": "2026-10-03", "sourceStatus": "Applied on SEEK"},
  {"id": "76", "title": "Junior Software Developer", "company": "Quality People", "location": "Darwin NT", "stage": "Applied", "date": "2026-10-03", "sourceStatus": "Applied on SEEK", "salary": "Top $'s Paid ! Contract Extensions likely !"},
  {"id": "77", "title": "Junior Software Developer - .Net / C#", "company": "ClockOn Pty Ltd", "location": "Erina, Gosford & Central Coast NSW", "stage": "Applied", "date": "2026-10-03", "sourceStatus": "Applied on SEEK", "salary": "$70,000 – $75,000 per year"},
  {"id": "78", "title": "AI Product Engineer", "company": "The Ruby Group", "location": "Toowoomba, Toowoomba & Darling Downs QLD", "stage": "Applied", "date": "2026-10-03", "sourceStatus": "Applied on SEEK", "salary": "$100,000 – $140,000 per year"},
  {"id": "79", "title": "AI Engineer (Brisbane)", "company": "Talent Connect Australia", "location": "Brisbane QLD", "stage": "Applied", "date": "2026-10-03", "sourceStatus": "Applied on SEEK", "salary": "Salary is Flexible & Based on Experience"},
  {"id": "80", "title": "Information Security Engineer", "company": "MyState Bank", "location": "Hobart TAS", "stage": "Employer site", "date": "2026-10-03", "sourceStatus": "Visited employer’s application site"},
  {"id": "81", "title": "Cyber Security Analyst", "company": "Snowy Hydro Pty Ltd", "location": "Melbourne VIC", "stage": "Employer site", "date": "2026-10-03", "sourceStatus": "Visited employer’s application site"},
  {"id": "82", "title": "Cyber Security Consultant - Penetration Tester", "company": "Shea Security", "location": "Melbourne VIC", "stage": "Applied", "date": "2026-10-03", "sourceStatus": "Applied on SEEK", "salary": "$85,000 – $115,000 per year"},
  {"id": "83", "title": "Victorian Government Cyber Internship Program", "company": "HOBAN Recruitment", "location": "Melbourne VIC", "stage": "Employer site", "date": "2026-10-03", "sourceStatus": "Visited employer’s application site", "salary": "$62,104 per year + 12% superannuation"},
  {"id": "84", "title": "Junior Cyber Security Project Coordinator / Analyst", "company": "FinXL IT Professional Services", "location": "Melbourne VIC", "stage": "Applied", "date": "2026-10-03", "sourceStatus": "Applied on SEEK"},
  {"id": "85", "title": "Engineering Specialist (IT)", "company": "Airservices Australia", "location": "Brisbane Airport, Brisbane QLD", "stage": "Employer site", "date": "2026-10-03", "sourceStatus": "Visited employer’s application site"},
  {"id": "86", "title": "Cyber Security Accreditation", "company": "NTT Ltd", "location": "Sydney NSW", "stage": "Applied", "date": "2026-10-03", "sourceStatus": "Applied on SEEK"},
  {"id": "87", "title": "AI Engineer", "company": "Learning Online Group", "location": "Melbourne VIC", "stage": "Applied", "date": "2026-10-03", "sourceStatus": "Applied on SEEK", "salary": "$115,000 – $170,000 per year"},
  {"id": "88", "title": "AI Solutions Engineer", "company": "Affinda Group", "location": "Cremorne, Melbourne VIC", "stage": "Applied", "date": "2026-10-03", "sourceStatus": "Applied on SEEK", "salary": "$89,000 – $95,000 per year"},
  {"id": "89", "title": "AI Engineer (Melbourne)", "company": "Talent Connect Australia", "location": "Melbourne VIC", "stage": "Applied", "date": "2026-10-03", "sourceStatus": "Applied on SEEK", "salary": "Salary is Fleixble & Based on Experience"},
  {"id": "90", "title": "AI Engineer", "company": "The Royal Australian College of General Practitioners", "location": "East Melbourne, Melbourne VIC", "stage": "Employer site", "date": "2026-10-03", "sourceStatus": "Visited employer’s application site", "salary": "$135,174 + Superannuation"},
  {"id": "91", "title": "Data Engineer", "company": "Allume Energy", "location": "Abbotsford, Melbourne VIC", "stage": "Applied", "date": "2026-10-03", "sourceStatus": "Applied on SEEK", "salary": "Salary range: $120,000 – $140,000 base + super"},
  {"id": "92", "title": "Office, Systems & AI automation – All rounder", "company": "Pure Peninsula Honey", "location": "Moorooduc, Mornington Peninsula & Bass Coast VIC", "stage": "Applied", "date": "2026-10-03", "sourceStatus": "Viewed by employer", "sourceStatusDate": "2026-10-03"},
  {"id": "93", "title": "Data Engineer (AI)", "company": "Resource Agility", "location": "Melbourne VIC", "stage": "Applied", "date": "2026-10-03", "sourceStatus": "Applied on SEEK"},
  {"id": "94", "title": "IT Desktop Support Analyst", "company": "Wotton Kearney", "location": "Wellington, Dubbo & Central NSW", "stage": "Employer site", "date": "2026-10-03", "sourceStatus": "Visited employer’s application site"},
  {"id": "95", "title": "Regional Intelligence Analyst", "company": "Control Risks", "location": "Sydney NSW", "stage": "Employer site", "date": "2026-10-03", "sourceStatus": "Visited employer’s application site"},
  {"id": "96", "title": "Software Engineer II", "company": "Resmed", "location": "Sydney NSW", "stage": "Employer site", "date": "2026-10-03", "sourceStatus": "Visited employer’s application site"},
  {"id": "97", "title": "2027 Enterprise Technology Services Internship - Sydney", "company": "Bloomberg", "location": "Sydney NSW", "stage": "Employer site", "date": "2026-10-03", "sourceStatus": "Visited employer’s application site"},
  {"id": "98", "title": "Helpdesk and IT Support Technician", "company": "Smart Business Systems", "location": "Kedron, Brisbane QLD", "stage": "Applied", "date": "2026-10-02", "sourceStatus": "Applied on SEEK"},
]

// Add newly supplied records without replacing the user's saved stage updates.
// A dated source outcome is applied once, then later manual changes are preserved.
export function mergeSavedApplications(saved: JobApplication[]): JobApplication[] {
  const remaining = new Map(saved.map(job => [job.id, job]))
  const normalise = (value: string) => value.trim().toLowerCase().replace(/\s+/g, ' ')
  const result = seedApplications.map(seed => {
    const previous = remaining.get(seed.id) ?? [...remaining.values()].find(job =>
      normalise(job.title) === normalise(seed.title) && normalise(job.company) === normalise(seed.company))
    if (!previous) return seed
    remaining.delete(previous.id)
    const useSourceOutcome = seed.stageRevision && previous.stageRevision !== seed.stageRevision
    return { ...seed, ...previous, id: seed.id, sourceStatus: seed.sourceStatus ?? previous.sourceStatus,
      sourceStatusDate: seed.sourceStatusDate ?? previous.sourceStatusDate,
      note: seed.note ?? previous.note, stageRevision: seed.stageRevision ?? previous.stageRevision,
      stage: useSourceOutcome ? seed.stage : previous.stage }
  })
  const keys = new Set(result.map(job => `${normalise(job.title)}|${normalise(job.company)}`))
  for (const job of remaining.values()) {
    const key = `${normalise(job.title)}|${normalise(job.company)}`
    if (!keys.has(key)) { result.push(job); keys.add(key) }
  }
  return result
}
