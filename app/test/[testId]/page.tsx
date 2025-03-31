import React from "react";
import { TestPreview } from "@/components/TestPreview";

interface TestPreviewPageProps {
  params: Promise<{
    testId: string;
  }>;
}

const TestPreviewPage: React.FC<TestPreviewPageProps> = async ({ params }) => {
  const { testId } = await params;

  if (!testId || typeof testId !== "string") {
    return <div>無効なテストIDです。</div>;
  }

  return <TestPreview testId={testId} />;
};

export default TestPreviewPage;
