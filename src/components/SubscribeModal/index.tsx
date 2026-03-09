"use client";

import { Currencies } from "@/utils/rates/rates";
// import { Currencies } from "@/utils/rates";
import { ChevronDown, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

interface TrackRateModalProps {
  isOpen: boolean;
  onClose: () => void;
}

function CurrencySelect({
  value,
  onChange,
  label,
}: {
  value: string;
  onChange: (code: string) => void;
  label: string;
}) {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");
  const ref = useRef<HTMLDivElement>(null);

  const selected = Currencies.find((c) => c.code === value) ?? Currencies[0];
  const filtered = Currencies.filter(
    (c) =>
      c.code.toLowerCase().includes(search.toLowerCase()) ||
      c.name.toLowerCase().includes(search.toLowerCase()),
  );

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
        setSearch("");
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  // <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
  // <div className="relative w-full max-w-md rounded-2xl bg-white p-6 shadow-xl"></div>

  return (
    <div ref={ref} className="relative">
      <label className="mb-1 block text-sm font-medium text-gray-700">
        {label}
      </label>
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="w-full flex items-center gap-2 rounded-xl border border-gray-200 px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-white"
      >
        <img
          src={selected.flag}
          alt={selected.code}
          className="w-6 h-4 object-cover rounded-sm flex-shrink-0"
        />
        <span className="font-semibold text-gray-900">{selected.code}</span>
        <span className="text-gray-500 truncate">{selected.name}</span>
        <ChevronDown
          size={16}
          className="ml-auto text-gray-400 flex-shrink-0"
        />
      </button>

      {open && (
        <div className="absolute z-50 mt-1 w-full rounded-xl border border-gray-200 bg-white shadow-lg overflow-hidden">
          <div className="p-2 border-b border-gray-100">
            <input
              autoFocus
              type="text"
              placeholder="Search currency..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full px-2 py-1.5 text-sm rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>
          <ul className="max-h-48 overflow-y-auto">
            {filtered.map((c) => (
              <li key={c.code}>
                <button
                  type="button"
                  onClick={() => {
                    onChange(c.code);
                    setOpen(false);
                    setSearch("");
                  }}
                  className={`w-full flex items-center gap-2 px-3 py-2 text-sm hover:bg-gray-50 text-left ${c.code === value ? "bg-emerald-50" : ""}`}
                >
                  <img
                    src={c.flag}
                    alt={c.code}
                    className="w-6 h-4 object-cover rounded-sm flex-shrink-0"
                  />
                  <span className="font-semibold text-gray-900">{c.code}</span>
                  <span className="text-gray-500 truncate">{c.name}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default function TrackRateModal({
  isOpen,
  onClose,
}: TrackRateModalProps) {
  const [from, setFrom] = useState("USD");
  const [to, setTo] = useState("EUR");
  const [frequency, setFrequency] = useState("Daily");

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start md:items-center justify-center bg-black/50 overflow-y-auto text-black p-4">
      <div className="relative w-[350px] md:w-full max-w-md rounded-2xl bg-white p-6 shadow-xl my-auto">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-400 hover:text-gray-600"
        >
          <X size={20} />
        </button>

        <h2 className="text-[24px] font-bold text-center text-gray-900">
          Track the exchange rate
        </h2>
        <p className="mt-1 text-[14px] text-center text-[#6A7282]">
          Get daily updates on your favorite currency pairs directly to your
          inbox.
        </p>

        <div className="mt-6 space-y-4">
          <div className="grid grid-cols-2 gap-3">
            <CurrencySelect label="From" value={from} onChange={setFrom} />
            <CurrencySelect label="To" value={to} onChange={setTo} />
          </div>

          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              placeholder="e.g. John Doe"
              className="w-full rounded-xl border border-gray-200 px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>

          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700">
              Email Address
            </label>
            <input
              type="email"
              placeholder="name@example.com"
              className="w-full rounded-xl border border-gray-200 px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>

          {/* Frequency — custom display with colored value */}
          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700">
              Frequency
            </label>
            <div className="relative">
              <select
                value={frequency}
                onChange={(e) => setFrequency(e.target.value)}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
              >
                <option value="Daily">Daily</option>
                <option value="Weekly">Weekly</option>
                <option value="Monthly">Monthly</option>
              </select>
              <div className="flex items-center rounded-xl border border-gray-200 px-3 py-2.5">
                <span className="text-sm text-gray-700">
                  Send me updates{" "}
                  <span className="font-semibold text-emerald-500">
                    {frequency}
                  </span>
                </span>
                <ChevronDown size={16} className="ml-auto text-gray-400" />
              </div>
            </div>
          </div>

          <div className="flex items-start gap-2">
            <input
              type="checkbox"
              className="mt-0.5 h-4 w-4 rounded border-gray-300 text-emerald-600 focus:ring-emerald-500"
            />
            <p className="text-xs text-gray-500">
              I agree to receive marketing communications. By subscribing, you
              agree to our{" "}
              <span className="underline cursor-pointer">Privacy Policy</span>{" "}
              and <span className="underline cursor-pointer">Terms</span>.
            </p>
          </div>

          <button
            type="button"
            className="mt-2 w-full rounded-xl bg-emerald-500 py-3 text-sm font-medium text-white hover:bg-emerald-600 transition"
          >
            Subscribe to Updates
          </button>
        </div>
      </div>
    </div>
  );
}
