<template>
  <Page>
    <ActionBar>
      <Label text="Login"/>
    </ActionBar>

    <StackLayout>
      <Label class="info">
        <FormattedString>
          <Span class="fas" text.decode="&#xf135; "/>
          <Span :text="message"/>
        </FormattedString>
      </Label>
      <Button text="Login" @tap="$navigator.navigate('/home')" />
    </StackLayout>
  </Page>
</template>

<script lang="ts">
import Vue from "nativescript-vue";

export default Vue.extend({
  computed: {
    message() {
      return "LOGIN PAGE";
    }
  }
});
</script>

<style scoped lang="scss">
@import '@nativescript/theme/scss/variables/blue';

// Custom styles
.fas {
  @include colorize($color: accent);
}

.info {
  font-size: 20;
  horizontal-align: center;
  vertical-align: center;
}
</style>
