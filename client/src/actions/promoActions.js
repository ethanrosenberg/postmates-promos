export const updatePromos = value => {
  return {
    type: "UPDATE_PROMOS",
    value
  };
};

export const getPromos = () => {

  return dispatch => {

console.log("getting promos...")

    fetch('http://localhost:3000/api/v1/promos')
      .then(r => r.json())
      .then(response => {
        console.log(response)
          dispatch( updatePromos(response))

      })
  }
}
