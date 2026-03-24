import React from "react";

function Headpara({heading,description,descriptionClassName,sectionClassName,children,headingClassName}) {
  return (
    <section className={`h-fit flex flex-col items-center justify-center text-center mb-2   ${sectionClassName || ''}`}>
      <h2 className={`mb-2 ${headingClassName || ''}`} style={{ fontFamily: "Manrope, sans-serif" }}>
        {heading}
      </h2>

      <p className={` ${descriptionClassName || 'text-[#5A6475] text-[16px]  leading-[28px] max-w-lg'}`}>
        {description}
      </p>
      {children}
    </section>
  );
}

export default Headpara;
