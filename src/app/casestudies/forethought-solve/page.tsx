import { AnimatedNumber } from '@/components/animated-number'
import { Button } from '@/components/button'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { Navbar } from '@/components/navbar'
import { Heading, Lead, Subheading } from '@/components/text'
import type { Metadata } from 'next'
import { RocketLaunchIcon } from '@heroicons/react/24/outline'


export const metadata: Metadata = {
  title: "Forethought Solve",
  description:
    "Design the AI-Powered Workflow Logic for Customer Support",
}

function Header() {
  return (
    <Container className="">
      <section className="py-16 grid grid-cols-1 lg:grid-cols-2 lg:gap-24 gap-8">
        <div className="lg:text-6xl text-5xl font-title font-medium text-gray-900">
          Design the AI-Powered Workflow Logic for Customer Support
        </div>

        <div className="grid grid-cols-3 text-lg font-title font-normal text-gray-600 items-start">
          <div className="flex flex-col gap-2 pr-4 py-2 h-full">
            <RocketLaunchIcon className="w-5 h-5 shrink-0" />
            <div>
              Generated <span className="font-bold">50%</span> of company revenue post-launch
            </div>
          </div>

          <div className="flex flex-col gap-2 px-4 py-2 border-l border-gray-200 h-full">
            <RocketLaunchIcon className="w-5 h-5 shrink-0" />
            <div>
              Reduced time-to-first-value from{" "}
              <span className="font-bold">120 days</span> →{" "}
              <span className="font-bold">32 days</span>
            </div>
          </div>

          <div className="flex flex-col gap-2 pl-4 py-2 border-l border-gray-200 h-full">
            <RocketLaunchIcon className="w-5 h-5 shrink-0" />
            <div>
              Increased self-service rate by{" "}
              <span className="font-bold">10%+</span>
            </div>
          </div>
        </div>
      </section>
      
      {/* Overview */}
      <section className="py-16 grid grid-cols-1 lg:grid-cols-2 lg:gap-24 gap-8">
        <div className="flex flex-col gap-6">
          <div className="text-3xl font-display font-extrabold text-gray-900">
            <Subheading className="mb-2">Overview</Subheading>
              Who is Forethought?
          </div>
          <div className="text-xl text-gray-900 font-sans leading-6">
            Forethought is an AI-native customer support platform designed for the enterprise. Built on a multi-agent architecture, it delivers end-to-end, omnichannel resolution across chat, email, voice... etc.
          </div>
          <div className="text-xl text-gray-900 font-sans leading-6">
            The platform combines machine learning, Natural Language Processing (NLP), Natural Language Understanding (NLU), and Large Language Models (LLMs) to detect intent, apply business logic, and autonomously resolve support cases.
          </div>
          <div className="mt-8 text-xl font-display font-extrabold text-gray-900">
            My Role
          </div>
          <div className="text-xl text-gray-900 font-sans leading-6">
            Lead Product Designer — UX/UI, Visual Design, Prototyping, Research & Validation.
          </div>
          <div className="text-xl text-gray-900 font-sans">
            Oct. 2021 - Oct. 2023
          </div>
        </div>

        <div className="aspect-square overflow-hidden rounded-xl shadow-xl">
          <img
            alt="Forethought Solve Workflow Builder"
            src="/screenshots/ft-solve/body-main.png"
            className="block size-full object-cover"
          />
        </div>
      </section>

      <section className="py-16 grid grid-cols-1 lg:grid-cols-2 lg:gap-24 gap-8">
        <div className="flex flex-col gap-6">
          <div className="text-3xl font-display font-extrabold text-gray-900">
            <Subheading className="mb-2">Background</Subheading>
              Where We Began
          </div>
          <div className="text-xl text-gray-900 font-sans leading-6">
            Before 2021, most chatbots (including Forethought) relied on structured flows which is button clicks, menus, or keyword triggers. This worked for simple FAQs but too limiting for real customers.
          </div>
          <div className="text-xl text-gray-900 font-sans leading-6">
            Our goal is to let customers type naturally and have the AI understand their intent. With the launch of True Deep NLU, Forethought could finally classify open-text inputs and detect intent accurately.
          </div>
          <div className="text-xl text-gray-900 font-sans leading-6">
            This design focus moved from screen flows to how AI thinks and replies, the start of true AI behavior design.
          </div>
          
          <div className="flex flex-col items-center justify-center overflow-hidden">
            <img
              alt=""
              src="/screenshots/ft-solve/case-3.png"
              className="max-w-[85%] object-contain"
            />
            <div className="text-gray-600 text-base font-title text-center max-w-lg">
              By 2021, Forethought’s technology emphasis was on Deep Natural Language Understand + Intent Recognition + Workflow Automation
            </div>
          </div>
        </div>

        <div className="aspect-square bg-black/5 flex items-center justify-center overflow-hidden rounded-xl">
          <img
            alt=""
            src="/screenshots/ft-solve/case-2.png"
            className="max-h-[85%] max-w-[85%] object-contain"
          />
        </div>
      </section>

      {/* Context */}
      <section className="py-16 grid grid-cols-1 lg:grid-cols-2 lg:gap-24 gap-8">
        <div className="flex flex-col gap-6">
          <div className="text-3xl font-display font-extrabold text-gray-900">
            <Subheading className="mb-2">Context</Subheading>
              What Wasn’t Working
          </div>
          <div className="text-xl text-gray-900 font-sans leading-6">
            As the platform grew, our clients’ CS team needed more transparency and control. But the early versions of the Console worked like a black box, decisions were hidden, and admins lacked visibility into how the AI operated.
          </div>
          
          <div className="text-xl text-gray-900 font-display font-extrabold leading-6 mt-8">
            4 Key Challenges
          </div>

          <ul className="list-disc pl-5 space-y-6 text-xl text-gray-900 font-sans leading-6">
            <li>
              <span className="font-extrabold font-display italic">Limited Control</span> – Admins could not review or adjust the AI’s decision logics and scripts.
            </li>
            <li>
              <span className="font-extrabold font-display italic">Limited Self-Service</span> – Every new cases or policy changes required engineering support.
            </li>
            <li>
              <span className="font-extrabold font-display italic">Limited Adaptability</span> – Automation could not adjust to meet different business needs.
            </li>
            <li>
              <span className="font-extrabold font-display italic">Slow Iteration</span> – As customer volumes grew, hidden logic made updates slow.
            </li>
          </ul>
        </div>

        <div className="aspect-square bg-black/5 flex items-center justify-center overflow-hidden rounded-xl">
          <img
            alt=""
            src="/screenshots/ft-solve/case-4.png"
            className="max-h-[85%] max-w-[85%] object-contain"
          />
        </div>
      </section>

      {/* Goal */}
      <section className="py-16 grid grid-cols-1 lg:grid-cols-2 lg:gap-24 gap-8">
        <div className="flex flex-col gap-6">
          <div className="text-3xl font-display font-extrabold text-gray-900">
            <Subheading className="mb-2">Goal</Subheading>
              What We Aimed For
          </div>
          <div className="text-xl text-gray-900 font-sans leading-6">
            Our goal was to transform the Console into a transparent, scalable, and user-friendly tool. To help admins take control, build trust with customers, and reduce time to value.
          </div>

          <ul className="list-disc pl-5 space-y-6 text-xl text-gray-900 font-sans leading-6 mt-8">
            <li>
              <span className="font-extrabold font-display italic">Enable AI Training</span> – Admins can train the AI to understand customer intent.
            </li>
            <li>
              <span className="font-extrabold font-display italic">Build Clear Workflows</span> – Use transparent Business Logic that both customers and agents can understand and trust.
            </li>
            <li>
              <span className="font-extrabold font-display italic">Simplify Logic</span> – Provide a Rules-Based approach where rules are well defined and easy to manage.
            </li>
            <li>
              <span className="font-extrabold font-display italic">Support Debugging & Visibility</span> – Give admins full end-to-end visibility into how the AI works, so mistakes can be traced directly to their cause, understand how inputs led to outputs, and make quick corrections.
            </li>
          </ul>
        </div>

        <div className="aspect-square bg-black/5 flex items-center justify-center overflow-hidden rounded-xl">
          <img
            alt=""
            src="/screenshots/ft-solve/case-5.png"
            className="max-h-[85%] max-w-[85%] object-contain"
          />
        </div>
      </section>

      {/* Early Version */}
      <section className="py-16 grid grid-cols-1 lg:grid-cols-2 lg:gap-24 gap-8">
        <div className="flex flex-col gap-6">
          <div className="text-3xl font-display font-extrabold text-gray-900">
            <Subheading className="mb-2">ORIGINAL DESIGN</Subheading>
              How It Started
          </div>
          <div className="text-xl text-gray-900 font-sans leading-6">
            Before I joined, Forethought had already launched the first iteration of Workflow Builder to enable admin self-service. However, adoption remained low because the product relied on a decision-tree interface that was difficult for non-technical admins to navigate and manage.
          </div>
          <div className="text-xl text-gray-900 font-sans leading-6 italic font-extrabold">
            This design followed a traditional UX pattern that didn’t match how AI actually worked.
          </div>
          <div className="text-xl text-gray-900 font-sans leading-6">
            Reviewing the existing design helped me understand what worked, what didn’t, and gather insights from real users.
          </div>
        </div>

        <div className="aspect-square bg-black/5 flex items-center justify-center overflow-hidden rounded-xl">
          <img
            alt=""
            src="/screenshots/ft-solve/case-6.png"
            className="max-h-[85%] max-w-[85%] object-contain"
          />
        </div>
      </section>

      {/* Research */}
      <section className="pt-16">
        <div className="flex flex-col gap-6">
          <div className="text-3xl font-display font-extrabold text-gray-900">
            <Subheading className="mb-2">Research</Subheading>
              What Did We Learn
          </div>
          <div className="text-xl text-gray-900 font-sans leading-6 max-w-5xl">
            Using original design, I interviewed internal teams and clients, gathering insights from PMs, sales, implementation engineers, and support team admins. Together with PM team, we identified 3 categories of issues:
          </div>
        </div>
      </section>
      
      <div className="py-8">
        <div className="flex items-center justify-center overflow-hidden md:rounded-xl md:bg-black/5">
          <img
            alt=""
            src="/screenshots/ft-solve/case-7.png"
            className="object-contain md:p-[3%]"
          />
        </div>
      </div>

      {/* Issue */}
      <section className="py-16 grid grid-cols-1 lg:grid-cols-2 lg:gap-24 gap-8">
        <div className="flex flex-col gap-6">
          <div className="text-3xl font-display font-extrabold text-gray-900">
            <Subheading className="mb-2">Issue</Subheading>
              Why Decision Trees Broke Down
          </div>

          <ul className="list-disc pl-5 space-y-6 text-xl text-gray-900 font-sans leading-6">
            <li>
              Many non-technical admins struggled with large flowcharts.
            </li>
            <li>
              As workflows grew, decision trees became messy and difficult to manage.
            </li>
            <li>
              Admins had to constantly zoom and trace dependencies.
            </li>
          </ul>
        </div>

        <div className="flex items-center justify-center overflow-hidden">
          <img
            alt=""
            src="/screenshots/ft-solve/case-8.png"
            className=""
          />
        </div>
      </section>

      <section className="py-16 grid grid-cols-1 lg:grid-cols-2 lg:gap-24 gap-8">
        <div className="flex flex-col gap-6">
          <div className="text-3xl font-display font-extrabold text-gray-900">
            <Subheading className="mb-2">Issue</Subheading>
              Misaligned With AI
          </div>

          <ul className="list-disc pl-5 space-y-6 text-xl text-gray-900 font-sans leading-6">
            <li>
              Decision-trees encourage linear thinking that doesn’t match how Forethought AI actually works.
            </li>
            <li>
              <span className="font-extrabold font-display italic">Intent recognition</span> is classification-based, the Forethought’s AI understands customer’s message, maps it to an intents, and triggers the right workflow automatically.
            </li>
          </ul>
        </div>

        <div className="flex items-center justify-center overflow-hidden">
          <img
            alt=""
            src="/screenshots/ft-solve/case-9.png"
            className=""
          />
        </div>
      </section>

      {/* Hypotheses */}
      <section className="py-16">
        <div className="flex flex-col gap-6">
          <div className="md:text-7xl text-4xl font-title text-gray-900 md:leading-[52px] max-w-6xl">
            <Subheading className="mb-2">Hypotheses</Subheading>
              We believe a{" "}<span className="bg-amber-300">modular</span>,{" "}<span className="bg-amber-300">reusable</span>{" "}design will help non-technical admins build workflows more efficiently by simplifying how logic is created, reused, and maintained.
          </div>
          <div className="text-xl text-gray-900 font-sans leading-6">
            In other words, how to connect human intent and AI logic, making it easy for anyone to build.
          </div>
        </div>
      </section>

      {/* Ideations */}
      <section className="py-16 gap-6 flex flex-col">
        <div className="flex flex-col">
          <Subheading className="mb-2">Ideations</Subheading>
          <div className="text-xl text-gray-900 font-sans leading-6 max-w-5xl">
            Instead of mapping every branch, the design focuses on what the AI should understand and do. I explored three concepts and validated them with teams and clients.
          </div>
        </div>

        <div className="mt-2 grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col">
              <div className="text-base text-gray-500 font-title font-bold">
                Concept 1
              </div>
              <div className="text-xl text-gray-900 font-display font-extrabold leading-6 italic">
                Timeline Blocks
              </div>
            </div>

            <div className="flex items-center justify-center overflow-hidden">
              <img
                alt=""
                src="/screenshots/ft-solve/case-10.png"
              />
            </div>

            <div className="text-xl text-gray-900 font-sans leading-6">
              Steps displayed linearly, like a sequence.
            </div>

            <div className="text-xl text-gray-900 font-sans leading-6">
              <span className="font-extrabold font-display italic">Pros:</span> Clear visual flow.
            </div>
            
            <div className="text-xl text-gray-900 font-sans leading-6">
              <span className="font-extrabold font-display italic">Cons:</span> Hard to manage branching and complex conditions.
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <div className="flex flex-col">
              <div className="text-base text-gray-500 font-title font-bold">
                Concept 2
              </div>
              <div className="text-xl text-gray-900 font-display font-extrabold leading-6 italic">
                Accordion Layouts
              </div>
            </div>

            <div className="flex items-center justify-center overflow-hidden">
              <img
                alt=""
                src="/screenshots/ft-solve/case-11.png"
              />
            </div>

            <div className="text-xl text-gray-900 font-sans leading-6">
              Collapsible sections for focus.
            </div>

            <div className="text-xl text-gray-900 font-sans leading-6">
              <span className="font-extrabold font-display italic">Pros:</span> Reduces on-screen clutter.
            </div>

            <div className="text-xl text-gray-900 font-sans leading-6">
              <span className="font-extrabold font-display italic">Cons:</span> Hard to see the full workflow, limited conversation customization, and unclear to identity each node components.
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <div className="flex flex-col">
              <div className="text-base text-gray-500 font-title font-bold">
                Concept 3
              </div>
              <div className="text-xl text-gray-900 font-display font-extrabold leading-6 italic">
                Chat-Based Interface
              </div>
            </div>

            <div className="flex items-center justify-center overflow-hidden">
              <img
                alt=""
                src="/screenshots/ft-solve/case-12.png"
              />
            </div>

            <div className="text-xl text-gray-900 font-sans leading-6">
              Workflow creation as a conversation between user and system, leveraging a familiar chat room layout.
            </div>

            <div className="text-xl text-gray-900 font-sans leading-6">
              <span className="font-extrabold font-display italic">Pros:</span> Matches mental model of admins, supports complex branching naturally.
            </div>

            <div className="text-xl text-gray-900 font-sans leading-6">
              <span className="font-extrabold font-display italic">Cons:</span> Requires a shift in user behavior from traditional builders.
            </div>
          </div>
        </div>
      </section>

      {/* Solution */}
      <section className="py-16 grid grid-cols-1 lg:grid-cols-2 lg:gap-24 gap-8">
        <div className="flex flex-col gap-6">
          <div className="text-3xl font-display font-extrabold text-gray-900">
            <Subheading className="mb-2">Solution</Subheading>
              Designing for AI
          </div>
          <div className="text-xl text-gray-900 font-sans leading-6">
            A <span className="font-extrabold font-display">Chat-Based UI</span> make workflow building feel like creating a real conversation instead of managing complex flowcharts.
          </div>

          <ul className="list-disc pl-5 space-y-6 text-xl text-gray-900 font-sans leading-6">
            <li>
              <span className="font-extrabold font-display italic">Familiar Mental Model</span> – Inspired by chat tools like Slack, Teams, and Zendesk. It feels intuitive, like talking to the system.
            </li>
            <li>
              <span className="font-extrabold font-display italic">Step by Step Flow</span> – Focus on the interaction logic instead of diagram.
            </li>
            <li>
              <span className="font-extrabold font-display italic">Closer to End-User Experience</span> – Workflows mirror actual customer conversations.
            </li>
            <li>
              <span className="font-extrabold font-display italic">Scalable & Simple</span> – Large workflows are easier to manage by scrolling, searching, and collapsing steps.
            </li>
            <li>
              <span className="font-extrabold font-display italic">Faster Iteration</span> – Admins can quickly prototype and refine workflows in chat form.
            </li>
          </ul>
        </div>

        <div className="aspect-square bg-[#E0E7FF] flex items-center justify-center overflow-hidden rounded-xl">
          <img
            alt=""
            src="/screenshots/ft-solve/case-13.png"
            className="max-h-[90%] max-w-[90%] object-contain"
          />
        </div>
      </section>

    </Container>
  )
}


