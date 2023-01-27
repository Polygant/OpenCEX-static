<template>
  <div class="main-top-wrapper">
    <div class="content">
      <div class="grid grid-cols-2 block1">
        <div class="block1-left">
          <h1>Start Your Crypto Business</h1>
          <p class="block-text">Trade crypto in the easiest and safest way!</p>
          <div class="course">
            <img src="/img/btc.svg" class="inline-block" />
            <span>BTC Price: {{ course.toFixed(2) }} USDT</span>
          </div>
          <a class="btn" href="/account/trade/BTC-USDT">Trade Bitcoin Now</a>
        </div>
        <div class="block1-right">
          <img src="/img/top.png" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ['course']
}
</script>
<style>
.main-top-wrapper {
  background: #292256;
  position: relative;
  padding: 157px 0 88px;
}
body h1 {
  color: #fff;
  padding-bottom: 29px;
  font-size: 60px;
  font-weight: 700;
  line-height: 64px;
}
.block-text {
  font-size: 24px;
  color: #FFF;
  padding-bottom: 29px;
}
.block1-left {
  padding-top: 100px;
}
.course {
  padding-bottom: 40px;
}
.course span {
  font-size: 18px;
  color: #fff;
  position: relative;
  left: 2px;
  top: 1px;
}
@media(max-width: 900px) {
  .block1 {
    display: flex !important;
    flex-direction: column;
    align-items: center;
  }
  .block1-left {
    order: 1;
    padding-top: 36px;
  }
  .main-top-wrapper {
    padding: 62px 0 45px;
  }
  .block1-left h1 {
    padding-bottom: 12px;
    line-height: 1.4;
  }
  .block-text {
    font-size: 18px;
  }
  .course span {
    font-size: 16px;
  }
  .course {
    padding-bottom: 25px;
  }
  .btn {
    height: 44px;
    font-size: 13px;
    padding: 15px 30px;
  }
}
</style>
