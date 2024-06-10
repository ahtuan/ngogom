import React from "react";

const Index = () => {
  return (
    <div className="container mx-auto flex flex-col min-h-[64vh]">
      <h1>About</h1>
      <p>This is the about page</p>

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d354.24688489257414!2d106.83039302973107!3d10.84423499312376!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3175210002803ae7%3A0x8ed795132d2e7501!2zTmfDtSBH4buRbQ!5e0!3m2!1sen!2s!4v1718030733112!5m2!1sen!2s"
        className="w-full h-[36vh] rounded-lg border-orange border mt-auto mb-12"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default Index;
