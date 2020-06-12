<template>
  <div class="report-page">
    <section>
      <b-container fluid>
        <b-row>
          <b-col class="pt-lg-5" cols="12">
            <h1 class="text-center">How will climate change affect your home?</h1>
          </b-col>

          <b-col class="address justify-content-center d-flex align-items-center mb-5" cols="12">
            <b-img class="mr-3" :src="eyeDropImgSrc" height="20" />
            {{scores.address}}
          </b-col>

          <b-col cols="12">
            <b-row class="m-auto score-panels p-4 rounded">
              <b-col cols="12">
                <h6 class="text-center text-uppercase">Your scorecard</h6>
              </b-col>

              <b-col class="avg-score mb-3" cols="12" lg="4">
                <h2 class="text-center mb-5">Moderate risk</h2>

                <div class="donut-chart">
                  <Doughnut :data="getScoreData(scores.avgScore)" :options="getScoreOptions()" />
                  <p class="m-0 score">
                    <span class="m-auto">
                      <b>{{scores.avgScore}}</b> / 100
                    </span>
                  </p>
                </div>
              </b-col>

              <b-col cols="12" lg="8">
                <b-row>
                  <b-col class="mb-3" cols="12" lg="4">
                    <div class="single-score border rounded px-3 py-4">
                      <h5 class="text-center text-uppercase">Drought</h5>
                      <h6 class="text-center">High risk</h6>

                      <div class="donut-chart mb-4">
                        <Doughnut
                          :data="getScoreData(scores.droughtScore)"
                          :options="getScoreOptions()"
                        />
                        <p class="m-0 score">
                          <span class="m-auto">
                            <b>{{scores.droughtScore}}</b>
                          </span>
                        </p>
                      </div>

                      <p class="summary text-center">
                        <small>
                          You have a
                          <b>44% higher</b> drought risk than average in
                          <b>California</b>
                          <br />Your risk level is forecasted to
                          <b>increase by 52%</b>
                        </small>
                      </p>
                    </div>
                  </b-col>

                  <b-col class="mb-3" cols="12" lg="4">
                    <div class="single-score border rounded px-3 py-4">
                      <h5 class="text-center text-uppercase">Temperature</h5>
                      <h6 class="text-center">Extreme risk</h6>

                      <div class="donut-chart mb-4">
                        <Doughnut
                          :data="getScoreData(scores.temperatureScore)"
                          :options="getScoreOptions()"
                        />
                        <p class="m-0 score">
                          <span class="m-auto">
                            <b>{{scores.temperatureScore}}</b>
                          </span>
                        </p>
                      </div>

                      <p class="summary text-center">
                        <small>
                          Any day that is
                          <b>82° F or more</b> is considered hot for your home.
                          <br />Historically, you’ve had
                          <b>4 hot days per year.</b> Your 30 year forecast is
                          <b>7 hot days per year.</b>
                        </small>
                      </p>
                    </div>
                  </b-col>

                  <b-col class="mb-3" cols="12" lg="4">
                    <div class="single-score border rounded px-3 py-4">
                      <h5 class="text-center text-uppercase">Fire</h5>
                      <h6 class="text-center">Very low risk</h6>

                      <div class="donut-chart mb-4">
                        <Doughnut
                          :data="getScoreData(scores.fireScore)"
                          :options="getScoreOptions()"
                        />
                        <p class="m-0 score">
                          <span class="m-auto">
                            <b>{{scores.fireScore}}</b>
                          </span>
                        </p>
                      </div>

                      <p class="summary text-center">
                        <small>
                          You have
                          <b>82% lower</b> fire risk than the average in
                          <b>California</b>.
                        </small>
                      </p>
                    </div>
                  </b-col>

                  <b-col class="mb-3" cols="12" lg="4">
                    <div class="single-score border rounded px-3 py-4">
                      <h5 class="text-center text-uppercase">Flood</h5>
                      <h6 class="text-center">Low risk</h6>

                      <div class="donut-chart mb-4">
                        <Doughnut
                          :data="getScoreData(scores.floodScore)"
                          :options="getScoreOptions()"
                        />
                        <p class="m-0 score">
                          <span class="m-auto">
                            <b>{{scores.floodScore}}</b>
                          </span>
                        </p>
                      </div>

                      <p class="summary text-center">
                        <small>
                          Your property
                          <b>is not affected</b> by coastal flooding.
                        </small>
                      </p>
                    </div>
                  </b-col>

                  <b-col class="mb-3" cols="12" lg="4">
                    <div class="single-score border rounded px-3 py-4">
                      <h5 class="text-center text-uppercase">Rain</h5>
                      <h6 class="text-center">Very high risk</h6>

                      <div class="donut-chart mb-4">
                        <Doughnut
                          :data="getScoreData(scores.rainScore)"
                          :options="getScoreOptions()"
                        />
                        <p class="m-0 score">
                          <span class="m-auto">
                            <b>{{scores.rainScore}}</b>
                          </span>
                        </p>
                      </div>

                      <p class="summary text-center">
                        <small>
                          When you get
                          <b>1.2”</b> in two days, it is considered extreme rain for your home.
                          <br />Historically, you’ve had
                          <b>10 extreme rain events</b> per year. Your forecast is
                          <b>2 more extreme rain events</b> per year every year.
                        </small>
                      </p>
                    </div>
                  </b-col>

                  <b-col class="mb-3 d-flex flex-column" cols="12" lg="4">
                    <h4 class="mt-auto">Science made actionable</h4>
                    <p>Climate Score taps trusted climate data from preeminent universities and government agencies. It is being developed by leading climate scientists.</p>
                  </b-col>
                </b-row>
              </b-col>
            </b-row>
          </b-col>

          <b-col cols="12">
            <p class="text-center text-uppercase full-report my-5">
              <NavLink to="/unlock">Get Your Full Report</NavLink>
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
import { mapActions, mapState } from "vuex";
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
    ...mapActions("score", ["getScores"]),
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
    getScoreData: function(score) {
      return {
        datasets: [
          {
            data: [score, 100 - score],
            backgroundColor: this.getBackgroundColor(score),
            hoverBackgroundColor: this.getBackgroundColor(score)
          }
        ]
      };
    },
    getScoreOptions: function() {
      return { events: {}, tooltips: { enabled: false } };
    }
  },
  mounted() {
    this.getScores();
  }
};
</script>


<style lang="scss" scoped>
.report-page {
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
  }

  .score-panels {
    background-color: #fff;
    color: #242424;

    .avg-score .donut-chart p.score b {
      font-size: 32px;
    }

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
          font-size: 36px;
        }
      }
    }

    .single-score {
      background-color: #fff;
      transition: all 0.2s ease-in-out;

      p.summary {
        display: none;
      }

      &:hover {
        transform: scale(1.05);
        position: absolute;
        z-index: 10;

        p.summary {
          display: block;
        }
      }
    }
  }

  .full-report a {
    color: #fff;
  }

  @media screen and (max-width: 767px) {
    section {
      padding-top: 180px;

      .score-panels {
        height: inherit;

        .avg-score .donut-chart p.score b {
          font-size: 24px;
        }

        .donut-chart p.score {
          font-size: 16px;

          b {
            font-size: 24px;
          }
        }

        .single-score:hover {
          position: relative;
        }
      }
    }
  }
}
</style>