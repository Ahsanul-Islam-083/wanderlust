import { Separator } from "@heroui/react";

const Banner = () => {
  return (
    <div className="bg-[url('/assets/banner.png')] bg-cover bg-center text-white flex justify-between flex-col items-center gap-5 min-h-screen md:min-h-[600px] lg:h-150">
      
      <div className="p-6 sm:p-8 md:p-10 text-center flex justify-center flex-col items-center gap-3.5 flex-1">
        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight">
          Discover Your <br /> Next Adventure
        </h1>

        <p className="text-sm sm:text-lg md:text-xl lg:text-2xl max-w-2xl">
          Explore breathtaking destinations and create unforgettable memories
          with our curated travel experiences.
        </p>

        <div className="flex gap-3 sm:gap-5 flex-wrap justify-center">
          <button className="uppercase bg-cyan-500 px-4 sm:px-5 py-2.5 sm:py-3 cursor-pointer text-sm sm:text-base">
            Explore Now
          </button>

          <button className="uppercase px-4 sm:px-5 py-2.5 sm:py-3 bg-white/50 cursor-pointer text-sm sm:text-base">
            View Destination
          </button>
        </div>
      </div>

      {/* Search Bar */}
      <div className="bg-white/30 w-full">
        
        {/* Mobile: stacked layout */}
        <div className="flex flex-col sm:hidden divide-y divide-white/30">
          <div className="px-4 py-3">
            <h3 className="text-sm font-medium">Location</h3>
            <p className="text-xs opacity-80">Address, City or Zip</p>
          </div>
          <div className="px-4 py-3">
            <h3 className="text-sm font-medium">Date/Duration</h3>
            <p className="text-xs opacity-80">Anytime/3 Days</p>
          </div>
          <div className="px-4 py-3">
            <h3 className="text-sm font-medium">Budget</h3>
            <p className="text-xs opacity-80">$0-$3000</p>
          </div>
          <div className="px-4 py-3">
            <h3 className="text-sm font-medium">People</h3>
            <p className="text-xs opacity-80">5-10</p>
          </div>
          <div className="bg-cyan-500 py-3 px-4 text-center cursor-pointer">
            <h3 className="font-medium">Search</h3>
          </div>
        </div>

        {/* Tablet & Desktop: horizontal layout */}
        <div className="hidden sm:flex justify-between gap-2 md:gap-5 w-full items-center">
          <div className="px-2 md:px-3 py-2">
            <h3 className="text-xs md:text-sm font-medium">Location</h3>
            <p className="text-xs opacity-80">Address, City or Zip</p>
          </div>

          <Separator variant="tertiary" orientation="vertical" />

          <div className="py-2">
            <h3 className="text-xs md:text-sm font-medium">Date/Duration</h3>
            <p className="text-xs opacity-80">Anytime/3 Days</p>
          </div>

          <Separator variant="tertiary" orientation="vertical" />

          <div className="py-2">
            <h3 className="text-xs md:text-sm font-medium">Budget</h3>
            <p className="text-xs opacity-80">$0-$3000</p>
          </div>

          <Separator variant="tertiary" orientation="vertical" />

          <div className="py-2">
            <h3 className="text-xs md:text-sm font-medium">People</h3>
            <p className="text-xs opacity-80">5-10</p>
          </div>

          <div className="bg-cyan-500 py-2 md:py-4 px-4 md:px-6 cursor-pointer shrink-0">
            <h3 className="text-sm md:text-base">Search</h3>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Banner;