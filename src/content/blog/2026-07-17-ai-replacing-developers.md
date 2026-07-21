---
title: Will (When) AI replace developers?
date: 2026-07-17
summary: Why oh why should this start in my mid-30s
tags: [meta, ai]
---

I was talking with my wife—who is a doctor—the other day about how AI is going to change her work.
I was trying to convince her that eventually, **almost everything that can be automated will be automated**.
I started with what seemed like obvious examples:
1. Briefing on the patient's reason for visiting.
2. Taking a medical history.

Both are time-consuming, repetitive, and seem like *perfect AI tasks*.
I didn't even get to the more complicated parts: physical examination, differential diagnosis, interpretation of test results, and treatment planning.
It turns out disagreeing with my wife about anything -let alone medicine- was, unsurprisingly, a _mistake_. More importantly, I realized I was looking at the problem from a very *tech-centric perspective*.

She told me:
Doctors take patients affirmations with a grain of salt.
Patients tend to downplay symptoms, exaggerate others, forget the relevant detail, or describe the wrong thing entirely, so she has to *physically examine them*.

And then, unfortunately for my wife, my *developer brain* took over.\
Because this sounds exactly like **gathering software requirements**.\
My wife hopefully got another reminder of what it means to be *married to a software developer*. I was nodding along enthusiastically, but my eyes had already betrayed me — that classic blank, cow-like stare that says "I am technically **listening**, but my brain has completely switched to a different **tab**" look.


The customer tells you what they think the system should do, but often they do not know what problem they actually need solved.\
In both cases, the real job isn't "process the input" — it's **figuring out which parts of the input to trust, what's missing, and what's actively wrong**.\
A good **developer** does the same thing a good **doctor** does:
- **Determine** what information can be trusted,
- **Identify** what is missing,
- **Notice** contradictions,
- **Understand** the environment where the solution will operate.

An **AI system** can summarize a customer's requirements beautifully. It can generate a feature implementation. It can even suggest improvements.
But the *hardest question* remains:
<u>How does it know that the input itself is wrong?</u>

The bottleneck was **never** writing things down.\
<u>The bottleneck was discovering the **truth**.</u>

I was not divorced that day, *though maybe I should have been*.

## So what happens to software developers?
But in software development, things are not all bad for AI.\
Running Software code is **repeatable** and can be **tested**, something not possible with humans.\
This makes software development unusually _exposed to automation_.


## Measuring AI exposure in software development
The more credible - without the hype - source for how AI is changing the work landscape I found was <a href="https://iceberg.mit.edu/" target="_blank" rel="noopener noreferrer">Iceberg Index</a> report on AI in software development.
It publishes a <a href="https://iceberg.mit.edu/report.pdf" target="_blank" rel="noopener noreferrer">report</a>.

The report is grounded to a list of skills required for each job category in the US.\
Then the methodology is to assess how much of the skills are **AI-assisted** vs. **human-assisted.**\
It deliberately is not concerned about issues like **adaptability** of the market to AI technologies.\
It is a very simple and straightforward assessment, it plain simply asks of the thousands of jobs and tens of thousands of skills for each, what is the **overlap** between the AI and human skills.


# Software Developers (O*NET 15-1252.00) — AI Exposure by Data Category
Here is my take on the Data, directly from the O*NET source, with a small indication on whether this can be automated.\
**This is my personal opinion, not the opinion of the Iceberg Index.**

