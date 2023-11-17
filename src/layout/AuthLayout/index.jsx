import { Link } from "react-router-dom";
import { useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import Logo from "../../assets/img/logo2.png";
import BackgroundImage from "../../assets/img/statment_bg.png";
import Grid from "@mui/material/Grid";

const AuthLayout = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  

  return (
    <>
      <div className="container center-body grid lg:grid-cols-2 min-h-screen w-full">
        <Grid item xs={6} className="center-body">
          <div>
            <section>
              <img
                src={Logo}
                alt="Providus Bank Logo"
                className="w-[120px] h-[50px]"
              />
            </section>
            <section>
              <h1 className="text-3xl text-yellow-400 font-bold max-w-[70]">
                Bulk Lien / UnLien Portal
              </h1>
            </section>
           <Outlet />
          </div>
        </Grid>
        <Grid item xs={6}>
          {" "}
          <div
            className="bgImage lg:min-h-screen lg:bg-no-repeat lg:bg-left-bottom lg:bg-fixed"
            style={{ backgroundImage: `url(${BackgroundImage})` }}
          >
            b
          </div>
        </Grid>
      </div>
    </>
  );
};

export default AuthLayout;
