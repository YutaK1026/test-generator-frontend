import jsPDF from "jspdf";
import { TestGeneratorState } from "@/app/types/steps";
import { font } from "./NotoSansJP-Regular-normal";
// サンプル単語データ
// TODO: DBから取得するようにする
const sampleWords = [
  { english: "apple", japanese: "りんご" },
  { english: "book", japanese: "本" },
  { english: "cat", japanese: "猫" },
  { english: "dog", japanese: "犬" },
  { english: "elephant", japanese: "象" },
  { english: "flower", japanese: "花" },
  { english: "guitar", japanese: "ギター" },
  { english: "house", japanese: "家" },
  { english: "ice", japanese: "氷" },
  { english: "jacket", japanese: "ジャケット" },
  { english: "king", japanese: "王" },
  { english: "lemon", japanese: "レモン" },
  { english: "mountain", japanese: "山" },
  { english: "notebook", japanese: "ノート" },
  { english: "orange", japanese: "オレンジ" },
  { english: "pencil", japanese: "鉛筆" },
  { english: "queen", japanese: "女王" },
  { english: "river", japanese: "川" },
  { english: "sun", japanese: "太陽" },
  { english: "tree", japanese: "木" },
];

export const generateWordList = (state: TestGeneratorState) => {
  const shuffled = [...sampleWords].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, state.wordCount);
};

export const generatePDF = (state: TestGeneratorState): string => {
  const doc = new jsPDF();
  const notoSansJPRegularBase64 = font;
  doc.addFileToVFS("NotoSansJP-Regular.ttf", notoSansJPRegularBase64);
  doc.addFont("NotoSansJP-Regular.ttf", "NotoSansJP", "normal");
  doc.setFont("NotoSansJP");

  const words = generateWordList(state);

  // タイトル
  doc.setFontSize(20);
  doc.text(state.testTitle, 105, 20, { align: "center" }); // testTitle を使用

  // サブタイトル
  doc.setFontSize(12);
  const modeText =
    state.questionMode === "random" ? "ランダム選択モード" : "範囲指定モード";
  doc.text(`${modeText} - ${state.wordCount}問`, 105, 30, { align: "center" });

  // 出題形式
  const formats = state.customSettings.outputFormat;
  const formatText =
    formats.includes("english-to-japanese") &&
    formats.includes("japanese-to-english")
      ? "英語→日本語, 日本語→英語"
      : formats.includes("english-to-japanese")
      ? "英語→日本語"
      : "日本語→英語";

  doc.text(`出題形式: ${formatText}`, 105, 40, { align: "center" });

  // 問題
  doc.setFontSize(14);
  doc.text("問題", 20, 70);

  let y = 80;
  words.forEach((word, index) => {
    if (y > 270) {
      doc.addPage();
      y = 20;
    }

    if (formats.includes("english-to-japanese")) {
      doc.text(`${index + 1}. ${word.english}`, 20, y);
      y += 10;
      doc.text("答え: ___________________", 30, y);
      y += 15;
    }

    if (formats.includes("japanese-to-english")) {
      doc.text(`${index + 1}. ${word.japanese}`, 20, y);
      y += 10;
      doc.text("答え: ___________________", 30, y);
      y += 15;
    }
  });

  doc.addPage();
  doc.setFontSize(14);
  doc.text("解答", 20, 20);

  y = 30;
  words.forEach((word, index) => {
    if (y > 270) {
      doc.addPage();
      y = 20;
    }

    if (formats.includes("english-to-japanese")) {
      doc.text(`${index + 1}. ${word.english} → ${word.japanese}`, 20, y);
      y += 10;
    }

    if (formats.includes("japanese-to-english")) {
      doc.text(`${index + 1}. ${word.japanese} → ${word.english}`, 20, y);
      y += 10;
    }
  });

  return doc.output("datauristring");
};
