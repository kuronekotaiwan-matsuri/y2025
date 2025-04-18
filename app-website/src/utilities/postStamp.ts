// スタンプ情報を、GASサーバーへ非同期でPOSTする

const GAS_URL = "https://script.google.com/macros/s/AKfycbzM7dAPaN9Arm17RVl52K2VIrXwVWmUVQ31GLrFN5JzTDr4av1_EkUWZa1LQxBH7zo4/exec";

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

