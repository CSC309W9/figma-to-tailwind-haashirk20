//UTORID: khanm473
// NAME: Haashir
export default function Home() {
  return (
    <div className="w-full h-screen relative bg-gradient-to-b from-[#db4439] to-[#75241e] overflow-hidden">
      {/* Navbar */}
      <div className="absolute top-[46px] left-[64px] flex space-x-10 text-[#eaecd7] text-2xl font-bold font-['Inknut_Antiqua']">
        <div>Home</div>
        <div className="ml-[206px]">Social Media</div>
        <div className="ml-[380px]">About Us</div>
      </div>

      {/* Main Heading */}
      <div className="absolute top-[313px] left-[300px] text-[#eaecd7] text-[100px] font-black font-['Inknut_Antiqua'] leading-[134.20px]">
        A Coffee Shop
      </div>

      {/* Subheading */}
      <div className="absolute top-[740px] left-[148px] text-[#eaecd7] text-[40px] font-semibold font-['Inknut_Antiqua'] leading-[48.80px]">
        Who loves Coffee
      </div>

      {/* Image - Now in Last Third of the Page */}
      <div className="absolute bottom-[35%] right-[1%]">
        <img className="w-[400px] h-[300px]" src="https://images.immediate.co.uk/production/volatile/sites/30/2020/08/flat-white-3402c4f.jpg" alt="Coffee Shop Image" />
      </div>

      {/* Click Button */}
      <div className="absolute top-[58px] left-[1567px]">
        <div className="w-[150px] h-[52px] bg-[#eaecd7] rounded-[49px] relative flex items-center justify-center">
          <div className="text-[#db4439] text-base font-black font-['Inknut_Antiqua']">Click</div>
        </div>
      </div>

      {/* Footer */}
      <div className="absolute bottom-0 w-full h-[102px] bg-white flex justify-around items-center text-[#db4439] text-2xl font-black font-['Inknut_Antiqua']">
        <div>Contact Us!</div>
        <div>Buy some Coffee!</div>
        <div>Owners</div>
        <div>Coffee Machines</div>
        <div>Similar Products</div>
      </div>
    </div>
  );
}