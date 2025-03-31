import React from "react";
import { TestPreview } from "@/components/TestPreview";
import styles from "./page.module.scss";

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

  return (
    <main className={styles.main}>
      <TestPreview testId={testId} />
    </main>
  );
};

export default TestPreviewPage;
