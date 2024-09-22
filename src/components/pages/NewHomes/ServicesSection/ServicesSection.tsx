import ServicesItem from "./ServicesItem";

export default function ServicesSection() {
  return (
    <section className="my-24">
      <h2 className="mb-8 text-center font-serif text-h2">
        Hãy dành thời gian chăm sóc mèo cưng của bạn
      </h2>
      <div className="space-y-4">
        <div className="flex h-80 flex-col gap-4 lg:h-96 lg:flex-row">
          <ServicesItem
            width="w-full lg:w-3/4 h-1/2 lg:h-full"
            backgroundImageClass="bg-services-image-1"
            imageText="Massage"
          />
          <ServicesItem
            width="w-full lg:w-1/2 h-1/2 lg:h-full"
            backgroundImageClass="bg-services-image-2"
            imageText="Nail care"
          />
        </div>
        <div className="flex h-80 flex-col gap-4 lg:h-96 lg:flex-row">
          <ServicesItem
            width="w-full lg:w-1/2 h-1/2 lg:h-full"
            backgroundImageClass="bg-services-image-3"
            imageText="Tắm"
          />

          <ServicesItem
            width="w-full lg:w-3/4 h-1/2 lg:h-full"
            backgroundImageClass="bg-services-image-4"
            imageText="Tỉa lông"
          />
        </div>
      </div>
    </section>
  );
}
