export interface Scenario {
  id: string;
  title: string;
  tag: string;
  steps: { label: string; detail: string }[];
}

export const scenarios: Scenario[] = [
  {
    id: "pod-failure",
    title: "Kubernetes Pod Failure",
    tag: "runtime",
    steps: [
      { label: "Situation", detail: "A pod repeatedly restarts and never reaches a Ready state." },
      { label: "Investigation", detail: "Inspect pod events, describe the pod, and check container logs." },
      { label: "Root Cause", detail: "Trace the failure to a misconfigured readiness probe or resource limit." },
      { label: "Resolution", detail: "Correct the manifest and roll out the fix with a controlled rollout." },
      { label: "Prevention", detail: "Add probe and limit validation to the CI pipeline before merge." },
    ],
  },
  {
    id: "pipeline-failure",
    title: "CI/CD Pipeline Failure",
    tag: "delivery",
    steps: [
      { label: "Code", detail: "A change is pushed that breaks an assumption in the build stage." },
      { label: "Jenkins", detail: "The pipeline flags a failed stage and halts before deployment." },
      { label: "Build", detail: "Review build logs to isolate the failing step." },
      { label: "Test", detail: "Confirm whether the failure is a code issue or a flaky test." },
      { label: "Docker / Deployment", detail: "Re-run once fixed, so the image only reaches deployment when green." },
    ],
  },
  {
    id: "image-optimization",
    title: "Docker Image Optimization",
    tag: "containers",
    steps: [
      { label: "Multi-stage builds", detail: "Separate build-time dependencies from the final runtime image." },
      { label: "Smaller base images", detail: "Swap general-purpose base images for slim or distroless variants." },
      { label: ".dockerignore", detail: "Exclude build artifacts, local configs, and version control metadata." },
      { label: "Layer optimization", detail: "Order instructions so frequently changing layers sit last for better caching." },
    ],
  },
  {
    id: "terraform-state",
    title: "Terraform State Issue",
    tag: "iac",
    steps: [
      { label: "Remote backend", detail: "State lives in a shared backend rather than a local file." },
      { label: "State locking", detail: "A lock prevents concurrent applies from corrupting state." },
      { label: "Concurrent execution", detail: "A second run waits or fails fast if the state is already locked." },
      { label: "Recovery", detail: "Force-unlock only after confirming no other apply is genuinely in progress." },
    ],
  },
  {
    id: "deploy-failure",
    title: "Production Deployment Failure",
    tag: "delivery",
    steps: [
      { label: "Detection", detail: "Monitoring flags an error rate spike immediately after a rollout." },
      { label: "Investigation", detail: "Compare metrics and logs against the previous stable version." },
      { label: "Rollback", detail: "Revert to the last known-good release to restore service." },
      { label: "Root Cause", detail: "Identify the change responsible once the system is stable." },
      { label: "Prevention", detail: "Add the missing check as an automated gate for future releases." },
    ],
  },
  {
    id: "high-cpu",
    title: "Kubernetes High CPU",
    tag: "runtime",
    steps: [
      { label: "Metrics", detail: "Node and pod CPU usage climbs steadily under load." },
      { label: "Prometheus", detail: "Query historical metrics to confirm the trend and its scope." },
      { label: "Grafana", detail: "Visualize per-pod usage to isolate the workload responsible." },
      { label: "Resource Limits", detail: "Adjust requests and limits so scheduling reflects real usage." },
      { label: "HPA", detail: "Tune autoscaling thresholds so capacity grows ahead of demand." },
    ],
  },
];
