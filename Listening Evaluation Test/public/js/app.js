const firebaseConfig = {
  apiKey: "AIzaSyCy00mRtiXyK17e869bzclBcoLrZ-fp7z0",
  authDomain: "listeningevaluationtest-8073a.firebaseapp.com",
  projectId: "listeningevaluationtest-8073a",
  storageBucket: "listeningevaluationtest-8073a.firebasestorage.app",
  messagingSenderId: "450042441510",
  appId: "1:450042441510:web:9d5a22ddf8421c5ac99be7"
  };
const app= firebase.initializeApp(firebaseConfig);  

  // Auth, Realtime Database のインスタンスを取得
const auth = firebase.auth();
const database = firebase.database();


// 変数の初期化
let audio1_1Played = false;
let audio1_2Played = false;

// 音声1の再生終了を検知
document.getElementById("audio1_1").addEventListener("ended", function() {
    audio1_1Played = true;
    console.log("音声1が終了しました");
    enableRadioButtons1();
});

// 音声2の再生終了を検知
document.getElementById("audio1_2").addEventListener("ended", function() {
    audio1_2Played = true;
    console.log("音声2が終了しました");
    enableRadioButtons1();
});

// 両方の音声が再生終了したらラジオボタンを有効化
function enableRadioButtons1() {
    if (audio1_1Played && audio1_2Played) {
    console.log("両方の音声が終了しました。ラジオボタンを有効化します。");
    document.getElementById("question1").disabled = false;
    }
}

// 変数の初期化
let audio2_1Played = false;
let audio2_2Played = false;

// 音声1の再生終了を検知
document.getElementById("audio2_1").addEventListener("ended", function() {
    audio2_1Played = true;
    console.log("音声1が終了しました");
    enableRadioButtons2();
});

// 音声2の再生終了を検知
document.getElementById("audio2_2").addEventListener("ended", function() {
    audio2_2Played = true;
    console.log("音声2が終了しました");
    enableRadioButtons2();
});

// 両方の音声が再生終了したらラジオボタンを有効化
function enableRadioButtons2() {
    if (audio2_1Played && audio2_2Played) {
    console.log("両方の音声が終了しました。ラジオボタンを有効化します。");
    document.getElementById("question2").disabled = false;
    }
}
// 変数の初期化
let audio3_1Played = false;
let audio3_2Played = false;

// 音声1の再生終了を検知
document.getElementById("audio3_1").addEventListener("ended", function() {
    audio3_1Played = true;
    console.log("音声1が終了しました");
    enableRadioButtons3();
});

// 音声2の再生終了を検知
document.getElementById("audio3_2").addEventListener("ended", function() {
    audio3_2Played = true;
    console.log("音声2が終了しました");
    enableRadioButtons3();
});

// 両方の音声が再生終了したらラジオボタンを有効化
function enableRadioButtons3() {
    if (audio3_1Played && audio3_2Played) {
    console.log("両方の音声が終了しました。ラジオボタンを有効化します。");
    document.getElementById("question3").disabled = false;
    }
}

// 変数の初期化
let audio4_1Played = false;
let audio4_2Played = false;

// 音声1の再生終了を検知
document.getElementById("audio4_1").addEventListener("ended", function() {
    audio4_1Played = true;
    console.log("音声1が終了しました");
    enableRadioButtons4();
});

// 音声2の再生終了を検知
document.getElementById("audio4_2").addEventListener("ended", function() {
    audio4_2Played = true;
    console.log("音声2が終了しました");
    enableRadioButtons4();
});

// 両方の音声が再生終了したらラジオボタンを有効化
function enableRadioButtons4() {
    if (audio4_1Played && audio4_2Played) {
    console.log("両方の音声が終了しました。ラジオボタンを有効化します。");
    document.getElementById("question4").disabled = false;
    }
}

// 変数の初期化
let audio5_1Played = false;
let audio5_2Played = false;

// 音声1の再生終了を検知
document.getElementById("audio5_1").addEventListener("ended", function() {
    audio5_1Played = true;
    console.log("音声1が終了しました");
    enableRadioButtons5();
});

// 音声2の再生終了を検知
document.getElementById("audio5_2").addEventListener("ended", function() {
    audio5_2Played = true;
    console.log("音声2が終了しました");
    enableRadioButtons5();
});

// 両方の音声が再生終了したらラジオボタンを有効化
function enableRadioButtons5() {
    if (audio5_1Played && audio5_2Played) {
    console.log("両方の音声が終了しました。ラジオボタンを有効化します。");
    document.getElementById("question5").disabled = false;
    }
}

// 変数の初期化
let audio6_1Played = false;
let audio6_2Played = false;

// 音声1の再生終了を検知
document.getElementById("audio6_1").addEventListener("ended", function() {
    audio6_1Played = true;
    console.log("音声1が終了しました");
    enableRadioButtons6();
});

