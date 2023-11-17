import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { tokenFn } from "utils/ApiFactory/auth";
import { Encrypt, Decrypt } from "utils/EncryptDecrypt";
import BaseButton from "../../components/Button/BaseButton";
import ReactOTP from "../../components/otp";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

const Token = () => {
  const navigate = useNavigate();
  let [searchParams, setSearchParams] = useSearchParams();
  const userName = searchParams.get("uName");
  const userId = atob(userName);
  const [snackBar, setSnackBar] = useState({
    open: false,
    severity: "success",
    message: "",
  });

  const handleOtpVerify = async () => {
    const otpCredentials = {
      username: userId,
      userToken: otp,
    };

    const encryptedCredentials = await Encrypt(otpCredentials);
    console.log({ encryptedCredentials });
    const myDecrypt = await Decrypt("99618f82044090df0c844e0ed8d59c6cd4895146cd815c55a54d13a8eb94accb150346cd601adca006ab6d05183f8f44")
    console.log({ encryptedCredentials, myDecrypt });
    token(encryptedCredentials)
  };

  const { mutate: token, isLoading: TLoading } = useMutation({
    mutationKey: ["token-fn"],
    mutationFn: tokenFn,
    onSuccess: (data) => {
        console.log({data})
    },
    onError: (error) => {
        console.log({error})
    }
  })

  const [otp, setOtp] = useState("");

  const handleClose = () => {
    setSnackBar((prevS) => ({
      ...prevS,
      open: false,
    }));
  };

  const showToast = ({ severity, message }) => {
    setSnackBar({
      open: true,
      severity,
      message,
    });
  };

  return (
    <>
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        open={snackBar.open}
        autoHideDuration={6000}
        onClose={handleClose}
      >
        <Alert
          onClose={handleClose}
          severity={snackBar.severity}
          sx={{ width: "100%" }}
        >
          {snackBar.message}
        </Alert>
      </Snackbar>

      <section className="text-[#C2C2C2] text-sm mb-6">
        An OTP has been sent to you
      </section>

      <section className="mb-4">
        <ReactOTP
          value={otp}
          onChange={setOtp}
          numInputs={8}
          shouldAutoFocus
          containerStyle="space-x-4 mb-[70px] w-fit mx-auto"
          inputStyle="w-[35px!important] h-[50px] bg-[#F8F8F8] p-0 rounded outline-[none] border-none focus:outline-none font-semibold shadow-[0px_4px_17px_4px_rgba(0,0,0,0.10)]"
          renderInput={(props) => <input {...props} />}
        />

        <BaseButton
          customStyle="w-full"
          disabled={otp.length < 8}
          variant="gradient"
          handleClick={handleOtpVerify}
          isLoading={TLoading}
        >
          Verify
        </BaseButton>
      </section>
    </>
  );
};

export default Token;
