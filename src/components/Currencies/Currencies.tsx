"use client";

import { CurrencyOption } from "@/utils/types";
import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";

type Props = {
  value: CurrencyOption;
  options: CurrencyOption[];
  onChange: (currency: CurrencyOption) => void;
};

export function CurrencySelect({ value, options, onChange }: Props) {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [highlighted, setHighlighted] = useState(0);

  const containerRef = useRef<HTMLDivElement>(null);

  /** Filter options based on typed keys */
  const filteredOptions = useMemo(() => {
    if (!search) return options;

    return options.filter(
      (opt) =>
        opt.code.toLowerCase().startsWith(search) ||
        opt.name.toLowerCase().startsWith(search),
    );
  }, [search, options]);

  useEffect(() => {
    const close = (e: MouseEvent) => {
      if (!containerRef.current?.contains(e.target as Node)) {
        setOpen(false);
        setSearch("");
      }
    };

    document.addEventListener("mousedown", close);
    return () => document.removeEventListener("mousedown", close);
  }, []);

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (open) {
      containerRef.current?.focus();
    }
  }, [open]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (!open) return;

    if (e.key === "ArrowDown") {
      e.preventDefault();
      setHighlighted((i) => Math.min(i + 1, filteredOptions.length - 1));
    }

    if (e.key === "ArrowUp") {
      e.preventDefault();
      setHighlighted((i) => Math.max(i - 1, 0));
    }

    if (e.key === "Enter") {
      e.preventDefault();
      const selected = filteredOptions[highlighted];
      if (selected) {
        onChange(selected);
        setOpen(false);
        setSearch("");
      }
    }

    if (e.key === "Escape") {
      setOpen(false);
      setSearch("");
    }
  };

  return (
    <div
      ref={containerRef}
      tabIndex={0}
      onKeyDown={handleKeyDown}
      className="relative w-60 outline-none text-black"
    >
      {/* Trigger */}
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="w-[293.32px] h-[45.21px] lg:w-[297.13px] lg:h-19 bg-white border border-[#3CAE8C] rounded-[8.17px] lg:rounded-[15px] px-4 flex items-center justify-between"
      >
        <div className="flex items-center gap-3">
          <Image
            src={value.flag}
            width={30}
            height={30}
            alt={value.code}
            className="w-[12.14px] h-[21.78px] lg:w-8 rounded"
          />
          <div className="flex items-center gap-3 lg:gap-0 lg:flex-col lg:items-start">
            <p className="font-bold text-[14px] text-black lg:text-[18px]">
              {value.code}
            </p>
            <p className="text-[12px] lg:text-sm text-black truncate max-w-40 lg:-mt-1">
              {value.name}
            </p>
          </div>
        </div>
        <span className="text-gray-500 mr-4">▾</span>
      </button>

      {/* Dropdown */}
      {open && (
        <div className="absolute mt-2 w-[297.13px] bg-white rounded-xl shadow-lg z-50 overflow-hidden text-black">
          {/* Sticky Search */}
          <div className="sticky top-0 bg-white z-10 p-3 border-b">
            <input
              ref={inputRef}
              value={search}
              onChange={(e) => {
                setSearch(e.target.value.toLowerCase());
                setHighlighted(0);
              }}
              placeholder="Search currency..."
              className="w-full h-10 px-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#3CAE8C]"
            />
          </div>

          {/* Scrollable List */}
          <ul className="max-h-60 overflow-y-auto">
            {filteredOptions.length === 0 && (
              <li className="px-4 py-3 text-gray-400 text-sm">No results</li>
            )}

            {filteredOptions.map((opt, i) => (
              <li
                key={opt.code}
                onClick={() => {
                  onChange(opt);
                  setOpen(false);
                  setSearch("");
                }}
                className={`flex items-center gap-3 px-4 py-3 cursor-pointer ${
                  i === highlighted ? "bg-gray-100" : ""
                }`}
              >
                <Image src={opt.flag} width={24} height={24} alt={opt.code} />
                <div>
                  <p className="font-bold">{opt.code}</p>
                  <p className="text-sm text-black">{opt.name}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
