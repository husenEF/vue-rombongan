<template>
  <section class="">
    <h2 class="text-xl font-bold mb-4">Select Your Seats</h2>
    <div class="flex flex-col items-center w-full gap-4">
      <div class="w-full h-16 flex items-center gap-2 p-2 border-2 rounded-lg cursor-pointer"
        v-for="(seat, index) in seats" :key="index" :class="{
          'bg-green-500': seat.selected,
          'bg-gray-300': !seat.selected && !seat.booked,
          'bg-red-500': seat.booked,
        }" @click="toggleSeat(index)">
        <span>{{ index + 1 }}.</span>
        <span v-if="seat.booked">X</span>
        <span v-else>{{ index + 1 }}</span>
      </div>
    </div>
  </section>
</template>


<script setup lang="ts">
import { reactive } from 'vue'

const seatsData = Array.from({ length: 10 }, (_, index) => ({
  selected: false,
  booked: index % 5 === 0, // Example: every 5th seat is booked
}))

const seats = reactive(seatsData)
const toggleSeat = (index: number) => {
  if (!seats[index].booked) {
    seats[index].selected = !seats[index].selected
  }
}
</script>
