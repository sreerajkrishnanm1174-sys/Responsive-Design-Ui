import React from "react";
import Headpara from "../section/Headpara";
import FooterLink from "../../Link/FooterLink";

function Footer() {
  return (
    <footer className="bg-white text-black p-5 mt-10 h-fit">
      <Headpara />
      {/* Bottom Section */}

      <div className="  w-full space-y-6  lg:flex lg:justify-center">
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