function Person({
  name,
  description,
  img,
}: {
  name: string
  description: string
  img: string
}) {
  return (
    <li className="flex items-center gap-4">
      <img alt="" src={img} className="size-12 rounded-full" />
      <div className="text-sm/6">
        <h3 className="font-medium">{name}</h3>
        <p className="text-gray-500">{description}</p>
      </div>
    </li>
  )
}

function Team() {
  return (
    <Container className="mt-32">
      <Subheading>Meet the team</Subheading>
      <Heading as="h3" className="mt-2">
        Founded by an all-star team.
      </Heading>
      <Lead className="mt-6 max-w-3xl">
        Radiant is founded by two of the best sellers in the business and backed
        by investors who look the other way.
      </Lead>
      <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-2">
        <div className="max-w-lg">
          <p className="text-sm/6 text-gray-600">
            Years ago, while working as sales associates at rival companies,
            Thomas, Ben, and Natalie were discussing a big client they had all
            been competing for. Joking about seeing the terms of each other’s
            offers, they had an idea: what if they shared data to win deals and
            split the commission behind their companies’ backs? It turned out to
            be an incredible success, and that idea became the kernel for
            Radiant.
          </p>
          <p className="mt-8 text-sm/6 text-gray-600">
            Today, Radiant transforms revenue organizations by harnessing
            illegally acquired customer and competitor data, using it to provide
            extraordinary leverage. More than 30,000 companies rely on Radiant
            to undercut their competitors and extort their customers, all
            through a single integrated platform.
          </p>
          <div className="mt-6">
            <Button className="w-full sm:w-auto" href="#">
              Join us
            </Button>
          </div>
        </div>
        <div className="max-lg:order-first max-lg:max-w-lg">
          <div className="aspect-[3/2] overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-black/10">
            <img
              alt=""
              src="/company/5.jpg"
              className="block size-full object-cover"
            />
          </div>
        </div>
      </div>
      <Subheading as="h3" className="mt-24">
        The team
      </Subheading>
      <hr className="mt-6 border-t border-gray-200" />
      <ul
        role="list"
        className="mx-auto mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
      >
        <Person
          name="Michael Foster"
          description="Co-Founder / CTO"
          img="/team/michael-foster.jpg"
        />
        <Person
          name="Dries Vincent"
          description="Business Relations"
          img="/team/dries-vincent.jpg"
        />
        <Person
          name="Celeste Vandermark"
          description="Front-end Developer"
          img="/team/celeste-vandermark.jpg"
        />
        <Person
          name="Courtney Henry"
          description="Designer"
          img="/team/courtney-henry.jpg"
        />
        <Person
          name="Marcus Eldridge"
          description="Director of Product"
          img="/team/marcus-eldridge.jpg"
        />
        <Person
          name="Whitney Francis"
          description="Copywriter"
          img="/team/whitney-francis.jpg"
        />
        <Person
          name="Leonard Krasner"
          description="Senior Designer"
          img="/team/leonard-krasner.jpg"
        />
        <Person
          name="Nolan Sheffield"
          description="Principal Designer"
          img="/team/nolan-sheffield.jpg"
        />
        <Person
          name="Emily Selman"
          description="VP, User Experience"
          img="/team/emily-selman.jpg"
        />
      </ul>
    </Container>
  )
}

