import React from "react";
import Headpara from "../section/Headpara";
import FooterLink from "../../Link/FooterLink";

function Footer() {
  return (
    <footer className="bg-white text-black p-5 h-fit">
      <Headpara
        sectionClassName="w-full"
        headingClassName="text-lg font-bold"
        description="We build modern web applications with scalable and efficient solutions."
        heading={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="150"
            height="54"
            viewBox="0 0 100 24"
            fill="none"
          >
            <path
              d="M11.2918 19.7647V11.7647L11.1601 9.29412H11.4015L12.2573 11.7647L15.3296 18.8235H19.3236L22.3959 11.7647L23.2518 9.29412H23.4932L23.3834 11.7647V19.7647H26.6752V4H22.1984L18.8628 11.7647L17.5241 15.4588H17.2827L15.9002 11.7647L12.4548 4H8V19.7647H11.2918ZM34.2613 20C38.0139 20 40.5376 17.6 40.5376 13.8824C40.5376 10.1176 38.0139 7.74118 34.2613 7.74118C30.5087 7.74118 27.985 10.1176 27.985 13.8824C27.985 17.6 30.5087 20 34.2613 20ZM34.2613 16.8706C32.0229 16.8706 31.2549 15.9529 31.2549 13.8824C31.2549 11.8118 32.0229 10.8471 34.2613 10.8471C36.4778 10.8471 37.2678 11.8118 37.2678 13.8824C37.2678 15.9529 36.4778 16.8706 34.2613 16.8706ZM46.7975 20C49.3213 20 50.7697 18.8235 51.1866 16.4941H51.3622V19.7647H54.4345V4H51.1427V11.1059H50.9452C50.5722 9.12941 49.2335 7.74118 46.622 7.74118C43.3522 7.74118 41.4869 10.1176 41.4869 13.8824C41.4869 17.6 43.3742 20 46.7975 20ZM44.8226 13.8824C44.8226 11.7176 45.8101 10.9647 47.9168 10.9647C50.0235 10.9647 51.1427 11.7176 51.1427 13.7647V13.9529C51.1427 16 50.0016 16.7765 47.9168 16.7765C45.8101 16.7765 44.8226 16.0235 44.8226 13.8824ZM62.0135 20C65.5028 20 67.8289 18.2118 67.8289 15.6471V15.3882H64.5372V15.6235C64.5372 16.6353 63.8569 17.1765 61.9038 17.1765C59.7751 17.1765 58.9851 16.4 58.8973 14.5882H67.8509C67.8948 14.1882 67.9387 13.8824 67.9387 13.4588C67.9387 9.76471 65.5467 7.74118 61.9477 7.74118C58.3268 7.74118 55.847 10.1176 55.847 13.8824C55.847 18.0706 58.3487 20 62.0135 20ZM61.8819 10.4941C63.813 10.4941 64.6908 11.1765 64.7786 12.7294H58.9412C59.0948 11.2 59.9287 10.4941 61.8819 10.4941ZM79.8308 20C84.6368 20 87.0507 17.4118 87.0507 13.1765V4H83.759V12.9176C83.759 15.6 82.8373 16.5647 79.8308 16.5647C76.8463 16.5647 75.9026 15.6 75.9026 12.9176V4H72.6109V13.1765C72.6109 17.4118 75.0468 20 79.8308 20ZM92 19.7647V4H88.7083V19.7647H92Z"
              fill="#121417"
            />
          </svg>
        }
      />
      {/* Bottom Section */}

      <div className=" mt-20 w-full space-y-6  lg:flex lg:justify-center">
        {/* 3 Columns */}
        <div className="border-t-2  border-gray-300 pt-20 pl-8 grid grid-rows-5 lg:gap-30 text-start  lg:grid-cols-5 lg:grid-rows-1 md:grid-cols-2 ">
          <div>
            <h1 className="text-lg font-semibold">Company</h1>
            <br />

            <FooterLink to="/">About us</FooterLink>
            <br />
            <br />
            <FooterLink to="/">Pricing</FooterLink>
            <br />
            <br />
            <FooterLink to="/">Contact us</FooterLink>
            <br />
            <br />
            <FooterLink to="/">Features</FooterLink>
          </div>
          <div>
            <h1 className="text-lg font-semibold">Product</h1>
            <br />

            <FooterLink to="/">Figma design system</FooterLink>
            <br />
            <br />
            <FooterLink to="/">Ios kit</FooterLink>
            <br />
            <br />
            <FooterLink to="/">Android kit</FooterLink>
            <br />
            <br />
            <FooterLink to="/">Wireframe</FooterLink>
          </div>
          <div>
            <h1 className="text-lg font-semibold">Resources</h1>
            <br />

            <FooterLink to="/">Templates</FooterLink>
            <br />
            <br />
            <FooterLink to="/">Landing pages</FooterLink>
            <br />
            <br />
            <FooterLink to="/">Documentation</FooterLink>
            <br />
            <br />
            <FooterLink to="/">Comp library</FooterLink>
          </div>
          <div>
            <h1 className="text-lg font-semibold">Legal</h1>
            <br />

            <FooterLink to="/">Privacy policy</FooterLink>
            <br />
            <br />
            <FooterLink to="/">Terms & Conditions</FooterLink>
            <br />
            <br />
            <FooterLink to="/">Disclaimer</FooterLink>
            <br />
            <br />
            <FooterLink to="/">Affiliate programme</FooterLink>
          </div>
          <div>
            <h1 className="text-lg font-semibold">Support</h1>
            <br />

            <FooterLink to="/">Help center</FooterLink>
            <br />
            <br />
            <FooterLink to="/">Raise ticket</FooterLink>
            <br />
            <br />
            <FooterLink to="/">Report</FooterLink>
            <br />
            <br />
            <FooterLink to="/">Refund</FooterLink>
            <br />
            <br />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
