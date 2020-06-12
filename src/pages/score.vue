<template>
  <div class="score-page">
    <section>
      <b-container>
        <b-row>
          <b-col class="pt-lg-5" cols="12">
            <h1 class="text-center">How will climate change affect your home?</h1>
          </b-col>

          <b-col class="address justify-content-center d-flex align-items-center mb-5" cols="12">
            <b-img class="mr-3" :src="eyeDropImgSrc" height="20" />
            {{getAddress()}}
          </b-col>

          <b-col lg="6" offset-lg="3">
            <div class="score-panel py-4 mb-5">
              <h5 class="text-uppercase text-center">Your Score</h5>
              <br />
              <h2 class="text-center mb-5">Moderate risk</h2>

              <div class="donut-chart">
                <Doughnut :data="getAvgScoreData()" :options="getAvgScoreOptions()" />

                <p class="m-0 score">
                  <span class="m-auto">
                    <b>{{getAvgScore()}}</b> / 100
                  </span>
                </p>
              </div>

              <div class="p-3" />
            </div>
          </b-col>

          <b-col cols="12">
            <p class="text-center text-uppercase find-out-why">
              <a href="javascript:void(0)" v-on:click="redirectToReport()">Find out why</a>
              <br />
              <b-img :src="arrowDownImgSrc" />
            </p>
          </b-col>
        </b-row>
      </b-container>
    </section>
  </div>
</template>

<script>
import { mapState } from "vuex";
import Doughnut from "../components/Doughnut";
import eyeDropImgSrc from "../assets/images/eye-drop.png";
import arrowDownImgSrc from "../assets/images/arrow-down.png";

export default {
  components: { Doughnut },
  data() {
    return {
      eyeDropImgSrc: eyeDropImgSrc,
      arrowDownImgSrc: arrowDownImgSrc
    };
  },
  computed: {
    ...mapState({
      scores: state => state.score.scores
    })
  },
  methods: {
    getBackgroundColor: avgScore => {
      if (!avgScore) return ["#FFFFF", "#FFFFFF"];

      if (avgScore <= 8)
        return ["rgba(111, 207, 151, 1.0)", "rgba(111, 207, 151, 0.2)"];

      if (avgScore <= 21)
        return ["rgba(46, 244, 174, 1.0)", "rgba(46, 244, 174, 0.2)"];

      if (avgScore <= 42)
        return ["rgba(206, 252, 109, 1.0)", "rgba(206, 252, 109, 0.2)"];

      if (avgScore <= 61)
        return ["rgba(255, 239, 97, 1.0)", "rgba(255, 239, 97, 0.2)"];

      if (avgScore <= 72)
        return ["rgba(255, 216, 78, 1.0)", "rgba(255, 216, 78, 0.2)"];

      if (avgScore <= 92)
        return ["rgba(255, 121, 24, 1.0)", "rgba(255, 121, 24, 0.2)"];

      return ["rgba(255, 47, 47, 1.0)", "rgba(255, 47, 47, 0.2)"];
    },
    getAvgScore: function() {
      return this.scores.avgScore;
    },
    getAddress: function() {
      return this.scores.address;
    },
    getAvgScoreData: function() {
      return {
        datasets: [
          {
            data: [this.scores.avgScore, 100 - this.scores.avgScore],
            backgroundColor: this.getBackgroundColor(this.scores.avgScore),
            hoverBackgroundColor: this.getBackgroundColor(this.scores.avgScore)
          }
        ]
      };
    },
    getAvgScoreOptions: function() {
      return { events: {}, tooltips: { enabled: false } };
    },
    redirectToReport: function() {
      this.$router.push("/report");
    }
  }
};
</script>

<style lang="scss" scoped>
.score-page {
  section {
    background-color: #37a87a;
    min-height: 100vh;
    color: #fff;
    padding: 0;

    h1 {
      font-size: 32px;
      margin-bottom: 30px;
    }

    .address {
      font-size: 16px;
    }

    .score-panel {
      background-color: #fff;
      color: #242424;
      box-shadow: 0px 2px 40px rgba(0, 0, 0, 0.2);
      border-radius: 4px;

      .donut-chart {
        position: relative;

        p.score {
          position: absolute;
          font-size: 24px;
          left: 0;
          top: 0;
          right: 0;
          bottom: 0;
          display: flex;
          align-items: center;
          text-align: center;

          b {
            font-size: 32px;
          }
        }
      }
    }

    .find-out-why a {
      color: #fff;
    }
  }

  @media screen and (max-width: 767px) {
    section {
      padding-top: 180px;

      .score-panel .donut-chart p.score {
        font-size: 18px;

        b {
          font-size: 24px;
        }
      }
    }
  }
}
</style>