function Investors() {
  return (
    <Container className="mt-32">
      <Subheading>Investors</Subheading>
      <Heading as="h3" className="mt-2">
        Funded by industry-leaders.
      </Heading>
      <Lead className="mt-6 max-w-3xl">
        We are fortunate to be backed by the best investors in the industry —
        both literal and metaphorical partners in crime.
      </Lead>
      <Subheading as="h3" className="mt-24">
        Venture Capital
      </Subheading>
      <hr className="mt-6 border-t border-gray-200" />
      <ul
        role="list"
        className="mx-auto mt-10 grid grid-cols-1 gap-8 lg:grid-cols-2"
      >
        <li>
          <img
            alt="Remington Schwartz"
            src="/investors/remington-schwartz.svg"
            className="h-14"
          />
          <p className="mt-6 max-w-lg text-sm/6 text-gray-500">
            Remington Schwartz has been a driving force in the tech industry,
            backing bold entrepreneurs who explore grey areas in financial and
            privacy law. Their deep industry expertise and extensive political
            lobbying provide their portfolio companies with favorable regulation
            and direct access to lawmakers.
          </p>
        </li>
        <li>
          <img alt="Deccel" src="/investors/deccel.svg" className="h-14" />
          <p className="mt-6 max-w-lg text-sm/6 text-gray-500">
            Deccel has been at the forefront of innovation, investing in
            pioneering companies across various sectors, including technology,
            consumer goods, and healthcare. Their philosophy of ‘plausible
            deniability’ and dedication to looking the other way have helped
            produce some of the world’s most controversial companies.
          </p>
        </li>
      </ul>
      <Subheading as="h3" className="mt-24">
        Individual investors
      </Subheading>
      <hr className="mt-6 border-t border-gray-200" />
      <ul
        role="list"
        className="mx-auto mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
      >
        <Person
          name="Kristin Watson"
          description="TechNexus Ventures"
          img="/individual-investors/kristin-watson.jpg"
        />
        <Person
          name="Emma Dorsey"
          description="Innovate Capital Partners"
          img="/individual-investors/emma-dorsey.jpg"
        />
        <Person
          name="Alicia Bell"
          description="FutureWave Investments"
          img="/individual-investors/alicia-bell.jpg"
        />
        <Person
          name="Jenny Wilson"
          description="SynergyTech Equity"
          img="/individual-investors/jenny-wilson.jpg"
        />
        <Person
          name="Anna Roberts"
          description="NextGen Horizons"
          img="/individual-investors/anna-roberts.jpg"
        />
        <Person
          name="Benjamin Russel"
          description="Pioneer Digital Ventures"
          img="/individual-investors/benjamin-russel.jpg"
        />
      </ul>
    </Container>
  )
}

