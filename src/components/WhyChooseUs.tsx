import { Card, CardContent } from '../components/ui/card';
import { Calendar, Star, Users } from 'lucide-react';

const WhyChooseUs = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-[#F5F5F5]">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8 text-[#001F3F]">
          Why Choose Avenue5 Hospitality
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="bg-white">
            <CardContent className="p-6">
              <Star className="w-12 h-12 text-[#D4AF37] mb-4" />
              <h3 className="text-xl font-bold mb-2 text-[#001F3F]">Premium Locations</h3>
              <p className="text-gray-600">
                Our properties are situated in the most desirable and convenient locations across the city.
              </p>
            </CardContent>
          </Card>
          <Card className="bg-white">
            <CardContent className="p-6">
              <Users className="w-12 h-12 text-[#D4AF37] mb-4" />
              <h3 className="text-xl font-bold mb-2 text-[#001F3F]">Exceptional Service</h3>
              <p className="text-gray-600">
                Our dedicated staff ensures your comfort and satisfaction throughout your stay.
              </p>
            </CardContent>
          </Card>
          <Card className="bg-white">
            <CardContent className="p-6">
              <Calendar className="w-12 h-12 text-[#D4AF37] mb-4" />
              <h3 className="text-xl font-bold mb-2 text-[#001F3F]">Flexible Bookings</h3>
              <p className="text-gray-600">
                Enjoy the freedom to book short-term stays or long-term residences with ease.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
