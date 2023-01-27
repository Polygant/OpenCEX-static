<template>
  <div class="error-wrapper">
    <div class="error">
      <a :href="homeLink">
        <img class="error__logo" src="/img/logo_st-black.svg" />
      </a>
      <div class="error__title">{{ error.statusCode }}</div>
      <div class="error__subtitle">{{ subtitle }}</div>
      <div class="error__text-block">{{ details }}</div>
      <a :href="homeLink" class="error__go-home-button">
        {{ $t("errors.go_back_button") }}
      </a>
    </div>
  </div>
</template>

<script>
export default {
  layout: "errorLayout",

  props: ["error"],
  head() {
    return {
      title: this.$t("meta404Title"),
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.$t("meta404Descr"),
        },
        {
          hid: "og:title",
          name: "og:title",
          content: this.$t("meta404Title"),
        },
        {
          hid: "og:description",
          name: "og:description",
          content: this.$t("meta404Descr"),
        },
      ],
    };
  },

  computed: {
    homeLink() {
      return "/";
    },

    coins() {
      return ["btc", "xrp", "rep", "usdt", "eth"];
    },

    subtitle() {
      const subtitles = {
        404: this.$t("errors.subtitles.404"),
        default: this.$t("errors.subtitles.default"),
      };

      return subtitles[this.error.statusCode] || subtitles.default;
    },

    details() {
      const details = {
        404: this.$t("errors.details.404"),
        default: this.$t("errors.details.default"),
      };

      return details[this.error.statusCode] || details.default;
    },
  },
};
</script>

<style lang="scss">
.error-wrapper {
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: auto;
}
.error {
  font-family: Montserrat;
  color: #1b1a1a;
  display: flex;
  flex-direction: column;
  align-items: center;
  // padding-top: 102px;

  &__logo {
    width: 400px;
    max-width: 100%;
  }

  &__header,
  &__container {
    padding: 15px 22px;
  }

  &__container {
    display: flex;
    max-width: 1870px;
    margin: 0 auto;
    margin-top: 37px;

    @media (max-width: 1200px) {
      display: block;
      padding-bottom: 150px;
    }
  }

  &__text-block {
    font-size: 20px;
    font-weight: 400;
    letter-spacing: 0em;
  }

  &__title {
    font-size: 120px;
    font-weight: 600;
    letter-spacing: 0.1em;
    line-height: 1;
    margin-top: 81px;
  }

  &__subtitle {
    text-transform: uppercase;
    font-size: 54px;
    font-weight: 500;
    letter-spacing: 0em;
  }

  &__explaination {
    font-size: 28px;
    font-weight: 400;
    margin-top: -9px;
    margin-bottom: 0;
    line-height: initial;

    @media (max-width: 1200px) {
      margin-top: 10px;
    }
  }

  &__go-home-button {
    min-width: 262px;
    text-align: center;
    padding: 7px 15px;
    color: white !important;
    text-decoration: none !important;
    font-size: 20px;
    font-weight: 600;
    line-height: 45px;
    letter-spacing: 0.03em;
    text-align: center;
    background: #6053C6;
    border-radius: 7px;
    margin-top: 45px;

    @media (max-width: 1200px) {
      font-size: 23px;
      padding: 20px 30px;
    }
  }

  &__images {
    position: relative;
    width: 672px;
    max-width: 100%;
    left: 10px;

    @media (max-width: 1200px) {
      margin-left: auto;
      margin-right: auto;
    }
  }

  &__main-image {
    width: 424px;
    max-width: 100%;
    display: block;
    padding-top: 150px;
    margin: 0 auto 0;
  }

  &__links {
    margin-top: 114px;
    display: flex;
    flex-wrap: wrap;

    @media (max-width: 1200px) {
      justify-content: center;
    }
  }

  &__link {
    font-size: 20px;
    font-weight: 600;
    margin-right: 53px;
    color: #4267a3 !important;
    text-decoration: none !important;

    @media (max-width: 1200px) {
      margin: 20px;
    }
  }
}

.levitated-coin {
  position: absolute;
  width: 11%;

  &_n_1 {
    top: 50%;
    left: 6%;
  }
  &_n_2 {
    top: 21%;
    left: 13%;
  }
  &_n_3 {
    top: 3%;
    left: 44.5%;
  }
  &_n_4 {
    top: 21%;
    right: 13%;
  }
  &_n_5 {
    top: 50%;
    right: 6%;
  }
}
</style>
