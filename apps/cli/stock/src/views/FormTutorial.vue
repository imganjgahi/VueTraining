<template>
  <div class="pageOne">
    <h1>form</h1>
    <FormWrapper group="update-form" v-cloak>
      <div class="formgroup" slot-scope="props">
          <fieldset>

              <legend>Personal Details</legend>

              <div class="formgroup">
                  <label for="firstName"> First Name </label>
                  <input 
                  type="text" 
                  name="firstName" 
                  id="firstName" 
                  v-model="props.fields.firstName"
                  >
              </div>
          </fieldset>
      </div>
    </FormWrapper>
  </div>
</template>

<script>
import FormWrapper from "../components/Form/FormWrapper";
export default {
  components: {FormWrapper},
};
</script>