import { Helmet } from "react-helmet-async";

export const Meta = ({ title }: { title: string }) => {
  return (
    <Helmet>
      <meta charSet="utf-8" />
      <title>{title}</title>
    </Helmet>
  );
};
