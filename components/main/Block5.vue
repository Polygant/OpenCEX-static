<template>
  <div class="content block5">
    <div class="grid grid-cols-5 block5-grid">
      <div class="col-span-3 block5-left">
        <h3>{{ this.$config.axios.title }} — buy, sell, accept and store cryptocurrency, such as Bitcoin, Ethereum and Tether USDT </h3>
        <p class="block5-text">{{ this.$config.axios.title }} is a platform that makes it easy to work with cryptocurrencies: a secure wallet for storage and an exchange for trading. Cryptoexchange {{ this.$config.axios.title }} is equipped with modern technologies that allow the exchange of crypto assets in the most productive way.</p>
      </div>
      <div class="col-span-2"
           v-if="this.$config.axios.twitter || this.$config.axios.telegram || this.$config.axios.facebook || this.$config.axios.linkedin">
        <div class="socials-wrapper">
          <p class="text-center pb-2">
            And subscribe to our social pages to quickly find
            out news and announcements:
          </p>
          <div
            class="socials">
            <a v-if="this.$config.axios.twitter" :href="this.$config.axios.twitter" class="social-tw"><img src="/img/1.png" /></a>
            <a v-if="this.$config.axios.telegram" :href="this.$config.axios.telegram" class="social-tg"><img src="/img/2.png" /></a>
            <a v-if="this.$config.axios.facebook" :href="this.$config.axios.facebook" class="social-fb"><img src="/img/3.png" /></a>
            <a v-if="this.$config.axios.linkedin" :href="this.$config.axios.linkedin" class="social-ld"><img src="/img/4.png" /></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
.socials-wrapper {
  padding: 72px 59px;
  background: #EDF1FA;
  border-radius: 38px;
  text-align: center;
}
.socials-wrapper p {
  font-size: 20px;
  padding-bottom: 30px;
}
.socials {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.socials a {
  display: block;
  width: 48%;
  margin-bottom: 23px;
}
.block5-text {
  font-size: 24px;
}
.block5 {
  padding-top: 30px;
  padding-bottom: 114px;
}
.block5-left {
  padding-right: 60px;
  padding-top: 0;
}

@media (max-width: 900px) {
  body h3 {
    margin-bottom: 12px;
  }
  .block5-grid {
    display: flex !important;
    flex-direction: column;
  }
  .block5-left {
    padding-left: 0;
    padding-right: 0;
  }
  .block5-text {
    font-size: 15px;
    margin-bottom: 40px;
  }
  .socials-wrapper {
    padding: 19px 21px;
    border-radius: 5px;
  }
  .socials-wrapper p {
    font-size: 14px;
    padding-bottom: 19px;
  }
  .socials a {
    margin-bottom: 12px;
    overflow: hidden;
    border-radius: 5px;
  }
  .block5 {
    padding-bottom: 35px;
  }
  .social-tw {
    background: #66B6FF;
  }
  .social-tg {
    background: #7BA4F3;
  }
  .social-fb {
    background: #6271B6;
  }
  .social-ld {
    background: #6588C9;
  }
}
</style>
