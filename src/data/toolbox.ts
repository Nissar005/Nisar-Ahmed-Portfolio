export interface ToolCategory {
  id: string;
  title: string;
  eyebrow: string;
  items: string[];
}

export const toolCategories: ToolCategory[] = [
  {
    id: "cloud",
    title: "Cloud",
    eyebrow: "provision",
    items: ["AWS", "EC2", "VPC", "IAM", "S3", "ECR", "ELB", "Route 53", "CloudWatch", "CloudTrail", "Lambda", "Secrets Manager", "CloudFront"],
  },
  {
    id: "containers",
    title: "Containers",
    eyebrow: "package",
    items: ["Docker", "Dockerfile", "Docker Compose", "Docker Hub", "Amazon ECR"],
  },
  {
    id: "kubernetes",
    title: "Kubernetes",
    eyebrow: "orchestrate",
    items: ["Kubernetes", "Amazon EKS", "Deployments", "StatefulSets", "Services", "Ingress", "ConfigMaps", "Secrets", "RBAC", "NetworkPolicies", "HPA", "Helm", "CNI"],
  },
  {
    id: "iac",
    title: "Infrastructure as Code",
    eyebrow: "codify",
    items: ["Terraform", "Terraform Modules", "Terraform State", "Remote Backend", "Variables", "Outputs"],
  },
  {
    id: "cicd",
    title: "CI/CD",
    eyebrow: "automate",
    items: ["Jenkins", "GitHub Actions", "Git", "GitHub", "Maven", "Webhooks"],
  },
  {
    id: "config",
    title: "Configuration Management",
    eyebrow: "enforce",
    items: ["Ansible", "Inventory", "Playbooks", "Roles"],
  },
  {
    id: "monitoring",
    title: "Monitoring",
    eyebrow: "observe",
    items: ["Prometheus", "Grafana", "CloudWatch", "Metrics", "Logs", "Alerts"],
  },
  {
    id: "security",
    title: "Security",
    eyebrow: "protect",
    items: ["DevSecOps", "IAM", "RBAC", "CVE", "Container Security", "Secrets Management", "Security Scanning", "CIS Benchmarks"],
  },
];