// 音声2の再生終了を検知
document.getElementById("audio6_2").addEventListener("ended", function() {
    audio6_2Played = true;
    console.log("音声2が終了しました");
    enableRadioButtons6();
});

// 両方の音声が再生終了したらラジオボタンを有効化
function enableRadioButtons6() {
    if (audio6_1Played && audio6_2Played) {
    console.log("両方の音声が終了しました。ラジオボタンを有効化します。");
    document.getElementById("question6").disabled = false;
    }
}

// 変数の初期化
let audio7_1Played = false;
let audio7_2Played = false;

// 音声1の再生終了を検知
document.getElementById("audio7_1").addEventListener("ended", function() {
    audio7_1Played = true;
    console.log("音声1が終了しました");
    enableRadioButtons7();
});

// 音声2の再生終了を検知
document.getElementById("audio7_2").addEventListener("ended", function() {
    audio7_2Played = true;
    console.log("音声2が終了しました");
    enableRadioButtons7();
});

// 両方の音声が再生終了したらラジオボタンを有効化
function enableRadioButtons7() {
    if (audio7_1Played && audio7_2Played) {
    console.log("両方の音声が終了しました。ラジオボタンを有効化します。");
    document.getElementById("question7").disabled = false;
    }
}

// 変数の初期化
let audio8_1Played = false;
let audio8_2Played = false;

// 音声1の再生終了を検知
document.getElementById("audio8_1").addEventListener("ended", function() {
    audio8_1Played = true;
    console.log("音声1が終了しました");
    enableRadioButtons8();
});

// 音声2の再生終了を検知
document.getElementById("audio8_2").addEventListener("ended", function() {
    audio8_2Played = true;
    console.log("音声2が終了しました");
    enableRadioButtons8();
});

// 両方の音声が再生終了したらラジオボタンを有効化
function enableRadioButtons8() {
    if (audio8_1Played && audio8_2Played) {
    console.log("両方の音声が終了しました。ラジオボタンを有効化します。");
    document.getElementById("question8").disabled = false;
    }
}

// 変数の初期化
let audio9_1Played = false;
let audio9_2Played = false;

// 音声1の再生終了を検知
document.getElementById("audio9_1").addEventListener("ended", function() {
    audio9_1Played = true;
    console.log("音声1が終了しました");
    enableRadioButtons9();
});

// 音声2の再生終了を検知
document.getElementById("audio9_2").addEventListener("ended", function() {
    audio9_2Played = true;
    console.log("音声2が終了しました");
    enableRadioButtons9();
});

// 両方の音声が再生終了したらラジオボタンを有効化
function enableRadioButtons9() {
    if (audio9_1Played && audio9_2Played) {
    console.log("両方の音声が終了しました。ラジオボタンを有効化します。");
    document.getElementById("question9").disabled = false;
    }
}

// 変数の初期化
let audio10_1Played = false;
let audio10_2Played = false;

// 音声1の再生終了を検知
document.getElementById("audio10_1").addEventListener("ended", function() {
    audio10_1Played = true;
    console.log("音声1が終了しました");
    enableRadioButtons10();
});

// 音声2の再生終了を検知
document.getElementById("audio10_2").addEventListener("ended", function() {
    audio10_2Played = true;
    console.log("音声2が終了しました");
    enableRadioButtons10();
});

// 両方の音声が再生終了したらラジオボタンを有効化
function enableRadioButtons10() {
    if (audio10_1Played && audio10_2Played) {
    console.log("両方の音声が終了しました。ラジオボタンを有効化します。");
    document.getElementById("question10").disabled = false;
    }
}

// 変数の初期化
let audio11_1Played = false;
let audio11_2Played = false;

// 音声1の再生終了を検知
document.getElementById("audio11_1").addEventListener("ended", function() {
    audio11_1Played = true;
    console.log("音声1が終了しました");
    enableRadioButtons11();
});

// 音声2の再生終了を検知
document.getElementById("audio11_2").addEventListener("ended", function() {
    audio11_2Played = true;
    console.log("音声2が終了しました");
    enableRadioButtons11();
});

// 両方の音声が再生終了したらラジオボタンを有効化
function enableRadioButtons11() {
    if (audio11_1Played && audio11_2Played) {
    console.log("両方の音声が終了しました。ラジオボタンを有効化します。");
    document.getElementById("question11").disabled = false;
    }
}

// 変数の初期化
let audio12_1Played = false;
let audio12_2Played = false;

// 音声1の再生終了を検知
document.getElementById("audio12_1").addEventListener("ended", function() {
    audio12_1Played = true;
    console.log("音声1が終了しました");
    enableRadioButtons12();
});

// 音声2の再生終了を検知
document.getElementById("audio12_2").addEventListener("ended", function() {
    audio12_2Played = true;
    console.log("音声2が終了しました");
    enableRadioButtons12();
});

