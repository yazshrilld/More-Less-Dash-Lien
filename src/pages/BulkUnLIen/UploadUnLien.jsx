import FileUpload from "../../components/FileUpload/FileUpload";
import BaseButton from "../../components/Button/BaseButton";
import { useState } from "react";

const UploadUnLien = () => {
  const [fileValue, setFileValue] = useState({
    isLoading: false,
    isLoaded: false,
    filesData: [],
  });
console.log({fileValue})
  return (
    <>
      <div className="container">
        <p className="relative text-3xl font-medium text-center">
          Bulk UnLien Upload
        </p>
        <form>
          <section>
            <div>
              <FileUpload setState={setFileValue} />
              {/* <div className="w-0.5/5 absolute top-[15%] right-20">
              <div
                className={`ml-5 p-[16px_20px] bg-transparent rounded-[10px] shadow-[0px_4px_17px_4px_rgba(0,0,0,0.10)] font-medium`}
              >
                {true ? `USED RATE : ₦${"400"}` : `FX RATE: ₦ --.--`}
              </div>
            </div> */}
            </div>
            {fileValue.isLoaded && (
              <BaseButton
                customStyle="w-[150px] inline-block rounded-[10px] ml-auto h-[48px]"
                variant="primary"
                isLoading={false}
                // type="submit"
              >
                Submit
              </BaseButton>
            )}
          </section>
        </form>
      </div>
    </>
  );
};

export default UploadUnLien;
