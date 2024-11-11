// HTMLが読み込み終わったらjs実行させる
document.addEventListener("DOMContentLoaded", function () {

  // 現在の時間を表示する関数を定義してる。関数？変数？
  // ここは関数を定義しているだけなので時間を表示するだけで更新はされない
  function updateTime() {
    // constは定数の宣言。nowという定数にDateオブジェクトで現在の日付と時刻を取得している
    // 変数じゃなくて定数。一度値を代入したら変更できない。now定数の中身は一生newDateのまま
    // ちなみにNew Dateオブジェクトの中身は取得した瞬間の年月日時分秒
    const now = new Date();
    // now定数から.getHoursで時（hour）を取得。.toString()で文字列に変換して.padStart(2, '0')で2桁表示。
    // 一桁の場合は0追加
    const hours = now.getHours().toString().padStart(2, '0');
    //hourと同じ理屈で分を取得し変換
    const minutes = now.getMinutes().toString().padStart(2, '0');
    //hourと同じ理屈で秒を取得し変換
    const seconds = now.getSeconds().toString().padStart(2, '0');
    // currenttimeという定数に時間・分・秒をくっつけて格納
    const currentTime = `${hours}:${minutes}:${seconds}`;
    
    // ID(current-time)を取得、そのテキスト要素にcurrentTime定数をぶち込んどく
    document.getElementById("current-time").textContent = `現在の時間: ${currentTime}`;
  }

  // updateTimeという関数を実行
  updateTime();
  // updateTime関数を1000sm（つまり1秒）毎に実行。
  // これが無いとページを開いた時間が表示されて更新されない残念時計になる
  setInterval(updateTime, 1000);
});


