export const prsBtn1 = (txt) => {
  return {
    type: 'PRS_BTN1',
    txt
  }
}

export const prsBtn2 = (txt) => {
  return {
    type: 'PRS_BTN2',
    txt
  }
}

export const prsBtn3 = (txt) => {
  return {
    type: 'PRS_BTN3',
    txt
  }
}

export const prsBtn4 = (txt) => {
  return {
    type: 'PRS_BTN4',
    txt
  }
}

export const prsBtn5 = (txt) => {
  return {
    type: 'PRS_BTN5',
    txt
  }
}
//*****


export const requestDog = () => {
  return { type: 'REQUESTED_DOG' }
};

export const requestDogSuccess = (data) => {
  return { type: 'REQUESTED_DOG_SUCCEEDED', url: data.message }
};

export const requestDogError = () => {
  return { type: 'REQUESTED_DOG_FAILED' }
};

export const fetchDog = () => {
  return { type: 'FETCHED_DOG' }
};
