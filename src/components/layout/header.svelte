<script>
  import Button from '../common/button.svelte'
  import PlusIcon from '../../../static/add.svg?raw'
  import XmarkIcon from '../../../static/close.svg?raw'
  let buttonContent = 'new reservation'
  let handleClick
  export let title;
  let customClass = 'orange'
</script>

<header>
  <Button {handleClick} {customClass}>
  {@html PlusIcon}
    new reservation
  </Button>
  <h1>{title}</h1>
  <button class="x-mark-btn">  {@html XmarkIcon}</button>
</header>

<style>
  header{
    width: 100%;
    height: 100px;
    display: flex;
    justify-content: space-between;
    position: relative;
    padding: 20px ;
  }
  h1{
    position:absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    color:#57534E;
    font-weight: normal;
    font-size: 36px;
  }
  .x-mark-btn{
    padding: 10px 12px;
  }
</style>