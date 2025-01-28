import Link from "next/link";

export default function LinkList() {
  return (
    <>
      <Link
        href={"https://chi1180.github.io/BatterySupporter-homepage/"}
        target={"_blank"}
        className={"hover:font-bold"}
      >
        Web site
      </Link>
      <Link
        href={
          "https://chi1180.github.io/BatterySupporter-documentation/starter.html"
        }
        target={"_blank"}
        className={"hover:font-bold"}
      >
        Documentation
      </Link>
      <Link
        href={"./pages/privacy-policy"}
        target={"_blank"}
        className={"hover:font-bold"}
      >
        Privacy policy
      </Link>
      <Link
        href={"./pages/user-agreement"}
        target={"_blank"}
        className={"hover:font-bold"}
      >
        User agreement
      </Link>
    </>
  );
}
