"use client";

import { useState } from "react";
import { Button } from "@heroui/react";

import { HiOutlineArrowRight, HiOutlineBolt } from "react-icons/hi2";

import { FiPlus } from "react-icons/fi";
import { PiChartBarLight } from "react-icons/pi";
import { TbCrown } from "react-icons/tb";

const plans = [
  {
    name: "Starter",
    price: 0,
    icon: HiOutlineBolt,
    highlighted: false,
    features: [
      "Daily AI match brief (top 5)",
      "Verified salary bands",
      "Company insight dashboards",
      "1-click apply, unlimited",
    ],
  },
  {
    name: "Growth",
    price: 17,
    icon: PiChartBarLight,
    highlighted: true,
    features: [
      "Daily AI match brief (top 5)",
      "Verified salary bands",
      "Company insight dashboards",
      "1-click apply, unlimited",
    ],
  },
  {
    name: "Premium",
    price: 99,
    icon: TbCrown,
    highlighted: false,
    features: [
      "Everything in Pro",
      "Multi-profile career portfolios",
      "Shared talent rooms",
      "Recruiter view (read-only)",
    ],
  },
];

export default function PricingSection() {
  const [billing, setBilling] = useState<"monthly" | "yearly">("monthly");

  return (
    <section className="bg-black px-4 py-24 text-white md:px-10 lg:px-20">
      <div className="mx-auto max-w-7xl">
        {/* heading */}
        <div className="text-center">
          <div className="mb-4 flex items-center justify-center gap-2 text-xs uppercase tracking-[4px] text-zinc-400">
            <span className="h-[6px] w-[6px] rounded-full bg-violet-500" />
            Pricing
            <span className="h-[6px] w-[6px] rounded-full bg-violet-500" />
          </div>

          <h2 className="mx-auto max-w-3xl text-4xl font-semibold leading-tight md:text-6xl">
            Pay for the leverage,
            <br />
            not the listings
          </h2>
        </div>

        {/* toggle */}
        <div className="mt-10 flex justify-center">
          <div className="flex items-center gap-2 rounded-full border border-white/10 bg-zinc-900 p-1">
            <button
              onClick={() => setBilling("monthly")}
              className={`rounded-full px-5 py-2 text-sm font-medium transition-all ${
                billing === "monthly" ? "bg-white text-black" : "text-zinc-400"
              }`}
            >
              Monthly
            </button>

            <button
              onClick={() => setBilling("yearly")}
              className={`flex items-center gap-2 rounded-full px-5 py-2 text-sm font-medium transition-all ${
                billing === "yearly" ? "bg-white text-black" : "text-zinc-400"
              }`}
            >
              Yearly
              <span className="rounded-full bg-fuchsia-600 px-2 py-[2px] text-[10px] text-white">
                25%
              </span>
            </button>
          </div>
        </div>

        {/* cards */}
        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-3">
          {plans.map((plan, index) => {
            const Icon = plan.icon;

            return (
              <div
                key={index}
                className={`relative overflow-hidden rounded-3xl border p-6 transition-all duration-300 ${
                  plan.highlighted
                    ? "border-white/10 bg-gradient-to-b from-zinc-900 to-zinc-950 shadow-[0_0_40px_rgba(255,255,255,0.06)]"
                    : "border-white/10 bg-black"
                }`}
              >
                {/* top */}
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-zinc-900">
                      <Icon className="text-xl text-violet-400" />
                    </div>

                    <h3 className="text-2xl font-medium">{plan.name}</h3>
                  </div>

                  <div className="text-right">
                    <div className="flex items-start">
                      <span className="text-5xl font-bold">${plan.price}</span>

                      <span className="mt-3 text-sm text-zinc-400">/month</span>
                    </div>
                  </div>
                </div>

                {/* content */}
                <div className="mt-10">
                  <p className="mb-6 text-lg font-medium text-zinc-200">
                    Start building your insights hub:
                  </p>

                  <div className="space-y-4">
                    {plan.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <div className="flex h-6 w-6 items-center justify-center rounded-md bg-zinc-800">
                          <FiPlus className="text-sm text-zinc-300" />
                        </div>

                        <span className="text-sm text-zinc-400">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* button */}
                <Button
                  className={`mt-14 h-14 w-full text-base font-medium rounded-md ${
                    plan.highlighted
                      ? "bg-white text-black hover:bg-zinc-200"
                      : "bg-zinc-900 text-white hover:bg-zinc-800"
                  }`}
                >
                  Choose This Plan
                  <HiOutlineArrowRight className="ml-2 text-lg" />
                </Button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
