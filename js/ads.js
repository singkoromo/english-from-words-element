/**
 * ads.js — AdMob広告マネージャー
 * Web側はwindow.AdBridgeインターフェースのみ定義。
 * 実際のAdMob SDKはTWA/Bubblewrapのネイティブ側で統合する。
 */

const AdsManager = (() => {
  const CONFIG = {
    // 広告ユニットID（ユニットIDは後で本番IDに差し替える）
    banner:          "ca-app-pub-6632544968825889/8471654056",
    interstitial:    "ca-app-pub-3940256099942544/1033173712",
    rewarded:        "ca-app-pub-3940256099942544/5224354917",
    // 本番アプリID
    appId:           "ca-app-pub-6632544968825889~5233762950",
    // インタースティシャルを表示するクイズ完了回数の間隔
    interstitialEvery: 5,
  };

  let _quizCompleteCount = (() => {
    const v = localStorage.getItem("adQuizCount");
    return v ? parseInt(v, 10) : 0;
  })();

  // ── AdBridge（TWAネイティブ側からJS呼び出し用インターフェース） ──
  window.AdBridge = {
    // ネイティブ側が広告ロード完了を通知するときに呼ぶ
    onBannerLoaded() {
      const el = document.getElementById("ad-banner-placeholder");
      if (el) el.classList.add("loaded");
    },
    onBannerFailed() {
      // バナーロード失敗時はスペースを非表示にしてレイアウト崩れを防ぐ
      const el = document.getElementById("ad-banner-placeholder");
      if (el) el.style.display = "none";
    },
    onInterstitialClosed() {
      // インタースティシャルが閉じられた後の処理（必要に応じて拡張）
    },
    onRewardEarned(type, amount) {
      // リワード獲得時の処理（将来：ヒント解放など）
      console.log("[AdBridge] reward earned:", type, amount);
    },
  };

  // ── バナー広告 ──
  function initBanner() {
    if (window.Android && typeof window.Android.loadBannerAd === "function") {
      window.Android.loadBannerAd(CONFIG.banner);
    }
  }

  // ── インタースティシャル広告 ──
  function onQuizComplete() {
    _quizCompleteCount++;
    localStorage.setItem("adQuizCount", _quizCompleteCount);
    if (_quizCompleteCount % CONFIG.interstitialEvery === 0) {
      showInterstitial();
    }
  }

  function showInterstitial() {
    if (window.Android && typeof window.Android.showInterstitialAd === "function") {
      window.Android.showInterstitialAd(CONFIG.interstitial);
    }
  }

  // ── リワード広告（将来用：ヒント表示などに接続） ──
  function showRewarded(onEarned) {
    if (window.Android && typeof window.Android.showRewardedAd === "function") {
      window.Android.showRewardedAd(CONFIG.rewarded);
      // ネイティブ側は報酬付与時に AdBridge.onRewardEarned() を呼ぶ
      window.AdBridge._pendingRewardCallback = onEarned;
    } else {
      // フォールバック: ネイティブ未統合時はそのまま報酬を付与
      if (typeof onEarned === "function") onEarned();
    }
  }

  // ── 初期化 ──
  function init() {
    initBanner();
  }

  return { init, onQuizComplete, showInterstitial, showRewarded, CONFIG };
})();
