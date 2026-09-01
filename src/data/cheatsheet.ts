export interface CheatCommand {
  command: string;
  description: string;
}

export interface CheatTab {
  id: string;
  label: string;
  commands: CheatCommand[];
}

export const cheatsheet: CheatTab[] = [
  {
    id: "linux",
    label: "Linux",
    commands: [
      { command: "top", description: "View live process and resource usage" },
      { command: "df -h", description: "Check disk space in human-readable form" },
      { command: "systemctl status <service>", description: "Check a service's current status" },
      { command: "journalctl -u <service> -f", description: "Tail logs for a systemd service" },
      { command: "chmod 600 <file>", description: "Restrict a file to owner read/write" },
    ],
  },
  {
    id: "git",
    label: "Git",
    commands: [
      { command: "git status", description: "Show the working tree status" },
      { command: "git log --oneline --graph", description: "View a compact commit history" },
      { command: "git rebase -i HEAD~3", description: "Interactively rewrite recent commits" },
      { command: "git stash", description: "Shelve uncommitted changes temporarily" },
      { command: "git cherry-pick <sha>", description: "Apply a specific commit onto the current branch" },
    ],
  },
  {
    id: "docker",
    label: "Docker",
    commands: [
      { command: "docker build -t myapp:latest .", description: "Build an image from the local Dockerfile" },
      { command: "docker ps -a", description: "List all containers, including stopped ones" },
      { command: "docker logs -f <container>", description: "Stream logs from a running container" },
      { command: "docker exec -it <container> sh", description: "Open a shell inside a running container" },
      { command: "docker system prune -a", description: "Remove unused images, containers, and networks" },
    ],
  },
  {
    id: "kubernetes",
    label: "Kubernetes",
    commands: [
      { command: "kubectl get pods -A", description: "List pods across all namespaces" },
      { command: "kubectl describe pod <pod>", description: "Show detailed pod status and events" },
      { command: "kubectl logs -f <pod> -c <container>", description: "Stream logs for a container in a pod" },
      { command: "kubectl rollout restart deployment <name>", description: "Restart all pods in a deployment" },
      { command: "kubectl get events --sort-by=.lastTimestamp", description: "View recent cluster events" },
    ],
  },
  {
    id: "terraform",
    label: "Terraform",
    commands: [
      { command: "terraform plan", description: "Preview infrastructure changes" },
      { command: "terraform apply", description: "Apply the planned infrastructure changes" },
      { command: "terraform state list", description: "List resources tracked in state" },
      { command: "terraform fmt -recursive", description: "Format all configuration files" },
      { command: "terraform force-unlock <lock-id>", description: "Release a stuck state lock" },
    ],
  },
  {
    id: "aws",
    label: "AWS",
    commands: [
      { command: "aws ec2 describe-instances", description: "List EC2 instances and their state" },
      { command: "aws s3 sync ./dist s3://bucket", description: "Sync a local directory to an S3 bucket" },
      { command: "aws eks update-kubeconfig --name <cluster>", description: "Configure kubectl for an EKS cluster" },
      { command: "aws logs tail /ecs/service --follow", description: "Tail a CloudWatch log group" },
      { command: "aws sts get-caller-identity", description: "Confirm the currently active IAM identity" },
    ],
  },
];
