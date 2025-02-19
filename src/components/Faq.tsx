"use client";
import React from "react";
import { Container } from "@/components/Container";
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/24/solid";

export const Faq = () => {
  return (
    <Container className="!p-0">
      <div className="w-full max-w-2xl p-2 mx-auto rounded-2xl">
        {faqdata.map((item, index) => (
          <div key={item.question} className="mb-5">
            <Disclosure>
              {({ open }) => (
                <>
                  <DisclosureButton className="flex items-center justify-between w-full px-4 py-4 text-lg text-left text-gray-800 rounded-lg bg-gray-50 hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-indigo-100 focus-visible:ring-opacity-75 dark:bg-trueGray-800 dark:text-gray-200">
                    <span>{item.question}</span>
                    <ChevronUpIcon
                      className={`${
                        open ? "transform rotate-180" : ""
                      } w-5 h-5 text-indigo-500`}
                    />
                  </DisclosureButton>
                  <DisclosurePanel className="px-4 pt-4 pb-2 text-gray-500 dark:text-gray-300">
                    {item.answer}
                  </DisclosurePanel>
                </>
              )}
            </Disclosure>
          </div>
        ))}
      </div>
    </Container>
  );
}

const faqdata = [
  {
    question: "What is this community about?",
    answer: "It's a platform where professionals and students collaborate on software projects, share knowledge, and grow together.",
  },
  {
    question: "How is training conducted?",
     answer: "Training is delivered through workshops, project-based learning, mentoring sessions, and peer collaboration.",
  } ,


  {
    question: "Who can join the community?",
    answer: "Anyone passionate about software development, whether you're a student, experienced professional, or tech enthusiast.",
  },
  
  {
    question: "What soft skills will I develop?",
    answer: "Communication & Public Speaking Problem-Solving & Critical Thinking Collaboration & Teamwork Leadership & Mentorship Time Management & Productivity Emotional Intelligence Negotiation & Persuasion.",
  },
  {
    question: "What tech skills will I develop?",
    answer: "Coding & Programming Data Analytics & Problem-Solving Algorithmic Thinking & Logical Reasoning.Software Development & Engineering System Design & Architecture Cloud Computing & DevOps Cybersecurity Awareness Automation & Scripting Database Management AI & Machine Learning Fundamentals",
  },
 
  {
    question: "Do I need prior experience to contribute? ",
    answer: "Not necessarily. Beginners can start by contributing to documentation or small tasks, while professionals can handle complex tasks.",
  },
  {
    question: "What are the benefits of joining this community?",
    answer:
      "Hands-on training in technical skills Improved soft skills like communication and teamwork, Networking opportunities with industry professionals,Consistent learning environment for career growth",
  } ,

];
