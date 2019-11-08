export const updatePromos = value => {
  return {
    type: "UPDATE_PROMOS",
    value
  };
};

export const updateLoading = value => {
  return {
    type: "UPDATE_LOADING",
    value
  };
};

export const getPromos = () => {

  return dispatch => {

//console.log("getting promos...")

    fetch('http://localhost:3000/api/v1/promos')
      .then(r => r.json())
      .then(response => {
        //console.log(response)
          dispatch( updatePromos(response))
          dispatch( updateLoading(false))

      })
  }
}

export const addNewPromo = input => {

//console.log(input)
  return dispatch => {

    const headers = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ code: input.code, description: input.description })
    }

    fetch('http://localhost:3000/api/v1/newpromo', headers)
      .then(r => r.json())
      .then(response => {
        console.log("response back:")
          console.log(response)

      })
  }
}
