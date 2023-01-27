<template>
  <div class="main-bottom-part">
    <Block1 :course="info.btc_usdt_price" />
    <Block2 />
    <div class="trade">
      <div class="content" style="background-color: initial">
        <h3 class="text-center trade-title">{{ $t('bitcoin_price') }}</h3>
        <div class="graph-wrapper">
          <div class="btc-chart" v-if="dataGraph.length" :key="dataGraph.length">
            <div class="">
              <div data-highcharts-chart="0" class="overflow-hidden graph-wrapper">
                <div
                  style="width: 100%"
                  id="highcharts"
                  dir="ltr"
                  class="highcharts-container"
                ></div>
              </div>
            </div>
          </div>
          <div class="text-error" v-else>
            <div class="">
              <div class="content-disabled">
                <img width="100%" src="/img/graph-empty.png" alt="">
              </div>
            </div>
          </div>
        </div>
        <CurrencyList :filteredPairs="filteredPairs" />
      </div>
    </div>
    <Block4 />
    <Block5 />
  </div>
</template>

<script>
import numberFormatter from '~/mixins/numberFormatter.js'
import CurrencyList from '~/components/main/CurrencyList.vue'

import Block1 from '../components/main/Block1.vue'
import Block2 from '../components/main/Block2.vue'
import Block4 from '../components/main/Block4.vue'
import Block5 from '../components/main/Block5.vue'

export default {
  name: "Blog",
  components: { CurrencyList, Block1, Block2, Block4, Block5 },
  head() {
    return {
      title: `${this.$config.axios.title} ${this.$t('title')}`,
        meta: [
            {
                hid: "description",
                name: "description",
                content: `${this.$config.axios.title} ${this.$t("metaMainDescr")}`,
            },
            {
                hid: "og:title",
                name: "og:title",
                content: `${this.$config.axios.title} ${this.$t("metaMainTitle")}`,
            },
            {
                hid: "og:description",
                name: "og:description",
                content: `${this.$config.axios.title} ${this.$t("metaMainDescr")}`,
            },
        ],
    };
  },
  mixins: [numberFormatter],
  updated() {
    if (this.dataGraph.length) {
      this.drawGraph();
    }
  },
  async mounted() {
    this.$store.dispatch("getInfoMainPage");
    this.$store.dispatch("getGraphInfo");
    if (this.dataGraph.length) {
      this.drawGraph();
    }
  },
  computed: {
    p1() {
      return this.getPairs["USDT-RUB"]?.price.toFixed(2)
    },
    dataGraph() {
      return this.$store.state.dataGraph;
    },
    dataGraphMin() {
      return this.$store.state.dataGraphMin;
    },
    info() {
      return this.$store.getters.info;
    },
    getPairs() {
      return this.$store.getters.pairs_data;
    },
    filteredPairs() {
      if (this.getPairs) {
        return Object.values(this.getPairs).filter((pair) => {
          return pair.pair_data.quote.code !== "USDT" ? false : pair;
        });
      }
    },
  },
  methods: {
    drawGraph() {
      const monthNames = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sept",
        "Oct",
        "Nov",
        "Dec",
      ];
      this.$highcharts.stockChart("highcharts", {
        credits: {
          enabled: false,
        },
        navigator: {
          enabled: false,
        },
        scrollbar: {
          enabled: false,
        },
        rangeSelector: {
          enabled: false,
          inputEnabled: false,
        },
        plotOptions: {
          areaspline: {
            fillOpacity: 0.2,
          },
        },
        xAxis: {
          type: "date",
          startOnTick: true,
          ordinal: false,
          crosshair: true,
          offset: 0,
          labels: {
            enabled: true,
            formatter: function () {
              let date = new Date(this.value);
              if (date.getUTCHours()) {
                  return;
              }
              return date.getDate() + " " + monthNames[date.getMonth()];
            },
          },
        },
        yAxis: [
          {
            startOnTick: true,
            min: this.dataGraphMin,
            opposite: false,
            title: "",
            offset: 10,
            labels: {
              enabled: true,
            },
          },
        ],
        tooltip: {
          shared: true,
          valuePrefix: "$",
        },
        title: {
          text: "",
          align: "left",
          y: 14,
        },
        series: [
          {
            name: this.$t("bitcoinPrice"),
            data: this.dataGraph,
            type: "areaspline",
            color: "#FFF",
            fillOpacity: 0.2,
            lineColor: "#6352CD",
            tooltip: {
              valueDecimals: 2,
            },
          },
        ],
      });
    },
  },
}
</script>

<style lang='scss'>
body h3 {
  font-style: normal;
  font-weight: 700;
  font-size: 42px;
  line-height: 60px;
}
.trade {
  background: #EEF1F9;
  padding: 114px 0 138px;
}
.graph-wrapper {
  margin-bottom: 85px;
  overflow: hidden;
  border-radius: 20px;
}
.btc-chart-title {
  font-weight: 600;
  font-size: 24px;
  line-height: 35px;
  padding: 10px;
}
.trade-title {
  padding-bottom: 52px;
}
@media (max-width: 900px) {
  .trade {
    padding: 23px 0 31px;
  }
  .graph-wrapper {
    margin-bottom: 12px;
  }
}
.content-disabled {
  background: #FFF;
  border-radius: 10px;
  padding: 20px;
}
</style>
