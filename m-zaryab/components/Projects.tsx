/* eslint-disable react/jsx-no-undef */
import { ExternalLink, Github, Filter } from "lucide-react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { useState } from "react";
// import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filters = ["All", "React", "Python", "Cloud", "Machine Learning"];

  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "A full-stack web application for online retail, featuring product management, user authentication, and a Stripe-integrated checkout process.",
      image: "https://images.unsplash.com/photo-1658297063569-162817482fb6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2UlMjBvbmxpbmUlMjBzaG9wcGluZ3xlbnwxfHx8fDE3NjQwOTgzMjl8MA&ixlib=rb-4.1.0&q=80&w=1080",
      tags: ["TypeScript", "React", "Node.js", "PostgreSQL"],
      category: "React",
      github: "https://github.com",
      demo: "https://example.com",
    },
    {
      title: "Customer Churn Predictor",
      description:
        "A machine learning model to predict customer churn, built with Scikit-learn and deployed as a REST API using Flask.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwYW5hbHl0aWNzJTIwZGFzaGJvYXJkfGVufDF8fHx8MTc2NDA0OTQ0Mnww&ixlib=rb-4.1.0&q=80&w=1080",
      tags: ["Python", "Scikit-learn", "Flask"],
      category: "Machine Learning",
      github: "https://github.com",
    },
    {
      title: "Mobile Task Manager",
      description:
        "A cross-platform app for managing daily tasks, featuring offline support and real-time synchronization with a Firebase backend.",
      image: "https://images.unsplash.com/photo-1605108222700-0d605d9ebafe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzY0MDE2NDQ0fDA&ixlib=rb-4.1.0&q=80&w=1080",
      tags: ["React Native", "Firebase"],
      category: "React",
      github: "https://github.com",
      demo: "https://example.com",
    },
    {
      title: "Serverless API on AWS",
      description:
        "A highly scalable, cost-efficient REST API built with AWS Lambda, API Gateway, and DynamoDB for a data processing pipeline.",
      image: "https://images.unsplash.com/photo-1667984390538-3dea7a3fe33d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbG91ZCUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzY0MDQ1Mzc5fDA&ixlib=rb-4.1.0&q=80&w=1080",
      tags: ["AWS Lambda", "DynamoDB"],
      category: "Cloud",
      github: "https://github.com",
    },
    {
      title: "Open Source Contribution",
      description:
        "Contributed a new feature to a popular open-source library, improving performance and adding new functionality. The PR was successfully merged.",
      image: "https://images.unsplash.com/photo-1557324232-b8917d3c3dcb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2RlJTIwcHJvZ3JhbW1pbmclMjBzY3JlZW58ZW58MXx8fHwxNzY0MDk0MDg1fDA&ixlib=rb-4.1.0&q=80&w=1080",
      tags: ["TypeScript", "Open Source"],
      category: "React",
      github: "https://github.com",
    },
    {
      title: "Interactive Data Map",
      description:
        "A web-based tool for visualizing geographical data using D3.js and React, featuring interactive filters and real-time updates.",
      image: "https://images.unsplash.com/photo-1626695436755-3e288720849c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b3JsZCUyMG1hcCUyMGdsb2JlfGVufDF8fHx8MTc2NDA5ODMyOHww&ixlib=rb-4.1.0&q=80&w=1080",
      tags: ["React", "D3.js"],
      category: "React",
      github: "https://github.com",
      demo: "https://example.com",
    },
  ];

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <section id="projects" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 bg-primary/10 border border-primary/30 rounded-full mb-4">
              Projects
            </span>
            <h2 className="text-4xl md:text-5xl mb-4">Featured Work</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
              A selection of my recent work, from full-stack web applications to data science
              models and open-source contributions
            </p>

            {/* Filters */}
            <div className="flex items-center justify-center gap-3 flex-wrap">
              <Filter className="w-5 h-5 text-primary" />
              {filters.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-4 py-2 rounded-full border transition-all ${
                    activeFilter === filter
                      ? "bg-primary text-primary-foreground border-primary"
                      : "bg-secondary border-border hover:border-primary/50"
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, index) => (
              <Card
                key={index}
                className="bg-card border-border hover:border-primary/50 transition-all overflow-hidden group"
              >
                <div className="relative h-48 overflow-hidden">
                  {/* <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  /> */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl mb-2">{project.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, i) => (
                      <Badge
                        key={i}
                        variant="secondary"
                        className="bg-primary/10 text-primary border-primary/30"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex items-center gap-3">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-1"
                      >
                        <Github className="w-4 h-4" />
                        Code
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-1"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* View More */}
          <div className="text-center mt-12">
            <Button
              variant="outline"
              className="border-primary/50 hover:bg-primary/10"
            >
              View All Projects on GitHub
              <Github className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
