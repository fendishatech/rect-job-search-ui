const Values = () => {
  return (
    <section className="mt-[6rem] mb-[4rem]">
      <h1 className="text-textColor text-[25px] py-[2rem] pb-[3rem] font-bold w-[400px] block">
        The values that holds us true and to account
      </h1>
      <div className="grid gap-[10rem] grid-cols-3 items-center">
        <div className="rounded-[10px] hover:bg-[#eeedf7] p-[1.5rem]">
          <div className="flex items-center gap-3 ">
            <div className="img p-[4px] rounded-[.8rem] bg-inherit-[#dedef8] h-[40px] w-[40px] flex items-center justify-center">
              <img
                src="https://images.ctfassets.net/4cd45et68cgf/Rx83JoRDMkYNlMC9MKzcB/2b14d5a59fc3937afd3f03191e19502d/Netflix-Symbol.png?w=700&h=456"
                alt=""
                className="w-[70%]"
              />
            </div>
            <span className="font-semibold text-textColor text-[18px]">
              Simplicity
            </span>
          </div>
          <p className="text-[16px] text-textColor opacity-[.7]">
            Things made beautiful simpl are at the heart of everything.
          </p>
        </div>

        <div className="rounded-[10px] hover:bg-[#eeedf7] p-[1.5rem]">
          <div className="flex items-center gap-3 ">
            <div className="img p-[4px] rounded-[.8rem] bg-inherit-[#dedef8] h-[40px] w-[40px] flex items-center justify-center">
              <img
                src="https://images.ctfassets.net/4cd45et68cgf/Rx83JoRDMkYNlMC9MKzcB/2b14d5a59fc3937afd3f03191e19502d/Netflix-Symbol.png?w=700&h=456"
                alt=""
                className="w-[70%]"
              />
            </div>
            <span className="font-semibold text-textColor text-[18px]">
              Simplicity
            </span>
          </div>
          <p className="text-[16px] text-textColor opacity-[.7]">
            Things made beautiful simpl are at the heart of everything.
          </p>
        </div>

        <div className="rounded-[10px] hover:bg-[#eeedf7] p-[1.5rem]">
          <div className="flex items-center gap-3 ">
            <div className="img p-[4px] rounded-[.8rem] bg-inherit-[#dedef8] h-[40px] w-[40px] flex items-center justify-center">
              <img
                src="https://images.ctfassets.net/4cd45et68cgf/Rx83JoRDMkYNlMC9MKzcB/2b14d5a59fc3937afd3f03191e19502d/Netflix-Symbol.png?w=700&h=456"
                alt=""
                className="w-[70%]"
              />
            </div>
            <span className="font-semibold text-textColor text-[18px]">
              Simplicity
            </span>
          </div>
          <p className="text-[16px] text-textColor opacity-[.7]">
            Things made beautiful simpl are at the heart of everything.
          </p>
        </div>
      </div>
      {/* cta section */}
      <div className="mt-[2rem] flex justify-between bg-slate-300 p-[5rem] rounded-[10px]">
        <div>
          <h1 className="text-white text-[30px] font-bold">
            Ready to get started ?
          </h1>
          <h2 className="text-textColor text-[25px] font-bold">
            Lets get started here
          </h2>
        </div>
        <button className="border-[2px] border-blueColor rounded-[10px] px-[50px] py-[4px] text-[18px] font-semibold text-blueColor hover:bg-blueColor hover:text-white">
          Get Started
        </button>
      </div>
    </section>
  );
};

export default Values;
