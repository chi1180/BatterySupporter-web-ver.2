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
        href={
          "https://storm-balaur-bab.notion.site/Privacy-policy-17906429d04e80c080b1c156800970f0?pvs=4"
        }
        target={"_blank"}
        className={"hover:font-bold"}
      >
        Privacy policy
      </Link>
      <Link
        href={
          "https://storm-balaur-bab.notion.site/User-agreement-b6e393a12a334f729207f0c2450b7d29?pvs=4"
        }
        target={"_blank"}
        className={"hover:font-bold"}
      >
        User agreement
      </Link>
    </>
  );
}
