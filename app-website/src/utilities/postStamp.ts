// スタンプ情報を、GASサーバーへ非同期でPOSTする

//const GAS_URL12 = "https://script.google.com/macros/s/AKfycbwdtw-0f-cucTO7XFCVeCuLLiof5b9mmu5U89tu1w-xabkNNy8Dv-6vso5R6A60u2tI/exec";
const GAS_URL = "https://script.google.com/macros/s/AKfycbxMBCCxug018E3fb9V0dEVGRd2_wjwfliGkcRqN0olQVqPEcpk-8knmVQoMA6hW6P15/exec";


export const postStamp = (userId: string, stampId: string) => {
    const data = {
        uuid: userId,
        stamp_id: stampId
    };
    fetch(GAS_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data),
        mode: "cors"
      })
      .then(res => res.text())
      .then(text => console.log(text))
      .catch(err => console.error(err));
}

