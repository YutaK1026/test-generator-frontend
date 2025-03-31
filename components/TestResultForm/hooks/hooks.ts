"use client";

import { useRouter } from "next/navigation";
import { useTestGenerator } from "@/app/contexts/TestGeneratorContext";
import { generatePDF } from "@/app/utils/pdfGenerator";

export const useTestResultForm = () => {
  const router = useRouter();
  const { state } = useTestGenerator();

  const handleBack = () => {
    router.push("/create/custom");
  };

  const handleDownload = () => {
    try {
      const pdfDataUri = generatePDF(state);
      const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
      if (isIOS) {
        window.open(pdfDataUri, "_blank");
      } else {
        const link = document.createElement("a");
        link.href = pdfDataUri;
        link.download = `${state.vocabularyType}_test.pdf`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }
    } catch (error) {
      console.error("PDF generation failed:", error);
    }
  };

  const handleRetry = () => {
    router.push("/create");
  };

  return {
    state,
    handleBack,
    handleDownload,
    handleRetry,
  };
};
