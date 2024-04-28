export type MessageHttpResult = {
  responce: string;
};

export type PersonalCardHttpResult = {
  percent_of_good_reviews: number;
  percent_like_present: number;
  percent_like_knowledgepractice: number;
  percent_like_knowledge: number;
};

export type TotalHttpResult = {
  percent_of_good_reviews: number;
  percent_of_bad_reviews: number;
  percent_of_good_inf_reviews: number;
  percent_of_bad_inf_reviews: number;
  percent_object_0: number;
  percent_object_1: number;
  percent_object_2: number;
  percent_notlike_present: number;
  percent_notlike_knowledgePractice: number;
  percent_notlike_knowledge: number;
  marks_good: number;
  marks_middle: number;
  marks_bad: number;
};

export type GraphType = {
  name: string;
  val: number;
}[];

export type RecommendationType = {
  need_improve: string;
  student_suggestion: string;
};

export type TableType = {
  id: number;
  text: string;
  is_positive: number;
  relevance: number;
  object: string;
};

export type CardType = {
  name: string;
  programm: string;
  percent_of_good_reviews: number;
  percent_like_present: number;
  percent_like_knowledgepractice: number;
  percent_like_knowledge: number;
};
