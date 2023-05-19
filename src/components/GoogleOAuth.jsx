import React from "react";
import { Button } from "react-bootstrap";
import axios from "axios";
import { toast } from "react-toastify";
import { useGoogleLogin } from "@react-oauth/google"

function GoogleOAuth({buttonText}){
    const registerLoginWithGoogleAction = async (accessToken) => {
    try {
      let data = JSON.stringify({
        access_token: accessToken,
      });

      let config = {
        method: "post",
        maxBodyLength: Infinity,
        url: "https://km4-challenge-5-api.up.railway.app/api/v1/auth/google",
        headers: {
          "Content-Type": "application/json",
        },
        data: data,
      };

      const response = await axios.request(config);
      const { token } = response.data.data;

      localStorage.setItem("token", token);
      window.location.href = "/";

    } catch (error) {
      if (axios.isAxiosError(error)) {
        toast.error(error.response.data.message);
        return;
      }
      toast.error(error.message);
    }
  };

  const google = useGoogleLogin({
    onSuccess: (responseGoogle) =>
      registerLoginWithGoogleAction(responseGoogle.access_token),
  });

  return (
    <div>
      <span>
        <Button variant="outline-danger" onClick={() => google()}>
          <img
            alt=""
            src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-suite-everything-you-need-know-about-google-newest-0.png"
            width="17"
            style={{ marginRight: 8+ "px" , marginBottom: 4+ "px" }}
          />
          {buttonText}
        </Button>
      </span>
    </div>
  );
}

export default GoogleOAuth;