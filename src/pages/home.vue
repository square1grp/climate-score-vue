<template>
  <div class="home-page">
    <section class="hero">
      <b-container fluid>
        <b-row>
          <b-col cols="12" class="p-0">
            <b-carousel :interval="2500">
              <b-carousel-slide
                v-for="(heroImgSrc, index) in heroImageSrcList"
                :key="index"
                :img-src="heroImgSrc"
              />
            </b-carousel>

            <b-row class="hero-content mx-0">
              <b-col cols="12" lg="6" offset-lg="3">
                <h1 class="text-center mb-5">
                  How will climate change
                  <br class="d-none d-lg-block" />affect your home?
                </h1>
                <p class="text-center mb-3 text-uppercase">
                  Get your
                  <b>FREE</b> Climate score
                </p>

                <b-row class="input-address-container">
                  <b-col lg="8" offset-lg="2">
                    <b-input-group class="w-100">
                      <b-input-group-prepend v-on:click="redirectToScore">
                        <b-input-group-text id="input-address">
                          <b-img :src="eyeDropImgSrc" height="20" />
                        </b-input-group-text>
                      </b-input-group-prepend>

                      <place-autocomplete-field
                        class="w-100"
                        v-model="inputAddr"
                        placeholder="Enter an an address, zipcode, or location"
                        api-key="AIzaSyDv0i6Ea6hzffPDWNrt1bp30Z5ikzgHZLA"
                      />
                    </b-input-group>
                  </b-col>
                </b-row>
              </b-col>
            </b-row>
          </b-col>
        </b-row>
      </b-container>
    </section>

    <section class="our-mission">
      <b-container>
        <b-row>
          <b-col cols="12">
            <h5 class="text-center text-uppercase mb-3 mb-lg-5">Our Mission</h5>

            <h1 class="text-center">Actionable climate change insight for your property.</h1>
          </b-col>

          <b-col md="5">
            <h5 class="text-center">Peace of mind for buyers and owners</h5>
            <p
              class="text-center"
            >Climate Score helps home buyers make informed decisions by delivering scientific predictions on climate change risks to individual properties.</p>
          </b-col>

          <b-col md="2" />

          <b-col md="5">
            <h5 class="text-center">Competitive edge for investors</h5>
            <p
              class="text-center"
            >Climate Score helps investors understand and prepare for climate change related risks. We provide a practical analysis of your existing portfolio and critical information during due diligence.</p>
          </b-col>
        </b-row>
      </b-container>
    </section>

    <section class="climate-score px-4 px-lg-0">
      <b-container>
        <b-row>
          <b-col cols="12">
            <h5 class="text-center text-uppercase mb-3 mb-lg-5">WHAT IS CLIMATE SCORE?</h5>

            <h1 class="text-center">Climate change info for investors and property owners.</h1>
          </b-col>
        </b-row>

        <b-row>
          <b-col class="pt-lg-5" cols="12" lg="4">
            <div class="w-100 property">
              <h5 class="text-center">Your risk for the next 30 years</h5>
              <p
                class="text-center"
              >Climate Score is the first definitive, easy-to-use property rating service based on expected changes to the world’s climate.</p>
            </div>

            <div class="w-100 property">
              <h5 class="text-center">Your individual factors asessed</h5>
              <p
                class="text-center"
              >Climate Score also gives you granular data on future risk of Fire, Flood, Temperature, Drought and Storm.</p>
            </div>
          </b-col>

          <b-col class="scorebase-column p-5" cols="12" lg="4">
            <h6 class="text-center text-uppercase">Your score</h6>

            <div
              class="score-base d-flex flex-column"
              v-bind:style="{ backgroundImage: `url(${scoreBaseImgSrc})` }"
            >
              <h2 class="text-center mb-5">Moderate risk</h2>
              <p class="score text-center m-auto">
                <b>42</b> / 100
              </p>
            </div>
          </b-col>

          <b-col class="pt-lg-5" cols="12" lg="4">
            <div class="w-100 property">
              <h5 class="text-center">A simple scoring system</h5>
              <p
                class="text-center"
              >Climate Score aggregates the climate hazards of flood, fire, temperature, drought, and storm into a single score for your property.</p>
            </div>

            <div class="w-100 property">
              <h5 class="text-center">Science made actionable</h5>
              <p
                class="text-center"
              >Climate Score taps trusted climate data from preeminent universities and government agencies and was developed by leading climate scientists.</p>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </section>

    <section class="about-us">
      <b-container>
        <b-row>
          <b-col cols="12">
            <h5 class="text-center text-uppercase mb-3 mb-lg-5">About us</h5>

            <h2
              class="text-center mb-5"
            >Founded by science, real estate and technology veterans with a passion for transparency, conservation, and consumer advocacy.</h2>
          </b-col>

          <b-col
            v-for="(headshotImgSrc, index) in headshotImgSrcList"
            :key="index"
            class="text-center p-lg-5 mb-3"
            cols="6"
            lg="4"
          >
            <b-img class="mb-3" :src="headshotImgSrc" />
            <h5 class="mb-3 text-center">Sam Eckhouse</h5>
            <h6 class="text-center">Lorem Ipsum</h6>
            <h6 class="text-center">
              <a href="/">LinkedIn</a>
            </h6>
          </b-col>
        </b-row>
      </b-container>
    </section>

    <section class="news-letter">
      <b-container>
        <b-row>
          <b-col cols="12">
            <h5 class="text-center text-uppercase mb-3 mb-lg-5">Stay in touch</h5>

            <h2 class="text-center mb-5">Get the latest with our newsletter</h2>
          </b-col>

          <b-col class="mb-5" cols="12" lg="4" offset-lg="4">
            <b-input-group class="mb-3">
              <b-form-input
                placeholder="Enter your email address..."
                aria-label="Enter your email address..."
              />
              <b-input-group-append>
                <button>Go</button>
              </b-input-group-append>
            </b-input-group>
          </b-col>

          <b-col cols="12">
            <h6 class="text-center">Have a question or feedback for us?</h6>
            <p class="text-center">
              Send us a note at
              <b>info@climatescore.com</b> and we will
              <br />get back to you as soon as possible.
            </p>
          </b-col>
        </b-row>
      </b-container>
    </section>
  </div>
