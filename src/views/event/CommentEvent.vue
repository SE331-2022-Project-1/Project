<template>
  <h3>Patient Name: {{ event.name + " " + event.surname }}</h3>

  <div i-d-b-key-range="review-form">
    <form class="review-form" @submit.prevent="onSubmit">
      <label for="nameD">Docter Name:</label>
      <input id="nameD" v-model="nameD" />
      <label for="comment"> Comment to the patient:</label>
      <textarea id="comment" v-model="comment"></textarea>
      <input class="button" type="submit" value="Submit" />
    </form>
  </div>

  <div id="review-list">
    <h3>--- Docter Comment ---</h3>
    <ul>
      <a v-for="(review, index) in reviews" :key="index">
        Docter: {{ review.nameD }}
        <br />
        Comment: "{{ review.comment }}" <br />-----------------------<br />
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
      reviews: [
        {
          type: Array,
          required: true,
          nameD: "Pop",
          comment: "This paitent need is healthy as always.",
        },
      ],
      nameD: "",
      comment: "",
    };
  },
  methods: {
    addReview(review) {
      this.reviews.push(review);
      console.log(review);
    },
    onSubmit() {
      if (this.nameD === "" || this.comment === "") {
        alert("Review is incomplete. please fill out every filed.");
        return;
      }
      let docterComment = {
        nameD: this.nameD,
        comment: this.comment,
      };
      this.addReview(docterComment);

      this.nameD = "";
      this.comment = "";
      //flashMessage bruv Meme machine
      this.GStore.flashMessage = "your commit comment is " + review.comment;
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
};
</script>
