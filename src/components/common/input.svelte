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
<div class="input-box">
  <label for={`${name}InputField`} class:active={isActive}>name<span class="essential">*</span></label>
  <input type="text" id={`${name}InputField`} 
  bind:value={value} 
  on:input={updateIsActive}     
  bind:this={inputElement}
  on:focus={updateIsActive}
  on:blur={updateIsActive}/>

</div>
{value}
<style> 
  .input-box{
    position: relative;
    flex: 1;
  }
  .essential{
    color:#EC551F;
    margin-left: 8px;
  }
  label{
    position: absolute;
    top: 50%;
    left: 16px;
    transform: translate(0,-50%);
    color: #ADA7A4;
    padding: 8px;
    background-color: #fff;
    border-radius: 20px;
    transition: all 0.3s ease-in-out;

  }
  .active{
    transform: translate(0, -140%);
  }
  input{
    width: 100%;
    padding: 28px 20px;
    border-radius: 8px;
    border:#DBD9D7 1px solid;
  }
  input:focus{
    outline: none;
  }
</style>