import { ReactComponent as CLoudIcon } from "../../assets/svg/cloud.svg";
import { OutTable, ExcelRenderer } from "react-excel-renderer";
import axios from "axios";

const FileUpload = ({
  setState,
  setFiles,
  setUploadedFiles,
  setProgress,
  setRowsDatas,
}) => {
  const handleFIleUpload = (event) => {
    const file = event.target.files[0];
    if (!file) return;
    ExcelRenderer(file, (err, response) => {
      if (err) {
        console.log(err);
      } else {
        // setColsData(response.rows[0]);
        console.log({ response });
        const [headers, ...rest] = response.rows;
        const payloadKey = {
          reference: "refNumber",
          account: "accountNumber",
          lien_amount: "lienAmount",
        };
        const transform = rest.map((arr) => {
          const obj = {};
          arr.forEach((itm, idx) => {
            if (headers[idx].toLowerCase() === "name") return;
            obj[payloadKey[headers[idx].toLowerCase()]] = itm;
          });

          return obj;
        });

        setRowsDatas(transform);
      }
    });
    const fileName =
      file.name.length > 18
        ? `${file.name.substring(0, 18)}... .${file.name.split(".")[1]}`
        : file.name;
    // console.log({fileName})
    const _fd = new FormData();
    _fd.append("file", file);

    setFiles((prevS) => [
      ...prevS,
      {
        name: fileName,
        loading: 0,
      },
    ]);
    setProgress(true);

    axios
      .post("https://httpbin.org/post", _fd, {
        onUploadProgress: ({ loaded, total }) => {
          setFiles((prevS) => {
            const newFiles = [...prevS];
            newFiles[0].loading = Math.floor((loaded / total) * 100);
            return newFiles;
          });
          if (loaded === total) {
            const fileSize =
              total < 1024
                ? `${total} KB`
                : `${(loaded / (1024 * 1024)).toFixed(2)} MB`;
            setUploadedFiles((prevS) => [
              ...prevS,
              {
                name: fileName,
                size: fileSize,
              },
            ]);
            setFiles([]);
            setProgress(false);
            setState((prevS) => ({
              ...prevS,
              isLoaded: true,
              isLoading: true,
              submited: false,
            }));
          }
        },
      })
      .catch(console.error);
  };

  return (
    <>
      <div className="">
        <div className="w-2/6 mx-auto flex flex-col items-center justify-center p-10 border-2 border-dashed border-black">
          <div className="relative p-[10px] bg-black w-[45px] rounded-lg cursor-pointer">
            <CLoudIcon />
          </div>
          <p className="mt-2">Browse File to upload</p>
          <input
            type="file"
            name="file"
            className="absolute top-[30%] left-[50%] opacity-0 z-20 cursor-pointer"
            onChange={handleFIleUpload}
          />
        </div>
      </div>
    </>
  );
};

export default FileUpload;