function Testimonial() {
  return (
    <div className="relative flex aspect-square flex-col justify-end overflow-hidden rounded-3xl sm:aspect-[5/4] lg:aspect-[3/4]">
      <img
        alt=""
        src="/testimonials/veronica-winton.jpg"
        className="absolute inset-0 object-cover"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 rounded-3xl bg-gradient-to-t from-black from-10% to-75% ring-1 ring-inset ring-gray-950/10 lg:from-25%"
      />
      <figure className="relative p-10">
        <blockquote>
          <p className="relative text-xl/7 text-white before:absolute before:-translate-x-full before:content-['“'] after:absolute after:content-['”']">
            We&apos;ve managed to put two of our main competitors out of
            business in 6 months.
          </p>
        </blockquote>
        <figcaption className="mt-6 border-t border-white/20 pt-6">
          <p className="text-sm/6 font-medium text-white">Veronica Winton</p>
          <p className="text-sm/6 font-medium">
            <span className="bg-gradient-to-r from-[#fff1be] from-[28%] via-[#ee87cb] via-[70%] to-[#b060ff] bg-clip-text text-transparent">
              CSO, Planeteria
            </span>
          </p>
        </figcaption>
      </figure>
    </div>
  )
}

function Careers() {
  return (
    <Container className="my-32">
      <Subheading>Careers</Subheading>
      <Heading as="h3" className="mt-2">
        Join our fully remote team.
      </Heading>
      <Lead className="mt-6 max-w-3xl">
        We work together from all over the world, mainly from locations without
        extradition agreements.
      </Lead>
      <div className="mt-24 grid grid-cols-1 gap-16 lg:grid-cols-[1fr_24rem]">
        <div className="lg:max-w-2xl">
          <Subheading as="h3">Open positions</Subheading>
          <div>
            <table className="w-full text-left">
              <colgroup>
                <col className="w-2/3" />
                <col className="w-1/3" />
                <col className="w-0" />
              </colgroup>
              <thead className="sr-only">
                <tr>
                  <th scope="col">Title</th>
                  <th scope="col">Location</th>
                  <th scope="col">Read more</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="colgroup" colSpan={3} className="px-0 pb-0 pt-10">
                    <div className="-mx-4 rounded-lg bg-gray-50 px-4 py-3 text-sm/6 font-semibold">
                      Engineering
                    </div>
                  </th>
                </tr>
                <tr className="border-b border-dotted border-gray-200 text-sm/6 font-normal">
                  <td className="px-0 py-4">iOS Developer</td>
                  <td className="px-0 py-4 text-gray-600">Remote</td>
                  <td className="px-0 py-4 text-right">
                    <Button variant="outline" href="#">
                      View listing
                    </Button>
                  </td>
                </tr>
                <tr className="border-b border-dotted border-gray-200 text-sm/6 font-normal">
                  <td className="px-0 py-4">Backend Engineer</td>
                  <td className="px-0 py-4 text-gray-600">Remote</td>
                  <td className="px-0 py-4 text-right">
                    <Button variant="outline" href="#">
                      View listing
                    </Button>
                  </td>
                </tr>
                <tr className="text-sm/6 font-normal">
                  <td className="px-0 py-4">Product Engineer</td>
                  <td className="px-0 py-4 text-gray-600">Remote</td>
                  <td className="px-0 py-4 text-right">
                    <Button variant="outline" href="#">
                      View listing
                    </Button>
                  </td>
                </tr>
                <tr>
                  <th scope="colgroup" colSpan={3} className="px-0 pb-0 pt-5">
                    <div className="-mx-4 rounded-lg bg-gray-50 px-4 py-3 text-sm/6 font-semibold">
                      Design
                    </div>
                  </th>
                </tr>
                <tr className="border-b border-dotted border-gray-200 text-sm/6 font-normal">
                  <td className="px-0 py-4">Principal Designer</td>
                  <td className="px-0 py-4 text-gray-600">Remote</td>
                  <td className="px-0 py-4 text-right">
                    <Button variant="outline" href="#">
                      View listing
                    </Button>
                  </td>
                </tr>
                <tr className="border-b border-dotted border-gray-200 text-sm/6 font-normal">
                  <td className="px-0 py-4">Designer</td>
                  <td className="px-0 py-4 text-gray-600">Remote</td>
                  <td className="px-0 py-4 text-right">
                    <Button variant="outline" href="#">
                      View listing
                    </Button>
                  </td>
                </tr>
                <tr className="text-sm/6 font-normal">
                  <td className="px-0 py-4">Senior Designer</td>
                  <td className="px-0 py-4 text-gray-600">Remote</td>
                  <td className="px-0 py-4 text-right">
                    <Button variant="outline" href="#">
                      View listing
                    </Button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <Testimonial />
      </div>
    </Container>
  )
}

export default function Company() {
  return (
    <main className="overflow-hidden">
      <Container>
        <Navbar />
      </Container>
      <Header />
      <Team />
      <Investors />
      <Careers />
      <Footer />
    </main>
  )
}
