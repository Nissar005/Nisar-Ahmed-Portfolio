export interface PipelineStage {
  index: string;
  title: string;
  detail: string;
  tools: string[];
}

export const pipelineStages: PipelineStage[] = [
  { index: "01", title: "Code", detail: "Developer pushes to a feature branch.", tools: ["GitHub"] },
  { index: "02", title: "Build", detail: "Application is compiled and packaged.", tools: ["Maven"] },
  { index: "03", title: "Test", detail: "Automated unit and integration tests run.", tools: ["JUnit / pytest"] },
  { index: "04", title: "Security", detail: "Static analysis and dependency scans run.", tools: ["SAST", "Dependency Scan", "Container Scan"] },
  { index: "05", title: "Containerize", detail: "Application is built into a container image.", tools: ["Docker"] },
  { index: "06", title: "Registry", detail: "Image is tagged and pushed to a registry.", tools: ["Amazon ECR"] },
  { index: "07", title: "Deploy", detail: "Manifests are applied to the cluster.", tools: ["Kubernetes", "EKS"] },
  { index: "08", title: "Monitor", detail: "Health and performance are observed post-deploy.", tools: ["Prometheus", "Grafana", "CloudWatch"] },
];

export interface FlowNode {
  id: string;
  label: string;
  sublabel?: string;
}

export const heroFlow: FlowNode[] = [
  { id: "dev", label: "Developer" },
  { id: "github", label: "GitHub" },
  { id: "cicd", label: "CI/CD" },
  { id: "docker", label: "Docker" },
  { id: "ecr", label: "Amazon ECR" },
  { id: "eks", label: "Kubernetes / EKS" },
  { id: "aws", label: "AWS" },
  { id: "monitor", label: "Monitoring" },
];

export interface ArchitectureNode {
  id: string;
  label: string;
  description: string;
}

export const architectureFlow: ArchitectureNode[] = [
  { id: "dev", label: "Developer", description: "Writes code and pushes changes to a feature branch for review." },
  { id: "github", label: "GitHub", description: "Hosts source control and triggers the pipeline via webhooks on push or merge." },
  { id: "cicd", label: "CI/CD Pipeline", description: "Jenkins or GitHub Actions orchestrates every stage from build to deploy." },
  { id: "buildtest", label: "Build & Test", description: "Compiles the application and runs automated unit and integration tests." },
  { id: "scan", label: "Security Scan", description: "Runs SAST, dependency, and container scans before anything ships." },
  { id: "docker", label: "Docker Build", description: "Containerizes the application and provides a consistent runtime environment." },
  { id: "ecr", label: "Amazon ECR", description: "Stores versioned, scanned container images used for every deployment." },
  { id: "eks", label: "Kubernetes / Amazon EKS", description: "Orchestrates containerized workloads with scalability and self-healing." },
  { id: "aws", label: "AWS Infrastructure", description: "Terraform provisions the VPC, IAM, load balancers, and supporting services." },
  { id: "observability", label: "Prometheus / Grafana / CloudWatch", description: "Provides metrics, dashboards, logs, and alerts across the whole platform." },
];
