<template>
	<div class="loader-block" :style="cssProps">
		<div class="loader">
			<div class="spinner-border" role="status">
				<span class="sr-only">Loading...</span>
			</div>
			<div class="spinner-grow" role="status">
				<span class="sr-only">Loading...</span>
			</div>
		</div>
	</div>
</template>

<script>

export default {
	props: ['color', 'width', 'height'],
	computed: {
    cssProps() {
      return {
        'background-color': this.color,
        'width': `${this.width}px`,
        'height': `${this.height}px`
      }
    }
  }
}
</script>


<style scoped>
.spinner-border,
.spinner-grow {
  width: 3rem;
  height: 3rem;
}
.loader-block {
	border-radius: 20px;
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	opacity: .3;
	/* background: #FFF; */
}
.loader {
	position: absolute;
	left: 50%;
	top: 50%;
	margin-top: -35px;
	margin-left: -35px;
	width: 70px !important;
	height: 70px !important;
}

@media(max-width: 550px) {
	.loader-block {
		display: none;
	}
}

</style>
