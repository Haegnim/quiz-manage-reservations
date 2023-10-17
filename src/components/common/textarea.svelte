<script lang="ts">
  // export let buttonContent: string;
  export let customClass: string = '';
  export let name: string = 'example';
  let value: string = ''
  let isActive: boolean | undefined = false;
  let inputElement:HTMLInputElement | undefined
  function updateIsActive() {
    isActive = inputElement && inputElement === document.activeElement
  }
</script>

  <textarea id={`${name}InputField`} bind:value={value} placeholder="Add Note..."/>


{value}
<style> 
textarea{
  width: 100%;
  height: 260px;
  padding: 28px 20px;
    border-radius: 8px;
    border:#DBD9D7 1px solid;
}
</style>