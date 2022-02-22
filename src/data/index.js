class Survey {
  constructor({ aggressive, confident, responsible, indivisual, horizontal }) {
    this.aggressive = aggressive;
    this.confident = confident;
    this.responsible = responsible;
    this.individual = indivisual;
    this.horizontal = horizontal;
  }
}

const userSurvey = new Survey({
  aggressive: 8,
  confident: 10,
  responsible: 10,
  indivisual: 3,
  horizontal: 6,
});

const samsungSurvey = new Survey({
  aggressive: 10,
  confident: 9,
  responsible: 9,
  indivisual: 5,
  horizontal: 3,
});

const kakaoSurvey = new Survey({
  aggressive: 6,
  confident: 7,
  responsible: 7,
  indivisual: 8,
  horizontal: 9,
});

const lgSurvey = new Survey({
  aggressive: 7,
  confident: 7,
  responsible: 7,
  indivisual: 7,
  horizontal: 7,
});

export const surveyData = {
  userSurvey,
  companySurvey: { samsungSurvey, kakaoSurvey, lgSurvey },
};
