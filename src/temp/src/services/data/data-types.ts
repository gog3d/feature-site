export type TDesc = {
  id: string,
  text: string
};

export type TPrice = {
  id: string,
  price: string,
  desc: Array<TDesc>
};

export type TServicesCategory = {
  id: string,
  title: string,
  who_suits: string,
  services_list: Array<TDesc>,
  price: {
    price_list: Array<TPrice>,
    price_desc: string
  }
};

export type TCourse = {
  id: string,
  name: string,
  card_img: string,
  course_img: string,
  date: {
    day: string,
    month: string,
    full: string
  },
  city: string,
  place: string,
  clock: string,
  about: string
};

export type TAward = {
  id: string,
  desc: string,
  img: string
};

export type TDiplom = {
  id: string,
  img: string
};

export type TData = {
  services_category : Array<TServicesCategory>,
  courses: Array<TCourse>,
  awards: Array<TAward>,
  diplomas: Array<TDiplom>
};
