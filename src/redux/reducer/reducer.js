let initialState = {
  contactList: [],
  keyword: "",
};

function reducer(state = initialState, action) {
  //action은 항상 타입이랑 페이로드가 있는 객체이므로 디스트럭처링 사용해서 코드 줄이기 가능
  const { type, payload } = action;

  if (type == "ADD_CONTACT")
    return {
      ...state,
      contactList: [
        ...state.contactList,
        { name: payload.name, phoneNumber: payload.phoneNumber },
      ],
    };
  if (type == "SEARCH_CONTACT")
    return {
      ...state,
      ...(state.keyword = payload.keyword),
    };
  return { ...state };
}

export default reducer;
