import {
  BrainCogIcon,
  CheckIcon,
  EyeIcon,
  GlobeIcon,
  MonitorSmartphoneIcon,
  ServerCogIcon,
  ZapIcon,
} from "lucide-react"
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
const features = [
  {
    name: "Store your PDF Documents",
    description: "Keep all of your PDF files stored securely and easily accessible anytime, anywhere.",
    icon: GlobeIcon
  },
  {
    name: "Blazing Fast Responses",
    description: "Experience lightening-fast responses to your queries, ensuring you get the information you need instantly.",
    icon: ZapIcon
  },
  {
    name: "Chat Memorisation",
    description: "Our intelligent Chatbot remembers previous interactions, providing a seamless and personalized experience.",
    icon: BrainCogIcon
  },
  {
    name: "Interactive PDF Viewer",
    description: "Engage with your PDFs like never before using our intuitive and interactive viewer.",
    icon: EyeIcon
  },
  {
    name: "Cloud Backup",
    description: "Rest Assured, knowing your documents are safely backed up on the cloud, protected form loss and damage.",
    icon: ServerCogIcon
  },
  {
    name: "Responsive Across Devices",
    description: "Access and chat with your PDFs seamlessly on any device, whether its your Desktop, Tablet or Smartphone.",
    icon: MonitorSmartphoneIcon
  },
]

export default function Home() {
  return (
    <main className="flex-1 overflow-scroll p=2 lg:p=5 bg-gradient-to-bl from-white to-indigo-600">
      <div className="bg-gradient-to-tl from-white to-cyan-400 py-24 sm:py-32 rounded-md drop-shadow-xl ">
        <div className="flex flex-col justify-center items-center mx-auto max-w-7xl px-6 lg:px-8" >
          <div className="mx-auto max-w-2xl sm:text-center">
            <h2 className="text-base font-semibold leading-7 text-indigo-600">You Interactive Document Companion</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-6xl">Transform Your PDFs into Interactive Conversations</p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Introducing{" "}
              <span className="font-bold text-indigo-600">Chat with PDF.</span>
              <br />
              <br />Upload Your Document, and our chatbot will answer your questions, summarize content and answer all of your Qs.
              Ideal for Everyone. <span className="text-indigo-600 ">
                Chat with PDF
              </span>{" "}
              turns static documents into{" "}
              <span className="font-bold">dynamic conversations</span>,
              enhancing productivity 10x fold effortlessly.

            </p>
          </div>
          <Button asChild className="mt-10 bg-gradient-to-bl from-cyan-400 to-cyan-800">
            <Link href="/dashboard">Get Started</Link>
          </Button>
        </div>
        <div className="relative overflow-hidden pt-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <Image
              alt="Chat PDF"
              src="https://i.imgur.com/VciRSTI.jpeg"
              width={2432}
              height={1442}
              className="mb-[-0%] rounded-xl shadow-2xl ring-1 ring-gray-900/10"

            />
            <div aria-hidden="true" className="relative">
              <div className="absolute bottom-0 -inset-x-32 bg-gradient-to-t from-white/95 pt-[5%] " />
            </div>
          </div>
        </div>


        <div className="py-24 sm:py-32" >
          <div className="max-w-4xl text-center mx-auto">

            <p className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Supercharge your Document Companion
            </p>
          </div>
          <p className="mx-auto mt-6 max-w-2xl px-10 text-center text-lg leading-8 text-gray-600">
            <span className="text-indigo-600 ">
              Chat with PDF
            </span>{" "} is packed with the best features
            for
            interacting with your PDFs, enhancing productivity and
            streamlining
            your workflow.
          </p>
          <div className="max-w-md mx-auto mt-10 grid grid-cols-1 md:max-w-2xl gap-8 lg:max-w-4xl">


            <div className="ring-2 justify-center items-center ring-indigo-600 rounded-3xl p-8">



              <ul role="list" className="mt-8 space-y-3 text-sm leading-6 text-gray-600">
                <li className="flex gap-x-3">
                  <CheckIcon className="h-6 w-5 flex-none text-indigo-600" />
                  Store upto 20 Documents
                </li>
                <li className="flex gap-x-3">
                  <CheckIcon className="h-6 w-5 flex-none text-indigo-600" />
                  Try out AI Chat Functionality
                </li>
                <li className="flex gap-x-3">
                  <CheckIcon className="h-6 w-5 flex-none text-indigo-600" />
                  Upto 100 messages per Document
                </li>
                <li className="flex gap-x-3">
                  <CheckIcon className="h-6 w-5 flex-none text-indigo-600" />
                  Full Power AI Chat Functionality with Memory Recall
                </li>
                <li className="flex gap-x-3">
                  <CheckIcon className="h-6 w-5 flex-none text-indigo-600" />
                  Advanced Analytics
                </li>
                <li className="flex gap-x-3">
                  <CheckIcon className="h-6 w-5 flex-none text-indigo-600" />
                  24 hour support response time
                </li>

              </ul>


            </div>
          </div>
        </div>
        <div className="mx-auto mt-16 max-w-7xl px-6 sm:mt-20 md:mt-24 lg:px-8">
          <dl className="mx-auto grid max-w-2xl grid-cols-1 gap-x-6
        gap-y-10 text-base leading-7 text-gray-600 sm:grid-cols-2
        lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-8 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-9">
                <dt className="inline font-semibold text-gray-900">
                  <feature.icon
                    className="absolute left-1 top-1 h-5 w-5 text-indigo-600" aria-hidden="true" />
                </dt>
                <dd>{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </main>
  );
}
