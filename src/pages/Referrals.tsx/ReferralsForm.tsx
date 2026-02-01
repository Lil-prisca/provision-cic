const ReferralsForm = () => {
  return (
    <div className="min-h-screen bg-[#F5F6F7] flex justify-center !py-[40px] !px-4">
      <div className="w-full max-w-[420px] bg-white border-[#1b1a1a] rounded-[6px] !px-[20px] !py-[24px]">
        {/* Title */}
        <h2 className="text-[14px] font-semibold text-center mb-[8px]">
          Please complete the form below to help us guide you better.
        </h2>

        <hr className="!my-[16px]" />

        {/* Section */}
        <p className="text-[12px] font-medium !mb-[10px]">
          Your personal details
        </p>

        {/* Full Name */}
        <div className="!mb-[16px]">
          <label className="text-[12px] block !mb-[4px]">Full Name</label>
          <div className="relative  w-full ">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full !mt-[5px]  border shadow-[0_0_6px_rgba(0,0,0,0.5)] rounded-[6px] border-gray-300  !px-[10px] outline-none !py-[10px]"
            />
            <span className="absolute right-[10px] top-1/3 translate-y-1/2text-gray-400">
              👤
            </span>
          </div>
        </div>

        {/* Date of Birth */}
        <div className="!mb-[16px]">
          <label className="text-[12px] block !mb-[4px]">Date Of Birth</label>
          <div className="relative w-full">
            <input
              type="text"
              placeholder="DD/MM/YYYY"
              className="w-full !mt-[5px]  border shadow-[0_0_6px_rgba(0,0,0,0.5)] rounded-[6px] border-gray-300  !px-[10px] outline-none !py-[10px]"
            />
            <span className="absolute right-[10px] top-1/2 -translate-y-1/2 text-gray-400">
              📅
            </span>
          </div>
        </div>

        {/* Sex at Birth */}
        <div className="!mb-[20px]">
          <label className="text-[12px] block !mb-[4px]">Sex at Birth</label>
          <select className="w-full !mt-[5px]  border shadow-[0_0_6px_rgba(0,0,0,0.5)] rounded-[6px] border-gray-300  !px-[10px] outline-none !py-[10px]">
            <option>Female</option>
            <option>Male</option>
            <option>Other</option>
          </select>
        </div>

        <hr className="!my-[10px]" />

        {/* Healthcare */}
        <p className="text-[12px] font-medium !mb-[6px]">
          Healthcare service details
        </p>

        <p className="text-[11px] text-gray-500 !mb-[12px]">
          Do you have a registered healthcare provider?
        </p>

        <select className="w-full !mt-[5px]  border shadow-[0_0_6px_rgba(0,0,0,0.5)] rounded-[6px] border-gray-300  !px-[10px] outline-none !py-[10px]">
          <option>Yes</option>
          <option>No</option>
        </select>

        {/* Support Needs */}
        <p className="text-[12px] font-medium !mb-[6px]">
          How can we support you?
        </p>

        <textarea
          placeholder="Please describe your needs"
          className="w-full !mt-[5px]  border shadow-[0_0_6px_rgba(0,0,0,0.5)]
rounded-[6px] border-gray-300  !px-[10px] outline-none !py-[10px]"
        />

        {/* Emergency Support */}
        <p className="text-[12px] font-medium !mb-[6px]">
          Do you need emergency support?
        </p>

        <div className="flex gap-[20px] !mb-[20px]">
          <label className="flex items-center gap-[6px] text-[13px]">
            <input type="radio" name="emergency" /> Yes
          </label>
          <label className="flex items-center gap-[6px] text-[13px]">
            <input type="radio" name="emergency" /> No
          </label>
        </div>

        {/* Button */}
        <button className="w-full bg-[#2F6FED] text-white !py-[12px]  text-[14px] w-full !mt-[5px]  border shadow-[0_0_6px_rgba(0,0,0,0.5)] rounded-[6px] border-gray-300  !px-[10px] outline-none !py-[10px]">
          Continue
        </button>
      </div>
    </div>
  );
};

export default ReferralsForm;
