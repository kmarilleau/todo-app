<template>
    <Modal ref="modal">
        <form class="app-form">
          <div class="form-control">
            <label class="label">Title</label>
            <input
              v-model="form.title"
              class="form-input"
              type="text
            ">
          </div>
          <div class="form-control form-control-last">
            <label class="label">Description</label>
            <textarea
              v-model="form.description"
              class="form-input"
              cols="30"
              row="5"
            >
            </textarea>
          </div>
          <div class="app-error">
              <div class="form-error">
                {{ formError }}
              </div>
          </div>
          <button
            @click="submitForm"
            class="app-button is-success"
            type="button"
          >
            &#x2714;
          </button>
        </form>
    </Modal>
</template>

<script>
import Modal from "@/components/Modal";

export default {
  components: {
    Modal
  },
  data() {
    return {
      form: {
        title: "",
        description: ""
      },
      formError: ""
    };
  },
  computed: {
    isFormValid() {
      return this.form.title.trim().length > 5 &&
        this.form.description.trim().length > 10
        ? true
        : false;
    }
  },
  methods: {
    resetForm() {
      this.form = {
        title: "",
        description: ""
      };
    },
    submitForm() {
      if (this.isFormValid) {
        this.$emit("formSubmitted", {...this.form});
        this.$refs.modal.close();
        this.resetForm();
      } else {
        this.formError =
          "Length of title should be 8 chars and 10 chars for description";
      }
    }
  }
};
</script>

<style scoped lang="scss">
.form-error {
  margin-bottom: 10px;
}
</style>
