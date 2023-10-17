<script lang="ts">
  import Button from './common/button.svelte';
  import Link from './common/link.svelte'
  import Trash from '../../static/trash.svg?raw'
  import Phone from '../../static/phone.svg?raw'
  import Event from '../../static/event_available.svg?raw'
  import Group from '../../static/group.svg?raw'
  import Edit from '../../static/edit.svg?raw'
  export let data: {
    name: string,
    phoneNumber: string,
    guests: number,
    selectTable?: Array<number>,
    memo?: string,
    date: string,
    params: string
  }
  export let customClass = 'seated'
  const handleTrashClick = (event: MouseEvent) => {
    event.preventDefault();
     console.log('Trash button clicked');
     // 여기에 Trash 버튼을 클릭했을 때 수행할 동작을 작성합니다.
  };

  const handleSeatedClick = (event: MouseEvent) => {
    event.preventDefault();
     console.log('Seated button clicked');
     // 여기에 Seated 버튼을 클릭했을 때 수행할 동작을 작성합니다.
  };
</script>

<li>
  <a href={`/edit/${data.params}`} class="card-box">
    <div class="row mb-20 flex-g-20">
      <p class="bold">{data.name}</p>
      <span class="phone">{@html Phone} {data.phoneNumber}</span>
    </div>
    <div class="row mb-20">
      {@html Event}<p class="ml-8">{data.date}</p>
    </div>
    <div class="row mb-20">
      {@html Group}<p class="ml-8">{data.guests}</p>
    </div>


    {#if data.selectTable }
      <p class="c-gray font-16 mb-20">Reserved Table <span class="font-20 c-black">{data.selectTable.join(',')}</span> · Floor 1</p> 
      <p class="row mb-20 flex-g-20">{data.memo} {@html Edit}</p>
    {:else}
      <p>No Selected Table</p>
    {/if}
    <div class="row flex-g-20">
      <Button handleClick={handleTrashClick}>
        {@html Trash}
      </Button>

      <Button handleClick={handleSeatedClick} {customClass}>
        Seated
    
      </Button>
    </div>
  </a>
</li>

<style>
  .card-box{
    display: block;
    padding: 20px;
    width: 350px;
    /* height: 290px; */
    background-color: #fff;
    box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.2);
    border-radius: 8px;
    font-size: 20px;
    line-height: 20px;
  }
  .row{
    display: flex;
    align-items: center;

  }
  .flex-g-20{
    gap: 20px;
  }
  .mb-20{
    margin-bottom: 20px;
  }
  .ml-8{
    margin-left: 8px;
  }
  .c-gray{
    color:#57534E;
  }
  .c-black{
    color:#292524;
  }
  .font-16{
    font-size: 16px;
  }
  .font-20{
    font-size: 20px;
  }
  .bold{
    font-weight: bold;
  }
  .phone{
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 8px;
    padding: 12px 16px;
    box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.2);
    border-radius: 50px;
    background: linear-gradient(180deg, #FEFEFE 0%, #F8F8F7 57.29%, #F6F6F5 100%);
    color: #78716C;

  }
</style>