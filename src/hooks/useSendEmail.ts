import emailjs from "@emailjs/browser";

export interface FormData {
  name: string;
  phone_number: string;
  service: string;
}

export function useSendEmail() {
  const onSubmit = (data: FormData, event?: React.BaseSyntheticEvent) => {
    if (event) {
      event.preventDefault();

      emailjs
        .sendForm(
          process.env.SERVICE_ID!,
          process.env.TEMPLATE_ID!,
          event.target,
          process.env.PUBLIC_ID!
        )
        .then(() => {
          console.log("aaa");
        });
    }
  };
}
