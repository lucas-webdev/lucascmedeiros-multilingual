<template>
  <section id="banner">
    <div
      class="banner__layer banner__layer--back"
      data-type="parallax"
      data-depth="1.00"
    />
    <div
      class="banner__layer banner__layer--front"
      data-type="parallax"
      data-depth="0.60"
    />
    <h1 class="banner__title" v-html="bannerTitle" />
    <h3 class="banner__subtitle">
      {{ bannerSubtitle }}
    </h3>
  </section>
</template>

<style lang="scss">
$bannerHeight: 100vh;
$mainColor: #21a598;
#banner, .banner__layer {
  min-height: $bannerHeight;
  left: 0;
}
#banner {
  width: 100vw;
  height: $bannerHeight;
  overflow: hidden;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  .banner__layer {
    background-size: auto;
    background-repeat: no-repeat;
    width: 100%;
    height: $bannerHeight;
    position: fixed;

    &--back {
      background-position: center;
      background-image: url('../assets/images/technology-bg.jpg');
      background-size: 100%;
    }
    &--front {
      background-position: 85px;
      background-image: url('../assets/images/front-logos.png');
      background-size: 100%;
    }
  }

  .banner__title,
  .banner__subtitle {
    z-index: 1;
    font-weight: normal;
  }

  .banner__title {
    strong {
      color: $mainColor;
    }
  }
}
</style>

<script>
window.addEventListener('scroll', function (event) {
  let depth, i, layer, len, movement, translate3d
  const topDistance = this.pageYOffset
  const layers = document.querySelectorAll("[data-type='parallax']")
  for (i = 0, len = layers.length; i < len; i++) {
    layer = layers[i]
    depth = layer.getAttribute('data-depth')
    movement = -(topDistance * depth)
    translate3d = 'translate3d(0, ' + movement + 'px, 0)'
    layer.style['-webkit-transform'] = translate3d
    layer.style['-moz-transform'] = translate3d
    layer.style['-ms-transform'] = translate3d
    layer.style['-o-transform'] = translate3d
    layer.style.transform = translate3d
  }
})
export default {
  props: {
    bannerTitle: {
      type: String,
      default: ''
    },
    bannerSubtitle: {
      type: String,
      default: ''
    }
  }
}
</script>
