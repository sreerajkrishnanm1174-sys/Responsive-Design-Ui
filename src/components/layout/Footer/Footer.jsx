import React from "react";
import Headpara from "../section/Headpara";

function Footer() {
  return (
    <footer className="bg-white text-black  mt-10 h-fit">
      <Headpara />
      {/* Bottom Section */}

      <div className="space-y-6 px-50">
        {/* 3 Columns */}
        <div className="grid grid-cols-5 gap-10  ">
          <div>
            <h1 className="text-3xl font-semibold">Company</h1>
            <br />
            <a href="#" className="text-2xl">
              About us
            </a>
            <br />
            <br />
            <a href="#" className="text-2xl">
              Pricing
            </a>
            <br />
            <br />
            <a href="#" className="text-2xl">
              Contact us
            </a>
            <br />
            <br />
            <a href="#" className="text-2xl">
              Features
            </a>
            
          </div>
          <div>
            <h1 className="text-3xl font-semibold">Product</h1>
            <br />

            <a href="#" className="text-2xl">
              Figma design system
            </a>
            <br />
            <br />
            <a href="#" className="text-2xl">
              Ios kit
            </a>
            <br />
            <br />
            <a href="#" className="text-2xl">
             Android kit
            </a>
            <br />
            <br />
            <a href="#" className="text-2xl">
              Wireframe
            </a>
            
          </div>
          <div>
            <h1 className="text-3xl font-semibold">Resources</h1>
            <br />

            <a href="#" className="text-2xl">
              Templates
            </a>
            <br />
            <br />
            <a href="#" className="text-2xl">
              Landing pages
            </a>
            <br />
            <br />
            <a href="#" className="text-2xl">
              Documentation
            </a>
            <br />
            <br />
            <a href="#" className="text-2xl">
              Comp library
            </a>
            
          </div>
          <div>
            <h1 className="text-3xl font-semibold">Legal</h1>
            <br />

            <a href="#" className="text-2xl">
              Privacy policy
            </a>
            <br />
            <br />
            <a href="#" className="text-2xl">
              Terms & Conditions
            </a>
            <br />
            <br />
            <a href="#" className="text-2xl">
              Disclaimer
            </a>
            <br />
            <br />
            <a href="#" className="text-2xl">
              Affiliate programme
            </a>
           
          </div>
          <div>
            <h1 className="text-3xl font-semibold">Support</h1>
            <br />

            <a href="#" className="text-2xl">
              Help center
            </a>
            <br />
            <br />
            <a href="#" className="text-2xl">
              Terms of service
            </a>
            <br />
            <br />
            <a href="#" className="text-2xl">
              Legal
            </a>
            <br />
            <br />
            <a href="#" className="text-2xl">
              Privacy policy
            </a>
            <br />
            <br />
            <a href="#" className="text-2xl">
              Status
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
