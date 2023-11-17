import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { providusLoginFn } from "../../utils/ApiFactory/auth";
import { useFormik } from "formik";
import { LoginSchema } from "../../utils/Yup/YupSchemas";
import { ReactComponent as EyeClosedIcon } from "../../assets/svg/eye-closed.svg";
import { ReactComponent as EyeOpenIcon } from "../../assets/svg/eye-open.svg";
import { Encrypt, Decrypt } from "../../utils/EncryptDecrypt";
import InputField from "../../components/InputField/InputField";
import BaseButton from "../../components/Button/BaseButton";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

const SignIn = () => {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [snackBar, setSnackBar] = useState({
    open: false,
    severity: "success",
    message: "",
  });

  const handleEyeOpenEyeClose = () => {
    setShowPassword((prevS) => !prevS);
  };

  const handleSubmit = async (values) => {
    const loginCredentials = {
      username: values.username,
      password: values.password,
    };
    const encryptedCredentials = await Encrypt(loginCredentials);
    const myDecrypt_1 = await Decrypt(
      "1261d6ed5e3d490f9d4a099f11cfee9690eb0ae42baf8e97ebdb7be323aa0e7302ffbbc5e7b007332e558883c22bb8085f09aa182175c5480563f8eb6c4c4000909ba29e311dec2f86fef7f5e655aa2eea121c9b81e01dd03f9dfcbd774a63c26e77b4693df1f63674bd0754c7c82ac4492643728613684c7a69b7398cb638ae2175ce3efd779e4c60b22e72527b52d277ae35938aff64c3ed63e93f11077d045cc82bea047386d0fab97e615a69f0368c72e7a05eb204211794ad51ac2db3e3e6f2ce64c44e0eea0d700f2bc5bbcdcbc28195b721d399e438c2d865cecc10d990e1cf5c04706038609ce552601f0bdfa46c5d6de9f83b356f4be429d2c0091e0a1b9721f981add16b75f628ef161b07bb180dfa8dc0e0401bb0e083eb19cf79e5b7aca32eeddd9218ecbaf19cd7387550d9fcd8b8f60a82dd0236650e12086c3dacdbc054ef8673638aa777c73778204a6455506d9ef1b63e3d095c471a308259db8108b055c86e4d363394890c2f8f47bc22584c33a602764675082fd1baad5e16b6cf859cc4df5b0ace0b24b5c06357974cd58512e46e192b7b6b959581eeecd4cd5d0fc06bf41531f0b5e5f192b08967b3f90a4d615b27eb9fe0f43b07f3e350556433d4cf2ecfda9d8b015c5b04c5059205391201b682a9354162da36da12fbdfe54a92bd4e3f8d93b6bbb3cdc6107ec3c7f621217b8fdbb8c123d0cbe59029d55724bcca32f9173a1f186f4fbd40be2569cba90c859e72003cb9982507350c413197bcbc1b0f633b8b82242b9d7c9363ba94452f62949a7f2524771d27138095c071922f5db6ad9f5b8e95fabd1f6823ae5f611e4c2b291e3bbd91a99fab8a17be05cd88b2cb348d6694405f33b5083c12d339847415e41c98700026209820ad3821c2472c1dca5ba8de418b3c9d5601eab40544d3fea3447dbe0de41701a1ae712beb04771b5136feb32d7850adb29671050320e1dfb2f6c423a559af123a72fce633e8cfa38aa08784dc8fa393425181bede5dd926d25b0b96aaec2a74839bd8a818cb571f977419c8ff225d348b178aab0673958b55e14542ecd6b1c1319a830e43663b9247fe5a5af3bb2180e2e4753eb04786f273bdb351a70f7ebfa3f2560292578ad7bddc8f0debf57c1014647b5476688ffc1ace9d15eb65e7c1407599b3884cb9d4018dd792ea2b7640419cdc410bb691481895e064f7a9b4b4d22896a86a89b10520ea757c70516ac4da1c1be5c2c90aec5030a82cee7ee8d2576a88999c0aab7a527deb998a75dfa7027082e372b70d19c39a55b67ab4adbeff6903bfb453a43fda8f04017047214ec4b05dcf7adc452b26ef91100e7b9c578390a42c2dc1c9b6c57373d86694f93801c05e150e880154b1b615cd778e76da25cacd804ca382d69197a0fbc102c0cafa657302f5d845961fbac6400b1199940ee0433a7201991343cfb26c120f748c05e68cc94a9d6a5342487f5fcbc14571323584792ddd6356b27265832eb713134c9a6e50af3447b34e41e736960859fc5ed7977aaa19f2454cfedfe0986dbb8f1e8de26fc09e791d2203de31c488b361d71de648b59f56bf7ed4dcdd0a977a7c0057df5b499cd6a69ea87f655311b4b313355e70f456383e504346b1e327568606d7bd95e1fc100ad1158bd4ab650b16f4724b40ebbad8da251d5097d663b974aa5319d4548c9f79686e672d7582b160c825c2ab5ec9a8c80ca8656594afb1a1fbe6b763070e8d55c5ffd179de1bf197b77237f474fa926e024ae52232821596c3a51a1848b18aca31db4b72f378e8e73a3258901f0a490c7dcd43cffdb52dc0c65d031571458de07bfac6baea733689d41008f20a50a1a5ef20d3e7afd8cdb4b4f0467483b178554736505431a60e2389b938c377f4369508cd361461c9585ed0075e1bc362f33f0030399585f45aeb51de5a32e8178a5c615b585ed62b803ba6fbf61f55af4e17178fc3170108b7bbf5383b8778f21e02c05beb3e104a654302ba635251fd3c79006603f0d7249bfe2456404be86d8e771b80b0e502253cbb411e1a4072a9952a83b790f6be9d2763719eabc7234a66a667a9181f8d18d67fd6c548c295ca1e3eb02057e95333f6811c07d31ea41fb59014243940ef41f648d663b211d4d58dfa5c4aaad77aaa397221b62e0a2c2cf81a90dc5fd0edd46e616f9c724d26cc2c6dbbadb466e1f5fa"
    );
    const myDecrypt_2 = await Decrypt(
      "99618f82044090df0c844e0ed8d59c6c1399018a7845a41b7e2fd03c2846ba2a7d759b1bc8307dd93431886b08210096ff93f5386c092291f85c7d919cddecbc"
    );
    console.log("Encrypted: ", encryptedCredentials);
    login(encryptedCredentials);
    console.log("Parse Data: ", JSON.parse(myDecrypt_1));
    console.log("myDecrypt_2: ", JSON.parse(myDecrypt_2));
  };

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: LoginSchema,
    onSubmit: handleSubmit,
  });

  const { mutate: login, isLoading: PLoading } = useMutation({
    mutationKey: ["login-fn"],
    mutationFn: providusLoginFn,
    onSuccess: (data) => {
      console.log("From Data: ", data);
      if (data.data.statusCode === 401) {
        navigate(`/auth/sign-in`);
        showToast({
          severity: "error",
          message: "You are not authorized for this service",
        });
      } else if (data.data.status === true) {
        // navigate(`/auth/otp?uName=${btoa(userName)}`);
        navigate(`/app/dashboard`);
      }
    },
    onError: (error) => {
      console.log("From Error: ", error);
      showToast({
        severity: "error",
        message: error.response.data.detail || "An error occurred.",
      });
    },
  });

  const userName = formik.values.username;

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

  console.log("Input: ", formik.values);

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
      <section>
        <p className="text-lg text-black font-light">
          Enter your Ad credentials to sign in
        </p>
      </section>
      <form onSubmit={formik.handleSubmit}>
        <section>
          <InputField
            type="text"
            label="Username"
            placeholder="Username"
            name="username"
            value={formik.values.username}
            onChange={formik.handleChange}
            touched={formik.touched.username}
            error={formik.errors.username}
          />
        </section>
        <section>
          <InputField
            label="Password"
            placeholder="*****"
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            touched={formik.touched.password}
            error={formik.errors.password}
            type={showPassword ? "text" : "password"}
            appendIcon={
              showPassword ? (
                <EyeOpenIcon
                  className="absolute right-2 cursor-pointer w-5 h-5 select-none"
                  onClick={handleEyeOpenEyeClose}
                />
              ) : (
                <EyeClosedIcon
                  className="absolute right-2 cursor-pointer w-5 h-5 select-none"
                  onClick={handleEyeOpenEyeClose}
                />
              )
            }
          />
        </section>
        <section>
          <BaseButton
            type="submit"
            customStyle="w-full"
            variant="gradient"
            isLoading={PLoading}
          >
            Sign In
          </BaseButton>
        </section>
      </form>
    </>
  );
};

export default SignIn;
