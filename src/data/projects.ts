export interface Project {
  id: string;
  index: string;
  name: string;
  description: string;
  architecture: string;
  technologies: string[];
  workflow?: string[];
  responsibilities: string[];
  github: string | null;
}

export const projects: Project[] = [
  {
    id: "terraform-aws",
    index: "01",
    name: "AWS Infrastructure Automation with Terraform",
    description: "AWS infrastructure provisioned and managed as code using Terraform, with reusable modules and remote state.",
    architecture: "Terraform modules provision a VPC, subnets, security groups, IAM roles, an EC2 fleet, and a load balancer, with state stored in a remote backend.",
    technologies: ["Terraform", "AWS", "VPC", "EC2", "IAM", "S3", "Security Groups", "Load Balancer"],
    responsibilities: [
      "Designed reusable Terraform modules for networking and compute",
      "Configured a remote backend with state locking",
      "Defined IAM roles and security groups following least privilege",
      "Managed environments through variables and workspaces",
    ],
    github: null,
  },
  {
    id: "k8s-platform",
    index: "02",
    name: "Kubernetes Application Platform",
    description: "A containerized application deployed on Kubernetes / EKS with autoscaling, ingress routing, and RBAC.",
    architecture: "Docker images are deployed to EKS behind an Ingress controller, with ConfigMaps and Secrets for configuration and HPA for autoscaling.",
    technologies: ["Docker", "Kubernetes", "EKS", "Ingress", "Services", "ConfigMaps", "Secrets", "RBAC", "HPA", "Helm"],
    responsibilities: [
      "Authored Deployment, Service, and Ingress manifests",
      "Packaged the application with a Helm chart",
      "Configured HPA based on CPU and memory metrics",
      "Applied RBAC and NetworkPolicies to scope access",
    ],
    github: null,
  },
  {
    id: "jenkins-cicd",
    index: "03",
    name: "Jenkins CI/CD Automation",
    description: "An end-to-end continuous integration and delivery pipeline built with Jenkins.",
    architecture: "A declarative Jenkinsfile drives the pipeline from source checkout through build, test, containerization, and deployment.",
    technologies: ["Jenkins", "GitHub", "Maven", "Docker", "Amazon ECR", "Kubernetes"],
    workflow: ["GitHub", "Jenkins", "Maven", "Test", "Docker", "ECR", "Kubernetes"],
    responsibilities: [
      "Wrote a declarative Jenkinsfile with staged pipelines",
      "Integrated automated test execution before build promotion",
      "Automated image build, tag, and push to ECR",
      "Triggered Kubernetes deployment on successful pipeline runs",
    ],
    github: null,
  },
  {
    id: "gha-cloud-deploy",
    index: "04",
    name: "GitHub Actions Cloud Deployment",
    description: "A modern CI/CD pipeline using GitHub Actions with an integrated security gate.",
    architecture: "GitHub Actions workflows run build, test, and scan jobs on every pull request, then deploy to Kubernetes on merge to main.",
    technologies: ["GitHub Actions", "Docker", "Amazon ECR", "Kubernetes"],
    workflow: ["GitHub", "Build", "Test", "Security Scan", "Docker", "ECR", "Kubernetes"],
    responsibilities: [
      "Built reusable GitHub Actions workflows and composite actions",
      "Added a security scan job as a required status check",
      "Automated ECR authentication and image publishing",
      "Rolled out deployments with a manual approval gate for production",
    ],
    github: null,
  },
  {
    id: "devsecops-pipeline",
    index: "05",
    name: "DevSecOps Pipeline",
    description: "Security controls integrated directly into the CI/CD pipeline rather than bolted on afterward.",
    architecture: "Every stage from commit to deployment includes a corresponding security check, with the pipeline failing closed on critical findings.",
    technologies: ["SAST", "Dependency Scanning", "Container Scanning", "Amazon ECR", "Kubernetes"],
    workflow: ["Code", "SAST", "Dependency Scan", "Docker", "Container Scan", "Registry", "Deployment"],
    responsibilities: [
      "Integrated SAST and dependency scanning into the pipeline",
      "Added container image scanning prior to registry push",
      "Defined a security gate that blocks critical CVEs",
      "Documented remediation workflow for flagged vulnerabilities",
    ],
    github: null,
  },
  {
    id: "monitoring-platform",
    index: "06",
    name: "Cloud & Kubernetes Monitoring",
    description: "A monitoring platform providing visibility into cluster health, application performance, and infrastructure metrics.",
    architecture: "Prometheus scrapes cluster and application metrics, Grafana visualizes them on dashboards, and CloudWatch covers AWS-managed services.",
    technologies: ["Prometheus", "Grafana", "CloudWatch", "Kubernetes Metrics", "Logs", "Alerts"],
    responsibilities: [
      "Deployed Prometheus and configured scrape targets",
      "Built Grafana dashboards for CPU, memory, and pod health",
      "Configured CloudWatch alarms for managed AWS resources",
      "Defined alerting thresholds and routing for on-call response",
    ],
    github: null,
  },
];
