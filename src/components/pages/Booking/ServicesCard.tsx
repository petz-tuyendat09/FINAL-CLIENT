import { Services } from "@/types/Services";

interface ServicesCardProps {
  service: Services;
}

export default function ServicesCard({ service }: ServicesCardProps) {
  console.log(service);
  return <div>{service.serviceName}</div>;
}
