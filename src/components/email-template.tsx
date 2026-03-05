import * as React from "react";

interface EmailTemplateProps {
  fullName: string;
  email: string;
  message: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  fullName,
  email,
  message,
}) => (
  <div>
    <h1>De: {fullName}!</h1>
    <div className="text-red-500">{email} enviou uma mensagem.</div>
    <blockquote>{message}</blockquote>
  </div>
);
