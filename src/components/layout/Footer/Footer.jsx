import React from "react";
import Headpara from "../section/Headpara";
import FooterLink from "../../Link/FooterLink";
import Mainlogo from "../../Icons/Mainlogo";
import ImgCard_2 from "../../Cards/ImgCard_2";

function Footer() {
  return (
    <footer className="bg-white text-black p-5 h-fit">
      <Headpara
        sectionClassName="w-full"
        headingClassName="text-lg font-bold "
        description="Mode UI is a comprehensive design system that empowers designers and developers to create cohesive and visually stunning user interfaces across various platforms and devices"
        heading={<Mainlogo width="150px" height="24px" />}
      />
      {/* middle Section */}

      <div className=" mt-20 w-full h-fit space-y-6  lg:flex lg:justify-center">
        {/* 3 Columns */}
        <div className="border-t-[1px]  border-[#E6E7E9] pt-20  grid grid-rows-5 gap-[64px] lg:gap-20 text-start  lg:grid-cols-5 lg:grid-rows-1 md:grid-cols-2 md:grid-rows-3">
          <div>
            <h1 className="text-[16px] leading-[20px] font-bold text-[#24282F] ">
              Company
            </h1>
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
            <h1 className="text-[16px] leading-[20px] font-bold text-[#24282F]">
              Product
            </h1>
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
            <h1 className="text-[16px] leading-[20px] font-bold text-[#24282F]">
              Resources
            </h1>
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
            <h1 className="text-[16px] leading-[20px] font-bold text-[#24282F]">
              Legal
            </h1>
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
            <h1 className="text-[16px] leading-[20px] font-bold text-[#24282F]">
              Support
            </h1>
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
           
          </div>
        </div>
      </div>

      {/* bottom secction */}

      <div className="w-full h-fit flex  flex-col justify-center items-start my-12 gap-7 md:items-center lg:items-center">
        <div  className="w-fit h-fit   flex flex-row gap-[24px] " > 
          
            <ImgCard_2 src="/socialmedia/Github.png" />
            <ImgCard_2 src="/socialmedia/linkedIn.png" />
            <ImgCard_2 src="/socialmedia/Discord.png" />
          
        </div>
        <div>
          <p className="text-[14px] leading-[20px]">© 2023 Mode UI  Inc. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
