<template>
  <h3>Patient Name: {{ event.name + " " + event.surname }}</h3>

  <div class="review-form">
    <form class="review-form" @submit.prevent="onSubmit">
      <label for="nameD">Docter Name:</label>
      <input id="nameD" v-model="nameD" />
      <label for="comment"> Comment to the patient:</label>
      <textarea id="comment" v-model="comment"></textarea>
      <input class="button" type="submit" value="Submit" />
    </form>
  </div>

  <div class="review-list">
    <h3>Reviews List</h3>
    <div>
      <a v-for="(review, index) in reviews" :key="index">
        {{ this.nameD }}
        <br />
        "{{ this.comment }}"
      </a>
    </div>
    <ul>
      <a v-for="(review, index) in reviews" :key="index">
        {{ this.nameD }}
        <br />
        "{{ this.comment }}"
      </a>
    </ul>
  </div>

  <div>
    <!-- <review-form @review-submitted="addReview"></review-form>
<review-list v-if="reviews.length" :reviews="reviews"></review-list> -->
    <button @click="dummy">dummy target</button>
  </div>
</template>

<script>
export default {
  props: ["id", "event"],
  reviews: {
    type: Array,
    required: true,
  },
  inject: ["GStore"],
  data() {
    return {
      reviews: [],
      nameD: "",
      comment: "",
    };
  },
  methods: {
    onSubmit() {
      console.log(this.nameD);
      console.log(this.comment);
      if (this.nameD === "" || this.comment === "") {
        alert("Review is incomplete. please fill out every filed.");
        return;
      }
      let docterComment = {
        nameD: this.nameD,
        comment: this.comment,
      };
      this.$emit("review-submitted", docterComment);

      this.nameD = "";
      this.comment = "";
      //flashMessage bruv Meme machine
      this.GStore.flashMessage = "your commit comment is " + this.comment;
      console.log("eyyo inject done");
      setTimeout(() => {
        this.GStore.flashMessage = "";
      }, 3000);
    },
    dummy() {
      this.GStore.flashMessage = "test";
      console.log("eyyo inject done");
      setTimeout(() => {
        this.GStore.flashMessage = "Oh yeah cock and balls";
      }, 3000);
    },
  },
  addReview(review) {
    this.reviews.push(review);
    console.log(review);
  },
};
</script>
