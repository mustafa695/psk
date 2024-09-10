import React, { useState } from "react";
import {
  Header,
  Toggle,
  Loader,
  UploadGarment,
  RecentSearch,
  GenerateImages,
} from "@components";
import { Images } from "@constant";
import { ExclaimIcon, MagicIcon } from "@constant/icons/icon";

const Home = () => {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [generateImage, setGenerateImage] = useState(false);

  const handleGenerateImage = () => {
    if (!file) return alert("Please select a file.");
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setGenerateImage(true);
    }, 3000);
  };

  const dummyDesc = `Create an image of a male model wearing a tucked-in, slim-fit white dress shirt. The shirt should have long sleeves, rolled up to the elbows, and be paired with navy blue chinos. The model should have a clean, modern look, standing in a casual pose with one hand in his pocket. The background should be simple, like a plain white wall, to keep the focus on the outfit.`;
  return (
    <>
      <Header />
      {loading && <Loader />}
      {!generateImage ? (
        <>
          <div className="mt-4 relative z-10 2xl:w-3/5 max-w-[824px] w-4/5 mx-auto">
            <div className="flex flex-col items-center sm:bg-transparent bg-white card-shadow sm:p-0 p-6 sm:rounded-none rounded-xl">
              <div>
                <h1 className="font-nunito text-black sm:pt-10 pt-3 sm:text-[60px] text-xl sm:font-extrabold font-medium text-center sm:leading-[60px]">
                  Create Stock Images FAST
                </h1>
                <UploadGarment
                  handleFile={(e) => setFile(e.target?.files[0])}
                />
                {/* Background Remover  */}
                <div className="flex flex-col mt-4">
                  <Toggle label="Background Remover" />
                </div>
                {/* Generative Prompt  */}
                <div className="mt-8">
                  <h2 className="text-black sm:text-xl text-sm pb-1">
                    Generative Prompt
                  </h2>
                  <div className="bg-[#F3F4F6] sm:py-6 py-3 sm:px-5 px-4 rounded-md mb-4">
                    <p className="sm:text-base text-xs italic font-normal text-[#6B778C]">
                      {dummyDesc}
                    </p>
                  </div>
                  <div className="flex gap-3 items-center">
                    <ExclaimIcon />
                    <p className="text-black/50 sm:text-sm text-[10px]">
                      For best results, prompts should be as detailed as
                      possible.
                    </p>
                  </div>
                </div>

                {/* Recent Searches  */}
                <RecentSearch />

                <div className="flex justify-center mt-12 mb-10 relative">
                  <button
                    type="button"
                    onClick={handleGenerateImage}
                    className="bg-theme-100 rounded py-2.5 px-5 sm:text-lg text-sm flex items-center gap-2 text-white"
                  >
                    <MagicIcon />
                    Generate Image
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* bottom gradient */}
          <div className="fixed bottom-0 right-0 -z-1">
            <img
              src={Images.Ellipse}
              className="w-[500px] h-[500px]"
              alt="ellipse"
            />
          </div>
        </>
      ) : (
        <GenerateImages
          images={file}
          handleRegenerateImage={() => setGenerateImage(false)}
        />
      )}
    </>
  );
};

export default Home;
