import Link from "next/link";
import { Props } from "next/script";
import { ReactNode } from "react";
type props = { content: ReactNode; title?: string };

export default function Page() {
  return (
    <div className="w-full">
      <header className="w-full h-24 pl-16 ml-8 my-4 bg-secondary-color rounded-l-full flex items-center">
        <h1 className="text-4xl">User agreement</h1>
      </header>

      <main className="w-full h-[calc(100vh-8rem)] p-12 overflow-auto">
        <Block
          title="1. 利用規約に対する同意"
          content={
            <p>
              BatterySupporter（以下、「当サイト」といいます）を利用するユーザー様には、この利用規約（以下、「当規約」といいます）のすべてを読んだ上で、すべての条項に同意していただく必要があります。
            </p>
          }
        />
        <Block
          title="2. 用語の定義・説明"
          content={
            <p>
              - Google tasks:
              <br />
              Google が提供するタスク管理サービスです。
              <br />
              URL :{" "}
              <Link
                href={"https://calendar.google.com/calendar/u/0/r/tasks?pli=1"}
                className="text-link-color"
              >
                https://calendar.google.com/calendar/u/0/r/tasks?pli=1
              </Link>
            </p>
          }
        />
        <Block
          title="3. サービスの詳細"
          content={
            <p>
              当サイトでは、ユーザー様のグーグルアカウントと連携することで、ユーザー様のGoogle
              Tasksのデータを取得し、そのデータと、ユーザー様が使用しているデバイスのバッテリの状況を監視することで、ユーザー様に対して、デバイスの使用におけるアドバイスを提供します。
            </p>
          }
        />
        <Block
          title="4. 規約変更手続きの詳細"
          content={
            <p>
              将来的な各種事情の変化により、当規約を変更する必要が発生する可能性があります。
              <br />
              当規約を変更する際には、当サイトにて変更のお知らせを行います。
              <br />
              当規約についての何らかの変更が発生した場合、ユーザー様には改めて当規約の内容を確認していただき、引き続き当サイトのサービスをご利用になる場合は、当規約に同意していただく必要があります。
            </p>
          }
        />
        <Block
          title="5. サービス内容に関する各種権利の帰属"
          content={
            <p>
              当サイトで提供するサービスにおいて、ユーザー様から取得するデータ（主にGoogle
              Tasksのデータ）における著作権については、その権利の帰属をユーザー様本人に留保します。
            </p>
          }
        />
        <Block
          title="6. 禁止事項"
          content={
            <p>
              当サイトでの、以下の行為を禁止させていただきます。
              <br />
              <br />
              1. 日本の法律に反する行為
              <br />
              2. 他人のグーグルアカウントを使用してのログイン
            </p>
          }
        />
        <Block
          title="7. 罰則"
          content={
            <p>
              当サイトを利用するユーザー様において、当規約に定める禁止事項に該当する行為がある場合、以下の罰則を科します。
              <br />
              <br />
              1. 当サイトからのアカウントの削除
            </p>
          }
        />
        <Block
          title="8. サービスの停止・終了に関する事項"
          content={
            <p>
              当サイトを管理する私（以下、「当方」といいます）の事情により、将来において当サイトにて提供されるサービスの停止、もしくは終了を行う場合があります。
              <br />
              <br />
              当サイトにて提供するサービスを停止または終了する場合には、そのサービスの停止または終了日の１ヶ月前に、当サイトにてそのサービスの停止もしくは終了の旨をお知らせします。
            </p>
          }
        />
        <Block
          title="9. 損害賠償に関する事項"
          content={
            <p>
              当サイトが提供するサービスをユーザー様に使用していただく中で、当サイトが提供するサービスにおいてユーザー様に対して損害が発生し、それが故意または重過失である場合には、当方は損害賠償の責任を負います。
            </p>
          }
        />
        <Block
          title="10. サービスの解約に関する事項"
          content={
            <p>
              当サイトが提供するサービスを使用するにあたって、ユーザー様は当規約に定める禁止事項に該当する行為を行わない限り、ご本人の判断で、サービスを使用することが可能です。
              <br />
              <br />
              当サイトが提供するサービスを使用するにあたって、ユーザー様が当規約に定める禁止事項に該当する行為を行った場合、当規約で定める罰則を科し、ユーザー様に対して、当サイトが提供するサービスの使用を禁止します。
            </p>
          }
        />
        <Block
          title="11. 管轄すべき裁判所について"
          content={
            <p>
              当サイトの提供するサービスをユーザー様が利用する中で、サービスの利用に関して法的トラブルが発生した場合、その解決のために利用する裁判所を以下に記載します。
              <br />
              <br />-{" "}
              <Link
                href={
                  "https://www.courts.go.jp/hiroshima/about/syozai2/hirosimamain2/index.html"
                }
                className="text-link-color font-bold"
              >
                広島家庭裁判所本庁
              </Link>
            </p>
          }
        />
      </main>
    </div>
  );
}

function Block({ content, title }: props) {
  return (
    <section className="w-full max-w-screen-md mx-auto py-6">
      <h1 className={title ? "text-3xl pb-6" : "hidden"}>{title}</h1>
      {content}
    </section>
  );
}
