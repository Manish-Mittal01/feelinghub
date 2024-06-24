import { BiDizzy, BiHappy, BiSolidDizzy, BiSolidHappyAlt } from "react-icons/bi";
import { RiEmotionUnhappyFill, RiEmotionUnhappyLine } from "react-icons/ri";

export const genderOptions = [
  { value: "male", label: "Male" },
  { value: "female", label: "Female" },
  { value: "other", label: "Other" },
];

export const feelingOptions = [
  { value: "happy", label: "Happy", icons: { regular: <BiHappy />, filled: <BiSolidHappyAlt /> } },
  {
    value: "anxiety",
    label: "anxiety",
    icons: { regular: <BiDizzy />, filled: <BiSolidDizzy /> },
  },
  {
    value: "sad",
    label: "Sad",
    icons: { regular: <RiEmotionUnhappyLine />, filled: <RiEmotionUnhappyFill /> },
  },
];

export const sortingOptions = [
  { value: "relevance", label: "Relevance" },
  { value: "latestFirst", label: "Latest first" },
  { value: "oldestFirst", label: "Oldest first" },
];

export const defaultPage = {
  orderBy: "id",
  order: "desc",
  page: 1,
  limit: 20,
};

export const limitOptions = [
  { value: 20, label: 20 },
  { value: 50, label: 50 },
  { value: 75, label: 75 },
  { value: 100, label: 100 },
];

export const getFeeling = (feeling) => {
  for (let emotion of feelingOptions) {
    if (emotion.value === feeling) {
      return emotion;
    }
  }
};
