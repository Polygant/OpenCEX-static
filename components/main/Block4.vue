<template>
  <div class="content block4">
    <div class="grid grid-cols-3 block4-grid">
      <div class="block4-col">
        <div class="block4-img">
          <img src="/img/bottom1.png" />
        </div>
        <div class="subTitle">
          Secure Wallets
        </div>
        <div class="subText">
          Keep your digital assets in user wallets
        </div>
      </div>
      <div class="block4-col">
        <div class="block4-img">
          <img src="/img/bottom2.png" />
        </div>
        <div class="subTitle">
          Operating Speed
        </div>
        <div class="subText">
          Maximum processing speed of
          your transactions.
        </div>
      </div>
      <div class="block4-col">
        <div class="block4-img">
          <img src="/img/bottom3.png" />
        </div>
        <div class="subTitle">
          24/7 Support
        </div>
        <div class="subText">
          Instant, friendly and always
          ready to help.
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.block4 {
  padding: 160px 0 129px;
}
.subTitle {
  font-size: 32px;
  font-weight: 700;
  margin-bottom: 18px;
}
.subText {
  font-size: 20px;
  padding: 0 80px;
}
.block4-col {
  text-align: center;
  position: relative;
}
.block4-col:before {
  content: "";
  display: block;
  position: absolute;
  width: 1px;
  height: 180px;
  left: 0;
  top: 174px;
  background: #D9D9D9;
}
.block4-col:first-child:before {
  display: none;
}
@media(max-width: 900px) {
  .block4-col:before {
    display: none;
  }
}
.block4-col img {
  display: inline-block;
}
.block4-img {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 250px;
  margin-bottom: 62px;
}
@media (max-width: 900px) {
  .block4-grid {
    display: flex !important;
    flex-direction: column;
  }
  .block4 {
    padding: 30px 0 30px;
  }
  .block4-img {
    height: 100px;
    margin-bottom: 17px;
  }
  .block4-col img {
    height: 100px;
    margin-bottom: -10px;
  }
  .subTitle {
    font-size: 26px;
    margin-bottom: 7px;
  }
  .subText {
    font-size: 14px;
  }
}
</style>
