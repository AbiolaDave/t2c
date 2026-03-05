"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import { CurrencyOption } from "../types";

const useGetAllCurrencies = () => {
  const [currencies, setCurrencies] = useState<CurrencyOption[]>([]);

  useEffect(() => {
    const getAllCurrencies = async () => {
      try {
        const res = await axios.get("/api/countries");
        setCurrencies(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    getAllCurrencies();
  }, []);



  return currencies;
};

export default useGetAllCurrencies;
