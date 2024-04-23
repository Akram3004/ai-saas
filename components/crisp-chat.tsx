"use client";

import { Crisp } from "crisp-sdk-web";
import React, { useEffect } from "react";

export default function CrispChat() {
  useEffect(() => {
    Crisp.configure("3f91ded2-3cbb-4a8a-ad29-04e1c0f65f6b");
  }, []);

  return null;
}