import logo from "./logo.svg";
import img1 from "../src/assets/img001.png";
import img2 from "../src/assets/img002.png";
import img3 from "../src/assets/img003.png";
import { useState } from "react";
import Carousel from "./components/Carousel";

function App() {
  const [count, setCount] = useState(1);
  console.log(count);
  const testomonialData = [
    {
      title: "Sagar Borude",
      subTitle: "Web Developer",
      imgUrl:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=776&q=80",
    },
    {
      title: "Sonu  Shrivastav",
      subTitle: "Account Manager",
      imgUrl:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
    },
    {
      title: "Kajal Sharma",
      subTitle: "HR Manager",
      imgUrl:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
    },
    {
      title: "Altaf Ansari",
      subTitle: "Account Manager",
      imgUrl:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
    },
    {
      title: "Varsha Jadhav",
      subTitle: "Opration Manager",
      imgUrl:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
    },
    {
      title: "Ayush More ",
      subTitle: "Finance Manager",
      imgUrl:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
    },
  ];
  const products = [
    {
      imageUrl: "https://images.unsplash.com/photo-1532634257-9a26b68a339f",
      title: "Apple iPhone 12 Pro",
      subtitle1: "6.1-inch Super Retina XDR display",
      subtitle2: "Price: $999",
    },
    {
      imageUrl: "https://images.unsplash.com/photo-1584274813589-0a80a7d42dbd",
      title: "Samsung Galaxy S21 Ultra 5G",
      subtitle1: "6.8-inch AMOLED display",
      subtitle2: "Price: $1199",
    },
    {
      imageUrl: "https://images.unsplash.com/photo-1618387474583-1cfb49cf55b7",
      title: "Sony PlayStation 5",
      subtitle1: "Ultra-High Speed SSD",
      subtitle2: "Price: $499",
    },
    {
      imageUrl: "https://images.unsplash.com/photo-1582195800598-121dd6e2a23d",
      title: "Microsoft Surface Laptop 4",
      subtitle1: "13.5-inch PixelSense Touchscreen",
      subtitle2: "Price: $999",
    },
    {
      imageUrl: "https://images.unsplash.com/photo-1576670221636-af2e15248b3d",
      title: "Apple Watch Series 6",
      subtitle1: "Always-On Retina display",
      subtitle2: "Price: $399",
    },
    {
      imageUrl: "https://images.unsplash.com/photo-1595996136031-93e00f06b564",
      title: "Nintendo Switch",
      subtitle1: "Play your favorite games anytime, anywhere",
      subtitle2: "Price: $299",
    },
    {
      imageUrl: "https://images.unsplash.com/photo-1547436836-98b6c0f0ba1a",
      title: "Bose QuietComfort 35 II",
      subtitle1: "Wireless noise cancelling headphones",
      subtitle2: "Price: $299",
    },
  ];

  return (
    <div className=" w-full  sm:px-[30px] px-[10px] py-[50px] min-w-[350px] pb-[500px]">
      <section className=" max-w-[1100px] mx-auto">
        <div class="grid grid-cols-1 gap-[20px] sm:grid-cols-2">
          <div class="h-[200px] w-full  sm:h-[660px] overflow-hidden relative">
            <div className=" w-[200px] top-[250px] left-[40px] absolute z-10 text-white">
              <p className="text-[35px] leading-[42px] font-[800]">
                Simple <br /> Men T-shirt
              </p>
              <button className="border-b text-[14px] font-[700]">
                Grab it
              </button>
            </div>
            <img
              src={img1}
              className="h-full w-full object-fill sm:object-cover absolute z-0"
            />
          </div>
          <div class="flex flex-col gap-[20px]">
            <div class="h-[200px] sm:h-full w-full  relative">
              <div className=" w-[200px] top-[95px] left-[40px] absolute z-10 text-white">
                <p className="text-[35px] leading-[42px] font-[800]">
                  Shirts <br />
                  For Couple
                </p>
                <button className="border-b text-[14px] font-[700]">
                  Grab it
                </button>
              </div>
              <img
                src={img2}
                className="h-full w-full object-fill sm:object-cover absolute"
              />
            </div>
            <div class="h-[200px] sm:h-full w-full  relative">
              <div className=" w-[200px] top-[95px] left-[40px] absolute z-10 text-white">
                <p className="text-[35px] leading-[42px] font-[800]">
                  Sale Off
                  <br /> Up to 50%
                </p>
                <button className="border-b text-[14px] font-[700]">
                  Grab it
                </button>
              </div>
              <img
                src={img3}
                className="h-full w-full object-fill sm:object-cover absolute"
              />
            </div>
          </div>
        </div>
        <div className="w-full h-[300px]  mt-[100px]">
          <div className=" flex items-center justify-center text-center text-[28px]">
            <p className="w-[80%] italic text-[#626262] font-[700] leading-[45px]">
              Proin convallis non eros sit amet scelerisque. Donec vitae mi
              ultrices velit lobortis cursus. In hac habitasse platea dictumst.
            </p>
          </div>
          <div>
            <div className=" flex flex-col items-center mt-[50px]">
              <div className="flex gap-[15px] items-center ">
                <div
                  onClick={() =>
                    setCount(count > 1 ? count - 1 : testomonialData.length)
                  }
                  className="h-[70px] w-[70px] rounded-full  overflow-hidden cursor-pointer "
                >
                  {" "}
                  <img
                    className="object-cover"
                    src={testomonialData[count - 1]?.imgUrl}
                  />
                </div>
                <div>
                  <div className="h-[105px] w-[105px] rounded-full overflow-hidden">
                    <img
                      className="object-cover"
                      src={testomonialData[count]?.imgUrl}
                    />
                  </div>
                </div>
                <div
                  onClick={() =>
                    setCount(
                      count < testomonialData.length
                        ? count + 1
                        : testomonialData.length
                    )
                  }
                  className="h-[70px] w-[70px] rounded-full  overflow-hidden cursor-pointer"
                >
                  <img
                    className="object-cover"
                    src={testomonialData[count - 1].imgUrl}
                  />{" "}
                </div>
              </div>
              <div className="text-center mt-[10px]">
                <p className="text-[14px] font-[800] text-[#C17262]">
                  {" "}
                  {testomonialData[count]?.title}
                </p>
                <p className="text-[12px] text-[#AAAAAA]">
                  {" "}
                  {testomonialData[count]?.subTitle}
                </p>
              </div>
            </div>
          </div>
          <div className="mt-[100px]">
            <Carousel products={products} />
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
