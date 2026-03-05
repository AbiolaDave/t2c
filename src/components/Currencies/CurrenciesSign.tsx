"use client";

import { Currencies } from "@/utils/rates/rates";
import { CurrencyOption } from "@/utils/types";
import Image from "next/image";
import { useMemo, useState } from "react";

export function CurrencySignSelect() {
  const options = Currencies;

  const [open, setOpen] = useState(false);
  const [userSelected, setUserSelected] = useState<CurrencyOption | null>(null);

  const selected = useMemo(
    () => userSelected ?? options[0],
    [userSelected, options],
  );

  return (
    <div className="relative w-83.25 border rounded-[14px] bg-white">
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full h-20 px-4 flex items-center justify-between"
      >
        <div className="flex items-center gap-3">
          <Image
            src={selected.flag}
            width={30}
            height={30}
            alt={selected.code}
          />
          <div>
            <p className="font-bold">{selected.code}</p>
            <p className="text-sm text-gray-500">{selected.name}</p>
          </div>
        </div>
        <span>▾</span>
      </button>

      {open && (
        <ul className="absolute mt-2 w-full bg-white rounded-xl shadow-lg z-50 max-h-60 overflow-y-auto">
          {options.map((opt) => (
            <li
              key={opt.code}
              onClick={() => {
                setUserSelected(opt);
                setOpen(false);
              }}
              className="flex items-center gap-3 px-4 py-3 hover:bg-gray-100 cursor-pointer"
            >
              <Image src={opt.flag} width={24} height={24} alt={opt.code} />
              <div>
                <p className="font-bold">{opt.code}</p>
                <p className="text-sm text-gray-500">{opt.name}</p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
