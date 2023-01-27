<template>
  <div>
    <Header />
    <div :class="['container-fluid', getRoute]">
      <nuxt />
    </div>
    <LazyHydrate when-visible>
      <Footer />
    </LazyHydrate>
  </div>
</template>

<script>
import LazyHydrate from 'vue-lazy-hydration';
import Footer from '@/components/Footer'
import Header from '@/components/Header'

export default {
  components: { Header, Footer, LazyHydrate },
  data() {
    return {
      pageUrl: ''
    }
  },
  head() {
    return {
      title: `${this.$config.axios.title} ${this.$t('title')}`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: `${this.$config.title} ${this.$t('metaMainDescr')}`,
        },
        {
          hid: 'og:local',
          name: 'og:local',
          content: this.setMetaLocale,
        },
        {
          hid: 'og:site_name',
          name: 'og:site_name',
          content: this.$config.axios.title,
        },
        {
          hid: 'og:image:width',
          name: 'og:image:width',
          content: 506,
        },
        {
          hid: 'og:image:height',
          name: 'og:image:height',
          content: 266,
        },
        {
          hid: 'og:url',
          name: 'og:url',
          content: this.pageUrl,
        },
        {
          hid: "twitter:url",
          name: "twitter:url",
          content: this.pageUrl,
        },
        {
          hid: "twitter:title",
          name: "twitter:title",
          content: `${this.$config.axios.title} ${this.$t('title')}`
        },
        {
          hid: "twitter:description",
          name: "twitter:description",
          content: `${this.$config.axios.title} ${this.$t('metaMainDescr')}`,
        },
        {
          hid: "t-type",
          name: "twitter:card",
          content: 'summary_large_image',
        },
      ],
    }
  },
  created() {
    this.$i18n.setLocale(this.$route.params.lang)
  },
  updated() {
    this.pageUrl = location.origin + this.$route.path
  },
  mounted() {
    localStorage.setItem('lang', this.$route.params.lang)
    this.pageUrl = location.origin + this.$route.path;
  },
  computed: {
    setMetaLocale() {
      if(this.$route.params.lang === 'ru') {
        return 'ru_RU'
      } else if(this.$route.params.lang === 'en') {
        return 'en_US'
      }
    },
    getRoute() {
      if (this.$route.name === 'index') {
        return 'main_page'
      } else {
        return 'px-0'
      }
    },
  },
}
</script>
