import { useState } from "react";
import { ReactComponent as FileIcon } from "../../assets/svg/file.svg";
import { useMutation } from "@tanstack/react-query";
import { validateLienFn } from "utils/ApiFactory/lien";
import { Encrypt, Decrypt } from "utils/EncryptDecrypt";
import { ReactComponent as CorrectIcon } from "../../assets/svg/arror-correct.svg";
import FileUpload from "../../components/FileUpload/FileUpload";
import BaseButton from "../../components/Button/BaseButton";
// import axios from "axios";
import BaseTable from "components/BaseTable";
import BatchSubmission from "components/BatchSubmissionModal";
import {
  ExcelColumns,
  EXCEL_DUMMY_DATA,
  ExcelValidateColumns,
  ExcelSheetColumns,
  rowStatusData,
} from "../../assets/data/data";

const UploadLien = () => {
  const [fileValue, setFileValue] = useState({
    isLoading: false,
    isLoaded: false,
    submited: false,
    validated: false,
    filesData: [],
  });

  const [files, setFiles] = useState([]);
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [progress, setProgress] = useState(false);
  const [rowsDatas, setRowsDatas] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [selectedRows, setSelectedRows] = useState([]);

  const callBackValidate = true;

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const rows = [...Array(2).keys()].map(() => EXCEL_DUMMY_DATA);

  const showBatchModal = () => {
    setOpenModal("batchAssign");
  };

  const approveLien = () => {
    const payload = {
      batchId: "batchId",
      comment: "comment",
      action: true,
      lienDataList: [
        {
          refNumber: "000000",
        },
      ],
      remainingLienDataList: [
        {
          refNumber: "000000",
        },
      ],
    };
  };

  const checboxOnChange = (data, all = "") => {
    if (all === "select-all") {
      return setSelectedRows(data);
    } else if (all === "clear-all") {
      return setSelectedRows([]);
    }
  };

  console.log("From Origin Value: ", fileValue);

  const first = () => {
    console.log("I am submitting now");
  };

  const validateAccNumFn = async () => {
    setFileValue((prevS) => ({
      ...prevS,
      validated: true,
    }));
    const payload = {
      batchId: Date.now(),
      list: rowsDatas,
    };

    const encryptedCredentials = await Encrypt(payload)

    console.log({payload, encryptedCredentials})
  };

  console.log({ fileValue });

  console.log({ rowsDatas });

  return (
    <>
      <div className="container">
        <p className="relative text-3xl font-medium text-center">
          Bulk Lien Upload
        </p>
        <form>
          <section className="">
            <div className="">
              <FileUpload
                setState={setFileValue}
                setFiles={setFiles}
                setUploadedFiles={setUploadedFiles}
                setProgress={setProgress}
                setRowsDatas={setRowsDatas}
              />
              <div className="w-0.5/5 absolute top-[15%] right-20">
                <div
                  className={`ml-5 p-[16px_20px] bg-transparent rounded-[10px] shadow-[0px_4px_17px_4px_rgba(0,0,0,0.10)] font-medium`}
                >
                  {true ? `USED RATE : ₦${"400"}` : `FX RATE: ₦ --.--`}
                </div>
              </div>
            </div>

            {progress && (
              <div>
                {files.map((file, idx) => (
                  <section
                    className="w-2/6 mx-auto p-1 bg-black text-white grid grid-cols-[50px_auto] items-center space-y-1"
                    key={idx}
                  >
                    <div className="col-span-1 row-span-3 ml-[10px]">
                      <FileIcon className="scale-150" />
                    </div>
                    <div className="flex items-center justify-between px-2">
                      <div>
                        <p>{`${file.name} - uploading`}</p>
                      </div>
                      <div>
                        <p className="text-sm">{`${file.loading}%`}</p>
                      </div>
                    </div>
                    <div className="flex items-start px-2 pb-2 pt-2">
                      <progress
                        className="h-[5px] w-full"
                        max="100"
                        value={`${file.loading}`}
                      ></progress>
                    </div>
                  </section>
                ))}
              </div>
            )}

            {uploadedFiles.map((file, idx) => (
              <section
                className="w-2/6 mx-auto p-1 bg-black text-white grid grid-cols-[50px_auto] items-center space-y-1"
                key={idx}
              >
                <div className="col-span-1 row-span-3 ml-[10px]">
                  <FileIcon className="scale-150" />
                </div>
                <div className="flex items-center justify-between px-2">
                  <div>
                    <p>{file.name}</p>
                  </div>
                  <div>
                    <CorrectIcon className="scale-150" />
                  </div>
                </div>
                <div className="flex items-start px-2 pb-2 pt-2">
                  <p className="text-sm">{file.size}</p>
                </div>
              </section>
            ))}

            <BatchSubmission
              open={openModal === "batchAssign"}
              // batchRows={selectedRows}
              handleClose={() => setOpenModal("")}
              // requestId={selectedRows.map(({ requestId }) => requestId)}
            />

            {uploadedFiles.length > 0 && (
              <BaseTable
                // rows={rowsDatas || []}
                rows={fileValue.validated ? rowStatusData : rowsDatas || []}
                columns={
                  fileValue.validated ? ExcelValidateColumns : ExcelSheetColumns
                }
                // columns={ExcelColumns}
                page={page}
                setPage={setPage}
                rowsPerPage={rowsPerPage}
                setRowsPerPage={setRowsPerPage}
                // submited={false}
                showCheck={fileValue.validated}
              />
            )}

            {fileValue.isLoaded && (
              <BaseButton
                customStyle="w-[150px] inline-block rounded-[10px] ml-auto h-[48px]"
                variant="primary"
                isLoading={false}
                // type="submit"
                onClick={fileValue.validated ? showBatchModal : validateAccNumFn}
              >
                {fileValue.validated ? "Submit" : "Validate"}
              </BaseButton>
            )}
          </section>
        </form>
      </div>
    </>
  );
};

export default UploadLien;
