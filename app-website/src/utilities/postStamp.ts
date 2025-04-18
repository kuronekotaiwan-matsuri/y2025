// スタンプ情報を、GASサーバーへ非同期でPOSTする

const GAS_URL = "https://script.google.com/macros/s/AKfycbwuMJ8oLp6Hv-on1d8jhS5T2XodEVH-B4CISJgeHMPGKGYmUAJDny5efzYA02JO-RDR/exec";

export const postStamp = (userId: string, stampId: string) => {
    const data = {
        userId: userId,
        stampId: stampId
    };
    fetch(GAS_URL, {
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

