"use client";
import { Fugaz_One } from "next/font/google";
import Calendar from "./Calendar";

const fugaz = Fugaz_One({ subsets: ["latin"], weight: ["400"] });

interface IStatuses {
  num_days: number;
  time_remaining: string;
  date: string;
}

interface ISports {
  Ping: string;
  Gym: string;
  Running: string;
  Swimming: string;
  Dancing: string;
  Boxing: string;
}

export default function DashboardScreen() {
  const statuses: IStatuses = {
    num_days: 14,
    time_remaining: "13:14:26",
    date: new Date().toDateString(),
  };

  // sports buttons
  const sports: ISports = {
    Ping: "🏓",
    Gym: "🏋🏻",
    Running: "🏃🏻‍♀️",
    Swimming: "👙",
    Dancing: "🕺🏻",
    Boxing: "🥊",
  };
  return (
    <div className="flex flex-col flex-1 gap-8 sm:gap-12 md:gap-16">
      {/* USER activities status_______  */}
      <div className="grid grid-cols-3 gap-4 p-4 text-indigo-500 rounded-lg bg-indigo-50">
        {(Object.keys(statuses) as Array<keyof IStatuses>).map(
          (statusKey, statusIndex) => {
            return (
              <div
                className="flex flex-col gap-1 sm:gap-2'"
                key={`status-${statusIndex}`}
              >
                <p className="text-xs font-medium capitalize truncate sm:text-sm">
                  {statusKey.replaceAll("_", " ")}
                </p>
                <p
                  className={"text-base sm:text-lg truncate " + fugaz.className}
                >
                  {statuses[statusKey as keyof IStatuses]}
                </p>
              </div>
            );
          }
        )}
      </div>
      <h4
        className={`text-4xl sm:text-6xl md:text-6xl text-center text-balance " ${fugaz.className}
        `}
      >
        What did you <span className="textGradient"> practice </span>today?
      </h4>

      {/* ACTIVITES banner_______ */}
      <div className="flex flex-wrap items-stretch gap-4">
        {(Object.keys(sports) as Array<keyof ISports>).map(
          (sport, sportIndex) => {
            return (
              <button
                className={
                  "p-4 px-5 rounded-2xl purpleShadow duration-200 bg-indigo-50 hover:bg-indigo-100 text-center flex flex-col items-center gap-2 flex-1 "
                }
                key={`sport${sportIndex}`}
              >
                <p className="text-4xl sm:text-5xl md:text-6xl">
                  {sports[sport]}
                </p>
                <p
                  className={
                    "text-indigo-500 text-xs sm:text-sm md:text-base " +
                    fugaz.className
                  }
                >
                  {sport}
                </p>
              </button>
            );
          }
        )}
      </div>

      {/* CALENDAR _______ */}
      <Calendar />
    </div>
  );
}
