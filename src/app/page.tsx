import { Container } from "@/components/Container";
import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";
import { SectionTitle } from "@/components/SectionTitle";
import { Benefits } from "@/components/Benefits";
import { Video } from "@/components/Video";
import { Testimonials } from "@/components/Testimonials";
import { Faq } from "@/components/Faq";
import { Cta } from "@/components/Cta";
import { benefitOne, benefitTwo } from "@/components/data";

export default function Home() {
  return (
    <Container>
      <section id="home">
        <Hero />
      </section>
      <section id="projects">
        <Projects />
      </section>

      <section id="benefits">
        <SectionTitle preTitle="WHAT DO YOU GET?" title="Why Should You Join This Community?">
          Whether you're a student or a working professional, our resources and community are designed to fit your learning needs, Connect with experienced professionals to guide you in your personal and professional growth.
        </SectionTitle>
        <Benefits data={benefitOne} />
        <Benefits imgPos="right" data={benefitTwo} />
      </section>

      <section id="video">
        <SectionTitle preTitle="WANT TO KNOW MORE?" title="How to Get Started with Our Lifelong Learning Community">
          This section is to highlight a promo or demo video of our community "Unlock your potential and achieve career growth by engaging with a supportive community: "L3 SQUAD"
        </SectionTitle>
        <Video videoId="KH_N1sTeyn8" />
      </section>

      <section id="testimonials">
        <SectionTitle preTitle="WHAT DO PEOPLE SAY?" title="Here's what our community people said">
          Mentorship Opportunities: Connect with industry experts for guidance and personalized advice;
          Skill Development: Access workshops, courses, and resources tailored to career advancement;
          Networking Events: Build relationships with peers, professionals, and potential employers;
          Knowledge Sharing: Join forums and discussions to exchange ideas and insights.
        </SectionTitle>
        <Testimonials />
      </section>

      <section id="faq">
        <SectionTitle preTitle="QOT QUESTIONS?" title="Frequently Asked Questions">
          "Answer your community members' possible questions here. Providing clear and helpful responses fosters trust, encourages engagement, and reduces the need for additional support or inquiries."
        </SectionTitle>
        <Faq />
      </section>

      <Cta />
    </Container>
  );
}
