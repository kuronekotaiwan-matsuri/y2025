// スタンプ情報を、GASサーバーへ非同期でPOSTする

const CF_URL = "https://us-central1-kuronekotaiwan-2025.cloudfunctions.net/insertToBigQuery";

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