// 両方の音声が再生終了したらラジオボタンを有効化
function enableRadioButtons12() {
    if (audio12_1Played && audio12_2Played) {
    console.log("両方の音声が終了しました。ラジオボタンを有効化します。");
    document.getElementById("question12").disabled = false;
    }
}

// 変数の初期化
let audio13_1Played = false;
let audio13_2Played = false;

// 音声1の再生終了を検知
document.getElementById("audio13_1").addEventListener("ended", function() {
    audio13_1Played = true;
    console.log("音声1が終了しました");
    enableRadioButtons13();
});

// 音声2の再生終了を検知
document.getElementById("audio13_2").addEventListener("ended", function() {
    audio13_2Played = true;
    console.log("音声2が終了しました");
    enableRadioButtons13();
});

// 両方の音声が再生終了したらラジオボタンを有効化
function enableRadioButtons13() {
    if (audio13_1Played && audio13_2Played) {
    console.log("両方の音声が終了しました。ラジオボタンを有効化します。");
    document.getElementById("question13").disabled = false;
    }
}

// 変数の初期化
let audio14_1Played = false;
let audio14_2Played = false;

// 音声1の再生終了を検知
document.getElementById("audio14_1").addEventListener("ended", function() {
    audio14_1Played = true;
    console.log("音声1が終了しました");
    enableRadioButtons14();
});

// 音声2の再生終了を検知
document.getElementById("audio14_2").addEventListener("ended", function() {
    audio14_2Played = true;
    console.log("音声2が終了しました");
    enableRadioButtons14();
});

// 両方の音声が再生終了したらラジオボタンを有効化
function enableRadioButtons14() {
    if (audio14_1Played && audio14_2Played) {
    console.log("両方の音声が終了しました。ラジオボタンを有効化します。");
    document.getElementById("question14").disabled = false;
    }
}

// 変数の初期化
let audio15_1Played = false;
let audio15_2Played = false;

// 音声1の再生終了を検知
document.getElementById("audio15_1").addEventListener("ended", function() {
    audio15_1Played = true;
    console.log("音声1が終了しました");
    enableRadioButtons15();
});

// 音声2の再生終了を検知
document.getElementById("audio15_2").addEventListener("ended", function() {
    audio15_2Played = true;
    console.log("音声2が終了しました");
    enableRadioButtons15();
});

// 両方の音声が再生終了したらラジオボタンを有効化
function enableRadioButtons15() {
    if (audio15_1Played && audio15_2Played) {
    console.log("両方の音声が終了しました。ラジオボタンを有効化します。");
    document.getElementById("question15").disabled = false;
    }
}

// 変数の初期化
let audio16_1Played = false;
let audio16_2Played = false;

// 音声1の再生終了を検知
document.getElementById("audio16_1").addEventListener("ended", function() {
    audio16_1Played = true;
    console.log("音声1が終了しました");
    enableRadioButtons16();
});

// 音声2の再生終了を検知
document.getElementById("audio16_2").addEventListener("ended", function() {
    audio16_2Played = true;
    console.log("音声2が終了しました");
    enableRadioButtons16();
});

// 両方の音声が再生終了したらラジオボタンを有効化
function enableRadioButtons16() {
    if (audio16_1Played && audio16_2Played) {
    console.log("両方の音声が終了しました。ラジオボタンを有効化します。");
    document.getElementById("question16").disabled = false;
    }
}

// 変数の初期化
let audio17_1Played = false;
let audio17_2Played = false;

// 音声1の再生終了を検知
document.getElementById("audio17_1").addEventListener("ended", function() {
    audio17_1Played = true;
    console.log("音声1が終了しました");
    enableRadioButtons17();
});

// 音声2の再生終了を検知
document.getElementById("audio17_2").addEventListener("ended", function() {
    audio17_2Played = true;
    console.log("音声2が終了しました");
    enableRadioButtons17();
});

// 両方の音声が再生終了したらラジオボタンを有効化
function enableRadioButtons17() {
    if (audio17_1Played && audio17_2Played) {
    console.log("両方の音声が終了しました。ラジオボタンを有効化します。");
    document.getElementById("question17").disabled = false;
    }
}

// 変数の初期化
let audio18_1Played = false;
let audio18_2Played = false;

// 音声1の再生終了を検知
document.getElementById("audio18_1").addEventListener("ended", function() {
    audio18_1Played = true;
    console.log("音声1が終了しました");
    enableRadioButtons18();
});

// 音声2の再生終了を検知
document.getElementById("audio18_2").addEventListener("ended", function() {
    audio18_2Played = true;
    console.log("音声2が終了しました");
    enableRadioButtons18();
});

// 両方の音声が再生終了したらラジオボタンを有効化
function enableRadioButtons18() {
    if (audio18_1Played && audio18_2Played) {
    console.log("両方の音声が終了しました。ラジオボタンを有効化します。");
    document.getElementById("question18").disabled = false;
    }
}