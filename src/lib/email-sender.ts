import emailjs from "@emailjs/browser";

export default function emailSender(message: string) {
  const template_params = {
    message: message
  }
  emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "");
  emailjs.send(process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "", process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "", template_params).then(() => {
    alert("送信が完了しました。\n\n有難うございます。");
  });
}

