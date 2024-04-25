import { useEffect } from "react";

export default function PageTitle({ title }) {
  useEffect(() => {
    document.title = `${title} - Sri Shikharji`;
    return () => {
      document.title = "Sri shikharji";
    };
  }, [title]);
  return null;
}
