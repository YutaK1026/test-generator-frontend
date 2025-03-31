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
        const byteString = atob(pdfDataUri.split(",")[1]);
        const ab = new ArrayBuffer(byteString.length);
        const ia = new Uint8Array(ab);
        for (let i = 0; i < byteString.length; i++) {
          ia[i] = byteString.charCodeAt(i);
        }
        const blob = new Blob([ab], { type: "application/pdf" });
        const blobUrl = URL.createObjectURL(blob);
        window.open(blobUrl, "_blank");
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
