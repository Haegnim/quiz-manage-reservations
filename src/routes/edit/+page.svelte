<script>
 import Input from '../../components/common/input.svelte'
 import Textarea from '../../components/common/textarea.svelte';
 import Button from '../../components/common/button.svelte';
 import Selecter from '../../components/common/selecter.svelte';
 import PlusIcon from '../../../static/math-plus.svg?raw';
 import MinusIcon from '../../../static/math-minus.svg?raw';
 let handleClick =()=>{

 }
 let customClass = 'flex-1'
 let count = 0

</script>

<div class="row w-100 mb-70">
  <Input />
  <Input />
  <Button {handleClick} {customClass}>Select Date</Button>
</div>

<div class="row w-100 mb-70">
  <div class="row">
    Guests
  <Button {handleClick} {customClass}>{@html PlusIcon}</Button>
{count}
  <Button {handleClick} {customClass}>{@html MinusIcon}</Button>
  </div>
  <Selecter>Select Table</Selecter>
</div>
<div class="row w-100 mb-70">
  <Textarea />
</div>
<div class="row w-100 mb-70">
  <Button {handleClick} {customClass}>{@html MinusIcon}</Button>
</div>
<style>
.w-100{
  width: 100%;
}
.row{
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
}
.mb-70{
  margin-bottom: 70px;
}
</style>