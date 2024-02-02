import emailjs from "@emailjs/browser";
import { useDispatch } from "react-redux";
import { toggleOnModal } from "../redux/modalSlice";

function useSendEmail() {
  const dispatch = useDispatch();
  const onSubmit = (formData, event) => {
    event.preventDefault();

    console.log("Sending email with the following data:", formData);

    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        event.target,
        process.env.REACT_APP_PUBLIC_ID
      )
      .then((result) => {
        console.log("Email successfully sent!", result);
        dispatch(toggleOnModal());
      })
      .catch((error) => {
        console.error("Failed to send email:", error);
      });
  };

  return { onSubmit };
}

export default useSendEmail;
