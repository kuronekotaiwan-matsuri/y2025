// スタンプ情報を、GASサーバーへ非同期でPOSTする

//const GAS_URL12 = "https://script.google.com/macros/s/AKfycbwdtw-0f-cucTO7XFCVeCuLLiof5b9mmu5U89tu1w-xabkNNy8Dv-6vso5R6A60u2tI/exec";
//const GAS_URL13 = "https://script.google.com/macros/s/AKfycbxMBCCxug018E3fb9V0dEVGRd2_wjwfliGkcRqN0olQVqPEcpk-8knmVQoMA6hW6P15/exec";
const GAS_URL = "https://script.google.com/macros/s/AKfycbxTBPqHIilhjObUQ1o67MnA1j0owBWrqXriGETDcikG2KzN7ufVtkeCuLzqs300lylO/exec";
const CF_URL = "https://us-central1-kuronekotaiwan-2025.cloudfunctions.net/insertToBigQuery";


export const postStamp_GAS = (userId: string, stampId: string) => {
    //const data = {
    //    uuid: userId,
    //    stamp_id: stampId
    //};
    const data = new URLSearchParams();
    data.append("uuid", userId);
    data.append("stamp_id", stampId);
    fetch(GAS_URL, {
        method: "POST",
        //headers: {
        //  "Content-Type": "application/json"
        //},
        //body: JSON.stringify(data),
        body: data,
        mode: "cors"
      })
      .then(res => res.text())
      .then(text => console.log(text))
      .catch(err => console.error(err));
}

export const postStamp = (userId: string, stampId: string) => {
  const data = {
      uuid: userId,
      stamp_id: stampId
  };
  fetch(CF_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
    .then(res => res.text())
    .then(text => console.log(text))
    .catch(err => console.error(err));
}
