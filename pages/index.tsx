import { Inter } from "@next/font/google";
import { useRouter, NextRouter } from "next/router";
import style from "@/styles/Home.module.css";
import React from "react";
import SignInWithGoogle from "@/components/authbutton";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const router: NextRouter = useRouter();

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-50">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="mt-12 sm:mt-16 lg:mt-20">
          <div className="text-center">
            <h1 className="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
              Discord for Education
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base leading-6 text-gray-500 sm:mt-5">
              A comprehensive learning platform that combines note-taking and
              messaging to enhance your educational experience.
            </p>
            <div className="mt-5">
              <button className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out">
                Get Started
              </button>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <h2 className="text-center text-3xl leading-9 font-extrabold text-gray-900">
            Why use Discord for Education?
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-base leading-6 text-gray-500">
            Discord for Education offers a complete solution for all your
            learning needs. With features like note-taking, messaging, and
            organization, you'll be able to focus on what matters most - your
            education.
          </p>
          <div className="mt-8">
            <div className="bg-white shadow overflow-hidden sm:rounded-lg">
              <div className="px-4 py-5 border-b border-gray-200">
                <h3 className="text-lg leading-6 font-medium text-gray-900">
                  Note-Taking
                </h3>
                <p className="mt-2 text-base leading-6 text-gray-500">
                  Quickly and easily take notes during class and study sessions.
                  Organize your notes by subject, class, or any other way that
                  makes sense to you.
                </p>
              </div>
              <div className="px-4 py-5 border-b border-gray-200">
                <h3 className="text-lg leading-6 font-medium text-gray-900">
                  Messaging
                </h3>
                <p className="mt-2 text-base leading-6 text-gray-500">
                  Connect with classmates, teachers, and fellow students in
                  real-time. Collaborate, share resources, and stay up-to-date
                  with class discussions and updates.
                </p>
              </div>
              <div className="px-4 py-5 border-b border-gray-200">
                <h3 className="text-lg leading-6 font-medium text-gray-900">
                  Organization
                </h3>
                <p className="mt-2 text-base leading-6 text-gray-500">
                  Keep your studies organized and on track with custom channels,
                  task lists, and reminders. Say goodbye to cluttered notebooks
                  and missed deadlines!
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12">
          <h2 className="text-center text-3xl leading-9 font-extrabold text-gray-900">
            How does it work?
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-base leading-6 text-gray-500">
            Sign up for Discord for Education and start learning in a new way.
            With our user-friendly interface and intuitive navigation, you'll be
            up and running in no time.
          </p>
          <div className="mt-8">
            <div className="grid gap-5 max-w-lg mx-auto lg:grid-cols-3">
              <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
                <div className="flex-shrink-0">
                  <img
                    className="h-48 w-full object-cover"
                    src="https://source.unsplash.com/400x300/?note-taking"
                    alt="Note-Taking"
                  />
                </div>
                <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                  <div className="flex-1">
                    <h3 className="text-lg leading-6 font-medium text-gray-900">
                      Note-Taking
                    </h3>
                    <p className="mt-2 text-base leading-6 text-gray-500">
                      Take notes during class, review them later, and never
                      forget important information again.
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
                <div className="flex-shrink-0">
                  <img
                    className="h-48 w-full object-cover"
                    src="https://source.unsplash.com/400x300/?messaging"
                    alt="Messaging"
                  />
                </div>
                <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                  <div className="flex-1">
                    <h3 className="text-lg leading-6 font-medium text-gray-900">
                      Messaging
                    </h3>
                    <p className="mt-2 text-base leading-6 text-gray-500">
                      Connect with classmates, teachers, and fellow students in
                      real-time and stay on top of class discussions and
                      updates.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
