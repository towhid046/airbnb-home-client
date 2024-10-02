import Property from "./Property/Property";

export interface PropertyProps {
  images: string[];
  location: string;
  price: number;
  rating: number;
  startDate: number;
  endDate: number;
  amenities: string[];
  propertyType: string;
  author: {
    name: string;
    image: string;
  };
}
const Properties = async (): Promise<JSX.Element> => {
  const res = await fetch(`${process.env.NEXT_API_BASE_URL}/properties`);

  if (!res.ok) {
    throw new Error("Failed to fetch properties");
  }

  const properties: PropertyProps[] = await res.json();

  return (
    <section className="container mx-auto px-4 py-6">
      <div className="grid xl:grid-cols-4 lg:grid-cols-3 gap-6 md:grid-cols-2 grid-cols-1">
        {properties?.map((property, index) => (
          <Property key={index} property={property} />
        ))}
      </div>
    </section>
  );
};

export default Properties;
