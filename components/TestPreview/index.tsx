import React from "react";
import { TestPreviewPresenter } from "./presenter";
import { fetchTestData } from "./hooks/hooks";

interface TestPreviewProps {
  testId: string;
}

export const TestPreview: React.FC<TestPreviewProps> = async ({ testId }) => {
  const testData = await fetchTestData(testId);

  if (!testData) {
    return <div>テストデータが見つかりませんでした。</div>;
  }

  return <TestPreviewPresenter testData={testData} />;
};
