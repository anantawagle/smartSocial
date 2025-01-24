

const Testimonials = () => {
  return (
    <section className="testimonials bg-gray-100 py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">What Our Clients Say</h2>
        <div className="flex flex-col md:flex-row justify-center items-center">
          <div className="testimonial p-8 bg-white rounded-lg shadow-md mb-6 md:mr-6 md:mb-0">
            <p className="text-xl mb-4">`&quot;`SmartSocial has transformed the way we manage our social media. The AI tools are incredibly powerful!`&quot;`</p>
            <p>- Rajesh Hamal, ABC Company</p>
          </div>
          <div className="testimonial p-8 bg-white rounded-lg shadow-md">
            <p className="text-xl mb-4">`&quot;`Our team has saved hours of work per week using SmartSocial. Highly recommend it to anyone!`&quot;`</p>
            <p>- Nikhil Upreti, XYZ Company</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
