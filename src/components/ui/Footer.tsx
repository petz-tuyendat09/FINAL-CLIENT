import LogoImage from "@@/assets/images/logoFinal.png";
import ResponsiveImage from "@/components/ui/ResponsiveImage";

export default function Footer() {
  return (
    <>
      <div className="py-16 px-4 sm:px-6 lg:py-20 lg:px-8 text-white" style={{ background: '#a0463e' }}>
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-5xl font-bold">Join the Be Relax <br /> Wellness & Travel <br /> Newsletter</h1>
            <div className="mt-8 flex justify-center">
              <input type="email" placeholder="Your Email" className="w-80 px-4 py-2 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
              <button className="ml-4 px-6 py-2 rounded-full bg-gradient-to-r from-orange-400 to-orange-500 text-white shadow-sm">
                <i className="fas fa-arrow-right"></i>
              </button>
            </div>
            <div className="mt-8 flex items-center space-x-8">
              <a href="#"><i className="border-1 py-4 px-5 rounded-full fab fa-facebook-f"></i></a>
              <a href="#"><i className="border-1 p-4 rounded-full fab fa-linkedin-in"></i></a>
              <a href="#"><i className="border-1 p-4 rounded-full fab fa-instagram"></i></a>
            </div>
          </div>

          {/* QUICK LINKS */}
          <div className="w-1/2 mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
            <div>
              <h2 className="text-lg text-gray-200">EXPLORE</h2>
              <ul className="mt-4 space-y-2">
                <li><a href="#">Contact Us</a></li>
                <li><a href="#">FAQ</a></li>
                <li><a href="#">Career</a></li>
                <li><a href="#">Press Room</a></li>
                <li><a href="#">Wellness Journal</a></li>
              </ul>
            </div>
            <div>
              <h2 className="text-lg text-gray-200">TREATMENTS</h2>
              <ul className="mt-4 space-y-2">
                <li><a href="#">Massages</a></li>
                <li><a href="#">Nail care</a></li>
                <li><a href="#">Beauty</a></li>
                <li><a href="#">Wellness</a></li>
                <li><a href="#">Combo</a></li>
              </ul>
            </div>
            <div>
              <h2 className="text-lg text-gray-200">PRODUCTS</h2>
              <ul className="mt-4 space-y-2">
                <li><a href="#">Pillows</a></li>
                <li><a href="#">Travel Accessories</a></li>
                <li><a href="#">Massage devices</a></li>
                <li><a href="#">Beauty devices</a></li>
                <li><a href="#">Register Product</a></li>
                <li><a href="#">Find a Retailer</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex justify-between items-center mt-16 border-y border-gray-200 py-6 text-center md:text-left">
          <p className="">&copy; PETZ. All Rights Reserved 2024</p>
          <div className="bg-white p-4 rounded-full">
            <ResponsiveImage
              imageSrc={LogoImage}
              altImage="Logo"
              imageWidth={500}
              imageHeight={500}
            />
          </div>
          <div className="flex justify-center md:justify-between">
            <div className="flex items-center space-x-2">
              <a href="#" className=" hover:text-gray-700">Created by</a>
              <span className="font-semibold">PETZ</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
