export interface PhilosophyCard {
  title: string;
  detail: string;
}

export const philosophy: PhilosophyCard[] = [
  { title: "Automation First", detail: "Automate repetitive work and eliminate unnecessary manual processes." },
  { title: "Infrastructure as Code", detail: "Infrastructure should be version-controlled, repeatable, and auditable." },
  { title: "Security by Design", detail: "Security should be integrated into every stage of the delivery lifecycle." },
  { title: "Observability", detail: "Metrics, logs, and alerts should provide visibility into system health." },
  { title: "Reliability", detail: "Deployments should be predictable, recoverable, and resilient." },
  { title: "Continuous Improvement", detail: "Continuously improve infrastructure, delivery pipelines, security, and developer experience." },
];

export const devSecOpsFlow: string[] = [
  "Developer",
  "Git Security",
  "SAST",
  "Dependency Scanning",
  "Secret Detection",
  "Docker Image Scan",
  "CVE Detection",
  "Security Gate",
  "Amazon ECR",
  "Kubernetes",
  "Runtime Monitoring",
];

export interface TerminalCommand {
  command: string;
  output: string[];
}

export const terminalCommands: TerminalCommand[] = [
  {
    command: "kubectl get nodes",
    output: [
      "NAME                STATUS   ROLES    AGE   VERSION",
      "ip-10-0-1-12.ec2    Ready    <none>   41d   v1.29.4",
      "ip-10-0-1-45.ec2    Ready    <none>   41d   v1.29.4",
      "ip-10-0-2-08.ec2    Ready    <none>   19d   v1.29.4",
    ],
  },
  {
    command: "docker ps",
    output: [
      "CONTAINER ID   IMAGE              STATUS          PORTS       NAMES",
      "a1f9c2e0b31d   myapp:latest       Up 2 hours      0.0.0.0:8080->8080/tcp   myapp",
      "e88d0a4f19c2   prometheus:v2.51   Up 2 hours      0.0.0.0:9090->9090/tcp   prometheus",
    ],
  },
  {
    command: "terraform plan",
    output: [
      "Refreshing Terraform state in-memory prior to plan...",
      "aws_vpc.main: Refreshing state...",
      "aws_eks_cluster.main: Refreshing state...",
      "",
      "Plan: 2 to add, 1 to change, 0 to destroy.",
    ],
  },
  {
    command: "git status",
    output: [
      "On branch feature/hpa-tuning",
      "Changes not staged for commit:",
      "  modified:   k8s/deployment.yaml",
      "",
      "no changes added to commit (use \"git add\")",
    ],
  },
  {
    command: "aws ec2 describe-instances",
    output: [
      "{",
      "  \"Reservations\": [",
      "    { \"InstanceId\": \"i-0abc123def456\", \"State\": { \"Name\": \"running\" } }",
      "  ]",
      "}",
    ],
  },
];

export interface MonitoringMetric {
  label: string;
  value: string;
  status: "ok" | "warn" | "critical";
  detail: string;
}

export const monitoringMetrics: MonitoringMetric[] = [
  { label: "CPU", value: "42%", status: "ok", detail: "cluster average" },
  { label: "Memory", value: "68%", status: "warn", detail: "cluster average" },
  { label: "Pod Health", value: "38 / 40", status: "ok", detail: "pods ready" },
  { label: "Request Rate", value: "1.2k / min", status: "ok", detail: "ingress traffic" },
  { label: "Error Rate", value: "0.3%", status: "ok", detail: "5xx responses" },
  { label: "Deployment Status", value: "Stable", status: "ok", detail: "rollout complete" },
  { label: "Node Health", value: "3 / 3", status: "ok", detail: "nodes ready" },
];

export interface ExperienceItem {
  role: string;
  period: string;
  points: string[];
}

export const responsibilities: string[] = [
  "AWS cloud infrastructure",
  "Infrastructure as Code using Terraform",
  "CI/CD automation",
  "Jenkins",
  "GitHub Actions",
  "Docker",
  "Kubernetes",
  "Amazon EKS",
  "Linux",
  "Shell scripting",
  "Ansible",
  "Monitoring",
  "Logging",
  "DevSecOps",
  "Troubleshooting",
  "Production deployments",
  "Infrastructure automation",
];
