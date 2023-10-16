<script>
  import Header from '../components/layout/header.svelte';
  import ReservationCard from '../components/reservationCard.svelte';
  let title = 'Reservation'
  let data = {
    name : 'David',
    phoneNumber: '021-523-4521',
    guests: 3,
    selectTable: [7,8],
    memo: 'Birthday',
    date: '2015-02-29',
    params: '123'
  }
</script>
<Header {title}/>
<div class="reservation-container">
  <ul>

    <ReservationCard 
    {data}
    />
  </ul>

</div>
<style>
.reservation-container{
  background-color: #F5F5F4;
  padding: 20px;
  height: calc(100% - 90px);
}
</style>