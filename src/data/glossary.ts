export const glossary: Record<string, string> = {
  adc: "Application Default Credentials — the credential chain used by Google Cloud client libraries and Terraform to authenticate. Set via `gcloud auth application-default login`.",
  aws: "Amazon Web Services — the cloud platform used throughout this walkthrough.",
  bgp: "Border Gateway Protocol — the routing protocol used to exchange routes between AWS and GCP over the interconnect.",
  cidr: "Classless Inter-Domain Routing — a notation for IP address ranges (e.g. 10.0.0.0/16). AWS and GCP VPC CIDRs must not overlap for interconnect routing.",
  "dx-gateway":
    "Direct Connect Gateway — an AWS resource that connects a Virtual Private Gateway (or Transit Gateway) to a Direct Connect or Interconnect link. Created by Terraform in this demo.",
  gce: "Google Compute Engine — GCP virtual machine instances. The demo GCE VM is reachable via IAP tunnel SSH.",
  gcp: "Google Cloud Platform — the cloud provider connected to AWS via Interconnect multicloud in this walkthrough.",
  iap: "Identity-Aware Proxy — a GCP service that enables SSH access to VMs without a public IP, tunnelling through Google infrastructure (IP range 35.235.240.0/20).",
  interconnect:
    "AWS Interconnect – multicloud — a managed private connectivity service that connects Amazon VPCs directly to VPCs on other cloud providers. GA with Google Cloud as of April 2026.",
  macsec:
    "IEEE 802.1AE MACsec — encryption applied to the physical links between AWS and GCP routers at interconnection facilities. Enabled by default on every Interconnect connection.",
  "partner-cci":
    "Partner Cross-Cloud Interconnect — the GCP-side service that accepts the AWS activation key and creates a managed transport for cross-cloud connectivity.",
  ssm: "AWS Systems Manager Session Manager — provides shell access to EC2 instances without a public IP or SSH key, using VPC interface endpoints.",
  terraform:
    "HashiCorp Terraform — infrastructure-as-code tool used to provision the base AWS and GCP resources in this demo.",
  transport:
    "GCP Transport — a Network Connectivity resource created via `gcloud beta network-connectivity transports create`. Represents the GCP side of the cross-cloud interconnect link.",
  vgw: "Virtual Private Gateway — an AWS VPN gateway attached to a VPC. Routes to GCP are propagated through the VGW via the DX Gateway association.",
  vpc: "Virtual Private Cloud — an isolated private network. Both AWS and GCP use VPCs. The interconnect peers the two VPCs for private routing.",
  "vpc-peering":
    "VPC Network Peering — a GCP feature that connects two VPC networks for private route exchange. Used here to peer the workload VPC with the transport managed network.",
};
