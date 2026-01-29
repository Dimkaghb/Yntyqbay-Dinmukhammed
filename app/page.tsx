import Image from "next/image";
import { Section } from "@/components/Section";
import { ExperienceEducation } from "@/components/ExperienceEducation";
import { SkillPill } from "@/components/SkillPill";
import { Certification } from "@/components/Certification";
import { SocialLink } from "@/components/SocialLink";
import { Divider } from "@/components/Divider";

export default function Home() {
  return (
    <main className="flex flex-col items-center bg-background min-h-screen pb-32">
      <div className="grid-frame w-full max-w-[960px] mx-auto">
        <div className="relative z-10 flex flex-col items-center">
          <Divider />

          {/* Intro */}
          <Section className="pt-24 pb-8" gap="gap-6">
            <div className="flex gap-6 items-center">
              <div className="relative w-[70px] h-[80px] shrink-0 rounded-[10px] overflow-hidden">
                <Image
                  src="https://framerusercontent.com/images/kreJQL49X52hV3lm0eho5rR13jI.jpg"
                  alt="Mateo Rivas"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <h1 className="text-[28px] font-semibold tracking-[-0.05em] leading-[1.2em] text-foreground">
                  Mateo Rivas
                </h1>
                <h2 className="text-[20px] font-normal tracking-[-0.02em] leading-[1.2em] text-secondary">
                  Design Engineer at Typeform
                </h2>
              </div>
            </div>
          </Section>

          <Divider />

          {/* About */}
          <Section title="About" gap="gap-4">
            <p className="text-[16px] font-normal tracking-[-0.01em] leading-[24px] text-secondary">
              I’m a Design Engineer focused on crafting meaningful digital experiences where design meets code. With a strong front-end development and UX design background, I build scalable UI systems and contribute to user-centered products from concept to deployment.
            </p>
          </Section>

          <Divider />

          {/* Experience */}
          <Section title="Experience" gap="gap-8">
            <ExperienceEducation
              logo="https://logo.clearbit.com/typeform.com"
              positions={[
                {
                  title: "Design Engineer",
                  company: "TYPEFORM",
                  date: "2024-NOW",
                  description: (
                    <p>Spearheaded the revamp of Typeform’s Design System, working closely with both design and engineering teams.</p>
                  ),
                },
              ]}
            />
            <ExperienceEducation
              logo="https://logo.clearbit.com/framer.com"
              positions={[
                {
                  title: "Marketplace Lead at Framer",
                  company: "FRAMER",
                  date: "2022-2025",
                  description: (
                    <ul className="list-disc pl-4 space-y-2">
                      <li>Built accessible, themeable UI components using <strong>React</strong>, <strong>TypeScript</strong>, and <strong>Styled Components</strong>.</li>
                      <li>Introduced a <strong>token-based styling architecture</strong> integrated with Figma and Storybook.</li>
                      <li>Collaborated with product squads to deliver high-impact user experiences across web platforms.</li>
                    </ul>
                  ),
                },
              ]}
            />
            <ExperienceEducation
              logo="https://logo.clearbit.com/spotify.com"
              positions={[
                {
                  title: "Frontend Intern",
                  company: "SPOTIFY",
                  date: "2021-2022",
                  description: (
                    <p>Joined the Premium team as a frontend intern, supporting UI development with React and CSS. Collaborated with designers to implement responsive components and participated in accessibility testing. This was my first hands-on experience bridging design and code in a global tech environment.</p>
                  ),
                },
              ]}
            />
          </Section>

          <Divider />

          {/* Education */}
          <Section title="Education" gap="gap-8">
            <ExperienceEducation
              logo="https://logo.clearbit.com/elisava.net"
              positions={[
                {
                  title: "Postgraduate in User Experience Design",
                  company: "ELISAVA",
                  date: "2020-2021",
                  description: (
                    <p>Specialized in UX strategy, user research, and prototyping. The program deepened my ability to design user-centered products and aligned perfectly with my transition into frontend and design engineering roles.</p>
                  ),
                },
              ]}
            />
            <ExperienceEducation
              logo="https://logo.clearbit.com/url.edu"
              positions={[
                {
                  title: "Bachelor's Degree in Multimedia Design",
                  company: "UNIVERSITAT RAMON LLULL",
                  date: "2016-2020",
                  description: (
                    <p>Focused on interaction design, web development, and digital interfaces. This program gave me the foundation to understand both the visual and technical aspects of digital products.</p>
                  ),
                },
              ]}
            />
          </Section>

          <Divider />

          {/* Certifications */}
          <Section title="Certifications" gap="gap-8">
            <Certification
              logo="https://logo.clearbit.com/coursera.org"
              title="Advanced Front-End Web Development with React"
              provider="COURSERA"
              date="2025"
              href="https://www.coursera.org/"
              description={
                <p>An in-depth certification covering React 18+, Next.js, TypeScript, GraphQL, performance optimization, accessibility standards (WCAG 2.2), and Core Web Vitals for production-ready interfaces.</p>
              }
            />
            <Certification
              logo="https://logo.clearbit.com/interaction-design.org"
              title="UX Design for Accessibility"
              provider="INTERACTION DESIGN FOUNDATION"
              date="2024"
              href="https://www.coursera.org/"
              description={
                <p>Specialized course on designing inclusive digital experiences, focusing on WCAG compliance, semantic structure, keyboard navigation, screen reader testing, and inclusive UX research methodologies.</p>
              }
            />
          </Section>

          <Divider />

          {/* Skills / Stack */}
          <Section title="Skills / Stack" gap="gap-6">
            <div className="flex flex-wrap gap-2.5">
              {["React", "Typescript", "Next.js", "Tailwind CSS", "GraphQL", "WCAG 2.2"].map((skill) => (
                <SkillPill key={skill} name={skill} />
              ))}
            </div>

            <Divider className="my-4" />

            <div className="flex flex-wrap gap-6 items-center">
              {[
                { name: "Framer", domain: "framer.com" },
                { name: "Figma", domain: "figma.com" },
                { name: "Arc", domain: "arc.net" },
                { name: "Raycast", domain: "raycast.com" },
                { name: "Cursor", domain: "cursor.com" },
                { name: "ChatGPT", domain: "openai.com" },
                { name: "GitHub", domain: "github.com" },
                { name: "Stripe", domain: "stripe.com" },
                { name: "Superhuman", domain: "superhuman.com" },
                { name: "Spotify", domain: "spotify.com" },
              ].map((tool) => (
                <div key={tool.name} className="relative w-10 h-10 grayscale hover:grayscale-0 transition-all opacity-80 hover:opacity-100" title={tool.name}>
                  <Image
                    src={`https://logo.clearbit.com/${tool.domain}`}
                    alt={tool.name}
                    fill
                    className="object-contain"
                  />
                </div>
              ))}
            </div>
          </Section>

          <Divider />

          {/* Languages */}
          <Section title="Languages" gap="gap-8">
            <div className="w-full flex flex-col gap-4">
              <div className="flex justify-between w-full">
                <span className="text-[16px] font-medium tracking-[-0.02em] leading-[24px] text-foreground">Spanish</span>
                <span className="text-[16px] font-normal tracking-[-0.01em] leading-[24px] text-secondary">Native</span>
              </div>
              <div className="flex justify-between w-full">
                <span className="text-[16px] font-medium tracking-[-0.02em] leading-[24px] text-foreground">English</span>
                <span className="text-[16px] font-normal tracking-[-0.01em] leading-[24px] text-secondary">Fluent</span>
              </div>
            </div>
          </Section>

          <Divider />

          {/* Contact */}
          <Section title="Contact" gap="gap-8">
            <div className="w-full flex flex-col gap-4">
              <SocialLink label="Email" value="mateorivas@email.com" href="mailto:mateorivas@email.com" />
              <SocialLink label="LinkedIn" value="/in/mateorivas" href="https://linkedin.com/in/mateorivas" />
              <SocialLink label="X/Twitter" value="@mateorivas" href="https://x.com/mateorivas" />
            </div>
          </Section>

          <Divider />
        </div>
      </div>
    </main>
  );
}