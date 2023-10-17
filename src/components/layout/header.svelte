<script lang="ts">
  import XmarkIcon from '../../../static/close.svg?raw'
  // let handleClick: (event: MouseEvent) => void;

  export let title: string;

</script>

<header>
  <slot></slot>
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