</template>

<script>
import { mapActions } from "vuex";

import heroOneImgSrc from "../assets/images/Hero-1.png";
import heroTwoImgSrc from "../assets/images/Hero-2.png";
import heroThreeImgSrc from "../assets/images/Hero-3.png";
import eyeDropImgSrc from "../assets/images/eye-drop.png";
import headshot1ImgSrc from "../assets/images/Headshot1.png";
import headshot2ImgSrc from "../assets/images/Headshot2.png";
import headshot3ImgSrc from "../assets/images/Headshot3.png";
import headshot4ImgSrc from "../assets/images/Headshot4.png";
import headshot5ImgSrc from "../assets/images/Headshot5.png";
import headshot6ImgSrc from "../assets/images/Headshot6.png";
import scoreBaseImgSrc from "../assets/images/score-base.png";

export default {
  data() {
    return {
      heroImageSrcList: [heroOneImgSrc, heroTwoImgSrc, heroThreeImgSrc],
      eyeDropImgSrc: eyeDropImgSrc,
      scoreBaseImgSrc: scoreBaseImgSrc,
      headshotImgSrcList: [
        headshot1ImgSrc,
        headshot2ImgSrc,
        headshot3ImgSrc,
        headshot4ImgSrc,
        headshot5ImgSrc,
        headshot6ImgSrc
      ],
      inputAddr: ""
    };
  },
  methods: {
    ...mapActions("score", ["getScores"]),
    redirectToScore: function() {
      this.$router.push("/score");
    }
  },
  mounted() {
    this.getScores();
  }
};
</script>

<style lang="scss">
.home-page {
  section {
    padding-top: 40px;
    padding-bottom: 90px;

    h1 {
      margin-bottom: 100px;
      font-size: 60px;
    }

    h2 {
      font-size: 50px;
    }

    &.hero {
      position: relative;
      height: 850px;
      padding-top: 0px;

      .carousel {
        .carousel-item img {
          height: 850px;
          width: 100%;
          object-fit: cover;
        }
      }

      .hero-content {
        position: absolute;
        top: 0px;
        width: 100%;
        height: 100%;
        padding-top: 200px;

        h1 {
          color: #ffffff;
        }

        p {
          color: #ffffff;
          b {
            color: #ffef61;
          }
        }

        .input-address-container {
          position: relative;

          .input-group-prepend {
            position: absolute;
            height: 48px;
            z-index: 5;
            span {
              background-color: transparent;
              border: none;
            }
          }

          input {
            line-height: 48px;
            height: 48px;
            padding: 13px 20px 13px 50px;
            border-top-left-radius: 0.25rem;
            border-bottom-left-radius: 0.25rem;
            color: #4f4f4f;
          }
        }
      }
    }

    &.our-mission {
      background: #d2ffed;
    }

    &.climate-score {
      .property {
        margin-bottom: 100px;

        h6 {
          margin-bottom: 32px;
        }
      }

      .scorebase-column {
        background-color: #ffffff;
        box-shadow: 0px 2px 40px rgba(0, 0, 0, 0.2);
        border-radius: 0.25rem;

        .score-base {
          background-size: contain;
          background-repeat: no-repeat;
          height: 380px;

          h2 {
            font-size: 40px;
          }

          .score {
            font-size: 16px;
            font-weight: bold;

            b {
              font-size: 50px;
            }
          }
        }
      }
    }

    &.about-us {
      background-color: #fff5d3;
    }

    &.news-letter {
      background-color: #37a87a;
      padding-bottom: 40px;

      h2,
      h5,
      h6,
      p {
        color: #ffffff;
      }

      .input-group {
        input {
          height: 48px;
          padding: 15px;
        }
        button {
          background-color: #2ef4ae;
          color: #242424;
          border: none;
          padding: 15px 20px;
          line-height: 16px;
          font-weight: bold;
        }
      }
    }
  }

  @media screen and (max-width: 767px) {
    section {
      padding-bottom: 40px;

      h1 {
        font-size: 36px;
        line-height: 48px;
        margin-bottom: 40px;
      }

      h2 {
        font-size: 28px;
      }

      &.hero .hero-content .input-address-container input::placeholder {
        content: "Enter an address or ZIP code";
      }

      &.climate-score {
        .property {
          margin-bottom: 20px;
        }

        .scorebase-column {
          margin-bottom: 20px;
          .score-base h2 {
            font-size: 32px;
          }
        }
      }
    }
  }
}
</style>