Source: [O*NET OnLine — 15-1252.00 Software Developers](https://www.onetonline.org/link/summary/15-1252.00)

Legend:\
**AI** = fully automatable today\
**Partial** = AI-assisted, human still needed\
**Human** = not automatable\
**N/A** = physical/environmental, not a task

---

## Tasks (17)

| Task | Assessment |
|---|---|
| Analyze user needs and software requirements to determine feasibility of design within time and cost constraints | **Partial** |
| Develop or direct software system testing or validation procedures, programming, or documentation | **Partial** |
| Confer with systems analysts, engineers, programmers and others to design systems and obtain info on limitations, requirements, interfaces | **Human** |
| Modify existing software to correct errors, adapt to new hardware, or upgrade interfaces/performance | **AI** |
| Prepare reports or correspondence concerning project specifications, activities, or status | **AI** |
| Analyze information to determine, recommend, and plan installation of a new system or modification | **Partial** |
| Store, retrieve, and manipulate data for analysis of system capabilities and requirements | **AI** |
| Design, develop and modify software systems using scientific analysis and mathematical models | **Partial** |
| Determine system performance standards | **Partial** |
| Consult with customers or other departments on project status, proposals, or technical issues | **Human** |
| Confer with data processing or project managers on limitations/capabilities for projects | **Human** |
| Monitor functioning of equipment to ensure system operates per specifications | **Partial** |
| Coordinate installation of software system | **Human** |
| Supervise the work of programmers, technologists, technicians, other personnel | **Human** |
| Supervise and assign work to programmers, designers, technologists, etc. | **Human** |
| Obtain and evaluate info on reporting formats, costs, or security needs for hardware configuration | **Partial** |
| Train users to use new or modified equipment | **Human** |
---

## Work Activities (18)
| Activity | Assessment |
|---|---|
| Working with Computers | **AI** |
| Processing Information | **AI** |
| Making Decisions and Solving Problems | **Partial** |
| Thinking Creatively | **Partial** |
| Communicating with Supervisors, Peers, or Subordinates | **Human** |
| Analyzing Data or Information | **AI** |
| Updating and Using Relevant Knowledge | **Partial** |
| Organizing, Planning, and Prioritizing Work | **Partial** |
| Getting Information | **Partial** |
| Evaluating Information to Determine Compliance with Standards | **Partial** |
| Documenting/Recording Information | **AI** |
| Developing Objectives and Strategies | **Human** |
| Monitoring Processes, Materials, or Surroundings | **Partial** |
| Identifying Objects, Actions, and Events | **Partial** |
| Interpreting the Meaning of Information for Others | **Partial** |
| Establishing and Maintaining Interpersonal Relationships | **Human** |
| Scheduling Work and Activities | **Human** |
| Providing Consultation and Advice to Others | **Human** |
---

## Detailed Work Activities (18)
| Activity | Assessment |
|---|---|
| Monitor computer system performance to ensure proper operation | **Partial** |
| Analyze project data to determine specifications or requirements | **Partial** |
| Develop testing routines or procedures | **AI** |
| Manage information technology projects or system activities | **Human** |
| Modify software programs to improve performance | **AI** |
| Collaborate with others to determine design specifications or details | **Human** |
| Coordinate software or hardware installation | **Human** |
| Communicate project information to others | **Human** |
| Assess database performance | **Partial** |
| Prepare data for analysis | **AI** |
| Apply mathematical/statistical approaches to solve problems | **Partial** |
| Design software applications | **Partial** |
| Supervise information technology personnel | **Human** |
| Develop performance metrics or standards related to IT | **Partial** |
| Provide technical support for software maintenance or use | **Partial** |
| Collaborate with others to resolve IT issues | **Human** |
| Assign duties or work schedules to employees | **Human** |
| Teach others to use computer equipment or hardware | **Human** |

---

## Work Context (17)
| Context item | Assessment |
|---|---|
| Spend Time Sitting (95% "continually") | **N/A** |
| Work With or Contribute to a Work Group or Team (71% "extremely important") | **Human** |
| E-Mail | **Partial** |
| Freedom to Make Decisions (46% "some freedom") | **Human** |
| Importance of Being Exact or Accurate (44% "very important") | **Partial** |
| Determine Tasks, Priorities and Goals | **Human** |
| Contact With Others (35% "constant contact") | **Human** |
| Coordinate or Lead Others (46% "very important") | **Human** |
| Time Pressure | **Human** |
| Telephone Conversations | **Human** |
| Work Outcomes and Results of Other Workers (50% "high responsibility") | **Human** |
| Importance of Repeating Same Tasks | **AI** |
| Indoors, Environmentally Controlled | **N/A** |
| Hands to Handle/Control Objects, Tools | **N/A** |
| Duration of Typical Work Week (90% "40 hours") | **N/A** |
| Level of Competition (40% "highly competitive") | **Human** |
| Face-to-Face Discussions | **Human** |

---

## Essential Skills (7)
| Skill | Assessment |
|---|---|
| Critical Thinking | **Partial** |
| Active Learning | **Partial** |
| Reading Comprehension | **AI** |
| Active Listening | **Human** |
| Writing | **AI** |
| Speaking | **Human** |
| Monitoring | **Partial** |

---

## Transferable Skills (9)
| Skill | Assessment |
|---|---|
| Programming | **Partial** |
| Judgment and Decision Making | **Human** |
| Systems Analysis | **Partial** |
| Complex Problem Solving | **Partial** |
| Systems Evaluation | **Partial** |
| Technology Design | **Partial** |
| Operations Analysis | **Partial** |
| Time Management | **Human** |
| Coordination | **Human** |

---

## Knowledge (4)
| Knowledge area | Assessment |
|---|---|
| Computers and Electronics | **AI** |
| Customer and Personal Service | **Human** |
| Mathematics | **AI** |
| English Language | **AI** |

---

## Abilities (15)
| Ability | Assessment |
|---|---|
| Deductive Reasoning | **AI** |
| Near Vision | **N/A** |
| Oral Comprehension | **Human** |
| Oral Expression | **Human** |
| Problem Sensitivity | **Human** |
| Written Comprehension | **AI** |
| Information Ordering | **AI** |
| Category Flexibility | **Partial** |
| Inductive Reasoning | **Partial** |
| Written Expression | **AI** |
| Speech Recognition | **N/A** |
| Fluency of Ideas | **Partial** |
| Originality | **Partial** |
| Selective Attention | **Human** |
| Speech Clarity | **N/A** |

---

## Work Styles (6)
| Style | Assessment |
|---|---|
| Innovation | **Partial** |
| Adaptability | **Human** |
| Achievement Orientation | **Human** |
| Intellectual Curiosity | **Human** |
| Attention to Detail | **Partial** |
| Dependability | **Human** |

---

## Summary
Of the ~110 line items across all categories:

- **~20%** — **AI** (fully automatable today)
- **~45%** — **Partial** (AI-assisted, human still required)
- **~30%** — **Human** (not automatable)
- **~5%** — **N/A** (physical/environmental, not task-based)

The AI/Partial share concentrates in **technical output** (writing code, processing data, documentation). The Human share concentrates in **social and accountability** categories (supervision, client consultation, team coordination, scheduling, decision ownership) — *the parts of the job that persist even if code generation is fully automated*.
For a more quantitative gut-check, I built my own 8-hour breakdown, loosely informed by <a href="https://metr.org/blog/2026-02-24-uplift-update/" target="_blank" rel="noopener noreferrer">METR's ongoing developer-productivity research</a> — though I want to be upfront that **the table below is my own estimate, not a number METR actually published**. METR doesn't measure time-per-activity; they measure whether a task took more or less time with AI allowed vs. disallowed, and their most recent post is mostly an explanation of why that measurement is *getting harder to trust* (more on that below).

# My 2026 8-Hour Estimate — Software Developer AI Exposure
| Activity | Hours | AI / Partial / Human |
|---|---|---|
| Writing/implementing code | 2.5h | **Partial** → leaning more AI-assisted now than a year ago |
| Debugging & troubleshooting | 1.5h | **Partial** |
| Code review (own + others') | 1h | **Human** |
| Meetings, standups, coordination | 1h | **Human** |
| Testing (writing/running) | 0.75h | **AI** |
| Documentation | 0.5h | **AI** |
| Design/architecture decisions | 0.5h | **Human** |
| Research/reading/learning | 0.25h | **Partial** |
| **Total** | **8h** | |

The AI/Partial share of a software developer's workday is:\
**AI**: **~15.6%**\
**Partial**: **~59.4%**\
**Human**: **~25%**

## Comparing to 2025 METR
Roll-up is basically unchanged in shape from previous year (2025) (~1.25h AI, ~4.75h partial, ~2h human) —
what's changed is confidence in how much of the "partial" bucket is actually *a real speedup vs. a wash*.
A year ago, the honest answer leaned toward "AI in that bucket may not help at all, or may even cost time."
Now, the honest answer is "probably does help, likely by a real margin, but nobody has a trustworthy number for how much" —
and the people most convinced it helps are, ironically, *the ones removing themselves from the studies that would prove it*.

A year ago, the honest answer leaned toward "AI in that bucket might not help at all, or might even cost time" — and that's actually close to what METR's original 2025 study found: using AI caused tasks to take about **19–20% longer on average (CI +2% to +39%)**.

## Anthropic Economic Index
A simple Python script to get the results with the Anthropic Economic Index dataset cited as source [4].
```python
import pandas as pd

url = "https://huggingface.co/datasets/Anthropic/EconomicIndex/resolve/main/labor_market_impacts/task_penetration.csv"
df = pd.read_csv(url)

tasks = [
    "Analyze user needs and software requirements to determine feasibility of design within time and cost constraints.",
    "Develop or direct software system testing or validation procedures, programming, or documentation.",
    "Confer with systems analysts, engineers, programmers and others to design systems and to obtain information on project limitations and capabilities, performance requirements and interfaces.",
    "Modify existing software to correct errors, adapt it to new hardware, or upgrade interfaces and improve performance.",
    "Prepare reports or correspondence concerning project specifications, activities, or status.",
    "Analyze information to determine, recommend, and plan installation of a new system or modification of an existing system.",
    "Store, retrieve, and manipulate data for analysis of system capabilities and requirements.",
    "Design, develop and modify software systems, using scientific analysis and mathematical models to predict and measure outcomes and consequences of design.",
    "Determine system performance standards.",
    "Consult with customers or other departments on project status, proposals, or technical issues, such as software system design or maintenance.",
    "Confer with data processing or project managers to obtain information on limitations or capabilities for data processing projects.",
    "Monitor functioning of equipment to ensure system operates in conformance with specifications.",
    "Coordinate installation of software system.",
    "Supervise the work of programmers, technologists and technicians and other engineering and scientific personnel.",
    "Supervise and assign work to programmers, designers, technologists, technicians, or other engineering or scientific personnel.",
    "Obtain and evaluate information on factors such as reporting formats required, costs, or security needs to determine hardware configuration.",
    "Train users to use new or modified equipment.",
]

result = df[df["task"].isin(tasks)].sort_values("penetration", ascending=False)
print(result.to_string(index=False))
```


| Task                                                                                                                                                                                          | Penetration |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------: |
| **Store, retrieve, and manipulate data for analysis of system capabilities and requirements.** |      **0.9561** |
| Analyze user needs and software requirements to determine feasibility of design within time and cost constraints.                                                                             |      0.9097 |
| Analyze information to determine, recommend, and plan installation of a new system or modification of an existing system.                                                                     |      0.8614 |
| Prepare reports or correspondence concerning project specifications, activities, or status.                                                                                                   |      0.7988 |
| Modify existing software to correct errors, adapt it to new hardware, or upgrade interfaces and improve performance.                                                                          |      0.7239 |
| Consult with customers or other departments on project status, proposals, or technical issues, such as software system design or maintenance.                                                 |      0.6464 |
| Coordinate installation of software system.                                                                                                                                                   |      0.0000 |
| Confer with data processing or project managers to obtain information on limitations or capabilities for data processing projects.                                                            |      0.0000 |
| Confer with systems analysts, engineers, programmers and others to design systems and to obtain information on project limitations and capabilities, performance requirements and interfaces. |      0.0000 |
| Develop or direct software system testing or validation procedures, programming, or documentation.                                                                                            |      0.0000 |
| Determine system performance standards.                                                                                                                                                       |      0.0000 |
| Design, develop and modify software systems, using scientific analysis and mathematical models to predict and measure outcomes and consequences of design.                                    |      0.0000 |
| Monitor functioning of equipment to ensure system operates in conformance with specifications.                                                                                                |      0.0000 |
| Obtain and evaluate information on factors such as reporting formats required, costs, or security needs to determine hardware configuration.                                                  |      0.0000 |
| Supervise and assign work to programmers, designers, technologists, technicians, or other engineering or scientific personnel.                                                                |      0.0000 |
| Supervise the work of programmers, technologists and technicians and other engineering and scientific personnel.                                                                              |      0.0000 |
| Train users to use new or modified equipment.                                                                                                                                                 |      0.0000 |

One thing worth flagging: this "penetration" number reflects **observed usage** — how often Claude actually got used for that exact task in real conversations — *not theoretical capability*. A 0.0000 here doesn't necessarily mean "AI can't do this"; it may just mean nobody in the sampled conversations happened to use Claude for it. That's different from the AI/Partial/Human calls in the table below, which are *my own judgment about theoretical capability rather than observed usage*.
You can dig into the data more, i.e., Work Activities, Detailed Work Activities.


# The skills that become more important

## Requirements Engineering
- Distinguishing between **what a customer asked for** and **what they'll actually need** once they see it in action.

## Accountability - Owning the consequences of a decision — AI has no skin in the game
- Being the point of contact when something breaks in production at 3am — *someone has to actually answer for it*.
- *Why was this decision made?*
  *Why was this architecture chosen?*
  *Why was this risk accepted?*

## Judgment / Decision-Making
- Deciding when to write a **one-off script** vs. invest in a **reusable solution**
- Knowing when a failing test indicates a **real bug** vs. an **outdated/wrong test**

## System/Codebase Intuition
Large systems contain *invisible constraints*.
A developer who has maintained a system for years knows things that are not written anywhere:
- this database table looks simple but is **dangerous**,
- this service has **hidden coupling**,
- this dependency upgrade **will cause problems**.

This knowledge is *difficult to extract into prompts*.


# Conclusion
1. Whatever the future holds, from the Iceberg Index, it is clear that part of the work will change and this will inevitably change the structure of teams, companies, etc.
   10 people in a team having 30% of the work done by AI does not mean we can cut 30% of the people. It means we need to **restructure the skills and the way we work**.

2. Currently, human in loop seems a far-reach goal for AI.
   We will spend some years building and training AI systems to essentially achieve the *inversion of control* that the industry demands.
   Building AI software that only AI can understand is a even longer way off goal, magnitude of decades.

3. It's not clear how much of the AI/Partial bucket is actually *a real speedup vs. a wash*.

4. **AI Costs**
   Current predictions expect an increase in AI costs starting from Q4, may be delayed.
   AI companies are currently subsidizing usage to drive adoption. *The long-term economics are still unclear*.
   Developers may become **more dependent on AI tools** while the cost model changes.

5. We are still waiting on new paradigms AI will introduce to fully take hold, e.g:
- RAG migration for government, company data, needs developers
- Systems that **adapt to individual users**.
- Applications that **generate interfaces dynamically**.
- Agentic orchestration — business logic shifts from deterministic code to orchestrating *semi-autonomous agents* with tool access; the engineering skill moves from writing the logic to **constraining and verifying it**
- Evals as the new unit tests — testing probabilistic output means **asserting on acceptable ranges of behavior instead of exact equality**, which needs different tooling and a different testing discipline entirely
- Agent-to-agent identity — today's OAuth/OIDC model assumes a human, or at least a static client, behind every token; agents acting on someone's behalf need **scoped, delegated, revocable credentials**, and that's *still mostly unsolved*

The web was built around humans **clicking predefined interfaces**.\
The next generation may be built around humans **describing intent**.


## Sources
- Chopra et al., <a href="https://iceberg.mit.edu/report.pdf" target="_blank" rel="noopener noreferrer">"The Iceberg Index: Measuring Skills-centered Exposure in the AI Economy"</a> — MIT / Oak Ridge National Laboratory, Project Iceberg
- <a href="https://iceberg.mit.edu/" target="_blank" rel="noopener noreferrer">Project Iceberg</a> — project site and methodology
- <a href="https://huggingface.co/datasets/Anthropic/EconomicIndex/resolve/main/labor_market_impacts/task_penetration.csv" target="_blank" rel="noopener noreferrer">Anthropic Economic Index</a> — `task_penetration.csv` dataset, labor market impacts release
- Becker et al., <a href="https://metr.org/blog/2026-02-24-uplift-update/" target="_blank" rel="noopener noreferrer">"We are Changing our Developer Productivity Experiment Design"</a> — METR, February 2026
- <a href="https://www.onetonline.org/link/summary/15-1252.00" target="_blank" rel="noopener noreferrer">O*NET OnLine — 15-1252.00 Software Developers</a> — U.S. Department of Labor
