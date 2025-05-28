const ExpandLocation = () => {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-3xl mx-auto px-4 flex flex-col items-center">
        <h2 className="text-2xl md:text-3xl font-semibold text-center text-pink-500 mb-6">
          Our Locations!
        </h2>
        <div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3623.1421537729652!2d90.4039979805029!3d24.75631472126527!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x37564f78e0cd5b79%3A0xa486c16f9b26f38b!2sKazi%20tower!5e0!3m2!1sen!2sbd!4v1748462304448!5m2!1sen!2sbd"
            width={800}
            height={450}
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
};

export default ExpandLocation;
