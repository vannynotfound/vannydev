"use client"

/* eslint-disable @next/next/no-img-element */
import {
  Card,
  CardContent,
} from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const projects = [
  {
    name: "Qampus",
    category: "Web App + Mobile App",
    image: "/assets/thumnails/qampus.webp",
    imageAlt: "Qampus queueing system interface",
    description:
      "A forward-looking web and mobile application built to improve the flexibility and speed of the queuing process in school offices, especially the cashier's office.",
    stack: ["React"],
    link: "https://qampus-production.up.railway.app/",
  },
  {
    name: "TalkToVanny",
    category: "Web App",
    image: "/assets/thumnails/talktovanny.webp",
    imageAlt: "TalkToVanny messaging platform interface",
    description:
      "A self-built messaging platform focused on delivering a personalized and engaging communication experience.",
    link: "https://talktovanny.vercel.app/user/vanny/",
  },
  {
    name: "MathPad",
    category: "Web App + Mobile App",
    image: "/assets/thumnails/mathpad.webp",
    imageAlt: "MathPad learning platform interface",
    description:
      "An interactive learning platform designed to help students master math through theory, quizzes, and real-time progress tracking.",
  },
  {
    name: "SocialLinks",
    category: "Web App",
    image: "/assets/thumnails/socialLinks.webp",
    imageAlt: "SocialLinks profile page",
    description:
      "Centralize, customize, and share all of your social profiles through a single sleek page.",
    link: "https://know-about-vanny.vercel.app/",
  },
]

export function ProjectCarousel() {
  return (
    <Carousel className="project-carousel" opts={{ align: "start" }}>
      <CarouselContent>
        {projects.map((project) => (
          <CarouselItem
            className="basis-full sm:basis-1/2 xl:basis-1/3"
            key={project.name}
          >
            <Card className="project ring-0">
              <div className="project__media">
                <img
                  src={project.image}
                  alt={project.imageAlt}
                  loading="lazy"
                  data-px="0.10"
                  data-px-max="26"
                />
              </div>
              <div className="project__glare" aria-hidden="true" />
              <CardContent className="project__info">
                <span className="project__tag">{project.category}</span>
                <h3 className="project__title">{project.name}</h3>
                <p className="project__desc">{project.description}</p>
                {project.stack && (
                  <ul className="project__stack">
                    {project.stack.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                )}
                <div className="project__links">
                  {project.link ? (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener"
                      className="link-arrow"
                      data-demo=""
                      data-demo-title={project.name}
                    >
                      Live Demo →
                    </a>
                  ) : (
                    <span className="link-arrow" aria-disabled="true">
                      Coming Soon
                    </span>
                  )}
                </div>
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className="project-carousel__controls">
        <CarouselPrevious
          aria-label="Previous projects"
          className="project-carousel__control"
        />
        <CarouselNext
          aria-label="Next projects"
          className="project-carousel__control"
        />
      </div>
    </Carousel>
  )
}
