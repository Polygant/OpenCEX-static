<template>
	<div class="currency-list-main-page">
    <div class="chart-section-table-responsive table-responsive table-responsive--main">
      <div class="mobCurrencyList">
        <div v-for="pair in filteredPairs" :key="pair.volume" class="mobCurrencyList-item">
          <div class="mobCurrencyList-head">
           <span v-if="pair.pair_data.base.code" style="color: #50B1F9;">
              {{ pair.pair_data.base.code }}
              <span style="color: #1B1A1A; font-weight: 300">{{ pair?.pair_data?.base?.name?.name }}</span>
            </span>
          </div>
          <div class="mobCurrencyList-body">
            <div>
              <strong>{{ $t('price') }}</strong><br/>
              {{ pair.price ? pair.price.toFixed(2) : '-' }} USDT
            </div>
            <div>
              <strong>{{ $t('vol24h') }}</strong> <br/>
              {{ pair.volume ? pair.volume.toFixed(2) : '-' }} USDT
            </div>
            <div>
              <strong>{{ $t('price24h') }}</strong> <br/>
              <span :class="[pair.price_24h >= 0 ? 'text-green' : 'text-red']">{{ pair.price_24h.toFixed(2) }}%</span>
            </div>
          </div>
        </div>
      </div>
      <table id="currencyTable" class="table chart-section-table">
        <thead>
          <tr>
            <th scope="col" style="padding-left: 20px">{{ $t('currency') }}</th>
            <th scope="col">{{ $t('price') }}</th>
            <th scope="col">{{ $t('vol24h') }}</th>
            <th scope="col">{{ $t('price24h') }}</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="pair in filteredPairs" :key="pair.volume">
            <td class="text-bold" style="padding-left: 20px">
              <a>{{ pair.pair_data.base.code }}</a
              >
            </td>
            <td>{{ pair.price ? pair.price.toFixed(2) : '-' }} USDT</td>
            <td>
              {{ pair.volume ? pair.volume.toFixed(2) : '-' }} USDT
            </td>
            <td :class="[pair.price_24h >= 0 ? 'text-green' : 'text-red']">
              <span v-if="pair?.price_24h">
                {{ pair.price_24h.toFixed(2) }}%
              </span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
	</div>
</template>

<script>

export default {
	props: ['filteredPairs'],
	computed: {
		getCurrentLang() {
			return this.$store.getters.lang;
		},
	}
}
</script>

<style scoped>
.currency-list-main-page {
	width: 100%;
	color: rgb(62, 71, 95);
	margin-left: auto;
	margin-right: auto;
  background: #fff;
  box-shadow: 0px 0px 60px rgba(110, 127, 162, 0.15);
  border-radius: 10px;
  overflow: hidden;
}
.table {
  border-radius: 20px;
  width: 100%;
}
.currency-list-main-page tr:nth-of-type(odd) {
  background-color: #F8FAFD;
}
thead tr th {
  background: #6352CD !important;
  padding-top: 25px;
  padding-bottom: 20px;
  color: #FFF;
  text-align: left;
  text-transform: capitalize;
  font-weight: 700;
}
.table td {
  padding-top: 15px;
  padding-bottom: 15px;
  vertical-align: middle;
}
.table tr:last-child td {
  padding-bottom: 30px;
}
.text-bold a {
	font-size: 16px;
}
.mobCurrencyList {
  display: none;
}
@media (max-width: 800px) {
  #currencyTable {
    display: none;
  }
  .mobCurrencyList {
    display: block;
  }
}
.mobCurrencyList {

}
.mobCurrencyList-item {
  padding: 17px;
}
.mobCurrencyList-head {
  display: flex;
  justify-content: space-between;
}
.mobCurrencyList-body {
  display: flex;
  justify-content: space-between;
  padding-top: 20px;
}
.mobCurrencyList-item:nth-of-type(odd) {
  background: #F8FAFD;
}
.text-red {
  color: #E92323;
}
.text-green {
  color: #5FAB62;
}

@media (max-width: 600px) {
  .mobCurrencyList {
    font-size: 11px;
  }
}
</style>
