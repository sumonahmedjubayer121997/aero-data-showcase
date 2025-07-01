
import { useState } from "react";

const ConsentBanner = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex-1">
            <p className="text-sm text-gray-700">
              By clicking "Accept All Cookies", you agree to the storing of cookies on your device to enhance site navigation, analyze site usage, 
              and assist in our marketing efforts. View our{" "}
              <a href="#" className="text-blue-600 hover:text-blue-800 underline">
                Privacy Policy
              </a>{" "}
              for more information.
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <button 
              onClick={() => setIsVisible(false)}
              className="px-4 py-2 text-sm text-gray-600 hover:text-gray-800 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
            >
              Preferences
            </button>
            <button 
              onClick={() => setIsVisible(false)}
              className="px-4 py-2 text-sm text-gray-600 hover:text-gray-800 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
            >
              Deny
            </button>
            <button 
              onClick={() => setIsVisible(false)}
              className="px-6 py-2 text-sm bg-lime-400 hover:bg-lime-500 text-black font-medium rounded-lg transition-colors"
            >
              Accept
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConsentBanner;
