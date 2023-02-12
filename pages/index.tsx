import { Inter } from "@next/font/google";
import { useRouter, NextRouter } from "next/router";
import style from "@/styles/Home.module.css";
import React, { useContext } from "react";
import SignInWithGoogle from "@/components/authbutton";
import { AuthContext } from "@/components/authprovider";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const router: NextRouter = useRouter();
  const context = useContext(AuthContext);

  return (
    <div
      className="flex flex-col items-center justify-center h-screen bg-gray-50"
      style={{ overflow: "auto" }}
    >
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="mt-12 sm:mt-16 lg:mt-20">
          <div className="text-center">
            <h1
              className="leading-9 tracking-tight text-gray-900 sm:text-4xl sm:leading-10"
              style={{ fontSize: "2em", fontWeight: 1000 }}
            >
              EduHub
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base leading-6 text-gray-500 sm:mt-5">
              A comprehensive learning platform that combines note-taking and
              messaging to enhance your educational experience.
            </p>
            <div className="mt-5">
              <SignInWithGoogle
                handleClick={() => {
                  router.push("/auth/main");
                }}
              />
            </div>
          </div>
        </div>

        <div className="mt-12">
          <h2
            className="text-center text-3xl leading-9 font-extrabold text-gray-900"
            style={{ fontSize: "1.25em", fontWeight: 690 }}
          >
            Why use EduHub?
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-base leading-6 text-gray-500">
            EduHub offers a complete solution for all your learning needs. With
            features like note-taking, messaging, and organization, you'll be
            able to focus on what matters most - your education.
          </p>
          <div className="mt-8">
            <div className="bg-white shadow sm:rounded-lg">
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
            Sign up for EduHub and start learning in a new way. With our
            user-friendly interface and intuitive navigation, you'll be up and
            running in no time.
          </p>
          <div className="mt-8">
            <div
              className="grid gap-5 max-w-lg mx-auto lg:grid-cols-3"
              style={{ display: "flex", flexDirection: "row" }}
            >
              <div className="flex flex-col rounded-lg shadow-lg">
                <div className="flex-shrink-0">
                  <img
                    className="w-full object-cover"
                    src="https://source.unsplash.com/400x300/?note-taking"
                    alt="Note-Taking"
                    style={{ height: "200px" }}
                  />
                </div>
              </div>
              <div className="flex flex-col rounded-lg shadow-lg">
                <div className="flex-shrink-0">
                  <img
                    className="h-48 w-full object-cover"
                    src="https://source.unsplash.com/400x300/?messaging"
                    alt="Messaging"
                    style={{ height: "200px" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
