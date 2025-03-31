import { TestGeneratorState } from "@/app/types/steps";

export const fetchTestData = async (
  testId: string
): Promise<TestGeneratorState | null> => {
  // TODO: 将来的にmockDataじゃなくてDBから取得
  const mockData: { [key: string]: TestGeneratorState } = {
    "1": {
      testTitle: "LEAP 英単語帳 基礎",
      vocabularyType: "LEAP 英単語帳",
      questionMode: "range",
      wordCount: 20,
      customSettings: {
        outputFormat: ["japanese-to-english"],
        excludePrevious: false,
        rangeStart: 1000,
        rangeEnd: 1050,
      },
    },
    "2": {
      testTitle: "test 2",
      vocabularyType: "LEAP 英単語帳",
      questionMode: "random",
      wordCount: 50,
      customSettings: {
        outputFormat: ["english-to-japanese"],
        excludePrevious: true,
      },
    },
  };
  await new Promise((resolve) => setTimeout(resolve, 500));
  return mockData[testId] || null;
};
