import React from "react";

function Headpara({heading,description,descriptionClassName,sectionClassName,children,headingClassName}) {
  return (
    <section className={`h-fit flex flex-col items-center justify-center text-center mb-2   ${sectionClassName || ''}`}>
      <h2 className={`mb-2 ${headingClassName || ''}`}>
        {heading}
      </h2>

      <p className={` ${descriptionClassName || 'text-gray-400 text-2xl max-w-xl'}`}>
        {description}
      </p>
      {children}
    </section>
  );
}

export default Headpara;
