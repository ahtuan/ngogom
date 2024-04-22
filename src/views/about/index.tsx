import React from "react";

const Index = () => {
  return (
    <div className="container mx-auto flex flex-col min-h-[64vh]">
      <h1>About</h1>
      <p>This is the about page</p>

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d824.252671950464!2d106.83074600668917!3d10.844598294319091!3m2!1i1024!2i768!4f13.1!5e0!3m2!1svi!2s!4v1713799566068!5m2!1svi!2s"
        className="w-full h-[36vh] rounded-lg border-orange border mt-auto mb-12"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default Index;
