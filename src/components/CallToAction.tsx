import { Card } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';

const CallToAction = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-[#F5F5F5]">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4 text-[#001F3F]">
              Ready to Experience Luxury?
            </h2>
            <p className="text-xl text-gray-600 mb-4">
              Book your stay or schedule a tour of our premium properties today.
            </p>
            <div className="flex space-x-4">
              <Button className="bg-[#D4AF37] text-[#001F3F] hover:bg-[#C4A137]">Book Now</Button>
              <Button variant="outline" className="text-[#001F3F] border-[#001F3F] hover:bg-[#001F3F] hover:text-white">
                Schedule Tour
              </Button>
            </div>
          </div>
          <Card className="bg-white p-6">
            <h3 className="text-xl font-bold mb-4 text-[#001F3F]">Contact Us</h3>
            <form className="space-y-4">
              <Input placeholder="Name" />
              <Input placeholder="Email" type="email" />
              <Input placeholder="Phone" type="tel" />
              <Button className="w-full bg-[#50C878] hover:bg-[#40B868]">Send Inquiry</Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
