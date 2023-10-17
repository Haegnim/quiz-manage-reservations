<script lang="ts">
  import Button from '../../components/common/button.svelte';
  import Header from '../../components/layout/header.svelte';
  import BackIcon from '../../../static/keyboard_backspace.svg?raw'
  let title = window.location.pathname === '/edit' ? 'New Reservation' : 'Edit Reservation'

  let handleClick = ()=>{

  }
</script>

<Header {title}>
 <Button {handleClick}>
  {@html BackIcon}
 </Button>
</Header>

<slot></slot>

<style>


</style>