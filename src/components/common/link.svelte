<script lang="ts">
  export let route: string;
  export let customClass: string = '';

  $: combinedClass = `${customClass} btn`
</script>

<a href={route} class={combinedClass}>
  <slot></slot>
</a>

<style>
  .btn{
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 12px;
    padding: 16px ;
    box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.2);
    border-radius: 8px;
    background: linear-gradient(180deg, #FEFEFE 0%, #F8F8F7 57.29%, #F6F6F5 100%);
    font-size: 24px;
  }
  .orange {
    color: #EC551F;
  }
  .seated{
    color: #fff;
    background: linear-gradient(180deg, #EF7144 0%, #DF4C18 70%, #D94714 100%);
    flex: 7;
    justify-content:center;
  }
</style>