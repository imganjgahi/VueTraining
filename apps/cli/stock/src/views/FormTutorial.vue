<template>
  <div class="pageOne">
    <h1>form</h1>
    <FormWrapper group="update-form" v-cloak>
      <div class="formgroup" slot-scope="props">
          <fieldset>

              <legend>Personal Details</legend>

              <div class="formgroup">
                  <TextInput 
                  :group="props.group"
                  label="First Name"
                  :focus="true"
                  name="firstName" 
                  placeholder= "First Name"
                  v-model="props.fields.firstName"
                  maxlength="9"
                  autocomplete="given-name"
                  :validation="{
                    'required': 'field is required',
                    'min:2':'minimum is 2',
                    'max:5':'max is 5',
                  }"
                  :error="props.error"></TextInput>
              </div>
              <div class="formgroup">
                  <TextInput 
                  :group="props.group"
                  name="lastName" 
                  placeholder= "last Name"
                  v-model="props.fields.lastName"
                  maxlength="9"
                  autocomplete="given-name"
                  :validation="['required', 'min:3', 'max:50']"
                  :error="props.error"></TextInput>
              </div>
          </fieldset>
      <button type="submit">Submit</button>
      </div>
    </FormWrapper>
  </div>
</template>

<script>
import FormWrapper from "../components/Form/FormWrapper";
import TextInput from "../components/Form/Inputs/Text/TextInput";
export default {
  components: {
    FormWrapper,
    TextInput
    },
};
</script>