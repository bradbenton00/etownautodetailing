import { useLocation } from "wouter";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const formSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Valid phone number required"),
  service: z.string().min(1, "Please select a service"),
  vehicleSize: z.string().min(1, "Please select vehicle size"),
  message: z.string().optional(),
});

export function Contact() {
  const { toast } = useToast();
  const [, setLocation] = useLocation();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      service: "",
      vehicleSize: "",
      message: "",
    },
  });

  function onSubmit(data: z.infer<typeof formSchema>) {
    // Redirect to internal booking page
    setLocation("/book-an-appointment");
    toast({
      title: "Redirecting to Booking",
      description: "Taking you to our secure booking calendar...",
    });
    console.log(data);
    form.reset();
  }

  return (
    <section id="contact" className="py-24 bg-white/[0.02] border-t border-white/5">
      <div className="container mx-auto px-6 max-w-2xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-serif text-white mb-4">Book Your Appointment</h2>
          <p className="text-white/50">Veteran-Owned • Weekend Appointments Only</p>
        </div>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-white/70">Name</FormLabel>
                    <FormControl>
                      <Input placeholder="John Doe" {...field} className="bg-transparent border-white/10 text-white rounded-none focus-visible:ring-white/20 h-12" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-white/70">Phone</FormLabel>
                    <FormControl>
                      <Input placeholder="(270) 555-0123" {...field} className="bg-transparent border-white/10 text-white rounded-none focus-visible:ring-white/20 h-12" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white/70">Email</FormLabel>
                  <FormControl>
                    <Input placeholder="john@example.com" {...field} className="bg-transparent border-white/10 text-white rounded-none focus-visible:ring-white/20 h-12" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="grid md:grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="service"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-white/70">Service Required</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger className="bg-transparent border-white/10 text-white rounded-none focus:ring-white/20 h-12">
                          <SelectValue placeholder="Select a package" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent className="bg-black border-white/10 text-white rounded-none">
                        <SelectItem value="signature">Signature Complete ($450+)</SelectItem>
                        <SelectItem value="exterior">Premium Exterior ($375+)</SelectItem>
                        <SelectItem value="interior">Premium Interior ($295+)</SelectItem>
                        <SelectItem value="custom">Other / Custom</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="vehicleSize"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-white/70">Vehicle Size</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger className="bg-transparent border-white/10 text-white rounded-none focus:ring-white/20 h-12">
                          <SelectValue placeholder="Select size" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent className="bg-black border-white/10 text-white rounded-none">
                        <SelectItem value="sedan">Sedan / Coupe</SelectItem>
                        <SelectItem value="suv">SUV / Small Truck (+$25-50)</SelectItem>
                        <SelectItem value="large">Large SUV / Van (+$75-100)</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white/70">Additional Details (Optional)</FormLabel>
                  <FormControl>
                    <Textarea 
                      placeholder="Vehicle make/model, specific concerns..." 
                      {...field} 
                      className="bg-transparent border-white/10 text-white rounded-none focus-visible:ring-white/20 min-h-[100px]" 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit" className="w-full bg-white text-black hover:bg-white/90 rounded-none h-12 text-sm uppercase tracking-widest font-medium">
              Submit Request
            </Button>
          </form>
        </Form>
      </div>
    </section>
  );
}