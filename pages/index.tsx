import Head from 'next/head'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { SearchDialog } from '@/components/SearchDialog'
import Image from 'next/image'
import Link from 'next/link'
import Script from 'next/script'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>AI 保险助手</title>
        <meta name="description" content="AI 保险助手" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-6GCGYXNM3S"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-6GCGYXNM3S');
        `}
      </Script>
      <main className={styles.main}>
        <h1 className="text-slate-700 font-bold text-2xl mb-12 flex items-center gap-3 dark:text-slate-400">
          <Image src={'/logo.png'} width="32" height="32" alt="MagickPen logo" /> AI 保险助手
        </h1>
        <div className={styles.center}>
          <SearchDialog />
        </div>

        <div className="mt-28 md:mt-40 text-center w-full">
          <h2 className="text-slate-500">更多好玩</h2>
          <ul className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-4 max-w-2xl mx-auto text-xs">
            <li>
              <Link
                href="https://magickpen.com/?ref=lawcnai"
                className=" 
              dark:bg-white/30
              dark:text-slate-900
              dark:border-slate-900
               text-slate-400  border border-slate-300/30 transition-all hover:bg-white/50 hover:backdrop-blur-md py-2.5 rounded-md block"
              >
                <Image
                  src={'/MagickPen.png'}
                  width={100}
                  height="20"
                  className="w-full mb-1 h-5 object-contain"
                  alt="MagickPen - 智能写作助手"
                />
                智能写作助手
              </Link>
            </li>
            <li>
              <Link
                href="https://reviewgpt.net/?ref=lawcnai"
                className="dark:bg-white/30
              dark:border-slate-900
              dark:text-slate-900 text-slate-400  border border-slate-300/30 transition-all hover:bg-white/50 hover:backdrop-blur-md py-2.5 rounded-md block"
              >
                <Image
                  src={'/ReviewGPT.png'}
                  width={100}
                  height="20"
                  className="w-full mb-1 h-5 object-contain"
                  alt="ReviewGPT - Make Your Writing Awesome"
                />
                AI 改写文章
              </Link>
            </li>
            <li>
              <Link
                href="https://openl.io/?ref=lawcnai"
                className="dark:bg-white/30
              dark:border-slate-900
              dark:text-slate-900 text-slate-400  border border-slate-300/30 transition-all hover:bg-white/50 hover:backdrop-blur-md py-2.5 rounded-md block"
              >
                <Image
                  src={'/OpenL.png'}
                  width={100}
                  height="20"
                  className="w-full mb-1 h-5 object-contain"
                  alt="OpenL - AI 翻译专家"
                />
                AI 翻译专家
              </Link>
            </li>
            <li>
              <Link
                href="https://www.teach-anything.com/?ref=lawcnai"
                className="dark:bg-white/30
              dark:border-slate-900
              dark:text-slate-900 text-slate-400  border border-slate-300/30 transition-all hover:bg-white/50 hover:backdrop-blur-md py-2.5 rounded-md block"
              >
                <Image
                  src={'/TeachAnything.png'}
                  width={100}
                  height="20"
                  className="w-full mb-1 h-5 object-contain"
                  alt="Teach Anything - AI 百科全书"
                />
                AI 百科全书
              </Link>
            </li>
            <li>
              <Link
                href="https://ask2end.com/?ref=lawcnai"
                className="dark:bg-white/30
              dark:border-slate-900
              dark:text-slate-900 text-slate-400  border border-slate-300/30 transition-all hover:bg-white/50 hover:backdrop-blur-md py-2.5 rounded-md block"
              >
                <Image
                  src={'/Ask2End.png'}
                  width={100}
                  height="20"
                  className="w-full mb-1 h-5 object-contain"
                  alt="Ask2End - 打破砂锅问到底"
                />
                打破砂锅问到底
              </Link>
            </li>
            <li>
              <Link
                href="https://better.avatarprompt.net/?ref=lawcnai"
                className="dark:bg-white/30
              dark:border-slate-900
              dark:text-slate-900 text-slate-400  border border-slate-300/30 transition-all hover:bg-white/50 hover:backdrop-blur-md py-2.5 rounded-md block"
              >
                <Image
                  src={'/BetterPrompt.png'}
                  width={100}
                  height="20"
                  className="w-full mb-1 h-5 object-contain"
                  alt="Teach Anything - AI 百科全书"
                />
                Prompt 生成器
              </Link>
            </li>
          </ul>
        </div>
      </main>
    </>
  )
}
