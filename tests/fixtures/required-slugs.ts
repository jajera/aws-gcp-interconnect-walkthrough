export const REQUIRED_SLUGS = [
  "index",
  "overview",
  "prerequisites",
  "prerequisites/cost-estimate",
  "setup",
  "setup/configure-variables",
  "setup/apply-terraform",
  "setup/gcp-prep",
  "interconnect",
  "interconnect/aws-interconnect",
  "interconnect/gcp-transport",
  "interconnect/vpc-peering",
  "verify",
  "verify/routing",
  "verify/connectivity-test",
  "teardown",
  "troubleshooting",
  "troubleshooting/checking-errors",
  "troubleshooting/billing-verification",
  "reference",
] as const;

export const REQUIRED_PUBLIC_FILES = ["og-image.png", "og-image.svg"] as const;
