// スタンプ情報を、GASサーバーへ非同期でPOSTする

const GAS_URL = "https://script.google.com/macros/s/AKfycbz-vhPl5wNgBOYIH4amWBJDA52g_HgU1zHo0u4WoEPdQl15eUZf80E11ju5oD78cjLE/exec";

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

