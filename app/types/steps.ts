import { Step } from "@/components/ui/StepIndicator";
import type { VocabularyType } from "./vocabulary";

export const TEST_GENERATOR_STEPS: Step[] = [
  {
    id: 1,
    title: "単語帳の種類を選択",
  },
  {
    id: 2,
    title: "設問モードを選択",
  },
  {
    id: 3,
    title: "カスタム設定",
  },
];

export type QuestionMode = "random" | "range";
export type OutputFormat = "english-to-japanese" | "japanese-to-english";

export interface TestGeneratorState {
  testTitle: string;
  vocabularyType: VocabularyType;
  questionMode: QuestionMode;
  wordCount: number;
  customSettings: {
    outputFormat: OutputFormat;
    excludePrevious: boolean;
    [key: string]: unknown;
  };
}
