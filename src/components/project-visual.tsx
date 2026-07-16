import Image from "next/image";

import type { CaseStudy } from "@/lib/site-data";

type ProjectVisualProps = {
  study: CaseStudy;
  large?: boolean;
};

export function ProjectVisual({ study, large = false }: ProjectVisualProps) {
  if (study.visual === "website" && study.screenshot) {
    return (
      <div className={`project-browser ${large ? "project-browser-large" : ""}`}>
        <div className="project-browser-bar">
          <span />
          <span />
          <span />
          <div>{study.website?.replace("https://", "").replace(/\/$/, "")}</div>
        </div>
        <div className="project-browser-screen">
          <Image
            src={study.screenshot}
            alt={`${study.title} website`}
            width={1440}
            height={1100}
            className="project-screenshot"
          />
        </div>
      </div>
    );
  }

  if (study.visual === "voice") {
    return (
      <div className={`automation-visual voice-visual ${large ? "automation-visual-large" : ""}`}>
        <div className="automation-kicker">LIVE / VOICE PIPELINE</div>
        <div className="voice-core">
          <span className="voice-ring voice-ring-one" />
          <span className="voice-ring voice-ring-two" />
          <div className="voice-wave" aria-hidden="true">
            {[16, 30, 46, 24, 58, 38, 68, 42, 54, 28, 44, 20].map(
              (height, index) => (
                <span key={`${height}-${index}`} style={{ height }} />
              ),
            )}
          </div>
        </div>
        <div className="automation-flow">
          <span>TWILIO</span>
          <i />
          <span>LIVEKIT</span>
          <i />
          <span>FASTAPI</span>
        </div>
      </div>
    );
  }

  return (
    <div className={`automation-visual jobs-visual ${large ? "automation-visual-large" : ""}`}>
      <div className="automation-kicker">FRESH DATA / ACTIVE</div>
      <div className="jobs-dashboard">
        <div className="jobs-sidebar">
          <span />
          <span />
          <span />
          <span />
        </div>
        <div className="jobs-content">
          <div className="jobs-toolbar">
            <span />
            <span />
          </div>
          {["Python Developer", "Automation Engineer", "Web Developer"].map(
            (job, index) => (
              <div className="job-row" key={job}>
                <div>
                  <strong>{job}</strong>
                  <span>{index === 0 ? "Zürich" : index === 1 ? "Basel" : "Remote"}</span>
                </div>
                <em>{index === 2 ? "NEW" : "MATCH"}</em>
              </div>
            ),
          )}
        </div>
      </div>
    </div>
  );
}
