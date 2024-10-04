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
interface PropertiesProps {
  properties:PropertyProps[]
  isTaxInclude:boolean,
}
const Properties = ({properties, isTaxInclude }:PropertiesProps) => {


  return (
    <section className="container mx-auto p-4">
      <div className="grid xl:grid-cols-4 lg:grid-cols-3 gap-6 md:grid-cols-2 grid-cols-1">
        {properties?.map((property, index) => (
          <Property
          isTaxInclude={isTaxInclude}
          key={index} property={property} />
        ))}
      </div>
    </section>
  );
};

export default Properties;
