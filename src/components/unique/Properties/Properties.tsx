import Property, { PropertyProps } from "./Property/Property";

const Properties = async () => {
  const res = await fetch(`${process.env.NEXT_API_BASE_URL}/properties`);
  const properties: PropertyProps[] = await res.json();

  return (
    <section className="container mx-auto px-4 py-6">
      <div className="grid xl:grid-cols-4 lg:grid-cols-3 gap-5 md:grid-cols-2 grid-cols-1  ">
        {properties?.map((property) => (
          <Property key={property._id} property={property} />
        ))}
      </div>
    </section>
  );
};
export default Properties;
