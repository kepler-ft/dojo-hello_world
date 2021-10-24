export default function Request () {
    const ops: RequestInit = {
      method: "GET",
      //mode: 'no-cors',
    }

    return  fetch("http://0.0.0.0:8080/", ops)
      .then(resp => {
        console.log(resp);
        if (resp.status === 200) return resp.json();
        else return { id: -1, phrase: "Deu erro mané!" }
      })
      .catch(error => {
        console.error("There is an error!!!", error)
      })
}

